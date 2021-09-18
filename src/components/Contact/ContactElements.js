import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactContainer = styled.div`
        padding-top: 3rem;
        padding-bottom: 3rem;
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;


    position: relative;
    z-index: 0;
`;

export const ContactFormWrap = styled.div`
        height: 100%;
        max-width: 1100px;
        min-width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (max-width: 400px) {
            height: 80%;
        }
`;
export const ContactIcon = styled(Link)`
        margin-left: 32px;
        margin-top: 32px;
        text-decoration: none;
        color: #fff;
        font-weight: 700;
        font-size: 32px;

        @media screen and (max-width: 480px) {
            margin-left: 16px;
            margin-top: 8px;
        }
        
`;

export const ContactFormContent = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (max-width: 480px) {
            padding: 18px;
        }
`;

export const ContactForm = styled.form`
        background: #A9A9A9; //grey
        max-width: 500px;
        height: auto;
        width: 100%;
        z-index: 1;
        display: grid;
        margin: 0 auto;
        padding: 80px 32px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

        @media screen and (max-width: 400px) {
            padding: 32px 32px;
        }
`;

export const ContactFormH1 = styled.h1`
        margin-bottom: 40px;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
`;

export const ContactFormLabel = styled.label`
        margin-bottom: 8px;
        font-size: 14px;
        color: #fff;
`;

export const ContactFormInput = styled.input`
        padding: 16px 16px;
        margin-bottom: 32px;
        border: none;
        border-radius: 4px;
`;

export const ContactFormButton = styled.button`
        background: #01bf71;
        padding: 16px 0;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
`;

export const ContactTextArea = styled.textarea`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const ContactText = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;

export const ContactMessageSuccess = styled.div`
        color: #00FF00;

`;
