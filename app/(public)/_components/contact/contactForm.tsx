'use client';

import { PrimaryButton } from "@/app/components/button/primaryButton";
import { InputForm } from "@/app/components/inputs/inputForm";
import { SelectForm } from "@/app/components/inputs/selectForm";
import { TextaeraForm } from "@/app/components/inputs/textareaForm";

export function ContactForm () {
  const handleSubmit = async (formData: FormData) => {
    const result = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    if (result.ok) {
      alert("Votre demande de contact a bien été envoyée");
    } else {
      alert("Oups.. Une erreur est survenue");
      return;
    }
  };

  return (
      <>
        <div className="lg:flex-1">
            <form action={handleSubmit}>
              <div className="flex flex-col gap-6">
                <InputForm name="name" label="Nom*" type="text" placeholder="Votre nom"/>
                <InputForm name="email" label="Email*" type="email" placeholder="Votre adresse email"/>
                <SelectForm/>
                <TextaeraForm name="message" label="Message" placeholder="Votre message ..."/>
                <PrimaryButton label="Envoyer ma demande" disabled={false}/>
              </div>
            </form>
        </div>
      </>
  )
}