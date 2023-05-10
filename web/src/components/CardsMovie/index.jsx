import React from "react"
import './style.scss'

import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function CardsMovie({title, overview, backdrop_path}){

    let description = overview;
    let color = generateColor();

    if(description.length > 100){
      description = description.substring(0, 100)+'...';
    }

    function generateColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color;
    }

    return(
        <div className="CardsMovie">
            <div className="containerTitle" onMouseOver={(e) => e.target.style.boxShadow = `0 0 40px ${color}`} onMouseOut={(e) => e.target.style.boxShadow = 'none'}>
                <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}/>
                <p className="title">{title}</p>
                <div className="fundo"/>
            </div>

            <div className="containerDescription">
                <p className="overview">{description}</p>
                <div>
                    <a target="_blank" href="https://www.linkedin.com/in/yuriferr/"><BsLinkedin size={20} color="dodgerblue"/>Linkedin</a>
                    <a target="_blank" href="https://github.com/Yuriferr"><BsGithub size={20} color="black"/>Github</a>
                </div>
            </div>
        </div>
    )
}