'use client'

import { type RefObject, useEffect } from 'react'

/**
 * Scrolls the first invalid control into view when native HTML5 validation runs.
 * Prevents the validation tooltip from appearing “detached” (e.g. near Submit/Cancel)
 * when the invalid field is above the viewport in a long page or scrollable modal.
 *
 * @param attachWhen For modals, pass `open` so listeners attach when the form enters the DOM.
 */
export function useScrollInvalidFieldIntoView(
  formRef: RefObject<HTMLFormElement | null>,
  attachWhen = true
) {
  useEffect(() => {
    if (!attachWhen) return
    const form = formRef.current
    if (!form) return

    const onInvalid = (e: Event) => {
      const t = e.target
      if (!(t instanceof HTMLElement)) return
      t.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
    }

    form.addEventListener('invalid', onInvalid, true)
    return () => form.removeEventListener('invalid', onInvalid, true)
  }, [attachWhen, formRef])
}
