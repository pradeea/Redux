import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {

              if(!song)
              {
                return<div>Select a song</div>
              }  
  return (       
        <div>
            <h1>The Details:</h1>
            <p>
                Title: {song.title}
                <br/>
                Description:{song.description}            
            </p>
        </div>
  
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
