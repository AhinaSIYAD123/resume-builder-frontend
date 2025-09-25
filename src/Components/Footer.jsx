import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="align-items-center">
       
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <small>&copy; {new Date().getFullYear()} ResumeBuilder. All rights reserved.</small>
          </Col>

        
          <Col md={6} className="text-center text-md-end">
            <a href="#hero" className="text-light text-decoration-none me-3">
              Home
            </a>
            <a href="#tools" className="text-light text-decoration-none me-3">
              Tools
            </a>
            <a href="#testimonials" className="text-light text-decoration-none">
              Testimonials
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
