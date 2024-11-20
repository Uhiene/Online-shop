import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {useGetAllProductsQuery } from "../features/products/api/ProductsApi";
import { addToCart } from "../features/products/slice/cartSlice";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    navigate("/cart");
  }
  
  return (
    <div className="p-20">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occoured...</p>
       

      ) : (
        <>
          <h2 className="font-medium text-2xl text-slate-700 mb-4">New Arrivals</h2>
          <div className="flex justify-between items-center">
            {data?.map((product) => (
              <div key={product.id} className="shadow-sm shadow-slate-500 w-40 min-h-64 p-4 rounded-md">
                <h3 className="font-medium text-lg text-slate-700 mb-2">{product.name}</h3>
                <img src={product.image} alt={product.name} className="w-full h-32" />
                <div className="flex justify-between items-center my-2">
                  <span className="font-light text-xs text-slate-500">{product.desc}</span>
                  <span className="font-bold text-sm text-slate-900">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)} className="bg-blue-500 text-white w-full p-2 rounded-md">Add To Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
