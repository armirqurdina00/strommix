import BottomNav from '@/components/bottom-nav'
import TopNav from '@/components/top-nav'

interface Props {
	title?: string
	children: React.ReactNode
}

const Page = ({ children }: Props) => (
	<>
		<TopNav />
		<main
			className='mx-auto h-screen max-w-screen-xl pb-28 px-safe'
			style={{ height: 'calc(100vh - 109px)' }}
		>
			{children}
		</main>
		<BottomNav />
	</>
)

export default Page
