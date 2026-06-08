export default function CheckboxRecaptchaForm ({onChange}:{onChange:(checked:boolean)=>void}) {
    return (
        <>
            <div className="text-note flex items-start gap-2">
                <input type="checkbox" id="recaptcha" name="recaptcha" value="recaptcha" onChange={(e) => onChange(e.target.checked)} className="mt-1 accent-text-secondary"/>
                <label htmlFor="recaptcha" className="italic"> 
                    {`Ce site est protégé par reCAPTCHA v3 (Google). En soumettant ce formulaire, vous acceptez la `}
                    <a href="/politique-de-confidentialite" target="_blank" rel="noopener noreferrer" className="underline">
                        {`Politique de confidentialité de Jemly Studio`}
                    </a>
                    {` ainsi que la `}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                        {`Politique de confidentialité`}
                    </a>
                    {` et les `}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
                        {`Conditions d'utilisation`}
                    </a>
                    {` de Google.`}
                </label>
            </div>
        
        </>
    )
}