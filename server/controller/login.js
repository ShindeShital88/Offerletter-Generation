import Login from "../Models/Login.js";
import generateToken from "../utils/generateToken.js";
 
// Signup User
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await Login.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await Login.create({ name, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

export const UserLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await Login.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

export const logoutUser = (req, res) => {
  res.json({ message: 'Logged out successfully' });
};



export const GetAllData = async (req, res) => {
  try {
    // Fetch all the documents from the 'Form' collection
    const login = await Login.find();

    // Respond with the fetched data
    res.json({
      success: true,
      data: login,
      msg: "login data successfully",
    });
  } catch (error) {
    // Handle any errors during the database operation
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};
