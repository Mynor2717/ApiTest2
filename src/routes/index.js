const { Router } = require('express');
const router = Router();


router.get('/test', (req, res) =>{
    const data = {
      "name": "Mynor",
      "website": "mynorprojects.com"
    };

    res.json(data);
    
});


module.exports = router;