import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I have a superpower, and it's not X-ray vision or the ability to fly (although that would be pretty cool). My superpower is coding. I can take a jumbled mess of 1s and 0s and turn it into a beautiful website that's easy to use and even easier on the eyes. If you're still skeptical, just check out my skills listing. It's pretty impressive.<br />
      
            
          </p>
          

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
