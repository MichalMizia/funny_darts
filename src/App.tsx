import React from "react";
import Dartboard from "./components/Dartboard";
import Scoreboard from "./components/Scoreboard";
import GameInitialization from "./components/GameInitialization";
import useLocalStorage from "./hooks/useLocalStorage";

interface GameState {
  isGameStarted: boolean;
  playerNames: string[];
  numPlayers: number;
  throwsLeft: number;
  points: number;
}

interface PlayerState {
  currentPlayer: number;
  boosts: string[][];
}

const ALL_BOOSTS = [
  "Kolejną rundę rzucasz druga ręka, jeśli przynajmniej 2/3 rzuty nie będą punktowane to +50 pkt",
  "Przeciwnik mówi ci czy twój kolejny rzut ma trafić w wartość parzystą czy nie parzystą, jeśli nie trafisz tego co miałeś +50",
  "W kolejnej rundzie jeśli twoja liczba punktów nie będzie większa niż 50 pkt, to +50",
  "Przeciwni gracze dostają -50 pkt ",
  "Otwórz Instagrama, jeśli twój pierwszy reels nie będzie rasistowski to dostajesz +50",
];

function App() {
  const [gameState, setGameState] = useLocalStorage<GameState>(
    "LOCAL_STORAGE_GAMESTATE",
    {
      isGameStarted: false,
      playerNames: [],
      numPlayers: 1,
      throwsLeft: 3,
      points: 301,
    }
  );

  const [scores, setScores] = useLocalStorage<number[][]>(
    "LOCAL_STORAGE_SCORES",
    Array(gameState.numPlayers)
      .fill([])
      .map(() => [])
  );

  const [playerState, setPlayerState] = useLocalStorage<PlayerState>(
    "LOCAL_STORAGE_PLAYERSTATE",
    {
      currentPlayer: 0,
      boosts: Array(gameState.numPlayers)
        .fill([])
        .map(() => []),
    }
  );

  const handleScore = (points: number) => {
    const currentPlayerScore = scores[playerState.currentPlayer].reduce(
      (sum, score) => sum + score,
      0
    );

    if (gameState.points - currentPlayerScore - points < 1) {
      // score cannot be lower than 1, in normal darts game it should be 2
      // but we do not require to end with a double as we suck at darts
      return;
    }

    const newScores = [...scores];
    newScores[playerState.currentPlayer] = [
      ...newScores[playerState.currentPlayer],
      points,
    ];
    setScores(newScores);

    if (gameState.throwsLeft > 1) {
      setGameState({ ...gameState, throwsLeft: gameState.throwsLeft - 1 });
    } else {
      setGameState({ ...gameState, throwsLeft: 3 });
      setPlayerState({
        ...playerState,
        currentPlayer: (playerState.currentPlayer + 1) % gameState.numPlayers,
      });
    }
  };

  const handleStartGame = () => {
    setGameState({ ...gameState, isGameStarted: true, throwsLeft: 3 });
    setScores(
      Array(gameState.numPlayers)
        .fill([])
        .map(() => [])
    );
    setPlayerState({
      currentPlayer: 0,
      boosts: Array(gameState.numPlayers)
        .fill([])
        .map(() => []),
    });
  };

  const handlePlayerNameChange = (index: number, name: string) => {
    const newPlayerNames = [...gameState.playerNames];
    newPlayerNames[index] = name;
    setGameState({ ...gameState, playerNames: newPlayerNames });
  };

  const handleNumPlayersChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const num = parseInt(event.target.value, 10);
    setGameState({
      ...gameState,
      numPlayers: num,
      playerNames: Array(num).fill(""),
    });
    setPlayerState({
      ...playerState,
      boosts: Array(num)
        .fill([])
        .map(() => []),
    });
  };

  const handlePointsChange = (points: number) => {
    setGameState({ ...gameState, points });
  };

  const resetGame = () => {
    setGameState({
      isGameStarted: false,
      playerNames: [],
      numPlayers: 1,
      throwsLeft: 3,
      points: 301,
    });
    setScores([]);
    setPlayerState({
      currentPlayer: 0,
      boosts: Array(gameState.numPlayers)
        .fill([])
        .map(() => []),
    });
  };

  const undoMove = () => {
    if (scores.every((player) => player.length === 0)) {
      return;
    }
    const newScores = [...scores];
    let newCurrentPlayer = playerState.currentPlayer;
    let newThrowsLeft = gameState.throwsLeft;

    if (newThrowsLeft === 3) {
      // If throwsLeft is 3, it means the current player has just changed
      newCurrentPlayer =
        (playerState.currentPlayer - 1 + gameState.numPlayers) %
        gameState.numPlayers;
      newThrowsLeft = 1;
    } else {
      newThrowsLeft += 1;
    }

    if (newScores[newCurrentPlayer].length > 0) {
      newScores[newCurrentPlayer].pop();
    }

    setScores(newScores);
    setPlayerState({ ...playerState, currentPlayer: newCurrentPlayer });
    setGameState({ ...gameState, throwsLeft: newThrowsLeft });
  };

  const handleBoost = () => {
    const randomBoost =
      ALL_BOOSTS[Math.floor(Math.random() * ALL_BOOSTS.length)];
    const newBoosts = [...playerState.boosts];
    newBoosts[playerState.currentPlayer] = [
      ...newBoosts[playerState.currentPlayer],
      randomBoost,
    ];
    setPlayerState({ ...playerState, boosts: newBoosts });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {!gameState.isGameStarted ? (
        <div className="min-h-screen w-full flex items-center justify-center bg-white bg-gradient-to-tr from-red-300 to-blue-300 via-white">
          <GameInitialization
            numPlayers={gameState.numPlayers}
            playerNames={gameState.playerNames}
            onNumPlayersChange={handleNumPlayersChange}
            onPlayerNameChange={handlePlayerNameChange}
            onStartGame={handleStartGame}
            onPointsChange={handlePointsChange}
            points={gameState.points}
          />
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">
            Dartboard Game - {gameState.points}
          </h1>
          <div className="flex justify-start w-full">
            <Dartboard undoMove={undoMove} onScore={handleScore} />
            <Scoreboard
              maxPoints={gameState.points}
              scores={scores}
              currentPlayer={playerState.currentPlayer}
              playerNames={gameState.playerNames}
              throwsLeft={gameState.throwsLeft}
              resetGame={resetGame}
              handleScore={handleScore}
              handleBoost={handleBoost}
              boosts={playerState.boosts}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
