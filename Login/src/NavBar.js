import React,{useState} from 'react'
import {Link} from "react-router-dom";
import "./NavBar.css";
import { useHistory,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutStart} from "./action";


const NavBar = ({logoutStart}) => {
    const[active,setActive]=useState(false);

    const history = useHistory();

    console.log(active,"Active");

    const logoutClicked=()=>{
        // history.push("/");
        logoutStart();
    }
    return (
        <>
        <div>
            <div className="NavItems">
                <div className="NavLeft">
            <Link to="/dashboard" className="links">
                Home
            </Link>
            <Link to="/about" className="links">
                About
            </Link>
            <button className="Profile" onClick={()=>{setActive(!active)}}>Profile</button>
            </div>
            <div className="Logout">
            <p  className={active ? "Active":"NotActive"} onClick={()=>{logoutClicked()}}>Logout</p>
            </div>
            </div>
            
        </div>
        </>
    )
}
const mapStateToProps = state => ({
    count: state
  });
  
  const mapDispatchToProps = (dispatch) => ({
    logoutStart: () => dispatch(logoutStart())
  });
  
  
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
