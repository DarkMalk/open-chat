export const getIdPathname = ({ pathname }: { pathname: string }) => {
  const array = pathname.split('/').filter(item => Boolean(item))

  return array[array.length - 1]
}
