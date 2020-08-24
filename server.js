const express = require('express');

const app = express();

const customers = require('./Routes/customers');

app.use('/api/customers', customers);

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
