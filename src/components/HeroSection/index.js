import React from 'react';
import Video from '../videos/video.mp4';
import { Button, Alert } from 'react-bootstrap';

import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, HeroP, 
    HeroBtnWrapper, 
} from './HeroElements';

function HeroSection() {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account and receive 
                    $250 in credit towards your next payment.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Alert variant="success">This is an alert</Alert>
                        <Button>Test Button</Button>
                    </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
};

export default HeroSection;
