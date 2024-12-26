import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-4">
            Copyright &copy;2024 VRC chatbot
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
