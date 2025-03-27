import React, { Component } from 'react'
import cattle from '../Components/public/image/cattleproject.png';
class Portfolio extends Component {
    render() {
        return (
            
            <section className="projects">
                  <h1 id='Portfolio'>Projects</h1>
                  <p></p>

                    <div className="container">
                        <a href="https://github.com/FieryGhoul/Projects-CattleManagementSystem"><img src={cattle} width="200" height="200" alt="Pybot"/><p>Cattle Management System using JavaFX</p></a>
                
                    </div> 

                       
            </section>
        )
    }
}

export default Portfolio


