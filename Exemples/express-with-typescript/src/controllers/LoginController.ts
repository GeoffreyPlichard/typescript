
import { NextFunction, Request, Response } from "express";
import { get, controller, use, bodyValidator } from "./decorators";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined};
}

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request was maddee');
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="post">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  };

  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response): void {
    const { email, password } = req.body;
  
    if (email === 'hi@hi.com' && password === 'password') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  };
}