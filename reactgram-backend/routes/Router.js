const express = require('express');
const router = express();

router.use('/api/users', require('./UserRoutes'));
router.use('/api/photos', require('./PhotoRoutes'));

router.get('/hello-world', (req, res) => {
	res.send('Hello! World!');
});

module.exports = router;
