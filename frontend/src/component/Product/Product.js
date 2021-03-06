import React, { Fragment, useEffect,useState } from 'react'
import"./Products.css"
import {useDispatch,useSelector} from "react-redux";
import {clearErrors,getProduct} from "../../actions/productAction.js"
import Loader from "../layout/Loader/Loader.js"
import ProductCard from "../Home/ProductCard.js"
import Pagination from "react-js-pagination"
import Slider from "@material-ui/core/Slider"
import Typography from '@material-ui/core/Typography';
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData.js"



const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Camera",
  "SmartPhones"
];

const Products = ({match}) => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const [currentPage ,setCurrentPage] = useState(1)

  const [price, setPrice] = useState([0,90000]);

  const [category, setCategory] = useState("")

  const [ratings, setRatings] = useState(0)
  

  const {products,loading,error,productCount,resultPerPage,filteredProductsCount} = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo=(e)=>{
    setCurrentPage(e)
  };

  const priceHandler = (event , newPrice) => {
    setPrice(newPrice);
  };

 

  useEffect(() =>{
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProduct(keyword,currentPage,price,category,ratings))
  },[dispatch , keyword,currentPage,price,category,ratings,alert,error ])


  let count = filteredProductsCount;

  return <Fragment>
    {loading ? <Loader/> : (
      <Fragment>

        <MetaData title= "PRODUCTS -- ECOMMERCE" />
        <h2 className="productsHeading">Products</h2>
        <div className="products">
          {products && 
           products.map((product) => (
             <ProductCard key={product.id} product={product} />
           ))}
        </div>



        <div className='filterBox'>
          <Typography>Price</Typography>
          <Slider
           value={price}
           onChange={priceHandler}
           valueLabelDisplay="auto"
           aria-labelledby='range-slider'
           min={0}
           max={90000}
          />

          <Typography>Categories</Typography>
          <ul className='categoryBox'>
            {categories.map((category) => (
              <li className='category-link' key={category} onClick={() => setCategory(category)}>
                {category}
              </li>
            ))}
          </ul>

          <fieldset>
          <Typography component="legend">Ratings Above</Typography>
          <Slider
           value={ratings}
           onChange={(e,newRating)=>{
             setRatings(newRating);
           }} 
           aria-labelledby="continuous-slider"
           min={0}
           max={5}
           valueLabelDisplay="auto"
          />
        </fieldset>
        </div>



        {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
      </Fragment>
    )}
  </Fragment>
}

export default Products