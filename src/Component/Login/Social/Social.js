import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png'
import Loading from '../Loading/Loading';
import github from '../../../images/social/github.png'
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    if (user || user1) {
        navigate('/')
        console.log(user)
    }
    if (loading || loading1) {
        return (<Loading></Loading>)
    }
    let errorText;
    if (error || error1) {
        errorText = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    return (
        <div>
            <div className=' d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px' }} className="w-100 bg-primary"></div>
                <div className='mx-2'>or</div>
                <div style={{ height: '1px' }} className="w-100 bg-primary"></div>
            </div>
            <div className='mt-3'>

                <p>{errorText}</p>
                <button onClick={() => signInWithGoogle()} className='border-0 w-50 p-2 d-block mx-auto'> <img style={{ height: '30px' }} src={google} alt="" /> Google Sign In</button>
                <button onClick={() => signInWithGithub()} className='border-0 w-50 p-2 d-block mt-3 mx-auto'> <img style={{ height: '30px' }} src={github} alt="" /> Github Sign In</button>


            </div>
        </div>
    );
};

export default Social;