import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import top1 from '../../assets/images/top1.png';
import top2 from '../../assets/images/top2.jpg';
import top3 from '../../assets/images/top3.png';
import user1 from '../../assets/user/user1.jpg';
import user2 from '../../assets/user/user2.jpg';
import user3 from '../../assets/user/user3.jpeg';
import user4 from '../../assets/user/user4.jpg';
import user5 from '../../assets/user/user5.jpg';
import user6 from '../../assets/user/user6.jpg';
import user7 from '../../assets/user/user7.png';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-light py-5 text-center">
        <Container>
          <h1 className="display-4 fw-bold text-dark mb-3">
            Empowering Your Lifestyle
          </h1>
          <p className="lead text-secondary mb-4">
            Innovative Solutions for Everyday Challenges
          </p>
          <Button variant="primary" className="px-5 py-2">
            Learn More About Us
          </Button>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Image src={top1} alt="Our Story" fluid rounded />
            </Col>
            <Col lg={6}>
              <h2 className="display-5 fw-bold text-dark mb-4">Our Story</h2>
              <p className="text-secondary mb-4">
                Our journey began with a simple idea: to bring high-quality,
                innovative solutions to everyday problems. From humble beginnings
                to an industry leader, we've always stayed true to our mission.
              </p>
              <p className="text-secondary">
                Over the years, we’ve achieved remarkable milestones and we’re
                just getting started. Join us as we continue to innovate and
                redefine what’s possible.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="display-5 fw-bold text-center text-dark mb-5">
            What We Believe In
          </h2>
          <Row className="g-4 text-center">
            <Col md={6} lg={3}>
              <Card className="h-100">
                <Card.Body>
                  <Image src={top2} alt="Innovation" width={60} height={60} fluid />
                  <Card.Title className="mt-3">Innovation</Card.Title>
                  <Card.Text>
                    We strive to bring the latest and greatest in product
                    technology.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100">
                <Card.Body>
                  <Image src={top3} alt="Sustainability" width={60} height={60} fluid />
                  <Card.Title className="mt-3">Sustainability</Card.Title>
                  <Card.Text>
                    Our focus is on creating products that are both effective and
                    eco-friendly.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100">
                <Card.Body>
                  <Image src={top2} alt="Customer Focus" width={60} height={60} fluid />
                  <Card.Title className="mt-3">Customer Focus</Card.Title>
                  <Card.Text>
                    We listen to our customers and create solutions tailored to
                    their needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100">
                <Card.Body>
                  <Image src={top3} alt="Quality" width={60} height={60} fluid />
                  <Card.Title className="mt-3">Quality</Card.Title>
                  <Card.Text>
                    Excellence is at the heart of everything we do.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="display-5 fw-bold text-center text-dark mb-5">
            Meet the Team
          </h2>
          <Row className="g-4 text-center">
            <Col md={6} lg={3}>
              <Card className="h-100 bg-light">
                <Image src={user7} alt="Team Member" roundedCircle className="my-3 mx-auto" width={120} height={120} />
                <Card.Body>
                  <Card.Title>Emile Martin</Card.Title>
                  <Card.Text>CEO & Founder</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 bg-light">
                <Image src={user5} alt="Team Member" roundedCircle className="my-3 mx-auto" width={120} height={120} />
                <Card.Body>
                  <Card.Title>Jane Smith</Card.Title>
                  <Card.Text>Chief Marketing Officer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 bg-light">
                <Image src={user3} alt="Team Member" roundedCircle className="my-3 mx-auto" width={120} height={120} />
                <Card.Body>
                  <Card.Title>Joyce Anderson</Card.Title>
                  <Card.Text>Lead Developer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 bg-light">
                <Image src={user6} alt="Team Member" roundedCircle className="my-3 mx-auto" width={120} height={120} />
                <Card.Body>
                  <Card.Title>Emily Davis</Card.Title>
                  <Card.Text>Product Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-5 text-center">
        <Container>
          <h2 className="display-5 fw-bold text-dark mb-5">What Our Customers Say</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Image src={user1} alt="Customer" roundedCircle width={60} height={60} fluid className="mb-3" />
                  <Card.Text>
                    "Amazing product! It has completely changed my life for the better"
                  </Card.Text>
                  <Card.Footer className="text-muted">Karen Williams</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Image src={user4} alt="Customer" roundedCircle width={60} height={60} fluid className="mb-3" />
                  <Card.Text>
                    "This product is a game-changer! It has revolutionized my life."
                  </Card.Text>
                  <Card.Footer className="text-muted">Jeson Perara</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Image src={user2} alt="Customer" roundedCircle width={60} height={60} fluid className="mb-3" />
                  <Card.Text>
                    "Such a wonderful experience! This product turned my life around."
                  </Card.Text>
                  <Card.Footer className="text-muted">Tim David</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            {/* Add more testimonials as needed */}
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 bg-primary text-white text-center">
        <Container>
          <h2 className="display-5 fw-bold mb-3">Join Us on Our Journey</h2>
          <p className="lead mb-4">
            Stay updated with the latest news and product releases.
          </p>
          <Button variant="light" className="px-5 py-2">
            Subscribe Now
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default About;
