import { test } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({ path: './.env.local' })

test('test navigation', async ({ page }) => {
	await page.goto(process.env.TEST_URL)

	await page.getByRole('button', { name: 'Energiemix' }).click();
	await page.waitForURL(/.*\/energy-mix$/)

	await page.getByRole('button', { name: 'Karte' }).click();
	await page.waitForURL(/.*\/map$/)

	await page.getByRole('button', { name: 'Präferenzen' }).click();
	await page.waitForURL(/.*\/preferences$/)
})

