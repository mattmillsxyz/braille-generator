import { MouseEvent } from "react";

import DownloadIcon from "./icons/DownloadIcon";

interface DownloadButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  text: string;
  color?: string;
}

// Define explicit color mappings to ensure Tailwind CSS doesn't purge these classes
const colorClasses = {
  blue: "bg-blue-600 hover:bg-blue-700",
  indigo: "bg-indigo-600 hover:bg-indigo-700", 
  purple: "bg-purple-600 hover:bg-purple-700",
  green: "bg-green-600 hover:bg-green-700",
  red: "bg-red-600 hover:bg-red-700",
  gray: "bg-gray-600 hover:bg-gray-700",
} as const;

export default function DownloadButton({
  onClick,
  text,
  color = "blue",
}: DownloadButtonProps) {
  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
  
  return (
    <button
      className={`flex items-center px-4 py-2 ${colorClass} text-white rounded-lg font-medium transition-colors duration-200`}
      id="downloadSVG"
      onClick={onClick}
    >
      <DownloadIcon className="w-5 h-5" />
      &nbsp;{text}
    </button>
  );
}
