import React from 'react';
import ReactPlayer from 'react-player';
import {
    LatestTracksContainer,
    LatestTracksWrapper
  
} from './LatestTracksElements';

const LatestTracks = ({lightBg, id}) => {
    return (
        <>
           <LatestTracksContainer lightBg={lightBg} id={id}>
              <LatestTracksWrapper>
                  this is some text
                    <ReactPlayer url= {'https://soundcloud.com/adrianhallam/telegram'} />
                </LatestTracksWrapper> 
            </LatestTracksContainer>
        </>
    )
}

export default LatestTracks;
