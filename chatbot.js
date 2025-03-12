document.addEventListener("DOMContentLoaded", function() {
  // Chatbot responses
  const responses = {
  "hi": "Hello! How can I help you today?",
  "hello": "Hi there! Ask me about my skills, experience, education, projects, or phone.",
  "skills": "I specialize in Python, JavaScript, HTML, CSS, cybersecurity tools like Wireshark and Snort, and data visualization with Looker Studio.",
  "experience": "IT Specialist (UMD Extension), Administrative Assistant II (UMD Extension), Store Clerk (Giant Food).",
  "education": "Associate of Science - AS, Information Technology (PGCC), Bachelor of Science - BS, Computer Technology (Bowie State University).",
  "projects": "Check out my projects on GitHub: <a href='https://github.com/lassineguindo?tab=repositories' target='_blank'>GitHub Repositories</a>",
  "phone": "Call me at 240-707-4632",
  "default": "I'm not sure how to answer that. Please ask me about my skills, experience, education, projects, or phone."
};


  // Send message function
  function sendMessage() {
    const userInputElem = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const message = userInputElem.value.toLowerCase().trim();
    if (!message) return;

    // Append user message
    chatBox.innerHTML += `<div class="user-message">You: ${message}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    // Bot response
    const reply = responses[message] || responses["default"];
    setTimeout(() => {
      chatBox.innerHTML += `<div class="bot-message">Bot: ${reply}</div>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    userInputElem.value = "";
  }

  // Event listeners for send
  document.getElementById("send-btn").addEventListener("click", sendMessage);
  document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  // Toggle collapse logic
  const toggleChatBtn = document.getElementById("toggle-chat");
  const chatContainer = document.querySelector(".chat-container");

  // If the toggle button is found, set up the click handler
  if (toggleChatBtn && chatContainer) {
    toggleChatBtn.addEventListener("click", function() {
      // Toggle the 'collapsed' class
      chatContainer.classList.toggle("collapsed");

      // Change arrow symbol
      if (chatContainer.classList.contains("collapsed")) {
        toggleChatBtn.textContent = "▲"; // up arrow
      } else {
        toggleChatBtn.textContent = "▼"; // down arrow
      }
    });
  }
});
