# Notbot-Chatbot-for-Internship-tasks

Notbot Chatbot is a simple web-based chatbot designed for internship tasks. It interacts with users via a chat interface and gathers information from them to determine if they are interested in applying for an internship. The chatbot collects the user's name, email address, and years of experience with Python/JS/Automation Development. The chatbot is built using HTML, CSS, and JavaScript and utilizes local storage to save chat session data.

# Features
1. Interactive chat interface where users can communicate with the chatbot.
2. Simple and user-friendly UI for a seamless experience.
3. Collects user information, including name, email address, and years of experience.
4. Validates user input for name, email, and experience selection.
5. Utilizes local storage to save chat session data for a seamless user experience during page reloads.

# Getting Started

**Prerequisites**  
To run the chatbot locally, you need a web browser (e.g., Google Chrome, Mozilla Firefox, etc.).

**Installation**  
Clone the GitHub repository to your local machine : 
git clone https://github.com/GejjalaLakshmipathi/Notbot-Chatbot-for-Internship-tasks.git

Navigate to the project directory :
cd Notbot-Chatbot-for-Internship-tasks

Open the index.html file in your web browser.

**How to Use**  
Upon opening the index.html file, you will see the chat interface with a greeting message from the chatbot: "Hi! Are you here to apply for the Internship?" You will be presented with two buttons, "YES" and "NO."

To start the chat session, click on the "YES" button if you are here to apply for the internship. Otherwise, click on the "NO" button if you are not interested in applying.

If you click "YES," the chatbot will prompt you to enter your name. If you click "NO," the chat session will end with a closing message.

Enter your name and click "Enter" to proceed. The chatbot will validate the input, ensuring that the name is not a number.

After providing your name, the chatbot will prompt you to enter your email address. Enter your email and click "Enter." The chatbot will validate the input, ensuring it follows the standard email format.

Next, the chatbot will ask you about your years of experience with Python/JS/Automation Development. Select the appropriate option from the given list: "1 year," "2 years," "3 years," "4 years," or "5 years."

After providing your experience, the chat session will end with a closing message: "Thanks for connecting. We will get back to you soon."

The chat session data is automatically saved to local storage. If you reload the page, the chatbot will load the existing session and continue from where you left off.

Local Storage Data
The chatbot uses local storage to save chat session data, including the user's name, email, and experience selection. This allows for a seamless user experience during page reloads.

**Contributions**  
Contributions to the Notbot Chatbot project are welcome! If you have any ideas for improvement, found any bugs, or want to add new features, feel free to open an issue or submit a pull request.

**License**  
This project is licensed under the MIT License.

Feel free to customize this README.md file further to include more information about your specific implementation, deployment instructions, or additional features you've added. The README serves as a guide for users and contributors to understand your chatbot project better.
