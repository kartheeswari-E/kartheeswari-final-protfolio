import React, { useState } from 'react'
import Pro1 from '../Images/nat.png'
import Pro2 from '../Images/guvi temple pic.png'
import Pro3 from '../Images/weather.jpg'
import Pro4 from '../Images/pro4.png'
import Pro5 from '../Images/new pro.png'
import Pro6 from '../Images/Screenshot (489).png'
import Footer from './Footer'
function Project() {
  // const[tog,settog]=useState(false)
  return<>
  <div className='hero-img'>
    <div className='heading'>
        <h1><span>P</span>roject</h1>
        <p>Some Of My Recent Works<span>...</span></p>
    </div>
  
    </div>
  <div className='work-container'>
    <h1 className='project-heading'>Projects</h1>
<div className='cec'>
    <div className='credentials'>
      <div className='h-e'>Credentials:</div>
      <div className='user'>User:user@gmail.com | Password:TEst@123 </div>
      </div>
      <div className='admin'>Admin:kartheescreate@gmail.com | Password:VEK123lak@ </div>
      <div className='stripe'>Payment Gateway:</div>
      <div className='yes'>card num:4111 1111 1111 1111 | exp.date:12/23 | cvc:741 </div>
   </div> <div className='full'><span>F</span>ull <span>S</span>tack <span>P</span>rojects</div>
      <div className='project-container'>
       
        <div className='projects-card'>
          <img  src={Pro4} alt='pro1'/>
         <div style={{"display":"flex","flexDirection":"row"}}> <h4 className='project-title'>CRM Application</h4>
          </div>
          <div class="layer">
          <div className='ex'>
            <p style={{"width":"280px"}}>Created like a Ecommerce Website and having a Features like Solving the Customer Queries  and they have a option to choose the Experts by own .Concepts which i is Used Authentication, Payment Gateway(Razorpay), Fetch, Nodemailer.</p>
         </div> 
          <div className='pro-btns'>
         
            <a href="https://heroic-palmier-84480e.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">live</a>
            <a href="https://github.com/kartheeswari-E/Crm-frontend" target="_blank"rel="noopener noreferrer" className="btn">frontend</a>
            <a href="https://github.com/kartheeswari-E/Crm_backend" target="_blank"rel="noopener noreferrer" className="btn">backend</a>
          </div></div>
          </div>
        <div className='projects-card'>
          <img  src={Pro2} alt='pro1'/>
         <h4 className='project-title'>ZEN student dashboard</h4> 
           <div class="layer">
           <div className='ex'>
           <p>Created like a actual Zen Class Student Portal and the UI is more similar to the actual Zen.It have 2 main roles Student and Mentor.Concepts which i used is CRUD, Role Based Authentication,Fetch,NodeMailer.</p>
       
         </div> 
            <div className='pro-btns'>
          
            <a href="https://splendorous-travesseiro-cb808f.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">live</a>
            <a href="https://github.com/kartheeswari-E/zen-student-dashboard-frontend." target="_blank"rel="noopener noreferrer" className="btn">frontend</a>
            <a href="https://github.com/kartheeswari-E/zen-student-dashboard-backend" target="_blank"rel="noopener noreferrer" className="btn">backend</a>
        </div>  </div>
          
        </div>

        <div className='projects-card'>
          <img  src={Pro6} alt='pro1'/>
         <h4 className='project-title'>Chat Application</h4> 
           <div class="layer">
           <div className='ex'>
           <p>Users who are having the same room id they can Send Messages to each other via this App. Concepts Which I used is Authentication, Socket.io, Fetch,
NodeMailer. </p> </div> 
            <div className='pro-btns'>
          
            <a href="https://legendary-tulumba-c13295.netlify.app" target="_blank" rel="noopener noreferrer" className="btn">live</a>
            <a href="https://github.com/kartheeswari-E/chat-app-frontend" target="_blank"rel="noopener noreferrer" className="btn">frontend</a>
            <a href="https://github.com/kartheeswari-E/chatapp-backend" target="_blank"rel="noopener noreferrer" className="btn">backend</a>
        </div>  </div>
          
        </div>

        <div className='projects-card'>
          <img  src={Pro5} alt='pro1'/>
         <h4 className='project-title'>Movie Application</h4> 
           <div class="layer">
           <div className='ex'>
           <p className='e'>Users can get a list of Movies and can be seen the Trailer.User have a access to add, delete ,edit,like and dislike a Movie.Concept which i used is CRUD,Theme change(Dark/ Light mode).</p>
            <div className='pro-btns'>
          
            <a href="https://starlit-shortbread-1568c0.netlify.app" target="_blank" rel="noopener noreferrer" className="btn">live</a>
            <a href="https://github.com/kartheeswari-E/movieapp-frontend" target="_blank"rel="noopener noreferrer" className="btn">frontend</a>
            <a href="https://github.com/kartheeswari-E/Movie-app-backend" target="_blank"rel="noopener noreferrer" className="btn">backend</a>
        </div>  </div>
          </div>
        </div>
</div> 
<div className='full'><span>F</span>rontend  <span>P</span>rojects</div>
        <div className='project-container'>
        <div className='project-card'>
          <img src={Pro3} alt='pro1'/>
          <h4 className='project-title'>Check Weather</h4>
          <div class="layer">
            <div className='ex'>
<p className='e'>It shows all the population and other detail of the country and helps to
find the current weather. These covers CRUD operation</p>
            </div>
          <div className='pro-btns'>
            <a href="https://poetic-semolina-293d13.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">live</a>
            <a href="https://github.com/kartheeswari-E/webcode1" target="_blank" rel="noopener noreferrer" className="btn">code</a>
          </div>
          </div>
        </div>
  <div className='project-card'>
          <img  src={Pro1} alt='pro1'/>
                    <h4 className='project-title'>Nationalize Api</h4>
                    <div class="layer">
<div className='ex' >
  <p className='e'>When searching for a name it will display the top 2 countries in order of
probability</p></div>
          <div className='pro-btns'>
            <a href="https://comfy-flan-ee954e.netlify.app" target="_blank" rel="noopener noreferrer" className="btn">live</a>
            <a href="https://github.com/kartheeswari-E/webcode1" className="btn" rel="noopener noreferrer" target="_blank">code</a>
          </div>
          </div>
        </div>   </div>     </div>
        <Footer/>
  </>
}

export default Project