const router = require('express').Router(),
  { createStore, getAllStores, updateStore } = require('../../controllers/stores');

// router.post('/stores', createStore);

router.get('/stores', getAllStores);

// router.patch('/stores/:catId', updateStore);

// router.get('/stores/:catId', getStore);

// router.delete('/stores/catId', deleteStore);

module.exports = router;