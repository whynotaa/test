import React from 'react';
import Image from './Image';  // Image 컴포넌트 불러오기
import Content1 from './Content1';  // Content1 컴포넌트 불러오기

<div className="App">
    <nav className="Menu">
        <a href="http://www.naver.com">네이버</a> |
        <a href="http://www.google.com">구글</a> |
        <a href="http://openai.com">오픈AI</a>
    </nav>
        <div className="Contents">
        <Image className="Image" />
        <Content1 className="Para1" />
    </div>
</div>

export default Contents;
