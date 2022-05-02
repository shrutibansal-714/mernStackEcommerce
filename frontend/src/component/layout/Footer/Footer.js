import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"


const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>DOWNLOAD App for Android and IOS mobile phone</p>
            <img src={playStore} alt="playStore" />
            <img src={appStore} alt="AppStore" />
        </div>

        <div className="midFooter">
            <h1>Ecommerce.</h1>
            <p>High Quality is our first priority</p>
            <p>Copyrights 2021 &copy; MeShruti</p>
        </div>

        <div className="rightFooter">
            <h4>Follow us</h4>
            <a href = "http://instagram.com">Instagram</a>
            <a href = "http://facebook.com">Facebook</a>
        </div>
    </footer>    
  )
}

export default Footer