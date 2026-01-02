const song = document.getElementById("song");
const lyric = document.getElementById("lyric");

// Lyrics with start and end times (seconds)
const lyrics = [
  { start: 0, end: 2.5, text: "ooh pyaar ke sagar" },           // 2.5 sec
  { start: 2.5, end: 8.5, text: "Hum teri lehro mai naav dubo baithe" }, // 6 sec
  { start: 8.5, end: Infinity, text: "Tum kehte ho ke aise pyaar ko bhul jaao" } // rest of song
];

song.addEventListener("timeupdate", () => {
  const currentTime = song.currentTime;
  
  // Find which lyric should be shown
  const currentLyric = lyrics.find(line => currentTime >= line.start && currentTime < line.end);
  
  if (currentLyric) {
    if (lyric.innerText !== currentLyric.text) {
      lyric.innerText = currentLyric.text;

      // Restart fade animation
      lyric.style.animation = "none";
      lyric.offsetHeight;
      lyric.style.animation = "lyricFade 1.5s ease";
    }
  }
});

