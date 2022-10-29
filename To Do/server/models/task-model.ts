const taskDB = require('mongoose');
const Schema = taskDB.Schema; 

const taskSchema = new Schema({
  name: String,
  description: String,
  completeBy: String,
  completed: Boolean,
});

module.exports = taskDB.model('Task', taskSchema);

