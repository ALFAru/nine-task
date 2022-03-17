const express = require("express");
const { type } = require("express/lib/response");
const router = express.Router();

router.post("/", (req, res) => {
  const result = Object.values(req.body.payload).filter(
    (item) => item.episodeCount > 0 && item.drm === true
  );

  let resArr = [];
  Object.values(result).forEach((item) => {
    let obj = {
      image: item.image.showImage,
      slug: item.slug,
      title: item.title,
    };
    resArr.push(obj);
  });
  response = { response: resArr };

  res.send(response);
});

module.exports = router;
