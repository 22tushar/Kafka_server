const { Kafka } = require("./client");

async function init() {
     
    const admin = Kafka.admin();
    console.log("admin connecting...")
    admin.connect();
    console.log("admin connected!")

    console.log("creating topic...")

    await admin.createTopics({
          topics: [
            {
                 topic:"topic_1",
                 numPartitions:2,
            },
          ],
    })
    console.log("Topic created!")

    console.log("admin disconnected!")
    await admin.disconnect();
}

init();