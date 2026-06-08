'use client';

import { PrimaryButton } from "@/app/components/button/primaryButton";
import CheckboxRecaptchaForm from "@/app/components/inputs/checkboxRecaptchaForm";
import { InputForm } from "@/app/components/inputs/inputForm";
import { SelectForm } from "@/app/components/inputs/selectForm";
import { TextaeraForm } from "@/app/components/inputs/textareaForm";

import { useState, useCallback } from "react";
import { useReCaptcha } from "next-recaptcha-v3";

export function ContactForm () {
  const [isRgpdChecked, setIsRgpdChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha } = useReCaptcha();

  
   const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!executeRecaptcha) return;

    const form = e.currentTarget;
    console.log(form);

    setIsSubmitting(true);

    try {
      const token = await executeRecaptcha("form_submit");

      console.log(token);
      const formData = new FormData(form);
      formData.append("recaptchaToken", token);

      const result = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (result.ok) {
        alert("Votre demande de contact a bien été envoyée");
      } else {
        alert("Oups.. Une erreur est survenue");
      }
    } catch (error) {
      console.error(error);
      alert("Oups.. Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  }, [executeRecaptcha]); 

  return (
      <>
        <div className="lg:flex-1">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <InputForm name="name" type="text" placeholder="Votre nom*"/>
                <InputForm name="email" type="email" placeholder="Votre adresse email*"/>
                <SelectForm/>
                <TextaeraForm name="message" placeholder="Votre message ...*"/>
                <CheckboxRecaptchaForm onChange={setIsRgpdChecked}/>
                <PrimaryButton label="Envoyer ma demande" disabled={isSubmitting || !isRgpdChecked}/>
              </div>
            </form>
        </div>
      </>
  )
}