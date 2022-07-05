const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.json({"Title": "Hello World"});
})

router.get('/api1', (req, res) => {
    res.json({"Title": "Hello World1"});
})

router.get('/api2', (req, res) => {
    res.json({"Title": "Hello World2"});
})

module.exports = router;