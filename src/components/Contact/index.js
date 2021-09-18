import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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
        ContactTextArea,
        ContactMessageSuccess
    
    } from './ContactElements';

    const Result =() =>{
        return(
            <p>Your Message Has been successfully sent. I will contact you soon.</p>
        );
    };

function Contact(props) {
    const [result,showResult] = useState(false);
    const sendEmail =(e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tdmzndj', 'template_ee563yo', e.target, 'user_0jebchz3s8ncQm5vUuqVg')
          .then((result) => {
           console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          showResult(true);
    };

    //hide result
    setTimeout(() => {
        showResult(false);
    }, 5000);

    return (
        <>
          <ContactContainer id="contact" className="contactSection">
              <ContactFormWrap className="formWrap">
                <ContactIcon to="/"></ContactIcon>
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
                        <ContactFormInput type='email' required placeholder="Your email address" name="user_email" />
                      
                        <ContactFormLabel htmlFor='for'>
                            Your message *
                            </ContactFormLabel>
                        <ContactTextArea type='textarea' rows='10' required placeholder="Enter your message" name="message"></ContactTextArea>

                        <ContactFormButton type='submit' value="send">
                            Send Message
                            </ContactFormButton>

                        <ContactMessageSuccess className="result">{result ? <Result/> : null}</ContactMessageSuccess>
                    </ContactForm>
                </ContactFormContent>
              </ContactFormWrap>
            </ContactContainer>  
        </>
    );
};


export default Contact
