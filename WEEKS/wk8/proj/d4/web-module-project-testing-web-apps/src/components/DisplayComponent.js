import React from 'react';

const DisplayComponent = (props) => {
    const { firstName, lastName, email, message } = props.form;

    return(<div id="displayContainer">
        <h1>You Submitted:</h1>
        
        { firstName && <p data-testid="firstnameDisplay"><strong>First Name: </strong>{firstName}</p> }
        { lastName && <p data-testid="lastnameDisplay"> <strong>Last Name: </strong>{lastName}</p> }
        { email && <p data-testid="emailDisplay"><strong>Email: </strong>{email}</p> }
        { message && <p data-testid="messageDisplay"><strong>Message: </strong>{message}</p> }
    </div>);
}

export default DisplayComponent;