import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CarCard from "../component/CarCard";
import { useEffect } from "react";
import { useParams } from "react-router";

const Home = () => {
  const id = useParams();
  useEffect(() => {
    console.log("id :: ", id.id);
  }, [id]);
  return (
    <Container sx={{ marginTop: "100px", marginBottom: "25px" }}>
      <Typography variant="h4">Welcome To Home Page</Typography>
      <CarCard />
    </Container>
  );
};

export default Home;
