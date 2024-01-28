const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://michael-chiem.github.io');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const sinchAuthToken = "Bearer a1c19c660dad416998f4033bcc6c3076";

app.post('/send-sms', async (req, res) => {
    const url = "https://sms.api.sinch.com/xms/v1/b2939d0394a84ffc8fa98dcc413ce96e/batches";
    const data = req.body;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": sinchAuthToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        res.json(responseData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
