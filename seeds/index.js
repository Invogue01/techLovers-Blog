const sequelize = require("../config/connection");

const { Post } = require("../models");
const { Comment } = require("../models");
const { User } = require("../models");

const userData = require("./userData.json");
const postData = require("./postsData.json");
const commentData = require("./commentsData.json");

const seed = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);

  console.log("users created");

  await Post.bulkCreate(postData);

  console.log("posts created");

  await Comment.bulkCreate(commentData);

  console.log("Comments seeded");

  process.exit(0);
};

seed();
