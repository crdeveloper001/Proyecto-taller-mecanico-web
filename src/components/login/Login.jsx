import React, { useState } from 'react'
import { Card, Container, Form, Button } from 'react-bootstrap';
import { Authorization } from '../../Hooks/Authentication';
import { GetAllClients } from '../../Hooks/Clients';
import "./Login.css";

export const Login = () => {
    const [payload, setPayload] = useState({
        email: "",
        pass: ""
    });
    const [clients, setClients] = useState({})
    const sendAuthorization = async () => {

        let userInfo = {
            email: document.getElementById("InputEmail").value,
            pass: document.getElementById("InputPassword").value
        }
        const mock = {
            User_Email: "jefry@gmail.com",
            User_Password: "admin123."
        }
       
        console.log( Authorization(mock));
    }


    return (

        <Container className='LoginContainer'>
            <h1 className='text-white mb-4'>TALLER MECANICO APP</h1>
            <Card className='d-flex mx-auto'>

                <Card.Body className='mx-auto'>

                    <form>
                        <Form.Label>CORREO ELECTRONICO</Form.Label>
                        <Form.Control type="email" placeholder="username@domain.com" required id='InputEmail' />
                        <br />
                        <Form.Label> CONTRASEÑA</Form.Label>
                        <Form.Control type="password" required id='InputPassword' />
                        <hr />

                        <Button variant="dark" type='button' onClick={() => {
                            sendAuthorization()
                        }}>
                            INICIAR SESION
                        </Button>


                    </form>

                </Card.Body>
            </Card>
        </Container>




    )
}
