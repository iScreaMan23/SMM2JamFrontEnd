import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from "./components/about/about"
import Home from "./components/home/home"
import LevelBrowser from "./components/levelBrowser/levelBrowser"

function Main() {
    return(
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/levelbrowser' component={LevelBrowser}/>
                </Switch>
            </main>
        );
}

export default Main;