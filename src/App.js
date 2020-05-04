import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyHeader from './components/header';
import SideBar from './components/sidebar';
import HabitProgress from './components/progress'
import Foot from './components/footer';

import Articles from './components/mini-article';
import AppContainer  from './components/check-list/check-list'

const items = [
  { name: 'home', label: 'Home' },
  { name: 'billing', label: 'Billing' },
  { name: 'settings', label: 'Settings' },
]


function App() {
  return (
    <div >
    <MyHeader></MyHeader>
    <SideBar></SideBar>
    <HabitProgress></HabitProgress>
    <AppContainer title='Good things for today' mes1='Get up before 9 a.m.' mes2='Have breakfast' mes3='Drink enough water' mes4='Read book' />

    <Articles></Articles>
    <Foot></Foot>

 </div>
);
}

export default App;
