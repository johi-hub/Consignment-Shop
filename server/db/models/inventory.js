const mongoose = require('mongoose'),
  moment = require('moment'),
  Store = require('./store'),
  User = require('/user');

const inventoryItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
    },
    bullets: {
        type: []
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Store'
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    quantity: {
        type: Number
    }
  },
);

userSchema.virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'owner'
  });

  userSchema.virtual('stores', {
    ref: 'Store',
    localField: '_id',
    foreignField: 'store'
  });