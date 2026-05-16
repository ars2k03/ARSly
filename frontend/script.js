const form = document.getElementById("urlForm");
const urlInput = document.getElementById("urlInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const resultBox = document.getElementById("resultBox");
const shortUrlInput = document.getElementById("shortUrl");
const copyBtn = document.getElementById("copyBtn");
const openLink = document.getElementById("openLink");

const API_BASE_URL = "https://arsly.onrender.com";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const longUrl = urlInput.value.trim();

  if (!longUrl) {
    message.textContent = "Please enter a valid URL.";
    return;
  }

  try {
    submitBtn.disabled = true;
    submitBtn.textContent = "Shortening...";
    message.textContent = "";
    resultBox.classList.add("hidden");

    const response = await fetch(`${API_BASE_URL}/url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: longUrl }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    const finalShortUrl = `${API_BASE_URL}/url/${data.id}`;

    shortUrlInput.value = finalShortUrl;
    openLink.href = finalShortUrl;
    openLink.textContent = finalShortUrl;

    resultBox.classList.remove("hidden");
    message.textContent = "Short URL generated successfully.";
  } catch (error) {
    message.textContent = error.message;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Shorten";
  }
});

copyBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(shortUrlInput.value);
  copyBtn.textContent = "Copied!";

  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 1200);
});