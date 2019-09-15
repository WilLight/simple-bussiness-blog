import React from 'react';
import  { Button } from '@material-ui/core';

import './about.css';

import image1 from '../images/stock/image1.jpg';

function About() {
    return (
        <div id="homepage-background">
            <div id='homepage-panel1'>
                <div id='homepage-panel-text-box'>
                    <h2 className='homepage-header'>
                        About
                    </h2>
                    <h3 className='homepage-text'>
                        Placeholder text
                    </h3>
                    <Button className='homepage-button'>
                        Contact us!
                    </Button>
                </div>
                <div id='homepage-panel1-edge'>
                    <img src={image1} id='homepage-graphic'>
                    </img>
                </div>
            </div>
            <div id='homepage-panel2'>
                <h2 id='homepage-panel2-header' className='homepage-header'>
                    Projects we have worked on:
                </h2>
                <div id='homepage-list'>
                    <fieldset className='homepage-list-selection'>
                        <legend className='homepage-list-header'>
                            Project 1
                        </legend>
                        <h4 className='homepage-text'>
                            Project button
                        </h4>
                    </fieldset>
                    <fieldset className='homepage-list-selection'>
                        <legend className='homepage-list-header'>
                            Project 2
                        </legend>
                        <h4 className='homepage-text'>
                            Project button
                        </h4>
                    </fieldset>
                    <fieldset className='homepage-list-selection'>
                        <legend className='homepage-list-header'>
                            Project 3
                        </legend>
                        <h4 className='homepage-text'>
                            Project button
                        </h4>
                    </fieldset>
                </div>
            </div>
            <div id='homepage-panel3'>
                <div id='homepage-panel3-list-div'>
                    <h2 id='homepage-panel3-list-header'>We offer you:</h2>
                    <ul id='homepage-panel3-list'>
                        <li className='homepage-panel3-list-element'>Electic installation</li>
                        <li className='homepage-panel3-list-element'>Repair and maintance</li>
                        <li className='homepage-panel3-list-element'>Repair</li>
                        <li className='homepage-panel3-list-element'>Maintance</li>
                        <li className='homepage-panel3-list-element'>Repair and maintance 1</li>
                        <li className='homepage-panel3-list-element'>Repair and maintance 2</li>
                        <li className='homepage-panel3-list-element'>Repair and maintance 3</li>
                    </ul>
                </div>
                
                <div id='homepage-panel3-edge'>
                    <img src='#' id='homepage-panel3-graphic'>
                    </img>
                </div>
            </div>
            
        </div>
        );
}

export default About;