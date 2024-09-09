// Toggle the attachment menu with a smooth transition
function toggleAttachmentMenu() {
    const menu = document.getElementById('attachment-menu');
    menu.classList.toggle('active');
}

// Trigger the file input when selecting a file type
function triggerFileInput(accept) {
    const fileInput = document.getElementById('file-input');
    fileInput.setAttribute('accept', accept);
    fileInput.click();
}

// Handle the uploaded file and display the file name in the chat
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        addMessage(`You uploaded: ${file.name}`, 'user-message');
        // Handle file upload logic here
    }
}

// Function to add a message to the chat box
function addMessage(message, type) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to respond to user input with predefined answers
function botResponse(userMessage) {
    let botMessage = "I'm sorry, I don't understand that.";

    // Basic logic to provide responses based on user input
    if (userMessage.toLowerCase().includes("hello")) {
        botMessage = "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
        botMessage = "I'm just a bunch of code, but I'm here to help!";
    } else if (userMessage.toLowerCase().includes("what is your name")) {
        botMessage = "I'm Luci, your virtual assistant!";
    } else if (userMessage.toLowerCase().includes("bye")) {
        botMessage = "Goodbye! Have a great day!";
    }

    addMessage(botMessage, 'bot-message');
}

// Function to send a message when pressing "Enter" or clicking "Send"
function sendMessage(event) {
    // Handle the event only if it's a keypress (Enter key) or a click event
    if (event.type === 'keypress' && event.key !== 'Enter') return;

    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message) {
        addMessage(message, 'user-message');
        botResponse(message); // Call botResponse to provide an answer
        userInput.value = '';
    }
}

// Add event listener to the input field for the "Enter" key
document.getElementById('user-input').addEventListener('keypress', sendMessage);

// Add event listener to the send button to trigger the sendMessage function
document.getElementById('send-button').addEventListener('click', sendMessage);
