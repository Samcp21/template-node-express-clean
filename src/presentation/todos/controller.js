class TodosController {
  getTodos = async (req, res) => {
    return res.json("hello world");
  };
}

module.exports = {
  TodosController,
};
