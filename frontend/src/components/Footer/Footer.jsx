import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=''/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi illum tenetur necessitatibus, cupiditate, ex at, animi dolores nam fugit magnam facere sed quae laudantium adipisci hic aperiam accusantium reiciendis corporis. Vitae accusamus dolorum aut iusto nemo facere ipsum quia corporis veritatis culpa delectus, maiores voluptas illo voluptatem esse rerum. Corrupti!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <Link to="/privacypolicy"><li>Privacy policy</li></Link>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9784161601</li>
                <li>contact@limedine.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 &#169; LimeDine.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
