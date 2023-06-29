const express = require('express');
const router = express();

router.get('/hello-world', (req, res) => {
	res.send('Hello! World!');
});

module.exports = router;
