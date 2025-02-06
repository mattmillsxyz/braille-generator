"use client";

import { useState, MouseEvent, ChangeEvent } from "react";
import Braille from "braille";
import html2canvas from "html2canvas";

import DownloadIcon from "./icons/DownloadIcon";
import { sanitizeFileName } from "../utils";
import DownloadButton from "./DownloadButton";

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

  const downloadSVG = (e: MouseEvent) => {
    e.preventDefault();
    const sanitizedText = sanitizeFileName(state.text || "untitled");
    const fileName = `braille-generator-${sanitizedText}.svg`;

    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="100">
        <style>
          @font-face {
            font-family: 'UBraille';
            src: url('${window.location.origin}/fonts/UnBraille.ttf') format('truetype');
          }
        </style>
        <text 
          x="10" 
          y="50" 
          font-family="UBraille" 
          font-size="36px"
          fill="black"
        >${state.code}</text>
      </svg>
    `;

    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
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
            placeholder="Type something..."
            value={state.text}
            onChange={handleChange}
            className="w-full px-4 py-2 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            type="text"
            id="text-input"
            aria-label="Type something..."
          />
        </div>

        <div
          id="code"
          className="font-['UBraille'] min-h-[36px] mt-5 break-words text-3xl"
        >
          <div>{state.code || ""}</div>
        </div>

        <div className={`flex gap-2 mt-8 ${state.code ? "visible" : "hidden"}`}>
          <DownloadButton onClick={downloadJPG} text="JPG" color="blue" />
          <DownloadButton onClick={downloadPNG} text="PNG" color="indigo" />
          <DownloadButton onClick={downloadSVG} text="SVG" color="purple" />
        </div>
      </form>
    </section>
  );
}
