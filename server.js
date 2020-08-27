const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const server = express();

// Import routers
const customers = require('./routes/customers');

// Helmet helps you secure your Express apps by setting various HTTP headers. https://helmetjs.github.io/
server.use(helmet());

// Sets body parser to only parse bodies that is urlencoded or JSON. https://github.com/expressjs/body-parser#readme
server.use(bodyParser.urlencoded({ extended: true }));
server.use(
	bodyParser.json({
		type: function () {
			return true;
		}
	})
);

// Define routes
server.use('/api/customers', customers);

const port = 5000;

server.listen(port, () => console.log(`Server started on port ${port}`));
