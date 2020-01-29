import React from "react";
import {Modal,Button,FormControl} from "react-bootstrap"

const ModalR = (props)=>{

  const handleClose = () => props.show=false;
  
  const handlePasswordChange =e=>
    {
        e.preventDefault();
        props.show=false
    }

    <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Password change</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormControl
                type="password"
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

}

export default ModalR;
