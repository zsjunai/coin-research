import type { CompanyDetail, CompanySummary } from '@/types/company'
import { nebius } from './nebius'

export const companyRegistry: Record<string, CompanyDetail> = {
    nebius,
}

export const companies: CompanySummary[] = [
    {
        id: 'nebius',
        ticker: 'NASDAQ:NBIS',
        name: 'Nebius Group',
        market: 'US',
        currency: 'USD',
        desc: '西方阵营纯血 AI Neocloud，全栈自研 GPU 云平台，Nvidia 战略伙伴。',
        price: '$166.77',
        marketCap: '~$40B',
        verdict: 'neutral',
        verdictText: '持有 / 回调加仓',
        metrics: [
            { label: '5Y 期望', value: '3.9x' },
            { label: '10Y 期望', value: '9.1x' },
            { label: 'P(10x · 10Y)', value: '~12%' },
        ],
        tags: ['AI Infra', 'Neocloud', 'GPU Cloud'],
        date: '2026-04-17',
    },
]

export function getCompany(id: string): CompanyDetail | undefined {
    return companyRegistry[id]
}
