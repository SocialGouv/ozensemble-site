import React from "react";
import { Row, Col } from "react-bootstrap";

export function FeatureRow({
  image,
  imageSpan = 3,
  title,
  reverse = false,
  children,
}) {
  return (
    <React.Fragment>
      <Row
        style={{
          alignItems: "center",
          flexDirection: reverse ? "row-reverse" : "row",
          marginBottom: 30,
        }}
      >
        <Col xs={12} md={imageSpan} className="mb-3 mb-md-0">
          <img width={"100%"} src={image} alt={title} />
        </Col>
        <Col
          xs={12}
          md={12 - imageSpan}
          className={`text-center ${
            reverse ? "text-md-right" : "text-md-left"
          }`}
        >
          <h3 style={{ color: "var(--primary)" }}>{title}</h3>
          {children}
        </Col>
      </Row>
    </React.Fragment>
  );
}
