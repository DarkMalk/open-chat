type Props = {
  className?: string
}

export const Point = ({ className }: Props) => (
  <svg
    width='24'
    height='24'
    fill='currentColor'
    className={className}
  >
    <path
      d='M0 0h24v24H0z'
      fill='none'
    />
    <path d='M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7z' />
  </svg>
)
