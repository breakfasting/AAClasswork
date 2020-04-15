import React from 'react';
import ReactDom from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const tabs = [{
  title: 'Numero Uno',
  content: 'Que es esto',
}, {
  title: 'Numero Dos',
  content: 'Yo no se',
}];


// add event listener to document and grab main div render react dom render
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('main');
  ReactDom.render(
    <div>
      <Clock />
      <Tabs tabArray={tabs} message="Hi" />
      <Weather />
    </div>,
    root,
  );
});
