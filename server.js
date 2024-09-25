const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.json({ status: 'success' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});