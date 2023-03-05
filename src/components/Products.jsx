import { useSelector } from "react-redux";
import React ,{useState,useEffect}  from 'react';
import { Link } from 'react-router-dom';

function Products() {
   
    const [data,setData]=useState([]);
    const [filter,setFilter]=useState(data);
    const [loading,setLoading]=useState(false);
    let componentMounted =true;
    useEffect(()=>{
        const  getProducts =async() =>{
          setLoading(true);
          const response =await fetch("https://fakestoreapi.com/products");
          if(componentMounted){
              setData(await response.clone().json());
              setFilter(await response.json());
              setLoading(false);
  
          }
          return()=>{
              componentMounted=false;
          }
        }    
        getProducts();
    },[]);

    const filterProduct =(cat)=>{
        const updatedList= data.filter((x)=>x.category===cat);
        setFilter(updatedList);
    };
    const ShowProducts =()=>{
        return(
            <>
           <div className="buttons display-6 d-flex justify-content-center">
             <button className="btn btn-outline-dark" onClick ={()=>setFilter(data)}>All</button>        
             <button className="btn btn-outline-dark me-2" onClick ={()=>filterProduct("men's clothing")}>Men's clothing</button>        
             <button className="btn btn-outline-dark me-2" onClick ={()=>filterProduct("women's clothing")}>women's clothing</button>                
             <button className="btn btn-outline-dark me-2"onClick ={()=>filterProduct("jewelery")}>Jewels</button>                
             <button className="btn btn-outline-dark me-2" onClick ={()=>filterProduct("electronics")}>Electronics</button>                
            </div>
        {filter.map((product)=>{
             return(
                <>
                 <div className="col-md-3 mb-4 mt-4">
                   <div class="card h-100 text-center p-4" key={product.id}>
                   <img src={product.image } class="card-img-top" alt={product.title} height="150px" />
                   
                     <div class="card-body">
                       <h5 class="card-title mb-0">{product.title.substring(0,12)}</h5>
                       <p class="card-text lead fw-bold">${product.price}</p>
                       
                         <Link class="btn btn-outline-dark" to={`/products/${product.id}`}>Buy Now
                         </Link>
                      
                   </div>
                   </div>
                  </div>
                  </>
                  );
            })}
          
            </>  
        );
       
    };
return (
<div>

    <div className ="container my-5 py-5">
        <div className ='row'>
            <div className ='col-12 mb-5'>
                <h1 className="display-3 text-center fw-bolder">Latest Products</h1>
                
            </div>
            <hr />
        </div>
        <div className ="row">
                {<ShowProducts/>}
            </div>
    </div>
        
</div>
  );
}

export default Products;
