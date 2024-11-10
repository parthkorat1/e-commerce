import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';
import { data } from 'autoprefixer';

const Product = () => {
  const { productId } = useParams();

  const { products, currency, addToCart } = useContext(ShopContext);
  const [proudctData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProudctData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProudctData();
  }, [productId, products]);

  return proudctData ? (
    <div className=" border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      {/* product data */}
      <div className=" flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}

        <div className=" flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className=" flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {proudctData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer  "
                alt="photo"
              />
            ))}
          </div>

          <div className=" w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* product information */}

        <div className=" flex-1">
          <h1 className=" font-medium text-2xl mt-2 ">{proudctData.name}</h1>
          <div className=" flex items-center gap-1 mt-2 ">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>

          <p className=" mt-5 text-3xl font-medium">
            {currency}
            {proudctData.price}
          </p>
          <p className=" mt-5 text-gray-500 md:w-4/5 ">
            {' '}
            {proudctData.description}
          </p>
          <div className=" flex flex-col gap-4 my-8">
            <p className="">Select Size</p>

            <div className=" flex gap-2">
              {proudctData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? 'border-orange-500' : ''
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick={()=>{addToCart(proudctData._id , size)}} className=" bg-black text-white px-8 py-3 text-sm active:bg-gray-700 ">
            ADD TO CART
          </button>
          <hr className=" mt-8 sm:w-4/5" />

          <div className=" text-sm text-gray-500 mt-5 flex flex-col gap-">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange within 7 days</p>
          </div>
        </div>
      </div>

      <div className=" mt-20">
        <div className=" flex">
          <p className=" border px-5 py-3 text-sm"> Description </p>
          <p className=" border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className=" flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sunt
            a tempore molestias reiciendis consectetur culpa omnis nisi possimus
            sapiente quisquam sint dolorem ipsam aliquid, fugiat voluptatibus
            dolore error officia? Error ex ad blanditiis ducimus eos aliquam
            alias laudantium enim excepturi doloremque minima voluptatum
            sapiente officia illo corrupti velit, fuga dolorem eveniet! Autem
            sapiente sit ad eius tempore perspiciatis dolorem? Nulla id quidem
            quos consequuntu
          </p>
          <p>
            cupiditate, eos minima commodi vel qui dolor dolores quae maiores
            architecto quibusdam, placeat a nesciunt nemo. Vero at consequatur,
            placeat ex dignissimos accusantium quaerat veniam. Possimus
            necessitatibus animi quisquam quibusdam distinctio modi suscipit
            consequuntur ex, nisi perferendis aliquam nam exercitationem
            sapiente mollitia hic laboriosam saepe blanditiis eum cumque rerum
            velit quidem. Aliquam eveniet ullam sapiente! Nihil necessitatibus
            incidunt, consequatur maxime illum, neque minima velit culpa debitis
            repellendus fuga animi facilis ad praesentium assumenda consectetur
            veritatis alias at vero ipsam, commodi tempore dolor sit et. Libero?{' '}
          </p>
        </div>
      </div>
              {/* display related product */}

              <RelatedProducts category= {proudctData.category} subCategory = {proudctData.subCategory} />
    </div>

  ) : (
    <div className=" opacity-0 "></div>
  );
};

export default Product;
