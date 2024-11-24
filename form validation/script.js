function validateForm() {
    let isValid = true;
    
    
    document.getElementById('name-error').style.display = 'none';
    document.getElementById('email-error').style.display = 'none';
    document.getElementById('phone-error').style.display = 'none';
    document.getElementById('message-error').style.display = 'none';

   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    
    if (name.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailRegex)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }

    // Phone validation (simple pattern for phone number)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone.match(phoneRegex)) {
        document.getElementById('phone-error').textContent = 'Please enter a valid 10-digit phone number';
        document.getElementById('phone-error').style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (message.trim() === '') {
        document.getElementById('message-error').textContent = 'Message cannot be empty';
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    }

    return isValid; // If all validations pass, the form will submit
}
