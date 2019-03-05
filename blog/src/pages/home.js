import React, { Component } from 'react';
import '../css/home.css';
import Typed from 'react-typed';
import Fade from 'react-reveal';
import { Grid, Image, Divider, Container } from 'semantic-ui-react';


import csharp from '../img/csharp.png';
import jsimg from '../img/js.png';
import pyimg from '../img/py.png';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [[csharp, 'I have completed a number .NET form and console applications, as well as ASP.NET Web Apps.' ], [jsimg, 'memo2'],[pyimg, 'memo3']]
        }
    }

    componentDidMount() {

    }
    render() {
        return(
            <div className='container'>
                <div className='top'>
                    <div className='typed'>
                    <Typed
                        strings={['Developer', 'Programmer', 'Joel Austin^2000.Net']}
                        typeSpeed={80}
                        backspeed={50}
                    />
                    </div>
                </div>
                <Fade bottom>
                    <div className='skills'>

                        <Grid columns={3} stackable divided>
                            <Grid.Row>
                                {this.state.images.map((img) => {
                                return (
                                    <Grid.Column>
                                        <Grid columns={2}>
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <Image src={img[0]} size='small'/>
                                                    
                                                </Grid.Column>
                                                <Grid.Column>
                                                <h1>{img[1]}</h1> 
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>

                                    </Grid.Column>
                                )
                            })}
                            </Grid.Row>
                        </Grid>
                    </div>
                </Fade>



            </div>
        )
    }
}

export default Home