// @flow
import "@babel/polyfill";
import express from 'express'
import route from './tools/routing'
import mainController from './controllers/main'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const basicErrorHandler = async (req, res, err) => {
    console.log(err);
    return "SERVER ERROR 500"
};

// list of all routes with their associated controller + error handler
app.get('/', route(mainController, basicErrorHandler));

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});
