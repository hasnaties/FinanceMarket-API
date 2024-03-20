import c from "config";
import mongoose from "mongoose";
import Jwt from "jsonwebtoken";

const { Schema } = mongoose;

const profileSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profileType: {
    type: String,
    default: "User"
  },
  notification: [{ body: String, read: Boolean, createdAt: { type: Date, default: Date.now } }],
  lastActive: {
    type: Date,
    default: Date.now
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
}, {
  timestamps: true
});

//static fn to find by credentials
profileSchema.statics.findByCredentials = async (email, password) => {

  const profile = await Profile.findOne({ email });
  if (!profile) {
    throw new Error('Not found.')
  }

  const isMatch = password === profile.password;
  if (!isMatch) {
    throw new Error('Unable to login.')
  }

  return profile;
};

//instance method to generate and save JWT
profileSchema.methods.generateAuthToken = async function () {
  const profile = this;
  const token = Jwt.sign({ _id: profile._id.toString() }, c.get('app.secret_key'));

  profile.tokens = profile.tokens.concat({ token });
  await profile.save();

  return token;
}

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;