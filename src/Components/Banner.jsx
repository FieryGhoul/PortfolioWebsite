import React, { Component } from 'react'
import logo from '../Components/public/image/error.png';
import cse from '../Components/public/image/manipallogo.jpg';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170px" height="170px" alt="profilepic"/></a>
                    <h1> Hi! I'm Tushar Pathak </h1>
                    <p id="paragarph1">
                         CSE undergrad @ Manipal Institute of Technology  <br/>
                        
                    </p>
                    <a id="logo" href="https://www.manipal.edu/mu.html" ><img src={cse} width="40" height="40" alt="cselogo"/></a> 
                    
            </section>
        )
    }
}

export default Banner


