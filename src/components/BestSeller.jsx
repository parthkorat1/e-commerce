import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);

  

  const [bestSeller, SetBestseller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    SetBestseller(bestProduct.slice(0, 5));
  }, [products]);



  return (
    <div className=" my-10">
      <div className=" text-center text-3xl py-8">
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className=" w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Check out our best-selling items, praised for their quality and style. These customer favorites are top-rated for a reason!
        </p>
      </div>

      <div className="text-red-700 text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        PRODUCTS ARE COMMING SOON.........
        {/* {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))} */}
      </div>
    </div>
  );
};

export default BestSeller;
