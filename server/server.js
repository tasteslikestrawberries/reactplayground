const express = require('express');
const app = express();

require('dotenv').config()
//const source = process.env.

const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
    console.log(`App is listening at port: ${PORT}.`);
})

const cors = require('cors');
app.use(cors());

app.use(express.json())





