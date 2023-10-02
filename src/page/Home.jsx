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
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { updatePageState } from "../redux/action/handlePageChangeAction";

const Home = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.handlePageChange);

  const id = useParams().id;
  const navigate = useNavigate();
  
  const [visibleFrom, setVisibleFrom] = React.useState(0);
  const [visibleTo, setVisibleTo] = React.useState(6);
  const [search, setSearch] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [carData, setCardata] = React.useState(CarData);

  const handleChange = (event, value) => {
    dispatch(updatePageState(value));
  };

  useEffect(() => {
    setIsLoading(true);
    if (search === "") {
      setCardata(CarData);
    }
    const handleSearch = setTimeout(() => {
      dispatch(updatePageState(1));
      const newCarData = CarData.filter((value) =>
        value.name
          .toLowerCase()
          .toString()
          .includes(search.toLowerCase().toString())
      );
      setCardata(newCarData);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(handleSearch);
  }, [search, dispatch]);

  useEffect(() => {
    if (id === undefined) {
      setVisibleFrom(0);
      setVisibleTo(6);
    } else {
      var visible_To = id * 6;
      var visible_From = visible_To - 6;
      setVisibleFrom(visible_From);
      setVisibleTo(visible_To);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    navigate(`/page/${page}`);
  }, [page, navigate]);

  return (
    <Box sx={{ marginTop: "25px", marginBottom: "50px" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          borderRadius: "1rem",
          padding: "1rem",
          marginBottom: "2.5rem",
          backgroundColor: "#eaeff4",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        }}
      >
        <Box
          style={{
            backgroundColor: "white",
            borderRadius: "1rem",
            padding: "0.2rem 0.5rem",
            width: 400,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{
              backgroundColor: "white",
              borderRadius: "1rem",
              fontWeight: 500,
              padding: "0.5rem",
            }}
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
        <Box style={{ marginLeft: "2rem" }}>
          <Typography
            variant="h5"
            component="div"
            style={{
              fontSize: "0.9rem",
              color: "#5a677e",
              fontWeight: "600",
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Relevance <KeyboardArrowDownOutlinedIcon />
          </Typography>
        </Box>
        <Box style={{ marginLeft: "2rem" }}>
          <Typography
            variant="h5"
            component="div"
            style={{
              fontSize: "0.9rem",
              color: "#5a677e",
              fontWeight: "600",
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            All Brands <KeyboardArrowDownOutlinedIcon />
          </Typography>
        </Box>
      </Box>
      {isLoading && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 100,
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {!isLoading && carData.length > 0 && (
        <Grid container spacing={2} mb={2}>
          {carData.slice(visibleFrom, visibleTo).map((value, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CarCard {...value} />
            </Grid>
          ))}
        </Grid>
      )}
      {!isLoading && carData.length === 0 && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 100,
          }}
        >
          No car found from this name
        </Box>
      )}
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
          disabled={search.length > 0 ? true : false}
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
