
const TaskModel = require("./models/task-model.ts");

const create = async (req, res, next) => {
  console.log("req.user on create");
  try {
    const data = req.body;
    console.log("req.body on create", data);
    const task = await TaskModel.create( data);
    await task.save();
    res.status(200).json(task);
    console.log("server side res.body on create", ...res.headers)
  } catch (err) {
    console.log("err on creating a new task", err)
  }
}

const readAll = async (req, res, next) => {
  console.log("req on readAll", req.params);
  const task = await TaskModel.find();
  res.status(200).json(task);
  console.log("getting all the taks")
}

const updateById = async (req,res,next) => {
  console.log("req.params on update", req.params);
  const id = req.params.id;
  const updatedTask = await TaskModel.findByIdAndUpdate(id, {...req.body}, {new:true});
  res.status(200).send(updatedTask)
}

const deleteById = async (req,res,next) => {
  console.log("req.params on delete", req.params);
  const id = req.params.id;
  await TaskModel.deleteOne({_id:id});
  console.log(`Deleting a task`);
  res.status(200).send("task removed");
}

const TaskHandler= {
  create: create,
  readAll: readAll,
  updateById: updateById,
  deleteById:deleteById
};

module.exports = TaskHandler;

