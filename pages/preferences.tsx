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
		const isRightSwipe = distance < -minSwipeDistance

		if (isRightSwipe) {
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
				<div className='flex justify-center mt-5'>
					<div
						className={`flex max-w-sm flex-col ${
							isSwiped && 'slideOutToLeftAnimation'
						}`}
					>

						<p className='mb-5 font-bold'>User Story 3:</p>

						<p className='mb-2'>
						"Als Otto-Normal- und Poweruser-Stromkonsument möchte ich auswählen können, woher mein Strom kommt oder auf welche Weise er erzeugt wird, um eine bewusste und nachhaltige Entscheidung für meine Energiequelle treffen zu können."
						</p>
					</div>
				</div>
			</Page>
		</div>
	)
}

export default Map
