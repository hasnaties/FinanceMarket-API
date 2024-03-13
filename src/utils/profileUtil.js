import Profile from '../models/profileModel.js';

export const getProfile = async (req, res) => {
  const { _id } = req.body;

  try {
    const profile = await Profile.findById(_id);
    res.status(200).json(profile);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const loginProfile = async (req, res) => {
  try {
    const { email, password } = req.body;
    const profile = await Profile.findByCredentials(email, password);
    const token = await profile.generateAuthToken();

    res.status(200).json({ profile, token });

  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateLastActive = async (req, res) => {

  try {
    req.profile.lastActive = Date.now();
    await req.profile.save();

    res.status(200).json({ profile: req.profile });
  } catch (error) {
    res.status(500).json({ error });
  }
}