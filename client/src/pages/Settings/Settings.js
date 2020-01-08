import React,{useState} from "react";
import "./Settings.css";
import {Modal,Button,FormControl} from "react-bootstrap"

const Settings = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault();
        setShow(true)};

    const handlePasswordChange =e=>
    {
        e.preventDefault();
    }
    return(
    <div className="container">
        <div className="row mt-4">
            <div className="card card-settings">
                <div className="row m-4 justify-content-center">
                    <span>User Name : </span>
                    <div className="ml-2"> {props.currentUser.name}</div>
                    <button className="btn ml-3">Edit Name</button>
                </div>
                <div className="row m-4 justify-content-center">
                    <span>Password : </span>
                    <div className="ml-2">************</div>
                    <form onClick={handleShow}>
                    <button className="btn ml-3">Edit Password</button></form>
                </div>
                <div className="row m-4 justify-content-center">
                    <span>Email : </span>
                    <div className="ml-2"> {props.currentUser.email}</div>
                    <button className="btn ml-3">Edit Email</button>
                </div>
                <div className="row m-2 justify-content-center ">
                    <button className="btn">Delete Account</button>
                </div>
            </div>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Password change</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormControl
                placeholder="new Password"
                aria-label="new Password"
                aria-describedby="basic-addon2"
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePasswordChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>)
}

export default Settings