import React from 'react'
import "./Footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col-6">
            <h2>MetaSecure</h2>
            <p>Building a Trustworthy Web3 World</p>
          </div>
          {/* Column2 */}
          <div className="col-3">
            <h5>Follow Us</h5>
            <hr></hr>
            <span>Twitter</span> <span>Medium</span>
          </div>
          <div className="col-3">
            <h5>Language</h5>
            <hr></hr>
            <p>some dropdown</p>
          </div>
        </div>
      </div>
      <div >
        <p className="copyright">
          Copyright <span className="copyrightSymbol">&copy;</span> all rights reserved
        </p>
      </div>
    </div>
  )
}
