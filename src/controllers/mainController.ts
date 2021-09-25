import { Request, Response } from 'express';

export default (req: Request, res: Response) => {
  console.log(1111);
  res.send('1111 HELLL WORLD')
}