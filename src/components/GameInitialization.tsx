import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GameInitializationProps {
  numPlayers: number;
  playerNames: string[];
  onNumPlayersChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPlayerNameChange: (index: number, name: string) => void;
  onStartGame: () => void;
  onPointsChange: (points: number) => void;
  points: number;
}

const GameInitialization: React.FC<GameInitializationProps> = ({
  numPlayers,
  playerNames,
  onNumPlayersChange,
  onPlayerNameChange,
  onStartGame,
  onPointsChange,
  points,
}) => {
  return (
    <div className="flex flex-col items-center bg-white z-10 p-6 rounded-lg shadow-md shadow-black/30 border border-black/20">
      <h1 className="text-3xl font-bold mb-4">Dartboard Game Setup</h1>
      <label className="mb-4 w-full">
        <span className="block text-gray-700">Number of Players:</span>
        <Input
          type="number"
          value={numPlayers}
          onChange={onNumPlayersChange}
          min="1"
          className="mt-1 p-2 border rounded w-full"
        />
      </label>
      {Array.from({ length: numPlayers }).map((_, index) => (
        <label key={index} className="mb-4 w-full">
          <span className="block text-gray-700">Player {index + 1} Name:</span>
          <Input
            type="text"
            value={playerNames[index] || "Player " + (index + 1)}
            onChange={(e) => onPlayerNameChange(index, e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </label>
      ))}
      <div className="mb-4 w-full">
        <span className="block text-gray-700 mb-2">Select Points to Win:</span>
        <Tabs
          defaultValue={points.toString()}
          onValueChange={(value) => onPointsChange(parseInt(value, 10))}
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="301">301</TabsTrigger>
            <TabsTrigger value="501">501</TabsTrigger>
            <TabsTrigger value="701">701</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <Button
        onClick={onStartGame}
        variant={"outline"}
        className="mt-4 p-2 bg-blue-500 text-white rounded w-full"
      >
        Start Game
      </Button>
    </div>
  );
};

export default GameInitialization;
