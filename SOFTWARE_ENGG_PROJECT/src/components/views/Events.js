import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import EventsNavbar from "./EventsNavbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Events() {
  const [Events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://se-event-management.azurewebsites.net/Event")
      // .then((data) => data.json())
      // .then((response) => console.log(response, "api response"));
      .then((response) => {
        setEvents(response?.data);
        console.log(response);
      });
  }, []);

  return (
    <>
      <EventsNavbar />
      <div
        style={{
          display: "flex",
          height: "100px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>ALL EVENTS</h2>
      </div>
  
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "38px"
        }}
      >
        <Row xs={4} md={4}>
          {Events.length &&
            Events.map((event) => (
              <Col style={{marginBottom:"32px"}}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="event1.jpeg" />
                  <Card.Body>
                    <Card.Title>{event.eventName}</Card.Title>
                    <Card.Text>{event.eventDescription}</Card.Text>
                    <Card.Text> City:{event.eventCity} </Card.Text>
                    <Card.Text>State: {event.eventState}</Card.Text>
                    <Card.Text>Address:{event.eventAddress}</Card.Text>
                    <Button variant="primary">BOOK</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
}

export default Events;
