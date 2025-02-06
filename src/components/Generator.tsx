import { useState, CSSProperties, MouseEvent, ChangeEvent } from "react";
import Braille from "braille";
import html2canvas from "html2canvas";
import saveAs from "file-saver";

const codeStyle: CSSProperties = {
  fontFamily: "Apple Braille",
  minHeight: "36px",
  marginTop: "20px",
  overflowWrap: "break-word",
  fontSize: "24px",
};

interface GeneratorState {
  code: string;
  text: string;
  pngUrl: string;
}

export default function Generator() {
  const [state, setState] = useState<GeneratorState>({
    code: "",
    text: "",
    pngUrl: "/",
  });

  const downloadJPG = (e: MouseEvent) => {
    e.preventDefault();
    html2canvas(document.querySelector("#code")!, {
      backgroundColor: "white",
    }).then((canvas) => {
      saveAs(canvas.toDataURL("image/jpeg"), "braille.jpg");
    });
  };

  const downloadPNG = (e: MouseEvent) => {
    e.preventDefault();
    html2canvas(document.querySelector("#code")!, {
      backgroundColor: "transparent",
    }).then((canvas) => {
      saveAs(canvas.toDataURL(), "braille.png");
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      text: e.target.value,
      code: Braille.toBraille(e.target.value),
    });
  };

  return (
    <section className="row">
      <div className="col-md-8 offset-md-2">
        <form>
          <div className="form-group">
            <input
              placeholder="Type in the text you want to convert..."
              value={state.text}
              onChange={handleChange}
              className="form-control form-control-lg"
              type="text"
              id="text-input"
              aria-label="Type in the text you want to convert"
            />
          </div>

          <div id="code" style={codeStyle}>
            <div>{state.code || ""}</div>
          </div>

          <div
            style={
              state.code ? { visibility: "visible" } : { visibility: "hidden" }
            }
          >
            <button
              style={{ marginTop: "20px", marginRight: "10px" }}
              className="btn btn-primary"
              id="downloadJPG"
              onClick={downloadJPG}
            >
              Download JPG
            </button>
            <button
              style={{ marginTop: "20px" }}
              className="btn btn-primary"
              id="downloadPNG"
              onClick={downloadPNG}
            >
              Download PNG
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
