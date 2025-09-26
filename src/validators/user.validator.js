import { body, param } from "express-validator";
import { validate } from "../middlewares/validator.middleware.js";

// Validation rules for creating a user
export const createUserValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Must be a valid email"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  validate,
];

// Validation rules for updating a user
export const updateUserValidator = [
  param("id")
    .notEmpty()
    .withMessage("User ID is required")
    .isMongoId()
    .withMessage("Invalid user ID"),
  body("name").optional().isString().withMessage("Name must be a string"),
  body("email").optional().isEmail().withMessage("Must be a valid email"),
  body("age")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Age must be a positive number"),
  validate,
];

// Validation rules for user ID (used in get/delete)
export const userIdValidator = [
  param("id")
    .notEmpty()
    .withMessage("User ID is required")
    .isMongoId()
    .withMessage("Invalid user ID"),
  validate,
];
