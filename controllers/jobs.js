const router = require("express").Router();
const Job = require("../models/job");

router.get("/", async (req, res, next) => {
  const jobs = await Job.find({});
  res.json(jobs);
});

router.get("/:id", async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);

    if (job) {
      res.status(200).json(job);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const content = req.body;

    const job = new Job({
      ...content,
    });

    const savedJob = await job.save();
    res.status(200).json(savedJob);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const job = await Job.findById(req.params.id);
  try {
    if (job) {
      const jobToDelete = await Job.findByIdAndRemove(req.params.id);
      res.status(204).json(jobToDelete);
    } else {
      res.status(404).json({ error: "content doesn't exist" });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const jobToUpdate = req.body;
  try {
    if (jobToUpdate) {
      const updatedJob = await Job.findByIdAndUpdate(
        req.params.id,
        jobToUpdate,
        { new: true }
      );
      res.status(200).json(updatedJob);
    } else {
      res.status(404).json({ error: "content doesn't exist" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
