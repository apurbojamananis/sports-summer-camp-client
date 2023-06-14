import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGooglSingIn = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;

      const saveUserData = {
        name: loggedUser.displayName,
        email: loggedUser.email,
        photoUrl: loggedUser.photoURL,
        role: "student",
      };

      fetch(
        "https://sports-summer-camp-server-apurbojamananis.vercel.app/users",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUserData),
        }
      )
        .then((res) => res.json())
        .then(() => {
          navigate("/");
        });
    });
  };
  return (
    <div className="flex items-center mt-6 -mx-2">
      <button
        onClick={handleGooglSingIn}
        type="button"
        className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
      >
        <FaGoogle></FaGoogle>

        <span className="hidden mx-2 sm:inline">Sign in with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
