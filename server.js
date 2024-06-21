const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/proxy', async (req, res) => {
    const {category} = req.query;
    const apiKey = "UkgTTTdP6gC5+mbvoQ5jJg==LeZGfXwPZBzFFcvP";
    const url = `https://api.api-ninjas.com/v1/trivia?category=${category}`;
    const headers = {
        'X-Api-Key': apiKey
    };

    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(url, { headers });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
