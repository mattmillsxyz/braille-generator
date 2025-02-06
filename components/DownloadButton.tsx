import { MouseEvent } from "react";

import DownloadIcon from "./icons/DownloadIcon";

interface DownloadButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  text: string;
  color?: string;
}

export default function DownloadButton({
  onClick,
  text,
  color = "blue",
}: DownloadButtonProps) {
  return (
    <button
      className={`flex items-center px-4 py-2 bg-${color}-600 text-white rounded-lg hover:bg-${color}-700 font-medium`}
      id="downloadSVG"
      onClick={onClick}
    >
      <DownloadIcon className="w-5 h-5" />
      &nbsp;{text}
    </button>
  );
}
