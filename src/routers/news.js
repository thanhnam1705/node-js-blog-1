const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController.js');

// Route chi tiết bài viết
router.get("/:slug", newsController.show);
// Route danh sách tin tức
router.get("/", newsController.index);
module.exports = router;