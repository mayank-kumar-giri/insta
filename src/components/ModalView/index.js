import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './modalView.css';

class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render() { 
      const {
        title,
        footer,
        children,
        onClose,
        size,
        onNext,
        onPrevious,
      } = this.props;
      
      return (
        <Modal show={true} onHide={onClose} size={size} centered>
          {title && <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>}
          {!title && 
            <div className="row justify-content-end">
              <i className="material-icons md-20">close</i>
            </div>
          }

          <Modal.Body className="pad-0">
            <div className="container-fluid pad-0">
              <div className="row pad-0 modal-row">
                <div className="pad-0 col-1">
                  <i className="material-icons arrow" onClick={onPrevious}> navigate_before </i>
                </div>
                <div className="pad-4 col-10">
                  {children}
                </div>
                <div className="pad-0 col-1">
                  <i className="material-icons arrow" onClick={onNext}> navigate_next </i>
                </div>
              </div>
            </div>
          </Modal.Body>

          {footer && <Modal.Footer>
            {footer}
          </Modal.Footer>}
        </Modal>
      );
  }
}

ModalView.defaultProps = {
  title : null,
  footer: null,
};
 
export default ModalView;