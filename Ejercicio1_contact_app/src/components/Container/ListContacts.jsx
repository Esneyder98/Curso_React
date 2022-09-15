import React,{useState} from 'react';
import {Contacto} from '../model/contacto.class'
import ContactComponent from '../pure/ContactComponent';

const ListContacts = () => {
    const defaultContact = new Contacto('Nombre Example','Apellidos Completos','example@correo.com',false);
    
    const [coneccion,setConeccion]= useState(false);

    const conect =()=>{
        setConeccion(true);
    }
    const desc =()=>{
        setConeccion(false);
    }
    return (
        <div>
            <h1>Contacts</h1>
            <ContactComponent contacto={defaultContact} coneccion={coneccion}></ContactComponent>
            <button onClick={coneccion?desc:conect}>Coneccion</button>
        </div>
    );
};

export default ListContacts;
