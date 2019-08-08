const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const btn = document.querySelector(".btn")




  btn.addEventListener("click", function () {

  fetch("https://randomuser.me/api/")
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
  	console.log(json)
  	//debugger
  	document.querySelector("#fullname").innerText = json.results[0].name.first + " " + json.results[0].name.last
	document.querySelector("#email").innerText =json.results[0].email
	document.querySelector("#date_of_birth").innerText =json.results[0].dob.date
	document.querySelector("#street").innerText =json.results[0].location.street
	document.querySelector("#state").innerText =json.results[0].location.state
	document.querySelector("#city").innerText =json.results[0].location.city
	document.querySelector("#postcode").innerText =json.results[0].location.postcode

	document.querySelector("#phone").innerText =json.results[0].phone
	document.querySelector("#cell").innerText =json.results[0].cell


  })

  	  console.log("in btn");

  })

});
