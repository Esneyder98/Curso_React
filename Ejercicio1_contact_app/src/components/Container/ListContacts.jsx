import React,{useState,useEffect} from 'react';
import {Contacto} from '../model/contacto.class'
import ContactComponent from '../pure/ContactComponent';
import ContactForm from '../pure/forms/formContact'

const ListContacts = () => {
    const defaultContact1 = new Contacto('Nombre Example','Apellidos Completos','example@correo.com',false);
    const defaultContact2 = new Contacto('Elida Patricia','Sanchez','elida@correo.com',true);
    const defaultContact3 = new Contacto('Nombre Example','Apellidos Completos','example@correo.com',false);
    const [contacts, setContacts]= useState([defaultContact1,defaultContact2,defaultContact3]);
     const [loading, setLoading]= useState(true);
    // const [coneccion,setConeccion]= useState(false);

    // const conect =()=>{
    //     setConeccion(true);
    // }
    // const desc =()=>{
    //     setConeccion(false);
    // }
    // Control ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has beeb modified');
        setLoading(false);
        return ()=> {
            console.log('Task Lisk component is going to unmount')
        }
    },[contacts])

    function coneccionContact(contacto) {
        console.log('Complete this Task:', contacto);
        const index = contacts.indexOf(contacto);
        const tempContacts = [...contacts];
        tempContacts[index].conectado = !tempContacts[index].conectado;
        // Actualizando el estado del componentes
        setContacts(tempContacts);
    }
    function deleteContact(contacto){
        console.log('Detele this Contact:', contacto);
        const index = contacts.indexOf(contacto);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);
    }

    function addContact(contacto){
        console.log('Add this Contact:', contacto);
        //const index = tasks.indexOf(task);
        const tempContacts = [...contacts];
        tempContacts.push(contacto);
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className="col-12">
                <div className="card">
                    <div className="card-header p-3">
                        <h5>Your Contacts</h5>
                    </div>
                    {/* Card body (content) */}
                    <div className="card-body" data-mdb-perfect-scrollbar='true' style={{position: 'relative',height:'400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Apellido</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact,index)=>{
                                    return (
                                        <ContactComponent 
                                            key={index} 
                                            contact={contact}
                                            coneccion={coneccionContact}
                                            remove = {deleteContact}>
                                        </ContactComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
    // return (
    //     <div>
    //         <h1>Contacts</h1>
    //         <ContactComponent contacto={defaultContact} coneccion={coneccion}></ContactComponent>
    //         <button onClick={coneccion?desc:conect}>Coneccion</button>
    //     </div>
    // );
};

export default ListContacts;
