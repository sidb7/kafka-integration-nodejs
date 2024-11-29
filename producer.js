const kafka = require('kafka-node');
// const client = require("./kafka_client")
// const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new kafka.Producer(client);

producer.on('ready', () => {
    console.log('Kafka Producer is ready');
});

producer.on('error', (err) => {
    console.error('Kafka Producer error:', err);
});

const sendMessage = (topic, message) => {
    const payloads = [{ topic: 'real-time-topic', key: "producer 2", messages: 'Message from Producer 2',partition:2 }];
    producer.send(payloads, (err, data) => {
        if (err) console.error('Send error:', err);
        else {console.log('Message sent:', data);
            producer.close((err)=>{
                if(err){
                    console.log("ERROR CLOSING PRODUCER")
                }else{
                    console.log("Producer closed")
                }
            })
        }
    });
  
};

// setInterval(()=>{
//     sendMessage("real-time-topic","HELOO WORLD")
// },5000)

sendMessage("real-time-topic","HELOO WORLD")

// producer.close()