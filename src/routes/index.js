
const { Router } = require('express');
const router = Router();

router.get('/test',(req, res)=>{
    const data = {
        "name": "fazt",
        "website": "faztCode"
    };
    res.json(data);
});


module.exports = router;