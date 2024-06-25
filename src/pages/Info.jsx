import { useEffect, useState } from "react";
export default function Info() {
  const [notes, saveNotes] = useState(localStorage.getItem("notes") || "");
  const updateNotes = (e) => {
    saveNotes(e.target.value);
    localStorage.setItem("notes", JSON.stringify(e.target.value));
  };
  const [news, setNews] = useState(null);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const selectedMovies = JSON.parse(localStorage.getItem("selectedMovies"));
  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
      .then((response) => response.json())
      .then((data) =>
        setNews(
          data.articles[Math.floor((Math.random() * data.articles.length) | 1)]
        )
      )
      .catch("error getting the news");
  }, []);
  console.log(news);
  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "20px",
          flexDirection: "column",
          height: "30vh",
          backgroundColor: "lightblue",
          color: "white",
          padding: "10px",
        }}
      >
        {userData ? (
          <>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
            <p>{userData.username}</p>
          </>
        ) : (
          "No user data"
        )}
        {selectedMovies ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {selectedMovies.map((movie, index) => (
              <p key={index}>{movie.movie}</p>
            ))}{" "}
          </div>
        ) : (
          "No Selected Movies"
        )}
      </div>
      <textarea
        style={{
          maxHeight: "400px",
          minHeight: "400px",
          maxWidth: "40%",
          minWidth: "40%",
        }}
        value={notes}
        onChange={updateNotes}
      ></textarea>

      {news ? (
        <div>
          <img
            height={200}
            width={200}
            src={news.urlToImage}
            alt={news.title}
          />
          <p>{news.title}</p>
          <p>{news.description}</p>
          <p>{news.content.split("[")[0]}</p>
        </div>
      ) : (
        "No news"
      )}
    </div>
  );
}
