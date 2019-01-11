

const dateTitleStyle = {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Mukta',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'column',
    marginTop: 10,
    marginBottom: 10,

    textDecorationLine: 'none',
    color: '#FFF'
}
const datePStyle = {
    float: 'left',
    fontSize: 14,
    //color: '#b2ac75',
    color: '#cdbc70',
    marginLeft: 22,
    marginRight: 22,
    fontFamily: 'Mukta',
    
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
                <div style={{display: 'flex', justifyContent:'space-between', flexDirection: 'row'}}>
                <p style={datePStyle}>Week {this.props.week}</p>
                <p style={datePStyle}>{this.props.date}</p>
                </div>
            </div>
        )
    }
};