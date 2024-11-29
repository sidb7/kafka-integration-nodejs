const kafka = require('kafka-node');
// const client = require("./kafka_client.js")
const Consumer = kafka.Consumer;
// const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });

// const consumer = new Consumer(
//     client,
//     [{ topic: 'real-time-topic', partition: 0 }],
//     { autoCommit: true , fromOffset: 'earliest', }
// );


const consumer = new Consumer(
    {
        kafkaHost: 'localhost:9092',
        groupId: 'real-time-group',
        autoCommit: true,
        // fromOffset: 'earliest',
    },
    ['real-time-topic']
);

consumer.on('message', (message) => {
    console.log('Received message:', message);
});

consumer.on('error', (err) => {
    console.error('Consumer error:', err);
});
