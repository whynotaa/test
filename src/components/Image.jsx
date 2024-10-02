import React from 'react';
import littlePrince from '../images/prince.jpg';  // 이미지 파일 import

function Image() {
    return (
        <div>
            <img
                src={littlePrince}
                style={{ width: "300px", margin: "10px" }}
                alt="littlePrince"
            ></img>

        </div>
    );
}

export default Image;
