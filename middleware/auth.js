import jwt from 'jsonwebtoken';
import User from '../models/user.js'

export async function protect(req, res, next) {
    const {authorization} = req.headers;

   if(authorization && authorization.startsWith('Bearer')) {
    const token = authorization.split(' ')[1];
    try {
      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded)
      req.user = await User.findById(decoded.id);
      next()
    } catch(err) {
      res.status(401).send('Not authorized to access this route')
    }
  } else {
    res.status(401).send('Not authorized to access this route')
  }
}