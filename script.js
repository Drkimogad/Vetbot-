window.onload = function () {
    // Automatically show the greeting message when the page loads
    const chatBody = document.getElementById('chatBody');
    chatBody.innerHTML += `
        <div class="message bot">
            <p>Hi there! How can I assist you today?</p>
        </div>
    `;
};

// Send message function
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
        // Display bot reply
        setTimeout(function () {
            chatBody.innerHTML += `
                <div class="message bot">
                    <p>I'm here to help! Please let me know your issue or query.</p>
                </div>
            `;
        }, 1000);
        // Scroll to the bottom of the chat
        chatBody.scrollTop = chatBody.scrollHeight;
    }
    // Clear input field
    document.getElementById('userInput').value = '';
});
