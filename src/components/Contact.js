import React, { useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import ErrorMessage from "./ErrorMessage.js";

const schema = yup.object().shape({
	name: yup.string().min(2,"Navn må være minst 2 karakterer").required("Navn er obligatorisk"),
    email: yup.string().email("E-post må være gyldig").required("E-post er obligatorisk"),
	message: yup.string().min(10,"Melding må være minst 10 karakterer").required("Melding er obligatorisk")
});

export default function Contact() {
    const [state, setState] = useState({
        formData: []
    });
    
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        setState({formData: data});
    }

    let formHTML;
    if (state.formData == "") {
        formHTML = (
        <>
        <h2><span className="span__wrap"><span className="span__wrap__text">Kontakt meg!</span></span></h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label><p>Navn</p></label>
            <input 
                type="text" 
                placeholder="Ole Nordmann" 
                name="name" 
                ref={register({required:true})}/>
            {errors.name && <ErrorMessage content={errors.name.message}/>}
            <label><p>E-post</p></label>
            <input 
                type="text" 
                placeholder="ole.nordmann@gmail.com" 
                name="email" 
                ref={register({required:true})}/>
            {errors.email && <ErrorMessage content={errors.email.message}/>}
            <label><p>Melding</p></label>
            <textarea 
                placeholder="Din melding her" 
                name="message" 
                ref={register({required:true})}/>
            {errors.message && <ErrorMessage content={errors.message.message}/>}
            <button className="btn" type="submit"><p>Send melding</p></button>
        </form>
        </>
    );
    } else {
        formHTML = 
        <div className="contact__response">
            <h2><span className="span__wrap"><span className="span__wrap__text">Takk for din melding!</span></span></h2>
            <p>Videre kontakt vil skje via e-post</p>
        </div>
    }

    return (
        <div className="col-12 mainelement contact">
            {formHTML}
        </div>
    )
}