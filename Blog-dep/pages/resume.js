import Header from '../comps/Header'
import Head from 'next/head'
import Scrollbars from 'react-scrollbars-custom';


const indexStyles = {
    fontFamily: 'Lato',
    flex: 1,
    overflowY: 'hidden',
    backgroundImage: 'url(https://raw.githubusercontent.com/Jta26/JoelAustin.Net/master/public/JoelAustin.Net/Images/CityColor.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}
export default class resume extends React.Component {





    constructor(props) {
        super(props);

    }



    render() {
        return(
            <div style={indexStyles}>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Bree+Serif" rel="stylesheet"/> 
                <link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet"/> 
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet"/> 
                <style>{`
                    * { 
                        margin:0;
                        padding:0;
                        }`
                }</style>
            </Head>
            <Header/>
                <Scrollbars style={{backgroundColor:'#FFF', width: '70%', margin: 'auto', marginTop: 50, height: '90vh', overflow: 'scroll'}}>
                    <img src="https://i.imgur.com/etub9oK.png" style={{width: '100%'}}/>
                </Scrollbars>
                
            </div>
        )
    }
}