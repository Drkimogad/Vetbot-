window.onload = function () {
    const chatBody = document.getElementById('chatBody');
    const messages = [
        "Hi there! How can I assist you today?",
        "Hi! I’m VetBot, your virtual assistant. I’m here to guide you through our Pet Wellness Hub. How can I help you today?",
        "We are an online resource dedicated to providing pet owners and lovers with valuable veterinary insight Veterinary insights – Pawsitivevet2024."
    ];

    let index = 0;

    function displayMessage() {
        if (index < messages.length) {
            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot');
            botMessage.innerHTML = `<p>${messages[index]}</p>`;
            chatBody.appendChild(botMessage);
            chatBody.scrollTop = chatBody.scrollHeight;
            index++;
            setTimeout(displayMessage, 2000); // Delay for sequential message display
        }
    }

    displayMessage();
};

// Send message functionality
const sendMessageButton = document.getElementById('sendMessage');
const userInput = document.getElementById('userInput');
const chatBody = document.getElementById('chatBody');

sendMessageButton.addEventListener('click', function () {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        const userDiv = document.createElement('div');
        userDiv.classList.add('message', 'user');
        userDiv.innerHTML = `<p>${userMessage}</p>`;
        chatBody.appendChild(userDiv);

        // Typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('typing-indicator');
        typingIndicator.innerText = 'VetBot is typing...';
        chatBody.appendChild(typingIndicator);
        chatBody.scrollTop = chatBody.scrollHeight;

        setTimeout(() => {
            chatBody.removeChild(typingIndicator);

            // Generate bot response
            const botResponse = getBotResponse(userMessage);
            const botDiv = document.createElement('div');
            botDiv.classList.add('message', 'bot');
            botDiv.innerHTML = `<p>${botResponse}</p>`;
            chatBody.appendChild(botDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1500);
    }
    userInput.value = '';
});

function getBotResponse(input) {
    const responses = {
        "What services do you offer for pet care?": `We are an online resource dedicated to providing pet owners and lovers with valuable veterinary insight Veterinary insights – Pawsitivevet2024. <a href='https://example.com' target='_blank'>Click here to learn more.</a>`,
        "How often should my dog or cat see the veterinarian?": "We recommend annual check-ups for healthy pets. For detailed guidance, <a href='https://example.com/vet-checkup' target='_blank'>click here</a>.",
        "default": "I’m sorry, I couldn’t find an answer to that. Can you try rephrasing?"
    };

    return responses[input] || responses["default"];
}

// Reset Chat functionality
const resetButton = document.createElement('button');
resetButton.innerText = 'Reset Chat';
resetButton.style.marginTop = '10px';
resetButton.classList.add('send-button');
document.querySelector('.chat-footer').appendChild(resetButton);

resetButton.addEventListener('click', () => {
    chatBody.innerHTML = '';
    userInput.value = '';
    window.onload(); // Reload initial messages
});
