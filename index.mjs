import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
// import jwt from 'express-jwt';

import {indexRoutes} from './routes/indexRoutes.mjs';
import {newNoteRoutes} from './routes/newNoteRoutes.mjs';

const app = express();

const router = express.Router();

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    ;next();
};

app.use(allowCrossDomain);

app.use(express.static(path.resolve('public/html')));
app.use(express.static(path.resolve('public')));

// app.use(bodyParser.json());
// const jwtSecret = 'aklsdjfklöasjdcma8sd90mcklasdföasdf$ädasöfü pi340qkrlöam,dflöäasf';

// app.set("jwt-secret", jwtSecret); //secret should be in a config file - or better be a private key!
// app.set("jwt-sign", {expiresIn: "1d", audience: "self", issuer: "pizza"});
// app.set("jwt-validate", {secret: jwtSecret, audience: "self", issuer: "pizza"});


app.use(bodyParser.json());

app.get("/", function(req, res){
    res.sendFile("/html/index.html",  {root: __dirname + '/public/'});
});

// app.get("/newnote.html", function(req, res){
//     res.sendFile("html/newnote.html",  {root: __dirname + '/public/'});
// });


// app.use("/", indexRoutes);
// app.use(jwt( app.get("jwt-validate"))); //after this middleware a token is required!
app.use("/notes", newNoteRoutes);


app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('No token / Invalid token provided');
    }
    else
    {
        next(err);
    }
});

const hostname = '127.0.0.1';
const port = 3001;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});