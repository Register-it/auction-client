import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Fab from "@material-ui/core/Fab"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import React from "react"
import Search from "../components/Search/Search"
import { Link } from "react-router-dom"
import Footer from "./Footer"

export default function AppContainer({ children }) {
  const classes = useStyles()
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            component={Link}
            to="/"
          >
            Auctions
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
      <span id="back-to-top-anchor" />
      <Container
        className={classes.container}
        classes={{ maxWidthMd: classes.maxWidthMd }}
        maxWidth="md"
        component="main"
      >
        {children}
      </Container>
      <Footer />
      <ScrollToggle>
        <ScrollTop>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ScrollToggle>
    </>
  )
}

function ScrollTop(props) {
  const { children } = props
  const classes = useStyles()

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "end" })
    }
  }

  return (
    <div onClick={handleClick} role="presentation" className={classes.root}>
      {children}
    </div>
  )
}
function ScrollToggle(props) {
  const { children, threshold = 100 } = props
  const scrollOverThreshold = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold
  })

  return (
    <div
      role="presentation"
      className={scrollOverThreshold ? "fade-in" : "fade-out"}
    >
      {children}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  title: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    color: "inherit",
    textDecoration: "none"
  },
  titleImage: {
    marginRight: theme.spacing(1)
  },
  container: {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    margin: "auto"
  },
  maxWidthMd: {
    maxWidth: 680
  }
}))
