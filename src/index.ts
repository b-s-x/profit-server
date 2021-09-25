import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import router from './router/router'

const app:Application = express();
dotenv.config()

const PORT = process.env.PORT || 8000

app.use('/api', router)

const run = async () => {
  try {
    app.listen(PORT, ():void => {
      console.log(`Server Running here http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

run();
