import React from 'react';
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import './style.css';



const Footer = () => {
    return (


        /* SOCIAL LINKS */

        <footer className="footer mt-auto py-3 bg-dark" style={{ position: 'fixed', bottom: '0px'}}>
            <div className="flex-row space-between px-2">
                <span className="footer px-2" style={{ color: 'white' }}>
                    &copy;{(new Date().getFullYear())}
                    {' '}by
                    {' '}<a className="footer px-2" href="https://github.com/stellalph" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '20px' }}>Stella Ling</a>
                </span>
                <span><a className="footer px-2" href="https://github.com/stellalph/MERN-Ski-Resort.git" target="_blank" rel="noopener noreferrer">< BsGithub style={{ color: 'white', fontSize: '32px' }} /></a></span>
                <span><a className="footer px-2" href="https://www.linkedin.com/in/stella-ling-46246476" target="_blank" rel="noopener noreferrer">< BsLinkedin style={{ color: 'white', fontSize: '32px' }} /></a></span>
                <span><a className="footer px-2" href="https://twitter.com" target="_blank" rel="noopener noreferrer">< BsTwitter style={{ color: 'white', fontSize: '32px' }} /></a></span>


            </div>

        </footer>
    );
};

export default Footer;

