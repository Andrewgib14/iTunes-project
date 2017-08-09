/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let button = document.querySelector("button")
let input = document.querySelector("input");
let grid = document.querySelector(".grid")
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
      grid.innerHTML += `<div class="results"><img src ="${thumbnail}"><p><span>Song: </span>${songTitle}</p><p><span>Artist: </span>${bandName}</p ></div > `
    }
  })

})