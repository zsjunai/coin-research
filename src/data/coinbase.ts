import type { CompanyDetail } from '@/types/company'

export const coinbase: CompanyDetail = {
    id: 'coinbase',
    ticker: 'NASDAQ:COIN',
    name: 'Coinbase Global, Inc.',
    tagline:
        '美国加密行业最高合规身位（OCC 信托牌照 · 标普 500 成员）。收入结构已从 2020 年"96% 交易费"转型为"59% 交易 + 41% 订阅与服务"，Deribit 并购 + Base L2 + USDC 分成构成三重反周期护城河。核心争议：能否在美国衍生品、RWA、稳定币支付三大战场同时守住身位？',
    date: '2026-04-17',

    priceCards: [
        { label: '当前股价', value: '$167.85', sub: '2026-04-17 收盘', cls: 'cyan' },
        { label: '52 周波动', value: '$142 – $440', sub: 'IPO 后加密牛熊周期', cls: 'purple' },
        { label: '市值', value: '~$43B', sub: '约 256M 股稀释', cls: 'purple' },
        { label: '分析师共识 PT', value: '$261.94', sub: '27 家 · Buy 倾向', cls: 'cyan' },
        { label: '2025 营收', value: '$7.18B', sub: '+9.4% YoY', cls: 'green' },
        { label: '现金及等价物', value: '$11.29B', sub: '+32% YoY', cls: 'green' },
    ],

    keyFacts: {
        '2025 营收': '$7.18B (+9.4% YoY)',
        '2025 交易营收': '~$4.24B (~59%)',
        '2025 订阅与服务': '$2.80B (+23% YoY · 41%)',
        'Q4 2025 EPS': '$0.66 (miss $1.05)',
        'Q1 2026 S&S 指引': '$550 - 630M',
        'USDC 分成收入': '~$1.5B (2025 年)',
        'Coinbase One 订阅': '~1M (2025 末)',
        'Q3 2025 月活交易用户': '9.3M',
        'Base L2 2025 营收': '$75.4M (L2 赛道 62%)',
        'Base L2 TVL (2026-03)': '$7.8B (+23% WoW)',
        '标普 500 纳入': '2025-05 (加密第一股)',
        'OCC 国家信托牌照': '2026-04-02 条件批准',
    },

    contracts: [
        { customer: 'Circle (USDC 分销协议)', amount: '~$1.5B/年', years: '3 年 · 2026 续约', detail: '平台内 USDC 100% 归 Coinbase；平台外 50/50；下一轮谈判 2026 年进行' },
        { customer: 'Deribit 并购', amount: '$2.9B (现金 + 股票)', years: '2025-05 签约 · 2025-Q3 完成交割', detail: '收购全球最大加密期权交易所，2025 年 10 月单月成交 $266B 创历史' },
        { customer: 'Base Network (OP Stack)', amount: '战略合作', years: '长期', detail: '基于 Optimism OP Stack 的 L2 链，2025 年营收增长 30 倍，TVL 占 L2 46%' },
        { customer: 'BlackRock iShares Bitcoin ETF 托管', amount: '未披露具体费率', years: '长期', detail: 'Coinbase 为 IBIT 等多个 BTC/ETH 现货 ETF 提供托管服务' },
    ],

    subsidiaries: [
        { name: 'Base Network', desc: '以太坊 L2（OP Stack），2025 营收 $75.4M', stake: '全资', value: '代币化后隐含 $10-30B 独立估值' },
        { name: 'Deribit', desc: '全球最大加密期权交易所（$1T+ 年交易量）', stake: '全资', value: '$2.9B 收购价 + 2026 协同空间' },
        { name: 'Coinbase International Exchange', desc: '百慕大持牌衍生品交易所', stake: '全资', value: '永续合约 + 保证金交易' },
        { name: 'Coinbase Custody', desc: '机构托管业务，已获 OCC 信托牌照', stake: '全资', value: '2026 后可托管证券 / 代币化资产' },
        { name: 'Coinbase Ventures', desc: 'VC 基金，已投 >400 家加密初创', stake: '全资', value: '未披露；隐含 $3-5B 组合价值' },
    ],

    bullPoints: [
        { title: '收入结构大幅多元化', body: '2020 → 2025：交易费占比从 96% 降至 59%；订阅与服务（USDC + 质押 + 托管 + Coinbase One）从 4% 升至 41%，反周期能力极大提升' },
        { title: 'Deribit 并购打开衍生品', body: '$2.9B 收购全球最大加密期权所，2025-10 单月成交 $266B 创新高；加密衍生品 TAM 是现货 3-5 倍' },
        { title: 'Base L2 增长 30x', body: '2025 年 Base 营收从 $2.5M/月 → $75M/年（30 倍），TVL $7.8B 占 L2 赛道 46%；若 2026 发币可额外释放 $10-30B 估值' },
        { title: '美国监管"亲儿子"', body: 'OCC 国家信托牌照（2026-04）、标普 500 成员（2025-05）、SEC 案件和解；是唯一可被 401(k)/养老金配置的纯加密标的' },
        { title: '现金流极强 + 干净资产负债表', body: '$11.29B 现金，长期债 $3.5B，净现金 $8B+。2025 自由现金流 $1.6B，随加密周期可翻 3x' },
        { title: 'USDC 分成制度化收入', body: '2025 年从 Circle 分得 $1.5B，占营收 21%；Coinbase 持 USDC 流通 22%，机构化粘性' },
    ],

    bearPoints: [
        { title: '费率长期下行压力', body: 'Robinhood 零佣金 + Binance 全球规模 + CME 24/7 期货 + Kraken 深度。Coinbase 高费率（0.4-0.6%）不可持续' },
        { title: 'USDC 分成结构反噬', body: '50% off-platform + 100% on-platform 对 Coinbase 有利，但 Circle 正努力降低依赖（Grab/Nubank/Mercado Libre 海外扩张），长期分成比例只会下降' },
        { title: '加密周期高度 β', body: '营收与 BTC 价格相关系数 > 0.85。熊市时交易费可一夜减半，2022 年曾单季营收下跌 70%' },
        { title: '代币化证券多头竞争', body: 'Coinbase / Binance / Kraken 同日发布代币化股票产品，Robinhood/Schwab/Fidelity 也进军。先发优势难转化为独占' },
        { title: '国际扩张受限', body: 'Binance 全球市占 40-55%，Coinbase 仅 6.8%。美国以外市场规模 3x 美国，但 Coinbase 品牌/合规优势无法快速复制' },
        { title: '估值仍需加密牛市支撑', body: '当前 $43B 市值隐含 6x 2025 营收；若 2026-2027 熊市来临，EV/Sales 可压缩至 3x（市值回 $20-25B）' },
    ],

    scenarios: [
        {
            name: '乐观: 加密界的"纳斯达克"+ 衍生品 + 代币化证券三合一',
            cls: 'bull',
            prob: 18,
            y5Mcap: '$150 – 250B',
            y5Value: 200,
            y10Mcap: '$500 – 800B',
            y10Value: 650,
            desc: '衍生品规模翻 5 倍（Deribit 协同）+ Base 代币化带来 $20B+ 增量 + 代币化证券成为主流；2030 年营收 $30B+，P/E 30x',
        },
        {
            name: '中性: 美国加密龙头持续 · 周期性波动',
            cls: 'neutral',
            prob: 50,
            y5Mcap: '$50 – 90B',
            y5Value: 70,
            y10Mcap: '$100 – 200B',
            y10Value: 150,
            desc: '现货 + 衍生品 + 订阅均匀发展，随加密周期 1.5-2 倍波动但长期增长；2030 年营收 $12-18B，EV/Sales 8-10x',
        },
        {
            name: '悲观: 费率挤压 + 代币化证券未成主流',
            cls: 'bear',
            prob: 25,
            y5Mcap: '$20 – 35B',
            y5Value: 28,
            y10Mcap: '$30 – 60B',
            y10Value: 45,
            desc: '交易费率被挤压至 0.15-0.2%；代币化证券停留在 $50B 级别；Base 被其他 L2 反超；2030 年营收 $10-12B，P/E 15-20x',
        },
        {
            name: '尾部: 监管逆转 / 重大黑客 / 信任危机',
            cls: 'bear',
            prob: 7,
            y5Mcap: '$10 – 15B',
            y5Value: 12,
            y10Mcap: '$15 – 30B',
            y10Value: 22,
            desc: 'SEC/CFTC 反复修订监管；FTX 级黑客事件；USDC 脱锚触发全行业挤兑；或 Trump 政策转向后加密风向剧变',
        },
    ],

    tenXGene: [
        { dim: '软件边际成本 · 规模化杠杆', tenBagger: '边际成本 ≈ 0', nebius: '交易撮合近零，但合规成本刚性（~$1B/年）', status: 'yellow' },
        { dim: '网络/平台效应', tenBagger: '显著', nebius: '深度流动性 + ETF 托管 + Base 生态 = 三层网络效应', status: 'green' },
        { dim: '数据闭环 / 专属资产', tenBagger: '独占数据 / IP / 规模', nebius: 'USDC 分成 + OCC 牌照 + S&P500 稀缺性 + 9.3M 活跃用户', status: 'green' },
        { dim: '毛利率 · 定价权', tenBagger: '60-80% 可持续', nebius: '毛利率 ~80%，但交易费率存在长期下行压力', status: 'yellow' },
        { dim: '消费者触点 / 品牌', tenBagger: '直接 C 端 / 开发者心智', nebius: '美国加密第一品牌（1M Coinbase One 订阅），欧美用户心智', status: 'green' },
        { dim: '再投资空间 · S-curve', tenBagger: '高 ROIC + TAM 够大', nebius: '加密 TAM 2030 $15T，衍生品 TAM 3-5x 现货，空间巨大', status: 'green' },
        { dim: '管理层 · 跨代际转型', tenBagger: '有过 0→$30B 记录', nebius: 'Brian Armstrong 执掌 12 年，带领团队穿越两次加密牛熊', status: 'green' },
    ],

    weightedExpectation: {
        currentMcap: 43,
        y5: {
            expectedMcap: 79,
            multiplier: 1.83,
            cagr: 12.9,
        },
        y10: {
            expectedMcap: 205,
            multiplier: 4.76,
            cagr: 16.9,
        },
        breakdown: [
            { scenario: 'A. 加密纳斯达克', prob: 18, y5Mid: 200, y10Mid: 650, y5Contrib: 36, y10Contrib: 117 },
            { scenario: 'B. 龙头持续', prob: 50, y5Mid: 70, y10Mid: 150, y5Contrib: 35, y10Contrib: 75 },
            { scenario: 'C. 费率挤压', prob: 25, y5Mid: 28, y10Mid: 45, y5Contrib: 7, y10Contrib: 11 },
            { scenario: 'D. 黑天鹅', prob: 7, y5Mid: 12, y10Mid: 22, y5Contrib: 1, y10Contrib: 2 },
        ],
    },

    peerName: 'Robinhood (HOOD)',
    coreWeaveCompare: [
        { metric: '2025 营收', nbis: '$7.18B', cwv: '~$4.2B', winner: 'nbis' },
        { metric: '加密交易量', nbis: '$1.2T (2025)', cwv: '~$450B', winner: 'nbis' },
        { metric: '月活用户', nbis: '9.3M (交易)', cwv: '~24M (总)', winner: 'cwv' },
        { metric: 'ARPU (年化)', nbis: '~$770', cwv: '~$191 (+82% YoY)', winner: 'nbis' },
        { metric: 'Adj. EBITDA margin', nbis: '~30%', cwv: '~45%', winner: 'cwv' },
        { metric: '合规身位', nbis: 'OCC 信托 · S&P500', cwv: 'SEC 注册券商', winner: 'nbis' },
        { metric: '衍生品', nbis: 'Deribit + CIE + 美国 Futures', cwv: '仅美国期货', winner: 'nbis' },
        { metric: '国际化', nbis: '100+ 国家', cwv: '英国/欧盟初步', winner: 'nbis' },
    ],

    analysts: [
        { firm: 'Bernstein (最高)', target: 330, rating: 'Outperform' },
        { firm: '共识 (27 家)', target: 262, rating: 'Buy' },
        { firm: 'Rothschild / Redburn', target: 254, rating: 'Buy' },
        { firm: 'Goldman Sachs', target: 225, rating: 'Buy' },
        { firm: 'Jefferies', target: 210, rating: 'Buy' },
        { firm: 'Barclays (最低)', target: 140, rating: 'Underweight' },
    ],

    watchlist: [
        { indicator: '现货交易量 (月度)', strongSignal: '> $250B/月', baseSignal: '$80-180B/月', weakSignal: '< $50B/月' },
        { indicator: 'Coinbase One 订阅', strongSignal: '> 3M', baseSignal: '1-2M', weakSignal: '< 1M 停滞' },
        { indicator: 'Base L2 营收 (年化)', strongSignal: '> $300M', baseSignal: '$75-200M', weakSignal: '< $50M 下滑' },
        { indicator: 'Deribit 月成交', strongSignal: '> $350B/月', baseSignal: '$150-280B/月', weakSignal: '< $80B/月' },
        { indicator: 'USDC 持仓占流通', strongSignal: '> 30%', baseSignal: '20-28%', weakSignal: '< 15% 流失' },
    ],

    finalQuote:
        '<strong>Coinbase 不是交易所，是美国加密行业的"监管壁垒"本身</strong>。它的三大护城河是后来者无法复制的：①OCC 信托 + S&P 500 的合规身位；②USDC 分成的结构性现金流；③Base 的生态卡位。但它同样不是 Mag 7——<strong>上行依赖加密整体 TAM 膨胀</strong>，周期性无法完全消除。合理位置：组合里的"加密 β 敞口"，而非独立持仓。',

    revenueChart: {
        labels: ['2022 Revenue', '2023 Revenue', '2024 Revenue', '2025 Revenue', '2026E Revenue'],
        values: [3194, 3108, 6564, 7180, 8500],
        kinds: ['revenue', 'revenue', 'revenue', 'revenue', 'revenue'],
    },

    overview: {
        founded: '2012 · 由 Brian Armstrong 与 Fred Ehrsam 在旧金山创立',
        headquarters: '美国 · 全分布式（无总部，Remote-First）',
        incorporation: '美国 Delaware',
        employees: '~3,700 (2025 末)',
        listing: 'NASDAQ · COIN · 2021-04 直接上市 (Direct Listing)',
        history: [
            { year: '2012', event: 'Brian Armstrong + Fred Ehrsam 于 YC 创立', tag: '创立' },
            { year: '2014', event: '成为第一个获得纽约 BitLicense 的交易所', tag: '里程碑' },
            { year: '2017', event: '加密牛市用户数突破 2000 万', tag: '增长' },
            { year: '2021-04', event: 'NASDAQ 直接上市，IPO 定价 $250，首日最高 $429', tag: 'IPO' },
            { year: '2022', event: '加密熊市，股价跌至 $31，团队裁员 18%', tag: '危机' },
            { year: '2023-06', event: 'SEC 起诉 Coinbase 提供未注册证券（后和解）', tag: '诉讼' },
            { year: '2023-08', event: '推出 Base L2 主网', tag: '产品' },
            { year: '2024-01', event: '为 BlackRock IBIT 等 BTC 现货 ETF 提供托管', tag: '里程碑' },
            { year: '2024-11', event: 'Trump 胜选 + SEC 案件取消，加密监管迎来拐点', tag: '关键节点' },
            { year: '2025-05', event: '宣布 $2.9B 收购 Deribit', tag: '并购' },
            { year: '2025-05', event: '纳入标普 500 指数（加密行业第一家）', tag: '里程碑' },
            { year: '2025-07-17', event: 'GENIUS Act 签署，USDC 业务获联邦法律基础', tag: '监管' },
            { year: '2025-Q3', event: 'Deribit 交割完成；Q3 月活交易用户 9.3M', tag: '整合' },
            { year: '2026-02', event: 'Q4 2025 EPS $0.66 低于预期 $1.05', tag: '业绩' },
            { year: '2026-04-02', event: 'OCC 条件批准国家信托公司牌照', tag: '监管' },
            { year: '2026-04-17', event: '股价 $167.85，市值 ~$43B', tag: '当前' },
        ],
        businessModel:
            '三层收入结构：①**交易费**（零售 0.4-0.6%、机构 0.05-0.1%）→ 2025 占 59%；②**订阅与服务**（USDC 分成 ~$1.5B + 质押 ~$600M + 托管 ~$300M + Coinbase One ~$150M + 稳定币利息）→ 占 41%；③**新业务**（Base L2 费用、Deribit 期权费、代币化证券、CDP Nodes）。核心战略：把"加密周期 β"转化为"稳定订阅 + 基础设施费"。',
        revenueMix: [
            { name: '交易营收 (Transaction)', pct: 59, note: '零售 + 机构撮合费' },
            { name: '订阅与服务 (S&S)', pct: 41, note: 'USDC + 质押 + 托管 + One' },
            { name: '其中 USDC 分成', pct: 21, note: '占总营收，2025 约 $1.5B' },
            { name: '其中 质押收益', pct: 8, note: 'ETH / SOL 等' },
            { name: '其中 托管 + One', pct: 6, note: 'ETF 托管 + 订阅' },
            { name: '其他 (Base 等)', pct: 6, note: 'Base 2025 $75M，开发者 API' },
        ],
    },

    team: [
        {
            name: 'Brian Armstrong',
            role: 'CEO · 联合创始人 · 董事长',
            background:
                '1983 年生于圣何塞，Rice 大学计算机 + 经济学双学位。Airbnb 软件工程师出身。2012 年 YC 孵化 Coinbase，独自领导 13 年。加密行业头号华盛顿代言人（Fairshake Super PAC 核心支持者，2024 年推动 Trump 政府加密政策）。',
            since: '2012',
            rating: 5,
        },
        {
            name: 'Emilie Choi',
            role: 'President & COO',
            background:
                '前 LinkedIn 全球运营副总裁。2018 年加入 Coinbase 主导国际化与并购。Deribit 收购谈判核心执行者。',
            since: '2018',
            rating: 5,
        },
        {
            name: 'Alesia Haas',
            role: 'CFO',
            background:
                '前 OZ 资本管理 CFO、美银投行 MD。2018 年加入，主导 2021 直接上市和后续资本运作。在加密与传统金融之间是极少数"两边都懂"的 CFO。',
            since: '2018',
            rating: 4,
        },
        {
            name: 'Paul Grewal',
            role: 'Chief Legal Officer',
            background:
                '前联邦地方法院法官、Facebook 副总法律顾问。2020 年加入，主导 SEC 诉讼防御与 GENIUS Act 游说工作。加密行业最具影响力的 CLO。',
            since: '2020',
            rating: 5,
        },
        {
            name: 'Jesse Pollak',
            role: 'Head of Base · Engineering SVP',
            background:
                '前 Clef 联合创始人。2015 年加入 Coinbase，主导 Wallet / Base / Onchain Summer 全系列创新。Base 是他主导的"内部创业"，2025 年营收增长 30 倍即其战果。',
            rating: 5,
        },
    ],

    shareholders: [
        { name: 'Brian Armstrong (含信托)', pct: '~17-19%', type: '创始人', note: '双重股权结构，B 类 20x 投票权' },
        { name: 'Fred Ehrsam', pct: '~4-5%', type: '联合创始人', note: '已退出运营，持股' },
        { name: 'Vanguard', pct: '~7-8%', type: '被动基金', note: '指数持仓' },
        { name: 'BlackRock', pct: '~6-7%', type: '被动 + 主动', note: 'iShares Bitcoin ETF 关系' },
        { name: 'Andreessen Horowitz (a16z)', pct: '~3-5%', type: '早期 VC', note: '2013 A 轮起持有' },
        { name: 'ARK Invest', pct: '~2-3%', type: '主动管理', note: 'Cathie Wood 长期看多' },
        { name: '公众流通股 + 其他机构', pct: '~55%', type: '散户 + 机构', note: 'NASDAQ 高流动性' },
    ],

    advantages: [
        {
            title: 'OCC 国家信托牌照 + 标普 500 双重身位 (独特性 ★★★★★)',
            body: '2026-04-02 OCC 条件批准国家信托牌照，成为首批持牌加密机构；2025-05 纳入标普 500。这让 Coinbase 是唯一可被 401(k)、州/市政养老金、机构保险资金配置的纯加密标的。任何其他加密公司至少落后 3-5 年。',
            evidence: 'OCC 2026-04-02 官方公告；S&P Dow Jones 2025-05 指数调整公告',
        },
        {
            title: 'USDC 分成结构性现金流 (护城河 ★★★★★)',
            body: '2018 年与 Circle 签订分销协议（当时 Coinbase 是 Centre Consortium 联合创始人）。协议明文：平台内 USDC 100% 归 Coinbase，平台外 50/50。2025 年此项分得 $1.5B，占营收 21%。协议 2026 年续约，但结构性条款难以根本推翻。',
            evidence: 'Circle S-1 招股书分销协议披露；JPMorgan 2025-07 研报',
        },
        {
            title: '收入结构反周期 (韧性 ★★★★★)',
            body: '2020 年交易费占 96%、2025 年降至 59%；订阅与服务（USDC + 质押 + 托管 + Coinbase One）从 4% 升至 41%。这让 Coinbase 在加密熊市时的下行保护结构性增强——2022 年熊市时收入跌 70%，下次熊市预计仅 -30-40%。',
            evidence: 'S&P Global 2025-11 研报；Coinbase 年报',
        },
        {
            title: 'Deribit 并购 → 全球衍生品最强身位 (规模 ★★★★★)',
            body: '$2.9B 现金+股票收购全球最大加密期权所。Deribit 2025-10 单月成交 $266B 创历史新高。加密衍生品 TAM 是现货 3-5 倍，Coinbase 借 Deribit 一举进入全球前列（之前衍生品仅 Coinbase International Exchange 百慕大持牌）。',
            evidence: 'Deribit 官网交易量数据；The Block 并购细节',
        },
        {
            title: 'Base L2 内部创业成功 (护城河 ★★★★)',
            body: '基于 Optimism OP Stack 的以太坊 L2 链。2025 年营收 $75.4M（L2 赛道 62%），TVL $7.8B 占 L2 市场 46%。Coinbase 9.3M 月活用户是 Base 的天然引流池。2026 年若发币则额外释放 $10-30B 估值期权。',
            evidence: 'Base 官网数据；RootData L2 市场份额',
        },
        {
            title: '机构托管 + ETF 管道 (粘性 ★★★★)',
            body: '为 BlackRock IBIT、Fidelity FBTC、ARK ARKB 等主流 BTC/ETH 现货 ETF 提供托管服务。2025 年 ETF 总 AUM 已超 $150B，Coinbase 托管占比 >50%。ETF 资金流入 = 托管费 + 未来代币化证券卡位。',
            evidence: '各 ETF 招股书托管协议；公司 Q4 2025 业绩披露',
        },
        {
            title: '政治资本与游说资源 (治理 ★★★★★)',
            body: 'Fairshake Super PAC 2024 年砸 $200M 左右推加密友好议员；2024-11 Trump 胜选直接关联 Coinbase 股价当日 +31%。CLO Paul Grewal 是加密行业最高级别的法律人才，GENIUS Act 立法中的关键幕后推动者。',
            evidence: 'Fairshake 公开捐款记录；Trump 行政令与 GENIUS Act 时间线',
        },
    ],

    disadvantages: [
        {
            title: '交易费率长期下行压力',
            body: '零售仍 0.4-0.6%，对比 Robinhood 的零佣金 + 返佣模式、Binance 的 0.1%、Coinbase 实际市场份额下滑风险持续。2025 年平均费率比 2021 年已降 20%。',
            evidence: '公司披露 Blended Transaction Take Rate；HOOD 2024-2025 ARPU 数据',
        },
        {
            title: 'USDC 分成长期只会被压缩',
            body: 'Circle 正通过 Grab / Nubank / Mercado Libre 扩张海外降低 Coinbase 依赖。2026 续约时 Circle 必然要求更公平条款。长期看 Coinbase 占比会从 60% 降至 40-50%。',
            evidence: 'Coindesk 2025-07 Circle 海外扩张报道；Columbia CLS Blue Sky Blog 分析',
        },
        {
            title: '高加密 β',
            body: '营收与 BTC 价格相关系数 > 0.85。一次加密寒冬可让 Coinbase 股价跌 70%（2022 年曾跌至 $31）。即使订阅化，熊市仍痛苦。',
            evidence: '2021-2022 股价历史；历次加密周期与营收关联分析',
        },
        {
            title: '代币化证券赛道拥挤',
            body: 'Coinbase / Binance / Kraken 同日发布代币化股票；Robinhood / Schwab / Fidelity 跟进。先发优势难转独占，手续费会被压缩到 bps 级别。',
            evidence: 'StockTwits 2026 代币化股票报道',
        },
        {
            title: '全球市占仍低',
            body: 'Binance 全球 40-55%，Coinbase 仅 6.8%。美国以外市场规模是美国 3 倍。Coinbase 在亚洲、拉美、非洲几乎无影响力。',
            evidence: 'CoinMarketCap 交易所排名；Coinbase 国际扩张战略',
        },
        {
            title: '费用基数刚性',
            body: '2025 运营费用 ~$5.5B，其中技术 + 合规 + 营销各占 ~30%。合规开支是绝对不能砍的——这是护城河同时也是成本负担。',
            evidence: '2025 年度 10-K；Q4 2025 股东信',
        },
        {
            title: '双重股权 + Armstrong 控制',
            body: 'B 类股 20:1 投票权，Armstrong 实际控制 50%+ 投票权。独立董事制衡力不足。历史上曾有政治争议（"no politics at work"内部风波）。',
            evidence: 'DEF 14A 代理声明；The Information 历史报道',
        },
    ],

    shortTermCatalysts: [
        {
            when: '2026-05-07',
            event: 'Q1 2026 财报，订阅与服务指引 $550-630M',
            impact: 'positive',
            probability: '已预告',
            magnitude: '±10-15%',
        },
        {
            when: '2026 Q2-Q3',
            event: 'Deribit 与 Coinbase 平台完整集成（保证金互通）',
            impact: 'positive',
            probability: '~80%',
            magnitude: '+8-12%',
        },
        {
            when: '2026 Q3',
            event: 'Circle 2026 分销协议续约谈判',
            impact: 'mixed',
            probability: '~100% 发生',
            magnitude: '+10% 或 -15% (取决条款)',
        },
        {
            when: '2026 H2',
            event: 'Base 发币（已由官方确认探索中）',
            impact: 'positive',
            probability: '~50%',
            magnitude: '+15-30%',
        },
        {
            when: '2026 H2',
            event: '美联储降息路径明朗（USDC 分成直接受影响）',
            impact: 'mixed',
            probability: '降息已开始',
            magnitude: '±10-15%',
        },
        {
            when: '2026 Q4',
            event: 'BTC/ETH 价格走势（加密牛市继续 vs 盘整）',
            impact: 'mixed',
            probability: '不确定',
            magnitude: '±20-40%',
        },
        {
            when: '2027',
            event: '代币化证券规模突破 $1T 标志性事件',
            impact: 'positive',
            probability: '~40%',
            magnitude: '+20%',
        },
        {
            when: '持续',
            event: 'Solana / Ripple ETF 获批后 Coinbase 托管份额扩大',
            impact: 'positive',
            probability: '~60%',
            magnitude: '+3-8%',
        },
        {
            when: '任何时点',
            event: '重大黑客事件或监管突变（SEC 反转）',
            impact: 'negative',
            probability: '低',
            magnitude: '-20-40%',
        },
        {
            when: '任何时点',
            event: 'BTC 暴跌 >30% 触发加密熊市',
            impact: 'negative',
            probability: '~20% / 2 年',
            magnitude: '-30-50%',
        },
    ],

    longTermDrivers: [
        {
            name: '加密 TAM 持续膨胀',
            horizon: '2026-2033',
            body: '全球加密总市值 2026 $3.5T，2030 年预计 $10-15T（3-4x）。衍生品 TAM 是现货 3-5x，RWA 代币化 2030 年预计 $2-5T。Coinbase 凭综合身位可吃下 5-10% 全球 TAM。',
            enabling: 'Trump 政府支持 + GENIUS Act 落地 + 机构配置浪潮 + 401(k) 开放',
        },
        {
            name: '订阅化转型完成 → 估值重估',
            horizon: '2026-2030',
            body: '若订阅与服务占比 2028 年突破 55%，Coinbase 可从 "周期性加密股" 重估为 "fintech SaaS"。估值倍数从 6x EV/S → 12-15x EV/S，直接双倍。',
            enabling: 'Coinbase One 突破 3M + USDC 流通增长 + Base 代币化收入',
        },
        {
            name: 'Base L2 成为"美股级"公链',
            horizon: '2026-2032',
            body: 'Base 已占 L2 赛道 46%。若 2026 发币 + 成为 Ethereum 最大 L2 + 吸引 100+ 主流 dApp，则 Base 本身估值可达 Solana / Sui 量级 ($20-80B)。Coinbase 作为 Base 运营方分享生态价值。',
            enabling: '2026 发币时间窗 + BlackRock BUIDL / iShares 链上部署 + Coinbase 9.3M 用户导流',
        },
        {
            name: '衍生品 + 代币化证券平台化',
            horizon: '2027-2033',
            body: 'Coinbase + Deribit + Coinbase International Exchange 整合后，可提供"现货 + 期货 + 期权 + 代币化股票"全栈。目标：成为"加密界 CME + NASDAQ"。2030 年代币化证券 TAM $5T+，Coinbase 若占 10% 份额 = $1-2B 新营收。',
            enabling: 'SEC 对代币化证券的监管明确 + 机构从传统交易所迁移 + Deribit 协同',
        },
        {
            name: '机构托管 + RWA 代币化卡位',
            horizon: '2026-2032',
            body: 'OCC 信托牌照允许 Coinbase 托管证券 / 债券 / 基金份额。BlackRock BUIDL 等代币化基金 2030 年预计 $500B-1T，Coinbase 若拿下 30% 托管份额 = $300B AUM × 10bp = $300M/年。',
            enabling: 'OCC 国家信托牌照；与 BlackRock / Franklin Templeton 已有合作',
        },
        {
            name: '国际化突破（关键变量）',
            horizon: '2027-2032',
            body: '当前全球市占 6.8%，对比 Binance 40-55% 有 5x 空间。若能拿下欧盟（MiCA 合规优势）和亚洲局部市场（日本、韩国、印度），全球市占可升至 15-20%。',
            enabling: 'MiCA 完整实施 + 新加坡 / 印度 / 巴西本地牌照 + Deribit 国际用户基础',
        },
    ],

    riskMatrix: [
        {
            category: '宏观 / 周期风险',
            level: 'critical',
            summary: '加密周期 β 极高，与 BTC 强相关',
            items: [
                {
                    name: 'BTC 下跌 >30%',
                    body: 'BTC 熊市 → 交易量萎缩 50-70% → 交易费收入腰斩，即使订阅化仍无法完全对冲。',
                    mitigation: 'S&S 占比已达 41%，下次熊市营收预计仅 -30-40%（vs 2022 -70%）',
                },
                {
                    name: '利率下行',
                    body: 'USDC 分成直接取决于短期利率；美联储降息 100bp → USDC 收入 -20%。',
                    mitigation: 'USDC 流通量增长（72% YoY）部分对冲',
                },
            ],
        },
        {
            category: '竞争风险',
            level: 'high',
            summary: 'Robinhood + Binance + Kraken + 传统券商三面围攻',
            items: [
                {
                    name: 'Robinhood 零佣金侵蚀',
                    body: 'HOOD 加密交易零佣金 + Super App 模式，对 Coinbase 高费率形成长期威胁。',
                    mitigation: '机构客户基础稳固 + 衍生品壁垒 + Base 生态',
                },
                {
                    name: 'CME 24/7 期货',
                    body: 'CME 2026 年推出 7x24 比特币 / 以太坊期货，机构衍生品交易可能分流。',
                    mitigation: 'Deribit 在期权深度仍占优；加密永续合约无法被 CME 直接替代',
                },
                {
                    name: '传统券商进入',
                    body: 'Fidelity、Charles Schwab、Morgan Stanley 加速加密产品；BlackRock 自建托管可能性。',
                    mitigation: 'ETF 托管已成既定事实；牌照 + 规模优势短期难以复制',
                },
            ],
        },
        {
            category: '监管 / 政策风险',
            level: 'high',
            summary: 'GENIUS Act 是护城河也是紧箍咒',
            items: [
                {
                    name: '下届政府政策转向',
                    body: '2028 总统大选可能带来反加密政策；SEC 主席人选决定监管走向。',
                    mitigation: 'Fairshake Super PAC 持续投入游说；OCC 牌照锁定合规护城河',
                },
                {
                    name: 'SEC / CFTC 管辖权冲突',
                    body: '加密行业两监管机构管辖权重叠，可能出现新诉讼（BTC/ETH 为商品 vs 证券争议）。',
                    mitigation: '已与 SEC 和解；Paul Grewal 团队强大',
                },
                {
                    name: '国际合规分裂',
                    body: '欧盟 MiCA、新加坡 MAS、阿联酋 VARA 要求差异大，合规成本持续上升。',
                    mitigation: '已获欧盟 MiCA 牌照；Deribit 带来多国合规基础',
                },
            ],
        },
        {
            category: '技术 / 运营风险',
            level: 'medium',
            summary: '黑客事件 + 运维稳定性',
            items: [
                {
                    name: '重大黑客事件',
                    body: '加密交易所是攻击高价值目标。2024 年 Bybit $1.5B 被盗是警告。Coinbase 若发生类似事件股价可能跌 40%+。',
                    mitigation: '冷钱包 + 保险储备 + 顶级安全团队；历史至今零重大事件',
                },
                {
                    name: 'Base L2 安全事故',
                    body: 'L2 链历史上经常有漏洞；Base 一旦 TVL 流失 / 桥梁被攻击，信誉打击巨大。',
                    mitigation: 'OP Stack 已经过实战；多家审计',
                },
            ],
        },
        {
            category: '财务 / 商业风险',
            level: 'medium',
            summary: 'USDC 依赖 + 费用刚性',
            items: [
                {
                    name: 'Circle 分成谈判恶化',
                    body: '2026 续约时 Circle 要求更公平条款（从 100/0 → 80/20 或 60/40 平台内）。',
                    mitigation: '双方共生关系；Coinbase 可威胁推广其他稳定币',
                },
                {
                    name: '运营费用刚性',
                    body: '合规 + 法务 + 安全是刚性支出，熊市时费用率会飙升。',
                    mitigation: '2022 年已证明可裁员 18% 快速调整',
                },
            ],
        },
        {
            category: '治理风险',
            level: 'low',
            summary: 'Armstrong 控制 + 独立董事制衡',
            items: [
                {
                    name: '双重股权',
                    body: 'B 类股 20:1 投票权使 Armstrong 实控 50%+ 投票权，机构投资者制衡有限。',
                    mitigation: '加密行业通例；Armstrong 以长期 alignment 著称',
                },
                {
                    name: 'Armstrong 个人风险',
                    body: '创始人 13 年连续执掌，个人离职 / 健康事件对 Coinbase 打击巨大。',
                    mitigation: 'Emilie Choi (COO) 接班可能性高；双重股权可通过信托过渡',
                },
            ],
        },
        {
            category: 'ESG / 声誉风险',
            level: 'low',
            summary: '加密行业整体声誉波动',
            items: [
                {
                    name: 'BTC 挖矿能耗争议',
                    body: '环保议题可能影响机构投资者（Article 8/9 基金）持仓。',
                    mitigation: 'ETH PoS 后能耗下降 99%；Base 为 L2 能耗极低',
                },
                {
                    name: '洗钱 / 制裁合规',
                    body: '加密被用于规避制裁的压力持续；Coinbase 需持续投入 AML/KYC。',
                    mitigation: 'Chainalysis / TRM 合作；OFAC 合规流程成熟',
                },
            ],
        },
    ],

    profitability: {
        narrative:
            'Coinbase 是**典型的"周期性 + 高运营杠杆"公司**。牛市时每新增 $1 营收可转化 $0.5-0.7 净利（如 2021 年），熊市时运营费用刚性导致利润消失（2022 年净亏损）。**2025 年拐点**：订阅与服务占比达 41%，下次熊市的利润保护结构性增强。**关键观察**：若订阅占比 2028 年突破 55%，Coinbase 可从"周期股"重估为"fintech 基础设施"——估值倍数双倍。',

        incomeStatement: [
            {
                year: '2021 (牛市巅峰)',
                revenue: '$7.84B',
                revenueNum: 7840,
                grossMargin: '~85%',
                opIncome: '+$3.1B',
                ebitda: '+$3.6B',
                ebitdaMargin: '46%',
                netIncome: '+$3.62B',
                eps: '$14.50',
                status: 'actual',
            },
            {
                year: '2022 (熊市)',
                revenue: '$3.19B',
                revenueNum: 3194,
                grossMargin: '~70%',
                opIncome: '-$2.68B',
                ebitda: '-$0.37B',
                ebitdaMargin: '-12%',
                netIncome: '-$2.63B',
                eps: '-$11.40',
                status: 'actual',
            },
            {
                year: '2023',
                revenue: '$3.11B',
                revenueNum: 3108,
                grossMargin: '~75%',
                opIncome: '-$0.13B',
                ebitda: '+$1.12B',
                ebitdaMargin: '36%',
                netIncome: '+$0.10B',
                eps: '$0.38',
                status: 'actual',
            },
            {
                year: '2024',
                revenue: '$6.56B',
                revenueNum: 6564,
                grossMargin: '~80%',
                opIncome: '+$2.20B',
                ebitda: '+$2.65B',
                ebitdaMargin: '40%',
                netIncome: '+$2.58B',
                eps: '$9.48',
                status: 'actual',
            },
            {
                year: '2025',
                revenue: '$7.18B',
                revenueNum: 7180,
                grossMargin: '~78%',
                opIncome: '+$1.80B',
                ebitda: '+$2.10B',
                ebitdaMargin: '29%',
                netIncome: '+$1.60B',
                eps: '$6.00',
                status: 'actual',
            },
            {
                year: '2026E',
                revenue: '$8.0-9.0B',
                revenueNum: 8500,
                grossMargin: '~78%',
                opIncome: '+$2.2-2.8B',
                ebitda: '+$2.5-3.0B',
                ebitdaMargin: '~32%',
                netIncome: '+$2.0-2.5B',
                eps: '$7.5-9.5',
                status: 'guidance',
            },
            {
                year: '2027E',
                revenue: '$10-12B',
                revenueNum: 11000,
                grossMargin: '~78%',
                opIncome: '+$3.0-4.0B',
                ebitda: '+$3.3-4.3B',
                ebitdaMargin: '~35%',
                netIncome: '+$2.7-3.5B',
                eps: '$10-13',
                status: 'estimate',
            },
        ],

        marginEvolution: [
            { year: '2021', gross: 85, ebitda: 46, operating: 40, net: 46, status: 'actual' },
            { year: '2022', gross: 70, ebitda: -12, operating: -84, net: -82, status: 'actual' },
            { year: '2023', gross: 75, ebitda: 36, operating: -4, net: 3, status: 'actual' },
            { year: '2024', gross: 80, ebitda: 40, operating: 34, net: 39, status: 'actual' },
            { year: '2025', gross: 78, ebitda: 29, operating: 25, net: 22, status: 'actual' },
            { year: '2026E', gross: 78, ebitda: 32, operating: 28, net: 25, status: 'guidance' },
            { year: '2027E', gross: 78, ebitda: 35, operating: 31, net: 28, status: 'estimate' },
        ],

        milestones: [
            { year: '2021', milestone: '直接上市 NASDAQ', hit: true, note: '首日市值 $86B' },
            { year: '2025-05', milestone: '纳入标普 500', hit: true, note: '加密行业第一家' },
            { year: '2025-Q3', milestone: 'Deribit 交割完成', hit: true },
            { year: '2026-04', milestone: 'OCC 国家信托条件批准', hit: true, note: '2026-04-02' },
            { year: '2026-Q3', milestone: 'Circle 分销协议续约', hit: false, note: '关键事件' },
            { year: '2026', milestone: 'Base 发币（官方已确认探索）', hit: false, note: '期权价值' },
            { year: '2027', milestone: '代币化证券营收 >$500M', hit: false, note: '估值重估触发' },
            { year: '2028-2030', milestone: '订阅与服务占比 >55%', hit: false, note: 'SaaS 化完成' },
        ],

        unitEconomics: [
            { metric: '月活交易用户', value: '9.3M (Q3 2025)', source: '季报披露' },
            { metric: '零售 ARPU (年化)', value: '~$400', source: '零售营收 / 月活' },
            { metric: '机构 ARPU', value: '~$7,500', source: '机构营收 / 机构账户' },
            { metric: '综合费率 (Blended Take Rate)', value: '~0.36%', source: '交易费 / 交易量' },
            { metric: 'USDC on-platform 占流通', value: '~22%', source: 'Circle S-1 披露' },
            { metric: 'Coinbase One 渗透率', value: '~11%', source: '1M 订阅 / 9.3M 月活' },
            { metric: 'ARR/员工', value: '~$1.9M (2025)', source: '$7.2B / 3,700 员工' },
        ],

        fcfPath:
            '2025 经营性现金流约 $2.0B，自由现金流 $1.6B（低 CapEx 模式）。2026-2028 预计 FCF 稳定在 $2-3B/年，但高度取决于加密牛熊。**轻资产模型**：无数据中心、无 GPU、无存货，CapEx / 营收 <3%。资金主要投向：①合规与法务；②并购（如 Deribit）；③Base 生态激励。',

        keyRisks: [
            '加密熊市来临时交易费可一夜减半，即使 S&S 占 41% 也无法完全对冲',
            '2026 Circle 续约若条款恶化，USDC 分成可能从 $1.5B 降至 $1B',
            'USDC 流通量突然收缩（SVB 级事件）会影响 Coinbase on-platform 份额',
            '代币化证券赛道竞争激烈，手续费可能被压缩至 bps 级',
        ],
    },

    competitiveLandscape: {
        summary:
            '加密交易赛道正从"交易所对决"转向"**三维身位竞争**"：①**合规身位**（Coinbase 独占 OCC 信托 + S&P500）；②**全球规模**（Binance 40-55% 市占无对手）；③**消费者 Super App**（Robinhood ARPU +82% 领跑）。Coinbase 的终局策略是"**美国合规护城河 → 全球衍生品扩张 → 代币化基础设施**"，并以 Base L2 + Deribit 作为差异化武器。',

        competitors: [
            {
                name: 'Coinbase (自身)',
                type: 'specialist',
                ticker: 'COIN',
                revenue2026E: '$8.0-9.0B',
                aiRevenue: '$8.5B (综合)',
                gpuFleet: '9.3M 月活 · 8,000+ 机构',
                backlog: 'Base + Deribit + 代币化证券',
                ebitdaMargin: '~32%',
                marketCap: '~$43B',
                nvidiaLevel: 5,
                threat: 'low',
                strength: 'OCC 信托 · 标普 500 · USDC 分成 · Base L2 · 美国机构首选',
                weakness: '全球市占 6.8% · 费率高 · 高加密 β',
            },
            {
                name: 'Binance',
                type: 'specialist',
                ticker: '未上市',
                revenue2026E: '~$18-22B (估)',
                aiRevenue: '~$20B',
                gpuFleet: '200M+ 注册 · 40-55% 市占',
                backlog: 'BSC / Alpha / Futures',
                ebitdaMargin: '~50% (估)',
                marketCap: 'N/A',
                nvidiaLevel: 3,
                threat: 'high',
                strength: '全球规模 · 现货+衍生品最深流动性 · 亚太主导',
                weakness: '离岸监管风险 · CZ 个人涉案 · 美国市场受限',
            },
            {
                name: 'Robinhood (HOOD)',
                type: 'specialist',
                ticker: 'HOOD',
                revenue2026E: '~$5-6B',
                aiRevenue: '~$2B (加密)',
                gpuFleet: '~24M 用户',
                backlog: '预测市场 · 代币化股票 · Bitstamp',
                ebitdaMargin: '~45%',
                marketCap: '~$55B',
                nvidiaLevel: 2,
                threat: 'high',
                strength: 'ARPU 增速最快 +82% · Super App · 零售粘性',
                weakness: '机构业务弱 · 加密合规层次低于 Coinbase',
            },
            {
                name: 'Kraken',
                type: 'specialist',
                ticker: '未上市 (筹备 IPO)',
                revenue2026E: '~$2.5B',
                aiRevenue: '~$2.5B',
                gpuFleet: '~13M 用户',
                backlog: 'IPO 计划中',
                ebitdaMargin: '~35% (估)',
                marketCap: '~$20B (估)',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: '欧洲合规 + EUR/GBP 深度 · 创始人 Jesse Powell 老牌',
                weakness: '规模仅 Coinbase 1/3 · 业务多元化不足',
            },
            {
                name: 'CME Group',
                type: 'hyperscaler',
                ticker: 'CME',
                revenue2026E: '~$6.5B (加密 <10%)',
                aiRevenue: '~$0.6B (加密)',
                gpuFleet: '传统期货龙头',
                backlog: 'BTC/ETH 期货 24/7',
                ebitdaMargin: '~65%',
                marketCap: '~$90B',
                nvidiaLevel: 2,
                threat: 'high',
                strength: '传统金融龙头 · 机构渠道 · 监管最清晰',
                weakness: '仅期货 · 无现货 / 无代币 / 无 DeFi',
            },
            {
                name: 'Interactive Brokers (IBKR)',
                type: 'hyperscaler',
                ticker: 'IBKR',
                revenue2026E: '~$5B (加密微小)',
                aiRevenue: '~$200M (加密)',
                gpuFleet: '综合券商',
                backlog: '加密现货 + 期货',
                ebitdaMargin: '~70%',
                marketCap: '~$70B',
                nvidiaLevel: 1,
                threat: 'medium',
                strength: '全球券商渠道 · 专业机构服务',
                weakness: '加密是附加业务；粘性弱',
            },
            {
                name: 'Bybit',
                type: 'specialist',
                ticker: '未上市',
                revenue2026E: '~$1.5B (估)',
                aiRevenue: '~$1.5B',
                gpuFleet: '~25M 用户',
                backlog: '衍生品第二',
                ebitdaMargin: '~45% (估)',
                marketCap: 'N/A',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: '永续合约 + 亚太用户',
                weakness: '2024 年被盗 $1.5B · 合规空白',
            },
            {
                name: 'Gemini / Fidelity Crypto',
                type: 'specialist',
                ticker: 'GEMI (待上市)',
                revenue2026E: '~$0.8B',
                aiRevenue: '~$0.8B',
                gpuFleet: 'Gemini 2M · Fidelity 机构',
                backlog: 'NYDFS 牌照',
                ebitdaMargin: '~15%',
                marketCap: '~$6B (估)',
                nvidiaLevel: 3,
                threat: 'low',
                strength: 'Winklevoss 双胞胎家族 · Fidelity 机构信任',
                weakness: '规模小 · 产品线单薄',
            },
        ],

        positioning: [
            { dimension: '合规身位', nebius: 'OCC 信托 + S&P500', industryAvg: '州牌照', leader: 'Coinbase (独占)', nebiusStrong: true },
            { dimension: '2025 营收', nebius: '$7.18B', industryAvg: '$2-3B', leader: 'Binance $18-22B', nebiusStrong: false },
            { dimension: '美国市占', nebius: '~55% (现货)', industryAvg: 'N/A', leader: 'Coinbase', nebiusStrong: true },
            { dimension: '全球市占', nebius: '6.8%', industryAvg: '1-5%', leader: 'Binance 40-55%', nebiusStrong: false },
            { dimension: 'S&S 占比', nebius: '41%', industryAvg: '5-20%', leader: 'Coinbase', nebiusStrong: true },
            { dimension: '衍生品能力', nebius: 'Deribit + CIE + Futures', industryAvg: '部分', leader: 'Binance 规模 / Deribit 期权', nebiusStrong: true },
            { dimension: 'L2 自有链', nebius: 'Base $7.8B TVL', industryAvg: '无', leader: 'Coinbase (独占)', nebiusStrong: true },
            { dimension: 'USDC 分成独占', nebius: '~$1.5B/年', industryAvg: 'N/A', leader: 'Coinbase', nebiusStrong: true },
            { dimension: '零售 ARPU', nebius: '~$400', industryAvg: '$150-300', leader: 'Robinhood $191 (+82%)', nebiusStrong: false },
            { dimension: '机构渠道', nebius: '500+ 机构 + ETF 托管', industryAvg: '30-100 机构', leader: 'Coinbase', nebiusStrong: true },
        ],

        marketShare2026: [
            { name: 'Binance', pct: 45 },
            { name: 'Coinbase', pct: 7 },
            { name: 'Upbit (韩国)', pct: 5 },
            { name: 'OKX', pct: 5 },
            { name: 'Bybit', pct: 5 },
            { name: 'Kraken', pct: 3 },
            { name: 'Robinhood Crypto', pct: 2 },
            { name: '其他 (100+)', pct: 28 },
        ],

        winLoss: [
            {
                scenario: '美国机构现货交易 + ETF 托管',
                winners: 'Coinbase (独占)',
                losers: '所有其他',
                reasoning: 'OCC 信托牌照 + S&P500 身位 + IBIT 等 ETF 托管关系使 Coinbase 在美国机构市场无竞争对手',
            },
            {
                scenario: '全球零售衍生品',
                winners: 'Binance / Bybit',
                losers: 'Coinbase (合规限制)',
                reasoning: 'Binance 永续合约深度 > Coinbase；Coinbase 受美国监管限制无法提供全球无限制杠杆',
            },
            {
                scenario: '加密期权',
                winners: 'Coinbase (收购 Deribit 后)',
                losers: 'Binance / CME',
                reasoning: 'Deribit 是期权市场绝对龙头（$1T+ 年交易量），Coinbase 吞下后独占期权市场',
            },
            {
                scenario: '美国零售 Super App',
                winners: 'Robinhood',
                losers: 'Coinbase (费率高)',
                reasoning: 'HOOD 零佣金 + 股票/加密/期权一体化，在零售 ARPU 增速 +82% 远超 Coinbase',
            },
            {
                scenario: '代币化证券 (美国)',
                winners: 'Coinbase / Robinhood (并列)',
                losers: 'Binance / Kraken (合规不足)',
                reasoning: '两家同步推代币化股票；谁能先拿到 SEC 完整许可谁占先发',
            },
            {
                scenario: '机构 RWA 托管',
                winners: 'Coinbase (OCC 信托)',
                losers: '所有其他',
                reasoning: 'OCC 国家信托可托管代币化证券 / 债券 / 基金，BlackRock BUIDL 合作已铺垫',
            },
            {
                scenario: '欧洲合规交易',
                winners: 'Coinbase (MiCA) / Kraken',
                losers: 'Binance (欧洲受限)',
                reasoning: 'MiCA 完整实施后 Binance 部分欧盟业务受限',
            },
            {
                scenario: 'L2 / 链上金融',
                winners: 'Coinbase Base',
                losers: '无自有 L2 的交易所',
                reasoning: 'Base TVL $7.8B 占 L2 赛道 46%，与 Arbitrum / Optimism 形成三强',
            },
        ],

        structuralTrend:
            '未来 3 年行业结构性变化：①**加密与传统金融合流**（ETF / 代币化证券 / 银行稳定币）→ Coinbase 牌照优势放大；②**衍生品超越现货**（加密期权 + 永续合约 TAM = 现货 3-5x）→ Deribit 并购关键；③**L2 链上金融崛起**（Base / Arbitrum / Optimism 吞食以太坊 dApp）→ Coinbase 运营 Base 独占身位；④**全球去美国化**（新加坡 / 阿联酋 / 香港）→ Coinbase 国际化是最大短板。2028 年前 Coinbase 必须在全球衍生品 + 代币化证券两大新战场占住身位，否则"美国合规龙头"会被压缩为一个地区性生意。',

        tam: {
            narrative:
                '加密 + 衍生品 + 代币化 RWA 三大 TAM 叠加。**现货**：2026 全球日交易量 $100B → 2030 $300-500B；**衍生品**：是现货 3-5x，2030 TAM $1-2T/日；**代币化证券**：2026 $50B → 2030 $5T+。Coinbase 在三大领域都处于 TOP 3 身位。**10x 回报路径**：综合 TAM 膨胀 5x + 市占提升 2x + 估值倍数升级 2x = 20x（理论上限）。实际取 25-30% 达成率即可 10x。',
            points: [
                { year: '2022', totalTam: 1000, neocloudTam: 800, selfRevenue: 3.2, status: 'actual' },
                { year: '2024', totalTam: 2500, neocloudTam: 2000, selfRevenue: 6.6, status: 'actual' },
                { year: '2025', totalTam: 3500, neocloudTam: 3000, selfRevenue: 7.2, status: 'actual' },
                { year: '2026', totalTam: 4500, neocloudTam: 4000, selfRevenue: 8.5, status: 'estimate' },
                { year: '2028', totalTam: 8000, neocloudTam: 7000, selfRevenue: 15, status: 'estimate' },
                { year: '2030', totalTam: 13000, neocloudTam: 11000, selfRevenue: 25, status: 'estimate' },
                { year: '2035', totalTam: 30000, neocloudTam: 25000, selfRevenue: 60, status: 'estimate' },
            ],
            keyNumbers: [
                { label: '2026 加密总市值', value: '$3.5T', sub: '当前', cls: 'cyan' },
                { label: '2030E 加密市值', value: '$10-15T', sub: '~4x 增长', cls: 'purple' },
                { label: '衍生品 TAM 倍数', value: '3-5x 现货', sub: '空间更大', cls: 'purple' },
                { label: '代币化证券 2030E', value: '$5T+', sub: '从 $50B 起', cls: 'green' },
                { label: 'Coinbase 美国市占', value: '~55%', sub: '现货', cls: 'cyan' },
                { label: 'Coinbase 全球市占', value: '6.8%', sub: '对标 Binance 45%', cls: 'red' },
                { label: '10x 所需', value: '全球市占 → 15%+', sub: '或 S&S 占比 >55%', cls: 'red' },
                { label: '加密 CAGR 2026-2030', value: '~30%', sub: '监管友好下', cls: 'purple' },
            ],
            sourcesNote:
                '数据来源：CoinMarketCap 历史市值、The Block 衍生品报告、BCG 代币化预测、Coinbase 季报。2028-2035 为基于 30% 加密 CAGR + 代币化爆发双重假设推演。',
        },

        radar: {
            peer1Name: 'Binance',
            peer2Name: 'Robinhood',
            dimensions: [
                { dim: '2025 营收', self: 7, peer1: 10, peer2: 5 },
                { dim: '合规身位', self: 10, peer1: 3, peer2: 7 },
                { dim: '全球市占', self: 3, peer1: 10, peer2: 2 },
                { dim: '美国市占', self: 10, peer1: 4, peer2: 7 },
                { dim: '衍生品能力', self: 8, peer1: 10, peer2: 3 },
                { dim: 'L2 自有链', self: 10, peer1: 8, peer2: 1 },
                { dim: '收入多元化', self: 9, peer1: 6, peer2: 8 },
                { dim: '零售 ARPU 增速', self: 5, peer1: 6, peer2: 10 },
            ],
            note: '1-10 分主观评分。Coinbase 在合规、美国市占、L2 形状饱满；Binance 在全球规模、衍生品绝对领先；Robinhood 在零售 ARPU 增速独树一帜。三家"不同的赢法"——Coinbase 需要在保住合规优势的同时，通过 Deribit + Base + 国际扩张补齐 Binance 强项。',
        },
    },

    valuation: {
        metrics: [
            { metric: 'EV/Sales (TTM)', value: '~6x', benchmark: 'Fintech 行业 4-8x', read: 'fair' },
            { metric: 'EV/Sales (2026E)', value: '~5x', benchmark: 'Visa/MA 15-20x (对比上限)', read: 'cheap' },
            { metric: 'Forward P/E (2026E)', value: '~20x', benchmark: 'Fintech 15-30x', read: 'fair' },
            { metric: 'Forward P/E (2027E)', value: '~14x', benchmark: '高增长 fintech 平均 20x', read: 'cheap' },
            { metric: 'P/B', value: '~4.5x', benchmark: 'Schwab 2.5x / Robinhood 5.5x', read: 'fair' },
            { metric: '隐含 Base 期权', value: '$0-10B (市场已计部分)', benchmark: 'Solana $80B / Sui $15B', read: 'fair' },
        ],
        sotp: [
            { item: '核心交易业务 (2026E)', valuation: '$22-28B', method: '10x 2026E 交易营收 $5B × 0.45 净利率 ÷ (10% WACC - 4% 增速)', note: '高周期性核心资产' },
            { item: '订阅与服务 (USDC + 质押 + 托管)', valuation: '$18-25B', method: '12-15x 2026E S&S 营收 $3.5B × 0.4 净利率', note: '类 SaaS 估值' },
            { item: 'Deribit 整合价值', valuation: '$5-8B', method: '12x 2026E Deribit EBITDA $450-650M', note: '2026 完整整合后' },
            { item: 'Base L2 (期权)', valuation: '$3-12B', method: 'L2 可比 (Arbitrum $5B / Optimism $3B / zkSync $6B)', note: '2026 发币可翻倍' },
            { item: 'Coinbase Ventures 投资组合', valuation: '$3-5B', method: '按账面 + 已实现变现', note: '400+ 加密初创' },
            { item: '现金净额', valuation: '$5-7B', method: '$11.29B 现金 - $3.5B 长债 - 运营负债', note: '干净资产负债表' },
        ],
        sotpTotal: '$56-85B',
        sotpPerShare: '对应合理区间 $220-335 (当前 $168 低于下沿)',
    },

    recommendation: {
        rating: '持有 / 逐步加仓',
        ratingCls: 'neutral',
        timeHorizon: '3-5 年（10 年视角下的中期节奏）',
        positionSize: '4-7% 组合权重上限 · 加密 β 核心持仓',
        addingZone: '$140-165 (Barclays PT + 前低支撑区)',
        stopLoss: 'BTC 跌破 $50K + 加密熊市确认 → 减仓 50%；USDC 分成协议重大恶化 → 重新评估',
        thesis:
            '当前 $168 显著低于 SOTP 区间 $220-335 下沿，共识 PT $262（约 56% 上行空间）。看多论据在 **OCC 牌照 + USDC 分成 + Base + 反周期收入结构**，看空论据在 **加密 β + 费率下行 + 全球扩张受限**。是"加密一体化 fintech"的最佳敞口，不适合作为小仓位"试水"——要么 4-7%，要么 0%。',
        keyAssumptions: [
            '2026-2028 加密维持中性到牛市（BTC 不破 $50K）',
            'Circle 2026 续约条款不大幅恶化（USDC 分成 ≥$1.2B）',
            'Base L2 2026 发币且估值达 $10B+',
            'OCC 信托牌照 2026 H2 完全落地',
            '代币化证券 2027 起步，Coinbase 占 10%+ 份额',
        ],
        sizingFormula: {
            method: 'Kelly 公式（保守版，使用 1/2 Kelly）',
            formula: 'f* = (期望回报率 − 无风险利率) / 方差 × 0.5',
            inputs: [
                { label: '10Y 期望回报率', value: '16.9% CAGR' },
                { label: '无风险利率', value: '4.5% (10Y 国债)' },
                { label: '情景标准差 (10Y)', value: '$214B (~105% of E[Mcap])' },
                { label: '完整 Kelly', value: '~8%' },
                { label: '1/2 Kelly (保守)', value: '~4%' },
            ],
            computedSize: '4-7% 组合权重',
            reasoning:
                '10Y 情景标准差 ~105% 期望值，波动较大但下行保护较厚（$11B 现金 + 41% S&S 订阅）。完整 Kelly 可到 8%，但加密 β 风险 + 组合相关性（与 BTC/稳定币发行方/零售券商高度正相关）要求取 1/2 Kelly。**分层建仓**：基础 4%（合规护城河）+ Base 发币信号触发 +2%（生态兑现）+ 加密深度牛市 +1%（β 敞口）。',
        },
    },

    keyPersonRisks: [
        {
            name: 'Brian Armstrong (CEO · 创始人)',
            role: '战略 · 华盛顿政策 · 文化塑造',
            departProb: '低 (~5% / 5 年)',
            departImpact: '极高 —— 股价短期 -25%，政治资本流失',
            mitigation: 'Emilie Choi (COO) 完整接班能力；双重股权可通过信托过渡',
            criticality: 'critical',
        },
        {
            name: 'Emilie Choi (President & COO)',
            role: '运营 · 并购整合 · 国际化',
            departProb: '中 (~12% / 5 年)',
            departImpact: '高 —— Deribit 整合 / 国际化节奏受影响',
            mitigation: '2018 年加入 7 年，有 LinkedIn 背景；次梯队已培养',
            criticality: 'high',
        },
        {
            name: 'Paul Grewal (CLO)',
            role: '监管防御 · 华盛顿游说',
            departProb: '中 (~15% / 5 年)',
            departImpact: '高 —— SEC 互动 / GENIUS Act 执行受影响',
            mitigation: '已建立法务团队深度；与 OCC/CFTC 关系多元化',
            criticality: 'high',
        },
        {
            name: 'Jesse Pollak (Base Lead)',
            role: 'Base L2 · 链上产品',
            departProb: '中 (~18% / 5 年)',
            departImpact: '中 —— Base 产品迭代节奏放缓',
            mitigation: 'Base 已形成独立团队；可从 Optimism / Ethereum 生态挖角',
            criticality: 'medium',
        },
        {
            name: 'Alesia Haas (CFO)',
            role: '财务 · 资本市场 · 投资者关系',
            departProb: '低 (~10% / 5 年)',
            departImpact: '中 —— 过渡期投资者信心波动',
            mitigation: '已建立公开公司财务治理框架',
            criticality: 'medium',
        },
    ],

    cashFlow: {
        narrative:
            'Coinbase 是**典型的"轻资产现金生成器"**：无数据中心、无 GPU、无存货、无长期合同，CapEx / 营收 <3%。2025 年 OCF $2.0B，FCF $1.6B。**关键观察指标：FCF / Net Income 比率**——决定 Coinbase 有多少利润真正变成自由现金。历史上该比率在 0.9-1.2x（健康），熊市时可能短暂跌至 0.6x（工资 + 合规刚性）。',
        rows: [
            { year: '2022', ocf: -500, icf: -150, fcf: 300, freeCashFlow: -650, status: 'actual' },
            { year: '2023', ocf: 400, icf: -120, fcf: -50, freeCashFlow: 280, status: 'actual' },
            { year: '2024', ocf: 2400, icf: -180, fcf: 1500, freeCashFlow: 2220, status: 'actual' },
            { year: '2025', ocf: 2000, icf: -2900, fcf: 2500, freeCashFlow: -900, status: 'actual' },
            { year: '2026E', ocf: 2500, icf: -400, fcf: 500, freeCashFlow: 2100, status: 'estimate' },
            { year: '2027E', ocf: 3500, icf: -500, fcf: 200, freeCashFlow: 3000, status: 'estimate' },
            { year: '2028E', ocf: 4500, icf: -600, fcf: -200, freeCashFlow: 3900, status: 'estimate' },
        ],
        conversionNote:
            'Cash Conversion Ratio = OCF / Net Income。历史 0.9-1.3x，2025 年略低（Deribit 整合费用一次性扣减）。2026+ 预期回升至 1.1-1.3x。注意：2025 ICF -$2.9B 主要来自 Deribit 收购，不代表经营变差。',
        keyRisks: [
            '加密熊市时 OCF 可从 $2B 骤降至 $0 甚至负（2022 年真实发生）',
            '2026 Circle 续约若恶化，直接减少 S&S 部分的 OCF $300-500M',
            'Base 发币可能带来一次性 token 分配费用（非现金但影响 GAAP EPS）',
            '合规与法务支出刚性，熊市时无法快速削减',
        ],
    },

    historicalValuation: {
        narrative:
            'Coinbase 2021-04 直接上市，有 5 年完整交易历史。**EV/Sales 区间 3-15x**，对应加密牛熊周期。当前 ~6x 2026E 处于上市以来 **45% 分位**（中性偏便宜）。对标：Robinhood ~10x，Visa ~17x，Schwab ~5x。相对加密行业自身估值不贵，但必须配合加密周期判断。',
        history: [
            { period: '2021-Q2 (IPO 后)', evSales: 15, note: '首日 $429' },
            { period: '2022-Q1 (熊市初)', evSales: 8, note: '$168' },
            { period: '2022-Q4 (熊市底)', evSales: 3, note: '$31 历史低点' },
            { period: '2023-Q4', evSales: 6, note: 'BTC 反弹' },
            { period: '2024-Q4 (Trump 胜选)', evSales: 10, note: '$300+' },
            { period: '2025-Q2 (标普纳入)', evSales: 12, note: '$440 高点' },
            { period: '2026-Q1', evSales: 7, note: 'Q4 业绩 miss 回调' },
            { period: '2026-Q2 (当前)', evSales: 6, note: '$168 当前位置' },
        ],
        currentPercentile: '45%',
        verdict: 'fair',
    },

    downsideMetrics: {
        narrative:
            '只看期望 16.9% CAGR 是 research theater。基于 4 档情景，Coinbase 10Y **情景标准差约 $214B**（~105% 期望值）。**5Y 内亏损 30%+ 的概率约 32%**——加密熊市叠加监管逆转时，40-60% 回撤不是小概率事件。但 $11B 现金 + 41% S&S 订阅结构性降低了深度回撤的概率。',
        scenarioStdDev: 214,
        sharpeLike: 0.76,
        probLoss30Pct5Y: 32,
        maxDrawdownEstimate: '-40% 到 -60%（2022 年曾从 $350 跌至 $31 = -91%，下次预计 -50-60% 而非 -90%）',
        downsideToUpsideRatio: '下行 1 vs 上行 7（单次下跌 $15-20B，单次上冲 $100-150B）',
    },

    sensitivity: {
        narrative: '哪个变量对 10Y 期望市值最敏感？按单变量 ±1σ 扰动排序 ——',
        variables: [
            { variable: 'BTC 长期价格 ±50%', downImpact: -90, upImpact: 150, description: '加密 β 核心：BTC 价格决定交易量与 FV' },
            { variable: '2030 订阅占比 40% vs 60%', downImpact: -40, upImpact: 110, description: 'SaaS 化决定估值倍数重估' },
            { variable: 'Circle 2026 续约 ±15%', downImpact: -30, upImpact: 25, description: 'USDC 分成直接影响 S&S' },
            { variable: 'Base L2 发币 / TVL 表现', downImpact: -15, upImpact: 70, description: '期权价值; 发币或延期决定' },
            { variable: '美国监管政策 (Trump 后续)', downImpact: -60, upImpact: 40, description: '2028 大选结果关键' },
            { variable: '综合费率 ±20%', downImpact: -35, upImpact: 30, description: '零售费率长期压力' },
            { variable: 'Deribit 协同 ±30%', downImpact: -15, upImpact: 35, description: '衍生品整合效果' },
            { variable: 'Robinhood / 传统券商竞争强度', downImpact: -25, upImpact: 10, description: '零售市场份额' },
        ],
        takeaway:
            '**最敏感三变量：BTC 长期价格、订阅占比演进、监管政策方向**。每季度追踪这三项，尤其 BTC 价格 + S&S 占比两项决定估值倍数方向（周期股 5x → fintech SaaS 12x）。',
    },

    bearPlaybook: {
        scenario: '"悲观：费率挤压 + 代币化证券未成主流"（25% 概率）的完整 ruin 路径',
        steps: [
            {
                when: '2026 Q3',
                event: 'Circle 续约要求 on-platform 分成从 100/0 改为 80/20',
                signal: 'Circle 财报强调海外扩张 + USDC 在 Coinbase 份额下降；谈判消息泄漏',
            },
            {
                when: '2026 Q4',
                event: 'BTC 跌破 $60K，加密寒冬开始；零售 ARPU 急剧下滑',
                signal: 'BTC 连续 3 月负增长；Coinbase 月交易量 MoM -30%',
            },
            {
                when: '2027 H1',
                event: 'Robinhood / Schwab / Fidelity 加密业务快速侵蚀 Coinbase 零售',
                signal: 'HOOD 加密营收 QoQ >20% 增长；Coinbase 零售市占跌破 45%',
            },
            {
                when: '2027 H2',
                event: 'Base 发币延期或遇阻；TVL 被 Arbitrum 反超',
                signal: 'Base TVL 连续 2 个季度净流出；官方"探索发币"言论不再出现',
            },
            {
                when: '2028',
                event: '2028 总统大选反加密候选人胜选，GENIUS Act 面临修订压力',
                signal: '民调结果 + 民主党候选人加密立场；Fairshake PAC 影响力下降',
            },
            {
                when: '2029-2030',
                event: 'Coinbase 沦为"美国加密合规龙头但增长乏力"，估值回归 fintech 水平 5-6x EV/S',
                signal: '营收复合增速 <15%；订阅与服务占比停在 45% 无法突破',
            },
        ],
        exitTrigger:
            '任一步骤在时间表前 1 个季度提前发生 → **减仓 50%**。连续 2 条发生 → **清仓观望**。特别关注：Circle 续约 + BTC 走势两项"先行指标"。',
    },

    capitalAllocation: {
        narrative:
            'Coinbase 的资本配置是已覆盖 6 家公司中**最强的**：2024-2025 连续盈利 + $11B 现金 + $2.9B Deribit 并购优秀执行 + 股票回购已启动 + 41% S&S 订阅化转型。管理层不是"追求规模"而是"追求护城河深化"的经典资本配置者。',
        scores: [
            { dimension: 'ROIIC', label: '增量资本回报率', score: 4, detail: '2024 净利率 39% · 2025 虽因 Deribit 一次性摊销下降到 22%，但核心业务 ROIIC 估算 25-30%', evidence: '2024-2025 财报' },
            { dimension: 'Buyback', label: '回购节奏', score: 4, detail: '2025 启动 $1B 股票回购计划；机构类 fintech 中较积极', evidence: 'Q4 2025 财报' },
            { dimension: 'Dividend', label: '股息政策', score: 1, detail: '无股息（合理 · 仍在增长期）', evidence: '公司指引' },
            { dimension: 'M&A', label: '并购命中率', score: 5, detail: 'Deribit $2.9B 收购全球期权龙头 + 2025-10 单月 $266B 成交创纪录，是加密行业近年最漂亮的并购', evidence: 'Deribit 整合进度' },
        ],
        overallGrade: 'B',
        historicalROIIC: '~20-25% (核心业务稳态估算)',
    },

    gapAnalysis: {
        narrative:
            'Coinbase 2026 的关键 gap 是"加密市场情景"的分歧。管理层给出的 Q1 S&S 指引相对保守，卖方共识偏乐观预期 BTC 牛市延续，本分析介于两者之间。真正的爆雷点是 Circle 续约条款。',
        rows: [
            { metric: 'Q1 2026 S&S 指引', guidance: '$550-630M', consensus: '$610M', selfAssumption: '$580M (保守)', gap: '-5% vs 共识', risk: 'medium' },
            { metric: '2026 交易营收', guidance: '未指引', consensus: '$5.5B (假设 BTC 牛)', selfAssumption: '$4.5B (中性 BTC)', gap: '-18% 显著保守', risk: 'high', note: '最大分歧点' },
            { metric: 'Circle 2026 续约 on-platform 分成', guidance: '未披露', consensus: '维持 100/0', selfAssumption: '改为 80/20 (让步)', gap: '-20% 保守', risk: 'high', note: '年内关键事件' },
            { metric: '2026 S&S 占比', guidance: '未指引', consensus: '40-42%', selfAssumption: '42%', gap: '中值', risk: 'low' },
            { metric: 'Base 2026 发币', guidance: '"探索中"', consensus: '50% 概率发币', selfAssumption: '~45%', gap: '基本一致', risk: 'low' },
        ],
        takeaway:
            '**最关键 Gap：2026 交易营收 $5.5B 共识 vs $4.5B 本分析**。$1B 差异 = ±15% 股价。卖方过度定价 BTC 牛市延续，若 2026 H2 加密进入盘整，共识下修会触发 20%+ 股价回调。这是做空 Coinbase 的最佳入场点。',
    },

    benchmarkComparison: {
        narrative:
            'Coinbase 10Y 期望 CAGR 16.9% vs 被动 60/40 组合 7.8%——超额 9.1pp，**显著 justify 4-7% 仓位**。即使考虑加密 β 放大波动，Sharpe 调整后仍是已覆盖 6 家公司中超额/风险比最好的之一。',
        alternatives: [
            { name: 'SPY (S&P 500)', ticker: 'SPY', expectedReturn5Y: 9, expectedReturn10Y: 10, note: '美国宽基' },
            { name: 'QQQ (纳斯达克 100)', ticker: 'QQQ', expectedReturn5Y: 10, expectedReturn10Y: 12, note: '科技权重' },
            { name: '60/40', expectedReturn5Y: 7, expectedReturn10Y: 8, note: '经典稳健' },
            { name: '10Y 国债 (TLT)', ticker: 'TLT', expectedReturn5Y: 4, expectedReturn10Y: 4.5, note: '无风险' },
            { name: 'BTC 直接持有', expectedReturn5Y: 15, expectedReturn10Y: 12, note: '加密 β 直接暴露' },
            { name: 'XLF (金融 ETF)', ticker: 'XLF', expectedReturn5Y: 8, expectedReturn10Y: 9, note: 'Fintech 对照' },
        ],
        selfReturn5Y: 12.9,
        selfReturn10Y: 16.9,
        excessReturn5Y: 5.9,
        excessReturn10Y: 9.1,
        justifiesPosition: 'yes',
        takeaway:
            '**超额 9pp 显著 justify 4-7% 仓位**。相对直接持 BTC 的优势：Coinbase 在加密熊市时仍有 S&S 订阅 + USDC 分成垫底（BTC 熊市时 -50%，Coinbase 预计仅 -30%）。相对 XLF 的优势：加密周期上行时弹性 3-5x。',
    },

    trackRecord: {
        narrative:
            '本分析锚定 2026-04-17。以下 6 条假设是未来 12-18 个月可验证命题。Circle 续约 + BTC 趋势两项是核心先行指标。',
        assumptions: [
            { assumption: 'Circle 2026 续约 Coinbase 分成 ≥55% (on-platform ≥85/15)', setAt: '2026-04-17', targetDate: '2026-10-31', targetValue: 'Coinbase ≥55%', verdict: 'pending', note: '核心假设' },
            { assumption: 'Base L2 2026 年内发币', setAt: '2026-04-17', targetDate: '2026-12-31', targetValue: 'token live', verdict: 'pending' },
            { assumption: 'Deribit 2026 Q3 整合完成', setAt: '2026-04-17', targetDate: '2026-10-31', targetValue: '单平台统一保证金', verdict: 'pending' },
            { assumption: 'BTC 2026 Q4 不跌破 $60K', setAt: '2026-04-17', targetDate: '2026-12-31', targetValue: 'BTC ≥ $60K', verdict: 'pending' },
            { assumption: '2026 S&S 占比 ≥42%', setAt: '2026-04-17', targetDate: '2027-02-28', targetValue: '≥42%', verdict: 'pending' },
            { assumption: 'OCC 国家信托牌照 2026 H2 完全生效', setAt: '2026-04-17', targetDate: '2026-12-31', targetValue: 'full license', verdict: 'pending' },
        ],
        hitRate: 'N/A (全部 pending)',
    },

    dataSources: {
        narrative: '本报告数据锚定 2026-04-17。核心数据来自 Coinbase 季报、SEC 10-K / 10-Q、Base / Deribit 官方披露、主流财经媒体。情景概率与 10Y 期望为本分析主观推演。',
        accessedAt: '2026-04-17',
        sources: [
            { label: 'Coinbase Q4/FY2025 Results', url: 'https://investor.coinbase.com/news/news-details/2026/Coinbase-Delivers-on-Q4-Financial-Outlook-Doubles-Total-Trading-Volume-and-Crypto-Trading-Volume-Market-Share-in-2025/default.aspx', category: 'primary', publishedAt: '2026-02-12', note: '$7.18B 营收 · S&S 占 41%' },
            { label: 'Coinbase Q3 2025 Earnings', url: 'https://investor.coinbase.com/financials/quarterly-results/default.aspx', category: 'primary' },
            { label: 'Deribit $2.9B Acquisition (The Block)', url: 'https://www.theblock.co/post/366957/coinbase-completes-2-9-billion-cash-and-stock-acquisition-of-deribit', category: 'secondary', publishedAt: '2025-05' },
            { label: 'Base L2 $5B TVL (CoinReporter)', url: 'https://www.coinreporter.io/2026/04/base-layer-2-surpasses-5-billion-tvl-in-first-week-after-op-stack-v2-integration/', category: 'secondary', publishedAt: '2026-04' },
            { label: 'USDC Reserve Revenue Split Filing', url: 'https://decrypt.co/312757/coinbase-circles-residual-usdc-reserve-revenue-filing', category: 'primary' },
            { label: 'S&P Global: Subscription Revenue Shift', url: 'https://www.spglobal.com/market-intelligence/en/news-insights/research/2025/11/coinbases-revenue-mix-increasingly-driven-by-subscriptions', category: 'research' },
            { label: 'Bernstein $330 Target', url: 'https://stockanalysis.com/stocks/coin/forecast/', category: 'research' },
            { label: 'Goldman $225 / Barclays $140 Targets', url: 'https://www.americanbankingnews.com/2026/04/11/the-goldman-sachs-group-cuts-coinbase-global-nasdaqcoin-price-target-to-225-00.html', category: 'research' },
            { label: 'OCC 条件批准信托牌照 2026-04-02', url: 'https://www.occ.gov', category: 'primary' },
            { label: 'Yahoo Finance COIN', url: 'https://finance.yahoo.com/quote/COIN/', category: 'data' },
        ],
    },

    correlation: {
        narrative:
            'Coinbase 是**加密行业最大的"纯 β 敞口"**：涨跌 70-80% 由 BTC + 加密情绪驱动。如果组合中已持有 BTC / ETH / Circle / Robinhood，加 Coinbase 的**边际多元化极低**。真正的 hedge 是**反周期 + 非加密资产**。',
        rows: [
            { asset: '比特币 (BTC)', beta: 1.5, correlation: 0.85, hedgeValue: 'low', note: '加密 β 主源；底层驱动' },
            { asset: 'Circle (CRCL)', beta: 1.3, correlation: 0.85, hedgeValue: 'low', note: 'USDC 分成关系使两者完全耦合' },
            { asset: '以太坊 (ETH)', beta: 1.2, correlation: 0.75, hedgeValue: 'low', note: 'Base L2 基于 ETH 生态' },
            { asset: 'Robinhood (HOOD)', beta: 1.1, correlation: 0.65, hedgeValue: 'medium', note: 'fintech 周期性 + 加密业务部分重合' },
            { asset: 'Visa / Mastercard (V/MA)', beta: 0.5, correlation: 0.35, hedgeValue: 'medium', note: '支付行业对标，低相关' },
            { asset: '10Y 国债 (TLT)', beta: -0.4, correlation: -0.45, hedgeValue: 'high', note: '降息时上涨；但 Coinbase 降息也受影响 (USDC)' },
            { asset: '黄金 (GLD)', beta: -0.1, correlation: -0.10, hedgeValue: 'medium', note: '加密避险替代 / 对冲' },
        ],
        suggestedHedge:
            '如果 Coinbase 占组合 4-7%，建议搭配：①**反向**：5-8% TLT（加密熊 + 降息双重保护）+ 2-3% GLD（宏观对冲）；②**不要同时持有**：Coinbase + Circle 之和超过 10% 是重大风险（共享 USDC 现金流 + 加密 β）。**最佳组合**：Coinbase 5% + TLT 7% + GLD 2% + BTC 2%（底层敞口分离）。',
    },
}
