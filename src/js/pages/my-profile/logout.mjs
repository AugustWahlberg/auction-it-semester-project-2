/**
 * Logs the user out.
 */
 const logOut = document.getElementById("logout");

 /**
  * Redirects the user to the homepage and clears local storage when the log out button is clicked.
  */
 export function logOutUser () {
   if (logOut) {
     logOut.addEventListener("click", function () {
       window.location.href = "/";
       localStorage.clear();
     });
   }
 }
 