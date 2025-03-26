var express = require('express');
var router = express.Router();
let ratio=0.75;
let acc=1000;
router.get('/', (req, res, next) => {
  // Step 3: Modify acc by multiplying it with ratio
  acc *= ratio;

  // Step 4: Modify the response to display the result of acc
  res.send(`Value is: ${acc}`);
});