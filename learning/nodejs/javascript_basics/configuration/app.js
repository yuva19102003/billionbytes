

// import the config package

const config = require('config');

const db = config.get('Customer.dbConfig.host');

console.log(db);


// $ export NODE_ENV=production

// $ node my-app.js
