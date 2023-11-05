const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "d0c8eb6a-50ce-4ced-8bfe-74fb143012a3 " } }
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        return e.respose.status(r.status).json(e.respose.data)
    }
});

app.listen(3001);