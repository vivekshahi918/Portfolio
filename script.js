document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("greeting");
    const portfolioText = "Portfolio";

    
    function updateGreeting() {
        const currentTime = new Date();
        const hours = currentTime.getHours();

        if ((hours >= 24 || hours < 6)) {
            greetingElement.textContent = portfolioText;
            setInterval(toggleNames, 4000);
        } else if (hours >= 6 && hours < 12) {
            greetingElement.textContent = portfolioText;
            setInterval(morningNames, 4000);
        } else if (hours >= 18 && hours < 24) {
            greetingElement.textContent = portfolioText;
            setInterval(eveningNames, 4000);
        } else {
            greetingElement.textContent = portfolioText;
            setInterval(afterNames, 4000);
        }
    }
    function toggleNames() {
        greetingElement.textContent = (greetingElement.textContent === "Portfolio") ? "   Good Night" : "Portfolio";
    }
    function morningNames() {
        greetingElement.textContent = (greetingElement.textContent === "Portfolio") ? "   Good Morning" : "Portfolio";
    }
    function afterNames() {
        greetingElement.textContent = (greetingElement.textContent === "Portfolio") ? "   Good Afternoon" : "Portfolio";
    }
    function eveningNames() {
        greetingElement.textContent = (greetingElement.textContent === "Portfolio") ? "   Good Evening" : "Portfolio";
    }

    updateGreeting();
    
    var messageInput = document.getElementById("message");
    
    messageInput.addEventListener("focus", function() {
      if (this.placeholder === "Write your message here...") {
        this.placeholder = "";
      }
    });
    
    messageInput.addEventListener("blur", function() {
      if (this.placeholder === "") {
        this.placeholder = "Write your message here...";
      }
    });
    var emailInput = document.getElementById("email");
    var emailValidationMessage = document.getElementById("email-validation-message");

  emailInput.addEventListener("input", function() {
    if (emailInput.validity.valid) {
      emailInput.classList.remove("invalid");
      emailInput.classList.add("valid");
      emailValidationMessage.textContent = "";
    } else {
      emailInput.classList.remove("valid");
      emailInput.classList.add("invalid");
      emailValidationMessage.textContent = "Please enter a valid email address.";
    }
  });
  
});
