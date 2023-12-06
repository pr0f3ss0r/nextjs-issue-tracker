
// Define a schema for Users
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true },
//   // Add other user-related fields as needed
// });

// Define a schema for Issues
const issueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['OPEN', 'IN_PROGRESS', 'CLOSED'], default: 'OPEN' },
  //priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
  //createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  //assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  // Add other issue-related fields as needed
});

// Define a schema for Comments on Issues
// const commentSchema = new mongoose.Schema({
//   text: { type: String, required: true },
//   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   createdAt: { type: Date, default: Date.now },
//   // Add other comment-related fields as needed
// });

// Define models based on the schemas
//const User = mongoose.model('User', userSchema);
const Issue = mongoose.model('Issue', issueSchema);
//const Comments = mongoose.model('Comment', commentSchema);

module.exports = {  Issue };
