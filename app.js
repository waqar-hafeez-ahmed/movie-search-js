document.addEventListener("DOMContentLoaded", () => {
  const movieInput = document.getElementById("input-movie");
  const searchBtn = document.getElementById("search-btn");
  const cardContainer = document.getElementById("cards-container");
  const APIKEY = "72a97942cc8afc2caaa0fac8ba5c2107";

  searchBtn.addEventListener("click", () => {
    const movieName = movieInput.value;

    getMovie(movieName);
  });

  movieInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      searchBtn.click();
    }
  });

  const makeCard = (data) => {
    const movieArray = data.results;
    let cardContent = "";

    for (let i = 0; i < movieArray.length; i++) {
      console.log(movieArray[i].title);

      cardContent += `<div class="card">
      <img src="https://image.tmdb.org/t/p/original/${movieArray[i].poster_path}" alt="Pic" width="100%">
      <h2>${movieArray[i].title}</h2>
      <p>${movieArray[i].release_date}</p>
    </div>`;
    }

    cardContainer.innerHTML = cardContent; // Update the card container here
  };

  const getMovie = (movieName) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${APIKEY}`
    )
      .then((response) => response.json())
      .then((data) => makeCard(data))
      .catch((error) => console.log(error));
  };
});
