import Typed from 'typed.js';

const headerContainerStyles = {
    backgroundColor: '#1c2957',
    height: '40px',
    paddingBottom: 0
}
const titleStyles = {
    textAlign: 'right',
    fontSize: '2em',
    marginRight: 20,
    fontFamily: 'Noto Serif TC',
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
            strings: ["Joel Austin | Capstone Blog"],
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