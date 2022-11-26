import axios from "axios";
const login = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    return response;
  } catch (err) {
    console.log(err);
  }
};
const authService = {
  login,
};

export default authService;
