import React from 'react'
import "./style.css"
import payment from '../../assets/images/mobile-point-payment-method-trensperant-1.png'
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
        <div className='box'>
            <h2>Contact us</h2>
            <ul>
              <li>
                <a href="tel:123-456-7890">
                <i class="fa-solid fa-phone mr-10"></i>                
                123-456-7890
                </a>
              </li>
              <li>
                <a href="mailto:miazifarhad@example.com">
                <i class="fa-solid fa-play mr-10"></i>
                LIVE CHAT
                </a>
              </li>
              <li>
                <a href="mailto:miazifarhad@example.com">
                <i class="fa-regular fa-envelope mr-10"></i>
                EMAIL</a>
              </li>
            </ul>
          </div>

          <div className='box span_2'>
            <div className="box_inner">
              <h2>About Us</h2>
              <ul className='terms'>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </div>
            <div className="box_inner">
              <h2>Pay with</h2>
              <img src={payment} alt="" />
            </div>
          </div>

          <div className='box'>
            <h2>Shop Address</h2>
            <ul>
              <li><strong>Shop No:</strong> 82,Level 2, Shah Ali Plaza Mirpur-10, Dhaka(1216), Bangladesh </li>
              <li><strong>SHOP HOUR: </strong> 10am - 8pm | Monday-Saturday Sunday Closed</li>
            </ul>
          </div>
        </div>

      </footer>
      <div className='footer_copyright'>
        © 2023 Mobile Point - All Rights Reserved | Powered by Shanto
      </div>
    </>
  )
}

export default Footer