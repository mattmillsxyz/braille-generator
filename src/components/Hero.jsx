import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heroContent: {
    maxWidth: 640,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
});

const Hero = props => {
  const { classes } = props;

  return (
    <div className={classes.heroContent}>
      <Typography component="h1" variant="h2" align="center" gutterBottom>
        Braille Generator
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        component="p"
      >
        Simply type in a word or phrase to have it converted to braille. Click
        the download button to save the braille code as an image.
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Hero);
