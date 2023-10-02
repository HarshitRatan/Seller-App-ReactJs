import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CarCard from "../component/CarCard";
import { useEffect } from "react";
import { useParams } from "react-router";
import CarData from "../data/CarData.json";
import Grid from "@mui/material/Grid";

const Home = () => {
  const id = useParams();
  useEffect(() => {
    console.log("id :: ", id.id);
  }, [id]);
  return (
    <Box sx={{ marginTop: "100px", marginBottom: "25px" }}>
      <Typography variant="h4">Welcome To Home Page</Typography>

      <Grid container spacing={2} mb={12}>
        {CarData.map((value, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <CarCard {...value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
