import React from "react";

function PhotoGrid(props) {

    return (
        <div className="photo-grid">
            <p>This is the photo grid</p>
            {props.children}
        </div>
    )
}

export default PhotoGrid;