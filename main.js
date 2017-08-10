

let button = document.querySelector("button");
let input = document.querySelector("input");
let grid = document.querySelector(".grid");
let currentTrack = document.querySelector(".music-player");
let nowPlaying = document.querySelector(".nowPlaying");
let url = "https://itunes.apple.com/search?";

button.addEventListener("click", function (e) {
  e.preventDefault();
  grid.innerHTML = "";
  let searchText = input.value;

  url = "https://itunes.apple.com/search?term=" + searchText + "&entity=song&limit=200";
  axios.get(url).then(function (response) {
    console.log(response);
    let results = response.data.results;
    for (let i = 0; i < results.length; i++) {
      let thumbnail = results[i].artworkUrl100;
      let bandName = results[i].artistName;
      let songTitle = results[i].trackName;
      let trackPreview = results[i].previewUrl;
      grid.innerHTML += `<div  class="results"><img id="${songTitle}" value="${trackPreview}" src ="${thumbnail}"><p><span>Song: </span >${songTitle}</p><p><span>Artist: </span>${bandName}</p ></div > `;
    }

    grid.addEventListener("click", function (e) {
      let trackPrev = e.target.getAttribute('value');
      let trackDis = e.target.getAttribute("id");
      nowPlaying.innerHTML = trackDis;
      currentTrack.setAttribute("src", trackPrev);

    })
  })
})
