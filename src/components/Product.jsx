import React, {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
 import { useDispatch } from "react-redux";
import {addCart} from "../redux/action";
const Product =()=>{
    const {id} =useParams();
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);
    const dispatch=useDispatch();
     const addProduct =(product)=>{
        dispatch(addCart(product)) ;
    
     }
    
    useEffect(()=>{
        const  getProducts =async() =>{
          setLoading(true);
          const response =await fetch(`https://fakestoreapi.com/products/${id}`);
              setProduct(await response.json());
              setLoading(false);
  
        }    
        getProducts();
    },[]);
   const  ShowProduct=()=>{
        return(
         <>
              <div className="col-md-6 mt-4">
                <img src={product.image} alt={product.title}  height="300px" width="300px" />
            </div>
                <div className="col-md-6">
                   <h4 className='text-black-50 text-uppercase mt-3'> {product.category}</h4>
                   <h1 className='display-5'>{product.title}</h1> 
                   <p className="lead">
                         Rating {product.rating && product.rating.rate}
                         <i className='fa fa-star'></i>
                   </p>
                   <h3 className='display-6 my-4 fw-bold'>
                    $ {product.price}
                   </h3>
                   <p className="lead">
                        {product.description}
                   </p>
                    <button className='btn btn-outline-dark px-4 py-8' onClick={()=>addProduct(product)}>
                        Add To Cart
                    </button>
                    <Link className='btn btn-dark' to="/cart" >
                        Go to Cart
                    </Link>

                </div>
         </>
       
        
    

            
        )
    }


  return (
     <div>
       <div className="container mt-5">
        <div className="row py-4">
            {<ShowProduct/>}
        </div>
       </div>
     </div>
  );
}

export default Product;