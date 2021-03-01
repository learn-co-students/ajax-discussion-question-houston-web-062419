const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

const button = document.querySelector("button")
button.addEventListener("click", function(event){
  

  fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( data => {
        console.log(data)
        console.log(data.results[0])

        const fullname = `${data.results[0].name.first} ${data.results[0].name.last}` 
        const email = data.results[0].email 
        const image = data.results[0].picture.medium

        const h3 = document.querySelector("#fullname")
        const h4 = document.querySelector("#email")
        const img = document.querySelector("img")

        h3.innerText = fullname
        h4.innerText = email
        img.src = image

      })
    })
