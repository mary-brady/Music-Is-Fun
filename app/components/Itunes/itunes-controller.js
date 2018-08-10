import ItunesService from "./itunes-service.js";
import Song from "../../models/Song.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let template = ''

  for (let i = 0; i < results.length; i++) {
    const song = results[i];
    template += `
    <div class="col-sm text-center">
    <div class="card" style="width 18rem;">
      <img class="card-img-top" src="${song.albumArt}" alt="album art"</p>
      <div class="card body">
      <audio controls> <source src="${song.preview}" type="audio/mpeg">
      </audio>
      <h5><b>${song.title}</b></h5>
      <h6 class="text-muted">${song.artist}</h6>
      <p class="card-text">${song.collection}</p>
      <p class="card-text">$${song.price}</p>
    </div>
    </div>
    </div>
    `
  }
  document.getElementById('songs').innerHTML = template
}



//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    // @ts-ignore
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded

      // @ts-ignore
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController