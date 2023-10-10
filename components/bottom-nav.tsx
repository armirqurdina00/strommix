import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import TuneIcon from '@mui/icons-material/Tune';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import MapIcon from '@mui/icons-material/Map';

const BottomNav = () => {
	const router = useRouter()

	function handle(href) {
		router.push(href)
	}

	return (
		<div className=''>
			<nav className='fixed bottom-0 z-30 w-full border-t bg-zinc-100 pb-safe'>
				<div className='mx-auto flex h-14 max-w-md items-center justify-between px-6'>
					<Button
						className='flex h-full w-[40%] flex-col items-center justify-center'
						key='energy-mix'
						onClick={() => handle('/energy-mix')}
					>
						<ElectricBoltIcon
							className={`text-4xl ${
								router.pathname == '/energy-mix'
									? 'text-blue-600'
									: 'text-zinc-600'
							}`}
						/>
						<span
							className={`mt text-xs ${
								router.pathname == '/energy-mix'
									? 'text-blue-600'
									: 'text-zinc-600'
							}`}
						>
							{'Energiemix'}
						</span>
					</Button>
					<Button
						className='flex h-full w-[40%] flex-col items-center justify-center'
						key='map'
						onClick={() => handle('/map')}
					>
						<MapIcon
							className={`text-4xl ${
								router.pathname == '/map' ? 'text-blue-600' : 'text-zinc-600'
							}`}
						/>
						<span
							className={`mt text-xs ${
								router.pathname == '/map' ? 'text-blue-600' : 'text-zinc-600'
							}`}
						>
							{'Karte'}
						</span>
					</Button>
					<Button
						className='flex h-full w-[40%] flex-col items-center justify-center'
						key='energy-mix-configuration'
						onClick={() => handle('/preferences')}
					>
						<TuneIcon
							className={`text-4xl ${
								router.pathname == '/preferences'
									? 'text-blue-600'
									: 'text-zinc-600'
							}`}
						/>
						<span
							className={`mt text-xs ${
								router.pathname == '/preferences'
									? 'text-blue-600'
									: 'text-zinc-600'
							}`}
						>
							{'Präferenzen'}
						</span>
					</Button>
				</div>
			</nav>
		</div>
	)
}

export default BottomNav
