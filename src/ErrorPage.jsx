import React from "react";
import { Typography, Container, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Container sx={{ textAlign: "center", padding: "2rem" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Some Error Happened!
        </Typography>
        <Link to="/">Go Home</Link>
      </Container>
      <CssBaseline />
    </>
  );
};

export default ErrorPage;
