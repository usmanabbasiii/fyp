/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
<div className="map float-left rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1658.7580482009696!2d73.13493425436992!3d33.74732708687115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc11d79bc2ae7%3A0xd2061cac532b2da0!2sInstitute%20of%20Information%20Technology%20QAU!5e0!3m2!1sen!2s!4v1681114566597!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="my-6"
                  style={{ borderRadius: "5%" }}
                ></iframe>

              </div>
ReactDOM.render(<MapApp />, document.getElementById('root'));
export default Maps;