import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Social from '../Social/Social';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );

    const navigate = useNavigate('')
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleLogin = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)

    }
    const handleResetPassword = async () => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email);
        toast("sending email ")
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        return (<Loading></Loading>)
    }
    let errorText;
    if (error || error1) {
        errorText = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }


    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='mb-5'>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p>{errorText}</p>
                <Button variant="primary" type="submit">
                    login
                </Button>
            </Form>
            <p className='mt-3'>Forget your Password? <span className='text-primary' onClick={handleResetPassword}>reset password</span></p>
            <ToastContainer />
            <p className='mt-3'>New in Red-Onion ?? <Link className='text-decoration-none' to='/signup'>Plese Sign Up</Link></p>
            <Social></Social>
        </div>
    );
};

export default Login;