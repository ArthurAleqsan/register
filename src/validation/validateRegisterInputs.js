import validator from 'validator';

const validateRegisterInputs = props => {
    const {name, email, password, rePassword, date, selectbox, checked } = props;
    const errors = {};
    
    if(validator.isEmpty(name)) {
        errors.name = 'Name field is required';
    }
    if(validator.isEmpty(email)) {
        errors.email = 'Email field is required';
    }
    if(!validator.isEmail(email)) {
        errors.email = 'Email is invalid';
    }
    if(validator.isEmpty(password)) {
        errors.password = 'Password field is required';
    }
    if (validator.isEmpty(rePassword)) {
        errors.rePassword = 'Confirm Password field is required';
      } 
    if (!validator.equals(password,rePassword)) {
        errors.rePassword = 'Passwords must match';
    }
    // checking if name consist of only in letters
    if(!validator.isAlpha(name)){
        errors.name = 'Name field must be from letters';
    }
        
    if(validator.isEmpty(date)) {
        errors.date = 'Date field is required';
    }
    // if(!validator.isDate(date)) {
    //     errors.date = 'Date is invalid';
    // }
    if(validator.isEmpty(selectbox)) {
        errors.date = 'Selectbox field is required';
    }
    if(validator.isEmpty(checked)) {
        errors.checked = 'Checkbox field is required';
    }
    return errors;
}
export default validateRegisterInputs; 
