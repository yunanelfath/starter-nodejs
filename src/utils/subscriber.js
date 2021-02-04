const express = require("express")
const redis = require("redis")
const config = require('../config')


const subscriber = redis.createClient(config.redis)

module.exports = {
	subscribe: ()=>{
		subscriber.on("message", (channel, message) => {
  			console.log("Received data :" + message)
		})
		subscriber.subscribe("user-notify")
	}
}

