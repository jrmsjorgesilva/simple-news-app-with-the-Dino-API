import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../components/Home'
import About from '../components/About'
import News from '../components/News'
import Business from '../components/Business'
import NotFound from '../components/NotFound'
import Footer from '../components/Footer'
import NewsBody from '../components/NewsBody'
import FeedRSS from '../components/FeedRSS'

const AppRouter = () => {
    return (
        <div>
            <Router>
            <Nav />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/news' component={News}/>
                    <Route exact path='/news/:id' component={NewsBody}/>
                    <Route exact path='/business' component={Business}/>
                    <Route exact path='/feedrss' component={FeedRSS}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default AppRouter
