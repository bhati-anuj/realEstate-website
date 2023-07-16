import React, { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import PropertyDetailModal from "../PropertyDetailModal/PropertyDetailModal";
import ContactForm from "../ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { addSaveData, removeSaveData } from "../../Store/UserSlice/UserSlice";

const ListCard = ({ data, value, displayLike,displayRemove }) => {
  const [modalShow, setModelShow] = useState(false);
  const [contactForm, setContactForm] = useState(false);
  const [like, setLike] = useState(false);

  const dispatch = useDispatch();

  // To import login user data to compare login ID from LoginSlice
  const loginUser = useSelector((state) => {
    return state.loginUsers;
  });



  // To add save data into UserSlice
  const handleSave = (e) => {
    dispatch(addSaveData({ id: loginUser[0].userID, data: e }));
    setLike(!like);
  };

  const handleRemoveSave = (e) => {
    dispatch(removeSaveData({ id: loginUser[0].userID, data: e }));
    setLike(!like);
  };

  return (
    <div>
      <Card key={value}>
        <Card.Img
          variant="top"
          src={data.photos[0]}
          style={{ height: "18rem" }}
        />
        <div style={{display:`${displayRemove}`}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-x-circle mt-3 ms-3"
            viewBox="0 0 16 16"
            onClick={() => handleRemoveSave(data)}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div style={{ display: `${displayLike}` }}>
          {!like ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-heart mt-3 ms-4"
              viewBox="0 0 16 16"
              color="red"
              onClick={() => handleSave(data)}
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-heart-fill mt-3 ms-4"
              viewBox="0 0 16 16"
              color="red"
              
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          )}
        </div>

        <Card.Body>
          <Card.Title>
            <span style={{ fontWeight: "700" }}>${data.price}</span>{" "}
            {data.homeType}
          </Card.Title>
          <Card.Text style={{ color: "red" }}>{data.homeStatus}</Card.Text>
          <Card.Text>
            {data.address.streetAddress}, {data.address.city},{" "}
            {data.address.state} {data.address.zipcode}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Bedrooms : {data.bedrooms}</ListGroup.Item>
          <ListGroup.Item>Bathrooms : {data.bathrooms}</ListGroup.Item>
          <ListGroup.Item>Living Area : {data.livingArea} sqft</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button className="mb-2 me-4 " onClick={() => setModelShow(true)}>
            {" "}
            See Property
          </Button>
          <PropertyDetailModal
            modalValue={data}
            show={modalShow}
            onHide={() => setModelShow(false)}
          />
          <Button
            className="mb-2 btn-secondary"
            onClick={() => setContactForm(true)}
          >
            {" "}
            Contact agent
          </Button>
          <ContactForm
            show={contactForm}
            onHide={() => setContactForm(false)}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListCard;
