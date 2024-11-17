import React from 'react'
import './Privacy.css'

const Privacy = () => {
  return (
    <div className='privacy-policy'>
      <div style={{fontWeight:"500", fontSize:"70px", color:"#3b3b3b"}}>Privacy Policy</div>
      <div style={{marginTop:"30px"}}>Effective Date: June 2024</div>
      <p>Welcome to LimeDine, a food delivery platform dedicated to providing fresh, high-quality meals delivered on time. Your privacy is important to us, and this Privacy Policy outlines how we collect, use, and protect your information when you use our services.</p>
      <h2>1. Information We Collect</h2>
      <p>We collect the following types of information to provide and improve our services:</p>
      <ul style={{marginTop:"20px"}}>
        <li>Personal Information: Includes your name, email address, phone number, delivery address, and payment details.</li>
        <li>Non-Personal Information: Includes your IP address, browser type, device information, and browsing activity on our website.</li>
        <li>Order Details: Information about your orders, preferences, and dietary restrictions.</li>
      </ul>
      <h2>2. How We Use Your Information</h2>
      <p>We use the collected information for the following purposes:</p>
      <ul style={{marginTop:"20px"}}>
        <li>To process and deliver your orders accurately and on time.</li>
        <li>To communicate with you regarding your orders, updates, and promotional offers.</li>
        <li>To personalize your experience by tailoring our recommendations based on your preferences.</li>
        <li>To improve our website, services, and customer support.</li>
        <li>To ensure quality checks and maintain the freshness and safety of your meals.</li>
      </ul>
      <h2>3. Sharing Your Information</h2>
      <p>We do not sell, rent, or trade your personal information. However, we may share your information with:</p>
      <ul style={{marginTop:"20px"}}>
        <li>Service Providers: Delivery partners, payment processors, and vendors who help us fulfill your orders.</li>
        <li>Legal Requirements: Authorities or law enforcement if required by law or to protect our rights and interests.</li>
      </ul>
      <h2>4. Security of Your Information</h2>
      <p>We implement robust security measures, including encryption and secure servers, to protect your personal information. While we strive to maintain high standards of security, no system is completely immune to breaches.</p>
      <h2>5. Cookies and Tracking Technologies</h2>
      <p>We use cookies and similar technologies to enhance your experience on our website. These help us analyze website traffic, remember your preferences, and offer personalized content. You can control cookies through your browser settings.</p>
      <h2>6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{marginTop:"20px"}}>
        <li>Access, update, or delete your personal information.</li>
        <li>Opt-out of marketing communications by following the instructions in our emails.</li>
        <li>Request clarification on our data practices by contacting us.</li>
      </ul>
      <h2>7. Updates to This Policy</h2>
      <p>We may update this Privacy Policy periodically. Changes will be reflected on this page with an updated effective date.</p>
      <h2>8. Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at <span>deveshpanwer9990@gmail.com</span></p>
      <p className='thank-you'>Thank you for trusting <span className='limedine'>LimeDine</span> to deliver fresh and quality food to your door!</p>
    </div>
  )
}

export default Privacy
