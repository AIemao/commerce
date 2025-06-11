import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom'
import { OrderTableFilters } from './order-table-filters'

function LocationDisplay() {
  const location = useLocation()
  return <div data-testid="location">{location.search}</div>
}

function renderWithRouter(initialEntries = ['/orders']) {
  const result = render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route
          path="/orders"
          element={
            <>
              <OrderTableFilters />
              <LocationDisplay />
            </>
          }
        />
      </Routes>
    </MemoryRouter>
  )
  return {
    ...result,
    getLocation: () => screen.getByTestId('location').textContent || '',
  }
}

describe('OrderTableFilters', () => {
  it('should update the URL parameters when filtering', async () => {
    const { getLocation, container } = renderWithRouter()

    fireEvent.change(screen.getByPlaceholderText('ID do pedido'), {
      target: { value: '123' },
    })
    fireEvent.change(screen.getByPlaceholderText('Nome do cliente'), {
      target: { value: 'Alice' },
    })

    const selectEl = container.querySelector('select[name="status"]') as HTMLSelectElement
    fireEvent.change(selectEl, { target: { value: 'pending' } })
    
    fireEvent.click(screen.getByText('Filtrar resultados'))

    await waitFor(() => {
      expect(getLocation()).toContain('orderId=123')
      expect(getLocation()).toContain('customerName=Alice')
      expect(getLocation()).toContain('status=pending')
      expect(getLocation()).toContain('page=1')
    })
  })

  it('should clear filters and URL when clicking Remove filters', async () => {
    const { getLocation } = renderWithRouter([
      '/orders?orderId=123&customerName=Alice&status=pending&page=2',
    ])

    expect(screen.getByPlaceholderText('ID do pedido')).toHaveValue('123')
    expect(screen.getByPlaceholderText('Nome do cliente')).toHaveValue('Alice')
    // Verifica se o botão do combobox mostra "Pendente"
    const statusCombo = screen.getByRole('combobox')
    expect(within(statusCombo).getByText('Pendente')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Remover filtros'))

    await waitFor(() => {
      expect(screen.getByPlaceholderText('ID do pedido')).toHaveValue('')
      expect(screen.getByPlaceholderText('Nome do cliente')).toHaveValue('')
      expect(getLocation()).toBe('?page=1')
    })
  })
})