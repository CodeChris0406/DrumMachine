document.addEventListener('DOMContentLoaded', function() {
  const drumPads = document.querySelectorAll('.drum-pad');
  
  drumPads.forEach(pad => {
    pad.addEventListener('click', function() {
      const audio = pad.querySelector('audio');
      audio.currentTime = 0;
      audio.play();
      const display = document.getElementById('display');
      display.innerText = pad.id;
    });
  });
  
 
  document.addEventListener('keydown', function(e) {
    const pad = document.querySelector(`.drum-pad[data-key="${e.key.toUpperCase()}"]`);
    if(pad) {
      const audio = pad.querySelector('audio');
      audio.currentTime = 0;
      audio.play();
      const display = document.getElementById('display');
      display.innerText = pad.id;
    }
  });
});
