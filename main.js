document.getElementById("signOutLink").addEventListener("click", function(event) {
  event.preventDefault(); // Stop default navigation
  if (confirm("Are you sure you want to sign out?")) {
    window.location.href = "signup.html"; // Redirect if confirmed
  }
});