const app = require('express')();
const set = require('./notSet.js');


app.get('/', (req, res) => {
    const deck = set.buildDeck(true);
    res.json({
        message: 'basecamp',
        deck,
    });
});


app.listen(3000, _ => {
    console.log('Listening on Port: 3000');
});