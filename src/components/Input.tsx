import { ChangeEvent } from 'react'

type Props = {
  value?: string
  placeholder: string
  name: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  isRequired?: boolean
}

export const Input = ({
  value,
  onChange,
  name,
  placeholder,
  isRequired = false
}: Props) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      name={name}
      className='px-3 py-2 border border-gray-200 rounded-lg outline-0 w-full text-sm'
      value={value}
      onChange={onChange}
      required={isRequired}
    />
  )
}
