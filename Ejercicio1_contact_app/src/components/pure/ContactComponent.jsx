import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import {Contacto} from '../model/contacto.class'

const ContactComponent = ({contact,coneccion,remove}) => {
        useEffect(() => {
            console.log('Contacto creado');
            return () => {
                console.log(`Task: ${contact.nombre} is going to unmount`);
            }
        }, [contact]);
     /**
     * dependiendo si esta completada o pending
     * @returns badge elemento
     */
      function taskCompletedIcon(){
        if(contact.conectado){
            return (<i onClick={()=>coneccion(contact)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={()=>coneccion(contact)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }
    return (
    <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.nombre}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.apellido}</span>
            </td>
            <td className='align-middle'>
            <span>{contact.email}</span>  
            </td>
            <td className='align-middle'>
                {/* TODO: SUSTITUIR por Iconos */}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' onClick={() => remove(contact)} style={{color: 'tomato'}} ></i>
            </td>
        </tr>
    );
   

};


ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
    coneccion: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,

};


export default ContactComponent;
