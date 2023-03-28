// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// import type {requestData} from '../index';

let lastReceivedState:any = {nada: "nada"};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse  
) {
  const method = req.method;
 
  if (method == "GET") {
    
    res.status(200).json(lastReceivedState);
  }
  if (method == "POST") {
    console.log(req.body)
    lastReceivedState = lastReceivedState +" ----///----////----"+req.body;
    res.send(200);
  }
}

