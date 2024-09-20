document.addEventListener("DOMContentLoaded",function(){


        //1. 새로운 요소 생성
        var h1Ele =document.createElement("h1");
    //2. 생성 요소에 텍스트 추가
        h1Ele.textContent = "첫 실습- DOM 제어 프로그램";
    //3. 상위 요소 가져오기
        var divId = document.getElementById('root');
    //4. 상위 요소에 하위 요소 붙이기 
        divId.appendChild(h1Ele);


    //1.<p> 요소 생성
        var pEle =document.createElement("p");
    //2.<p>요소에 텍스트 요소를 추가 
        pEle.textContent = "자바스크립트 DOM 제어는 재미있습니다.";
    //3. id가 'pop'인 div 요소 가져오기 
        var divId = document.getElementById('root');
    //4. div 요소에 p 요소를 붙이기
        divId.appendChild(pEle);
    


            });