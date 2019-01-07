const app = require('express')();
const set = require('./notSet.js');


app.get('/', (req, res) => {
    const deck = set.buildDeck(true);
    res.json({
        message: 'basecamp',
        deck,
    });
});

app.get('/test/', (req, res) => {

    const values = Object.values(req.query);

        const blob = values.reduce((acc, e) => {
            acc += e;
            return acc;
        });

        set.writePromise('test.json', blob)
        .then(_=> {
            console.log('wrote into test')
            return set.loadPromise('test.json');
        }).then((data) => {
            res.json(data)
        }, (err) => {
            res.json(err);
        })

});


app.listen(3000, _ => {
    console.log('Listening on Port: 3000');
});