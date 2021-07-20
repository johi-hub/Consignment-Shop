const mongoose = require('mongoose'),
  Store = require('../db/models/store');

// ***********************************************//
// Create a task
// ***********************************************//
exports.createStore = async (req, res) => {
  const store = await new Store({
    ...req.body,
    owner: req.user._id
  });
  try {
    task.save();
    res.status(201).json(store);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.getAllStores = async (req, res) => {
    const match = {},
      sort = {};
  
    // if (req.query.completed) match.completed = req.query.completed === 'true';
  
    // if (req.query.sortBy) {
    //   const parts = req.query.sortBy.split(':');
    //   sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
    // }
    try {
      const stores = await Store.find()
        // .populate({
        //   path: 'stores',
        //   match,
        //   options: {
        //     limit: parseInt(req.query.limit),
        //     skip: parseInt(req.query.skip),
        //     sort
        //   }
        // })
        // .execPopulate();
        console.log(stores, "stores")
      res.json(stores);
    } catch (e) {
      res.status(500).json({ error: e.toString() });
    }
  };

  exports.updateStore = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'name', 'dueDate'];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation)
      return res.status(400).send({ error: 'Invalid updates!' });
    try {
      const task = await Task.findOne({
        _id: req.params.id,
        owner: req.user._id
      });
      if (!task) return res.status(404).json({ error: 'task not found' });
      updates.forEach((update) => (task[update] = req.body[update]));
      await task.save();
      res.json(task);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  };

  exports.getStore = async (req, res) => {
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(400).send('Not a valid store id');
  
    try {
      const store = await Store.findOne({ _id});
      if (!store) return res.status(404).send();
  
      res.json(store);
    } catch (e) {
      res.status(500).json({ error: e.toString() });
    }
  };