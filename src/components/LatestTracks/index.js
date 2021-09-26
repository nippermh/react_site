import React from 'react';
import ReactPlayer from 'react-player';
import {
    InfoContainer,
    InfoWrapper
  
} from './LatestTracksElements';

const LatestTracks = ({lightBg, id}) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  this is some text
                    <ReactPlayer url= {'https://www.youtube.com/watch?v=ysz5S6PUM-U'} />
                </InfoWrapper> 
            </InfoContainer>
        </>
    )
}

export default LatestTracks;
