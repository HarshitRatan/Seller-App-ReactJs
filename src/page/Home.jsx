import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CarCard from "../component/CarCard";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import CarData from "../data/CarData.json";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const Home = () => {
  const id = useParams().id;
  const navigate = useNavigate();

  const [page, setPage] = React.useState(1);
  const [visibleFrom, setVisibleFrom] = React.useState(0);
  const [visibleTo, setVisibleTo] = React.useState(6);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    console.log("id :: ", id);
    if (id === undefined) {
      setVisibleFrom(0);
      setVisibleTo(6);
    } else {
      var visible_To = id * 6;
      var visible_From = visible_To - 6;
      setVisibleFrom(visible_From);
      setVisibleTo(visible_To);
    }
  }, [id]);

  useEffect(() => {
    navigate(`/page/${page}`);
  }, [page, navigate]);

  return (
    <Box sx={{ marginTop: "100px", marginBottom: "50px" }}>
      <Typography variant="h4">Welcome To Home Page</Typography>
      <Grid container spacing={2} mb={2}>
        {CarData.slice(visibleFrom, visibleTo).map((value, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <CarCard {...value} />
          </Grid>
        ))}
      </Grid>
      <Stack
        spacing={2}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "1rem",
          padding: "0.5rem",
          backgroundColor: "#eaeff4",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
      >
        <Typography
          style={{
            fontSize: "0.9rem",
            color: "#5a677e",
            fontWeight: "600",
            textTransform: "capitalize",
            marginLeft: 10,
          }}
        >
          {page} from 10
        </Typography>
        <Pagination
          count={10}
          page={page}
          onChange={handleChange}
          style={{ marginTop: 0 }}
          renderItem={(item) => (
            <PaginationItem
              style={{
                fontWeight: 600,
                margin: 5,
                borderRadius: "10px",
                backgroundColor: "white",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
              slots={{
                previous: ArrowBackOutlinedIcon,
                next: ArrowForwardOutlinedIcon,
              }}
              {...item}
            />
          )}
        />
      </Stack>
    </Box>
  );
};

export default Home;
