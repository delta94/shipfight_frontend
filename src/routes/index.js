import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from "../App";
import Login from "../components/auth/Login";
import UserList from "../views/admin/UserList";
import LineChart from "../views/admin/LineChart";
import PlayTimeStatistic from "../views/admin/PlayTimeStatistic";
import Profile from "../components/profile/Profile";
import ProfileEdit from "../components/profile/ProfileEdit";
import Register from "../components/auth/Register";
import Ranking from "../components/rankings/Ranking";
import Board from "../views/user/game-play/Board";
import socketIOClient from "socket.io-client";
import BotBoard from "../views/user/bot-play/BotBoard";
import AboutUs from "../components/aboutus/AboutUs";
const ENDPOINT = "https://battle-ship-back-end-2020.herokuapp.com";
// const ENDPOINT = "http://localhost:5000";
const socket = socketIOClient(ENDPOINT);

const Routes = () => (
    <Switch>
        <Route path='/login'>
            <Login />
        </Route>

        <Route path='/register'>
            <Register />
        </Route>

        <Route path='/admin/user-list'>
            <UserList />
        </Route>

        <Route path='/admin/player-statistic'>
            <LineChart />
        </Route>

        <Route path='/admin/play-time-statistic'>
            <PlayTimeStatistic />
        </Route>

        <Route path='/profile/:id' render = {props => <Profile {...props} /> } >
            {/* <Profile  /> */}
        </Route>

        <Route path='/profile-edit/:id'>
            <ProfileEdit />
        </Route>

        <Route path='/ranking'>
            <Ranking />
        </Route>

        <Route path='/game-play' render = {props => <Board {...props} socket = {socket} />} >

        </Route>
        <Route path='/bot-play'>
            <BotBoard socket={socket} />
        </Route>
        <Route path='/aboutus'>
            <AboutUs />
        </Route>
        <Route path='/'>
            <App socket={socket}/>
        </Route>
    </Switch>
);

export default Routes;
