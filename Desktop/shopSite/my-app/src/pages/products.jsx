import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {

  const params = useParams();
  const [data, setData] = useState([]);
  const getDataById = async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setData(response.data);
  };
  useEffect(() => {
    getDataById(params.id);
  }, []);
  return (
    <div style={{display:"flex", height:"100vh", justifyContent:"center", alignItems:"center"}}>
       <img src={data.thumbnail} alt="" style={{width:"500px", height:"350px", marginRight:"100px"}}/>
       <div>
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
        <p>{data.brand}</p>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><p>Category : {data.category}</p></ListGroup.Item>
        <ListGroup.Item> <p>{data.description}</p></ListGroup.Item>
        <ListGroup.Item><p>Rating : {data.rating}</p></ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
       </div>
     
     
    </div>
  );
};
export default Products;

       
      
      