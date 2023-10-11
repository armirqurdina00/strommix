import React, { useState, useRef } from 'react'
import Page from '@/components/page'
import { useRouter } from 'next/router'
import Chart from '@/components/chart';
import PieChartSelect from '@/components/PieChartSelect';
import FrequencySelect from '@/components/FrequencySelect';
import FreqBarChart from '@/components/FreqBarChart';

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
						className={`flex max-w-sm flex-col bg-[#00149A] w-full ${isSwiped && 'slideOutToLeftAnimation'
							}`}
					>

						<h1 className='my-5 font-bold text-3xl text-center text-white'>Strommix</h1>
						<div className='flex items-center text-[12px] w-full justify-center'>
							<div className='flex items-center mx-1'>
								<i className="fa-solid fa-wind text-[lightblue] text-lg"></i>
								<p className='mx-1 text-white'>Windkraft</p>
							</div>
							<div className='flex items-center mx-1'>
								<i className="fa-solid fa-sun text-[yellow] text-lg"></i>
								<p className='mx-1 text-white'>Photovoltaik</p>
							</div>
							<div className='flex items-center mx-1'>
								<i className="fa-solid fa-water text-blue-600 text-lg"></i>
								<p className='mx-1 text-white'>Wasserkraft</p>
							</div>
							<div className='flex items-center mx-1'>
								<i className="fa-solid fa-bolt-lightning text-[#BBBBBB] text-lg"></i>
								<p className='mx-1 text-white leading-5'>Andere</p>
							</div>
						</div>
						<div className='flex justify-end mt-5'>
							<PieChartSelect />
						</div>
						<Chart />
						<div className='w-[80%] mx-auto'>
							<div className='flex items-center text-white'>
								<i className="fa-solid fa-thumbs-up text-[#00ff59] text-3xl mx-3"></i>
								<p className='leading-5'>Wir konnten Ihren Energieswunsch erfüllen!</p>
							</div>
						</div>
						<div className='flex justify-end my-5'>
							<FrequencySelect />
						</div>
						<div className='pb-20'>
							<FreqBarChart />
						</div>
					</div>
				</div>
			</Page>
		</div>
	)
}

export default EnergyMix
