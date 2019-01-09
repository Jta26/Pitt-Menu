const contentStyle = {
    backgroundColor: '#DFDCE3;',
    height: '100vh',
    overflowY: 'scroll',
    display: 'flex',
    
    justifyContent:'center',
}
const contentContainer = {
    width: '85%',
    backgroundColor: '#4ABDAC',
    marginTop: 100,
    padding: 25,
    borderRadius:30,
   
}

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            date: this.props.date,
            content: this.props.content
        }
    }
    componentWillReceiveProps(props) {
        this.setState({
            title: this.props.title,
            date: this.props.date,
            content: this.props.content
        })
    }
    render() {
        
        return (
            <div style={contentStyle}>
                <div style={contentContainer}>
                    <div>
                        <h1 style={{fontFamily: 'Bree Serif', textAlign: 'center', fontSize: 40}}>{this.state.title}</h1>
                        <h4>{this.state.date}</h4>
                        <p style={{marginTop: 50}}>{this.state.content}</p>
                        <p style={{marginTop: 50}}>{this.state.content}</p>
                    </div>
                </div>
                
            </div>
        )
    }

}