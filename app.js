const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello Students! Node.js Kubernetes CI/CD is working perfectly!");
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: "healthy", database: "connected" });
});

if (require.main === module) {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
