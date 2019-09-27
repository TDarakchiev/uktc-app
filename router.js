const router = require('express').Router()
const config = require('./schedules/schedules')

const imageOptions = {
    root: __dirname + '/schedules/',
    dotfiles: 'allow',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

router.get('/uktc/check-for-update', function (req, res) {
    if (req.query.ver === config.version) {
        const data = {
            version: config.version
        }
        res.send(data)
    } else {
        res.send(config);
    }
});

router.get('/uktc/img/:path', function (req, res) {
    const data = req.params.path.split('-');
    
    res.sendFile(`${data[0]}/${data[1]}.png`, imageOptions, function (err) {
        if (!!err) {
            res.send("Error")
        }
    })
})

module.exports = router
