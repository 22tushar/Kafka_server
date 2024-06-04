const { Kafka } = require("./client");

async function init() {

  const producer = Kafka.producer();

  console.log("Connecting Producer");
  await producer.connect();
  console.log("Producer Connected Successfully");

  await producer.send({
      topic: "topic_1",
      messages: [
        {
          partition:0,
          key: "testing",
          value:"Hey, I am Tushar! checking kafka server",
        },
      ],
  })

    await producer.disconnect();
}

init();