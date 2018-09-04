import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFeature = styled.div`
    grid-column: span 4;
    height: 20vw;
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

const FeatureTitle = styled.div`
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
                <FeatureTitle>{this.props.item.name}</FeatureTitle>
            </StyledFeature>
        )
    }
}

const ContentContainer = styled.div`
    width: 100vw;
    height: 100vh;
`
const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-auto-rows: min-content;
`

const Intro = styled.div`
    grid-column: 2/5;
    height: 20vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    text-shadow: 2px 2px 5px #888888;
`

const IntroBlurb = styled.div`
    grid-column: 6/13;
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
    margin-top: 30px;
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
    background: ""
}

const yearInReview = {
    name: "Columbia Daily Spectator Year In Review 2017-18",
    background: "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/HRAV4DQDKNEENLGOTRCXGWZ6MY.JPG"
}

class PageContent extends Component {
    render(){
        return(
            <ContentContainer>
                <Content>
                    <Intro>
                    About me
                    </Intro>
                    <IntroBlurb>
                    I'm a computer science student at Columbia University with a passion for web products and AI/Machine Learning.
                    <br/>
                    <br/>
                    Here's my <a href="" target="_blank">resume</a>, <a href="" target="_blank">LinkedIn profile</a>, and <a href="" target="_blank">Github</a>.
                    <br/>
                    <br/>
                    See some of my past projects below.
                    </IntroBlurb>
                    <FeaturedTitle>
                    Featured Projects
                    </FeaturedTitle>
                    <Feature item={nsop2018}></Feature>
                    <Feature item={vicePodcast}></Feature>
                    <Feature item={yearInReview}></Feature>
                </Content>
            </ContentContainer>
        )
    }
}
export default PageContent;