import React, { useState } from "react";
import Tetris from "react-tetris";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const characters = [
  { name: "河马", image: "/images/hippo.png" },
  { name: "鸵鸟", image: "/images/ostrich.png" },
  { name: "猫", image: "/images/cat.png" },
  { name: "狗", image: "/images/dog.png" },
  { name: "羊", image: "/images/sheep.png" },
  { name: "鱼", image: "/images/fish.png" },
];

const Index = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>选择你的角色</CardTitle>
        </CardHeader>
        <CardContent>
          <Select onValueChange={(value) => setSelectedCharacter(characters.find(c => c.name === value))}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="选择一个角色" />
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
          {({ Gameboard, points, linesCleared, state, reset, pause, resume, start }) => (
            <div className="flex flex-col items-center">
              <Gameboard />
              <div className="flex space-x-2 mt-4">
                <Button onClick={start}>开始</Button>
                <Button onClick={reset}>重置</Button>
                {state === "PAUSED" ? (
                  <Button onClick={resume}>继续</Button>
                ) : (
                  <Button onClick={pause}>暂停</Button>
                )}
              </div>
              <div className="mt-4">
                <p>分数: {points}</p>
                <p>消除的行数: {linesCleared}</p>
              </div>
            </div>
          )}
        </Tetris>
      </div>
    </div>
  );
};

export default Index;