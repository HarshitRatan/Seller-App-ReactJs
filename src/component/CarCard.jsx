import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack, Divider, Button, IconButton, Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PropaneTankOutlinedIcon from "@mui/icons-material/PropaneTankOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import CloudCircleOutlinedIcon from "@mui/icons-material/CloudCircleOutlined";

const CarCard = () => {
  return (
    <Card
      sx={{
        width: "25rem",
        height: "100%",
        backgroundColor: "#f2f5fc",
        borderRadius: "1rem",
        padding: "0.5rem",
        transition: "all ease 1s",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        ":hover": {
          backgroundColor: "#f3f6fd",
        },
      }}
    >
      <CardMedia
        component="img"
        image="https://cars.tatamotors.com/images/punch/punch-suv-home-mob.png"
        alt="car"
        style={{
          objectFit: "cover",
          width: "100%",
          borderRadius: "1rem",
          height: "15rem",
        }}
      />
      <CardContent style={{ marginTop: "0.5rem" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          // style={{ border: "2px solid red" }}
        >
          <Typography
            variant="h5"
            component="div"
            style={{
              fontWeight: 700,
            }}
          >
            Toyota RAV4
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={{
              border: "2px dashed #4898ed",
              padding: "0.25rem 1rem",
              borderRadius: "1rem",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          >
            2021
          </Typography>
        </Stack>

        <Grid
          container
          spacing={2}
          style={{
            marginTop: "0.5rem",
          }}
        >
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <GroupOutlinedIcon
              style={{
                color: "rgb(72, 152, 237)",
                marginRight: "0.5rem",
              }}
            />
            <Typography
              variant="h5"
              component="div"
              style={{
                fontSize: "0.9rem",
                color: "#5a677e",
                fontWeight: "600",
              }}
            >
              4 People
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <PropaneTankOutlinedIcon
              style={{
                color: "rgb(72, 152, 237)",
                marginRight: "0.5rem",
              }}
            />
            <Typography
              variant="h5"
              component="div"
              style={{
                fontSize: "0.9rem",
                color: "#5a677e",
                fontWeight: "600",
              }}
            >
              Gasoline
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          style={{
            marginTop: 0,
          }}
        >
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <SpeedOutlinedIcon
              style={{
                color: "rgb(72, 152, 237)",
                marginRight: "0.5rem",
              }}
            />
            <Typography
              variant="h5"
              component="div"
              style={{
                fontSize: "0.9rem",
                color: "#5a677e",
                fontWeight: "600",
              }}
            >
              7.1km / liter
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <CloudCircleOutlinedIcon
              style={{
                color: "rgb(72, 152, 237)",
                marginRight: "0.5rem",
              }}
            />
            <Typography
              variant="h5"
              component="div"
              style={{
                fontSize: "0.9rem",
                color: "#5a677e",
                fontWeight: "600",
              }}
            >
              Automatic
            </Typography>
          </Grid>
        </Grid>

        <Divider style={{ margin: "1.2rem 0" }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            variant="h5"
            component="div"
            style={{
              fontWeight: 700,
            }}
          >
            $440 /{" "}
            <span style={{ fontSize: "1rem", fontWeight: 600 }}>month</span>
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <IconButton
              size="medium"
              style={{
                borderRadius: "0.75rem",
                backgroundColor: "#daeafa",
                color: "rgb(72, 152, 237)",
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
            <Button
              size="medium"
              style={{
                borderRadius: "0.75rem",
                backgroundColor: "#4898ed",
                fontWeight: 600,
                height: "100%",
                padding: "0.5rem",
                color: "white",
              }}
            >
              Rent Now
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CarCard;
