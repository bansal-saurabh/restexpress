const Contact = require('./contactModel');

exports.index = function (req, res) {
    Contact.get(function (error, contacts) {
        if (error) {
            res.json({
                status: 'Error',
                message: error,
            });
        } else {
            res.json({
                status: 'Success',
                message: 'All contacts retreived succesfully.',
                data: contacts,
            });
        }
    });
}

exports.new = function (req, res) {
    const contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    contact.save(function (error) {
        if (error) {
            res.json(error);
        } else {
            res.json({
                message: 'New Contact created succesfully.',
                data: contact,
            });
        }
    });
}

exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (error, contact) {
        if (error) {
            res.send(error);
        } else {
            res.json({
                message: 'Contact details are loading...',
                data: contact,
            })
        }
    })
}

exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (error, contact) {
        if (error) {
            res.send(error);
        } else {
            contact.name = req.body.name ? req.body.name : contact.name;
            contact.gender = req.body.gender;
            contact.email = req.body.email;
            contact.phone = req.body.phone;

            contact.save(function (error) {
                if (error) {
                    res.json(error);
                } else {
                    res.json({
                        message: 'Contact information updated.',
                        data: contact,
                    });
                }
            });
        }
    });
}

exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id,
    }, function (error, contact) {
        if (error) {
            res.send(error);
        } else{
            res.json({
                status: 'Success',
                message: 'Contact deleted.'
            });
        }
    });
}
