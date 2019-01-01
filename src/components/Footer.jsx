import React from 'react';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
  return (
    <Typography color="textPrimary" gutterBottom>
      Built with{' '}
      <span role="img" aria-label="Love">
        ❤️
      </span>{' '}
      by <a href="https://twitter.com/mattmillsxyz">Matt Mills</a>.
    </Typography>
  );
};

export default Footer;
