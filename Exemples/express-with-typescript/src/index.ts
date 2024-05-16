import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router as controllerRouter } from './controllers/decorators/controller';
import './controllers/LoginController';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({keys: ['sefsc']})); // Key is used to encrypt the session
app.use(router);
app.use(controllerRouter);

app.listen(3001, () => {
  console.log('Listening on port 3001');
});