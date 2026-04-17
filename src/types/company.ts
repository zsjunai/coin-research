export type Verdict = 'bullish' | 'neutral' | 'bearish'
export type GapStatus = 'red' | 'yellow' | 'green'
export type ScenarioCls = 'bull' | 'neutral' | 'bear'
export type PriceCls = 'cyan' | 'purple' | 'green' | 'red'
export type RiskLevel = 'low' | 'medium' | 'high' | 'critical'
export type CatalystImpact = 'positive' | 'negative' | 'mixed'

export interface CompanySummary {
    id: string
    ticker: string
    name: string
    desc: string
    price: string
    marketCap: string
    verdict: Verdict
    verdictText: string
    metrics: { label: string; value: string }[]
    tags: string[]
    date: string
}

export interface PriceCard {
    label: string
    value: string
    sub: string
    cls: PriceCls
}

export interface Contract {
    customer: string
    amount: string
    years: string | number
    detail: string
}

export interface Subsidiary {
    name: string
    desc: string
    stake: string
    value: string
}

export interface ThesisPoint {
    title: string
    body: string
    evidence?: string
}

export interface Scenario {
    name: string
    cls: ScenarioCls
    prob: number
    mcap: string
    mcapValue: number
    desc: string
}

export interface Mag7GapRow {
    dim: string
    mag7: string
    nebius: string
    status: GapStatus
}

export interface WeightBreakdown {
    scenario: string
    prob: number
    mid: number
    contrib: number
}

export interface WeightedExpectation {
    currentMcap: number
    expectedMcap: number
    multiplier: number
    cagr: number
    breakdown: WeightBreakdown[]
}

export interface PeerCompareRow {
    metric: string
    nbis: string
    cwv: string
    winner: 'nbis' | 'cwv'
}

export interface AnalystTarget {
    firm: string
    target: number
    rating: string
}

export interface WatchRow {
    indicator: string
    mag7Signal: string
    oracleSignal: string
    pressedSignal: string
}

/* ================= NEW: Company Overview ================= */

export interface HistoryEvent {
    year: string
    event: string
    tag?: string
}

export interface RevenueMix {
    name: string
    pct: number
    note?: string
}

export interface CompanyOverview {
    founded: string
    headquarters: string
    incorporation: string
    employees: string
    listing: string
    history: HistoryEvent[]
    businessModel: string
    revenueMix: RevenueMix[]
}

/* ================= NEW: Team & Governance ================= */

export interface TeamMember {
    name: string
    role: string
    background: string
    since?: string
    rating: number // 1-5 star confidence
}

export interface ShareholderRow {
    name: string
    pct: string
    type: string
    note?: string
}

/* ================= NEW: Catalysts ================= */

export interface ShortTermCatalyst {
    when: string
    event: string
    impact: CatalystImpact
    probability: string
    magnitude: string
}

export interface LongTermDriver {
    name: string
    horizon: string
    body: string
    enabling: string
}

/* ================= NEW: Risk Matrix ================= */

export interface RiskItem {
    name: string
    body: string
    mitigation?: string
}

export interface RiskCategory {
    category: string
    level: RiskLevel
    summary: string
    items: RiskItem[]
}

/* ================= NEW: Valuation ================= */

export interface ValuationMetric {
    metric: string
    value: string
    benchmark: string
    read: 'cheap' | 'fair' | 'rich'
}

export interface SOTPItem {
    item: string
    valuation: string
    method: string
    note: string
}

export interface ValuationFramework {
    metrics: ValuationMetric[]
    sotp: SOTPItem[]
    sotpTotal: string
    sotpPerShare: string
}

/* ================= NEW: Competitive Landscape ================= */

export type CompetitorType = 'neocloud' | 'hyperscaler' | 'specialist'
export type ThreatLevel = 'high' | 'medium' | 'low'

export interface CompetitorRow {
    name: string
    type: CompetitorType
    ticker?: string
    revenue2026E: string
    aiRevenue: string
    gpuFleet: string
    backlog: string
    ebitdaMargin: string
    marketCap: string
    nvidiaLevel: number // 1-5
    threat: ThreatLevel
    strength: string
    weakness: string
}

export interface PositioningRow {
    dimension: string
    nebius: string
    industryAvg: string
    leader: string
    nebiusStrong: boolean
}

export interface WinLossScenario {
    scenario: string
    winners: string
    losers: string
    reasoning: string
}

export interface MarketShareSlice {
    name: string
    pct: number
    cls?: string
}

export interface CompetitiveLandscape {
    summary: string
    competitors: CompetitorRow[]
    positioning: PositioningRow[]
    marketShare2026: MarketShareSlice[]
    winLoss: WinLossScenario[]
    structuralTrend: string
}

/* ================= NEW: Profitability ================= */

export interface IncomeStatementRow {
    year: string
    revenue: string
    revenueNum: number | null
    grossMargin: string
    opIncome: string
    ebitda: string
    ebitdaMargin: string
    netIncome: string
    eps: string
    status: 'actual' | 'guidance' | 'estimate'
}

export interface MarginPoint {
    year: string
    gross: number | null
    ebitda: number | null
    operating: number | null
    net: number | null
    status: 'actual' | 'guidance' | 'estimate'
}

export interface ProfitabilityMilestone {
    year: string
    milestone: string
    note?: string
    hit: boolean
}

export interface UnitEconomicsItem {
    metric: string
    value: string
    source: string
}

export interface Profitability {
    narrative: string
    incomeStatement: IncomeStatementRow[]
    marginEvolution: MarginPoint[]
    milestones: ProfitabilityMilestone[]
    unitEconomics: UnitEconomicsItem[]
    fcfPath: string
    keyRisks: string[]
}

/* ================= NEW: Recommendation ================= */

export interface Recommendation {
    rating: string
    ratingCls: 'bullish' | 'neutral' | 'bearish'
    timeHorizon: string
    positionSize: string
    addingZone: string
    stopLoss: string
    thesis: string
    keyAssumptions: string[]
}

/* ================= MASTER ================= */

export interface CompanyDetail {
    id: string
    ticker: string
    name: string
    tagline: string
    date: string
    priceCards: PriceCard[]
    keyFacts: Record<string, string>
    contracts: Contract[]
    subsidiaries: Subsidiary[]
    bullPoints: ThesisPoint[]
    bearPoints: ThesisPoint[]
    scenarios10y: Scenario[]
    mag7Gap: Mag7GapRow[]
    weightedExpectation: WeightedExpectation
    coreWeaveCompare: PeerCompareRow[]
    peerName: string
    analysts: AnalystTarget[]
    watchlist: WatchRow[]
    finalQuote: string
    revenueChart: {
        labels: string[]
        values: number[]
        kinds: ('revenue' | 'capex')[]
    }
    // ---- NEW FIELDS ----
    overview: CompanyOverview
    team: TeamMember[]
    shareholders: ShareholderRow[]
    advantages: ThesisPoint[]
    disadvantages: ThesisPoint[]
    shortTermCatalysts: ShortTermCatalyst[]
    longTermDrivers: LongTermDriver[]
    riskMatrix: RiskCategory[]
    profitability: Profitability
    competitiveLandscape: CompetitiveLandscape
    valuation: ValuationFramework
    recommendation: Recommendation
}
