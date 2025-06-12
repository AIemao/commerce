import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    await page.getByRole('button', { name: 'ecommerce' }).click()
    await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

    await page.getByLabel('Nome').fill('TesteOK')
    await page.getByLabel('Descrição').fill('Outra descrição da loja')

    await page.getByRole('button', { name: 'Salvar' }).click()

    await page.waitForLoadState('networkidle')

    const toast = page.getByText('Perfil atualizado com sucesso!')

    await expect(toast).toBeVisible()

    await page.getByRole('button', { name: 'Close' }).click()

    await page.waitForTimeout(250)

    await expect(page.getByRole('button', { name: 'TesteOK' })).toBeVisible()
    // await page.waitForTimeout(2000) // Wait for the toast to appear
})
