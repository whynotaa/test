//1.react 불러오기 
import React from "react";
import React1 from "./React1";

//2. 함수 선언 및 정의
function Hello(){
    return(
        <div>
            <h1 style={{backgroundColor:'yellowgreen'}}>Hello, <React1/></h1>
        </div>
    )
}

//3.내보내기
export default Hello;
