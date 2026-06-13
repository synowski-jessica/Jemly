'use client'

import { useEffect } from 'react'

export default function RegisterSW() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => console.log('SW enregistré :', reg.scope))
        .catch((err) => console.error('SW échec :', err))
    }
  }, [])

  return null
}