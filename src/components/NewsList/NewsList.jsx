import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../redux/news/action.js";

const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const { newsList, loading, errorMsg } = news;
  useEffect(() => {
    dispatch(fetchNews());
    window.scrollTo({ top: 0, left: 0, height: window });
  }, [dispatch]);
  return (
    <Container className="news-container">
      {newsList.length ? (
        <Row>
          {newsList.map(
            (news, index) =>
              news.author && (
                <Col md={4} key={index} className="news-card">
                  <Card style={{ width: "25rem" }}>
                    <div className="news-header">
                      <Card.Title className="news-title">
                        {news.author}
                      </Card.Title>
                      <Card.Title
                        style={{
                          fontWeight: "normal",
                          fontSize: "15px",
                          marginTop: "12px",
                        }}
                      >
                        {news.publishedAt.substring(0, 10)}
                      </Card.Title>
                    </div>
                    <Card.Img
                      className="news-img"
                      variant="top"
                      src={news.urlToImage}
                    />
                    <Card.Body>
                      <Card.Title className="news-info">
                        {news.title.slice(0, 70)}....
                      </Card.Title>
                      <Card.Text
                        className="news-description"
                        style={{ textAlign: "center" }}
                      >
                        {news.description.length > 120
                          ? news.description.slice(0, 150)
                          : news.content}
                      </Card.Text>
                      <div className="news-footer">
                        <Button
                          className="news-btn"
                          variant="info"
                          as={NavLink}
                          to={`/news/${index}`}
                        >
                          Read More..
                        </Button>
                        <CopyToClipboard text={news.url}>
                          <Button>Share</Button>
                        </CopyToClipboard>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
          )}
        </Row>
      ) :  ( loading &&
        <>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p>{errorMsg}</p>
        </>
      )}
      {/* End of newsapi mapping */}

      {/* scroll button */}
      <Button
        variant="primary"
        className="scroll-btn"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, right: 0 });
        }}
      >
        Scoll Top
      </Button>
      {/* scroll button */}
    </Container>
  );
};

export default NewsList;
