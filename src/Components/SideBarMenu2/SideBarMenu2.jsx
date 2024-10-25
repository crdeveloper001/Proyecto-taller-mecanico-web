import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';
export const SideBarMenu2 = () => {
    return (
        <>
            <div className="sidenavbar">
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>

           <div className='content'>
               content here
           </div>
        </>
    );
};
