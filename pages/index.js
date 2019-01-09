import Link from 'next/link';
import Head from 'next/head';
import DateObj from '../comps/DateObject';
import Content from '../comps/Content';
import blogs from '../data/blogs.json';
import moment from 'moment';
import {StickyContainer, Sticky} from 'react-sticky';


const indexStyles = {
    fontFamily: 'Lato',
    flex: 1,

}
const navContainerStyles = {
    flexDirection: 'row',
    float: 'left',
    height: '100vh',
    overflowY: 'scroll',

}
const contentStyles = {
    flexDirection: 'row',
}


const navStyles = {
    backgroundColor: '   '
}
export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedBlogTitle: '',
            selectedBlogDate: '',
            selectedBlogContent: []
        }
    }
    render() {
        var blogList = blogs.map((blog, index) => {
            return(
                <div style={navStyles}>
                <StickyContainer>
                    <Link href='/'>
                        <a onClick={() => this.setState({
                        selectedBlogTitle: blog.title,
                        selectedBlogDate: blog.date,
                        selectedBlogContent: blog.content
                        })}
                        style={{textDecorationLine: 'none'}}>
                        <DateObj
                            title={blog.title}
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
                <style jsx global>{`
                    * { 
                        margin:0;
                        padding:0;
                        
                        }`
                }</style>
            </Head>
            <div style={navContainerStyles}>
                {blogList}
            </div>
            <Content
                title={this.state.selectedBlogTitle}
                date={moment(this.state.selectedBlogDate).format('MMMM Do YYYY')}
                content={this.state.selectedBlogContent}
            />
        </div>
      )  
    }
    
}