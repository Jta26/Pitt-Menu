import Typed from 'typed.js';

const headerContainerStyles = {
    backgroundColor: 'rgba(51,54,59,0.9)',
    height: '5vh',
    outline: '1px solid black'
}
const titleStyles = {
    textAlign: 'right',
    fontSize: '2em',
    marginRight: 20,
    fontFamily: 'Fjalla One',
    paddingTop: 5,
    color: '#fff'
}

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        var options = {
            strings: ["Joel Austin Capstone Blog"],
            typeSpeed: 50,
            showCursor: false
        }
        var typed = new Typed(".typed", options)
    }
    render() {
        return(
            <div style={headerContainerStyles}>
                <p className='typed' style={titleStyles}></p>
            </div>
        )
    }
}