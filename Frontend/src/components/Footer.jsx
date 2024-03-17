import React from "react";
import '../css/Footer.css';
import fb from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'

const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb__footer section_padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>Социални мрежи:</h4>
                        <div className="socialmedia">
                            <a href="https://www.facebook.com"><p><img src={fb} alt="" /></p></a>
                            <p><img src={linkedin} alt="" /></p>
                            <p><img src={instagram} alt="" /></p>
                            <p><img src={github} alt="" /></p>

                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} TaylanSecurity. Всички права запазени.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <div><p>Terms & Conditions</p></div>
                        <div><p>Privacy</p></div>
                        <div><p>Security</p></div>
                        <div><p>Cookie Declaration</p></div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer