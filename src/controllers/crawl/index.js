const express = require('express')
const redis = require('redis')
const config = require('../../config')
const mongoose = require('mongoose')
const Job = mongoose.model('Job')

const publisher = redis.createClient(config.redis)

module.exports = {
    getMenu: (req, res) => {
        const menu = {
            'Number 9': 1.99,
            'Number 9 Large': 2.99,
            'Number 6 with Extra Dip': 3.25,
            'Number 7': 3.99,
            'Number 45': 3.45
        }

		publisher.publish("user-notify", JSON.stringify(menu));
		
		let job = new Job();
		job.tripadvisor_id = 'test'
		job.input_base64url = 'https;:/alskdfj'
		job.input_url = 'https://alskdfj'
		job.listing_type = 'alskdjfas'
		console.log(job)
		job.save((err, doc)=>{
			if(!err)
				console.log(doc);
			else
				console.log('the error', JSON.stringify(err));
		})
					
		return res.status(200).json({ menu: menu })
    }
}
