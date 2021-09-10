var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
      var movie = JSON.parse(httpRequest.responseText);
      console.log(movie);
      document.getElementById("poster").src = movie.Poster;
      document.getElementById("title").innerHTML = movie.Title;
      document.getElementById("year").innerHTML = movie.Year;
      document.getElementById("actors").innerHTML = movie.Actors;
      document.getElementById("plot").innerHTML = movie.Plot;
      document.getElementById("movielink").href = "https://www.imdb.com/title/" + movie.imdbID;
      
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}
// httpRequest.open('GET', 'https://www.omdbapi.com/?t=frozen&plot=short&apikey=8ead3e26');
// httpRequest.send();

var searchMovie = function () {
  var input = document.querySelector('input').value;
  if (input) {
    httpRequest.open('GET', 'https://www.omdbapi.com/?t=' + input + '&plot=short&apikey=8ead3e26');
    httpRequest.send();
  }
}

