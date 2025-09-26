export const getProfile = (req, res) => {
  // req.user comes from authMiddleware
  res.json({
    success: true,
    data: {
      message: "This is a protected route",
      user: req.user,
    },
  });
};
