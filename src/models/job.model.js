const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    tripadvisor_id: {
        type: String,
        required: 'This field is required.'
    },
    input_base64url: {
        type: String
    },
    input_url: {
        type: String
    },
    listing_type: {
        type: String
    }
});

// Custom validation for email
//employeeSchema.path('email').validate((val) => {
 //   emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    return emailRegex.test(val);
//}, 'Invalid e-mail.');

mongoose.model('Job', JobSchema);

