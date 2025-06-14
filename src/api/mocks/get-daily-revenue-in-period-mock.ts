import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
    never,
    never,
    GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
    return HttpResponse.json([
        { date: '01/06/2025', receipt: 2000 },
        { date: '02/06/2025', receipt: 800 },
        { date: '03/06/2025', receipt: 8000 },
        { date: '04/06/2025', receipt: 540 },
        { date: '05/06/2025', receipt: 400 },
        { date: '06/06/2025', receipt: 700 },
        { date: '07/06/2025', receipt: 1000 },
    ])
})