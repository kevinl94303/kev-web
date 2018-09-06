import React, { Component } from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

const FeatureWrapper = styled.div`
    grid-column: span 12;
    height: 100vw;
    @media only screen and (min-width: 480px){
        height: 50vw;
    }
    @media only screen and (min-width: 768px){
        grid-column: span 4;
        height: 30vw;
    }
    overflow: hidden;
    position: relative;
`

const StyledFeature = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FeatureBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.9)),url("${props => props.item.background}");
    background-size: cover;
    background-blend-mode: multiply;
    &:hover{
        filter: blur(5px);
        transform: scale(1.07);
    }
`

const VICEFeatureBackground = styled(FeatureBackground)`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.9)),url("${props => props.item.background}");
    background-size: cover;
    background-blend-mode: multiply;
    background-position: center bottom;
    &:hover{
        filter: blur(5px);
        transform: scale(1.07);
    }
`

const FeatureName = styled.div`
    position: absolute;
    text-align: center;
    font-size: 2rem;
    color: white;
    text-shadow: 2px 2px 5px #888888;
    pointer-events: none;
`

class Feature extends Component{
    constructor(props){
        super(props)
        this.state = {showBlurb: false}
    }

    toggleBlurb = ()=>{
        this.setState({showBlurb: !this.state.showBlurb})
    }

    render() {
        const {props: {item}} = this;
        return(
            <StyledFeature onClick={this.toggleBlurb}>
                <FeatureBackground item={featureItems[item]}/>
                <FeatureName>{featureItems[item].name}</FeatureName>
                <FeatureMobileBlurb showBlurb={this.state.showBlurb}>{featureItems[item].blurb}</FeatureMobileBlurb>
            </StyledFeature>
        )
    }
}

class VICEFeature extends Component{
    constructor(props){
        super(props)
        this.state = {showBlurb: false}
    }

    toggleBlurb = ()=>{
        this.setState({showBlurb: !this.state.showBlurb})
    }

    render() {
        const {props: {item}} = this;
        return(
            <StyledFeature onClick={this.toggleBlurb}>
                <VICEFeatureBackground item={featureItems[item]}/>
                <FeatureName>{featureItems[item].name}</FeatureName>
                <FeatureMobileBlurb showBlurb={this.state.showBlurb}>{featureItems[item].blurb}</FeatureMobileBlurb>
            </StyledFeature>
        )
    }
}

const ContentContainer = styled.div`
    width: 100vw;
`
const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-auto-rows: min-content;
`

const Intro = styled.div`
    grid-column: span 12;
    height: calc(30vh - 50px);
    padding-top: 50px;
    @media only screen and (min-width: 768px){
        padding-top: 0;
        grid-column: 2/5;
        height: 100vh;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    text-shadow: 2px 2px 5px #888888;
    background: white;
`

const IntroBlurb = styled.div`
    grid-column: span 12;
    height: calc(70vh + 50px);
    margin-top: -50px;
    padding: 0 5% 0 5%;
    font-size: 1.75rem;
    @media only screen and (min-width: 768px){
        margin-top: 0;
        padding: 0;
        grid-column: 6/13;
        height: 100vh;
        font-size: 2rem;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    & a{
        color: inherit;
    }
    & a:hover{
        text-shadow: 2px 2px 5px #888888;
    }
    background: white;
`

const FeaturedTitle = styled.div`
    grid-column: 1/13;
    height: 80vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    @media only screen and (min-width: 480px){
        height: 40vw;
    }
    @media only screen and (min-width: 768px){
        font-size: 4rem;
        height: 20vw;
    }
    color: white;
    text-shadow: 2px 2px 5px #888888;
    background: linear-gradient(black, #333);
`

const StyledFeatureBlurb = styled.div`
    grid-column: 1/13;
    position: relative;
    height: 0;
    height: ${props => props.isContent ? '20vw' : 0};
    transition: height 1s;
    font-size: 1.2rem;
    @media only screen and (max-width: 768px){
        display: none;
    }
    color: white;
    background: black;
    & a{
        color: inherit;
    }
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    & .blurbText{
        margin: 5%;
    }
`

const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    font-size: 2rem;
    cursor: pointer;
