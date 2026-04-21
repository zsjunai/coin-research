import type { CompanyDetail } from '@/types/company'

export const circle: CompanyDetail = {
    id: 'circle',
    ticker: 'NYSE:CRCL',
    name: 'Circle Internet Group, Inc.',
    tagline:
        '全球第二大稳定币 USDC 发行方，GENIUS Act 最直接受益者。核心争议：利率与 Coinbase 分成的双重利润绞杀 vs Arc L1 + CPN 支付网络能否打开"稳定币基础设施"第二曲线。',
    date: '2026-04-17',

    priceCards: [
        { label: '当前股价', value: '$106.52', sub: '2026-04-17 收盘', cls: 'cyan' },
        { label: '52 周波动', value: '$60 – $298', sub: 'IPO 后高波动', cls: 'purple' },
        { label: '市值', value: '~$26.09B', sub: '约 245M 股稀释', cls: 'purple' },
        { label: '分析师共识 PT', value: '$138.64', sub: '18 家分析师中值', cls: 'cyan' },
        { label: '2025 净亏损', value: '-$70M', sub: '含 $424M IPO SBC', cls: 'red' },
        { label: 'USDC 流通', value: '$75.3B', sub: '+72% YoY (2025 末)', cls: 'green' },
    ],

    keyFacts: {
        '2025 营收 + 储备收益': '$2.7B (+64% YoY)',
        '2025 Adj. EBITDA': '$167M (+412% YoY)',
        '2025 末 USDC 流通': '$75.3B (+72% YoY)',
        '2025 链上交易量': '$33.3T (+384% YoY)',
        'Q1 2026 营收': '$770M (超指引 $749M)',
        'Q1 2026 EPS': '$0.43 (超指引 $0.16, +161%)',
        '2026 稳定币市值': '$320B',
        'USDC 市占': '~25% (仅次于 Tether 58%)',
        'IPO 日期': '2025-06 · NYSE:CRCL · 发行价 $31',
        'Coinbase 分成': '平台内 100% / 平台外 50:50',
        '储备结构': '短期美债 + 隔夜回购 + 现金',
        'Arc L1 状态': '2025-10 测试网 · 2026 主网',
    },

    contracts: [
        { customer: 'Coinbase (分销协议)', amount: '~56% reserve revenue', years: '至 2026 续约', detail: '平台内 USDC 100% 归 Coinbase；平台外 50/50。下一轮谈判在 2026 年' },
        { customer: 'BlackRock (储备管理)', amount: '$64.2B Circle Reserve Fund', years: '长期', detail: '超 90% USDC 储备存管于 BlackRock 管理的政府货币基金' },
        { customer: 'BNY Mellon (托管)', amount: '全部现金储备', years: '长期', detail: '所有 USDC 支撑的现金部分由 BNY Mellon 托管' },
        { customer: 'CPN Managed Payments 合作银行', amount: '未披露', years: '已签 MOU', detail: 'Santander · Deutsche Bank · Société Générale · Standard Chartered 作为咨询伙伴' },
    ],

    subsidiaries: [
        { name: 'Arc Network', desc: '自研 L1 公链（stablecoin-native）', stake: '全资', value: '2026 主网启动，隐含期权价值 $5-15B' },
        { name: 'Circle Payments Network (CPN)', desc: 'B2B 跨境稳定币支付网络', stake: '全资', value: '2026-04 管理版发布，目标 PayPal/Visa 量级' },
        { name: 'Circle Mint', desc: 'USDC 发行 / 赎回 API', stake: '全资', value: '核心基础设施' },
        { name: 'Circle Research', desc: '加密合规 / 政策研究', stake: '全资', value: '游说与监管互动的支点' },
    ],

    bullPoints: [
        { title: 'GENIUS Act 最直接受益', body: '2025-07-17 签署，联邦级稳定币法案，Circle 从灰色合规变为"持牌金融机构"，OCC 临时银行牌照已下发' },
        { title: 'USDC 流通 72% 增长', body: '2025 年 USDC 从 $43.7B → $75.3B，远超整体 46% 市场增速；2026 市占从 20% 攀升至 ~25%' },
        { title: '链上交易量 $33.3T', body: '同比 +384%，证明 USDC 已成为稳定币支付事实标准（Tether 主要仍是交易所对手方）' },
        { title: 'Arc L1 + CPN 第二曲线', body: '从"卖利差"转型为"收网络费"，对标 Visa/Stripe 商业模式；BlackRock / Visa / AWS / Anthropic 已是 Arc 测试网节点' },
        { title: '银行战略联盟', body: 'Santander、Deutsche Bank、SocGen、Standard Chartered 以 CPN 咨询委员身份入局，传统金融接入壁垒被打破' },
        { title: '干净资产负债表', body: 'IPO + 跟投筹资约 $1B+ 现金；储备与公司账本严格隔离，合规风险显著低于 Tether' },
    ],

    bearPoints: [
        { title: 'Coinbase 分成结构吞噬利润', body: '平台内 USDC 100% 归 Coinbase，全年 Coinbase 拿走 ~56% reserve revenue；Circle 真实留存不足一半' },
        { title: '利率敏感度极高', body: '储备收益 = 短期美债收益率 × 流通量。美联储降息 50bp → Circle 净利直减 15-25%，与 USDC 增速部分对冲' },
        { title: 'GENIUS Act 禁止 USDC 付利息', body: '用户无激励持有 USDC（vs 银行存款 4-5% 利率），流通量增长会放缓' },
        { title: 'Tether 规模仍双倍', body: 'Tether 市占 58% vs USDC 25%，海外市场、交易所深度仍显著落后' },
        { title: '银行 + Ripple + Paxos 入局', body: 'GENIUS Act 降低壁垒，JPMorgan、Trump 家族 USD1、Ripple RLUSD、Paxos USDG 同台竞争' },
        { title: '估值历史波动极大', body: 'IPO $31 → 高点 $298 → 当前 $106，12 个月内波动 650%；TTM EV/Sales ~9x，2026E ~7x 并非"明显便宜"' },
    ],

    scenarios: [
        {
            name: '乐观: 稳定币界的 Visa / 支付基础设施龙头',
            cls: 'bull',
            prob: 15,
            y5Mcap: '$80 – 150B',
            y5Value: 115,
            y10Mcap: '$300 – 500B',
            y10Value: 380,
            desc: 'USDC 流通 2030 达 $500B+（占 $1.5T 稳定币市场 33%）；Arc L1 + CPN 贡献 40% 营收（非利率相关）；重塑为"合规数字美元铁路"',
        },
        {
            name: '中性: 合规稳定币 TOP 2 / 稳态利润',
            cls: 'neutral',
            prob: 50,
            y5Mcap: '$30 – 55B',
            y5Value: 42,
            y10Mcap: '$60 – 120B',
            y10Value: 85,
            desc: 'USDC 2030 流通 $200B，市占稳在 25-30%；Coinbase 续约条件略改善但结构不变；Arc + CPN 贡献 10-15% 营收；净利率 20-25%',
        },
        {
            name: '悲观: 利率下行 + 竞争挤压',
            cls: 'bear',
            prob: 25,
            y5Mcap: '$10 – 20B',
            y5Value: 15,
            y10Mcap: '$15 – 30B',
            y10Value: 22,
            desc: '美联储降息至 2-2.5%；银行自发稳定币抢占支付场景；Tether 保持 50%+ 份额；USDC 流通平台期 $80-100B',
        },
        {
            name: '尾部: 黑天鹅 / 破坏性事件',
            cls: 'bear',
            prob: 10,
            y5Mcap: '$5 – 10B',
            y5Value: 8,
            y10Mcap: '$10 – 20B',
            y10Value: 15,
            desc: 'USDC 短暂脱锚、GENIUS Act 负面修订、Coinbase 重谈分成恶化、CBDC 替代、或 Trump USD1 政治施压',
        },
    ],

    tenXGene: [
        { dim: '软件边际成本 · 规模化杠杆', tenBagger: '边际成本 ≈ 0', nebius: '核心发行接近零成本，但分销费占比 50%+', status: 'yellow' },
        { dim: '网络/平台效应', tenBagger: '显著', nebius: '稳定币有强网络效应（流动性 = 护城河）但 USDT 已占优', status: 'yellow' },
        { dim: '数据闭环 / 专属资产', tenBagger: '独占数据 / IP / 规模', nebius: 'USDC 品牌 + 合规牌照是核心，但 Tether 仍是链上事实标准', status: 'yellow' },
        { dim: '毛利率 · 定价权', tenBagger: '60-80% 可持续', nebius: '储备毛利 >85%，但分销成本拉低实际利润率至 30-40%', status: 'yellow' },
        { dim: '消费者触点 / 品牌', tenBagger: '直接 C 端 / 开发者心智', nebius: 'B2B2C（通过 Coinbase / Metamask / 交易所），无直接 C 端', status: 'red' },
        { dim: '再投资空间 · S-curve', tenBagger: '高 ROIC + TAM 够大', nebius: '稳定币 TAM 2030 可达 $1-2T；Arc/CPN 打开支付 TAM', status: 'green' },
        { dim: '管理层 · 跨代际转型', tenBagger: '有过 0→$30B 记录', nebius: 'Jeremy Allaire 创业 15 年，Brightcove IPO 经验', status: 'yellow' },
    ],

    weightedExpectation: {
        currentMcap: 26,
        y5: {
            expectedMcap: 43,
            multiplier: 1.65,
            cagr: 10.5,
        },
        y10: {
            expectedMcap: 107,
            multiplier: 4.1,
            cagr: 15.1,
        },
        breakdown: [
            { scenario: 'A. 稳定币 Visa', prob: 15, y5Mid: 115, y10Mid: 380, y5Contrib: 17, y10Contrib: 57 },
            { scenario: 'B. 合规 TOP 2', prob: 50, y5Mid: 42, y10Mid: 85, y5Contrib: 21, y10Contrib: 43 },
            { scenario: 'C. 利率挤压', prob: 25, y5Mid: 15, y10Mid: 22, y5Contrib: 4, y10Contrib: 6 },
            { scenario: 'D. 黑天鹅', prob: 10, y5Mid: 8, y10Mid: 15, y5Contrib: 1, y10Contrib: 2 },
        ],
    },

    peerName: 'Tether (私有)',
    coreWeaveCompare: [
        { metric: '市占率 (2026)', nbis: '~25%', cwv: '~58%', winner: 'cwv' },
        { metric: '流通量', nbis: '$80B', cwv: '$185B', winner: 'cwv' },
        { metric: '监管合规', nbis: 'GENIUS Act 持牌 · 美国本土', cwv: '离岸 / SVG · 未上市', winner: 'nbis' },
        { metric: '储备透明度', nbis: '月度 Deloitte 审计', cwv: '季度 BDO 报告（不完全审计）', winner: 'nbis' },
        { metric: '2025 利润率', nbis: '净亏损（含 IPO SBC）', cwv: '利润 $13B+（私有估计）', winner: 'cwv' },
        { metric: '付息能力', nbis: 'GENIUS Act 禁止', cwv: '离岸无限制', winner: 'cwv' },
        { metric: '企业 B2B 接入', nbis: 'CPN + Arc 强推进', cwv: '弱，主要交易所使用', winner: 'nbis' },
        { metric: '机构投资者可用性', nbis: '是（NYSE 上市）', cwv: '否（无上市主体）', winner: 'nbis' },
    ],

    analysts: [
        { firm: 'Wolfe Research (最高)', target: 294, rating: 'Outperform' },
        { firm: 'Bernstein', target: 230, rating: 'Outperform' },
        { firm: '共识 (18 家)', target: 139, rating: 'Buy' },
        { firm: 'Goldman Sachs', target: 120, rating: 'Hold' },
        { firm: 'Morgan Stanley', target: 80, rating: 'Equal-Weight' },
        { firm: 'Mizuho (最低)', target: 61, rating: 'Underperform' },
    ],

    watchlist: [
        { indicator: 'USDC 流通量 (月度)', strongSignal: '> $10B/月净增', baseSignal: '$3-7B/月净增', weakSignal: '< $2B/月或净流出' },
        { indicator: '美联储政策利率', strongSignal: '维持 4.5%+', baseSignal: '降至 3-4%', weakSignal: '降至 < 2.5%' },
        { indicator: 'Coinbase 平台外 USDC 占比', strongSignal: '> 60% (Circle 留存更多)', baseSignal: '50-60%', weakSignal: '< 40%' },
        { indicator: 'Arc 主网 TPS + TVL', strongSignal: '> 10k TPS · TVL > $50B', baseSignal: '1k TPS · TVL $5-20B', weakSignal: '< 500 TPS · TVL < $1B' },
        { indicator: 'CPN 月处理量', strongSignal: '> $10B/月', baseSignal: '$1-5B/月', weakSignal: '< $500M/月' },
    ],

    finalQuote:
        '稳定币是"数字时代的欧洲美元"，Circle 是其中唯一拿到美国联邦牌照的上市公司。<strong>上行取决于是否能把"利差生意"改造为"网络费生意"</strong>（Arc + CPN 转型）；<strong>下行取决于利率周期与 Coinbase 分成条款</strong>。当前 $106 处于"贵的不离谱、便宜的不足以全仓"区间——属于金融基础设施敞口的卫星仓，不是核心仓。',

    revenueChart: {
        labels: ['2023 Revenue', '2024 Revenue', '2025 Revenue', '2026E Revenue', '2027E Revenue'],
        values: [1450, 1676, 2700, 3800, 5200],
        kinds: ['revenue', 'revenue', 'revenue', 'revenue', 'revenue'],
    },

    overview: {
        founded: '2013 · 由 Jeremy Allaire 与 Sean Neville 在波士顿创立',
        headquarters: '美国 · 纽约',
        incorporation: '美国 Delaware / 爱尔兰子公司',
        employees: '~1,200+ (2025 末)',
        listing: 'NYSE · CRCL · 2025-06 IPO',
        history: [
            { year: '2013', event: 'Jeremy Allaire + Sean Neville 创立 Circle（前身 P2P 比特币支付）', tag: '创立' },
            { year: '2015', event: '获得美国首张 BitLicense', tag: '里程碑' },
            { year: '2018-10', event: '与 Coinbase 联合成立 Centre Consortium，发布 USDC', tag: '关键节点' },
            { year: '2021', event: 'USDC 流通量突破 $10B；尝试 SPAC 上市（后取消）', tag: 'IPO 尝试' },
            { year: '2022-05', event: 'Terra/UST 崩盘引发稳定币信任危机，USDC 短暂脱锚至 $0.87', tag: '危机' },
            { year: '2023-03', event: 'SVB 倒闭，Circle $3.3B 储备被冻结，USDC 二次脱锚', tag: '危机' },
            { year: '2023-08', event: '收购 Centre Consortium 剩余股权，USDC 完全归 Circle', tag: '重组' },
            { year: '2024-02', event: '法国 MiCA 合规 + 爱尔兰欧洲总部建立', tag: '合规' },
            { year: '2025-04', event: '宣布 Circle Payments Network (CPN)', tag: '产品' },
            { year: '2025-06', event: 'NYSE IPO @ $31，首日收盘 $83（涨 168%）', tag: 'IPO' },
            { year: '2025-07-17', event: 'GENIUS Act 签署成为联邦法律', tag: '里程碑' },
            { year: '2025-08', event: 'Follow-on 增发 @ $130，筹资 $444.8M 净', tag: '融资' },
            { year: '2025-10', event: 'Arc L1 公链测试网上线（BlackRock / Visa / AWS 参与）', tag: '产品' },
            { year: '2026-02', event: 'OCC 授予临时国家信托银行牌照（Ripple / Paxos 同批）', tag: '合规' },
            { year: '2026-04', event: 'CPN Managed Payments 正式推出，服务 PSP 与银行', tag: '产品' },
            { year: '2026-04-17', event: '股价 $106，市值 ~$26B，TTM EV/Sales ~9x', tag: '当前' },
        ],
        businessModel:
            '核心利润来源：发行 USDC（用户存入 1 美元换 1 USDC），将等额美元投入短期美债与隔夜回购获取利息——这是一家**无存款保险、无付息义务的"影子货币基金"**。辅助利润来源：Circle Mint 手续费、EURC 欧元稳定币、Arc L1 的未来网络费、CPN 支付网络处理费。Coinbase 通过 2018 年分销协议拿走 50%+ reserve revenue，是最大的利润外流。',
        revenueMix: [
            { name: '储备收益 (Reserve Income)', pct: 95, note: '短期美债 + 隔夜回购收益' },
            { name: 'Circle Mint + 交易费', pct: 3, note: 'USDC 发行/赎回 API 费用' },
            { name: 'EURC + 其他稳定币', pct: 1, note: '欧元稳定币份额微小' },
            { name: 'Arc + CPN (新业务)', pct: 1, note: '2026 年刚启动，占比微小但预期快速增长' },
        ],
    },

    team: [
        {
            name: 'Jeremy Allaire',
            role: 'CEO · 联合创始人 · 董事长',
            background:
                '1971 年出生，麻省大学毕业。90 年代创立 Allaire Corp（开发 ColdFusion），2001 年以 $360M 卖给 Macromedia。2004 年创立 Brightcove（视频 SaaS），2012 年 NASDAQ IPO。2013 年与 Sean Neville 共同创立 Circle，自创办以来连续担任 CEO 12 年。公认的"加密货币行业最善于与华盛顿沟通的 CEO"。',
            since: '2013',
            rating: 5,
        },
        {
            name: 'Jeremy Fox-Geen',
            role: 'CFO',
            background:
                '前 S&P Global、高盛、巴克莱财务高管。2021 年加入 Circle，主导 SPAC 取消、IPO 路演、GENIUS Act 合规会计重塑。有完整的公开公司财务治理经验。',
            since: '2021',
            rating: 4,
        },
        {
            name: 'Dante Disparte',
            role: 'Chief Strategy Officer & Head of Global Policy',
            background:
                '前 Libra/Diem（Meta 稳定币项目）副总裁。专长在政策游说、跨境监管。主导 GENIUS Act 游说工作和 MiCA（欧盟）合规。',
            rating: 4,
        },
        {
            name: 'Heath Tarbert',
            role: 'President & Chief Legal Officer',
            background:
                '前 CFTC 主席（2019-2021）。顶级华盛顿人脉资源。2022 年加入 Circle，主导监管框架搭建。GENIUS Act 的关键幕后推手之一。',
            rating: 5,
        },
    ],

    shareholders: [
        { name: 'Accel Partners', pct: '~13-15%', type: '早期 VC', note: '2014 A 轮起持有' },
        { name: 'General Catalyst', pct: '~10-12%', type: '早期 VC', note: 'B 轮领投' },
        { name: 'Jeremy Allaire (含信托)', pct: '~8%', type: '创始人', note: 'IPO 后双重股权（B 类股高投票权）' },
        { name: 'IDG Capital', pct: '~7-8%', type: '机构', note: '中国背景，C 轮进入' },
        { name: 'BlackRock / Fidelity', pct: '~5-7%', type: 'IPO 后公募', note: '上市后主流机构进入' },
        { name: '公众流通股 + 其他机构', pct: '~50%', type: '散户 + 机构', note: 'NYSE 自由流通' },
    ],

    advantages: [
        {
            title: 'GENIUS Act 联邦合规壁垒 (独特性 ★★★★★)',
            body: '2025-07-17 签署的 GENIUS Act 为稳定币发行建立了联邦-州双层许可体系，要求 1:1 储备、月度审计、AML。Circle 是首批 OCC 国家信托银行持牌方之一。离岸 Tether 无法进入此体系，美国机构客户将结构性选择 USDC。',
            evidence: 'GENIUS Act 公开文本（2025-07-17 签署）；OCC 2026-02 发布的临时国家信托银行名单',
        },
        {
            title: 'USDC 流通双倍增长 (规模 ★★★★★)',
            body: '2025 年 USDC 流通 +72%（至 $75.3B），而 Tether 同期 +40%，整体市场 +46%。连续两年 USDC 增速超过 Tether，市占从 18% 逼近 25%。',
            evidence: 'Q4 2025 财报；CoinGecko / DefiLlama 历史数据',
        },
        {
            title: 'Arc L1 + CPN 第二曲线 (护城河 ★★★★)',
            body: 'Arc 公链（USDC 为 gas）2026 年主网上线，BlackRock、Visa、AWS、Anthropic 已是测试网节点。CPN 支付网络与 Santander、Deutsche Bank、SocGen、Standard Chartered 建立咨询关系。目标：从利差业务升级为"收网络费"业务。',
            evidence: 'Arc 测试网白皮书（2025-10）；CPN Managed Payments 发布稿（2026-04-08）',
        },
        {
            title: '合规透明度碾压对手 (信任 ★★★★★)',
            body: '月度 Deloitte 审计、全量储备放在 BlackRock 管理的 Circle Reserve Fund（$64.2B）、现金由 BNY Mellon 托管。vs Tether 季度 BDO 报告 + 历史 CFTC 罚款史。',
            evidence: 'Circle 官网月度储备报告；Tether 透明度页面',
        },
        {
            title: '银行战略联盟 (护城河 ★★★★)',
            body: 'Santander + Deutsche Bank + Société Générale + Standard Chartered 四家全球银行加入 CPN 咨询委员会。传统金融的加密接入壁垒被主动打破，Circle 已占位为"数字美元在银行体系内的默认接入方"。',
            evidence: 'CPN 发布稿（2026-04）；Circle 年报',
        },
        {
            title: '创始人长期执掌 + 政策资源 (治理 ★★★★)',
            body: 'CEO Jeremy Allaire 自 2013 年创办至今 12 年持续执掌；President Heath Tarbert 是前 CFTC 主席；Dante Disparte 来自 Meta Libra。管理层在华盛顿的政策资源是任何竞争对手都无法快速复制的。',
            evidence: '2025 DEF 14A 代理声明；Heath Tarbert 的 CFTC 履历公开',
        },
        {
            title: '上市地位 + 机构资金入口 (韧性 ★★★)',
            body: 'NYSE 上市后，被动指数基金、ETF、401(k) 资金可直接配置 CRCL，Tether/USDT 无此通道。',
            evidence: 'Russell / S&P 小盘指数纳入动作；机构持股数据',
        },
    ],

    disadvantages: [
        {
            title: '利率敏感度极高',
            body: '2025 年储备收益占营收 ~95%。美联储每降息 25bp，Circle 净利下降 7-10%（取决于流通量增速对冲）。降息周期是结构性逆风。',
            evidence: 'Q3 2025 10-Q 风险因素章节；利率敏感度测算',
        },
        {
            title: 'Coinbase 分成结构性吞噬',
            body: '平台内 USDC 100% 归 Coinbase，全年 Coinbase 拿走 ~56% reserve revenue。分销成本 Q3 2025 达 $448M（+74% YoY），吃掉营收增长的绝大部分。2026 续约可能略有改善但根本结构不变。',
            evidence: 'S-1 招股书分销协议细节；Q3 2025 财报分销成本数据',
        },
        {
            title: 'GENIUS Act 禁止 USDC 付息',
            body: '法案明确禁止支付稳定币向持有人支付利息（类似银行存款）。用户持有 USDC 的机会成本 = 失去 4.5% 国债收益。这对流通量天花板构成结构性约束。',
            evidence: 'GENIUS Act Section 4(a)(6)；Brookings 分析',
        },
        {
            title: 'Tether 在海外 + 交易所的主导地位',
            body: 'Tether 市占 58%（vs USDC 25%），尤其在亚洲、拉美、交易所做市中占绝对主导。Circle 在美国合规优势强，但海外撬动 Tether 难度极大。',
            evidence: 'DefiLlama / CoinGecko 市场份额历史',
        },
        {
            title: 'GENIUS Act 同时打开竞争闸门',
            body: '法案降低合规壁垒后，JPMorgan Deposit Coin、Ripple RLUSD、Paxos USDG（与 Robinhood/Galaxy 合作）、Trump 家族 USD1、PayPal PYUSD 同时入场。2026 年稳定币数量已超 200 个。',
            evidence: 'Decrypt 2025 稳定币年终报告；Ripple / Paxos OCC 牌照获批公告',
        },
        {
            title: '估值仍不便宜，历史波动极大',
            body: 'IPO $31 → 12 个月高点 $298 → 当前 $106，波动 650%。当前 TTM EV/Sales ~9x，2026E ~7x，并非明显低估。投资者容易被"看起来便宜"引导到估值陷阱。',
            evidence: 'NYSE CRCL 历史价格；Macrotrends 估值指标',
        },
        {
            title: '第二曲线仍是期权，未兑现',
            body: 'Arc L1 仍处测试网，CPN 处理量未公开。新业务贡献营收 < 1%。从利差向网络费的转型需要 3-5 年验证，期间仍是"看起来便宜的 fintech"故事。',
            evidence: '2025 10-K Risk Factors；Arc 测试网状态',
        },
    ],

    shortTermCatalysts: [
        {
            when: '2026 Q2 (5 月 11 日)',
            event: 'Q1 2026 正式财报（已预告 EPS $0.43 大超预期）',
            impact: 'positive',
            probability: '已确认业绩',
            magnitude: '+5-10%',
        },
        {
            when: '2026 Q2-Q3',
            event: 'Arc L1 主网上线（beta → public），USDC 作为 gas 费机制启动',
            impact: 'positive',
            probability: '~80%',
            magnitude: '+10-15%',
        },
        {
            when: '2026 Q3',
            event: 'Coinbase 分销协议 3 年期重谈（2026 到期）',
            impact: 'mixed',
            probability: '~100% 发生',
            magnitude: '+15% 或 -20%（取决于条款）',
        },
        {
            when: '2026 H2',
            event: '美联储降息路径明朗（若维持 4%+ 则利好，降至 3% 以下则利空）',
            impact: 'mixed',
            probability: '降息已开始',
            magnitude: '±15-25%',
        },
        {
            when: '2026 H2',
            event: 'CPN 商业化加速：与至少 2 家大型银行正式签约（非咨询委员）',
            impact: 'positive',
            probability: '~50%',
            magnitude: '+10%',
        },
        {
            when: '2026 Q4',
            event: 'Arc Network 原生代币发行（已由 Allaire 透露探索中）',
            impact: 'positive',
            probability: '~40%',
            magnitude: '+15-30% 或显著波动',
        },
        {
            when: '2027',
            event: 'EURC 欧元稳定币 MiCA 完整实施下市占爆发',
            impact: 'positive',
            probability: '~30%',
            magnitude: '+5-10%',
        },
        {
            when: '持续',
            event: '主要交易所 / 钱包接入 USDC 作为默认选项（而非 USDT）',
            impact: 'positive',
            probability: '渐进',
            magnitude: '+1-2% 每季度',
        },
        {
            when: '任何时点',
            event: 'USDC 再次脱锚（SVB 级别事件）',
            impact: 'negative',
            probability: '~5% / 年',
            magnitude: '-40-60%',
        },
        {
            when: '任何时点',
            event: 'GENIUS Act 修订（禁止国际接入或限制新发行规模）',
            impact: 'negative',
            probability: '~10% / 年',
            magnitude: '-25-40%',
        },
    ],

    longTermDrivers: [
        {
            name: '稳定币 TAM 爆发',
            horizon: '2026-2032',
            body: '全球稳定币流通量从 2026 $320B 预计 2030 年达 $1-1.5T（3-5x 增长）。Circle 若保持 25-30% 市占，对应 USDC 流通 $300-450B。以当前 reserve return 水平推算，单利差营收可达 $12-18B/年。',
            enabling: 'GENIUS Act 落地 + 跨境支付需求 + Web3 普及 + 黄金/美元对冲需求',
        },
        {
            name: '从"利差业务"到"网络业务"的模式跃迁',
            horizon: '2027-2032',
            body: 'Arc L1（USDC 作为 gas）+ CPN 支付网络的组合目标是复制 Visa 模式：每笔 USDC 交易抽取基点级手续费。若 Arc 年交易量达 $100T（对比 USDC 2025 链上交易 $33T），按 0.5bp 费率可产生 $5B 新营收，估值倍数从 fintech (10x EV/S) 升级为平台 (20-30x EV/S)。',
            enabling: 'BlackRock / Visa / AWS / Anthropic 参与 Arc 生态；银行联盟 CPN 接入',
        },
        {
            name: '跨境 B2B 支付颠覆',
            horizon: '2027-2033',
            body: '全球跨境 B2B 支付 TAM $150T+，SWIFT 平均 T+2 结算 + 1-3% 费率。USDC + CPN 可实现 T+0 + 0.1-0.3% 成本。若吃下 5% 份额 → Circle 新增 $5-15B 营收来源。',
            enabling: 'Santander / Deutsche Bank / SocGen / Standard Chartered 咨询委员；MiCA 欧洲合规；新兴市场政策缺口',
        },
        {
            name: 'EURC 欧元稳定币独占地位',
            horizon: '2026-2030',
            body: 'MiCA 完整实施后，几乎所有离岸欧元稳定币被淘汰。Circle 的 EURC 是目前合规且规模化的 TOP 1。若欧元稳定币流通量达 $30-50B（对标 USDC 早期路径），将提供第二增长曲线。',
            enabling: 'MiCA 2026 Q2 完整实施；Paris/Dublin 双总部；欧洲央行数字欧元延期',
        },
        {
            name: '代币化资产 (RWA) 基础设施',
            horizon: '2027-2032',
            body: 'BlackRock BUIDL + Franklin Templeton FOBXX 等代币化基金总量 2026 已达 $20B，2030 年预计 $500B-1T。这些产品需要稳定币作为申购/赎回通道，Arc L1 的核心场景之一。',
            enabling: 'BlackRock 参与 Arc；OCC 临时银行牌照允许代币化证券托管；RWA 监管清晰化',
        },
        {
            name: 'CBDC 延期与真空',
            horizon: '2026-2030',
            body: '美联储 CBDC 研究延迟至 2030+，GENIUS Act 明确"私营稳定币 = 数字美元事实形态"。Circle 窗口期 4-6 年内无联邦直接竞争。',
            enabling: 'Trump 政府 CBDC 禁令（2025-01 EO）；联邦立法确认私营稳定币地位',
        },
    ],

    riskMatrix: [
        {
            category: '宏观 / 利率风险',
            level: 'critical',
            summary: '储备收益占营收 95%，对利率极度敏感',
            items: [
                {
                    name: '美联储降息周期',
                    body: '降息 100bp 预计单年净利下降 25-35%（与流通量增速对冲后约 15-25%）。2026-2028 是结构性逆风。',
                    mitigation: 'USDC 流通量增速部分抵消 + CPN/Arc 非利率业务扩张',
                },
                {
                    name: '收益率曲线倒挂',
                    body: '若短期收益低于长期，Circle 的短期美债策略会失效。',
                    mitigation: '可调整至中长期久期，但牺牲流动性',
                },
            ],
        },
        {
            category: '合作伙伴 / 分销风险',
            level: 'high',
            summary: 'Coinbase 分成是最大单一不确定性',
            items: [
                {
                    name: 'Coinbase 2026 分成续约',
                    body: '现行协议 3 年一谈，到 2026 年到期。Coinbase 若要求更高分成，Circle 净利率会持续压缩。',
                    mitigation: '多元化分销（钱包、交易所、CEX 新合作）已启动；Bybit 50/50 分成已签',
                },
                {
                    name: '交易所侧重 USDT',
                    body: 'Binance、OKX 等亚洲交易所仍以 USDT 为主要稳定币，USDC 接入深度有限。',
                    mitigation: '通过 OTC 与机构通道绕过交易所',
                },
            ],
        },
        {
            category: '监管 / 政策风险',
            level: 'high',
            summary: 'GENIUS Act 既是护城河也是紧箍咒',
            items: [
                {
                    name: 'GENIUS Act 修订或加严',
                    body: '美国政治周期变化可能引入新要求：更严储备、禁止某些链部署、国际接入限制。',
                    mitigation: '与 OCC / Treasury 紧密互动；前 CFTC 主席 Tarbert 任 CLO',
                },
                {
                    name: '海外合规分裂',
                    body: 'MiCA (欧盟)、港交所 VATP、阿联酋 VARA、新加坡 MAS 等法规不一致，合规成本持续上升。',
                    mitigation: '法国 / 爱尔兰 MiCA 合规；新加坡子公司；每进入一国新建独立合规架构',
                },
                {
                    name: 'Trump 家族 USD1 政治施压',
                    body: 'USD1 由 Trump 家族 World Liberty Financial 发行，政治变数可能迫使 GENIUS Act 向其倾斜。',
                    mitigation: '难以完全缓释；监控政治动态',
                },
            ],
        },
        {
            category: '技术 / 运营风险',
            level: 'medium',
            summary: 'USDC 脱锚是核心黑天鹅',
            items: [
                {
                    name: 'USDC 脱锚事件',
                    body: '2023-03 SVB 危机时 USDC 曾跌至 $0.87，历时 48 小时恢复。任何再次脱锚会重击品牌与流通量。',
                    mitigation: '多银行托管 + BlackRock Reserve Fund + 实时审计；SVB 教训后资金分散',
                },
                {
                    name: 'Arc L1 技术风险',
                    body: '新链普遍面临安全漏洞、共识故障、验证者集中化风险。',
                    mitigation: '量子抵抗签名 + 多家顶级验证者（BlackRock/Visa/AWS）+ Cosmos SDK 成熟技术栈',
                },
                {
                    name: '智能合约漏洞',
                    body: 'USDC 跨链桥梁（Wormhole / CCTP）历史上发生过漏洞与攻击。',
                    mitigation: 'CCTP V2 + 持续审计 + bug bounty',
                },
            ],
        },
        {
            category: '竞争风险',
            level: 'high',
            summary: '银行 + Ripple + Paxos + Trump USD1 同步入场',
            items: [
                {
                    name: '银行自发稳定币',
                    body: 'JPMorgan Deposit Coin、花旗 Citi Token Services 占据企业对公支付场景。',
                    mitigation: 'CPN 与银行联盟化（将对手变为合作方）',
                },
                {
                    name: 'Ripple RLUSD + Paxos USDG',
                    body: '同样持 OCC 牌照的直接竞品，技术路线相似。',
                    mitigation: '先发优势 + 规模效应 + 已有生态（Coinbase / Metamask）',
                },
                {
                    name: 'Tether 反攻美国市场',
                    body: '若 Tether 子公司 Anchorage 或类似实体获得美国合规牌照。',
                    mitigation: '概率低但需监控',
                },
            ],
        },
        {
            category: '金融 / 财务风险',
            level: 'medium',
            summary: '净利薄、现金流依赖储备',
            items: [
                {
                    name: '流通量突然收缩',
                    body: '市场恐慌时 USDC 赎回集中，储备需快速变现，可能带来短期交易损失。',
                    mitigation: '短期美债高流动性；BlackRock 管理专业；历史 SVB 事件后流程已优化',
                },
                {
                    name: '稀释风险',
                    body: '若股价疲软，用 SBC 激励员工会继续稀释。2025 已发生 $424M IPO SBC。',
                    mitigation: '2025 特例性高；2026+ 预计回归正常水平',
                },
            ],
        },
        {
            category: '治理 / ESG 风险',
            level: 'low',
            summary: '双重股权结构 + 创始人控制',
            items: [
                {
                    name: '双重股权',
                    body: 'Allaire 持有 B 类股享高投票权，小股东制衡力弱。',
                    mitigation: '行业通例；机构投资者已接受',
                },
                {
                    name: 'AML / 制裁合规',
                    body: 'USDC 曾被用于规避制裁（俄罗斯、朝鲜相关地址），需持续冻结。',
                    mitigation: 'CCTP 冻结能力；与 Chainalysis / TRM 合作；OFAC 合规流程',
                },
            ],
        },
    ],

    profitability: {
        narrative:
            'Circle 是典型的"**利率敏感型 fintech**"：储备收益占营收 95%+，Coinbase 分成吃掉 50%+，净利率在利率上行期 25-35%、下行期 5-15%。2025 全年 $2.7B 营收但净亏损 $70M（含 $424M IPO 相关 SBC，剔除后调整净利约 $355M）。**拐点判断**：若 Arc + CPN 能把"网络费营收"占比从 2025 的 <1% 提升到 2027 的 15%+，则估值倍数可从 fintech 的 8-12x EV/S 升级为平台公司 20-30x EV/S。这是 10x 故事的核心前提。',

        incomeStatement: [
            {
                year: '2023',
                revenue: '$1.45B',
                revenueNum: 1450,
                grossMargin: '~75%',
                opIncome: '-$180M',
                ebitda: '-$120M',
                ebitdaMargin: '-8%',
                netIncome: '-$268M',
                eps: 'N/A',
                status: 'actual',
            },
            {
                year: '2024',
                revenue: '$1.68B',
                revenueNum: 1676,
                grossMargin: '~40% (扣分销)',
                opIncome: '+$180M',
                ebitda: '+$33M',
                ebitdaMargin: '2%',
                netIncome: '+$155M',
                eps: '$0.70',
                status: 'actual',
            },
            {
                year: '2025',
                revenue: '$2.70B',
                revenueNum: 2700,
                grossMargin: '~42%',
                opIncome: '-$30M',
                ebitda: '+$167M (Adj.)',
                ebitdaMargin: '6%',
                netIncome: '-$70M',
                eps: '-$0.30',
                status: 'actual',
            },
            {
                year: '2026E',
                revenue: '$3.8-4.2B',
                revenueNum: 4000,
                grossMargin: '~45%',
                opIncome: '+$450-700M',
                ebitda: '+$700M-1.0B',
                ebitdaMargin: '~20%',
                netIncome: '+$400-600M',
                eps: '$1.80-2.50',
                status: 'guidance',
            },
            {
                year: '2027E',
                revenue: '$5.0-5.5B',
                revenueNum: 5200,
                grossMargin: '~48%',
                opIncome: '+$900M-1.3B',
                ebitda: '+$1.2-1.6B',
                ebitdaMargin: '~25%',
                netIncome: '+$700M-1.0B',
                eps: '$3.0-4.2',
                status: 'estimate',
            },
            {
                year: '2028E',
                revenue: '$6.5-7.5B',
                revenueNum: 7000,
                grossMargin: '~50%',
                opIncome: '+$1.5-2.0B',
                ebitda: '+$1.8-2.3B',
                ebitdaMargin: '~28%',
                netIncome: '+$1.2-1.6B',
                eps: '$5.0-6.5',
                status: 'estimate',
            },
        ],

        marginEvolution: [
            { year: '2023', gross: 75, ebitda: -8, operating: -12, net: -18, status: 'actual' },
            { year: '2024', gross: 40, ebitda: 2, operating: 11, net: 9, status: 'actual' },
            { year: '2025', gross: 42, ebitda: 6, operating: -1, net: -3, status: 'actual' },
            { year: '2026E', gross: 45, ebitda: 20, operating: 14, net: 12, status: 'guidance' },
            { year: '2027E', gross: 48, ebitda: 25, operating: 20, net: 16, status: 'estimate' },
            { year: '2028E', gross: 50, ebitda: 28, operating: 24, net: 20, status: 'estimate' },
        ],

        milestones: [
            { year: '2024', milestone: 'GAAP 年度净利首次转正', hit: true, note: '$155M 净利' },
            { year: '2025', milestone: 'Adj. EBITDA +412% YoY', hit: true, note: '$167M' },
            { year: '2025-06', milestone: 'NYSE IPO 成功（首日 +168%）', hit: true },
            { year: '2025-07-17', milestone: 'GENIUS Act 签署生效', hit: true, note: '关键合规里程碑' },
            { year: '2026', milestone: 'Arc L1 主网上线 + 原生代币', hit: false, note: '测试网已上' },
            { year: '2027', milestone: 'Arc + CPN 贡献营收 >10%', hit: false, note: '第二曲线验证' },
            { year: '2028-2030', milestone: 'USDC 流通 $300B+ 市占稳定 30%+', hit: false },
        ],

        unitEconomics: [
            { metric: 'USDC 流通均值（2025）', value: '$65B', source: '年报披露' },
            { metric: '储备收益率', value: '~4.5% (2025 均值)', source: '短期美债 + 隔夜回购' },
            { metric: '毛储备收益', value: '~$2.93B (2025 理论值)', source: '流通均值 × 4.5%' },
            { metric: '分销成本 / 储备收益', value: '~54%', source: '2025 Coinbase 等分成' },
            { metric: '净储备收益率 (Circle)', value: '~2.1%', source: '4.5% × (1-54%)' },
            { metric: 'USDC 用户增长成本', value: '近零', source: 'Coinbase 分销承担' },
            { metric: 'ARR/员工', value: '~$2.25M (2025)', source: '$2.7B / ~1200 员工' },
        ],

        fcfPath:
            '2025 OCF $380M（Q3 YTD $293M + Q4 改善），FCF 约 $350M。2026-2028 年 OCF 预计随净利同步扩大到 $0.7-1.5B/年。**核心关注点**：非利率业务（Arc + CPN）贡献比例。若 2028 年仍 <10%，则 Circle 估值与短端利率强耦合；若 >20%，估值倍数可结构性重估。',

        keyRisks: [
            '美联储若 2026-2027 降息至 2.5% 以下，Circle 净利可能腰斩',
            '2026 Coinbase 续约条款恶化 → 净利率进一步压缩',
            'GENIUS Act 若修订禁止部分链部署，USDC 规模受限',
            'Arc 主网延期或失败将推迟第二曲线兑现 1-2 年',
        ],
    },

    competitiveLandscape: {
        summary:
            '稳定币市场正从"Tether + USDC 双寡头"演化为"**合规 vs 离岸 vs 银行**三层格局"。Circle 在合规层占据首位（OCC 牌照 + NYSE 上市），但 Tether 仍凭借离岸灵活性占 58% 市占。新入场者 Ripple RLUSD、Paxos USDG、JPMorgan Deposit Coin、Trump USD1 同时挤压。Circle 的关键护城河是"**合规深度 × 机构信任 × Arc+CPN 新场景**"，但所有护城河都有时效窗口。',

        competitors: [
            {
                name: 'Circle (自身)',
                type: 'specialist',
                ticker: 'CRCL',
                revenue2026E: '$3.8-4.2B',
                aiRevenue: '~$4B (储备收益)',
                gpuFleet: '$75-100B USDC 流通',
                backlog: 'Arc + CPN 期权价值',
                ebitdaMargin: '~20%',
                marketCap: '~$26B',
                nvidiaLevel: 5,
                threat: 'low',
                strength: 'GENIUS Act 持牌、NYSE 上市、合规透明、BlackRock/Visa 生态',
                weakness: 'Coinbase 分成、利率敏感、Tether 海外优势',
            },
            {
                name: 'Tether (USDT)',
                type: 'specialist',
                ticker: '未上市',
                revenue2026E: '~$15-20B (估)',
                aiRevenue: '~$15B',
                gpuFleet: '$185B USDT 流通',
                backlog: '未披露',
                ebitdaMargin: '~80% (估)',
                marketCap: 'N/A (未上市)',
                nvidiaLevel: 3,
                threat: 'high',
                strength: '规模最大 58%、海外主导、交易所做市标配、无分销分成',
                weakness: '离岸监管争议、储备透明度低、美国市场无法直接参与',
            },
            {
                name: 'Ripple RLUSD',
                type: 'specialist',
                ticker: '未上市 (Ripple)',
                revenue2026E: '~$0.3B',
                aiRevenue: '~$0.3B',
                gpuFleet: '~$2B 流通',
                backlog: 'XRP 生态结合',
                ebitdaMargin: '~15% (估)',
                marketCap: 'N/A',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: 'OCC 同批持牌、XRP Ledger 接入、跨境支付故事',
                weakness: '规模小、XRP 法律历史包袱、品牌信任弱',
            },
            {
                name: 'Paxos USDG (+PYUSD)',
                type: 'specialist',
                ticker: '未上市',
                revenue2026E: '~$0.4B',
                aiRevenue: '~$0.4B',
                gpuFleet: '~$8B 流通 (含 PYUSD)',
                backlog: 'PayPal / Robinhood / Galaxy 合作',
                ebitdaMargin: '~20% (估)',
                marketCap: 'N/A',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: 'PayPal 分销 (70 国)、新加坡 MAS 牌照、Global Dollar Network',
                weakness: '缺乏 Arc 类平台、PayPal 自身竞争压力',
            },
            {
                name: 'Trump USD1',
                type: 'specialist',
                ticker: '未上市',
                revenue2026E: '~$0.1B',
                aiRevenue: '~$0.1B',
                gpuFleet: '~$1.5B 流通',
                backlog: '政治影响力',
                ebitdaMargin: 'N/A',
                marketCap: 'N/A',
                nvidiaLevel: 2,
                threat: 'medium',
                strength: '政治资源、Trump 家族背书',
                weakness: '合规模糊、信任两极化、规模小',
            },
            {
                name: 'JPMorgan Deposit Coin',
                type: 'hyperscaler',
                ticker: 'JPM',
                revenue2026E: '未独立披露',
                aiRevenue: 'N/A',
                gpuFleet: 'Onyx 网络处理 $1T+/年',
                backlog: '企业客户全盘',
                ebitdaMargin: 'N/A',
                marketCap: '~$600B (母公司)',
                nvidiaLevel: 3,
                threat: 'high',
                strength: '企业客户、Onyx 结算网络、存款保险、万亿级流水',
                weakness: '封闭系统、仅限 JPM 客户、不可开放式流通',
            },
            {
                name: 'Tether Gold / BUIDL 等 RWA',
                type: 'specialist',
                ticker: '多',
                revenue2026E: 'N/A',
                aiRevenue: 'N/A',
                gpuFleet: '$20B+ RWA 代币化',
                backlog: 'BlackRock / Franklin 领头',
                ebitdaMargin: 'N/A',
                marketCap: 'N/A',
                nvidiaLevel: 4,
                threat: 'low',
                strength: '资产多元化（黄金、货币基金）、机构配置通道',
                weakness: '不是支付场景、流动性弱',
            },
            {
                name: 'CBDC (美联储 FedNow)',
                type: 'hyperscaler',
                ticker: 'N/A',
                revenue2026E: 'N/A',
                aiRevenue: 'N/A',
                gpuFleet: '美联储账本',
                backlog: 'Trump 行政令暂停直接 CBDC',
                ebitdaMargin: 'N/A',
                marketCap: 'N/A',
                nvidiaLevel: 1,
                threat: 'low',
                strength: '央行信用、无对手方风险',
                weakness: 'Trump EO 暂停 CBDC；FedNow 仅限银行',
            },
        ],

        positioning: [
            { dimension: 'USDC 流通规模', nebius: '$75-100B', industryAvg: '$5-20B', leader: 'Tether $185B', nebiusStrong: false },
            { dimension: '合规评级', nebius: 'OCC 牌照 + NYSE 上市', industryAvg: '离岸 / 部分合规', leader: 'Circle / Paxos', nebiusStrong: true },
            { dimension: '储备透明度', nebius: '月度 Deloitte', industryAvg: '季度自报告', leader: 'Circle', nebiusStrong: true },
            { dimension: '分销成本占比', nebius: '~54% (Coinbase 分成)', industryAvg: '10-20%', leader: 'Tether ~0%', nebiusStrong: false },
            { dimension: '2025 增速', nebius: '+72% 流通', industryAvg: '+46%', leader: 'Circle', nebiusStrong: true },
            { dimension: '企业 B2B 接入', nebius: 'CPN + 4 家全球银行', industryAvg: '弱', leader: 'JPMorgan Onyx', nebiusStrong: true },
            { dimension: '自有公链', nebius: 'Arc L1 (2026)', industryAvg: '无', leader: 'Circle', nebiusStrong: true },
            { dimension: '付息能力', nebius: '禁止（GENIUS Act）', industryAvg: '禁止 / 离岸可', leader: 'Tether (离岸)', nebiusStrong: false },
            { dimension: '机构投资者入口', nebius: 'NYSE 直接配置', industryAvg: '私募 / 无', leader: 'Circle', nebiusStrong: true },
            { dimension: '海外 / 交易所深度', nebius: '弱', industryAvg: 'Tether 主导', leader: 'Tether', nebiusStrong: false },
        ],

        marketShare2026: [
            { name: 'Tether (USDT)', pct: 58 },
            { name: 'Circle (USDC)', pct: 25 },
            { name: 'Binance USD + 第一共和', pct: 4 },
            { name: 'PayPal PYUSD + Paxos USDG', pct: 3 },
            { name: 'DAI + Frax + Liquity (DeFi)', pct: 4 },
            { name: 'Ripple RLUSD + Trump USD1', pct: 2 },
            { name: '其他', pct: 4 },
        ],

        winLoss: [
            {
                scenario: '美国企业 B2B 支付',
                winners: 'Circle (CPN + 银行联盟)',
                losers: 'Tether / Trump USD1',
                reasoning: 'GENIUS Act 合规要求 + 银行接入伙伴 + OCC 牌照使 Circle 成为美国企业的默认选择',
            },
            {
                scenario: '亚洲 / 拉美交易所做市',
                winners: 'Tether',
                losers: 'Circle (规模不够)',
                reasoning: 'Tether 在 Binance / OKX / Bybit 深度远超 USDC，短期无法撬动',
            },
            {
                scenario: '欧洲 MiCA 监管',
                winners: 'Circle EURC + Paxos',
                losers: 'Tether (被迫退出)',
                reasoning: 'MiCA 严格合规下离岸稳定币基本无法在欧盟流通',
            },
            {
                scenario: 'DeFi 原生协议',
                winners: 'DAI / crvUSD / Frax',
                losers: 'Circle / Tether',
                reasoning: '原生 DeFi 用户偏好去中心化稳定币，但规模增长受限',
            },
            {
                scenario: '代币化资产 RWA',
                winners: 'Circle (Arc + BlackRock)',
                losers: 'Tether',
                reasoning: 'BUIDL 等代币化基金需要合规稳定币作为 settlement 轨道，Tether 无法参与',
            },
            {
                scenario: '政府 / 主权 CBDC 补位',
                winners: 'Circle / JPMorgan',
                losers: 'Tether',
                reasoning: 'Trump 暂停 CBDC 后，政府采购与外交支付将转向持牌稳定币',
            },
        ],

        structuralTrend:
            '未来 3 年行业结构性变化：①**美国市场合规化**（GENIUS Act 强制）将把 Tether 挤出美国境内，USDC 市占从 25% 升至 40%+；②**银行自发稳定币**（JPM / Citi / Goldman）抢占企业存款场景，但局限于 B2B；③**Arc 与 L1 竞争**——Circle 要让 Arc 成为 "USDC 主链"，而不是 Ethereum/Solana 的附属；④**代币化证券 RWA**将是 2027+ 最大增量，BlackRock BUIDL 已给 Arc 站台。Circle 必须在 2027 年前确立 Arc + CPN 的网络效应，否则沦为"仅 USDC 发行方"，估值倍数会压缩至金融机构水平（1-2x P/S）。',

        tam: {
            narrative:
                '稳定币市场处于**指数扩张初期**：2024 年 $200B → 2026 年 $320B → 2030 年预计 $1-1.5T（5-7x）。USDC 当前市占 25%，若 GENIUS Act 推动美国本土份额上升，Circle 2030 年可达 $300-450B 流通量。但 10x 回报（从 $26B → $260B）要求不只是流通量增长，还需要**网络费业务（Arc + CPN）产生 $3-5B 额外营收**，这才是估值倍数重估的关键。',
            points: [
                { year: '2023', totalTam: 130, neocloudTam: 25, selfRevenue: 1.45, status: 'actual' },
                { year: '2024', totalTam: 200, neocloudTam: 35, selfRevenue: 1.68, status: 'actual' },
                { year: '2025', totalTam: 260, neocloudTam: 75, selfRevenue: 2.7, status: 'actual' },
                { year: '2026', totalTam: 320, neocloudTam: 85, selfRevenue: 4.0, status: 'estimate' },
                { year: '2028', totalTam: 650, neocloudTam: 200, selfRevenue: 7.0, status: 'estimate' },
                { year: '2030', totalTam: 1200, neocloudTam: 350, selfRevenue: 13, status: 'estimate' },
                { year: '2035', totalTam: 3000, neocloudTam: 900, selfRevenue: 35, status: 'estimate' },
            ],
            keyNumbers: [
                { label: '2026 稳定币总市值', value: '$320B', sub: '当前', cls: 'cyan' },
                { label: '2030E 稳定币市值', value: '$1-1.5T', sub: '~5x 增长', cls: 'purple' },
                { label: 'USDC 2025 流通', value: '$75.3B', sub: '+72% YoY', cls: 'green' },
                { label: 'USDC 市占 (2026)', value: '~25%', sub: '仅次于 Tether 58%', cls: 'cyan' },
                { label: '2030 Circle 目标市占', value: '30-35%', sub: 'GENIUS Act 推动', cls: 'purple' },
                { label: 'Tether 2026 市占', value: '58%', sub: '海外主导', cls: 'red' },
                { label: '10x 回报所需', value: '35%+ 市占', sub: '或 Arc 网络费 $5B+', cls: 'red' },
                { label: '稳定币 CAGR (2026-2030)', value: '~40%', sub: '高于加密整体', cls: 'purple' },
            ],
            sourcesNote:
                '数据来源：CoinGecko / DefiLlama 历史流通量、Circle 季报、Decrypt 2025 稳定币年终报告、SSGA / Allied Venture Partners 研报。2028-2035 为本分析基于 GENIUS Act 落地后 35-45% CAGR 推演。',
        },

        radar: {
            peer1Name: 'Tether (USDT)',
            peer2Name: 'Ripple RLUSD',
            dimensions: [
                { dim: '流通规模', self: 5, peer1: 10, peer2: 2 },
                { dim: '增长速度', self: 8, peer1: 7, peer2: 8 },
                { dim: '合规评级', self: 10, peer1: 3, peer2: 9 },
                { dim: '储备透明度', self: 10, peer1: 4, peer2: 8 },
                { dim: '分销成本优势', self: 3, peer1: 10, peer2: 6 },
                { dim: '机构接入', self: 9, peer1: 4, peer2: 7 },
                { dim: '自有网络 (L1/L2)', self: 8, peer1: 2, peer2: 9 },
                { dim: '海外 / 交易所深度', self: 5, peer1: 10, peer2: 3 },
            ],
            note: '1-10 分主观评分。Circle 在合规、透明度、机构接入维度"形状"最饱满；Tether 在规模、分销成本、海外深度占绝对优势。不同的多边形形状 = 不同的战略定位。真正的投资决策需要判断哪个"形状"在 2030 年更值钱。',
        },
    },

    valuation: {
        metrics: [
            { metric: 'EV/Sales (TTM)', value: '~9x', benchmark: 'Payment 行业 5-10x', read: 'fair' },
            { metric: 'EV/Sales (2026E)', value: '~6.5x', benchmark: 'Visa/MA 15-20x (对比上限)', read: 'cheap' },
            { metric: 'Forward P/E (2026E)', value: '~50x', benchmark: 'Payment 增长股 25-35x', read: 'rich' },
            { metric: 'Forward P/E (2027E)', value: '~30x', benchmark: 'Stripe 私估 ~$70B ÷ $20B 营收 = 3.5x', read: 'fair' },
            { metric: 'P/B', value: '~6.5x', benchmark: 'BlackRock 3.5x / Coinbase 8x', read: 'fair' },
            { metric: '隐含 Arc+CPN 期权', value: '$0-5B (市场已计部分)', benchmark: '类比 Square Cash App 早期', read: 'fair' },
        ],
        sotp: [
            { item: '核心 USDC 利差业务 (2027E)', valuation: '$18-22B', method: '7x 2027E 核心营收 $4.5B × 0.4 净利率 ÷ (8% WACC - 3% 增速)', note: '利率敏感核心资产' },
            { item: 'Arc L1 网络 (期权)', valuation: '$3-8B', method: '类比 L1 公链估值（Solana/Sui），保守取 $5B', note: '2028+ 兑现；或代币发行直接市值贡献' },
            { item: 'CPN 支付网络 (期权)', valuation: '$2-5B', method: '10% 跨境 B2B 市占 × $10T × 0.1bp × 40x P/E', note: '2028-2030 兑现' },
            { item: 'EURC 欧元稳定币', valuation: '$1-2B', method: '$30-50B 流通量 × 2% 净利率 × 15x P/E', note: 'MiCA 完整实施后' },
            { item: '现金净额', valuation: '$1-1.5B', method: 'IPO + Follow-on 净额 ~$1B + 经营性积累', note: '扣除运营负债' },
        ],
        sotpTotal: '$25-38B',
        sotpPerShare: '对应合理区间 $102-155 (当前 $106 位于区间下沿)',
    },

    recommendation: {
        rating: '持有 · 分批建仓 / 等回调',
        ratingCls: 'neutral',
        timeHorizon: '3-5 年（10 年视角下的中期节奏）',
        positionSize: '3-6% 组合权重上限 · 金融基础设施卫星仓',
        addingZone: '$80-95 (Morgan Stanley PT 下沿 + 2025 H2 低点支撑区)',
        stopLoss: 'Coinbase 续约条款重大恶化 / USDC 脱锚事件 / GENIUS Act 不利修订 → 重新评估',
        thesis:
            '当前 $106 接近共识目标 $139 的 77%，风险收益比一般。看多论据在**合规护城河 + 流通量增长**，看空论据在**利率下行 + Coinbase 分成**。Arc + CPN 是上行关键期权但尚未兑现。**不推荐作为核心仓**（利率敏感 + 分成绞杀），但作为**"数字美元基础设施"敞口**（与 Coinbase / Robinhood / Visa 搭配），在 $80-95 区间可逐步建仓。',
        keyAssumptions: [
            '2026-2027 美联储利率维持 3-4.5%（非深度降息）',
            'Coinbase 2026 续约条款不恶化（或略改善至 45/55）',
            'Arc L1 2026 主网按期上线，2027 年 TVL 达 $10B+',
            'USDC 流通 2027 达 $150B，2030 达 $300B',
            'GENIUS Act 框架稳定，无重大加严修订',
        ],
        sizingFormula: {
            method: 'Kelly 公式（保守版，使用 1/2 Kelly）',
            formula: 'f* = (期望回报率 − 无风险利率) / 方差 × 0.5',
            inputs: [
                { label: '10Y 期望回报率', value: '15.1% CAGR' },
                { label: '无风险利率', value: '4.5% (10Y 国债)' },
                { label: '情景标准差 (10Y)', value: '$118.6B (~111% of E[Mcap])' },
                { label: '完整 Kelly', value: '~7%' },
                { label: '1/2 Kelly (保守)', value: '~3.5%' },
            ],
            computedSize: '3-6% 组合权重',
            reasoning:
                '10Y 情景标准差约等于期望值（~110%），波动极高。利率敏感性是主要波动源，与组合中其他金融股可能正相关。建议取 1/2 Kelly 下限（3%），只有当 Arc + CPN 有明确兑现信号（主网上线 + TVL $10B+）后上调至 5-6%。',
        },
    },

    keyPersonRisks: [
        {
            name: 'Jeremy Allaire (CEO · 创始人)',
            role: '战略 · 政策游说 · 华盛顿关系',
            departProb: '低 (~3% / 5 年)',
            departImpact: '极高 —— 股价短期 -25%，政策人脉难替代',
            mitigation: '已执掌 12 年，未见离职信号；双重股权结构确保控制权稳定',
            criticality: 'critical',
        },
        {
            name: 'Heath Tarbert (President & CLO)',
            role: '合规 · 监管互动 · 游说',
            departProb: '中 (~15% / 5 年)',
            departImpact: '中高 —— 华盛顿政策连接断裂风险',
            mitigation: 'Dante Disparte 可部分接替；与 CFTC/OCC 关系多元化建设中',
            criticality: 'high',
        },
        {
            name: 'Dante Disparte (CSO)',
            role: '全球政策 · 国际监管',
            departProb: '中 (~20% / 5 年)',
            departImpact: '中 —— 国际合规节奏放缓',
            mitigation: '已建立欧洲、亚洲团队；MiCA、VARA 合规流程已成熟',
            criticality: 'medium',
        },
        {
            name: 'Jeremy Fox-Geen (CFO)',
            role: '财务治理 · 资本市场沟通',
            departProb: '低 (~10% / 5 年)',
            departImpact: '中 —— 过渡期投资者关系波动',
            mitigation: 'IPO 后团队扩充，深度已加强',
            criticality: 'medium',
        },
    ],

    cashFlow: {
        narrative:
            'Circle 是典型的"**现金生成器**"：USDC 流通量 = 其他人的钱，Circle 放在美债收利息，自身 CapEx 极低（无数据中心、无 GPU、无库存）。2025 OCF $380M（Q3 YTD $293M + Q4 改善），自由现金流接近 OCF。**核心观察：OCF / Reserve Income 比率**——决定 Circle 能把"别人的钱"的利息多少真正变成自己的现金。',
        rows: [
            { year: '2024', ocf: 320, icf: -85, fcf: 120, freeCashFlow: 235, status: 'actual' },
            { year: '2025', ocf: 380, icf: -120, fcf: 900, freeCashFlow: 260, status: 'actual' },
            { year: '2026E', ocf: 700, icf: -200, fcf: -50, freeCashFlow: 500, status: 'estimate' },
            { year: '2027E', ocf: 1100, icf: -300, fcf: -100, freeCashFlow: 800, status: 'estimate' },
            { year: '2028E', ocf: 1700, icf: -400, fcf: -150, freeCashFlow: 1300, status: 'estimate' },
            { year: '2029E', ocf: 2200, icf: -500, fcf: -200, freeCashFlow: 1700, status: 'estimate' },
            { year: '2030E', ocf: 2800, icf: -600, fcf: -250, freeCashFlow: 2200, status: 'estimate' },
        ],
        conversionNote:
            'Cash Conversion Ratio = OCF / Net Income。SaaS 健康水位 >1.2x，Circle 2024-2025 约 1.5-2.0x（含营运资本改善）。2026+ 预期稳定在 1.3-1.5x。重资产公司通常 <1x，Circle 是轻资产金融模型，现金转化优于平均。',
        keyRisks: [
            '利率骤降：OCF 与 reserve income 同步下滑，2026-2028 降息 200bp → OCF 减少 $400-500M',
            '分销协议重谈（2026 Q3）：若 Coinbase 要求更高比例 → OCF 立即受损',
            'USDC 流通突降（SVB 级事件）：赎回集中会迫使短期资产抛售，可能带来一次性损失',
            'Arc + CPN 投入期：2026-2027 研发与市场费用上升，OCF 增速可能跟不上营收增速',
        ],
    },

    historicalValuation: {
        narrative:
            'Circle 2025-06 才上市，历史不长。**IPO 首日 $31 → 高点 $298 → 当前 $106**，12 个月波动 650%。forward EV/Sales 区间 5-20x。当前 ~6.5x 2026E 处于上市以来 **35% 分位**（偏便宜），但**绝对估值仍需对标 Payment 行业 5-10x**，不能说明显低估。',
        history: [
            { period: '2025-Q2 (IPO)', evSales: 8, note: 'IPO 定价 $31' },
            { period: '2025-Q3', evSales: 20, note: 'GENIUS Act + Follow-on $130' },
            { period: '2025-Q4', evSales: 18, note: '高点 $298' },
            { period: '2026-Q1', evSales: 10, note: '回调至 $130' },
            { period: '2026-Q2 (当前)', evSales: 6.5, note: '$106 当前位置' },
        ],
        currentPercentile: '35%',
        verdict: 'fair',
    },

    downsideMetrics: {
        narrative:
            '只看期望 15.1% CAGR 是 research theater。基于 4 档情景，Circle 10Y **情景标准差约 $118.6B**（~110% 期望值）。**5Y 内亏损 30%+ 的概率约 35%**——利率下行 + Coinbase 分成恶化情境下，回撤 40% 以上不是小概率事件。这是决定"3-6% 仓位还是 10%+"的关键变量。',
        scenarioStdDev: 119,
        sharpeLike: 0.68,
        probLoss30Pct5Y: 35,
        maxDrawdownEstimate: '-45% 到 -65%（IPO 后到高点 $298 → 当前 $106 已跌 64%，再现可能性中等）',
        downsideToUpsideRatio: '下行 1 vs 上行 5（单次下跌 $10B，单次上冲 $55B）',
    },

    sensitivity: {
        narrative: '哪个变量对 10Y 期望市值最敏感？按单变量 ±1σ 扰动排序 ——',
        variables: [
            { variable: '美联储终端利率 ±100bp', downImpact: -55, upImpact: 35, description: '储备收益率直接影响；下行幅度更大（无付息选项对冲）' },
            { variable: 'USDC 流通 2030 $200B vs $400B', downImpact: -60, upImpact: 80, description: '规模决定一切' },
            { variable: 'Coinbase 分成变化 ±5pp', downImpact: -30, upImpact: 25, description: '每 5% 分成对净利影响 ~$300-500M/年' },
            { variable: 'Arc + CPN 营收占比 (2030)', downImpact: -25, upImpact: 90, description: '估值倍数重估的关键 —— 从 10x → 25x EV/S' },
            { variable: 'GENIUS Act 监管松紧', downImpact: -45, upImpact: 30, description: '极端情况下监管突变影响基本盘' },
            { variable: 'Tether 市占下降 ±5pp', downImpact: -20, upImpact: 40, description: 'Tether 失败 = USDC 吃下大部分' },
            { variable: 'EURC + 其他稳定币扩展', downImpact: -10, upImpact: 25, description: 'MiCA 落地后的第二市场' },
        ],
        takeaway:
            '**最敏感三变量：USDC 流通规模、Arc/CPN 营收占比、美联储利率**。每季度追踪这三项，尤其 Arc 主网进展决定"利差 fintech"还是"支付平台"估值倍数。',
    },

    bearPlaybook: {
        scenario: '"悲观：利率下行 + 竞争挤压"（25% 概率）的完整 ruin 路径',
        steps: [
            {
                when: '2026 Q3 - Q4',
                event: '美联储超预期降息至 3% 以下，储备收益率同步下降',
                signal: 'FOMC 点阵图下修；2 年期美债收益率 < 3%',
            },
            {
                when: '2026 Q3',
                event: 'Coinbase 2026 续约要求提高至 55/45 或更恶化',
                signal: 'Coinbase 财报披露 USDC 业务贡献上升；谈判消息泄漏',
            },
            {
                when: '2027 Q1 - Q2',
                event: 'JPMorgan / 花旗 / Goldman Deposit Coin 联合占据美国企业支付 30% 份额',
                signal: '银行财报披露 Deposit Coin 流通 $100B+；企业客户从 USDC 流失',
            },
            {
                when: '2027 Q3',
                event: 'Arc L1 TVL 停滞在 $5B 以下，代币化资产竞争被 Ethereum/Solana 吃掉',
                signal: 'Arc TVL / DEX 交易量连续 3 个季度无增长；BlackRock BUIDL 继续留在以太坊',
            },
            {
                when: '2028',
                event: 'Tether 通过墨西哥 / 阿联酋子公司获得北美接入，USDC 海外优势进一步被削弱',
                signal: 'Tether OCC 或等效牌照公告',
            },
            {
                when: '2029-2030',
                event: 'Circle 沦为"纯利差 fintech"，估值倍数压缩至 3-5x EV/S；市值稳定在 $15-25B',
                signal: 'Arc + CPN 营收占比仍 < 10%；连续季度 reserve income 下滑',
            },
        ],
        exitTrigger:
            '任一步骤在时间表前 1 个季度提前发生 → **减仓 50%**。连续 2 条发生 → **清仓观望**。特别关注：Coinbase 续约条款 + Arc 主网 TVL 两项"先行指标"。',
    },

    capitalAllocation: {
        narrative:
            'Circle 的资本配置画像偏"被动储备管理 + 被动派息"——核心资产是 USDC 储备（$64.2B Circle Reserve Fund 外包给 BlackRock），真正可配置的增量资本很少。Arc + CPN 新业务是主要资本投向但 ROIIC 尚未验证。',
        scores: [
            { dimension: 'ROIIC', label: '增量资本回报率', score: 2, detail: '储备利息并非真正 ROIIC；Arc / CPN 增量投入的回报要 2027+ 才能评估', evidence: 'Q4 2025 年报' },
            { dimension: 'Buyback', label: '回购节奏', score: 2, detail: 'IPO 后 2025-2026 未有大规模回购；优先融资扩张', evidence: '2025 DEF 14A' },
            { dimension: 'Dividend', label: '股息政策', score: 1, detail: '无股息', evidence: '公司披露' },
            { dimension: 'M&A', label: '并购命中率', score: 3, detail: '2018 收购 Centre Consortium 完整 USDC 权益成功；Bitstamp 级并购尚未出现', evidence: '2018 CC 收购历史' },
        ],
        overallGrade: 'C',
        historicalROIIC: 'N/A (储备业务结构性地难以测算 ROIIC)',
    },

    gapAnalysis: {
        narrative:
            'Circle 2026 的关键 gap 不在营收而在"美联储利率假设"。卖方共识假设利率维持 4%+，管理层指引偏保守，但本分析假设 2026 H2 降息至 3-3.5%——这是最容易"爆雷"的变量。',
        rows: [
            { metric: '2026 营收', guidance: '$3.8-4.2B', consensus: '$3.9B', selfAssumption: '$4.0B', gap: '基本一致', risk: 'low' },
            { metric: '2026 Reserve Income', guidance: '未直接指引', consensus: '$3.2B (假设利率 4%)', selfAssumption: '$3.0B (假设降至 3.5%)', gap: '-6% vs 共识', risk: 'medium', note: '取决于美联储' },
            { metric: '2026 Coinbase 分成占比', guidance: '未披露', consensus: '维持 ~56%', selfAssumption: '略降至 50-55%', gap: '-5pp 乐观', risk: 'high', note: '2026 Q3 续约是关键' },
            { metric: 'USDC 2026 末流通', guidance: '未指引', consensus: '$95-110B', selfAssumption: '$100B', gap: '中值', risk: 'medium' },
            { metric: '2026 Adj. EBITDA margin', guidance: '未指引', consensus: '20-25%', selfAssumption: '~20%', gap: '-3pp 保守', risk: 'medium' },
        ],
        takeaway:
            '**最关键 Gap：Coinbase 2026 分成续约条款**。若续约时 Coinbase 要求提高分成（例如 on-platform 100/0 改为 80/20），Circle 净利率会立即压缩 5-8pp。这是不可量化但可监测的风险，Q3 2026 谈判消息是先行指标。',
    },

    benchmarkComparison: {
        narrative:
            'Circle 10Y 期望 CAGR 15.1% vs 被动 60/40 组合 7.8%——超额 7.3pp，**marginal justify 3-5% 仓位**。但这 7pp 超额高度依赖"利率维持 + Coinbase 续约不恶化"两个假设——任一崩坏，超额会直接腰斩。',
        alternatives: [
            { name: 'SPY (S&P 500)', ticker: 'SPY', expectedReturn5Y: 9, expectedReturn10Y: 10, note: '美国宽基' },
            { name: 'QQQ (纳斯达克 100)', ticker: 'QQQ', expectedReturn5Y: 10, expectedReturn10Y: 12, note: '科技权重' },
            { name: '60/40 (SPY + TLT)', expectedReturn5Y: 7, expectedReturn10Y: 8, note: '经典稳健' },
            { name: '10Y 美债 (TLT)', ticker: 'TLT', expectedReturn5Y: 4, expectedReturn10Y: 4.5, note: '无风险' },
            { name: 'XLF (金融 ETF)', ticker: 'XLF', expectedReturn5Y: 8, expectedReturn10Y: 9, note: 'Fintech 对照' },
        ],
        selfReturn5Y: 10.5,
        selfReturn10Y: 15.1,
        excessReturn5Y: 3.5,
        excessReturn10Y: 7.3,
        justifiesPosition: 'marginal',
        takeaway:
            '**超额 7pp 处于"边缘 justify"区间**。建议 3% 起步，只有 Arc 主网成功 + Coinbase 续约不恶化两个先行信号确认后再加到 5%。如果你已持 Coinbase 5%，不再需要 Circle（两者 PnL 耦合 0.85）。',
    },

    trackRecord: {
        narrative:
            '本分析锚定 2026-04-17。以下 6 条是未来 12-18 个月的可验证命题，2027 Q1 回看建立第一轮 hit rate。',
        assumptions: [
            { assumption: '2026 Q4 USDC 流通 ≥ $95B', setAt: '2026-04-17', targetDate: '2027-01-31', targetValue: '≥ $95B', verdict: 'pending' },
            { assumption: 'Coinbase 2026 续约 Circle 分成 ≥45%', setAt: '2026-04-17', targetDate: '2026-10-31', targetValue: 'Circle ≥ 45%', verdict: 'pending', note: '结构性核心' },
            { assumption: 'Arc L1 2026 年内主网上线', setAt: '2026-04-17', targetDate: '2026-12-31', targetValue: 'mainnet live', verdict: 'pending' },
            { assumption: '美联储 2026 终端利率维持 ≥3%', setAt: '2026-04-17', targetDate: '2026-12-31', targetValue: 'FedFunds ≥3%', verdict: 'pending' },
            { assumption: '2026 Adj. EBITDA margin ≥18%', setAt: '2026-04-17', targetDate: '2027-03-31', targetValue: '≥18%', verdict: 'pending' },
            { assumption: 'GENIUS Act 2026 内无不利修订', setAt: '2026-04-17', targetDate: '2026-12-31', targetValue: '无修订', verdict: 'pending' },
        ],
        hitRate: 'N/A (全部 pending · 首次建立 track record)',
    },

    correlation: {
        narrative:
            'Circle 不是独立资产，它的涨跌 **70% 由利率 + 加密情绪驱动**。如果你已持有 Coinbase / 比特币 / 以太坊 / Visa，加 Circle 的**边际多元化有限**。真正的 hedge 应该是**利率上行受益资产 + 去中心化金融资产**。',
        rows: [
            { asset: 'Coinbase (COIN)', beta: 1.4, correlation: 0.85, hedgeValue: 'low', note: '高度相关（Coinbase 拿走 56% Circle 营收，完全耦合）' },
            { asset: '比特币 (BTC)', beta: 0.9, correlation: 0.65, hedgeValue: 'medium', note: '加密情绪主导' },
            { asset: '以太坊 (ETH)', beta: 1.0, correlation: 0.70, hedgeValue: 'low', note: '稳定币主要流通在 ETH' },
            { asset: 'Visa (V)', beta: 0.5, correlation: 0.45, hedgeValue: 'medium', note: '支付行业对照' },
            { asset: 'Robinhood (HOOD)', beta: 1.2, correlation: 0.60, hedgeValue: 'low', note: '加密+利率双敏感' },
            { asset: '10Y 国债 (TLT)', beta: -0.4, correlation: -0.50, hedgeValue: 'high', note: '降息周期反向对冲（Circle 怕降息）' },
            { asset: '黄金 (GLD)', beta: -0.2, correlation: -0.20, hedgeValue: 'medium', note: '宏观避险；数字美元争夺战时上涨' },
        ],
        suggestedHedge:
            '如果 Circle 占组合 3-6%，建议搭配 5-8% TLT（降息受益）+ 2-3% GLD（美元信任危机对冲）。加密熊市 + 降息组合是 Circle 最大噩梦，上述组合能抵消 30-50% 的下行。另外，**不要同时持有 Circle 和 Coinbase**——它们是"同一个 PnL"的两面。',
    },
}
