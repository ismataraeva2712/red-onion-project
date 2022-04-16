import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import Social from '../Social/Social';

const Signup = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate = useNavigate('')

    if (user) {
        console.log(user)
    }
    let errorText;
    if (error || error1) {
        errorText = <p className='text-danger'>Error : {error?.message}</p>

    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    const handleSignup = async (event) => {
        event.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })

        navigate('/')
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='mb-5'>Sign Up</h2>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Agree to Red-Onion terms and condition?" />
                </Form.Group>
                <p>{errorText}</p>
                <Button disabled={!agree} variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
            <p className='mt-3'>Allready signup ?? <Link to='/login'>Login</Link></p>
            <Social></Social>
        </div>
    );
};

export default Signup;