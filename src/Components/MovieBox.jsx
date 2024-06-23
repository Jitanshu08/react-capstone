export default function MovieBox({
  category,
  selectedMovies,
  setSelectedMovies,
}) {
  const handleSelection = (category) => {
    if (selectedMovies.includes(category)) {
      setSelectedMovies(selectedMovies.filter((item) => item !== category));
    } else {
      setSelectedMovies([...selectedMovies, category]);
    }
  };

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        background: "lightblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Center the text
        margin: "10px",
        cursor: "pointer",
        border: `2px solid ${
          selectedMovies.includes(category) ? "red" : "black"
        }`,
      }}
      onClick={() => {
        handleSelection(category);
      }}
    >
      <h1>{category.movie}</h1>
    </div>
  );
}
