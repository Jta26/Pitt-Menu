

const dateObjStyle = {
    color: 'black',
    fontSize: 17,
    textAlign: 'center',
    border: '3px solid #DFDCE3',
    padding: 5,
    paddingLeft: 100,
    paddingRight: 100,
    marginLeft: 20,
    marginRight: 20
}

const DateObj = (props) => (
    <div style={dateObjStyle}>
        <p>{props.title}</p>
        <p style={{opacity: 0.6}}>{props.date}</p>
    </div>
);

export default DateObj;