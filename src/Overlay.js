import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class Overlay extends Component {
    render(){
        const fadeInOutFrames = keyframes`
        0% {
            opacity: 0;
        }
        25% {
            opacity: 1;
        }
        75% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
        `

        const fadeOutFrames = keyframes`
        from{
            opacity: 1;
        }
        to{
            opacity: 0;
        }
        `
        
        const OverlayContainer = styled.div`
        width: 100vw;
        height: 60vh;
        z-index: 5;
        position: absolute;
        background: white;
        font-size: 4rem;
        display: flex;
        justify-content: center;
        text-align: center;
        padding-top: 40vh;
        animation: ${fadeOutFrames} 2s linear forwards;
        animation-delay: 8s;
        pointer-events: none;
        `

        const FadeInOut = styled.div`
        animation: ${fadeInOutFrames} 2s linear forwards;
        position: absolute;
        opacity: 0;
        `

        const Hello = styled(FadeInOut)`
        animation-delay: 0.5s;
        `

        const Name = styled(FadeInOut)`
        animation-delay: 3s;
        `

        const Welcome = styled(FadeInOut)`
        animation-delay: 5.5s;
        `
        return (
            <OverlayContainer>
                <Hello>
                    Hello.
                </Hello>
                <Name>
                    I'm Kevin.
                </Name>
                <Welcome>
                    Welcome to my personal website.
                </Welcome>
            </OverlayContainer>
        )

    }
}

export default Overlay;