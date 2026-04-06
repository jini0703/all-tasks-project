function runValidation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const hexColor = document.getElementById('hexColor').value;
    const display = document.getElementById('message');
    
    const errors = [];

    const nameRegex = /^[A-Z][a-z]+(\s[A-Z][a-z]+){1,2}$/;
    if (!nameRegex.test(name)) {
        errors.push("Invalid Name: Must be 2-3 capitalized words.");
    }

    const emailRegex = /^[a-z]+\.\d{4}@vitstudent\.ac\.in$/;
    if (!emailRegex.test(email)) {
        errors.push("Invalid Email: Use VIT format (name.year@vitstudent.ac.in).");
    }

    const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{4,14}$/;
    if (!usernameRegex.test(username)) {
        errors.push("Invalid Username: 5-15 chars, start with a letter.");
    }

    const hexRegex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;
    if (!hexRegex.test(hexColor)) {
        errors.push("Invalid Hex: Must be #333 or #666666 format.");
    }

    if (errors.length === 0) {
        display.textContent = "✅ Success! All conditions are met.";
        display.className = "success";
    } else {
        display.textContent = "❌ Validation Failed:\n" + errors.join("\n");
        display.className = "error";
    }
}