window.onload = function () {
    // Display shortened greeting message when the page loads
    const chatBody = document.getElementById('chatBody');
    chatBody.innerHTML += `
        <div class="message bot">
            <p>
                Hi! I’m VetBot, your virtual assistant. 
                I’m here to help with pet wellness tips and vet management insights. 
                How can I assist you today? Visit our site <a href="https://pawsitivevet2024.wordpress.com" target="_blank">here</a>.
            </p>
        </div>
    `;
};

// Function to send a user message and bot response
document.getElementById('sendMessage').addEventListener('click', function () {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput !== '') {
        const chatBody = document.getElementById('chatBody');

        // Display user message
        chatBody.innerHTML += `
            <div class="message user">
                <p>${userInput}</p>
            </div>
        `;

        // Bot response based on user input
        let botResponse = "I'm here to help! Let me know your query or issue.";

        // Triggering words
        if (userInput.toLowerCase().includes('hello')) {
            botResponse = "Hello! How can I assist you today?";
        } else if (userInput.toLowerCase().includes('wellness')) {
            botResponse = "I can provide tips on pet wellness. What would you like to know?";
        } else if (userInput.toLowerCase().includes('vet')) {
            botResponse = "I can help with veterinary insights. How can I guide you today?";
        }

        // Typing indicator
        setTimeout(function () {
            chatBody.innerHTML += `
                <div class="message bot typing">
                    <p>...</p>
                </div>
            `;
            // Simulate delay before actual response
            setTimeout(function () {
                chatBody.innerHTML += `
                    <div class="message bot">
                        <p>${botResponse}</p>
                    </div>
                `;
                // Scroll to the bottom of the chat
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 1000);
        }, 1000);
    }

    // Clear the input field
    document.getElementById('userInput').value = '';
});

// Function for auto-resizing textarea
document.getElementById('userInput').addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});
