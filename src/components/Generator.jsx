import React from 'react';
import Braille from 'braille';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';

const codeStyle = {
  fontFamily: 'Apple Braille',
  minHeight: '36px',
  marginTop: '20px',
  overflowWrap: 'break-word',
  fontSize: '24px',
};

class Generator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      text: '',
      pngUrl: '/',
    };
  }

  downloadPNG = e => {
    e.preventDefault();
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
    return (
      <section className="row">
        <div className="col-md-8 offset-md-2">
          <form>
            <div className="form-group">
              <input
                placeholder="Type in the text you want to convert..."
                value={this.state.text}
                onChange={this.handleChange}
                className="form-control form-control-lg"
                type="text"
                id="text-input"
                aria-label="Type in the text you want to convert"
              />
            </div>

            <div id="code" style={codeStyle}>
              <div>{this.state.code || ''}</div>
            </div>

            <div
              style={
                this.state.code
                  ? { visibility: 'visible' }
                  : { visibility: 'hidden' }
              }
            >
              <button
                style={{ marginTop: '20px' }}
                className="btn btn-primary"
                id="downloadPNG"
                onClick={this.downloadPNG}
              >
                Download PNG
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Generator;
