import React from 'react';
function Form() {
  return<>
  <div id="contact">
    <div className="container">
        <div className="row">
            <div className="contact-left">
                <h1 className="sub-tittles">Contact Me</h1>
                <p><i className="fa-sharp fa-solid fa-paper-plane"></i>kartheesw2001@gmail.com</p>
                <p><i className="fa-solid fa-phone"></i>9344245002</p>
                <div className="social-icons">
                    <a href="https://github.com/kartheeswari-E"target={'_blank'} ><i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kartheeswari-e-107746226/" target={'_blank'}><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <a href="https://drive.google.com/file/d/1SrD_taGm_l3zhA_3DBUE_jzxcUx7bWCk/view?usp=share_link" target={'_blank'} className="btn1" type="button">Show CV</a>
                
                {/* <a href={Resume} download className="btn1" type="button">Download CV</a> */}
        </div>
            <div className="contact-right">
                <form>
                    <input type="text" name="Name" placeholder="your name"/>
                    <input type="email" name="Email" placeholder="your Email-id"/>
                    <textarea name="message" rows="6" placeholder="your message" ></textarea>
                    <button type="button" className="btn1">Submit</button>

                </form>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Form