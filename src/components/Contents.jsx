import React from 'react';
import Image from './Image';  // Image 컴포넌트 불러오기
import Content1 from './Content1';  // Content1 컴포넌트 불러오기

function Contents() {
  return (
    <div className="Contents">
      <Image className="Image" />
      <Content1 className="Para1" />
    </div>
  );
}

export default Contents;
