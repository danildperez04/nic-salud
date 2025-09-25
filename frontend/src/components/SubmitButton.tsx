interface Props {
  value?: string;
}

export function SubmitButton({ value = 'Submit' }: Props) {
  return (
    <input
      type="submit"
      className='bg-(--oxford-blue) cursor-pointer text-white px-4 py-2 rounded-md hover:bg-(--blue) transition-colors duration-300'
      value={value}
    />
  )
}
