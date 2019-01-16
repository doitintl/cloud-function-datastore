const Datastore = require('@google-cloud/datastore');

// Instantiates a client
const datastore = Datastore();



/**
 * HTTP Cloud Function.
 * This function is exported by index.js, and is executed when
 * you make an HTTP request to the deployed function's endpoint.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.datastoreQuery = (req, res) => {
  // The kind for the new entity
  const kind = 'Task';
  // The name/ID for the new entity
  const name = 'sampletask1';
  // The Cloud Datastore key for the new entity
  const taskKey = datastore.key([kind, name]);

  // Prepares the new entity
  const task = {
    key: taskKey,
    data: {
      description: 'Buy milk',
    },
  };


  // Store some dummy data in datastore	
  datastore.save(task).catch(err => {
      console.error(err);
      res.status(500).send(err.message);
      return Promise.reject(err);
    });

  // Create a Query
  const q = datastore.createQuery('Task').order('created');

  // Run the query and retrieve all Entities 
  runQuery(q)

  res.send('Queried data from datastore, see results in function log');
}


async function runQuery(query){
  // Run the actual query async
  const [tasks] = await datastore.runQuery(query);
  console.log('Tasks:');
  // Print all tasks to log
  tasks.forEach(task => {
    const taskKey = task[datastore.KEY];
    console.log(taskKey.id, task);
    });

    return tasks
} 