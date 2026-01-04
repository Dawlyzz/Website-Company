// ===============================
// Dark Mode with localStorage
// ===============================
const toggle = document.getElementById("themeToggle");

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });
}

// ===============================
// Services Posts
// ===============================
const container = document.getElementById("servicesPosts");
if (container) {
  db.collection("services")
    .orderBy("createdAt", "desc")
    .onSnapshot(snapshot => {
      container.innerHTML = ""; // Clear previous posts
      snapshot.forEach(doc => {
        const post = doc.data();
        container.innerHTML += `
          <div class="card fade show">
            <img src="${post.imageURL}" style="width:100%;border-radius:12px">
            <h3>${post.title}</h3>
            <p>${post.content}</p>
          </div>
        `;
      });
    });
}


// ===============================
// Scroll Animations
// ===============================
const animatedElements = document.querySelectorAll(
  ".fade, .slide-left, .slide-right"
);

const animateOnScroll = () => {
  animatedElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// ===============================
// Button Micro Interaction
// ===============================
document.querySelectorAll(".auth-btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const r = btn.getBoundingClientRect();
    btn.style.backgroundPosition =
      `${e.clientX - r.left}px ${e.clientY - r.top}px`;
  });
});
