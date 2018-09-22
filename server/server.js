const express = require("express");
const app = express();

const port = process.env.PORT || 7255;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
