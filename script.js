window.onload = function () {
    // Display shortened greeting message when the page loads
    const chatBody = document.getElementById('chatBody');
    chatBody.innerHTML += `
        <div class="message bot">
            <p>
                Hi! I’m VetBot, your virtual assistant!
                How can I assist you today? Visit our site <a href="https://pawsitivevet2024.com" target="_blank">here</a>.
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
            botResponse = "We offer veterinary insights, preventive care, pet care tips, and business management resources. Check out our website for more details!";
        }

        // Health and Wellness
        else if (userInput.toLowerCase().includes('veterinarian') || userInput.toLowerCase().includes('dog') || userInput.toLowerCase().includes('cat')) {
            botResponse = "We recommend annual check-ups for healthy pets. Puppies and kittens may need more frequent visits for vaccinations and growth monitoring. Check our website for more info!";
        } else if (userInput.toLowerCase().includes('vaccination')) {
            botResponse = "Vaccinations are essential! Common ones include rabies, distemper, and parvovirus. For a detailed schedule, check out our article [Importance of Vaccinations for Pets](https://pawsitivevet2024.com).";
        } else if (userInput.toLowerCase().includes('deworming')) {
            botResponse = "Deworming is important for your pet's health. Learn more about it in our guide [The Importance of Deworming for Pets](https://pawsitivevet2024.com).";
        } else if (userInput.toLowerCase().includes('illness')) {
            botResponse = "If your pet is ill, please contact us immediately. Symptoms such as vomiting or diarrhea require prompt attention.";
        }

        // Pet Care
        else if (userInput.toLowerCase().includes('healthy') || userInput.toLowerCase().includes('happy')) {
            botResponse = "To keep your pet healthy, ensure regular vet check-ups, a balanced diet, and plenty of exercise. Don't forget preventive care like vaccinations and parasite control!";
        } else if (userInput.toLowerCase().includes('diet')) {
            botResponse = "A tailored diet plan based on your pet's age, breed, and health status is essential for their well-being. We can provide food recommendations during your visit.";
        } else if (userInput.toLowerCase().includes('weight')) {
            botResponse = "Weight management involves a balanced diet and regular exercise. We can help create a tailored weight loss plan for your pet!";
        }

        // Emergency Care
        else if (userInput.toLowerCase().includes('emergency')) {
            botResponse = "In case of an emergency, please contact your nearest emergency veterinary clinic or call us for guidance if it's urgent.";
        } else if (userInput.toLowerCase().includes('urgent care')) {
            botResponse = "Currently, we don't offer emergency services. Please reach out to a local emergency clinic for immediate care.";
        }

        // Contact Information
        else if (userInput.toLowerCase().includes('contact')) {
            botResponse = "You can contact us through the 'Leave a Comment' section on our website. I'll get back to you as soon as possible!";
        }

        // Additional Questions
        else if (userInput.toLowerCase().includes('signs of a healthy pet')) {
            botResponse = "Signs of a healthy pet include a shiny coat, clear eyes, normal appetite, and consistent energy. Keep an eye on these indicators to monitor their well-being.";
        } else if (userInput.toLowerCase().includes('parasites')) {
            botResponse = "Parasite prevention is crucial. Regular treatments for fleas, ticks, and worms can keep your pet protected. Contact us for tailored parasite control advice.";
        } else if (userInput.toLowerCase().includes('lost pet')) {
            botResponse = "If you find a lost pet, check for ID tags or take them to a local vet to scan for a microchip. Posting on social media can also help reunite the pet with its owner.";
        } else if (userInput.toLowerCase().includes('behavioral issues')) {
            botResponse = "We can provide guidance on common behavioral issues or recommend resources if needed.";
        } else if (userInput.toLowerCase().includes('pregnant')) {
            botResponse = "For a pregnant pet, it's essential to schedule a veterinary visit for proper care and nutrition during pregnancy.";
        } else if (userInput.toLowerCase().includes('training')) {
            botResponse = "We provide tips for basic training. You can also check our podcast series on canine behavioral problems [Pawsitive Pet Training](https://pawsitivevet2024.com).";
        }

        // Typing indicator with response
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
