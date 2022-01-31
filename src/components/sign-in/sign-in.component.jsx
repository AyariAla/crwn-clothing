import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';


class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:''
        };
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword( email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }
        
    };

    handleChange = event => {
        const { value, name } = event.target; //pull value and name from target with is gonna be the input input

        this.setState({ [name]: value }); //dynamically setting state
    };

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit} >
                <FormInput 
                name='email' 
                type='email' 
                label='Email'
                value={this.state.email}
                handleChange={this.handleChange}
                required 
                />
                <FormInput 
                name='password' 
                type='password' 
                label='Password'
                value={this.state.password}
                handleChange={this.handleChange} 
                required 
                />
                <div className='buttons'>
                <CustomButton type='submit'> Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google</CustomButton>
                </div>
            </form>
            </div>
        );
    } 
}
export default SignIn;