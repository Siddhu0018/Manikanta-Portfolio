const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if(name === "" || email === ""){

    alert("Please fill all required fields.");

    return;
  }

  alert("Message sent successfully!");

  contactForm.reset();

});