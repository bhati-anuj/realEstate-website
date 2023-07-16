import React from 'react'
import { Modal,Button,Card,ListGroup } from 'react-bootstrap';
import style from "./PropertyDetailModal.module.css"


const PropertyDetailModal = (props) => {
  
    const homeData = props.modalValue;
 


    
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
        <div className='modal-container d-flex p-2' >
        <div className={style.imageContainer}>
           <img src={homeData.photos[0]} alt="" width="600rem" />
           { homeData.photos.map((e) =>
           
           <img src={e} alt="photos" key="" className='m-3' width="40%" />
           )

           }
             </div>
        <div className='modal-div-2'>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{color:"blue",fontWeight:"700"}}>
          Dikha-Dunga.com
     
      
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex'>
        <h4 className='me-5'>${homeData.price}</h4>
           <p>{homeData.address.streetAddress} | {homeData.address.city} | {homeData.address.state} | {homeData.address.zipcode}</p>
        </div>
        <h5 style={{color:"red"}}>{homeData.homeStatus}</h5>
        <Card.Title>Description</Card.Title>
        <Card.Text>
          {homeData.description}
        </Card.Text>
        <Card.Title>Overview</Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item>Home type : {homeData.homeType}</ListGroup.Item>
        <ListGroup.Item>Living Area : {homeData.livingArea}</ListGroup.Item>
        <ListGroup.Item>Lot Size : {homeData.lotSize}</ListGroup.Item>
        <ListGroup.Item>Bedrooms : {homeData.bedrooms}</ListGroup.Item>
        <ListGroup.Item>Bathrooms : {homeData.bathrooms}</ListGroup.Item>
        <ListGroup.Item>Year Built : {homeData.yearBuilt}</ListGroup.Item>
      </ListGroup>
      <Card.Title>Listed By</Card.Title>
      <ListGroup>
        <ListGroup.Item>Name : {homeData.listedBy.name}</ListGroup.Item>
        <ListGroup.Item>Email : {homeData.listedBy.email}</ListGroup.Item>
        <ListGroup.Item>Phone : {homeData.listedBy.phone}</ListGroup.Item>
      </ListGroup>
      
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </div>
      </div>
    </Modal>
  );
  
}

export default PropertyDetailModal
