import React from 'react';

import SideBar from '../sidebar';
import HabitProgress from '../progress'
import Foot from '../footer';

import Articles from '../mini-article';
import AppContainer  from '../check-list/check-list';

export default class MainPage extends React.Component {
    render()
    {
        return(

        <main>
        <HabitProgress></HabitProgress>
        <AppContainer title='Good things for today' mes1='Get up before 9 a.m.' mes2='Have breakfast' mes3='Drink enough water' mes4='Read book' />
        <Articles></Articles>
        <Foot></Foot>
        </main>
        )
    }
  

}

