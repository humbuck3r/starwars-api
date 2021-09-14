let button = document.getElementById('btn')
let name = document.getElementById('name')
let gender = document.getElementById("gender");
let height = document.getElementById("height");
let birth = document.getElementById("birth");




function getInfo() {
  let randomNumber = Math.floor(Math.random() * 88 + 1);
  let apiUrl = "https://swapi.dev/api/people/" + randomNumber;

  axios.get(apiUrl).then(function(response) {
    updateName(response.data);
  });
  
}

function updateName(data) {
  
    name.innerHTML = 'Nombre: ' + data.name
    height.innerText = 'Peso: ' + data.height
    gender.innerText = 'Genero: ' + data.gender
    birth.innerText = 'Nacimiento: ' + data.birth_year;



}





btn.addEventListener('click', getInfo) 
