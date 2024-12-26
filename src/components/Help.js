import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

const Help = () => {
  return (
    <Jumbotron>
      <h3>About Vishal Rathod Corporation (VRC)</h3>
      <span>
        Rajkot Municipal Corporation (VRC) is a local government committed to
        provide basic infrastructure facilities including entertainment
        facilities to the people of the city. VRC isvery well known for the
        managing the city by using private sector participation as well as
        introduction of innovative mechanism in management to serve people
        efficiently. City has prepared different plans for improving services
        and to nullify gap between services and demands.
      </span>
      <div className="mt-5">
        <h3>Help</h3>
        <ul>
          <li>Property Tax FAQs</li>
          <li>Professional Tax FAQs</li>
          <li>Professional Tax FAQs</li>
          <li>Shops & Establishment FAQs</li>
          <li>Election Department FAQs</li>
          <li>Building Plan Approval FAQs</li>
          <li>FAQs for Fire & Emergency Services</li>
          <li>FAQs for Birth & Death Certificate</li>
        </ul>
      </div>
      <div className="mt-5">
        <h3>Contact</h3>
        <p> Ph: +91-9075576888</p>
        <p>
          {' '}
          E-Mail:<a href="mailto:mc_vrc@yahoo.co.in"> mc_vrc@vrc.gov.in</a>{' '}
        </p>
        <p>
          {' '}
          Website:{' '}
          <a href="http://www.vrc.gov.in/vrcwebsite/default.aspx">
            {' '}
            www.vrc.in
          </a>
        </p>
      </div>
    </Jumbotron>
  )
}

export default Help
