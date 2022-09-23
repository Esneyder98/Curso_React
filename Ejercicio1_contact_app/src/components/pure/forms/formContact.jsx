import React,{useRef} from 'react';
import PropTypes from 'prop-types'
import {Contacto} from '../../model/contacto.class'

const TaskForm = ({add}) => {
    const nombreRef = useRef('');
    const apellidoRef= useRef('');
    const emailRef= useRef('');
    //const conectadoRef = useRef(false);

// funcion para agregar una nueva tarea
    function addContact(e){
        e.preventDefault();
        const newContact = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false
        );
        // llamar al padre
        add(newContact);
    }

    return (
         <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nombreRef} id='inputNombre' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact name'/>
                <input ref={apellidoRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Contact apellido'/>
                <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='Contact email'/>
                <label htmlFor='selectLevel' className='sr-only'>Priority</label>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
        </form>

    );
}
TaskForm.protoTypes ={
    add: PropTypes.func.isRequired,
}
export default TaskForm;
