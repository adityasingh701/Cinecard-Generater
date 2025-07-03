function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


const movies = {
  Action: ["The Last Bullet", "Mumbai Vendetta", "Dead Code"],
  Horror: ["Whispers in the Dark", "The Forgotten Room", "CineHaunt"],
  Comedy: ["Drama Queen", "Full Time Fool", "Popcorn Punch"],
  Drama: ["Broken Ties", "Letters from Nowhere", "The Final Act"],
  "Sci-Fi": ["2049 Protocol", "Cosmic Gate", "Neon Mind"]
};


const taglines = {
  Action: ["No rules. Just revenge.", "One city. One hero.", "Reload. Revenge. Repeat."],
  Horror: ["It lives inside.", "You were never alone.", "Silence can kill."],
  Comedy: ["Laugh till you drop!", "Chaos is guaranteed.", "One joke can change it all."],
  Drama: ["Truth has a price.", "Emotions never lie.", "Tears speak louder than words."],
  "Sci-Fi": ["Future is broken.", "Beyond human limits.", "Code or be coded."]
};


function generateCard() {
  const name = document.getElementById('nameInput').value || "Anonymous";
  const genre = document.getElementById('genreSelect').value;


  const movie = randomFrom(movies[genre]);
  const tagline = randomFrom(taglines[genre]);


  document.getElementById('cardName').innerText = name;
  document.getElementById('cardGenre').innerText = genre;
  document.getElementById('cardMovie').innerText = movie;
  document.getElementById('cardTagline').innerText = tagline;


  document.getElementById('cinecard').style.display = 'block';
  document.getElementById('buttons').style.display = 'block';
}


function downloadCard() {
  const card = document.getElementById("cinecard");
  html2canvas(card).then(canvas => {
    const link = document.createElement("a");
    link.download = "My_CineCard.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}


function shareCard() {
  html2canvas(document.getElementById("cinecard")).then(canvas => {
    canvas.toBlob(blob => {
      const file = new File([blob], "CineCard.png", { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({
          files: [file],
          title: "My CineCard",
          text: "Check out my CineCard from CineHall! 🎬",
        }).catch(err => alert("Sharing cancelled or not supported."));
      } else {
        alert("Sharing not supported on this device. Please download instead.");
      }
    });
  });
}

