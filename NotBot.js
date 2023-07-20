// JavaScript Code (script.js)
// Data storage object to hold chat session data
let chatSessions = {}; // Initialize as empty if no previous data exists
let currentChatID;

// Function to generate a unique ID for each chat session
function generateUniqueID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// Function to append messages to the chat log
function appendMessage(text, isReceived = true) {
    const chatLog = document.getElementById("chatLog");
    const messageDiv = document.createElement("div");
    messageDiv.className = "message " + (isReceived ? "received" : "sent");
    messageDiv.innerText = text;
    chatLog.appendChild(messageDiv);
}

// Function to handle user button click
function onUserButtonClick(buttonText) {
    const userInput = buttonText.toLowerCase();
    handleUserInput(userInput);
}

// Function to handle user input
function handleUserInput(userInput) {
    const currentSession = chatSessions[currentChatID];
    userInput = userInput.toLowerCase(); // Convert to lowercase

    switch (currentSession.state) {
        case "start":
            if (userInput === "yes") {
                currentSession.state = "ask_name";
                appendMessage("Please enter your Name:");
            } else if (userInput === "no") {
                currentSession.state = "end";
                appendMessage("Thank you for your time!");
                saveChatSession(); // Save chat session data to local storage
            } else {
                appendMessage("Invalid option. Please select YES or NO.", {
                    buttons: ["YES", "NO"],
                });
            }
            break;
        case "ask_name":
            if (/^\d+$/.test(userInput)) {
                appendMessage("Please enter a valid name.");
            } else {
                currentSession.name = userInput;
                currentSession.state = "ask_email";
                appendMessage("Please enter your email ID:");
            }
            break;
        case "ask_email":
            if (!/\S+@\S+\.\S+/.test(userInput)) {
                appendMessage("Please enter a valid email ID.");
            } else {
                currentSession.email = userInput;
                currentSession.state = "ask_experience";
                appendMessage(
                    "Please select how many years of experience you have with Python/JS/Automation Development:\n1 year, 2 years, 3 years, 4 years, 5 years"
                );
            }
            break;
        case "ask_experience":
            const experienceOptions = ["1 year", "2 years", "3 years", "4 years", "5 years"];
            if (!experienceOptions.includes(userInput)) {
                appendMessage("Invalid option. Please select from the given list.");
            } else {
                currentSession.experience = userInput;
                currentSession.state = "end";
                appendMessage("Thanks for connecting. We will get back to you soon.");
                saveChatSession(); // Save chat session data to local storage
            }
            break;
        case "end":
            // This state represents the end of the chat session
            break;
    }
}

// Function to save chat session data to local storage
function saveChatSession() {
    // Convert the chatSessions object to a JSON string
    const chatSessionsJSON = JSON.stringify(chatSessions);

    // Save the JSON string to the local storage
    localStorage.setItem("chatSessionsData", chatSessionsJSON);
}

// Function to load chat session data from local storage (if any)
function loadChatSession() {
    const chatSessionsData = localStorage.getItem("chatSessionsData");
    if (chatSessionsData) {
        chatSessions = JSON.parse(chatSessionsData);
    }
}

// Function to initialize a new chat session
function startNewChatSession() {
    currentChatID = generateUniqueID();
    chatSessions[currentChatID] = {
        state: "start",
        name: "",
        email: "",
        experience: "",
    };
    appendMessage("Hi! Are you here to apply for the Internship?", {
        buttons: ["YES", "NO"],
    });
}

// Start a new chat session when the page loads
loadChatSession(); // Load any existing chat session data from local storage
startNewChatSession();

// Function to handle user input and send messages
function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (userInput !== "") {
        document.getElementById("userInput").value = "";
        appendMessage("You: " + userInput, false);
        handleUserInput(userInput);
    }
}

document.getElementById("userInput").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector("button").click();
    }
});