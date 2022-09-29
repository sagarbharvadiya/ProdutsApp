import React from 'react'
import Data from '../../Data.json';
import logo from '../../img/logo.png'
const Footernew = () => {
  return (
    <><section className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2 col-sm-4'>
            <div className='copyright mb-30 '>
              <div className='footer-logo'>
                <a href={"/"}>
                  <img src={logo} alt="" />
                  <p><span>©{new Date().getFullYear()} Flone.</span>All Rights Reserved.</p>
                </a>
              </div>
            </div>
          </div>
          {Data.footernew.map((value) => {
            return (
              <React.Fragment key={value.id}>
                <div className='col-lg-2 col-sm-4'>
                  <div className='footer-widget'>
                    <div className='footer-title'>
                      <h3>{value.title}</h3>
                    </div>
                    <div className='footer-list'>
                      <ul>
                        <li><a href="/">{value.link}</a></li>
                        <li><a href="/">{value.link1}</a></li>
                        <li><a href="/">{value.link2}</a></li>
                        <li><a href="/">{value.link3}</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )
          })
          }
          <div className='col-lg-6 col-sm-6'>
            <div className='footer-widget mb-30 ml-70 '>
              <div className='footer-title'>
                <h3>SUBSCRIBE</h3>
              </div>
              <div className='subscribe-style '>
                <p>Get E-mail updates about our latest shop and special offers.</p>
                <div>
                  <div className='subscribe-form'>
                    <div className='mc-form'>
                      <div>
                        <input id="mc-form-email" className="email" type="email" placeholder="Enter your email address..." />
                      </div>
                      <div className='clear'>
                        <button className="button">SUBSCRIBE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Footernew