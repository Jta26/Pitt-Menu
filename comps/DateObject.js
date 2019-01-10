

const dateObjStyle = {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Fjalla One',
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'column',
    marginTop: 20,
    
}
const datePStyle = {
    opacity: 0.6, float: 'left',
    fontSize: 15,
    color: 'rgb(126,188,89)',
    
}
const DateObj = (props) => (
    <div style={dateObjStyle}>
        <p>{props.title}</p>
        <div style={{display: 'flex', justifyContent:'space-between', flexDirection: 'row'}}>
        <p style={datePStyle}>Week {props.week}</p>
        <p style={datePStyle}>{props.date}</p>
    </div>
    </div>
);

export default DateObj;