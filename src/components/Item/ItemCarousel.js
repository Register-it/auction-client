import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import { CardMedia } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 225,
    "@media (max-width: 680px)": {
      minWidth: "100%",
    },
  },
  cover: {
    width: 225,
    height: 169,
    "@media (max-width: 680px)": {
      width: "100%",
    },
  },
  toolbar: {
    justifyContent: "flex-end",
  },
}));

export default function ItemCarousel({ images, thumbnails }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Carousel
        className="SecondExample"
        autoPlay={false}
        animation={"slide"}
        indicators={true}
        navButtonsAlwaysVisible={true}
      >
        {thumbnails.map((item, index) => {
          return (
            <ImagePreview
              index={index}
              key={item}
              images={images}
              thumbnails={thumbnails}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function ImagePreview({ thumbnails, images, index }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CardMedia
        className={classes.cover}
        image={thumbnails[index]}
        onClick={handleClickOpen}
      />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="secondary"
            edge="start"
            onClick={handleClose}
            aria-label="close"
            size="medium"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Carousel
          className="SecondExample"
          autoPlay={false}
          animation={"slide"}
          indicators={true}
          navButtonsAlwaysVisible={true}
          index={index}
        >
          {images.map((item) => {
            return (
              <img
                src={item}
                key={item}
                width="100%"
                alt={"the item pic"}
              ></img>
            );
          })}
        </Carousel>
      </Dialog>
    </div>
  );
}
