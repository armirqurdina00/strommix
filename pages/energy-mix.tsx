import React, { useState, useRef } from 'react'
import Page from '@/components/page'
import { useRouter } from 'next/router'

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
				<div className='mt-5 flex justify-center'>
					<div
						className={`flex max-w-sm flex-col ${
							isSwiped && 'slideOutToLeftAnimation'
						}`}
					>

						<p className='mb-5 font-bold'>User Story 1:</p>

						<p>
							"Als Otto-Normal- und Poweruser-Stromkonsument
							möchte ich wissen, durch welche Methode mein Strom erzeugt wurde,
							um besser über dessen Nachhaltigkeit informiert zu sein."​
						</p>
					</div>
				</div>
			</Page>
		</div>
	)
}

export default EnergyMix
