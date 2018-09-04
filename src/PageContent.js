import React, { Component } from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

const StyledNavbar = styled.div`
    height: 50px;
    width: 100vw;
    background: black;
    position: fixed;
    top: 0;
    z-index: 10;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const NavbarItem = styled.div`
    text-align: center;
    position: relative;

    &:hover{
        text-decoration: none;
        color: white;
    }
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -3px;
        left: 0;
        background-color: white;
        visibility: hidden;
        transform: scaleX(0);
        transform-origin: left;
        transition: all .1s cubic-bezier(1,.25,0,.75) 0s;;
    }
    &:hover:before {
        visibility: visible;
        transform: scaleX(1);
    }
`

class Navbar extends Component{
    render() {
        return(
            <StyledNavbar>
                <NavbarItem>Top</NavbarItem>
                <NavbarItem>Featured</NavbarItem>
                <NavbarItem>2018</NavbarItem>
                <NavbarItem>2017</NavbarItem>
            </StyledNavbar>
        )
    }
}

const FeatureWrapper = styled.div`
    grid-column: span 4;
    height: 30vw;
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
    render() {
        const {props: {item}} = this;
        return(
            <StyledFeature>
                <FeatureBackground item={featureItems[item]}/>
                <FeatureName>{featureItems[item].name}</FeatureName>
            </StyledFeature>
        )
    }
}

class VICEFeature extends Component{
    render() {
        const {props: {item}} = this;
        return(
            <StyledFeature>
                <VICEFeatureBackground item={featureItems[item]}/>
                <FeatureName>{featureItems[item].name}</FeatureName>
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
    grid-column: 2/5;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    text-shadow: 2px 2px 5px #888888;
`

const IntroBlurb = styled.div`
    grid-column: 6/13;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #888;
    & a{
        color: inherit;
    }
    & a:hover{
        text-shadow: 2px 2px 5px #888888;
    }
`

const FeaturedTitle = styled.div`
    grid-column: 1/13;
    height: 20vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: white;
    text-shadow: 2px 2px 5px #888888;
    background: linear-gradient(black, #333);
`

const StyledFeatureBlurb = styled.div`
    grid-column: 1/13;
    height: 0;
    height: ${props => props.isContent ? '20vw' : 0};
    transition: height 1s;
    font-size: 1.5rem;
    color: white;
    background: linear-gradient(black, #333);
    & a{
        color: inherit;
    }
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    & div{
        margin: 5%;
    }
`

class FeatureBlurb extends Component {
    render(){
        let isContent = this.props.currItem && this.props.currItem.blurb ? true : false;
        return <StyledFeatureBlurb isContent = {isContent}>
            <div>{this.props.currItem && this.props.currItem.blurb}</div>
        </StyledFeatureBlurb>
    }
}

const featureItems = {
    nsop2018 : {
        name: "Columbia Orientation Guide 2018",
        background: "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FGCK2XX7JJBR7IOXRJMUOIUCC4.jpg",
        blurb: <p>The orientation guide is a hub for resources for the incoming class of 2022 at
            Columbia.This project was developed in React and hosted on Washington Post's Arc Publishing
            suite. You can check out the website <a href='https://nsop2018.com' target='_blank'>here</a>.
        </p>
    },

    vicePodcast : {
        name: "VICE Podcast Revamp Project",
        background: "/mobile-player.gif",
        blurb: <p>During my internship in summer of 2018 at VICE Media, I created a new podcast player
            for VICE Media. The real challenge with this project was not with the engineering, but rather
            finding the problem itself. At the beginning of our internship, me and a product design intern
            were given the prompt which was simply "help users discover and listen to VICE podcasts". It was
            up to us to frame the problem space through user research, competitive analysis, and internal analytics.
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

class PageContent extends Component {

    constructor(props){
        super(props)
        this.state = {currentFeaturedContent: ""}
    }

    render(){
        return(
            <div>
                <Navbar/>
                <ContentContainer>
                    <Content>
                        <Intro>
                        About me
                        </Intro>
                        <IntroBlurb>
                            <div>
                                I'm a computer science student at Columbia University with a passion for web products and AI/Machine Learning.
                                <br/>
                                <br/>
                                Here's my <a href="" target="_blank">resume</a>, <a href="" target="_blank">LinkedIn profile</a>, and <a href="" target="_blank">Github</a>.
                                <br/>
                                <br/>
                                Here is some of the stuff I've worked on.
                            </div>
                        </IntroBlurb>
                        <FeaturedTitle>
                        Featured Projects
                        </FeaturedTitle>
                        <FeatureWrapper onClick={()=>{this.setState({currentFeaturedContent:"nsop2018"})}}>
                            <Feature item={"nsop2018"}/>
                        </FeatureWrapper>
                        <FeatureWrapper onClick={()=>{this.setState({currentFeaturedContent:"vicePodcast"})}}>
                            <VICEFeature item={"vicePodcast"}/>
                        </FeatureWrapper>
                        <FeatureWrapper onClick={()=>{this.setState({currentFeaturedContent:"yearInReview"})}}>
                            <Feature item={"yearInReview"}/>
                        </FeatureWrapper>
                        <FeatureBlurb currItem={_.get(featureItems,this.state.currentFeaturedContent)}/>
                    </Content>
                </ContentContainer>
            </div>
        )
    }
}
export default PageContent;