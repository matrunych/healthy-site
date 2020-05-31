import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux'

import rootReducer from './reducers/root'

import MyHeader from './components/header';
import SideBar from './components/sidebar';
import MainPage from './components/main-page';

import HabitList from './components/habits';
import Article1 from './components/articles/article1'
import Article2 from './components/articles/article2'
import Article3 from './components/articles/article3'
import Article4 from './components/articles/article4'


import configStore from './store';



const store = configStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyHeader></MyHeader>
        <SideBar></SideBar>

        <Switch>
          <Route path='/habits' component={HabitList } />
          <Route path='/8-tips-for-health-eating' component={Article1}></Route>
          <Route path='/7-healthy-habits-healthy-life' component={Article2}></Route>
          <Route path='/creating-healthy-habits' component={Article3}></Route>
          <Route path='/eat-healthy' component={Article4}></Route>

          <Route path='/'  component={MainPage}/>

        </Switch>
      </BrowserRouter>
      </Provider>

  );
}

export default App;
