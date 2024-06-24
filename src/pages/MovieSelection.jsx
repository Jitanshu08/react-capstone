import { useState } from "react";
import MovieBox from "../Components/MovieBox";
import MovieChip from "../Components/MovieChip";
import { Navigate, useNavigate } from "react-router-dom";

const MOVIES = [
  { id: 0, movie: "Action" },
  { id: 1, movie: "Drama" },
  { id: 2, movie: "Romance" },
  { id: 3, movie: "Thriller" },
  { id: 4, movie: "Horror" },
  { id: 5, movie: "Mystery" },
  { id: 6, movie: "Fantasy" },
  { id: 7, movie: "Science Fiction" },
  { id: 8, movie: "Music" },
];

export default function Selection() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const navigate = useNavigate();
  const moveNext = () => {
    if (selectedMovies.length < 3) {
      alert("please select more than 3 movies");
    } else {
      localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
      setSelectedMovies([]);
      navigate("/info");
    }
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // Ensure the grid has 3 columns
          gap: "10px",
        }}
      >
        {MOVIES.map((category) => (
          <MovieBox
            key={category.id}
            selectedMovies={selectedMovies}
            setSelectedMovies={setSelectedMovies}
            category={category}
          />
        ))}
      </div>
      {selectedMovies.length < 3 && (
        <p style={{ color: "red" }}>PLease select atleast 3 movies</p>
      )}
      <div>
        {selectedMovies.map((category) => (
          <MovieChip
            key={category.id}
            category={category}
            setSelectedMovies={setSelectedMovies}
          />
        ))}
      </div>
      <button onClick={moveNext}>Next</button>
    </>
  );
}
