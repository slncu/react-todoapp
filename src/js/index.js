import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);




/*
let store = createStore(todoApp);

const addTodoElem = document.getElementById('addTodo');
const elInput = addTodoElem.getElementByTagName('input')[0];
const elButton = addTodoElem.getElementByTagName('button')[0];
elButton.addEventListener('click',()=>{
  const todoText = elInput.value;
  store.dispatch(addTodo(todoText));
});
const todoList = document.getElementById('todoList');
const elements = todoList.getElementByTagName('li');
const listArray = [...elements];

listArray.forEach((v,index) => {
  v.addEventListener('click', () => {
    store.dispatch(toggleTodo(index));
  });
});

const links = document.getElementById('links');
const childs = links.childNodes;
const childList = [...childs];
childList.filter( v => v.nodeName != '#text').forEach(v => {
  v.addEventListener('click', () => {
    const filterText = v.innerHTML;
    store.dispatch(setVisibilityFilter(filterText));
  });
});
*/
