import React from 'react';
import Braille from 'braille';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  actionButtons: {
    marginTop: '30px',
  },
  codeContainer: {
    fontFamily: 'Apple Braille',
    minHeight: '18px',
    marginTop: '30px',
    textAlign: 'center',
    overflowWrap: 'break-word',
    fontSize: '24px',
  },
  textInput: {
    textAlign: 'center !important',
  },
});

class Generator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      text: '',
      pngUrl: '/',
    };
  }

  downloadPNG = () => {
    html2canvas(document.querySelector('#code'), {
      backgroundColor: 'transparent',
    }).then(function(canvas) {
      saveAs(canvas.toDataURL(), 'braille.png');
    });
  };

  handleChange = e => {
    this.setState({
      text: e.target.value,
      code: Braille.toBraille(e.target.value),
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" direction="column" wrap="nowrap">
        <TextField
          placeholder="Type in the text you want to convert..."
          value={this.state.text}
          onChange={this.handleChange}
          fullWidth
          className={classes.textInput}
          inputProps={{
            style: { textAlign: 'center' },
          }}
        />
        <div id="code" className={classes.codeContainer}>
          {this.state.code || ''}
        </div>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          className={classes.actionButtons}
          style={
            this.state.code
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
        >
          <Grid item>
            <Button
              id="downloadPNG"
              variant="contained"
              size="large"
              color="secondary"
              onClick={this.downloadPNG}
            >
              Download PNG
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Generator);
