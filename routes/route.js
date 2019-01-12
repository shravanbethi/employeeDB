const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//reading employees
router.get('/contacts', (req, res, next) => {
    Contact.find(function(err, contacts){
        res.json(contacts);
    });
});
//adding employee
router.post('/contact', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        salary: req.body.salary,
        phone: req.body.phone
    });
    newContact.save((err, contact) => {
        if(err) {
            res.json({msg: 'failed to add contact'});
        } else {
            res.json({msg: 'added contact successfully'});
        }
    });
});

//deleting employee
router.delete('/contact/:id', (req, res, next) => {
   Contact.remove({_id: req.params.id}, function(err, result) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

//updating employee
router.put('/contact/:id', (req, res, next) => {
    Contact.updateOne(req.body, (err, result) => {
        if (err) return next(err);
        res.json(result);
    });
});

module.exports = router;