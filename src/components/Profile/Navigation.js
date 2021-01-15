import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import WatchedItems from "./WatchedItems";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (value !== index) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      id={`user-profile-menu-${index}`}
      aria-labelledby={`User menu ${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `user-profile-tab-${index}`,
    "aria-controls": `user-profile-menu-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Oggetti osservati" {...a11yProps(0)} />
        <Tab label="Le mie offerte" {...a11yProps(1)} />
        <Tab label="Oggedtti aggiudicati" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <WatchedItems title="Oggetti osservati" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WatchedItems title="Offerte" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WatchedItems title="Oggetti aggiudicati" />
      </TabPanel>
    </div>
  );
}
