var song = document.getElementById("song");
var icon = document.getElementById("note");
      icon.onclick = function () {
        if (song.paused) {
          song.play();
          icon.src = "../../../../y.pause.png";
        } else {
          song.pause();
          icon.src = "../../../../y.play.png";
        }
      };