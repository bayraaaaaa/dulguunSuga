import Spinner from "react-bootstrap/Spinner";

const SpinnerX = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", height:"100vh", marginTop:"250px"}}>
    <Spinner animation="border" role="status" style={{height:"200px", width:"200px"}}>
    </Spinner>
    </div>
    
  );
};
export default SpinnerX;