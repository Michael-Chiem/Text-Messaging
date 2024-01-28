// This event listener waits for the form submission
document.getElementById('smsForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Extract phone number and message from the form fields
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;

    // Prepare the data to be sent to the server
    const data = {
        phoneNumber: phoneNumber,
        message: message
    };

    try {
        // Send a POST request to the server endpoint for sending SMS
        const response = await fetch('/send-sms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Parse the response from the server
        const responseData = await response.json();
        
        // Display the response from the server
        alert(responseData); // You might want to improve this to display a meaningful message
    } catch (error) {
        // Handle errors that occur during the request
        console.error('Error:', error);
        alert('An error occurred while sending the SMS.');
    }
});
