import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
//import MailchimpSubscribe from "react-mailchimp-subscribe";
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton
} from './SigninElements';

/* const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(''); */


const SignIn = () => {
    return (
        <>
          <Container>
              <FormWrap>
                <Icon to="/"><AiOutlineClose /></Icon>
                <FormContent>
                <Form action="#" className="mc__form">
                        <FormH1  className="mc__title">
                            Get News and Updates
                        </FormH1>
                        <FormLabel htmlFor='for'>
                            First Name
                            </FormLabel>
                        <FormInput 
                            /*  label="First Name"
                           onChangeHandler={setFirstName}
                            type="text"
                            value={firstName}
                            placeholder="Jane" */
                            isRequired
                        />

                        <FormLabel htmlFor='for'>
                            Last Name
                            </FormLabel>
                        <FormInput 
                           /*  label="Last Name"
                             onChangeHandler={setLastName}
                             type="text"
                             value={lastName}
                             placeholder="Doe"
                             isRequired */
                        />
                        
                        <FormLabel htmlFor='for'>
                            Email
                        </FormLabel>
                        <FormInput 
                           /*  label="Email"
                            onChangeHandler={setEmail}
                            type="email"
                            value={email}
                            placeholder="your@email.com"
                            isRequired */
                        />
                       
                        <FormButton 
                            // label="subscribe"
                             type="submit"
                            // formValues={[email, firstName, lastName]}
                        >
                            Continue
                            </FormButton>
                       
                    </Form>
                </FormContent>
              </FormWrap>
            </Container>  
        </>
    );
};

export default SignIn;
