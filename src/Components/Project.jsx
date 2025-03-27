import React, { Component } from 'react'
import pyimg from '../Components/public/image/pythonimg.png'
import jsimg from '../Components/public/image/javascriptimg.png'
import htmlimg from '../Components/public/image/html5logo.jpg'
import cssimg from '../Components/public/image/csslogo.png'
import gitpic from '../Components/public/image/gitpic.png'
import reactpic from '../Components/public/image/reactpic.png'
import databasebimg from '../Components/public/image/database.jpg'
import cimg from '../Components/public/image/cimg.png'




class Project extends Component {
    render() {
        return (
       
            <section id="skillheader" className="flex-project-container">

                    <div><img src={pyimg} width="100" height="100" alt="python"/></div>
                    <div><img src={jsimg} width="100" height="100" alt="js"/></div>
                    <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div><img src={cssimg} width="100" height="100" alt="css"/></div>
                    <div><img src={gitpic} width="150" height="100" alt="git"/></div>
                    <div><img src={reactpic} width="100" height="100" alt="react"/></div>  
                    <div><img src={databasebimg} width="100" height="100" alt="db"/></div>
                    <div><img src={cimg} width="100" height="100" alt="c"/></div>

                
            </section>
        )
    }
}

export default Project
