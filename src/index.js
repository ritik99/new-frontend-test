import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


//Pages
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard' 
import Borrow from './components/pages/Borrow'
import Lend from './components/pages/Lend'
import Profile from './components/pages/Profile'
import BorrowPoolDetailsGrace from './components/pages/BorrowPoolDetailsGrace'
import BorrowPoolDetailsCollecting from './components/pages/BorrowPoolDetailsCollecting'
import LendPoolDetailsCollecting from './components/pages/LendPoolDetailsCollecting'
import LendPoolDetailsGrace from './components/pages/LendPoolDetailsGrace'
import CreditLines from './components/pages/CreditLines'
import SavingsAccount from './components/pages/SavingsAccount'
import CreditLinesGrantedSubpage from './components/pages/CreditLinesGrantedSubpage'
import CreditLinesReceivedSubpage from './components/pages/CreditLinesReceivedSubpage';
import Access from './components/pages/Access';



import './components/uiElements/generalElements/style.css';
import './components/uiElements/generalElements/mobile.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/borrow' component={Borrow} />
        <Route exact path='/lend' component={Lend} />
        <Route exact path='/profile' component={Profile} />
        <Route exact  path='/borrow-pool-details-grace' component={BorrowPoolDetailsGrace} />
        <Route exact  path='/borrow-pool-details-collecting' component={BorrowPoolDetailsCollecting} />
        <Route exact  path='/lend-pool-details-collecting' component={LendPoolDetailsCollecting} />
        <Route exact  path='/lend-pool-details-grace' component={LendPoolDetailsGrace} />
        <Route path='/credit-lines/:tab' component={CreditLines} />
        <Route exact  path='/savings-account' component={SavingsAccount} /> 
        <Route exact  path='/credit-lines-granted-subpage' component={CreditLinesGrantedSubpage} /> 
        <Route exact  path='/credit-lines-received-subpage' component={CreditLinesReceivedSubpage} />
        <Route exact  path='/access' component={Access} /> 
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

