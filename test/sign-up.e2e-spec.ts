import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('ecommerce')
  await page.getByLabel('Seu nome').fill('Teste Mock')
  await page.getByLabel('Seu e-mail').fill('testemock@email.com')
  await page.getByLabel('Seu celular').fill('81237127123')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Loja cadastrado com')

  await expect(toast).toBeVisible()
  // await page.waitForTimeout(2000) // Wait for the toast to appear
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Invalid name')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('123812641264')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar loja.')

  await expect(toast).toBeVisible()
  // await page.waitForTimeout(2000) // Wait for the toast to appear
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
