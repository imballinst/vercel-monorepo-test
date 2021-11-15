const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json({ extended: false}));
app.use(cors());
app
    .get('/', async (req, res) => {
        res.json({
            hello: 'world'
        });
    })

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
