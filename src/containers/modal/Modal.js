import React from 'react';
import Style from './modal.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from './modalSlice';
import Comments from '../comments/Comments';


function Modal(props) {
    const display = useSelector((state) => state.toggleModal.toggle);
    //const data = useSelector((state) => state.toggleModal.data);
    const dispatch = useDispatch();
 
    console.log(props)
   
    return (
        <div className={display? Style.show: Style.hide}>
             <section data-testId='modal' className={Style.modalBackgroundBlur}>
            <div className={Style.modalContainer}>
              
            <a className={Style.readMoreLink} onClick={() => dispatch(toggleModal())}>X</a>
            </div>
            <p>modal</p>

            <Comments />
        </section>

        </div>
       
    )
}



export default Modal;