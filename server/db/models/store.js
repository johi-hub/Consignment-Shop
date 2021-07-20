const mongoose = require('mongoose'),
  moment = require('moment');

const storeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      default: false
    },
    inventory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Inventory'
    },
    catId: {
      type: String
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
);

// Format the date sent back by mongo
storeSchema.methods.toJSON = function () {
    const store = this;
    const storeObject = store.toObject();
    if (storeObject.dueDate) {
      storeObject.dueDate = moment(storeObject.dueDate).format('YYYY-MM-DD');
    }
    return storeObject;
  };
  
  const Store = mongoose.model('Store', storeSchema);
  
  module.exports = Store;