import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authAction';
import validateRegisterInputs  from '../validation/validateRegisterInputs';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name : '',
            email :'',
            password :'',
            rePassword :'',
            date : '',
            selectbox : '',
            checked : ''
        }
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        store.subscribe(() => {
            const selectedCategory = store.getState().selectCategory.selectedCategory;
            this.setState({
                selectbox : selectedCategory
            });
        });
    }
    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value,
        });
        if(e.target.type === 'radio') {
            this.setState({
                checked : e.target.value
            })
        }
    }
    onSubmit(e) {
        e.preventDefault();
        const { name, email, password, rePassword, date, selectbox } = this.state;
        const errors = validateRegisterInputs(this.state);

        if(errors) {
            console.log(errors)
        } else {
    
            const newUser = {
                name,  
                email, 
                password,
                rePassword ,
                date ,
                selectbox
            }
    
            this.props.registerUser(newUser);
        }

    }

    render() {
        return (
            <form className = 'authorization-form' onSubmit = {this.onSubmit} >
                <input 
                    onChange = {this.onChange} 
                    className = 'form-inputs' 
                    type='text'
                    name = 'name' 
                    value = {this.state.name} 
                    placeholder = 'name' />
                <input 
                    onChange = {this.onChange} 
                    className = 'form-inputs' 
                    type='email' 
                    name = 'email' 
                    value = {this.state.email} 
                    placeholder = 'email' />
                <input 
                onChange = {this.onChange} 
                    className = 'form-inputs' 
                    type='password' 
                    name = 'password' 
                    value = {this.state.password} 
                    placeholder = 'password' />
                <input 
                    onChange = {this.onChange} 
                    className = 'form-inputs' 
                    type='password' 
                    name = 'rePassword' 
                    value = {this.state.rePassword} 
                    placeholder = 'Repassword' />
                <input 
                    onChange = {this.onChange} 
                    className = 'form-inputs' 
                    type='date' 
                    name = 'date' 
                    value = {this.state.date} 
                    placeholder = 'age' />
                <div className = 'form-inputs'>
                    <label>male</label>
                    <input onChange = {this.onChange} checked ={this.state.checked === 'male'} type="radio" name="male" value="male" />

                    <label>female</label>
                    <input onChange = {this.onChange} checked ={this.state.checked === 'female'} type="radio" name="female" value="female" />

                    <label>costum</label>
                    <input onChange = {this.onChange} checked ={this.state.checked === 'costum'} type="radio" name="costum" value="costum" />
                </div>
                <input 
                    onChange = {this.onChange} 
                    className = 'form-inputs' 
                    type='selectbox' 
                    value = {this.state.selectbox} />
                <input className = 'form-inputs' type='submit' value='submit' />
            </form>
        );
    }
}

export default connect(null,{ registerUser })(SignUp);