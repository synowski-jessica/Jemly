"use client";

import { useState } from 'react';

export function InputForm ({name, type, placeholder, required=true} : {name:string, type:string, placeholder:string, required?:boolean}) {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');

    const isFloating = focused || value.length > 0;
    
    return (
        <div className="flex flex-col gap-2">
            <div className='relative'>
                <input 
                    id={name} 
                    name={name}
                    type={type} 
                    required = {required}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="border border-text-secondary rounded-full px-4 py-2 w-full  outline-none transition-all"/>

                <label htmlFor={name} className={`absolute left-4 transition-all duration-200 pointer-events-none text-gray-400 focus:border-text-secondary ${
                    isFloating
                    ? '-top-2.5 text-xs bg-white px-1'
                    : 'top-2.5 text-sm'
                }`}>
                    {placeholder}
                </label>
            </div>
        </div>
    )
}