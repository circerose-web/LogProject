const express = require('express');
const app = express();
const sequelize = require('./db');

const log = require('./controllers/log-controller')
const user = require('./controllers/user-controller');

sequelize.sync();
//sequelize.sync({force: true})
app.use(express.json());
app.use(require('./middleware/headers'));


app.use('/user', user);

app.use(require('./middleware/validate-session'));
app.use('/log', log);


app.listen(3000, function(){
    console.log('app is listening on port 3000');
});