`

class FeatureBlurb extends Component {
    render(){
        let isContent = this.props.currItem && this.props.currItem.blurb ? true : false;
        return <StyledFeatureBlurb isContent = {isContent}>
            <CloseButton onClick = {()=>{this.props.setFeaturedContent("")}}>&times;</CloseButton>
            <div className="blurbText">{this.props.currItem && this.props.currItem.blurb}</div>
        </StyledFeatureBlurb>
    }
}

const featureItems = {
    nsop2018 : {
        name: "Columbia Orientation Guide 2018",
        background: "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FGCK2XX7JJBR7IOXRJMUOIUCC4.jpg",
        blurb: <p>The orientation guide is a hub for resources for the incoming class of 2022 at
            Columbia. This project was developed in React and hosted on Washington Post's Arc Publishing
            suite. You can check out the website <a href='https://nsop2018.com' target='_blank'>here</a>.
        </p>
    },

    vicePodcast : {
        name: "VICE Podcast Revamp Project",
        background: "./images/mobile-player.gif",
        blurb: <p>During my internship in summer of 2018 at VICE Media, I created a new podcast player and backend
            for VICE Media. The real challenge with this project was not just the engineering. The prompt for the 
            project was simply to "help users discover and listen to VICE podcasts". It was up to me and a product 
            designer intern to frame the problem space through user research, competitive analysis, and internal analytics.
            The engineering work for this project was done with TypeScript React and Redux. You can find my final
            presentation <a href='https://www.slideshare.net/slideshow/embed_code/key/2ayUdQR0mfhM10' target='_blank'>here</a>. 
        </p>
    },

    yearInReview : {
        name: "Columbia Daily Spectator Year In Review 2017-18",
        background: "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/HRAV4DQDKNEENLGOTRCXGWZ6MY.JPG",
        blurb: <p>Creating Year In Review was the greatest test in my leadership skills at the Columbia Spectator.
            We were given the project with an incredibly tight deadline of 3 days. As the lead developer on the project,
            I had to not only code much of the project, but also manage a team of 5 other student engineers who had
            varying degrees of technical knowledge. I learned valuable lessons about how to manage a project and I'm
            extremely satisfied with the final result, which you can find <a href='https://www.columbiaspectator.com/yir/2018/home/' target='_blank'>here</a>. 
        </p>
    }
}

const section2018Items = [
    {
        name: "Minima",
        background: "./images/minima.png",
        blurb: <p>Minima is a corporate budgeting tool that I created with another developer and a product designer
            during a hackathon. I created the front-end using React, Express and D3. The backend is created using MongoDB.
            The codebase for it is <a href='https://github.com/ArsalaanAnsariDeveloper/Minima' target='_blank'>here</a> and
            you can see it as a featured project <a href='https://medium.com/rehive-blog/rehive-hackathon-new-york-08-07-2018-634a8c5b218a#5ade' target='_blank'>here</a>.
        </p>
    },
    {
        name: "Commencement Issue 2018",
        background: "./images/commencement.gif",
        blurb: <p>The Columbia Spectator Commencement Issue features articles about commencement events, and columns and
            profiles of graduating seniors from Spectator and around Columbia. It was developed with JSP and ScrollMagic.
            You can check it out <a href='https://www.columbiaspectator.com/commencement-2018/' target='_blank'>here</a>
        </p>
    },
    {
        name: "The Eye 1968 Commemorative Issue",
        background: "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/JXKXXVAFJ5ETBCB3H7AFBX5GGU.jpg",
        blurb: <p>In 2018, The Eye launched a 50 year commemorative issue covering the history and modern day impacts
            of the 1968 Columbia protests. I worked with journalists from the Eye and product designers to create this
            interactive layout showing off their content. Check it out <a href="https://www.columbiaspectator.com/eye/1968-issue/" target="_blank">here</a>.
        </p>
    },
    {
        name: "Spectator Graphics Team Visualizing 1968",
        background: "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/SFFNXMIJMNDLLNYWMFX3ZEEBR4.png",
        blurb: <p>I worked with graphic designers and data journalists from Spectator's graphics team to both design the
            layout for and create a page showcasing their work analyzing and visualizing the quantitative information
            from the 1968 Columbia protests. Check it out <a href="https://www.columbiaspectator.com/multimedia/visualizing-1968/" target="_blank">here</a>.
        </p>
    },
    {
        name: "New Web Layout for The Eye Magazine",
        background: "./images/eye.gif",
        blurb: <p>In my first semester as a lead dev at Spectator, I realized that our web layouts at Spectator were not 
            reflective of the quality of our journalism. I worked with a journalist to design and develop a web layout for her story that was then 
            templatized as a layout. Check it out <a href="https://www.columbiaspectator.com/eye/indirect-displacement-manhattanville/" target="_blank">here</a>.
        </p>
    },
    {
        name: "Replicated Gmail Layout",
        background: "./images/gmail.png",
        blurb: <p>For my UI Design class at Columbia, I had to replicate the GMail layout as best I could. Check out my
             submission <a href="http://www.columbia.edu/~krl2134/uidesign/gmail-interface/" target="_blank">here</a>.
        </p>
    },
]

const section2017Items = [
    {
        name: "HTTP Client and Server",
        background: "http://www.httpdebugger.com/images/article/http_protocol/http-session.jpg",
        blurb: <p>For my Advanced Programming Class at Columbia, I created 
            an HTTP <a href="https://github.com/kevinl94303/advanced-programming-labs/blob/master/lab6/part2/http-client.c" target="_blank">client</a> and <a href="https://github.com/kevinl94303/advanced-programming-labs/blob/master/lab7/part2/http-server.c" target="_blank">server</a> in C.
        </p>
    },
    {
        name: "Automatic Categorization of Data",
        background: "https://raw.githubusercontent.com/kevinl94303/Python/master/krl2134_hw5/graphs/petal_width_vs_petal_length.png",
        blurb: <p> For my Python class in Freshman Year, I wrote an algorithm to automatically categorize data into 
            three categories based on a combination of three variables. The code for it can be
            found <a href="https://github.com/kevinl94303/advanced-programming-labs/blob/master/lab6/part2/http-client.c" target="_blank">here</a> and
            you can run it by cloning the repository and running "python main.py".
        </p>
    },
]

const SectionHeader = styled.div`
    grid-column: span 12;
    height: 80vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
    @media only screen and (min-width: 480px){
        height: 40vw;
    }
    @media only screen and (min-width: 768px){
        font-size: 4rem;
        height: 20vw;
    }
    text-shadow: 2px 2px 5px #888888;
