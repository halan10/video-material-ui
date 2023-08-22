import "./VideoCarousel.css";
import React from "react";
import v1 from "./video/v1.mp4";
import v2 from "./video/v2.mp4";
import v3 from "./video/v3.mp4";
import ReactPlayer from "react-player";
import Carousel from "react-material-ui-carousel";
import { Typography, makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    background: "linear-gradient(45deg, #000 30%, #666 90%)",
  },
  overlay: {
    background: "linear-gradient(45deg, #000 30%, #666 90%)",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  content: {
    position: "relative",
    color: "white",
  },
  player: {
    position: "relative",
  },
});

const VideoCarousel = () => {
  const classes = useStyle();
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: v1,
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 2,
      title: "Video 2",
      src: v2,
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 3,
      title: "Video 3",
      src: v3,
      credit: "Video by cottonbro from Pexels",
    },
  ];
  return (
    <Container className={classes.root}>
      <Carousel className={classes.overlay}>
        {videoProperties.map((item, i) => {
          return (
            <div key={i} {...item}>
              <ReactPlayer
                className={classes.player}
                url={item.src}
                width="100%"
                pip={true}
                playing={true}
                loop={true}
                muted={true}
              />
              <Typography className={classes.content}>{item.title}</Typography>
              <Typography className={classes.content}>{item.credit}</Typography>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

/* {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                width="100%"
                pip={true}
                playing={true}
                loop={true}
                muted={true}
              />
              <Carousel.Caption>
                <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })} */

export default VideoCarousel;
