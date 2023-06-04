const router = require("express").Router();

router.post("/", async (req, res, next) => {
  const body = req.body;
  console.log(body);
});

module.exports = router;
