import React,{useEffect,useState} from 'react'
import NavBar from './NavBar'
import "./Dashboard.css"
import { useSelector } from 'react-redux'
import { Redirect, Route ,useHistory} from 'react-router-dom'

const Dashboard = () => {
    const data=[
        {
        name:"Aman",
        age:"23",
        number:"999999",
    },
    {
        name:"rahul",
        age:"24",
        number:"999999",
    },
    {
        name:"vaibhav",
        age:"26",
        number:"999999",
    },
    {
        name:"himanshu",
        age:"20",
        number:"999999",
    },
    {
        name:"naveen",
        age:"21",
        number:"999999",
    },
    {
        name:"ajay",
        age:"23",
        number:"999999",
    },{
        name:"anand",
        age:"21",
        number:"999999",
    },{
        name:"jason",
        age:"22",
        number:"999999",
    },
    
    ]

    const history = useHistory();
    const[card,setCard]=useState(4)
    const name = useSelector(state => state.FormData.name)
    const isAuthenticated = useSelector(state => state.isAuthenticated)

    console.log(isAuthenticated,"isAuthenticated")
      
    if (!isAuthenticated) return <Redirect to="/" />;

    return (
        <>
        <div>
            <NavBar/>
            <div className="Welcome">
                <h2>Welcome {name}</h2>
                <div className="Container">
                    {data.slice(0,card).map((value)=>{
                        return(
                            <>
                              <div className="Card">
                                <p>Name:{value.name}</p>
                                <p>Age:{value.age}</p>
                                <p>phone:{value.number}</p>
                               </div>
                            </>
                        )
                    })}

              </div>
            </div>
            <button className="ShowMore" onClick={()=>{setCard(card + 4)}}>Show More</button>
        </div>
        </>
    )
}

export default Dashboard;
