var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	const customers = [
		{ id: 1, firstName: 'David', lastName: 'Doe' },
		{ id: 2, firstName: 'John', lastName: 'Doe' },
		{ id: 3, firstName: 'Joe', lastName: 'Doe' }
	];
	res.json(customers);
});

module.exports = router;
