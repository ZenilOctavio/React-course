import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card'
import './main.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Card initialIsFollowing name='Miguel Angel Duran' username = 'midudev' ></Card>
    <Card initialIsFollowing name='Shakira' username = 'shakira' ></Card>
    <Card initialIsFollowing={false} name='B' username = 'sanbenito' ></Card>
    <Card initialIsFollowing={false} name='iPura' username = 'iPura' ></Card>
    <Card initialIsFollowing={false} name='Taylor Swift' username = 'taylorswift13' ></Card>
    <Card initialIsFollowing={false} name='Youtube' username = 'Youtube' ></Card>

  </>
);

