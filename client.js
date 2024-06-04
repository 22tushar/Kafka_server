const { Kafka } = require("kafkajs");

exports.Kafka = new Kafka({
      clientId:"my-kafka-app",
      brokers:["192.168.225.231:9092"],
})