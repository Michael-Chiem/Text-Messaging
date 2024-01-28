async function sendSMS() {
    const url = "https://sms.api.sinch.com/xms/v1/b2939d0394a84ffc8fa98dcc413ce96e/batches";
    const authToken = "Bearer a1c19c660dad416998f4033bcc6c3076";

    const data = {
        from: "12029984217",
        to: ["18018508341"],
        body: "Project1 Test"
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": authToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        console.log(responseData); // Logging the response from the server
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the function to send the SMS
sendSMS();
