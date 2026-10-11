import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    console.log("req.body:", req.body)
    const { name, email, address } = req.body;
   if (
  !name ||
  !email ||
  !address ||
  !address.city ||
  !address.state ||
  address.pincode == null ||
  address.pincode === ""
) {
  console.log("Hello1111");

  return res.status(400).json({
    success: false,
    message: "Invalid request",
  });
}
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Invalid request",
      });
    }
    const response = await User.create({
      name,
      email,
      address: {
        city:address.city,
        state:address.state,
        pincode:address.pincode,
      },
    });

    if (!response) {
      return res.status(400).json({
        success: false,
        message: "Invalid request",
      });
    }
    res.status(201).json({
      success: true,
      message: "users created successfully",
      users: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(400).json({
        success: false,
        message: "Invalid data",
      });
    }
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
