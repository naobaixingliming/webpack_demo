import React from 'react';
import ReactDom from 'react-dom';

//非模块化 css-scss-less
import 'font-awesome/css/font-awesome.css';
import './common/style/app.css';
import './common/style/app.scss';
import './common/style/app.less';

//模块化 css-scss-less
import  main  from './css/main.css';
import s from './css/main.scss';
import l from './css/main.less';


import bird from './common/img/1.jpg';
import head from './common/img/head.jpg';
const btnImg=require('./common/img/button.png');
//console.log(main);
()=>console.log(111);

let a={a:1,b:2};
console.log({...a,c:3});

ReactDom.render(
    <div>
        <p className="fa fa-home"></p>
        <p className="less">引入字体<i className={l.m_less}>less模块化</i></p>        
        <p className="scss">scss非模块化</p>
        <p className="ot"><i className={s.ot}>css模块化</i></p>
        <img src={bird} alt="error"/>
        <img src={head} alt="error"/>
        <img src={btnImg} alt="error"/>
        <img src={require("./common/img/timg.gif")} alt="error"/>
    </div>,
    document.getElementById('root')
);
