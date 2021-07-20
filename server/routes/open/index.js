const router = require('express').Router(),
  {
    getAllStores
  } = require('../../controllers/stores');

router.get('/stores', getAllStores);

// router.post('/login', loginUser);


module.exports = router;