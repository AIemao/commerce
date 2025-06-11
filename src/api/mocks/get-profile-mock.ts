import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
    '/me',
    () => {
        return HttpResponse.json({
            id: 'custom-user-id',
            name: 'Teste Mock',
            email: 'testemock@email.com',
            phone: '81237127123',
            role: 'manager',
            createdAt: new Date(),
            updatedAt: null,
        })
    },
)