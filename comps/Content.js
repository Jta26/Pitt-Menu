import Scrollbars from 'react-scrollbars-custom';
var imgUrl = '../data/images/bckrnd.png';

const titleStyles = {
    marginTop: 20,
    backgroundColor:'rgba(51,54,59,0.9)',
    fontFamily: 'Fjalla One'
}
const contentStyle = {
    height: '95vh',
    overflowY: 'hidden',
    color: 'white',
    backgroundImage: `url(${'https://i.imgur.com/96u67GB.png'})`,
    backgroundSize: 'cover',

}
const contentContainer = {
    backgroundColor: 'rgba(51,54,59,0.9)',
    marginTop: '10vh',
    padding: 25,
}
const paraStyles = {
    marginTop: 40,
    opacity: '.9999'
}

export default class Content extends React.Component {
    paragraphs = [];
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            date: props.date,
            paragraphs: props.paragraphs
        }

    }
    componentWillReceiveProps(props) {
        this.setState({
            title: props.title,
            date: props.date,
            paragraphs: props.paragraphs
        });
    }
    paraGen() {
        return (
            <p style={paraStyles}>{para}</p>
        )
    }
    render() {
        return (
            <Scrollbars style={contentStyle}>
                <div style={titleStyles}>
                <h4 style={{textAlign: 'center', paddingTop: 10}}>{this.state.date}</h4>
                <h1 style={{textAlign: 'center', fontFamily:'Fjalla One', lineHeight: 3, fontSize: 40}}><b>{this.state.title}</b></h1>
                </div>
                <div style={contentContainer}>
                    <div style={{width: '75%', margin: 'auto'}}>
                        <p>{this.state.paragraphs}</p>
                    </div>
                </div>
            </Scrollbars>
        )
    }

}