import React, {useState} from 'react';
import '../styles/LoginButton.css';
import '../styles/Modal/ModalPopUp.css';
import {ModalPopUp} from './Modal/ModalPopUp';

// class LoginButton extends React.Component {
//   state = {
//     showModal: false,
//   };
//
//   toggleModal = () => {
//     this.setState({
//       showModal: !this.state.showModal,
//     });
//   };
//
//   render() {
//     return (
//       <React.Fragment>
//         <button className="login-button" onClick={this.toggleModal}>
//           Log In
//         </button>
//         {this.state.showModal ? (
//           <div className="modal">
//             <span className="close-button" onClick={this.toggleModal}>
//               &times;
//             </span>
//             <ModalPopUp />
//           </div>
//         ) : null}
//       </React.Fragment>
//     );
//   }
// }

export function LoginButton() {
  const [showModal, setShowModal] = useState(false)

  function toggleModal() {
    setShowModal(!showModal)
  }

  const Modal = () => {
    return (
        <div className="modal">
            <span className="close-button" onClick={toggleModal}>
              &times;
            </span>
          <ModalPopUp />
        </div>
    )
  }

  return (
      <React.Fragment>
        <button className="login-button" onClick={toggleModal}>
          Log In
        </button>
        {showModal? <Modal/> : null}
      </React.Fragment>
  )
}
