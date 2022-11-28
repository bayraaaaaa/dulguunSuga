import React from 'react'
import {Link} from 'react-router-dom'
export const  userBox = ({products}) => {
  console.log(products)
  return (
    <>
        <Link to={`/${products.id}`} style={{textDecoration:"none", color:"black"}}>
        <div style={{height:"400px", width:"250px", border:"1px solid gray", display:"inline-block", margin:"25px"}}>
          
      
          <p style={{fontFamily:"cursive"}}>{products.title}</p>
         
          <img
             className="img"
             src={products.images[0]}
             onMouseOver={(e) =>
               products.images.length === 1
                 ? (e.target.src = products.images[0])
                 : (e.target.src = products.images[1])
             }
             onMouseLeave={(e) => (e.target.src = products.images[0])}
             alt=""
             style={{width:"100%", height:"200px"}}
           /> 
         <p style={{fontFamily:"monospace"}}>{products.description}</p>
         <p style={{fontFamily:"revert-layer"}}>Products id:{products.id}</p>
           </div>
        </Link>     
        
    </>
  )
}

export default userBox