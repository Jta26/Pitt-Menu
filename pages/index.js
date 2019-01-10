import Link from 'next/link';
import Head from 'next/head';
import DateObj from '../comps/DateObject';
import Content from '../comps/Content';
import Header from '../comps/Header';
import blogs from '../data/blogs.json';
import moment from 'moment';
import {StickyContainer, Sticky} from 'react-sticky';
import Scrollbars from 'react-scrollbars-custom';
const indexStyles = {
    fontFamily: 'Lato',
    flex: 1,

}
const navContainerStyles = {
    flexDirection: 'row',
    height: '95vh',
    overflowY: 'hidden',
    backgroundColor: 'rgba(51,54,59,1)',
    outline: 'none',
    width: '300px',
    float: 'left',
    textDecorationLine: 'none'
}
const contentStyles = {
    flexDirection: 'row',
}


const navStyles = {
}
const hoverStyles = {
    opacity: '.7'
}
const linkStyles = {
    textDecorationLine: 'none', paddingTop: 10, outline: 'none'
}
export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedBlogTitle: '',
            selectedBlogDate: '',
            selectedBlogContent: [],
            hover: false
        }
        this.hoverToggle = this.hoverToggle.bind(this)
    }
    hoverToggle() {
        this.setState({hover: !this.state.hover})
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
                        selectedBlogParagraphs: blog.paragraphs
                        })}
                        onMouseEnter = {this.hoverToggle}
                        onMouseLeave = {this.hoverToggle}
                        style={this.state.hover ? hoverStyles : {opacity: '1'}}
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
                <style jsx global>{`
                    * { 
                        margin:0;
                        padding:0;
                        }`
                }</style>
            </Head>
            <Header/>
            <Scrollbars style={navContainerStyles}>
                {blogList}
            </Scrollbars>

            <Content
                title={this.state.selectedBlogTitle}
                date={moment(this.state.selectedBlogDate).format('MMMM Do YYYY')}
                paragraphs={this.state.selectedBlogParagraphs}
            />
        </div>
      )  
    }
    
}