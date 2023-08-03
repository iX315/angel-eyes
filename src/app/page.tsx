"use client";
import { useState } from "react";
import { SvgInterpolator } from "./components/SvgInterpolator";
import { angryOpen, closed, happy, love, open } from "./components/eyes/shapes";
import { Shape } from "flubber";
import { Button } from "./components/Button";

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
        <Button onClick={() => handleChange(open)}>open</Button>
        <Button onClick={() => handleChange(closed)}>closed</Button>
        <Button onClick={() => handleChange(angryOpen)}>angry</Button>
        <Button onClick={() => handleChange(happy)}>happy</Button>
        <Button onClick={() => handleChange(love)}>love</Button>
      </div>
    </main>
  );
}
