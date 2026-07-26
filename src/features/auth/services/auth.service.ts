import { USERS } from "../constants/credentials";

export const authService = {
  login(username: string, password: string) {
    const user = USERS.find(
      (item) =>
        item.username === username &&
        item.password === password,
    );

    if (!user) {
      throw new Error("Invalid username or password.");
    }

    return {
      token: "dummy-token",
      user: {
        username: user.username,
        role: user.role,
      },
    };
  },
};