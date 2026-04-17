import type { CompanyDetail, CompanySummary } from '@/types/company'
import { circle } from './circle'
import { nebius } from './nebius'

export const companyRegistry: Record<string, CompanyDetail> = {
    nebius,
    circle,
}

export const companies: CompanySummary[] = [
    {
        id: 'nebius',
        ticker: 'NASDAQ:NBIS',
        name: 'Nebius Group',
        market: 'US',
        currency: 'USD',
        desc: '西方阵营纯血 AI Neocloud，全栈自研 GPU 云平台，英伟达战略伙伴。',
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
    {
        id: 'circle',
        ticker: 'NYSE:CRCL',
        name: 'Circle Internet Group',
        market: 'US',
        currency: 'USD',
        desc: '全球第二大稳定币 USDC 发行方，GENIUS Act 最直接受益者，Arc L1 + CPN 打开第二曲线。',
        price: '$106.52',
        marketCap: '~$26B',
        verdict: 'neutral',
        verdictText: '持有 / 回调加仓',
        metrics: [
            { label: '5Y 期望', value: '1.65x' },
            { label: '10Y 期望', value: '4.1x' },
            { label: 'P(10x · 10Y)', value: '~15%' },
        ],
        tags: ['Stablecoin', 'Fintech', 'Crypto Infra'],
        date: '2026-04-17',
    },
]

export function getCompany(id: string): CompanyDetail | undefined {
    return companyRegistry[id]
}
