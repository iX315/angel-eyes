"use client";
import { useState } from "react";
import { SvgInterpolator } from "./components/SvgInterpolator";
import { angryOpen, closed, happy, love, open } from "./components/eyes/shapes";
import { Shape } from "flubber";

export default function Home() {
  const [current, setCurrent] = useState(open);
  const [previous, setPrevious] = useState<Shape>();

  const handleChange = (newShape: Shape) => {
    setPrevious(current);
    setCurrent(newShape);
  };

  return (
    <main>
      <div className="flex min-h-screen justify-around items-center p-24">
        <SvgInterpolator current={current} previous={previous} />
        <SvgInterpolator
          current={current}
          previous={previous}
          style={{ transform: "scale(-1, 1)" }}
        />
      </div>
      <div className="flex gap-2">
        <button
          className="p-2 border border-red-100"
          onClick={() => handleChange(open)}
        >
          open
        </button>
        <button
          className="p-2 border border-red-100"
          onClick={() => handleChange(closed)}
        >
          closed
        </button>
        <button
          className="p-2 border border-red-100"
          onClick={() => handleChange(angryOpen)}
        >
          angry
        </button>
        <button
          className="p-2 border border-red-100"
          onClick={() => handleChange(happy)}
        >
          happy
        </button>
        <button
          className="p-2 border border-red-100"
          onClick={() => handleChange(love)}
        >
          love
        </button>
      </div>
    </main>
  );
}
