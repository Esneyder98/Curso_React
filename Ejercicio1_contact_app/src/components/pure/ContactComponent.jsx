import React from 'react';
import PropTypes from 'prop-types';
import {Contacto} from '../model/contacto.class'

const ContactComponent = ({contacto,coneccion}) => {
    return (
        <div>
            <p>Nombre: {contacto.nombre}</p>
            <p>Apellido: {contacto.apellido}</p>
            <p>Email: {contacto.email}</p>
            <p>Conectado: {coneccion?'Contacto En Línea':'Contacto No Disponible'}</p>
        </div>
    );
};


ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactComponent;
