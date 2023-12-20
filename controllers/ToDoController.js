const TodoModel = require("../models/TodoModel")

module.exports.getToDo = async (req, res) => {

    const todo = await TodoModel.find()
    res.send(todo)

}


module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;

    TodoModel.create({ text, type: 'yourTypeValue' })
        .then((data) => {
            console.log("Added Successfully..");
            console.log(data);
            res.send(data);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Internal Server Error");
        });
};


module.exports.updateToDo = async (req,res)=>{
    const {_id, text } = req.body;

    TodoModel.findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Update Successfully......."))
    .catch((err)=>console.log(err))

}

module.exports.deleteToDo = async (req,res)=>{
    const {_id } = req.body;

    TodoModel.findByIdAndDelete(_id)
    .then(()=>res.send("Delete Successfully......"))
    .catch((err)=>console.log(err))

}



// module.exports.saveToDo = async (req, res) => {

//     const { text } = req.body

//     TodoModel
//         .create({ text })
//         .then((data) => {
//             console.log("Added Successfully..");
//             console.log(data)
//             res.send(data)
//         })
// }