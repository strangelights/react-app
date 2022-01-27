import React from "react";

function PhotoGrid(props) {

    return (
        <div className="photo-grid">
            {props.children}
        </div>
    )
}

export default PhotoGrid;