const logOut = document.getElementById("logout");

export function logOutUser () {
  if (logOut) {
    logOut.addEventListener("click", function () {
      window.location.href = "/";
      localStorage.clear();
    });
  }
}
