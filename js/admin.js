// admin.js
document.getElementById("postForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const imageURLInput = document.getElementById("imageURL");

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  const imageURL = imageURLInput.value.trim();

  // Simple validation
  if (!title || !content || !imageURL) {
    alert("Please fill in all fields");
    return;
  }

const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

// Restore the theme from localStorage on page load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});


  try {
    await db.collection("services").add({
      title,
      content,
      imageURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    alert("Post published successfully ✅");

    // Reset form
    titleInput.value = "";
    contentInput.value = "";
    imageURLInput.value = "";

  } catch (error) {
    console.error("Error adding post:", error);
    alert("Something went wrong. Check console.");
  }
});
