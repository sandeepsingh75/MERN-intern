import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check whether the Authorization header exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Access token is required",
    });
  }

  const token = authHeader.split(" ")[1];
  try {
        const decoded = jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET
            );

        req.user = decoded;

    next();
  } catch (error) {
    // console.log("error", error)
    return res.status(401).json({
      success: false,
      message: error.message
    });
  }
};
