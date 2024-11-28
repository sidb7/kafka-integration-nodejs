const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new Producer(client);

producer.on('ready', () => {
    console.log('Kafka Producer is ready');
});

producer.on('error', (err) => {
    console.error('Kafka Producer error:', err);
});

const sendMessage = (topic, message) => {
    const payloads = [{ topic: 'real-time-topic', key: 'producer1', messages: 'Message from Producer 1' }, { topic: 'real-time-topic', key: 'producer2', messages: 'Message from Producer 2' }];
    producer.send(payloads, (err, data) => {
        if (err) console.error('Send error:', err);
        else console.log('Message sent:', data);
    });
};

setInterval(()=>{
    sendMessage("real-time-topic","HELOO WORLD")
},3000)