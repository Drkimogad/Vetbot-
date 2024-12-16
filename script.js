window.onload = function () {
    // Display shortened greeting message when the page loads
    const chatBody = document.getElementById('chatBody');
    chatBody.innerHTML += `
        <div class="message bot">
            <p>
                Hi! I’m VetBot, your virtual assistant. 
                How can I assist you today? Visit our site instead <a href="https://pawsitivevet2024.wordpress.com" target="_blank">here</a>.
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

        // Default response
        let botResponse = "I'm here to help! Let me know your query or issue.";

        // General Questions
        if (userInput.toLowerCase().includes('hello')) {
            botResponse = "Hi! How can I assist you today?";
        } else if (userInput.toLowerCase().includes('services')) {
            botResponse = "We offer veterinary insights, preventive care, pet care tips, and business management resources. Check out our website for more details <a href='https://pawsitivevet2024.wordpress.com' target='_blank'>here</a>.";
        }

        // Health and Wellness
        else if (userInput.toLowerCase().includes('veterinarian') || userInput.toLowerCase().includes('dog') || userInput.toLowerCase().includes('cat'))
