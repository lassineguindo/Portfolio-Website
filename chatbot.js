document.addEventListener("DOMContentLoaded", function() {
  const responses = {
    "hi": "Hello! How can I help you today?",
    "hello": "Hi there! Ask me about my skills, experience, education, or projects.",
    "skills": "I specialize in Python, JavaScript, HTML, CSS, cybersecurity tools like Wireshark and Snort, and data visualization with Looker Studio.",
    "experience": "Store Clerk (Giant Food), Administrative Assistant II (University of Maryland Extension), IT Specialist (University of Maryland Extension).",
    "education": "Associate of Science - AS, Information Technology (Prince George's Community College), Bachelor of Science - BS, Computer Technology (Bowie State University).",
    "projects": "Check out my projects on GitHub: <a href='https://github.com/lassineguindo?tab=repositories' target='_blank'>GitHub Repositories</a>",
    "default": "I'm not sure how to answer that. Please ask me about my skills, experience, education, or projects."
  };

  function sendMessage() {
    const userInputElem = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const message = userInputElem.value.toLowerCase().trim();
    if (!message) return;

    // Append user message
    chatBox.innerHTML += `<div class="user-message">You: ${message}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    // Find a response or use default
    const reply = responses[message] || responses["default"];
    setTimeout(() => {
      chatBox.innerHTML += `<div class="bot-message">Bot: ${reply}</div>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    userInputElem.value = "";
  }

  document.getElementById("send-btn").addEventListener("click", sendMessage);
  document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  // Toggle Chatbot (Minimize/Expand) functionality
  const toggleChatBtn = document.getElementById("toggle-chat");
  const chatContainer = document.querySelector(".chat-container");
  if (toggleChatBtn && chatContainer) {
    toggleChatBtn.addEventListener("click", function() {
      chatContainer.classList.toggle("collapsed");
      // Change arrow symbol: "▼" when open, "▲" when collapsed
      if (chatContainer.classList.contains("collapsed")) {
        toggleChatBtn.textContent = "▲";
      } else {
        toggleChatBtn.textContent = "▼";
      }
    });
  }
});
