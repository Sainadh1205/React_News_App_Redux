import {
  Container,
  Button,
  Spinner,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SingleNews = () => {

  const newsList = useSelector(state => state.news.newsList)
  const { id } = useParams();

  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, height: window });
  }, []);


  let news = newsList && id && newsList[id % newsList.length];
  
  
  return (
    <Container className="single-news-container">
      <Row>
        {newsList.length ? (
          <Col md={{ span: 10 }} className="single-news">
            <div className="single-news-header">
              <h3 className="display-6 single-news-author">{news.title}</h3>
              <span>by {news.author ? news.author : "Naredra Modi"}</span>
              <h1 className="display-6 single-news-date">
                {news.publishedAt.substring(0, 10)}
              </h1>
            </div>
            <img
              src={news.urlToImage}
              className="single-news-img"
              alt="single news article"
              width={700}
            />
            <div className="single-news-content">
              <p className=" single-news-content">{news.content}</p>
              <Button variant="light" href={news.url} target="_blank">
                Read More..
              </Button>
            </div>
            {/* Card from react bootstrap */}
            <>
              {/* <Card style={{ width: "100%" }}>
              <Row style={{ marginTop : "10px" }}>
                <Col md={{ span: 3 }}>
                  <Card.Title style={{ fontSize : "30px" }}>
                    {news.author ? news.author : "Narendra Modi"}
                  </Card.Title>
                </Col>
                <Col md={{span: 7 }}></Col>
                <Col ms={{span: 2 }}>
                  <Card.Title
                    style={{
                      float: "row-reverse",
                      fontWeight: "normal",
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    {news.publishedAt.substring(0, 10)}
                  </Card.Title>
                </Col>
              </Row>
              <Card.Img variant="top" src={news.urlToImage} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <hr />
                <br />
                <Card.Text style={{ textAlign: "center" }}>
                  {news.description}
                </Card.Text>
                <Card.Text style={{ textAlign: "center" }}>
                  {news.content}
                </Card.Text>
              </Card.Body>
              <Button variant="light" href={news.url} target="_blank">
                Read More..
              </Button>
            </Card> */}
            </>
          </Col>
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <Col>
          {/* <ul className="news-list">
            {newsList.map((news,index) => (
              <li><span as={NavLink} className="news-list-item" to={`/news/${index}`}>{news.title.slice(0,20)}</span></li>
            ))}
          </ul> */}
          <ListGroup
            as="ul"
            style={{ marginBottom: "30px", width: "300px", position: "fixed" }}
          >
            <ListGroup.Item active> Latest News</ListGroup.Item>
            {newsList.map(
              (news, index) =>
                index <= 9 && (
                  <ListGroup.Item as="li" key={index}>
                    <Button
                      as={NavLink}
                      className="news-list-item"
                      to={`/news/${index}`}
                    >
                      {news.title.slice(0, 20)}
                    </Button>
                  </ListGroup.Item>
                )
            )}
          </ListGroup>
        </Col>
      </Row>
      {/* End of newsapi mapping */}

      {/* scroll button */}
      <Button
        variant="primary"
        className="scroll-btn"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, height: window });
        }}
      >
        Scoll Top
      </Button>
      {/* scroll button */}
    </Container>
  );
};

export default SingleNews;
