import { Link } from "react-router-dom"
import "./signup.css"
import { useState } from "react"
function Signup() {
        
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")

  const handleSignup = async ()=>{

    try {

     const response = await fetch("http://localhost:3000/signup",
      {
        method:"POST",
          headers : {
            "Content-Type": "application/json"
          },
          body : JSON.stringify(
          {
               email : email,
               password: password
          })
      })

         const data = await response.json();

          if (data.ok){

            console.log(`Signup successful for ${data}`);

          }
          else{

            console.log("Signup failed");
          }
    
    } 
    catch (error) {

      console.log("Error during signup:", error);
      
    }
  }

  return (
    <>

    <div className="container">
        <div className="logo">
            LOGO
        </div>
        <div className="title">
          Make the most of your professional life 
       </div>


        <form className="signup">
        
        <div className="field">
          <label htmlFor="email">Email or phone number</label>
          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="text"  required />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" required />
        </div>

        <div className="checkbox-field">
          <input type="checkbox" id="rememberme" />
          <label htmlFor="rememberme">Remember me</label>
        </div>

        <p className="terms">
          By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
          <Link to="/userAgreement">User Agreement</Link>,{" "}
          <Link to="/privacyPolicy">Privacy Policy</Link>, and{" "}
          <Link to="/cookiePolicy">Cookie Policy</Link>.
        </p>

        <button onClick={handleSignup} className="btn primary">Agree & Join</button>

        <button className="btn">Continue with Google</button>
        <button className="btn">Continue with Microsoft</button>

        <span className="link">
          Already on LinkedIn? <Link to="/login">Sign in</Link>
        </span>

      </form>

               <span className="help-link">Looking to create a page for a business? <Link to="/help">Get help</Link></span> 

    </div>

    
    </>
  )
}

export default Signup