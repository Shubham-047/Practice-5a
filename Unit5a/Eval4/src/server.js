const express = require("express")

const app = express();

app.use(express.json());

app.listen(2457, async function (req, res) {
    await connect();
    console.log("Listening to port 2457")
})