import { useState } from "react";
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header"; 
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";
import { Container, Row, Col } from "react-bootstrap";

const API_URL =process.env.REACT_APP_API_URL || "http://127.0.0.1:5050";

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    
    // fetch(`${API_URL}/new-image?query=${word}`)
    // //fetch(`${API_URL}/new-image?query=${encodeURIComponent(word)}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('adding found image tothe state');
    //     setImages([{ ...data, title: word }, ...images]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    
    try {
      const res=await axios.get(`${API_URL}/new-image?query=${word}`);
      setImages([{ ...res.data, title: word }, ...images]);
      
    } catch (error) {
      console.log(error);
    }

    
    setWord("");
  };
  //console.log(process.env.REACT_APP_UNSPLASH_KEY);

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;

/*
import React, { useState, useEffect } from "react"; // Import useEffect for API calls
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([data, ...images]); // This line could be problematic; see the explanation below.
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  useEffect(() => {
    // Since setImages is asynchronous, you may want to use the previous images state to avoid issues with the state update.
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setImages((prevImages) => [data, ...prevImages]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [word]); // This useEffect will run whenever the 'word' state changes.

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
*/
