const gifContainer = document.querySelector('#gifcont');
const searchBtn = document.querySelector('#searchBtn');
//const removeBtn = document.querySelector('#removeBtn');
//const form = document.querySelector('#searchForm');
//const searchInput = document.querySelector('#search');

//async function getgif(keyword){
 //const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
 //const url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apiKey}`;
 
// try{const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
//      const url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apiKey}`;
//      const res = await axios.get(url);
//      const gif = res.data.data[1].images.original.url;
//      //make this at a random index
//      console.log(gif);
//      const makeGif = document.createElement("img")
//      makeGif.src = gif;
//      gifContainer.appendChild(makeGif);
//    } catch(error){
//         alert("try again")
//    }
//}

async function getgif(keyword){
     try{const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
           const url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apiKey}`;
           const res = await axios.get(url);
           //const gif = res.data.data[1].images.original.url;
           //make this at a random index
           //console.log(gif);
           const gif = res.data.data;
           if(gif.length > 0){
             const randomIdx = Math.floor(Math.random() * gif.length);
             const randomGif = gif[randomIdx].images.original.url;
             console.log(randomGif);
             const makeGif = document.createElement("img")
             makeGif.src = randomGif;
             gifContainer.appendChild(makeGif);
           }
         } catch(error){
             console.error(error)
              alert("try again")
         }
     }

const form = document.querySelector('#searchForm');
const searchInput = document.querySelector('#search');
form.addEventListener("submit" , function(e){
  e.preventDefault();
  console.log("submit");
  getgif(searchInput.value);
  searchInput.value = "";
})


const removeBtn = document.querySelector('#removeBtn');
removeBtn.addEventListener("click", function(e){
     gifContainer.innerHTML = "";
})



//async function useGif(){
//    const gifUrl = await getgif(keyword);
//    const makeGif = document.createElement("img")
//    makeGif.src = gifUrl;
//    gifContainer.appendChild(makeGif)
//}












//async function getgiftest(){
//    const res = await axios.get('http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym');
//    const div = document.querySelector('#gifcont')
//    div.innerText = res.data;
//    //console.log(res.data);
//   }









console.log("Let's get this party started!");