import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const API_URL = "https://rickandmortyapi.com/api/character";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      });
  }, [page]);

  const handleNext = () => {
    if (info.next) setPage(page + 1);
  };

  const handlePrev = () => {
    if (info.prev) setPage(page - 1);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Rick and Morty Characters</h1>
      {selectedCharacter ? (
        <div className="mb-4">
          <Button onClick={() => setSelectedCharacter(null)} className="mb-2">← Back</Button>
          <Card className="p-4">
            <CardContent>
              <img src={selectedCharacter.image} alt={selectedCharacter.name} className="rounded-2xl mb-2"/>
              <h2 className="text-xl font-semibold">{selectedCharacter.name}</h2>
              <p>Status: {selectedCharacter.status}</p>
              <p>Species: {selectedCharacter.species}</p>
              <p>Gender: {selectedCharacter.gender}</p>
              <p>Origin: {selectedCharacter.origin.name}</p>
              <p>Location: {selectedCharacter.location.name}</p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {characters.map(char => (
              <Card key={char.id} onClick={() => setSelectedCharacter(char)} className="cursor-pointer hover:shadow-xl transition-shadow">
                <CardContent>
                  <img src={char.image} alt={char.name} className="rounded-2xl mb-2"/>
                  <h3 className="text-lg font-semibold">{char.name}</h3>
                  <p className="text-sm">{char.species}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <Button onClick={handlePrev} disabled={!info.prev}>Previous</Button>
            <Button onClick={handleNext} disabled={!info.next}>Next</Button>
          </div>
        </div>
      )}
    </div>
  );
}
