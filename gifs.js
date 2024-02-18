document.addEventListener("DOMContentLoaded", function() {
<<<<<<< HEAD
  fetchRM();
});

const addedUrls = new Set();

function createCard(title, url) {
  if (!addedUrls.has(url) && addedUrls.size < 3) {
    const card = document.createElement('div');
    const name = document.createElement('h2');
    name.textContent = title;
    const image = document.createElement('img');
    image.src = url;
    image.alt = 'GIF';
    card.appendChild(name);
    card.appendChild(image);
    document.getElementById('cardContainer').appendChild(card);
    addedUrls.add(url);
  }
}

function fetchRM() {
  const options = { method: 'GET' };
  fetch('https://api.giphy.com/v1/gifs/trending?api_key=ZB7ftENSbA1H3yJLldjZtXyJRJMxFMIc', options)
    .then(response => response.json())
    .then(data => {
      data.data.slice(0, 10).forEach(gif => {
        const title = gif.title;
        const url = gif.images.original.url;
        createCard(title, url);
      });
    })
    .catch(err => console.error('Error: ', err));
}
=======
    fetchRM();
  });
  
  function createCard( gif ) {
    const card = document.createElement('div');
  
    const image = document.createElement('gif');
    image.src = gif;
    image.alt = 'Gifs images';
  
  
    card.appendChild(gif);
+  
    document.getElementById('cardContainer').appendChild(card);
  }
  
  function fetchRM() {
    const options = { method: 'GET' };
  
    fetch('https://rickandmortyapi.com/api/character', options)
      .then(response => response.json())
      .then(data => {
        data.results.forEach(result => {
          const gif = result.gif;
  
          createCard( gif);
        });
      })
      .catch(err => console.error('Error: ', err));
  }
>>>>>>> ba9a523c151c9decec406c8f99f6813ba6112227
