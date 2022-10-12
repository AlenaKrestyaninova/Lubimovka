import React from 'react';
import headerImg from '../images/header-image.png';

function Header() {
  
  return (
    <header className="header">
        <h1>Любимовка.Ещё</h1>
        <p>Межсезонные читки и обсуждение пьес из списка отмеченных отборщиками Любимовки.</p>
        <img src={headerImg}/>
    </header>
  );
}

export default Header;