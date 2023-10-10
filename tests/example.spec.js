// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST = 'http://localhost:5173/'
const catImgPrefix = 'https://cataas.com'

test('Test prueba Tecnica', async ({ page }) => {
  await page.goto(LOCALHOST)

  const text = await page.getByRole('paragraph')
  const img = await page.getByRole('img')

  const textContent = await text.textContent()
  const imgSrc = await img.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc?.startsWith(catImgPrefix)).toBeTruthy()
})
