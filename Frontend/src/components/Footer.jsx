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
                        <h4>For Business</h4>
                        <a href="">
                            <p>Employer</p>
                        </a>
                        <a href="">
                            <p>Employer</p>
                        </a>
                        <a href="">
                            <p>Employer</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Свържете се с нас в социалните мрежи</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt="" /></p>
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
                            @{new Date().getFullYear()} TaylanSecurity. All rights reserved.
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