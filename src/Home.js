

import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Card } from 'react-bootstrap';
import React from 'react';
import CommentDetail from './CommentDetail.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Footer.js'
function Home() {
    return (
        <div className="main">

      <title>Hotel Bliss</title>
     
         <div className="container">
           <div className="row">
             <div className="col">
               <img src="https://livedemo00.template-help.com/wt_53471/images/page1_img1.png" alt="bed" width="20%"></img>
               <h4>BED & BREAKFAST</h4>
               <ul className="list-unstyled">
                 <li>
                 Hotel Bliss will offer all of the standard Bed and Breakfast services including daily room cleaning, free local calls, cable TV, a free wireless network and various other amenities.
                 </li><br></br>
                 <li>Additionally, the Bed and Breakfast will include a restaurant lounge serving breakfast, lunch and dinner, as well as Afternoon Tea and Cocktails.</li>
                 
               </ul>
             </div>
             <div className="col">
               <img src="https://livedemo00.template-help.com/wt_53471/images/page1_img2.png" alt="history" width="20%"></img>
               <h4>CUSTOMER REVIEWS</h4>
               <ul className="list-unstyled">
               <div className="ui container comments">
                
                
                
                
                 <CommentDetail author="Sam"
                 timeAgo="25-Sep-2019"
                 content="The hotel is finely situated in the middle of the city."
               />
                  <CommentDetail author="Alex"
                 timeAgo="20-Jan-2021"
                 content="My stay was extremely comfortable. A beautiful hotel surrounded by wonderful staff in a great location."
                 />
     
     
     
     
               </div>
                
               </ul>
             </div>
             <div className="col">
               <img src="https://livedemo00.template-help.com/wt_53471/images/page1_img3.png" alt="rooms" width="20%"></img>
               <h4>ROOMS & SUITES</h4>
               <ul className="list-unstyled">
                
                 <li>All our rooms are elegantly furnished with handmade furniture include luxury en-suite facilities with complimentary amenities pack, flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest pure white linen and towels.</li>
               </ul>
             </div>
           </div>
         
         </div>
     
     
     
     <br></br><br></br>
     
     
  
     <br></br>
         <div id="service">
         <div>
         <div  class="B">
        <h1>Services</h1>
           </div>
         <p className="services">Hotel Bliss is able to satisfy the different needs of its guests with comfort and first rate services.At Hotel Bliss you will be welcomed amongst olive trees, citron trees and magnolias, in gardens that hide exotic plants and in a wonderful outdoor pool with deck chairs; protected against the sun’s rays by big umbrellas.
         The hotel’s reception is open 24 hours a day and offers booking services for guided tours to Monte Carlo, Saint Paul de Vence and excursions by boat towards Antibes and Cannes or to the nearby Isola 2000 ski resorts.
         </p>
         </div>
         
        <div className="row">
          <div className="col-sm">
      <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="https://images.unsplash.com/photo-1596131397999-bb01560efcae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsdWJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"height="300px" width="300px" />
       <Card.Body>
         <Card.Title>CLUB</Card.Title>
         <Card.Text >
         Most sports are included in the price, so you can enjoy the facilities, group classes and entertainment for free. Everyone is welcome at Club regardless of level or ambition.
     
      
         </Card.Text>
         
       </Card.Body>
     </Card>
     </div>
     
     <div className="col-sm">
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="300px" width="300px"/>
       <Card.Body>
         <Card.Title>SWIMMING POOL</Card.Title>
         <Card.Text >
         swimming pool is set with a perfect venting system, strict water quality control,
     and a luxury pool surrounded with natural light ensuring a relaxing atmosphere.
         </Card.Text>
         
       </Card.Body>
     </Card>
     </div>
     
     <div className="col-sm">
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  height="300px" width="300px"/>
       <Card.Body>
         <Card.Title>RESTAURANT</Card.Title>
         <Card.Text >
         In our bid to deliver authentic, undiluted experiences, we’ve introduced a unique regional home style dining experience.
         </Card.Text>
         
       </Card.Body>
     </Card>
     </div>
     
     
     
     </div>
     <br></br>
     <div className="row">
     <div className="col-sm">
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="https://media.istockphoto.com/photos/view-of-the-sports-playground-in-the-park-with-artificial-grass-and-a-picture-id1047166634?k=6&m=1047166634&s=612x612&w=0&h=MKwFhIW3GpNeiqcbH0uUxqAtOUVExtd3A9ZFIWoLhTI="  height="300px" width="300px"/>
       <Card.Body>
         <Card.Title>BADMINTON COURT</Card.Title>
         <Card.Text >
         Our outdoor multi-courts are the perfect place to burn off energy.Activities and sports help to get your mind off things and grow together as a team.
         </Card.Text>
         
       </Card.Body>
     </Card>
     </div>
     
     <div className="col-sm">
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="https://images.unsplash.com/photo-1570003002183-382712de0b47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJncm91bmQlMjBwYXJraW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  height="300px" width="300px"/>
       <Card.Body>
         <Card.Title>PARKING</Card.Title>
         <Card.Text >
         Hotel Bliss provides 33 secure car parking spaces, free-of-charge for house guests which are subject to availability and on a “first occupied basis”.
         </Card.Text>
         
       </Card.Body>
     </Card>
     </div>
     
     
     <div className="col-sm">
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="https://media.istockphoto.com/photos/sign-of-the-wireless-technology-picture-id1186955933?b=1&k=6&m=1186955933&s=170667a&w=0&h=ynTIW3O0VfPhUPjlOg1jsg54uvtIljuIiSyMYIOtWnw="  height="300px" width="300px"/>
       <Card.Body>
         <Card.Title>INTERNET CONNECTIVITY</Card.Title>
         <Card.Text >
          We provide you access of our wi-fi which will give you high bandwidth.you can download and upload as many as anything from internet .
         </Card.Text>
         
       </Card.Body>
     </Card>
     </div>
     </div>
     </div>
     
     
     
     
     
     <br></br>
     <br></br>
     <div>
		<Footer/>
	</div>
    
     
     
         </div>
       
    )
}

export default Home
