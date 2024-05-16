function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput !== "") {
        var chatBox = document.getElementById("chat-box");
        var userMessage = "<div class='user-message'>" + userInput + "</div>";
        chatBox.innerHTML += userMessage;

        var botResponse = getBotResponse(userInput);
        var botMessage = "<div class='bot-message'>" + botResponse + "</div>";
        chatBox.innerHTML += botMessage;
        chatBox.scrollTop = chatBox.scrollHeight;

        document.getElementById("user-input").value = "";
    }
}

function getBotResponse(userInput) {
    // Define some predefined responses based on user input
    var responses = {
        "poultry": "Poultry farming involves raising domesticated birds such as chickens, ducks, and turkeys for their meat, eggs, and feathers.",
        "coding": "Coding involves writing instructions for computers using programming languages such as HTML, CSS, JavaScript, and Python.",
        "economy": "The economy refers to the system of production, distribution, and consumption of goods and services within a region or country, including factors such as employment, income, and trade.",
        "how poultry affects economy": "Overall, the poultry industry plays a significant role in the global economy by generating employment, income, and trade opportunities, while also contributing to food security, nutrition, and rural development. ",
        "give me maandeik services": "egg production, chicken meat selling, and free shipment"
    };

    // Check if the user input matches any predefined response
    for (var key in responses) {
        if (userInput.toLowerCase().includes(key)) {
            return responses[key];
        }
    }

    // If no predefined response matches, return a default response
    return "I'm sorry, I don't understand. Please ask another question.";
}