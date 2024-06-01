document.getElementById('contact_form').addEventListener('submit', function(event) {
  event.preventDefault();
  sendMail();
});

function sendMail() {
  var params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
  };

  const serviceID = "service_wwipaoq";
  const templateID = "template_jyddb4j";

  if (params.name && params.email && params.message) {  // Ensure no fields are empty
      emailjs.send(serviceID, templateID, params)
          .then((res) => {
              document.getElementById('name').value = "";
              document.getElementById('email').value = "";
              document.getElementById('message').value = "";
              console.log(res);
              alert("Your message sent successfully");
          })
          .catch((err) => console.log(err));
  }
}

