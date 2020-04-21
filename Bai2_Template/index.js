const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => res.render('index', {
    name: 'Giang Anh'
}))

app.get('/users', (req, res) => res.render('users/index', {
    users: [
        { id: 1, name: 'Giang' },
        { id: 2, name: 'Anh' }
    ]
}));

app.listen(port, () => console.log('server listening on port 3000'))