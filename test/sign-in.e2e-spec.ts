import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('testemockOK@email.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Enviamos um link de acesso')

  await expect(toast).toBeVisible({ timeout: 10000 })
  // await page.waitForTimeout(2000) // Wait for the toast to appear
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Erro ao realizar login. Tente')

  await expect(toast).toBeVisible({ timeout: 10000 })
  await page.waitForTimeout(2000) // Wait for the toast to appear
})

test('navigate to new store page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')
})
