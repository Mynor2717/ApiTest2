const { Router } = require('express');
const router = Router();

const movies = require('../sample.json');
console.log(movies);

router.get('/', (req, res) =>{
     res.json(movies);
});

router.post('/', (req, res) =>{
    const { title, director, year, reiting } = req.body;
    if( title && director && year && reiting ){
        const id = movies.length + 1;
        const newMovie = {...req.body, id};
        console.log(newMovie);
         movies.push(newMovie);
         res.json(movies);
    }else{
       res.json({error: 'There was an error.'});
    }
    res.send('received');
});

router.delete('/:id', (req, res) =>{
    console.log(req.params);
    res.send('deleted');
});


module.exports = router; 

