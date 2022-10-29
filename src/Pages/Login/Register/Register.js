import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false);
    const { createUser, UpdateUserProfile, EmailVerification } = useContext(AuthContext);

    const navigate = useNavigate()

    useTitle('Register')
    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset()
                handleUpdateUserProfile(name, photoURL)
                handleEmailVerification();
                toast.success('Please check your email')
                // navigate('/')
            })
            .catch(e => {
                console.error(e);
                setError(e.message)
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        UpdateUserProfile(profile)
            .then(() => { })
            .catch((e) => console.log(e))
    }

    const handleEmailVerification = () => {
        EmailVerification()
            .then(() => { })
    }

    return (
        <Form onSubmit={handleForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Text className="text-danger me-2">
                {error}
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handleAccepted}
                    type="checkbox"
                    label={<>Accept <Link to='/terms'>our terms and conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
        </Form>
    );
};

export default Register;