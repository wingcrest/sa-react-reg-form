export default function validateForm(values) {
    
    let errors = {};

    // RegEx
    let text = /^(?:[A-Za-z ]+)$/gm;
    let email = /\S+@\S+\.\S+/;
    
    // Recurring Strings
    let fieldEmpty = " cannot be empty.";
    let selectEmpty = "Please select your ";

    // First Name
    if (!values.fname.trim()) {
        errors.fname = "First name" + fieldEmpty;
    }
    else if (!values.fname.match(text)) {
        errors.fname = "First name can only contain letters.";
    }

    // Last Name
    if (!values.lname.trim()) {
        errors.lname = "Last name" + fieldEmpty;
    }
    else if (!values.lname.match(text)) {
        errors.lname = "Last name can only contain letters.";
    }

    // Username
    if (!values.username.trim()) {
        errors.username = "Username" + fieldEmpty;
    }

    // Phone Number
    if (!values.phone.trim()) {
        errors.phone = "Phone number" + fieldEmpty;
    }
    else if (values.phone.includes("e")) {
        errors.phone = "Phone number can only contain numbers.";
    }

    // E-mail Address
    if (!values.email) {
        errors.email = "E-mail address" + fieldEmpty;
    }
    else if (!values.email.match(email)) {
        errors.email = "E-mail address contains invalid characters.";
    }

    // Gender
    if (!values.gender) {
        errors.gender = selectEmpty + "gender.";
    }

    // Date of Birth
    if (!values.birthdate) {
        errors.birthdate = "Date of birth" + fieldEmpty;
    }

    // Country
    if (!values.country) {
        errors.country = selectEmpty + "country.";
    }

    // Company Name
    if (!values.company.trim()) {
        errors.company = "Company name" + fieldEmpty;
    }

    // Home Address
    if (!values.homeAddress.trim()) {
        errors.homeAddress = "Home address" + fieldEmpty;
    }

    // Company Address
    if (!values.compAddress.trim()) {
        errors.compAddress = "Company address" + fieldEmpty;
    }

    // Password
    if (!values.password) {
        errors.password = "Password" + fieldEmpty;
    }
    else if (values.password.length < 6) {
        errors.password = "Passwords must be at least 6 characters.";
    }

    // Confirm Password
    if (!values.cPassword) {
        errors.cPassword = "Please repeat your password.";
    }
    else if (values.cPassword !== values.password) {
        errors.cPassword = "Passwords do not match.";
    }

    // Terms and Conditions
    if (!values.terms) {
        errors.terms = "You must agree to the terms and conditions before proceeding."
    }

    return errors;

}