import Typed from 'typed.js';
import Link from 'next/link'
const headerContainerStyles = {
    backgroundColor: 'rgba(0,0,0,0)',
    height: '26px',
    paddingBottom: 0,
    paddingTop: 10
}
const titleStyles = {
    textAlign: 'right',
    fontSize: '2em',
    marginRight: 20,
    fontFamily: 'Lato',
    color: '#FFF'
}
const selectionStyle = {
    textAlign: 'center',
    fontFamily: 'Lato',
    color: '#fff',
    float: 'left',
    display: 'flex',
    flexDirection: 'row'

}
const linkStyle = {
    textAlign: 'center',
    marginRight: 10,
    marginleft: 10,
    paddingLeft: '20px',
    fontSize: '2em',
    textDecorationLine: 'none',
    color: '#FFF'
}
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: 0
        }
    }
    componentDidMount() {
        var options = {
            strings: ["Joel Austin.Net"],
            typeSpeed: 50,
            showCursor: false
        }
        var typed = new Typed(".typed", options)
    }
    render() {
        return(
            <div style={headerContainerStyles}>
                <div style={selectionStyle}>
                <div style={this.state.hover == 1 ? {opacity: '0.5'} : {opacity: '1'}}
                        onMouseEnter = {() => {
                            this.setState({hover: 1})
                        }}
                        onMouseLeave = {() => {
                            this.setState({hover: 0})
                        }}>
                    <Link href='/'>
                    <a style={linkStyle}>Blog</a>

                    </Link>
                    </div>
                    <div style={this.state.hover == 2 ? {opacity: '0.5'} : {opacity: '1'}}
                        onMouseEnter = {() => {
                            this.setState({hover: 2})
                        }}
                        onMouseLeave = {() => {
                            this.setState({hover: 0})
                        }}>
                    <Link href='/resume'>
                    <a style={linkStyle}>Resume</a>
                    
                    </Link>
                    </div>
                        <div style={this.state.hover == 3 ? {opacity: '0.5'} : {opacity: '1'}}
                            onMouseEnter = {() => {
                                this.setState({hover: 3})
                            }}
                            onMouseLeave = {() => {
                                this.setState({hover: 0})
                            }}>
                        <Link href='http://github.com/jta26'>
                        <a style={linkStyle}>GitHub</a>
                        </Link>
                    </div>
                    <div style={this.state.hover == 4 ? {opacity: '0.5'} : {opacity: '1'}}
                        onMouseEnter = {() => {
                            this.setState({hover: 4})
                        }}
                        onMouseLeave = {() => {
                            this.setState({hover: 0})
                        }}>
                    <Link href='https://www.linkedin.com/feed/'>
                    <a style={linkStyle}>LinkedIn</a>
                    </Link>
                    </div>
                </div>
                <p className='typed' style={titleStyles}></p>
            </div>
        )
    }
}