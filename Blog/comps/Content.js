import Scrollbars from 'react-scrollbars-custom';
import Gallery from 'react-photo-gallery';
import LightBox from 'react-images';
const titleStyles = {
    fontFamily: 'Mukta',
    fontWeight: 'bold',
    margin: 'auto',
    justifyContent: 'Center',
    flexDirection: 'column',
    color: '#000',
    marginTop: 50,
}
const contentStyle = {
    height: '91vh',
    overflowY: 'hidden',
    //backgroundImage: `Url(${'https://i.imgur.com/IQfMFfo.png'})`,
    backgroundSize: 'cover',
}
const contentContainer = {
    color: '#000',
    margin: 'auto',
    width: '65%'
}
export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            date: props.date,
            paragraphs: props.paragraphs.toString().split("\n").map((i, key) => {
                return <p style={{marginTop: 10}} key={key}>{i}</p>
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
                
                <p style={{textAlign: 'center', fontSize: 50}}>{this.state.title}</p>
                <p style={{textAlign: 'center', paddingTop: 10, fontSize: 20, opacity: '0.5'}}>{this.state.date}</p>
                </div>
                <div style={contentContainer}>
                    <div style={{margin: 'auto', marginTop: 35, marginBottom: 35, fontFamily: 'Noto Sans', lineHeight: 2}}>
                        <div>{this.state.paragraphs}</div>
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