`

const SectionItemWrapper = styled.div`
    grid-column: span 12;
    height: 100vw;
    @media only screen and (min-width: 480px){
        grid-column: span 6;
        height: 50vw;
    }
    @media only screen and (min-width: 768px){
        height: 25vw;
    }
    @media only screen and (min-width: 1200px){
        grid-column: span 3;
        height: 25vw;
    }
    overflow: hidden;
    position: relative;
    cursor: pointer;
`

const StyledSectionItem = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SectionBlurb = styled.div`
    opacity: 0;
    opacity: ${props => props.showBlurb ? 1 : 0}
    z-index: ${props => props.showBlurb ? 1 : -1}
    transition: opacity 0.4s;
    width: 80%;
    height: 80%;
    padding: 10%;
    position: absolute;
    background: black;
    color: white;
    font-size: 1.25rem;
    @media only screen and (max-width: 992px){
        font-size: 1rem;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    & a{
        color: inherit;
    }
`

const FeatureMobileBlurb = styled(SectionBlurb)`
    display: none;
    @media only screen and (max-width: 768px){
        display: flex;
    }
`

class SectionItem extends Component {
    constructor(props){
        super(props)
        this.state = {showBlurb: false}
    }

    toggleBlurb = ()=>{
        this.setState({showBlurb: !this.state.showBlurb})
    }

    render(){
        const {props: {item}} = this;
        return <StyledSectionItem showBlurb = {this.state.showBlurb} onClick={this.toggleBlurb}>
            <FeatureBackground item={item}/>
            <FeatureName>{item.name}</FeatureName>
            <SectionBlurb showBlurb={this.state.showBlurb}>{item.blurb}</SectionBlurb>
        </StyledSectionItem>
    }
}

class PageContent extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentFeaturedContent: "",
            currentLanguage: "en"
        }
        this.featuredRef = React.createRef()
        this.section2018Ref = React.createRef()
        this.section2017Ref = React.createRef()
    }

    setFeaturedContent = (newState)=>{
        if(newState === this.state.currentFeaturedContent)
            this.setState({currentFeaturedContent:""})
        else
            this.setState({currentFeaturedContent:newState})
    }

    render(){
        const Section2018 = section2018Items.map(
            (item) => <SectionItemWrapper>
                <SectionItem item={item}/>
            </SectionItemWrapper>
        )

        const Section2017 = section2017Items.map(
            (item) => <SectionItemWrapper>
                <SectionItem item={item}/>
            </SectionItemWrapper>
        )

        const intro = () => {switch(this.state.currentLanguage){
            case 'en':
                return 'About me'
            case 'cn':
                return '自我介紹'
            case 'jp':
                return '自己紹介'
            case 'kr':
                return '자기소개'
        }}

        const introBlurb = () => {switch(this.state.currentLanguage){
            case 'en':
                return <div>
                    I'm a computer science student at Columbia University with a passion for web products and AI/Machine Learning.
                    <br/>
                    <br/>
                    Here's my <a href="https://github.com/kevinl94303/kev-web/blob/master/Resume.pdf" target="_blank">resume</a>, <a href="https://www.linkedin.com/in/kevirl8/" target="_blank">LinkedIn profile</a>, and <a href="https://github.com/kevinl94303" target="_blank">Github</a>.
                    <br/>
                    <br/>
                    Here's some of the stuff I've worked on.
                </div>
            case 'cn':
                return <div>
                    我是一個哥大計算機專業的本科生，熱愛科技產品与人工智能。
                    <br/>
                    <br/>
                    這是我的<a href="https://github.com/kevinl94303/kev-web/blob/master/Resume.pdf" target="_blank">簡歷</a>，<a href="https://www.linkedin.com/in/kevirl8/" target="_blank">LinkedIn 網頁</a>，與<a href="https://github.com/kevinl94303" target="_blank">Github</a>。
                    <br/>
                    <br/>
                    以下有我以前做過的項目。
                </div>
            case 'jp':
                return <div>
                    私はコロンビア大学に情報科学を専攻して、ウェブプロダクトとAIが熱情する学部生です。
                    <br/>
                    <br/>
                    私の<a href="https://github.com/kevinl94303/kev-web/blob/master/Resume.pdf" target="_blank">レジメ</a>、<a href="https://www.linkedin.com/in/kevirl8/" target="_blank">LinkedIn ページ</a>、そして<a href="https://github.com/kevinl94303" target="_blank">Github</a>はここです。
                    <br/>
                    <br/>
                    以下は私ができたプロジェクト。
                </div>
            case 'kr':
                return <div>
                    나는 코롬비아대학교에서 콤뷰터공학을 전문하는 학부생이에요. 내가 웹상품및 인공지능이 열정하다.
                    <br/>
                    <br/>
                    나의<a href="https://github.com/kevinl94303/kev-web/blob/master/Resume.pdf" target="_blank">이력서</a>하고, <a href="https://www.linkedin.com/in/kevirl8/" target="_blank">LinkedIn 페이지</a>하고, <a href="https://github.com/kevinl94303" target="_blank">Github</a>이예요.
                    <br/>
                    <br/>
                    이하는 내가완료했어 프로젝트예요.
                </div>
        }}

        const translateButton = () => {switch(this.state.currentLanguage){
            case 'en':
                return '中文版'
            case 'cn':
                return '日本語版'
            case 'jp':
                return '한국어반'
            case 'kr':
                return 'English version'
        }}

        const IntroTranslate = styled.div`
            grid-column: span 12;
            height: 50px;
            margin-top: -50px;
            display: flex;
            align-items: center;
            & div{
                width: auto;
                cursor: pointer;
                user-select: none;
                margin-left: 10px;
                height: 30px;
                &:hover{
                    text-shadow: 2px 2px 5px #888888;
                }
                color: #888;
            }
        `

        const toggleLanguage = () => {
            switch(this.state.currentLanguage){
                case 'en':
                    this.setState({currentLanguage:'cn'})
                    break
                case 'cn':
                    this.setState({currentLanguage:'jp'})
                    break
                case 'jp':
                    this.setState({currentLanguage:'kr'})
                    break
                case 'kr':
                    this.setState({currentLanguage:'en'})
                    break
            }
        }

        return(
            <div>
                <ContentContainer>
                    <Content>
                        <Intro>
                            {intro()}
                        </Intro>
                        <IntroBlurb>
                            {introBlurb()}
                        </IntroBlurb>
                        <IntroTranslate>
                            <div onClick={toggleLanguage}>{translateButton()}</div>
                        </IntroTranslate>
                        <FeaturedTitle innerRef={this.featuredRef}>
                        Featured Projects
                        </FeaturedTitle>
                        <FeatureWrapper onClick={()=>{this.setFeaturedContent("nsop2018")}}>
                            <Feature item={"nsop2018"}/>
                        </FeatureWrapper>
                        <FeatureWrapper onClick={()=>{this.setFeaturedContent("vicePodcast")}}>
                            <VICEFeature item={"vicePodcast"}/>
                        </FeatureWrapper>
                        <FeatureWrapper onClick={()=>{this.setFeaturedContent("yearInReview")}}>
                            <Feature item={"yearInReview"}/>
                        </FeatureWrapper>
                        <FeatureBlurb setFeaturedContent={this.setFeaturedContent} currItem={_.get(featureItems,this.state.currentFeaturedContent)}/>
                        <SectionHeader innerRef={this.section2018Ref}>
                            2018
                        </SectionHeader>
                        {Section2018}
                        <SectionHeader innerRef={this.section2017Ref}>
                            2017
                        </SectionHeader>
                        {Section2017}
                    </Content>
                </ContentContainer>
            </div>
        )
    }
}
export default PageContent;