/* eslint-disable jsx-a11y/iframe-has-title */
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call or other logic)
    console.log(formData);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="bg-primary py-5 text-center text-white">
        <h1 className="display-4">Contact Us</h1>
        <p className="lead">We're here to help! Reach out with any questions or inquiries.</p>
      </section>

      {/* Contact Details Section */}
      <section className="bg-light py-5">
        <Container>
          <Row className="gy-4">
            {/* Contact Details */}
            <Col lg={6}>
              <h2 className="h3 mb-4">Get in Touch</h2>
              <p>
                Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
              </p>
              <div className="mb-3">
                <i className="bi bi-telephone-fill text-primary me-3"></i>
                <span>+8801640911511</span>
              </div>
              <div className="mb-3">
                <i className="bi bi-envelope-fill text-primary me-3"></i>
                <span>hs.sharif819@gmail.com</span>
              </div>
              <div className="mb-3">
                <i className="bi bi-geo-alt-fill text-primary me-3"></i>
                <span>Uttara, Dhaka</span>
              </div>
            </Col>

            {/* Contact Form */}
            <Col lg={6}>
              <div className="p-4 bg-white rounded shadow">
                <h2 className="h3 mb-4">Fell Free to Send Us a Message</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                    />
                  </Form.Group>
                  <Button type="submit" className="w-100" variant="primary">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-5">
        <Container className="text-center">
          <h2 className="h3 mb-4">Find Us Here</h2>
          <iframe
            className="w-100 rounded shadow"
            style={{ height: '400px' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126315.49093444404!2d-122.50972896554604!3d37.779280824618115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c8d7e71b%3A0xe340c16e3ba68bc2!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1632905406317!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
