const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
<<<<<<< HEAD
=======
  greeting: { type: String, default: "We can honor our dead by living our best lives." },
  profilePicture: {type: String, default: "https://source.unsplash.com/random/?flowers"},
  about: String,
  story: String
>>>>>>> bd23b50f69a8b1b7c18913a88a8eb31e81dd5504
});

// Password hash middleware.

UserSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

// Helper method for validating user's password.

UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
<<<<<<< HEAD
=======

>>>>>>> bd23b50f69a8b1b7c18913a88a8eb31e81dd5504
