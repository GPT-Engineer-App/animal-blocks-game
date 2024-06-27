import React, { useState } from "react";
import Tetris from "react-tetris";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const characters = [
  { name: "Hippo", image: "/images/hippo.png" },
  { name: "Ostrich", image: "/images/ostrich.png" },
  { name: "Cat", image: "/images/cat.png" },
  { name: "Dog", image: "/images/dog.png" },
  { name: "Sheep", image: "/images/sheep.png" },
  { name: "Fish", image: "/images/fish.png" },
];

const Index = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Select Your Character</CardTitle>
        </CardHeader>
        <CardContent>
          <Select onValueChange={(value) => setSelectedCharacter(characters.find(c => c.name === value))}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a character" />
            </SelectTrigger>
            <SelectContent>
              {characters.map((character) => (
                <SelectItem key={character.name} value={character.name}>
                  {character.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex justify-center mt-4">
            <img src={selectedCharacter.image} alt={selectedCharacter.name} className="w-24 h-24" />
          </div>
        </CardContent>
      </Card>
      <div className="w-full flex justify-center">
        <Tetris>
          {({ Gameboard, points, linesCleared, state, reset, pause, resume }) => (
            <div className="flex flex-col items-center">
              <Gameboard />
              <div className="flex space-x-2 mt-4">
                <Button onClick={reset}>Reset</Button>
                {state === "PAUSED" ? (
                  <Button onClick={resume}>Resume</Button>
                ) : (
                  <Button onClick={pause}>Pause</Button>
                )}
              </div>
              <div className="mt-4">
                <p>Points: {points}</p>
                <p>Lines Cleared: {linesCleared}</p>
              </div>
            </div>
          )}
        </Tetris>
      </div>
    </div>
  );
};

export default Index;