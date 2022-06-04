import React, { useState, useEffect } from 'react';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

import Input from '../../Shared/FormElements/Input';
import Button from '../../Shared/FormElements/Button';
import Card from '../../Shared/UIElements/Card';
import ErrorModal from '../../Shared/UIElements/ErrorModal';
import LoadingSpinner from '../../Shared/UIElements/LoadingSpinner';



import { useForm } from '../../Shared/hooks/form-hooks';
import { authenticationService } from '../../services/authentication-service';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../Shared/Util/validators';
import { useHttpClient } from '../../Shared/hooks/http-hook';
import './SignIn.css';



const SignIn = () => {

    const [type, setType] = useState("Student");
    const [isSignInMode, setIsSignInMode] = useState(true);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [isStudent, setIsStudent] = useState(true);
    const [isPanel, setIsPanel] = useState(false);
    const [isSupervisor, setIsWorksopPresenter] = useState(false);

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        false
    );

    useEffect(() => {}, [isAuthenticating]);    

    const switchModeHandler = () => {
        if (!isSignInMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid);
        }
        else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false);
        }
        setIsSignInMode(prevMode => !prevMode);
    };

    const signInSubmitHandler = async event => {
        event.preventDefault();

        if (isSignInMode) {
            setIsAuthenticating(true);
            authenticationService.signin(formState.inputs.email.value, formState.inputs.password.value)
                .then(() => {
                    setIsAuthenticating(false);
                })
        } else {
            try {
                const responseData = await sendRequest(
                    'http://localhost:4000/api/v1/users/signup',
                    'POST',
                    JSON.stringify({
                        name: formState.inputs.name.value,
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value,
                        role: isStudent ? "Student" : (isPanel ? "Panel" : "Supervisor"),
                    }),
                    {
                        'Content-Type': 'application/json',
                    }
                );
                console.log(responseData);
                window.location.reload(true);
            } catch (err) { }
        }
    };

    const typeSelectHandler = (value) => {

        setType(value);
        if (value === "Student") {
            setIsStudent(true);
            setIsPanel(false);
            setIsWorksopPresenter(false);
        }
        else if (value === "Panel") {
            setIsStudent(false);
            setIsPanel(true);
            setIsWorksopPresenter(false);
        }
        else if (value === "Supervisor") {
            setIsStudent(false);
            setIsPanel(false);
            setIsWorksopPresenter(true);
        }
    };

    return (
        <React.Fragment>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous"></link>
            <ErrorModal error={error} onClear={clearError} />
            <Card className="authentication">
                {isLoading || isAuthenticating && <LoadingSpinner asOverlay />}
                <h2>Please Login</h2>
                <hr />
                <form onSubmit={signInSubmitHandler}>
                    {!isSignInMode && (
                        <Input
                            id="name"
                            element="input"
                            type="text"
                            lable="Full name"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter your name."
                            onInput={inputHandler}
                        />
                    )}
                    <Input
                        id="email"
                        element="input"
                        type="email"
                        lable="E-mail"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="Please enter a valid E-mail."
                        onInput={inputHandler}
                    />
                    <Input
                        id="password"
                        element="input"
                        type="password"
                        lable="Password"
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        errorText="Password should be at least 6 characters long."
                        onInput={inputHandler}
                    />
                    <hr />
                    {!isSignInMode && (<p style={{ fontWeight: "bold" }}>Type</p>)}
                    
                    {!isSignInMode && (
                        <DropdownButton
                            alignCenter
                            variant="secondary"
                            title={type}
                            id="dropdown-menu-align-right"
                            onSelect={typeSelectHandler}
                        >
                            <Dropdown.Item eventKey="Student">Student</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="Panel">Panel</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="Supervisor">Supervisor</Dropdown.Item>
                        </DropdownButton>
                    )}
                    
                    {!isSignInMode &&  (<br />)}
                    {(isPanel || isSupervisor) && !isSignInMode && formState.isValid && (<br />)}
                    <Button type="submit" disabled={!formState.isValid}>{isSignInMode ? 'Login' : 'Register'}</Button>
                </form>
                <Button inverse onClick={switchModeHandler}>{isSignInMode ? 'Register' : 'Login'}</Button>
            </Card>
        </React.Fragment>
    );
};


export default SignIn;