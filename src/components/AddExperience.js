import React, { useState } from "react";
import { Form, Navbar, Button } from "react-bootstrap";




const AddExperience = () => {
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [pictureUrl, setPictureUrl] = useState("");
  // the below are details you only see when you go to single experience page (viewExpInfo)
  const [city, setCity] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState(0);
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [host, setHost] = useState("");
  const [whatToBring, setWhatToBring] = useState("");
  const [tags, setTags] = useState("");

  const createExperience = async (e) => {
    e.preventDefault();
    const experienceData = {
      title,
      country,
      price,
      duration,
      pictureUrl,
      city,
      maxGroupSize,
      language,
      description,
      host,
      whatToBring,
      tags,
    };
    console.log("exper data:", experienceData)
    // to send this, send a POST request to API
    const newExperience = await fetch("http://localhost:5000/experiences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experienceData),

    });
    alert("Your Event Has Been Added")
    setTitle("");
    setCountry("");
    setPrice(0);
    setDuration(0);
    setPictureUrl("");
    setCity("");
    setMaxGroupSize(0);
    setLanguage("");
    setDescription("");
    setHost("");
    setWhatToBring("");
    setTags("")
  };

  return (
    <div className="addExp">
      <Navbar bg="white" variant="light" className="navbar">
        <div className="container">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="auto"
              className="d-inline-block align-center"
            />{" "}
            <span style={{ paddingLeft: "10px" }}>Online Experiences</span>
          </Navbar.Brand>
        </div>
      </Navbar>
      <div style={{ height: "50px" }}></div>
      <br />
      <h3>Create a New Experience</h3>
      <hr />
      <Form className="container inputForm" onSubmit={createExperience}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group controlId="whatToBring">
          <Form.Label>What to Bring:</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={whatToBring}
            onChange={(e) => setWhatToBring(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="host">
          <Form.Label>Host Name</Form.Label>
          <Form.Control
            type="text"
            value={host}
            onChange={(e) => setHost(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group controlId="spokenLanguage">
          <Form.Label>Spoken Language</Form.Label>
          <Form.Control
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

      <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="duration">
        <Form.Label>Duration</Form.Label>
        <Form.Control
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <Form.Text className="text-muted">Enter duration in hours</Form.Text>
      </Form.Group>

      <Form.Group controlId="pictureUrl">
        <Form.Label>Picture URL</Form.Label>
        <Form.Control
          type="text"
          value={pictureUrl}
          onChange={(e) => setPictureUrl(e.target.value)}
        />
      </Form.Group>

        <Form.Group controlId="maxGroupSize">
          <Form.Label>Max Group Size</Form.Label>
          <Form.Control
            type="number"
            value={maxGroupSize}
            onChange={(e) => setMaxGroupSize(e.target.value)}
          />
        </Form.Group>


        <Form.Group controlId="tags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddExperience;
