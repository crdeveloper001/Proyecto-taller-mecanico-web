import React, { useState } from 'react'
import { Card, Container, Form, Button } from 'react-bootstrap';
import { Authorization } from '../../Services/AuthenticationService';
import { GetAllClients } from '../../Services/ClientsService';
import useLoginAuth from '../../Hooks/useLoginAuth';
import "./Login.css";

export const Login = () => {
    const { currentCredentials, saveEmailInfo, savePasswordInfo, AuthorizationFlow } = useLoginAuth();

    return (
        <Container className='LoginContainer'>
            <h1 className='text-white mb-4'>TALLER MECANICO APP</h1>
            <Card className='d-flex mx-auto'>
                <Card.Body className='mx-auto'>
                    <form >
                        <Form.Group controlId="InputUsername">
                            <Form.Label>CORREO ELECTRONICO</Form.Label>
                            <Form.Control type="email" placeholder="username@domain.com" onChange={(e) => {
                                saveEmailInfo(e);
                            }} />
                        </Form.Group>
                        <Form.Group controlId="InputPassword">
                            <Form.Label>CONTRASEÑA</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" onChange={(e) => {
                                savePasswordInfo(e)
                            }} />
                        </Form.Group>
                        <Button variant="success" size="sm" type='button' className='mt-3' onClick={() => { AuthorizationFlow() }}>
                            INICIAR SESION
                        </Button>
                    </form>
                </Card.Body>
            </Card>
        </Container>

    )
}
