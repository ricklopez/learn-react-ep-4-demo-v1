import React from 'react';
import MediaItem from './MediaItem.js';

function MediaGrid(props) {
  
  const things = props.items.map((item, i) => (
    <MediaItem/>
  ));
  
  return (
         <div className="row">
          {things}
        </div>
  )
}


export default MediaGrid;