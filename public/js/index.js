const jsonObj =   [{
      url: "https://www.dogliciousspa.com/v/vspfiles/assets/images/puppiesplaying.jpg",
      alt_text: "Puppy Socialization, Puppy Class, Training, Dogs, Dog Training ...",
      thumbnailLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKw73Q78qFF4WA8BrYpA6T_C0cZgd6yvM6QNjQhzJMHrW02vu0UxMjt5h",
      contextLink: "https://www.dogliciousspa.com/category-s/171.htm"
      },
      {
      url: "https://i.ytimg.com/vi/2Y1ZyjGdPeE/maxresdefault.jpg",
      alt_text: "Puppies Talking and Arguing With Their Humans Compilation - YouTube",
      thumbnailLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAoM6k7NCjsTVjuvRXTelL7s8XEI0LNicjVZPz4Wy2FkdFMbPJ7xHX5W8",
      contextLink: "https://www.youtube.com/watch?v=2Y1ZyjGdPeE"
      }
      ];

const json_snippet = document.getElementById('json-snippet');
json_snippet.innerHTML = "";
json_snippet.appendChild(document.createTextNode(JSON.stringify(jsonObj, null, 4)));

