import Scrollbars from 'react-scrollbars-custom';
import Gallery from 'react-photo-gallery';
import LightBox from 'react-images';
const titleStyles = {
    backgroundColor:'#4f4f4f',
    fontFamily: 'Mukta',
    height: '20vh',
    color: '#FFF',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'Center',
    flexDirection: 'column',

}
const contentStyle = {
    height: '94vh',
    overflowY: 'hidden',
    backgroundColor: '#FFF',
    backgroundImage: `Url(${'https://i.imgur.com/IQfMFfo.png'})`,
    backgroundSize: 'cover',
    borderLeft: '1px solid white'
}
const contentContainer = {
    backgroundColor: '#FFF',
    padding: 25,
    color: '#000',
    width: '75%',
    margin: 'auto',
    marginTop: '10vh',

}
const paraStyles = {
    marginTop: 50,
    opacity: '.9999',
}
export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            date: props.date,
            paragraphs: props.paragraphs.toString().split("\n").map((i, key) => {
                return <p key={key}>{i}</p>
            }),
            images: props.images,
            currentImage: 0
        }
        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.goToNext = this.goToNext.bind(this);
        this.goToPrevious = this.goToPrevious.bind(this);
    }
    componentWillReceiveProps(props) {
        this.setState({
            title: props.title,
            date: props.date,
            paragraphs: props.paragraphs.toString().split("\n").map((i, key) => {
                return <p key={key}>{i}</p>
            }),
            images: props.images
        });
    }
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        });
    }
    goToPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1
        });
    }
    goToNext() {
        this.setState({
            currentImage: this.state.currentImage + 1
        });
    }
    render() {
        var paras = this.state.paragraphs
        return (
            <Scrollbars style={contentStyle}>
                <div style={titleStyles}>
                <p style={{textAlign: 'center', paddingTop: 10, fontSize: 30}}>{this.state.date}</p>
                <p style={{textAlign: 'center', fontSize: 50}}>{this.state.title}</p>
                </div>
                <div style={contentContainer}>
                    <div style={{width: '80%', margin: 'auto', marginTop: 35, marginBottom: 35, fontFamily: 'Noto Sans', lineHeight: 2}}>
                        <p>{this.state.paragraphs}</p>
                        <div>
                        <Gallery photos={this.state.images} direction={'column'} onClick={this.openLightbox}/>
                        <LightBox images={this.state.images}
                            onClose={this.closeLightbox}
                            onClickPrev={this.goToPrevious}
                            onClickNext={this.goToNext}
                            currentImage={this.state.currentImage}
                            isOpen={this.state.lightboxIsOpen}
                        />
                        </div>
                    </div>
                </div>
            </Scrollbars>
        )
    }

}