require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

main().catch(err => console.log(err, "Error connecting mongodb"));

const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


PORT = process.env.PORT || 5000;

require('./routes/order')(app);
require('./routes/register')(app);
require('./routes/login')(app);
require('./routes/restaurants')(app);
require('./routes/meals')(app);
require('./routes/cuisine')(app);
require('./routes/dashboard')(app);


if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
});
