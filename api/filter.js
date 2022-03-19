const express = require("express");
const { type } = require("express/lib/response");
const router = express.Router();

router.post("/", (req, res) => {
  // Filter out objects
  const result = Object.values(req.body.payload).filter(
    (item) => item.episodeCount > 0 && item.drm === true
  );

  let resArr = [];
  // Choose only needed members
  Object.values(result).forEach((item) => {
    let obj = {
      image: item.image.showImage,
      slug: item.slug,
      title: item.title,
    };
    resArr.push(obj);
  });
  // add responce member name
  response = { response: resArr };

  res.send(response);
});

module.exports = router;
