import client from "./kafka_client";


const createTopics = (topicName, partitions = 1, replicationFactor = 1) => {
    const topicsToCreate  = [{topic : topicName,partitions,replicationFactor}]
    client.createTopics(topicsToCreate, (err,result)=>{
        if(err) {
            console.log("Error creating topic :: ", err)
        }
        else {
            console.log("Topic is created :: " , result)
        }

        client.close()
    })

 

}

export default createTopics