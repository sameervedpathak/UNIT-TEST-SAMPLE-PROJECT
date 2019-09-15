const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req,res) => {
        res.send('Default API calling !!');
});

app.get('/about', (req, res) => {
    res.send('About API calling !!');
})

app.listen(port, () => { console.log(`Magic happened at ${port}`)});
