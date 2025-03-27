import React, { Component } from 'react';
import dp from './public/image/dp.jpg';

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                <h1>About Me</h1>

                <img src={dp} width="180" height="180" alt="abtimg" />
                <p>
                    Hello! I'm a passionate Computer Science student with a strong foundation in software development and problem-solving. I have hands-on experience working with languages such as Java, Python, and C, and I love finding creative solutions to complex problems. My journey in tech began with a fascination for how things work under the hood, and this curiosity has driven me to pursue a career in software development.
                </p>
                <p>
                    I consider myself someone who thrives in collaborative environments, always open to learning and sharing knowledge. My ability to analyze problems, coupled with my creativity, has helped me contribute to various academic projects, where I've honed my coding skills while working as part of a team. I'm deeply committed to growing my expertise and using my skills to build innovative solutions.
                </p>
                <p>
                    I'm currently seeking an entry-level software developer position, where I can continue to grow my technical abilities and contribute to meaningful projects that make a difference. I believe that continuous learning and teamwork are key to success in this ever-evolving field, and I’m excited about the opportunities that lie ahead.
                </p>

                <h2>Languages</h2>
                
                    <p>English</p>
                    <p>Hindi</p>
               

                <h2>Education</h2>
                    <p>
                    Ryan International School, Bangalore (2008 - 2021) </p>
                    <p> Allen JEE (2021 - 2023)</p>
                    <p>Manipal Institute of Technology (2023-Present)</p>
                
            </section>
        );
    }
}

export default About;
