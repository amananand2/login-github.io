import React,{useState} from 'react'
import "./form.css";
import axios from 'axios';
import {connect} from 'react-redux';
import {formSubmitStart} from "./action";
import { useHistory } from 'react-router-dom';

const Login = ({formSubmitStart,count}) => {

          const history = useHistory();

        const[formFields,setFormFields] = useState({name:"",email:"",password:""})

        const onChange=(e)=>{
               setFormFields({...formFields,[e.target.name]:e.target.value})
        }
    
        const formSubmit=(e) =>{
            e.preventDefault();
           
            console.log(formFields.email,"email")
            if(formFields.name.length > 0 && formFields.email.length > 0 && formFields.password.length > 0  ){
                   formSubmitStart(formFields);
                   history.push("/dashboard");
            }
            
              setFormFields({name:"",email:"",password:""})
            
        }
        // console.log(formFields,"form....");
        console.log(count,"count");
        return (
            <div className="form">
                <div className="form-design">
                <h2>Login</h2>
                <div className="form-field">
                <label for="name">Enter Name</label><br/>
                <input type="text" id="name" name="name" onChange={(e)=>onChange(e)} placeholder="aman" required/>
                <br/><br/>
                <label for="email">Enter your email:</label>
                <input type="email" id="email" name="email" onChange={(e)=>onChange(e) } required/>
                <br/><br/>
                <label for="pass">Password (8 characters minimum):</label>
                <input type="password" id="pass" name="password"
                 minlength="8" required onChange={(e)=>onChange(e)} required/> 
                <br/><br/>
                </div>
                    {/* Age */}
               
            
    
                        {/* submit */}
                    <button onClick={(e)=>{formSubmit(e)}}>Submit</button>
                    {/* submit */}
                
                </div>
            </div>
    )
}

const mapStateToProps = state => ({
    count: state
  });
  
  const mapDispatchToProps = (dispatch) => ({
    formSubmitStart : (values) => dispatch(formSubmitStart(values))
  });
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Login);

