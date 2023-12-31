interface Props {
  children: React.ReactNode
}

export default function Section({children}: Props) {
  return <section className='mt-4'>{children}</section>;
}
