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
