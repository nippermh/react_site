import React from 'react';
import ReactPlayer from 'react-player';
import {
    LatestTracksContainer,
    LatestTracksWrapper,
    LatestTracksCard,
    LatestTracksH2,
    LatestTracksP
  
} from './LatestTracksElements';

const LatestTracks = () => {
    return (
        <>
           <LatestTracksContainer>
              <LatestTracksWrapper>

                  <LatestTracksCard>
                  
                    <LatestTracksH2>Reduce Expenses</LatestTracksH2>
                    <LatestTracksP>We help you to reduce your bank fees and increase your overall revenue.</LatestTracksP>
                
                    <ReactPlayer 
                        url= {'https://soundcloud.com/adrianhallam/telegram'} 
                        width='100%'
                        height='100%'
                        
                        />

                    </LatestTracksCard>

                    <LatestTracksCard>
                 
                    <LatestTracksH2>Telegram</LatestTracksH2>
                    <LatestTracksP>An ambient guitar instrumental created on my new Telecaster:)</LatestTracksP>
                
                    <ReactPlayer 
                        url= {'https://soundcloud.com/adrianhallam/telegram'} 
                        width='100%'
                        height='100%'
                        
                        />

                    </LatestTracksCard>

                    <LatestTracksCard>
                 
                    <LatestTracksH2>Space Out</LatestTracksH2>
                    <LatestTracksP>I recorded this when covid kicked off, last year here in Oz.

Basically just turned government messaging into the lyrics of the song.
At first i thought it kinda sucked and didn't bother releasing it.
But after adjusting the mix and playing around with the arrangement i've grown a lot more fond of it.
Hope you enjoy, and thanks for listening/feedback :)</LatestTracksP>
                
                    <ReactPlayer 
                        url= {'https://soundcloud.com/adrianhallam/space-out'} 
                        width='100%'
                        height='100%'
                        
                        />

                    </LatestTracksCard>
                </LatestTracksWrapper> 
            </LatestTracksContainer>
        </>
    )
}

export default LatestTracks;
