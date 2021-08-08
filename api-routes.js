const router = require('express').Router();
const contactController = require('./contactController');

router.get('/', function (req, res) {
    res.json({
        status: 'The REST API is working!',
        message: 'Welcome to the RestExpress API.'
    })
});

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;