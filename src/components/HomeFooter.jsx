import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "../css/footer.css"


function HomeFooter() {
    return (
        <>
            <div className="footer-container">
                <div className="footerdiv">
                    <nav><p>Bandage</p></nav>
                    <div className="social-icons">
                        <CiFacebook style={{ color: "rgb(29, 155, 240)" }} />
                        <FaInstagram style={{ color: "rgb(29, 155, 240)" }} />
                        <FaTwitter style={{ color: "rgb(29, 155, 240)" }} />
                    </div>
                </div>
            </div>
            <hr />
            <div className='footerdiv2'>
                <div className='footerdiv21'>
                    <h3>Company info</h3>

                    <nav>
                        <a href="">About Us</a>
                        <a href="">Carier</a>
                        <a href="">We are hiring</a>
                        <a href="">Blog</a>
                    </nav>

                </div>
                <div className='footerdiv21'>
                    <h3>Legal</h3>
                    <nav>
                        <a href="">About Us</a>
                        <a href="">Carier</a>
                        <a href="">We are hiring</a>
                        <a href="">Blog</a>
                    </nav>
                </div>
                <div className='footerdiv21'>
                    <h3>Features</h3>
                    <nav>
                        <a href="">About Us</a>
                        <a href="">Carier</a>
                        <a href="">We are hiring</a>
                        <a href="">Blog</a>
                    </nav>
                </div>
                <div className='footerdiv21'>
                    <h3>Resources</h3>
                    <nav>
                        <a href="">About Us</a>
                        <a href="">Carier</a>
                        <a href="">We are hiring</a>
                        <a href="">Blog</a>
                    </nav>
                </div>
                <div className='footerdiv21'>
                    <h3>Get In Touch</h3>
                    <div >
                        <input type="email" placeholder='your Email' style={{ padding: "10px" }} />
                        <button style={{ padding: "10px", backgroundColor: "  rgb(89, 134, 160)" }}> Subscribe</button>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

            </div >

            <div><p style={{ marginLeft: "60px" }}>
                Made With Love By Finland All Right Reserved</p></div>
        </>
    )
}

export default HomeFooter