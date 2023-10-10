import React, { useState, useRef } from 'react'
import Page from '@/components/page'
import { useRouter } from 'next/router'

const Map = () => {
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
		const isLeftSwipe = distance > minSwipeDistance
		const isRightSwipe = distance < -minSwipeDistance

		if (isLeftSwipe) {
			setIsSwiped(!isSwiped)
			router.push('/preferences')
		}
		if (isRightSwipe) {
			setIsSwiped(!isSwiped)
			router.push('/energy-mix')
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

						<p className='mb-5 font-bold'>User Story 2:</p>

						<p className='mb-2'>
							"Als Otto-Normal- und Poweruser-Stromkonsument möchte ich Details
							darüber erhalten, wann an welchem Ort und in welchem Umfang mein
							Strom erzeugt wurde, um ein klares Verständnis über seine
							regionale Verteilung und Herkunft zu haben."​
						</p>
					</div>
				</div>
			</Page>
		</div>
	)
}

export default Map
