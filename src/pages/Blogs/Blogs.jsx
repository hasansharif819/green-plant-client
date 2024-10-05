import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import pl1 from "../../assets/images/pl1.jpg"
import pl2 from "../../assets/images/pl2.jpg"
import pl3 from "../../assets/images/pl3.jpg"

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "The Best Indoor Plants",
      description: "Discover the top indoor plants that are easy to care for and bring life to your home.",
      imageUrl: pl1,
    },
    {
      id: 2,
      title: "How to Care for Succulents",
      description: "A complete guide on how to take care of succulents for beginners.",
      imageUrl: pl2,
    },
    {
      id: 3,
      title: "10 Plants That Purify Air",
      description: "These plants not only beautify your home but also purify the air.",
      imageUrl: pl3,
    },
  ];

  return (
    <div className="blog-page bg-light-green py-5">
      <Container>
        <h1 className="text-center mb-5 text-dark-green">Our Plant Blog</h1>
        <Row>
          {blogs.map((blog) => (
            <Col key={blog.id} md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={blog.imageUrl} height={300} width={400} alt={blog.title} />
                <Card.Body>
                  <Card.Title className="text-center">{blog.title}</Card.Title>
                  <Card.Text>{blog.description}</Card.Text>
                  <Button
                    variant="success"
                    className="d-block mx-auto"
                    href={`/blogs/${blog.id}`}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogPage;
