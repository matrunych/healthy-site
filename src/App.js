import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import MyHeader from './components/header';
import SideBar from './components/sidebar';
import HabitProgress from './components/progress'
import Foot from './components/footer';

import Articles from './components/mini-article';
import AppContainer  from './components/check-list/check-list'
import MainPage from './components/main-page';

import HabitList from './components/habits';
import Article1 from './components/articles/article1'
import Article2 from './components/articles/article2'
import Article3 from './components/articles/article3'
import Article4 from './components/articles/article4'




// const items = [
//   { name: 'home', label: 'Home' },
//   { name: 'billing', label: 'Billing' },
//   { name: 'settings', label: 'Settings' },
// ]


function App() {
  return (
    // <div >
    
    <BrowserRouter>
    <MyHeader></MyHeader>
    <SideBar></SideBar>
    
    {/* <SideBar></SideBar>
    <HabitProgress></HabitProgress>
    <AppContainer title='Good things for today' mes1='Get up before 9 a.m.' mes2='Have breakfast' mes3='Drink enough water' mes4='Read book' />

    <Articles></Articles>
    <Foot></Foot> */}

    <Switch>
    <Route path='/habits' component={HabitList } />
<Route path='/8-tips-for-health-eating' component={Article1}></Route>
<Route path='/7-healthy-habits-healthy-life' component={Article2}></Route>
<Route path='/creating-healthy-habits' component={Article3}></Route>
<Route path='/eat-healthy' component={Article4}></Route>

    <Route path='/'  component={MainPage}/>


    </Switch>

    </BrowserRouter>
    
//  </div>
);
}

export default App;
