import { env } from '@/pages/env';
import axios from 'axios';

const api = axios.create({
    baseURL: env.VITE_API_URL, // URL do .env, mas crie um arquivo env.ts com zod para validação
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;