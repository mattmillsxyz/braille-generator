import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import { Typography } from '@material-ui/core';

import GitHubIcon from '../assets/images/github-icon.png';

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    fontFamily: 'Apple Braille',
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  gitHubIcon: {
    width: '32px',
    height: '32px',
    marginTop: '4px',
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            ⠃⠗⠁⠊⠇⠇⠑⠀⠛⠑⠝⠑⠗⠁⠞⠕⠗
          </Typography>
          <Tooltip title="View source on GitHub">
            <span>
              <a
                href="https://github.com/mattmillsxyz/braille-generator"
                color="inherit"
              >
                <img
                  className={classes.gitHubIcon}
                  src={GitHubIcon}
                  alt="View Braille Generator source code on GitHub"
                />
              </a>
            </span>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
