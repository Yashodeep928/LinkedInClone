import { useState } from "react";
import "./puzzlecard.css";

function PuzzleCard() {
  const [index, setIndex] = useState(0);

  const cards = [1, 2, 3, 4, 5,6,7]; 

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, cards.length - 1));
  };

  return (
    <div className="puzzle-card">

      {/* Header */}
      <div className="upper-row">
        <p>Your morning puzzle is ready 🌄</p>

        <div className="Button-grp">
          <button onClick={prev}>&#8249;</button>
          <button onClick={next}>&#8250;</button>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {cards.map((item, i) => (
          <div className="slide" key={i}>
            <div className="down-row2">

              <img src="" alt="image" />

              <div className="puzzle-info">
                <p>Puzzle Info {item}</p>
                <p>Patches</p>
              </div>

              <button className="btn-1">Solve</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default PuzzleCard;