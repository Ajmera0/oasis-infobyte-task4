document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username !== "" && password !== "") {
      window.location.href = "secured.html";
    } else {
      document.getElementById("loginMessage").innerText = "Invalid username or password";
    }
  });

  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username !== "" && password !== "") {
      window.location.href = "index.html";
    } else {
      document.getElementById("registerMessage").innerText = "Please fill in all fields";
    }
  });
  
  