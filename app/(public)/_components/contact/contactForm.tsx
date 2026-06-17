'use client';

import { PrimaryButton } from "@/app/components/button/primaryButton";
import CheckboxRecaptchaForm from "@/app/components/inputs/checkboxRecaptchaForm";
import { InputForm } from "@/app/components/inputs/inputForm";
import { SelectForm } from "@/app/components/inputs/selectForm";
import { TextaeraForm } from "@/app/components/inputs/textareaForm";

import { useState, useCallback } from "react";
import { useReCaptcha } from "next-recaptcha-v3";
import { SuccessAlert } from "@/app/components/alert/successAlert";
import { FailedAlert } from "@/app/components/alert/failedAlert";
import { useSearchParams } from "next/navigation";

export function ContactForm () {
  const [isRgpdChecked, setIsRgpdChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const { executeRecaptcha } = useReCaptcha();

  const searchParams = useSearchParams();
  const [type, setType] = useState(searchParams.get("offer") ?? "");
  
   const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!executeRecaptcha) return;

    const form = e.currentTarget;

    setIsSubmitting(true);

    try {
      const token = await executeRecaptcha("form_submit");

      const formData = new FormData(form);
      formData.append("recaptchaToken", token);

      const result = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (result.ok) {
        await SuccessAlert();
        setFormKey(prev => prev + 1);     
      } else {
        await FailedAlert();
      }
    } catch (error) {
      console.error(error);
       await FailedAlert();
    } finally {
      setIsSubmitting(false);
    }
  }, [executeRecaptcha]); 

  return (
      <>
        <div className="lg:flex-1">
            <form key={formKey} onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <InputForm name="name" type="text" placeholder="Votre nom*"/>
                <InputForm name="email" type="email" placeholder="Votre adresse email*"/>
                <SelectForm type={type}/>
                <TextaeraForm name="message" placeholder="Votre message ...*"/>
                <CheckboxRecaptchaForm onChange={setIsRgpdChecked}/>
                <PrimaryButton label="Envoyer ma demande" disabled={isSubmitting || !isRgpdChecked}/>
              </div>
            </form>
        </div>
      </>
  )
}