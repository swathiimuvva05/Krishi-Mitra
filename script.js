function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username === "krishiadmin" && password === "KM@2026") {
    localStorage.setItem("loggedIn", "true");
    alert("Welcome to Krishi Mitra, Krishi Admin!🌱");
    window.location.href = "index.html";
  } else {
    alert("Invalid Username or Password");
  }
}
function searchCrop() {
  let crop = document.getElementById("search").value.toLowerCase().trim();

  let cards = document.getElementsByClassName("crop-card");

  let found = false;

  for (let i = 0; i < cards.length; i++) {
    let cropName = cards[i].id.toLowerCase();

    if (cropName.includes(crop)) {
      cards[i].style.display = "block";
      found = true;
    } else {
      cards[i].style.display = "none";
    }
  }

  if (!found) {
    alert("Crop not found");
  }
}
function showDateTime() {
  let dateTime = document.getElementById("datetime");

  if (dateTime) {
    let today = new Date();

    dateTime.innerHTML =
      "📅 Date: " +
      today.toLocaleDateString() +
      "<br>⏰ Time: " +
      today.toLocaleTimeString();
  }
}

showDateTime();
setInterval(showDateTime, 1000);
