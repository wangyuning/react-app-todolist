import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//组件通常是大写字母开头
import TodoList from './TodoTist/TodoList';
// import * as serviceWorker from './serviceWorker';

//jsx语法
ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
