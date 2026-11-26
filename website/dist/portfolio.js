const copyButton = document.querySelector("[data-copy]");
const status = document.querySelector(".copy-status");
const emailLink = document.querySelector('a[href^="mailto:"]');

if (navigator.clipboard?.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(emailLink.href.slice("mailto:".length));
      status.textContent = "Email address copied.";
    } catch {
      status.textContent = emailLink.href.slice("mailto:".length);
    }
  });
}
