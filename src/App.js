
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Card } from 'react-bootstrap';
import React from 'react';
import CommentDetail from './CommentDetail.js'
import AboutUs from './AboutUs.js'
import NavBar from './NavBar.js'
import OurRooms from './OurRooms.js'
import ContactUs from './ContactUs.js'
import BookYourRoom from './BookYourRoom';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Home from './Home.js'
  class  App extends React.Component {
  

  render(){




  return (
    <div >
        <BrowserRouter>
           <NavBar />
           <Switch>
           <Route path='/' exact component={Home} />
             <Route path='/AboutUs' component={AboutUs} />
            <Route path="/OurRooms" component={OurRooms}/>
            <Route path="/BookYourRoom" component={BookYourRoom}/>
            <Route path="/ContactUs" component={ContactUs}/>
           </Switch>
         </BrowserRouter>
          
         </div>
      );
  }
}

export default App;




