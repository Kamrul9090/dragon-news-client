import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoader } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';

    useTitle('login')

    const handleLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                } else {
                    toast('Your Email is not verified');
                }
            })
            .catch(e => {
                console.error(e)
                setError(e.code)
            })
            .finally(() => {
                setLoader(false)
            })
    }
    return (
        <Form onSubmit={handleLoginForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Text className="text-danger me-2">
                {error.slice(5, error.length)}
            </Form.Text>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;