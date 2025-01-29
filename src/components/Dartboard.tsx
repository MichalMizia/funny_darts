import React from "react";
import { Button } from "./ui/button";

interface DartboardProps {
  onScore: (points: number) => void;
  undoMove: () => void;
}

function nameToScore(name: string): number {
  if (name === "out") {
    return 0;
  } else if (name === "inner-bull") {
    return 50;
  } else if (name === "outer-bull") {
    return 25;
  } else {
    let p = name.split("-");
    let basic_point = parseInt(p[p.length - 1], 10);
    if (p[0] === "triple") {
      return basic_point * 3;
    } else if (p[0] === "double") {
      return basic_point * 2;
    } else {
      return basic_point;
    }
  }
}

const Dartboard: React.FC<DartboardProps> = ({ onScore, undoMove }) => {
  const handleClick = (points: string) => {
    const score = nameToScore(points);
    // console.log(score);
    onScore(score);
  };

  return (
    <div className="min-w-[800px] relative">
      <div className="absolute z-20 flex right-2 top-2 m-4">
        <Button
          variant={"outline"}
          className="rounded-full text-xl font-semibold z-10  h-20 w-20 border-4 border-current text-black hover:bg-blue-100 hover:text-blue-700"
          onClick={undoMove}
        >
          Undo
        </Button>
      </div>
      <div className="darts-board ">
        <div
          className="inner-bull"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="outer-bull"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>

        <div
          className="single-inner-1"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-2"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-3"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-4"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-5"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-6"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-7"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-8"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-9"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-10"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-11"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-12"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-13"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-14"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-15"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-16"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-17"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-18"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-19"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-inner-20"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>

        <div
          className="triple-1"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-2"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-3"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-4"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-5"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-6"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-7"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-8"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-9"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-10"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-11"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-12"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-13"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-14"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-15"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-16"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-17"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-18"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-19"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="triple-20"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>

        <div
          className="single-outer-1"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-2"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-3"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-4"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-5"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-6"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-7"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-8"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-9"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-10"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-11"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-12"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-13"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-14"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-15"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-16"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-17"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-18"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-19"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="single-outer-20"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>

        <div
          className="double-1"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-2"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-3"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-4"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-5"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-6"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-7"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-8"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-9"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-10"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-11"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-12"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-13"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-14"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-15"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-16"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-17"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-18"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-19"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>
        <div
          className="double-20"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>

        <div
          className="out"
          onClick={(e) => handleClick(e.currentTarget.className)}
        ></div>

        <span className="num num-1">1</span>
        <span className="num num-2">2</span>
        <span className="num num-3">3</span>
        <span className="num num-4">4</span>
        <span className="num num-5">5</span>
        <span className="num num-6">6</span>
        <span className="num num-7">7</span>
        <span className="num num-8">8</span>
        <span className="num num-9">9</span>
        <span className="num num-10">10</span>
        <span className="num num-11">11</span>
        <span className="num num-12">12</span>
        <span className="num num-13">13</span>
        <span className="num num-14">14</span>
        <span className="num num-15">15</span>
        <span className="num num-16">16</span>
        <span className="num num-17">17</span>
        <span className="num num-18">18</span>
        <span className="num num-19">19</span>
        <span className="num num-20">20</span>
      </div>
    </div>
  );
};

export default Dartboard;
