const express = require('express');
const router = express();

const Schema = require('../models/library')

router.get('/nodeapi', (req, res) => {

    const title = req.query.t;
    const rating = req.query.r;
    const plot = req.query.p;
    const release = req.query.rel;


    Schema.find(
        title ? {
            Title
                :
                `${title}`
        } :
            rating ? {
                Rated
                    :
                    `${rating}`
            } : plot ? {
                Plot
                    :
                    `${plot}`
            } : release ? {
                Released
                    :
                    `${release}`
            } :
                        {
                            // Title: `${title}`, Rated: `${rating}`
                        })
        .then((data => res.send(data)))
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
})

module.exports = router;