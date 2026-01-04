const ADMIN_EMAILS = [
  "hima57276@gmail.com",
  "admin@example.com"
];

function isAdmin(user) {
  return ADMIN_EMAILS.includes(user.email);
}

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch(err => alert(err.message));
}

function logout() {
  auth.signOut();
}

auth.onAuthStateChanged(user => {
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
auth.onAuthStateChanged(user => {
  const adminLink = document.getElementById("adminLink");

  if (!adminLink) return;

  if (user && isAdmin(user)) {
    adminLink.style.display = "inline-block";
  } else {
    adminLink.style.display = "none";
  }
});

  if (loginBtn && logoutBtn) {
    loginBtn.style.display = user ? "none" : "inline-block";
    logoutBtn.style.display = user ? "inline-block" : "none";
  }

  if (user && location.pathname.includes("login.html")) {
    location.href = "index.html";
  }

 if (window.location.pathname.includes("admin.html")) {

    if (!user) {
      // نستنى Firebase يحدد المستخدم
      return;
    }

    if (!isAdmin(user)) {
      alert("Access denied");
      window.location.href = "index.html";
    }
  }

});
