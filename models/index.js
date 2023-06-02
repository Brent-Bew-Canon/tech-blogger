const User = require('./User');
const Project = require('./Project');
const Post = require('./Post');
const Comment = require('./Comment');


//User to Post
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

//Comment to Post
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
})


//Comment to User
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id'
// })



module.exports = { User, Project, Post, Comment };
