const form = document.getElementById("resetForm");
const keyInput = document.getElementById("key");

const togglePassword = document.getElementById("togglePassword");
const statusContainer = document.getElementById("statusContainer");
const statusMessage = document.getElementById("statusMessage");
const statusDetails = document.getElementById("statusDetails");

const successMessage = document.getElementById("successMessage");
const newResetBtn = document.getElementById("newResetBtn");

function showStatus(type, msg, details=""){
  statusContainer.classList.remove("hidden");
  successMessage.classList.add("hidden");

  statusMessage.textContent = msg;
  statusDetails.textContent = details;

  // simple styling by type
  statusContainer.style.borderColor =
    type === "error" ? "rgba(239,68,68,.35)" :
    type === "success" ? "rgba(34,197,94,.35)" :
    "rgba(255,255,255,.10)";

  statusContainer.style.background =
    type === "error" ? "rgba(239,68,68,.08)" :
    type === "success" ? "rgba(34,197,94,.10)" :
    "rgba(10,12,26,.55)";
}

togglePassword?.addEventListener("click", () => {
  keyInput.type = keyInput.type === "password" ? "text" : "password";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

  const key = keyInput.value.trim();
  if (!key){
    showStatus("error", "Key required", "Please enter your key.");
    return;
  }

  // IMPORTANT:
  // GitHub Pages is STATIC. This demo just fakes success.
  // To make it real, replace the fetch URL with YOUR backend endpoint.
  showStatus("info", "Processing...", "Contacting NebulaHub servers...");

  try {
    // Example real call:
    // const res = await fetch("https://YOUR-API/reset-hwid", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ key })
    // });
    // const data = await res.json();
    // if (!data.ok) throw new Error(data.reason || "Reset failed");

    await new Promise(r => setTimeout(r, 900)); // fake delay

    // Fake success:
    statusContainer.classList.add("hidden");
    successMessage.classList.remove("hidden");
    keyInput.value = "";
    keyInput.type = "password";
  } catch (err){
    showStatus("error", "Reset failed", String(err.message || err));
  }
});

newResetBtn?.addEventListener("click", () => {
  successMessage.classList.add("hidden");
  statusContainer.classList.add("hidden");
  keyInput.value = "";
  keyInput.focus();
});
