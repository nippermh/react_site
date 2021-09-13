import emailjs from 'emailjs-com';
import React from 'react';
//npm install emailjs-com --save
import { ContactContainer, 
        ContactFormH1, 
        ContactFormWrap, 
        ContactIcon,
        ContactFormContent,
        ContactForm,
        ContactFormLabel,
        ContactFormInput,
        ContactFormButton,
        ContactText,
        ContactTextArea
    
    } from './ContactElements';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_ee563yo', e.target, 'user_0jebchz3s8ncQm5vUuqVg')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <>
          <ContactContainer id="contact">
              <ContactFormWrap>
                <ContactIcon to="/">Sophie Hallam</ContactIcon>
                <ContactFormContent>
                <ContactForm onSubmit={sendEmail}>
                        <ContactFormH1 htmlFor='for'>
                            Contact Adrian
                        </ContactFormH1>

                        <ContactFormLabel htmlFor='For'>
                            Full Name *
                        </ContactFormLabel>
                        <ContactFormInput type='text' required placeholder="Your full name" name="name" />

                        <ContactFormLabel htmlFor='for'>
                            Your Email *
                        </ContactFormLabel>
                        <ContactFormInput type='email' required placeholder="Your email address" name="email" />
                        <ContactFormLabel htmlFor='For'>
                            Subject of Email *
                        </ContactFormLabel>
                        <ContactFormInput type='text' required placeholder="What your message is about" name="Subject" />
                        <ContactFormLabel htmlFor='for'>
                            Your message *
                            </ContactFormLabel>
                        <ContactTextArea type='textarea' cols='30' required placeholder="Enter your message" name="message"></ContactTextArea>

                        <ContactFormButton type='submit' value="send">
                            Send Message
                            </ContactFormButton>

                        <ContactText>Forgot password</ContactText>
                    </ContactForm>
                </ContactFormContent>
              </ContactFormWrap>
            </ContactContainer>  
        </>
    );
};


export default Contact
