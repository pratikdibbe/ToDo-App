

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const todoSchema = new Schema({
//   // Check the correct syntax for defining the 'type' property
//   type: { type: String, required: true },
//   // Other properties...
// });

// const TodoModel = mongoose.model('ToDo', todoSchema);

// module.exports = TodoModel;



// const mongoose = require('mongoose');

// const todoSchema = new mongoose.Schema({
//   type: {
//     type: String,
//     required: true
//   },
//   // Other properties...
// });

// const TodoModel = mongoose.model('Todo', todoSchema);

// module.exports = TodoModel;

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  // Other properties...
});

const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;

