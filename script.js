window.onload = function () {
    // Display combined greeting message when the page loads
    const chatBody = document.getElementById('chatBody');
    chatBody.innerHTML += `
        <div class="message bot">
            <p>
                Hi! I’m VetBot, your virtual assistant. Welcome to Pawsitivevet2024 – Compassionate care for your furry family members! 
                I’m here to guide you through our Pet Wellness Hub. Our content includes preventive care tips, weekly pet care tips, 
                and business management insights for veterinary professionals. How can I help you today? Are you looking for something specific? 
                Check out our website <a href="https://pawsitivevet2024.com" target="_blank">here</a>.
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

        // Bot response placeholder
        setTimeout(function () {
            chatBody.innerHTML += `
                <div class="message bot">
                    <p>I'm here to help! Let me know your query or issue.</p>
                </div>
            `;
            // Scroll to the bottom of the chat
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }

    // Clear the input field
    document.getElementById('userInput').value = '';
});
