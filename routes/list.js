var express = require('express');
var router = express.Router();
const List = require("../models/list");

router.post("/", async (req, res) => {
  try {
    const list = await List.find();

    res.json(list);
    console.log(list)

  } catch (err) {
    console.error(err);
  }

});


router.post("/post", async (req, res) => {

  const { text, amount } = req.body;

  try {
    const list = new List({ text, amount });
    const item = await list.save()
      res.status(201).json({ item })

  } catch (error) {
      res.status(500).send({ success: false, error })
  }
});

//   // const id = mongoose.Types.ObjectId(req.params.id);

router.post("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const item = await List.findByIdAndDelete(id, { new: true });
      res.send(item);
      res.status(404).send(`${id} Deleted Successfully.`);
  } catch (error) {
      res.status(500).send(error.message);
  }
});


module.exports = router;
