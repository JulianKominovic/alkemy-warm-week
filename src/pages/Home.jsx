import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Spinner,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Paginator from "../components/Paginator";
import PostCard from "../components/PostCard";
import usePosts from "../hooks/usePosts";

const MAX_POSTS_PER_PAGE = 10;
const Home = () => {
  const { getAllPosts } = usePosts();
  const [page, setPage] = useState(0);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [searchingId, setSearchingId] = useState(-1);

  const handleSearchByIdChange = (e) => {
    if (e.target.value === "") {
      setSearchingId(-1);
    } else {
      setSearchingId(parseInt(e.target.value));
    }
  };

  useEffect(() => {
    setLoadingPosts(false);
  }, [getAllPosts]);

  return (
    <Container className="py-4" fluid>
      <h1>Posts</h1>
      <InputGroup className="mb-3">
        <FormControl
          type="number"
          onChange={handleSearchByIdChange}
          placeholder="Search by id"
          aria-label="Search by id"
          aria-describedby="search-by-id"
        />
      </InputGroup>
      <Row>
        <Col>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h2>List</h2>
              <Link to="/create">
                <Button variant="primary">Add post</Button>
              </Link>
            </Card.Header>
            {/* LOADING SPINNER OR POSTS */}
            {!loadingPosts ? (
              <ListGroup>
                {/* LOADS ALL POSTS WITH PAGINATION */}
                {getAllPosts().map((post, i) =>
                  i >= MAX_POSTS_PER_PAGE * page &&
                  i < MAX_POSTS_PER_PAGE * (page + 1) &&
                  searchingId === -1 ? (
                    <PostCard key={post.id} {...post} />
                  ) : null
                )}
                {/* LOADS ONLY THE POST SEARCH BY ID */}

                {getAllPosts().map((post) =>
                  post.id === searchingId ? (
                    <PostCard key={post.id} {...post} />
                  ) : null
                )}
              </ListGroup>
            ) : (
              <Container className="d-flex m-5 justify-content-center">
                <Spinner animation="grow" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </Container>
            )}
          </Card>
        </Col>
      </Row>
      <Row className="py-5 d-flex justify-content-center">
        <Paginator setPage={setPage} currentPage={page} minPage={0}></Paginator>
      </Row>
    </Container>
  );
};

export default Home;
