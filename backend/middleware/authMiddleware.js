const jwt = require('jsonwebtoken');
const asyncHandler = require("express-async-handler");
const { Error } = require("mongoose");

const authMiddleware = asyncHandler(async (req, res, next )=>{
  let token;
  if(req?.headers?.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
      try {
          if (token) {
              const verifytkn = jwt.verify(token, process.env.JWT_KEY);
             const user = await userschema.findById(verifytkn?.id);
             req.user = user;
             next();

          }
      } catch (error) {
          throw new Error('not authorized token expired please login again');
          
      }
  }else{
      throw new Error('there is no token attached to the header');
  }
});

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Access denied. Admins only.' });
  }
  next();
};

module.exports = { authMiddleware, isAdmin };
