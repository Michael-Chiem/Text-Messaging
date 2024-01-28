
        document.getElementById('smsForm').addEventListener('submit', async function(event) {
            event.preventDefault();

            const phoneNumber = document.getElementById('phoneNumber').value;
            const message = document.getElementById('message').value;

            const data = {
                phoneNumber: phoneNumber,
                message: message
            };

            try {
                const response = await fetch('/send-sms', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const responseData = await response.json();
                alert(responseData); // Show response from the server
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while sending the SMS.');
            }
        });
   