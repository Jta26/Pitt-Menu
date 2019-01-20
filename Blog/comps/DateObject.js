const dateTitleStyle = {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Lato',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'column',
    marginTop: 10,
    marginBottom: 10,
    color:'#000',
    textDecorationLine: 'none',
}
const datePStyle = {
    float: 'left',
    fontSize: 12,
    //color: '#b2ac75',
    color: '#000',
    marginLeft: 22,
    marginRight: 22,
    fontFamily: 'Lato',
    
    
}
export default class DateObj extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
        this.hoverToggle = this.hoverToggle.bind(this);
    }
    hoverToggle() {
        this.setState({hover: !this.state.hover})
    }
    render() {
        return(
            <div style={this.state.hover ? {opacity: '0.5'} : {opacity: '1'}}
            onMouseEnter = {this.hoverToggle}
            onMouseLeave = {this.hoverToggle}
            >
                <p style={dateTitleStyle}>{this.props.title}</p>
                <div style={{display: 'flex', justifyContent:'center'}}>
                <p style={datePStyle}>Week {this.props.week}</p>
                <p style={datePStyle}>{this.props.date}</p>
                </div>
            </div>
        )
    }
};