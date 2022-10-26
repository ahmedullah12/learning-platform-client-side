import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Here is our terms and conditions. You should read this carefully.</h2>
            <p>Go back to <Link to='/register'>Register Page</Link></p>

        </div>
    );
};

export default TermsAndConditions;