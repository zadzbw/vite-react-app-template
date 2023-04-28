import { useCallback, useState } from 'react'

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue)
  const toggleValue = useCallback(() => setValue((v) => !v), [])
  return [value, toggleValue]
}
