import { container } from "tsyringe";
import UserRepository from "../repositories/userRepository";
import UserService from "../services/userService";
import AuthRepository from "../repositories/authRepository";
import AuthService from "../services/authService";

container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);
container.registerSingleton<AuthRepository>(AuthRepository);
container.registerSingleton<AuthService>(AuthService);