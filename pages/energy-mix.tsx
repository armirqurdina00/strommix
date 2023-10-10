import React, { useState, useRef } from 'react'
import Page from '@/components/page'
import { useRouter } from 'next/router'
import Chart from '@/components/chart';

const EnergyMix = () => {
	const router = useRouter()
	const [isSwiped, setIsSwiped] = useState(false)

	const touchStartRef = useRef(null)
	const touchEndRef = useRef(null)

	const minSwipeDistance = 100

	const onTouchStart = (e) => {
		touchEndRef.current = null
		touchStartRef.current = e.targetTouches[0].clientX
	}

	const onTouchMove = (e) => (touchEndRef.current = e.targetTouches[0].clientX)

	const onTouchEnd = () => {
		if (!touchStartRef.current || !touchEndRef.current) return

		const distance = touchStartRef.current - touchEndRef.current
		const isRightSwipe = distance < -minSwipeDistance
		const isLeftSwipe = distance > minSwipeDistance

		if (isLeftSwipe) {
			setIsSwiped(!isSwiped)
			router.push('/map')
		}

		touchStartRef.current = null
		touchEndRef.current = null
	}

	return (
		<div
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
			onTouchEnd={onTouchEnd}
		>
			<Page>
				<div className='flex justify-center'>
					<div
						className={`flex max-w-sm flex-col bg-blue-800 ${isSwiped && 'slideOutToLeftAnimation'
							}`}
					>

						<h1 className='my-5 font-bold text-2xl text-center text-white'>Strommix</h1>
						<div className='flex items-center overflow-scroll'>
							<div className='text-sm text-white m-5 leading'>
								<div className='flex items-center w-max leading-1'>
									<i className="fa-solid fa-thumbs-up text-2xl" style={{ color: '#11ff00' }}></i>
									<p className='mx-5'>Wir konnten Ihren</p>
								</div>
								<div className='flex w-max'>
									<i className="fa-solid fa-thumbs-down text-2xl" style={{ color: 'red' }}></i>
									<p className='mx-5'>Energiewunsch erfüllen</p>
								</div>
							</div>
							<div className='flex items-center mx-2'>
								<i className="fa-solid fa-wind text-[lightblue] text-2xl"></i>
								<p className='mx-2 text-white'>Windkraft</p>
							</div>
							<div className='flex items-center mx-2'>
								<i className="fa-solid fa-sun text-[yellow] text-2xl"></i>
								<p className='mx-2 text-white'>Photovoltaic</p>
							</div>
							<div className='flex items-center mx-2'>
								<i className="fa-solid fa-bolt-lightning text-[lightgray] text-2xl"></i>
								<p className='mx-2 text-white leading-5'>Unerwünschter Graustrom</p>
							</div>
						</div>
						<Chart />
						<div className='overflow-scroll whitespace-nowrap'>
							<Chart />
							<Chart />
							<Chart />
						</div>
					</div>
				</div>
			</Page>
		</div>
	)
}

export default EnergyMix
