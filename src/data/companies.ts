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
        desc: '西方阵营纯血 AI Neocloud，全栈自研 GPU 云平台，Nvidia 战略伙伴。',
        price: '$166.77',
        marketCap: '~$40B',
        verdict: 'neutral',
        verdictText: '持有 / 回调加仓',
        metrics: [
            { label: '2026E 营收', value: '$3.0-3.4B' },
            { label: '合同积压', value: '$46B' },
            { label: '10Y P(Mag7)', value: '~12%' },
        ],
        tags: ['AI Infra', 'Neocloud', 'GPU Cloud'],
        date: '2026-04-17',
    },
]

export function getCompany(id: string): CompanyDetail | undefined {
    return companyRegistry[id]
}
