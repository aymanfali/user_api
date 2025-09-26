import * as userService from "../services/user.service.js";
import ApiError from "../utils/ApiError.js";


export const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};
export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json({ success: true, data: users });
  } catch (err) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) throw new ApiError(404, "User not found");
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
 try {
 const user = await userService.updateUser(req.params.id,
req.body);
 if (!user) throw new ApiError(404, 'User not found');
 res.json({ success: true, data: user });
 } catch (err) {
 next(err);
 }
};
export const deleteUser = async (req, res, next) => {
 try {
 const user = await userService.deleteUser(req.params.id);
 if (!user) throw new ApiError(404, 'User not found');
 res.json({ success: true, message: 'User deleted successfully' });
} catch (err) {
 next(err);
 }
};
