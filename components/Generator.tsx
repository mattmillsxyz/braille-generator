"use client";

import { useState, MouseEvent, ChangeEvent } from "react";
import Braille from "braille";
import html2canvas from "html2canvas";

import { sanitizeFileName } from "../utils";

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
    const sanitizedText = sanitizeFileName(state.text || "untitled");
    const fileName = `braille-generator-${sanitizedText}.jpg`;
    html2canvas(document.querySelector("#code")!, {
      backgroundColor: "white",
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = fileName;
      link.href = canvas.toDataURL("image/jpeg");
      link.click();
    });
  };

  const downloadPNG = (e: MouseEvent) => {
    e.preventDefault();
    const sanitizedText = sanitizeFileName(state.text || "untitled");
    const fileName = `braille-generator-${sanitizedText}.png`;
    html2canvas(document.querySelector("#code")!, {
      backgroundColor: "transparent",
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = fileName;
      link.href = canvas.toDataURL();
      link.click();
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
    <section className="flex w-full mt-4">
      <form className="w-full">
        <div className="mb-4 w-full">
          <input
            placeholder="Type in the text you want to convert..."
            value={state.text}
            onChange={handleChange}
            className="w-full px-4 py-2 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            type="text"
            id="text-input"
            aria-label="Type in the text you want to convert"
          />
        </div>

        <div
          id="code"
          className="font-['UBraille'] min-h-[36px] mt-5 break-words text-3xl"
        >
          <div>{state.code || ""}</div>
        </div>

        <div
          style={
            state.code ? { visibility: "visible" } : { visibility: "hidden" }
          }
        >
          <button
            className="mt-5 mr-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            id="downloadJPG"
            onClick={downloadJPG}
          >
            Download JPG
          </button>
          <button
            className="mt-5 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
            id="downloadPNG"
            onClick={downloadPNG}
          >
            Download PNG
          </button>
        </div>
      </form>
    </section>
  );
}
