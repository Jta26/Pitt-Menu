import Link from 'next/link';
import Head from 'next/head';
import DateObj from '../comps/DateObject';
import Content from '../comps/Content';
import Header from '../comps/Header';
import blogs from '../data/blogs.json';
import moment from 'moment';
import { StickyContainer } from 'react-sticky';
import Scrollbars from 'react-scrollbars-custom';
const indexStyles = {
    fontFamily: 'Lato',
    flex: 1,
    overflowY: 'hidden',
    backgroundImage: 'url(https://raw.githubusercontent.com/Jta26/JoelAustin.Net/master/public/JoelAustin.Net/Images/CityColor.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}
const container = {
    width: '70%',
    margin: 'auto',
    marginTop: 50,
    backgroundImage: " linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 1%, rgba(255,255,255,1) 100%)"
}
const navContainerStyles = {
    flexDirection: 'row',
    height: '91vh',
    overflowY: 'hidden',
    outline: 'none',
    width: '300px',
    float: 'left',
    paddingLeft: 30
    
}
const contentStyles = {
    flexDirection: 'row',
    
}


const navStyles = {
    marginTop: 20
}

const linkStyles = {
    textDecorationLine: 'none', paddingTop: 10, outline: 'none'
}

export default class index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedBlogTitle: '',
            selectedBlogDate: '',
            selectedBlogParagraphs: [],
            selectedBlogImages: [],
            hover: false
        }
    }
    componentWillMount() {
            this.setState({
                selectedBlogTitle: blogs[blogs.length - 1].title,
                selectedBlogDate: blogs[blogs.length - 1].date,
                selectedBlogParagraphs: blogs[blogs.length - 1].paragraphs,
                selectedBlogImages: blogs[blogs.length - 1].images
            })
    }
    render() {
        var blogList = blogs.map((blog, index) => {
            return(
                <div style={navStyles}
                >
                <StickyContainer>
                    <Link href='/'>
                        <a onClick={() => this.setState({
                        selectedBlogTitle: blog.title,
                        selectedBlogDate: blog.date,
                        selectedBlogParagraphs: blog.paragraphs,
                        selectedBlogImages: blog.images
                        })}
                        style={{textDecorationLine: 'none'}}
                        >
                        <DateObj
                            title={blog.title}
                            week={blog.week}
                            date={moment(blog.date).format('MMMM Do YYYY')}
                        />
                        </a>
                    </Link>
                </StickyContainer>
                </div>
            ) 
           });
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
            <div style={container}>
            <Scrollbars style={navContainerStyles}>
                {blogList}
            </Scrollbars>
            <Content
                title={this.state.selectedBlogTitle}
                date={moment(this.state.selectedBlogDate).format('MMMM Do YYYY')}
                paragraphs={this.state.selectedBlogParagraphs}
                images={this.state.selectedBlogImages}
            />
            </div>

        </div>
      )  
    }
    
}