import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full left-0 bg-black flex items-center justify-between p-5 px-16">
      <Link to="/">
        <h1 className="text-3xl font-medium text-white">Online Shop</h1>
      </Link>
      <Link to="cart">
      <div className="relative">
  <FaShoppingBag className="text-4xl inline-block mr-1 text-white" />
  <span className="inline-block bg-yellow-300 px-1.5 py-0.5 text-xs rounded-full shadow-lg transform -translate-y-1/2 transition duration-300 ease-in-out hover:-translate-y-1/4">
    1
  </span>
</div>

      
      </Link>
    </div>
  );
};

export default Navbar;
