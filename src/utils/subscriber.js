const express = require("express")
const redis = require("redis")
const config = require('../config')


const subscriber = redis.createClient(config.redis)

const sleep = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = {
	subscribe: ()=>{
		subscriber.on("message", (channel, message) => {
  			console.log("Received data :" + message)
			sleep(8000).then(()=> { console.log('finished' +message)});
		})
		subscriber.subscribe("user-notify")
	}
}

