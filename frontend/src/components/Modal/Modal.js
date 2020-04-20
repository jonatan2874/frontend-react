import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    //   console.log(this.props.onClose)
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
    //   position: 'fixed',
    //   top: 0,
    //   bottom: 0,
    //   left: 0,
    //   right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
    //   padding: 50,
    //   zIndex: 10,
      display : 'block'
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30,
    //   display : 'block'
    };

    return (
      <div className="backdrop modal fade show" style={backdropStyle}>
        <div className="modal-dialog modal-dialog-centered" >
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;