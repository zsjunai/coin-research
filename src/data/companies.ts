import type { CompanyDetail, CompanySummary } from '@/types/company'
import { beigene } from './beigene'
import { circle } from './circle'
import { coinbase } from './coinbase'
import { nebius } from './nebius'
import { popmart } from './popmart'
import { robinhood } from './robinhood'
import { spacex } from './spacex'

export const companyRegistry: Record<string, CompanyDetail> = {
    nebius,
    circle,
    coinbase,
    robinhood,
    popmart,
    beigene,
    spacex,
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
    {
        id: 'coinbase',
        ticker: 'NASDAQ:COIN',
        name: 'Coinbase Global',
        market: 'US',
        currency: 'USD',
        desc: '美国加密行业龙头：OCC 国家信托牌照 + 标普 500 成员 + Deribit 并购 + Base L2，合规身位无对手。',
        price: '$167.85',
        marketCap: '~$43B',
        verdict: 'neutral',
        verdictText: '持有 / 逐步加仓',
        metrics: [
            { label: '5Y 期望', value: '1.83x' },
            { label: '10Y 期望', value: '4.76x' },
            { label: 'P(10x · 10Y)', value: '~18%' },
        ],
        tags: ['Crypto Exchange', 'Fintech', 'L2 / Base'],
        date: '2026-04-17',
    },
    {
        id: 'robinhood',
        ticker: 'NASDAQ:HOOD',
        name: 'Robinhood Markets',
        market: 'US',
        currency: 'USD',
        desc: '千禧一代零售券商龙头：Super App 战略（股票 + 期权 + 加密 + 代币化 + Banking + 预测市场），ARPU 两年翻倍至 $191。',
        price: '$90.75',
        marketCap: '~$80B',
        verdict: 'neutral',
        verdictText: '持有 / 回调加仓',
        metrics: [
            { label: '5Y 期望', value: '1.37x' },
            { label: '10Y 期望', value: '3.10x' },
            { label: 'P(10x · 10Y)', value: '~15%' },
        ],
        tags: ['Retail Broker', 'Fintech', 'Super App'],
        date: '2026-04-20',
    },
    {
        id: 'popmart',
        ticker: 'HK:09992',
        name: '泡泡玛特 Pop Mart',
        market: 'HK',
        currency: 'HKD',
        desc: '中国潮玩龙头：LABUBU 全球爆红（THE MONSTERS 系列 +365% / 占 38% 营收），海外占比 44% · 经调整净利率 35%。迪士尼路径 vs 单爆款周期性的二元选择。',
        price: 'HK$151.50',
        marketCap: '~HK$198B',
        verdict: 'neutral',
        verdictText: '持有 / 回调加仓',
        metrics: [
            { label: '5Y 期望', value: '1.50x' },
            { label: '10Y 期望', value: '3.56x' },
            { label: 'P(10x · 10Y)', value: '~15%' },
        ],
        tags: ['消费 IP', '潮玩', '全球化'],
        date: '2026-04-20',
    },
    {
        id: 'beigene',
        ticker: 'HK:06160',
        name: '百济神州 / BeOne Medicines',
        market: 'HK',
        currency: 'HKD',
        desc: '中国走出来的全球肿瘤龙头：Brukinsa (泽布替尼) $3.9B 全球 BTK 第一超越艾伯维；2025 首次全年 GAAP 盈利 $287M；三地上市 + 瑞士迁册。',
        price: 'HK$178.90',
        marketCap: '~HK$182B',
        verdict: 'neutral',
        verdictText: '持有 / 分批建仓',
        metrics: [
            { label: '5Y 期望', value: '1.56x' },
            { label: '10Y 期望', value: '3.09x' },
            { label: 'P(10x · 10Y)', value: '~12%' },
        ],
        tags: ['创新药', 'Biotech', '肿瘤'],
        date: '2026-04-20',
    },
    {
        id: 'spacex',
        ticker: 'PRIVATE:SPX',
        name: 'SpaceX',
        market: 'PRIVATE',
        currency: 'USD',
        desc: '未上市 · 2025-12 二级估值 $800B · 2026-04 confidential IPO filed 目标 $1.75-2T。Starlink 2026E $18.7B + Starship + xAI 合并后 $1T 综合体。',
        price: '$800B (二级)',
        marketCap: '~$800B – 2T',
        verdict: 'neutral',
        verdictText: '关注 / IPO 后择机',
        metrics: [
            { label: '5Y 期望', value: '2.13x' },
            { label: '10Y 期望', value: '4.63x' },
            { label: 'P(10x · 10Y)', value: '~12%' },
        ],
        tags: ['太空', '卫星互联网', 'Pre-IPO'],
        date: '2026-04-21',
    },
]

export function getCompany(id: string): CompanyDetail | undefined {
    return companyRegistry[id]
}
