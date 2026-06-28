'use client';

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

export default function MicrosoftClarity() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID

  useEffect(() => {
    if (!clarityId || process.env.NODE_ENV !== 'production') return
    Clarity.init(clarityId)
  }, [clarityId])

  return null
}