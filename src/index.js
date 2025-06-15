const app = require('./app');
const connectDb = require('./db/index');
const dotenv = require('dotenv');

dotenv.config({
  path: '../.env',
});

const port = process.env.PORT || 8080;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is started at ${port}`);
    });
  })
  .catch((error) => {
    console.log('Connection failed!');
    process.exit(1);
  });
