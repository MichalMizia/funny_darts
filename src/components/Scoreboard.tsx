import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Input } from "./ui/input";

interface ScoreboardProps {
  scores: number[][];
  currentPlayer: number;
  playerNames: string[];
  throwsLeft: number;
  resetGame: () => void;
  handleScore: (points: number) => void;
  maxPoints: number;
  handleBoost: () => void;
  boosts: string[][];
}

const Scoreboard: React.FC<ScoreboardProps> = ({
  scores,
  currentPlayer,
  playerNames,
  throwsLeft,
  resetGame,
  maxPoints,
  handleScore,
  handleBoost,
  boosts,
}) => {
  const [manualScore, setManualScore] = useState<number | "">("");
  console.log(boosts);

  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [playerSums, setPlayerSums] = React.useState<number[]>(
    Array(scores.length).fill(maxPoints)
  );

  useEffect(() => {
    for (const linkRef of linkRefs.current) {
      if (linkRef) {
        linkRef.scrollIntoView({ behavior: "smooth" });
      }
    }

    const newPlayerSums = scores.map((playerScores) =>
      playerScores.reduce((sum, score) => sum - score, maxPoints)
    );
    setPlayerSums(newPlayerSums);
  }, [scores]);

  const handleManualScoreChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setManualScore(value === "" ? "" : parseInt(value, 10));
  };

  const handleManualScoreSubmit = () => {
    if (manualScore !== "" && !isNaN(manualScore)) {
      handleScore(manualScore);
      setManualScore("");
    }
  };

  return (
    <div className="mt-4 p-4 bg-white rounded shadow-md w-full max-w-4xl">
      <div className="flex flex-col mb-4 gap-4">
        <div className="flex gap-4">
          <Button
            onClick={() => resetGame()}
            className="text-xl px-10 py-6 border-2 border-red-500"
            variant={"destructive"}
          >
            Reset
          </Button>
          <Button
            onClick={() => handleBoost()}
            className="text-xl px-10 border-2 py-6"
            variant={"secondary"}
          >
            Drzwi
          </Button>
        </div>
        <form className="flex gap-4 w-fit">
          {/* <Button
            onClick={() => handleScore(0)}
            className="text-xl px-10 border-2 border-black py-6"
            variant={"default"}
          >
            Miss
          </Button> */}
          <Input
            type="number"
            value={manualScore}
            onChange={handleManualScoreChange}
            placeholder="Enter score"
            className="px-4 py-4 border-black"
          />
          <Button
            onClick={handleManualScoreSubmit}
            className="px-8 border-black py-4"
            variant={"default"}
            type="submit"
          >
            Add Score
          </Button>
        </form>
      </div>
      <div className="flex items-center justify-start mb-2 gap-4">
        <h2 className="text-2xl font-bold">
          Scores
          <span> (Throws left: {throwsLeft})</span>
        </h2>
        {/* <Button
          onClick={() => undoMove()}
          className="text-sm border-black flex  gap-0 items-center flex-col justify-center aspect-square rounded-full h-12 w-12"
          variant={"outline"}
        >
          Undo
          <RefreshCcwDotIcon size={10} />
        </Button> */}
      </div>
      <div className="flex">
        {scores.map((playerScores, index) => (
          <div key={index} className="w-64">
            <div
              className={`p-2 w-full border-blue-500 border rounded-t-sm ${
                currentPlayer === index ? "bg-blue-200 " : "border-blue-500"
              }`}
            >
              <div className="font-bold w-full">
                {playerNames[index] || `Player ${index + 1}`}:
                <span className="ml-4 text-xl text-right">
                  {playerSums[index]}
                </span>
              </div>
            </div>
            <ScrollArea
              className="h-72 rounded-b-sm border border-black/30 border-t-0"
              ref={(el) => (scrollRefs.current[index] = el)}
            >
              <div className="p-1">
                {playerScores.map((score, scoreIndex) => (
                  <div key={scoreIndex}>
                    <div className="font-semibold py-0.5 text-center text-2xl">
                      {score}
                    </div>
                    {scoreIndex < playerScores.length - 1 && <Separator />}
                  </div>
                ))}
                <a
                  ref={(el) => (linkRefs.current[index] = el)}
                  className="block mt-2"
                  id="end"
                ></a>
              </div>
            </ScrollArea>
          </div>
        ))}
      </div>
      {/* boosts */}
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Boosts</h3>
        <ul className="list-disc pl-5 max-w-2xl">
          {boosts.map((player_boosts, index) => (
            <li key={index} className="text-lg">
              {playerNames[index] || `Player ${index + 1}`}:{" "}
              {player_boosts[player_boosts.length - 1]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Scoreboard;
