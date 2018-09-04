import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
    height: 50px;
    width: 100vw;
    background: linear-gradient(black, #333);
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

const StyledFeature = styled.div`
    grid-column: span 4;
    height: 30vw;
    overflow: hidden;
    position: relative;
    cursor: pointer;
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
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
    color: white;
    text-shadow: 2px 2px 5px #888888;
    pointer-events: none;
`

class Feature extends Component{
    render() {
        return(
            <StyledFeature>
                <FeatureBackground item={this.props.item}/>
                <FeatureName>{this.props.item.name}</FeatureName>
            </StyledFeature>
        )
    }
}

class VICEFeature extends Component{
    render() {
        return(
            <StyledFeature>
                <VICEFeatureBackground item={this.props.item}/>
                <FeatureName>{this.props.item.name}</FeatureName>
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

const nsop2018 = {
    name: "Columbia Orientation Guide 2018",
    background: "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FGCK2XX7JJBR7IOXRJMUOIUCC4.jpg"
}

const vicePodcast = {
    name: "VICE Podcast Revamp Project",
    background: "/mobile-player.gif"
}

const yearInReview = {
    name: "Columbia Daily Spectator Year In Review 2017-18",
    background: "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/HRAV4DQDKNEENLGOTRCXGWZ6MY.JPG"
}

class PageContent extends Component {
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
                                Here's some of the stuff I've worked on.
                            </div>
                        </IntroBlurb>
                        <FeaturedTitle>
                        Featured Projects
                        </FeaturedTitle>
                        <Feature item={nsop2018}></Feature>
                        <VICEFeature item={vicePodcast}></VICEFeature>
                        <Feature item={yearInReview}></Feature>
                    </Content>
                </ContentContainer>
            </div>
        )
    }
}
export default PageContent;