import React from 'react'
import GoogleMapReact from 'google-map-react';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <>
      <section className='contact'>
        <div className='container'>
          <div className='row'>
            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
            <div className='custom-row-2'>
              <div className='col-lg-4 col-md-5'>
                <div className='contact-info-wrap'>
                  <div className='single-contact-info'>
                    <div className='contact-icon'>
                      { }
                    </div>
                    <div className='contact-info-dec'>
                      <p>+012 345 678 102</p>
                      <p>+012 345 678 102</p>
                    </div>
                  </div>
                  <div className='single-contact-info'>
                    <div className='contact-icon'>{ }</div>
                    <div className='contact-info-dec'>
                      <p><a href="mailto:yourname@email.com">yourname@email.com</a></p>
                      <p><a href="https://yourwebsitename.com">yourwebsitename.com</a></p>
                    </div>
                  </div>
                  <div className='single-contact-info'>
                    <div className='contact-icon'>{ }</div>
                    <div className='contact-info-dec'>
                      <p>Address goes here, </p>
                      <p>street, Crossroad 123.</p>
                    </div>
                  </div>
                </div>
                <div className='contact-social text-center'>
                  <h3>Follow Us</h3>
                  <ul>
                    <li><a href="/"><FacebookIcon /></a></li>
                    <li><a href="/">< PinterestIcon /></a></li>
                    <li><a href="/"><TwitterIcon /></a></li>
                    <li><a href="/"><InstagramIcon /></a></li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-8 col-md-7'>
                <div className='contact-form'>
                  <div className='contact-title mb-30'>
                    <h2>Get In Touch</h2>
                  </div>
                  <form action="" className='contact-form-style'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <input name="name" placeholder="Name*" type="text" />
                      </div>
                      <div className='col-lg-6'>
                        <input name="name" placeholder="Email*" type="email" />
                      </div>
                      <div class="col-lg-12">
                        <input name="subject" placeholder="Subject*" type="text" />
                      </div>
                      <div class="col-lg-12">
                        <textarea name="message" placeholder="Your Message*"></textarea>
                        <button class="submit" type="submit">SEND</button>
                      </div>
                    </div>
                  </form>
                  <p class="form-message"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact