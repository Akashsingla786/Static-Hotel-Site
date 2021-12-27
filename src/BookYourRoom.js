import React from 'react'
import './BookYourRoom.css'
import Footer from './Footer.js'
function click()
{
	
    alert('YOUR ROOMS HAS BOOKED');
	
}



function BookYourRoom() {
      
    return (
        <div id="BookYourRoom" >
   
	<meta charset="utf-8"></meta>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
	<title>Book your Room</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"></link>
	<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet"></link>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css" rel="stylesheet"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
<br></br>
<div  class="B">
   <h1>Book Rooms</h1>
      </div>
	

<body id="body">	<div   >
		<form class="form-group" onSubmit={click} >
			<div class="form" id="form1">
				<h1 class="text-white text-center">Book Your Room Now</h1>
				<div class="first-group" id="fg">
			    <div id="content" >
					<i class="fas fa-user"></i>
					<input type="text" id="input-group" placeholder="First name" required></input>
				</div>

				<div id="content">
					<i class="fas fa-phone"></i>
					<input type="text" id="input-group" placeholder="Phone Number" required pattern="[0-9]{10}"></input>
				</div>

				<div id="content">
					<i class="fas fa-calendar-alt"></i>
					<input type="date" id="input-group" placeholder="Check-in Date" required></input>
				</div>

				<div id="content">
					<i class="fas fa-users"></i>
					
						
						<input type="number" id="input-group" placeholder="Adult" required></input>
				</div>
				<div id="content">
						<i class="fas fa-users"></i>
						<input type="number" id="input-group" placeholder="Children" required></input>
					
				</div>
				</div>

				<div class="second-group" id="sg"  >
					
				  <div id="content">
					<i class="fas fa-user"></i>
					<input type="text" id="input-group" placeholder="Last name"></input>
				  </div>

				  <div id="content">
					<i class="fas fa-envelope-square"></i>
					<input type="email" id="input-group" placeholder="Email" required></input>
				  </div>
				  <div id="content" >
					<i class="fas fa-calendar-alt"></i>
					<input type="date" id="input-group" placeholder="Check-out Date"  required></input>
				</div>
				
				<div id="content">
					<i class="fas fa-users"></i>
					<input type="number" id="input-group" placeholder="No. of Rooms" required></input>
				</div>
				<div id="content">
					<i class="fas fa-users"></i>
					<input type="number" id="input-group" placeholder="No. of Guests" required></input>
				</div>
				
				</div>
				<button type="submit" value="Submit" id="submit-btn">Book Now</button>
			</div>
				
			
		</form>
		
	</div>
    </body>
	
	<br></br><br></br><br></br><br></br>
	<div>
		<Footer/>
		</div>
</div>

    );
    }

export default BookYourRoom;
