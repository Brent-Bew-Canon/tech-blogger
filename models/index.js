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

//User to Project
User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

//Comment to Post
Post.hasMany(Comment, {
  foreignKey: 'post_id'
})

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})

//Comment to User
User.hasMany(Comment, {
  foreignKey: 'user_id'
})

Comment.belongsTo(User, {
  foreignKey: 'user_id'
})



module.exports = { User, Project, Post, Comment };
