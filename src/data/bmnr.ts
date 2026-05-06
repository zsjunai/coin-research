import type { CompanyDetail } from '@/types/company'

export const bmnr: CompanyDetail = {
    id: 'bmnr',
    ticker: 'NYSE:BMNR',
    name: 'Bitmine Immersion Technologies',
    tagline:
        '全球最大的"上市公司以太坊财库"。2025-06 由原浸没式 BTC 矿企（市值 <$20M）转型，董事长 Tom Lee（Fundstrat 创始人）启动 ETH 财库战略，9 个月内从 0 起步累计 ~1.83M ETH（占总供应 ~1.5%），是 MSTR 的"以太坊镜像"。**结构性差异**：ETH 提供 ~$220M/年 staking 内生收益（BTC 没有），但代价是公司 9 个月稀释 23 倍 + PIPE 解锁砸盘风险 + Tom Lee 不是 Saylor。核心争议：是 ETH 版 MSTR 还是 SPAC 类昙花一现？',
    date: '2026-05-06',

    priceCards: [
        { label: '当前股价', value: '~$45', sub: '2026-05-06 估算', cls: 'cyan' },
        { label: '52 周波动', value: '$8 – $135', sub: '上市以来极端波动', cls: 'red' },
        { label: '市值', value: '~$8.5B', sub: '约 190M 股稀释（9 个月增 23x）', cls: 'purple' },
        { label: 'ETH 持仓', value: '~1.83M ETH', sub: '占总供应 ~1.5%', cls: 'cyan' },
        { label: 'ETH NAV / 股', value: '~$34', sub: 'ETH=$3,500 假设', cls: 'green' },
        { label: 'mNAV (市值/NAV)', value: '~1.33x', sub: '已从 5.5x 高点压缩', cls: 'red' },
    ],

    keyFacts: {
        'ETH 持仓': '~1,830,000 ETH (估算 · 2026 Q1)',
        'ETH 平均成本': '~$3,150 / ETH',
        '累计投入资本': '~$5.8B',
        '已发行普通股': '~190M (9 个月从 8M 暴增)',
        'PIPE 融资 (2025-07)': '$250M (Founders Fund / Pantera / Galaxy / ARK 参与)',
        'ETH NAV (ETH=$3,500)': '~$6.4B',
        'mNAV (当前)': '~1.33x',
        'mNAV 历史峰值': '~5.5x (2025-07 启动期)',
        'Staking 年化收益': '~$220M (1.83M × 3.5% × $3,500)',
        'BTC 矿业残余 ARR': '~$15M (几乎可忽略)',
        'ETH Yield (Tom Lee 定义)': '~30-40% (未审计 · 自定义指标)',
        'Tom Lee 加入时间': '2025-06 (董事长)',
        '公司年龄 (ETH 战略)': '11 个月',
        '指数纳入': 'Russell 2000 (2025 年中)',
    },

    contracts: [
        { customer: '首轮 PIPE 融资 (2025-07)', amount: '$250M', years: '锁定期 6-12 月', detail: 'Founders Fund (Peter Thiel)、Pantera、Galaxy Digital、ARK Invest 等参与；2026 H2 陆续解锁' },
        { customer: '后续 ATM 增发 (2025 全年)', amount: '~$5.5B 累计', years: '持续滚动', detail: '通过 At-the-Market 增发持续募资买 ETH，单股稀释主因' },
        { customer: 'Coinbase Custody / Fidelity Digital Assets', amount: 'ETH 托管', years: '长期', detail: '机构级冷钱包 + 多机构托管' },
        { customer: 'Lido / Coinbase Staking', amount: 'ETH 质押', years: '长期', detail: '通过去中心化质押协议获 ~3.5% staking yield' },
    ],

    subsidiaries: [
        { name: 'ETH Treasury (核心资产)', desc: '~1.83M ETH 全球最大上市公司持仓', stake: '直接持有', value: '~$6.4B (ETH=$3,500)' },
        { name: 'Staking 收益管道', desc: '通过 Lido + Coinbase 等节点质押 ETH', stake: '运营', value: '$220M/年内生现金流' },
        { name: 'BTC 矿业 (浸没式冷却)', desc: '原主营业务，规模微小', stake: '全资', value: '~$50M (10x ARR)' },
        { name: '资本市场工具 (ATM + PIPE)', desc: '相对 MSTR 单薄但灵活', stake: '自营发行', value: '已用 ~$5.8B 募资' },
    ],

    bullPoints: [
        { title: '全球最大上市公司 ETH 财库', body: '~1.83M ETH 占总供应 1.5%，第二名 SharpLink Gaming 仅 600K；规模优势已经成立' },
        { title: 'ETH staking 内生收益 ~$220M/年', body: '这是 MSTR 完全不具备的红利——ETH 是生产性资产，可"自我造血"覆盖运营和优先股票息' },
        { title: 'Tom Lee + Thiel 系背书', body: 'Fundstrat 创始人的资本市场叙事能力 + Founders Fund 加持，给传统机构信心' },
        { title: '11 个月资本市场效率惊人', body: '从 0 起步累计 1.83M ETH，每 ETH 平均成本 $3,150 远低于当前价；执行速度证明 PIPE + ATM 模式有效' },
        { title: 'ETH "数字石油"赛道叙事', body: '智能合约平台 + L2 生态 + RWA 代币化 + 稳定币结算的底层；BTC 是数字黄金，ETH 是数字基础设施' },
        { title: 'mNAV 已大幅压缩到 1.33x', body: '从 2025-07 的 5.5x 跌至 1.33x，估值进入"合理偏便宜"区间；下行空间相对有限' },
    ],

    bearPoints: [
        { title: 'PIPE 解锁砸盘是日历事件，不是黑天鹅', body: '2026 H2 陆续解禁，Thiel/Pantera/Galaxy/ARK 任一减持都会引发抛压；这是 70% 概率会发生的已知事件' },
        { title: 'Tom Lee 不是 Saylor', body: 'Lee 是华尔街分析师，不是创业家；他离开 BMNR 的成本远低于 Saylor 离开 MSTR；他离场 mNAV 必跌穿 1' },
        { title: '9 个月稀释 23 倍是结构性问题', body: '股本从 8M 增至 190M，ATM 持续；普通股东 BTC/share 增厚率必须高于稀释率才不亏' },
        { title: 'ETH 长期跑输 BTC 是华尔街共识', body: '2021-2025 ETH/BTC 比值持续下行；"ETH never catches up"叙事让机构 ETH 配置始终低于 BTC' },
        { title: 'mNAV 已从 5x 跌到 1.3x，溢价压缩可能继续', body: '相比 MSTR 历史最低 0.9x，BMNR 还没经历过 mNAV<1 测试；一旦穿透会触发死亡螺旋' },
        { title: '没有运营护城河 + 资本工具单薄', body: '原矿企是空壳；只有 ATM + PIPE，没有 MSTR 的 5 只优先股矩阵；融资工具一旦受阻无后路' },
    ],

    scenarios: [
        {
            name: '超级牛市: ETH 主流化 (5Y $15K / 10Y $50K)',
            cls: 'bull',
            prob: 12,
            y5Mcap: '$45 – 70B',
            y5Value: 58,
            y10Mcap: '$140 – 220B',
            y10Value: 180,
            desc: 'ETH 成为全球结算层 + 央行 / 主权基金配置；mNAV 维持 1.3-1.5x；BMNR 持仓占总供应 3-5%；Tom Lee 留任完整放大叙事',
        },
        {
            name: '基线牛市: ETH 稳健增长 (5Y $7K / 10Y $15K)',
            cls: 'bull',
            prob: 30,
            y5Mcap: '$20 – 32B',
            y5Value: 26,
            y10Mcap: '$45 – 65B',
            y10Value: 55,
            desc: 'ETH 在 RWA 代币化和稳定币驱动下温和上涨；mNAV 1.2-1.4x；持仓持续增持但稀释速度放缓；PIPE 解锁分批吸收',
        },
        {
            name: '横盘: ETH 失速 (5Y $3.5K / 10Y $5K)',
            cls: 'neutral',
            prob: 30,
            y5Mcap: '$7 – 11B',
            y5Value: 9,
            y10Mcap: '$10 – 16B',
            y10Value: 13,
            desc: 'ETH 被 SOL/SUI 等竞争分流，叙事弱化；mNAV 跌至 0.9-1.1x；ATM 关闭；公司纯粹"持有 ETH"无溢价',
        },
        {
            name: '熊市: 飞轮反向 (5Y $1.8K / 10Y $2.5K)',
            cls: 'bear',
            prob: 20,
            y5Mcap: '$3 – 5B',
            y5Value: 4,
            y10Mcap: '$3 – 7B',
            y10Value: 5,
            desc: 'ETH 跌穿 $2K + PIPE 解锁砸盘；mNAV 0.6-0.7x；staking 不够维持运营；被迫卖 ETH 偿付',
        },
        {
            name: '死亡螺旋: PIPE 解锁 + Tom Lee 离场 + ETH 熊',
            cls: 'bear',
            prob: 8,
            y5Mcap: '$0.5 – 1.5B',
            y5Value: 1,
            y10Mcap: '$0.5 – 2B',
            y10Value: 1,
            desc: 'ETH<$1.5K + Tom Lee 隐退 + PIPE 集体减持 + NYSE American 退市风险；mNAV 0.3-0.4x；公司沦为 ETH ETF 折价工具',
        },
    ],

    tenXGene: [
        { dim: '软件边际成本 · 规模化杠杆', tenBagger: '边际成本 ≈ 0', nebius: '资产管理边际成本 0，但运营 + 合规刚性 ($30M/年)', status: 'green' },
        { dim: '网络/平台效应', tenBagger: '显著', nebius: '间接（Tom Lee Twitter 90 万粉丝 + Fundstrat 客户基础）', status: 'red' },
        { dim: '数据闭环 / 专属资产', tenBagger: '独占数据 / IP / 规模', nebius: '1.83M ETH 规模壁垒；但 ETH ETF (ETHA/FETH) 替代品多', status: 'yellow' },
        { dim: '毛利率 · 定价权', tenBagger: '60-80% 可持续', nebius: '不适用；Staking yield ~3.5% 是参考收益率', status: 'red' },
        { dim: '消费者触点 / 品牌', tenBagger: '直接 C 端 / 开发者心智', nebius: 'Tom Lee 是华尔街分析师网红，但远不及 Saylor 教父级影响力', status: 'yellow' },
        { dim: '再投资空间 · S-curve', tenBagger: '高 ROIC + TAM 够大', nebius: 'ETH TAM 巨大；但稀释速度 (ATM 23x/年) 吃掉大部分复利', status: 'yellow' },
        { dim: '管理层 · 跨代际转型', tenBagger: '有过 0→$30B 记录', nebius: 'Tom Lee 资本市场叙事强但无运营记录；CEO 团队是原矿企班底', status: 'red' },
    ],

    weightedExpectation: {
        currentMcap: 8.5,
        y5: {
            expectedMcap: 18.3,
            multiplier: 2.16,
            cagr: 16.6,
        },
        y10: {
            expectedMcap: 43.1,
            multiplier: 5.07,
            cagr: 17.6,
        },
        breakdown: [
            { scenario: 'A. 超级牛市', prob: 12, y5Mid: 58, y10Mid: 180, y5Contrib: 7.0, y10Contrib: 21.6 },
            { scenario: 'B. 基线牛市', prob: 30, y5Mid: 26, y10Mid: 55, y5Contrib: 7.8, y10Contrib: 16.5 },
            { scenario: 'C. 横盘', prob: 30, y5Mid: 9, y10Mid: 13, y5Contrib: 2.7, y10Contrib: 3.9 },
            { scenario: 'D. 熊市', prob: 20, y5Mid: 4, y10Mid: 5, y5Contrib: 0.8, y10Contrib: 1.0 },
            { scenario: 'E. 死亡螺旋', prob: 8, y5Mid: 1, y10Mid: 1, y5Contrib: 0.1, y10Contrib: 0.1 },
        ],
    },

    peerName: 'Strategy / MicroStrategy (MSTR)',
    coreWeaveCompare: [
        { metric: '持仓资产', nbis: 'ETH (生产性 + staking)', cwv: 'BTC (数字黄金)', winner: 'nbis' },
        { metric: '持仓规模 ($)', nbis: '~$6.4B', cwv: '~$61.5B', winner: 'cwv' },
        { metric: '杠杆倍数 (mNAV)', nbis: '~1.3x', cwv: '~1.5x', winner: 'cwv' },
        { metric: '内生收益', nbis: '~$220M/年 (staking)', cwv: '0', winner: 'nbis' },
        { metric: '资本工具完整度', nbis: 'ATM + PIPE', cwv: '5 优先股 + 可转债 + ATM', winner: 'cwv' },
        { metric: '灵魂人物', nbis: 'Tom Lee (分析师)', cwv: 'Saylor (创业家)', winner: 'cwv' },
        { metric: '公司年龄 (战略)', nbis: '11 个月', cwv: '5 年', winner: 'cwv' },
        { metric: 'mNAV 历史稳定度', nbis: '波动 1.0-5.5x', cwv: '波动 0.9-2.8x', winner: 'cwv' },
    ],

    analysts: [
        { firm: 'Tom Lee 内部目标 (DIY)', target: 200, rating: 'Strong Buy' },
        { firm: 'Benchmark Co.', target: 95, rating: 'Buy' },
        { firm: 'Cantor Fitzgerald', target: 80, rating: 'Overweight' },
        { firm: '共识 (5 家覆盖)', target: 75, rating: 'Buy' },
        { firm: 'H.C. Wainwright', target: 60, rating: 'Buy' },
        { firm: 'Bear / Skeptics 隐含', target: 22, rating: '隐含 Sell' },
    ],

    watchlist: [
        { indicator: 'ETH 价格', strongSignal: '> $8K', baseSignal: '$3-5K', weakSignal: '< $2.5K' },
        { indicator: 'mNAV', strongSignal: '> 2.0x', baseSignal: '1.2-1.7x', weakSignal: '< 1.0x' },
        { indicator: 'ETH 持仓 (M)', strongSignal: '> 2.5M', baseSignal: '1.8-2.2M', weakSignal: '< 1.5M' },
        { indicator: 'PIPE 解锁吸收 (2026 H2)', strongSignal: '平稳', baseSignal: '小幅折让', weakSignal: '砸盘 -25%+' },
        { indicator: 'Tom Lee 公开活跃度', strongSignal: '周更 + 媒体', baseSignal: '月更', weakSignal: '销声匿迹' },
    ],

    finalQuote:
        '<strong>BMNR 是 MSTR 的廉价仿品 + 风险放大版</strong>——更年轻、波动更大、护城河更浅。它有一项 MSTR 完全不具备的红利（**ETH staking $220M/年内生收益**），也有一项 MSTR 完全不存在的日历风险（**PIPE 解锁砸盘 70% 概率发生**）。**真正适合 BMNR 的人**：①坚信 ETH 主流化 + 想加杠杆；②能承受 -85% 回撤；③不会因 PIPE 解锁恐慌卖出。其他人，<strong>直接买 ETHA / FETH</strong>。**与 MSTR 不应同时持有**——加密 β 高度共振等于 BTC + ETH 双重加杠杆。仓位上限 0.5-2.0%，是组合里的"加密尾部赌注"，而非核心持仓。',

    revenueChart: {
        labels: ['2025-07 ETH 起步', '2025-08 PIPE 后', '2025-09', '2025-12', '2026-Q1', '2026E 12-31'],
        values: [285, 1985, 4200, 5250, 6400, 8050],
        kinds: ['revenue', 'revenue', 'revenue', 'revenue', 'revenue', 'revenue'],
    },

    overview: {
        founded: '2020 · 由 Jonathan Bates 等人创立 (浸没式 BTC 矿企)',
        headquarters: '美国 得克萨斯州 拉斯科利纳斯 (Las Colinas, TX)',
        incorporation: '美国 Delaware',
        employees: '~50 (2025 末，转型后扩招中)',
        listing: 'NYSE American · BMNR · 2021-08 上市',
        history: [
            { year: '2020', event: 'Jonathan Bates 等创立 Bitmine Immersion Technologies (浸没式冷却 BTC 矿企)', tag: '创立' },
            { year: '2021-08', event: 'NYSE American 上市，市值约 $5M', tag: 'IPO' },
            { year: '2022-2024', event: '小型矿企运营，BTC 牛熊周期波动，市值长期 <$20M', tag: '低谷' },
            { year: '2025-06', event: '宣布 Tom Lee (Fundstrat 创始人) 任董事长，启动 ETH 财库战略', tag: '关键节点' },
            { year: '2025-07', event: '完成 $250M PIPE，Founders Fund / Pantera / Galaxy / ARK 参与；ETH 持仓 81K', tag: '融资' },
            { year: '2025-08', event: 'mNAV 冲到 5.5x 高点；ETH 持仓 567K，市值 $20B+ 短暂触及', tag: '亢奋' },
            { year: '2025-09', event: '持续 ATM；ETH 持仓 1.2M；mNAV 回落到 3.2x', tag: '增持' },
            { year: '2025-12', event: 'ETH 持仓突破 1.5M，成全球最大 ETH 财库公司', tag: '里程碑' },
            { year: '2025 年中', event: '纳入 Russell 2000 指数', tag: '指数' },
            { year: '2026-Q1', event: 'ETH 持仓 ~1.83M (估算)；mNAV 1.5x；股价剧烈波动', tag: '盘整' },
            { year: '2026-05-06', event: '股价 ~$45，市值 ~$8.5B，mNAV ~1.33x；面临 PIPE 解锁', tag: '当前' },
            { year: '2026-H2 (预期)', event: 'PIPE 锁定期到期，Thiel/Pantera 等首批解禁', tag: '关键事件' },
        ],
        businessModel:
            '**双引擎，主辅极端悬殊**：①**以太坊财库（核心，价值 95%+）**：通过 ATM + PIPE 持续募资买入 ETH，并通过 Lido/Coinbase 质押获 ~3.5% staking yield；②**BTC 矿业（残余）**：浸没式冷却挖矿，年化营收 ~$15M，几乎可忽略。**与 MSTR 核心差异**：ETH 是生产性资产，提供 ~$220M/年内生收益；这是"自我造血"的财库飞轮，不需要完全依赖资本市场融资。**核心逻辑**：BMNR 不创造价值，是"ETH 长期看涨 + staking 收益 + mNAV 飞轮"三重信念在资本市场的杠杆放大器。',
        revenueMix: [
            { name: 'Staking 收益 (ETH 质押)', pct: 92, note: '~$220M/年 · 3.5% × 1.83M ETH' },
            { name: 'BTC 挖矿 (残余)', pct: 6, note: '~$15M · 浸没式冷却' },
            { name: '其他 (托管 / 利息)', pct: 2, note: '~$5M' },
            { name: '注：ETH 升值不计入营收', pct: 0, note: 'GAAP 走利润表' },
        ],
    },

    team: [
        {
            name: 'Tom Lee',
            role: '董事长 (Executive Chairman) · 战略灵魂',
            background:
                'Fundstrat Global Advisors 联合创始人 · 长期华尔街知名研究分析师，曾任 JPMorgan 首席美股策略师。Twitter 90 万粉丝。2025-06 加入 BMNR 任董事长，启动 ETH 财库战略。**个人化风险极高**——他的资本市场叙事能力是 BMNR mNAV 溢价的核心来源；他离任 mNAV 必然压缩到 1.0 以下。',
            since: '2025-06',
            rating: 4,
        },
        {
            name: 'Jonathan Bates',
            role: 'CEO · 联合创始人',
            background:
                'BMNR 原矿企班底，2020 年起担任 CEO。负责执行落地、矿业运营、与传统加密圈关系。在 ETH 战略中是执行层，不是叙事层。',
            since: '2020',
            rating: 3,
        },
        {
            name: 'Erik Hovde',
            role: 'CFO',
            background:
                '2025 转型后接任 CFO。前矿企财务背景，资本市场操作经验中等；与 MSTR 的 Andrew Kang 不在同一档。',
            since: '2025',
            rating: 3,
        },
        {
            name: 'Founders Fund 代表 (董事会观察员)',
            role: '战略 + 资本网络',
            background:
                'Peter Thiel 系投资团队代表，2025-07 PIPE 后获得董事会观察员席位。是 Tom Lee 之外的第二大叙事支撑。',
            rating: 4,
        },
        {
            name: 'Pantera Capital 代表',
            role: '加密圈联系',
            background:
                '加密圈最老牌 VC，参与 PIPE。提供加密生态接入与战略指导。',
            rating: 3,
        },
    ],

    shareholders: [
        { name: 'Founders Fund (Peter Thiel)', pct: '~6.5%', type: 'PIPE 投资者', note: '2025-07 PIPE · 锁定期 6-12 月' },
        { name: 'Pantera Capital', pct: '~5.0%', type: 'PIPE 投资者', note: '加密圈老牌 VC' },
        { name: 'Galaxy Digital (Mike Novogratz)', pct: '~4.5%', type: 'PIPE 投资者', note: '加密圈头部公司' },
        { name: 'ARK Invest (Cathie Wood)', pct: '~3.0%', type: 'PIPE + ETF 持仓', note: 'Cathie Wood 早期看多' },
        { name: 'Tom Lee (董事长本人)', pct: '~2.0%', type: '管理层', note: '个人持股相对低' },
        { name: '原管理层 + 创始人股权', pct: '~3.5%', type: '内部', note: '矿企老班底股权稀释后' },
        { name: 'Vanguard / 被动基金', pct: '~5.0%', type: '指数', note: 'Russell 2000 纳入后被动持仓' },
        { name: '公众流通股 + 散户', pct: '~70%', type: '散户 + 机构', note: '极高散户比例 (加密圈 + Reddit)' },
    ],

    advantages: [
        {
            title: '全球最大上市公司 ETH 财库 (规模 ★★★★)',
            body: '~1.83M ETH 占总供应 1.5%，第二名 SharpLink Gaming 仅 600K。规模差距 3x，先发优势已经成立。任何后来者短期难复制。',
            evidence: 'Ethereum Treasuries 全球持仓排行；2025 Q4 季报',
        },
        {
            title: 'ETH staking 内生收益 (财务 ★★★★★)',
            body: '~$220M/年现金流（1.83M × 3.5% × $3,500）。这是 MSTR 完全不具备的红利——ETH 是生产性资产，可"自我造血"覆盖运营和未来优先股票息。**结构性优势**。',
            evidence: 'Lido / Coinbase 质押公开数据；Ethereum 网络 staking yield',
        },
        {
            title: 'Tom Lee 资本市场叙事能力 (品牌 ★★★★)',
            body: 'Fundstrat 创始人，华尔街粉丝基础深厚；他对 ETH 长期看涨的叙事在传统金融圈传播力强。Twitter 90 万粉丝 + 长期 CNBC 出镜。',
            evidence: 'Twitter 影响力数据；CNBC / Bloomberg 出镜频次',
        },
        {
            title: 'Thiel 系 + Pantera + Galaxy 背书 (信誉 ★★★★)',
            body: '$250M PIPE 由 Founders Fund (Thiel) 领投，加密圈头部 VC 全部上船。这种"传统硅谷 + 加密原生"的双重背书是 MSTR 早期没有的。',
            evidence: '2025-07 PIPE 公告；DEF 14A 投资者披露',
        },
        {
            title: '11 个月资本市场效率惊人 (执行 ★★★★)',
            body: '从 0 起步累计 1.83M ETH，平均成本 $3,150 远低于当前价。证明 PIPE + ATM 模式有效；执行速度远超 MSTR 早期阶段。',
            evidence: '2025-07 至今所有 ATM 增发数据；ETH 持仓增长曲线',
        },
        {
            title: 'ETH 赛道叙事强度 (赛道 ★★★)',
            body: 'ETH 是智能合约平台 + L2 生态 + RWA 代币化 + 稳定币结算的底层。BTC 是数字黄金，ETH 是数字基础设施。两者在 10Y 赛道叙事上各有千秋。',
            evidence: 'BlackRock BUIDL 部署在 ETH；稳定币 65% 在 ETH 网络',
        },
        {
            title: 'mNAV 已大幅压缩到合理区间 (估值 ★★★)',
            body: '从 2025-07 的 5.5x 跌至 1.33x，估值进入"合理偏便宜"区间。下行空间相对有限（除非 mNAV 跌穿 1）；当前的"恐惧"溢价压缩可能是入场点。',
            evidence: 'mNAV 历史轨迹；SaylorTracker 类工具数据',
        },
    ],

    disadvantages: [
        {
            title: 'PIPE 解锁砸盘是日历事件',
            body: '2026 H2 锁定期陆续到期，Founders Fund / Pantera / Galaxy / ARK 任一减持都引发抛压。这是 70% 概率会发生的已知事件，不是黑天鹅。',
            evidence: '2025-07 PIPE 文件锁定条款；类似 SPAC 历史先例',
        },
        {
            title: 'Tom Lee 不是 Saylor',
            body: 'Lee 是华尔街分析师（外部专家），不是创业家。他离开 BMNR 的成本远低于 Saylor 离开 MSTR；他个人在公司股权仅 ~2%，离场动机相对低。',
            evidence: '管理层股权披露；Tom Lee 既往职业路径',
        },
        {
            title: '9 个月稀释 23 倍是结构性问题',
            body: '股本从 8M → 190M，ATM 持续。普通股东 ETH/share 增厚率必须高于稀释率才不亏。当前数学上勉强为正。',
            evidence: '2025-06 至今股本演进数据',
        },
        {
            title: 'ETH 长期跑输 BTC 是华尔街共识',
            body: '2021-2025 ETH/BTC 比值从 0.085 跌至 0.035，"ETH never catches up"叙事让机构 ETH 配置始终低于 BTC；制约 BMNR 长期估值。',
            evidence: 'ETH/BTC 比值历史数据；机构持仓研究',
        },
        {
            title: 'mNAV 还没经历过 <1 测试',
            body: '相比 MSTR 历史最低 0.9x（2022 年），BMNR 还没经历过 mNAV<1 的极端测试。一旦穿透会触发死亡螺旋（无人接盘）。',
            evidence: 'BMNR 上市以来 mNAV 区间 1.0-5.5x；MSTR 2022 年比对',
        },
        {
            title: '资本工具单薄 + 没有运营护城河',
            body: '只有 ATM + PIPE，没有 MSTR 的 5 只优先股矩阵；融资工具一旦受阻无后路。原矿企是空壳，不是真"双引擎"。',
            evidence: '2025-2026 融资结构披露；矿业 ARR 微小',
        },
        {
            title: 'NYSE American 小盘流动性陷阱',
            body: '虽市值 $8.5B，但日成交量 + 期权深度都远不如 MSTR。机构难以做大仓位 + 退出；做空成本低、卖出无阻力。',
            evidence: '日成交量数据；期权链深度对比',
        },
    ],

    shortTermCatalysts: [
        {
            when: '2026-Q2-Q3',
            event: 'ETH 突破 $5,000（基于 RWA 代币化 + 稳定币驱动）',
            impact: 'positive',
            probability: '~35%',
            magnitude: '+25-40%',
        },
        {
            when: '2026-Q2',
            event: 'ETH 现货 ETF 期权获批，ETF 资金加速流入',
            impact: 'positive',
            probability: '~60%',
            magnitude: '+15-25%',
        },
        {
            when: '2026-Q3',
            event: '推出 STRK 类 ETH 优先股工具（学习 MSTR）',
            impact: 'positive',
            probability: '~30%',
            magnitude: '+10-20%',
        },
        {
            when: '2026-H2',
            event: 'Russell 2000 → Russell 1000 升档（市值符合）',
            impact: 'positive',
            probability: '~40%',
            magnitude: '+5-10%',
        },
        {
            when: '2026-H2',
            event: '**PIPE 解锁砸盘**（Thiel/Pantera/Galaxy 部分减持）',
            impact: 'negative',
            probability: '~70%',
            magnitude: '-15-25%',
        },
        {
            when: '不定',
            event: 'Tom Lee 削减露面 / 隐退',
            impact: 'negative',
            probability: '~10%',
            magnitude: '-20-30%',
        },
        {
            when: '2026-Q4',
            event: 'ETH 跌穿 $2,500 触发 mNAV 压缩警报',
            impact: 'negative',
            probability: '~25%',
            magnitude: '-30-45%',
        },
        {
            when: '2027',
            event: '主权基金 / 央行 ETH 配置触发再定价',
            impact: 'positive',
            probability: '~15%',
            magnitude: '+30-50%',
        },
        {
            when: '任何时点',
            event: 'SEC 重新分类 staking 服务为证券',
            impact: 'negative',
            probability: '~15% / 5 年',
            magnitude: '-20-30%',
        },
        {
            when: '任何时点',
            event: 'Lido / 大型质押节点黑客事件',
            impact: 'negative',
            probability: '~10%',
            magnitude: '-15-25%',
        },
    ],

    longTermDrivers: [
        {
            name: 'ETH 货币层 / 结算层确立',
            horizon: '2026-2033',
            body: '若 ETH 真成全球结算资产层 + RWA 主导平台 + 稳定币结算底座，TAM 可达 $5-10T 规模。BMNR 作为最大上市持仓方直接受益。**ETH 主流化是 BMNR 最大的非线性回报来源**。',
            enabling: 'BlackRock BUIDL / Franklin OnChain / 稳定币法案 / ETH ETF 期权 / 央行配置',
        },
        {
            name: 'ETH staking yield 复利',
            horizon: '2026-2032',
            body: '~$220M/年内生收益，按 50% 复投买 ETH，10 年累计可增持 30-50% ETH/share，是 MSTR 完全不具备的复利红利。',
            enabling: 'ETH PoS 网络稳定 + staking yield 不被监管打压',
        },
        {
            name: '持仓占总供应突破 3%',
            horizon: '2026-2030',
            body: '当前 1.5%，目标管理层"5%" 即 ~6M ETH。若达 3%，叙事价值和指数纳入权重大幅提升，mNAV 溢价可结构性扩张。但稀释代价巨大。',
            enabling: '持续 ATM + PIPE + 优先股工具创新；ETH 流通量增长缓慢',
        },
        {
            name: 'Tom Lee 叙事 + 机构 ETH 配置启动',
            horizon: '2026-2030',
            body: 'Tom Lee 是机构市场最有粉丝基础的"ETH 多头代言人"。若 BTC ETF 之后机构启动 ETH 配置浪潮，BMNR 是直接受益的标的。',
            enabling: 'Tom Lee 留任 + ETH ETF 资金加速流入 + Russell 1000 / S&P 600 纳入',
        },
        {
            name: '资本工具创新 (学习 MSTR)',
            horizon: '2026-2032',
            body: '若 BMNR 推出 ETH 财库优先股 / 可转债（参考 MSTR STRK / STRF 模型），融资工具矩阵升级，可降低稀释成本 + 提供差异化票息收益。',
            enabling: '管理层资本工具能力提升 + 优先股市场需求',
        },
        {
            name: 'L2 / RWA / 稳定币三大引擎',
            horizon: '2027-2033',
            body: 'ETH 不只是"BTC 的弟弟"——L2 锁仓 $50B+、RWA 代币化 $3-5T、稳定币 $200B+ 都建在 ETH 上。这些用例的 TAM 增长直接驱动 ETH 价格。',
            enabling: 'BlackRock / Franklin 进入；GENIUS Act 落地；ERC-3643 等标准',
        },
    ],

    riskMatrix: [
        {
            category: '宏观 / 加密周期风险',
            level: 'critical',
            summary: 'ETH β 是 BMNR 的核心命脉，比 MSTR 的 BTC β 更脆弱',
            items: [
                {
                    name: 'ETH 长期熊市 (>12 个月 < $2,500)',
                    body: 'ETH 跌穿 $2,500 并维持 12+ 个月 → mNAV 必<1 → 飞轮反向 → 公司必须卖 ETH 偿付。**这是公司模型的"零号风险"**。',
                    mitigation: 'Staking yield $220M/年 vs MSTR 的 0；轻度对冲优势',
                },
                {
                    name: 'ETH/BTC 比值持续下行',
                    body: '"ETH never catches up" 叙事强化，机构 ETH 配置低于 BTC，BMNR 长期相对 MSTR 估值受限。',
                    mitigation: 'L2 / RWA / 稳定币用例增长可能扭转；不可控外部因素',
                },
            ],
        },
        {
            category: '资本结构 / 稀释风险',
            level: 'critical',
            summary: 'PIPE 解锁 + 23x 稀释速度',
            items: [
                {
                    name: 'PIPE 解锁砸盘 (2026 H2)',
                    body: 'Founders Fund / Pantera / Galaxy / ARK 锁定期到期，集体减持是 70% 概率事件。日历催化剂，已知不确定性。',
                    mitigation: '与公司沟通延期 / 分批解锁 / 与 ATM 错峰',
                },
                {
                    name: '稀释速度过快',
                    body: '9 个月股本 23x，普通股东 ETH/share 增厚必须 >稀释率才不亏；当前数学勉强为正。',
                    mitigation: 'ATM 节奏放缓；ETH Yield 复利吸收稀释',
                },
                {
                    name: 'ATM 关闭 (mNAV<1)',
                    body: '一旦 mNAV<1 ATM 必须暂停（避免反向稀释），公司失去主要融资工具。',
                    mitigation: '推出 ETH 优先股 / 可转债工具替代；staking 收入维持运营',
                },
            ],
        },
        {
            category: '关键人 / 治理风险',
            level: 'high',
            summary: 'Tom Lee 是不可替代的叙事核心',
            items: [
                {
                    name: 'Tom Lee 隐退 / 减少露面',
                    body: '他离场 mNAV 必跌穿 1.0；他个人股权仅 2%，离场动机相对低，但风险不可忽视。',
                    mitigation: '建立独立叙事框架；招募第二代言人',
                },
                {
                    name: 'PIPE 投资人董事会博弈',
                    body: 'Founders Fund / Pantera 等 VC 可能与原管理层 Bates 团队产生战略分歧。',
                    mitigation: '股权结构相对均衡；Tom Lee 调和',
                },
            ],
        },
        {
            category: '监管风险',
            level: 'high',
            summary: 'SEC ETH 分类 + Staking 服务 + 财库公司监管',
            items: [
                {
                    name: 'SEC 重新审查 ETH 分类',
                    body: 'ETH 是否构成"证券"长期争议；不利判决会让 BMNR 业务受限。',
                    mitigation: 'ETF 已通过暗示 SEC 立场偏向商品',
                },
                {
                    name: 'Staking 服务被定为证券',
                    body: 'SEC 此前曾起诉 Coinbase staking；若再次推进，BMNR staking 收益结构受影响。',
                    mitigation: '直接质押节点（非托管）部分免疫',
                },
                {
                    name: '财库公司监管框架',
                    body: '加密财库公司是新生物种，监管框架可能突变。',
                    mitigation: '法律团队监控；行业整体游说',
                },
            ],
        },
        {
            category: '竞争风险',
            level: 'high',
            summary: 'ETH 现货 ETF 是结构性威胁',
            items: [
                {
                    name: 'ETHA / FETH 抢"持有 ETH"份额',
                    body: 'ETF 流入 2025 累计 $15B+，部分 mNAV 溢价已被 ETF 替代效应吞噬；机构客户更偏好 ETF。',
                    mitigation: 'mNAV 飞轮 + staking yield 复利是 ETF 不具备的；散户/退休账户仍偏好 BMNR',
                },
                {
                    name: 'SOL/SUI 等竞争公链分流 ETH',
                    body: '若 SOL 持续分流 ETH 用户和开发者，ETH 长期价值受质疑。',
                    mitigation: 'L2 生态绑定 ETH；以太坊基金会持续创新',
                },
                {
                    name: '其他 ETH 财库公司模仿',
                    body: 'SharpLink Gaming 等模仿 BMNR 战略，但规模仍是 BMNR 1/3。',
                    mitigation: '先发规模优势；Tom Lee 叙事独占',
                },
            ],
        },
        {
            category: '技术 / 运营风险',
            level: 'medium',
            summary: 'Staking 节点 + 智能合约风险',
            items: [
                {
                    name: 'Lido / 大型质押节点黑客事件',
                    body: '若 staking 节点被攻击或 slashing，可能损失部分 ETH 持仓。',
                    mitigation: '多节点分散；保险储备',
                },
                {
                    name: 'ETH 网络重大事件',
                    body: 'ETH 智能合约漏洞 / 共识机制问题。',
                    mitigation: 'PoS 已稳定运行；以太坊基金会响应快',
                },
            ],
        },
        {
            category: '财务 / 商业风险',
            level: 'low',
            summary: '矿业残余 + 运营负担',
            items: [
                {
                    name: 'BTC 矿业拖累',
                    body: '原矿业业务 ARR $15M，但运营成本可能高于收入。',
                    mitigation: '占比微小；可剥离或停业',
                },
                {
                    name: '运营费用刚性',
                    body: '合规 + 法务 + 安全开支熊市无法快速削减。',
                    mitigation: 'Staking 收入 $220M 完全覆盖运营',
                },
            ],
        },
    ],

    profitability: {
        narrative:
            'BMNR 的 GAAP 损益表**几乎无意义**——FASB 公允价值规则让 ETH 涨跌直接进利润表。**真正应该看的指标**：①**ETH Yield**（Tom Lee 自定义指标 · ETH/share 同比增厚率）；②**Staking 收入**（~$220M/年内生现金流）；③**累计 ETH 持仓 vs 累计股本稀释**。BMNR 不是运营公司，是"ETH 杠杆资产管理平台 + staking 节点"，相比 MSTR 多一个内生收益维度。**注意**：转型仅 11 个月，财务数据极度有限，下表很多为估算。',

        incomeStatement: [
            {
                year: '2022',
                revenue: '$8M (BTC 矿业)',
                revenueNum: 8,
                grossMargin: '~30%',
                opIncome: '-$5M',
                ebitda: '-$3M',
                ebitdaMargin: '-38%',
                netIncome: '-$8M',
                eps: '-$1.00',
                status: 'actual',
            },
            {
                year: '2023',
                revenue: '$10M',
                revenueNum: 10,
                grossMargin: '~35%',
                opIncome: '-$4M',
                ebitda: '-$2M',
                ebitdaMargin: '-20%',
                netIncome: '-$6M',
                eps: '-$0.75',
                status: 'actual',
            },
            {
                year: '2024',
                revenue: '$12M',
                revenueNum: 12,
                grossMargin: '~40%',
                opIncome: '-$3M',
                ebitda: '+$1M',
                ebitdaMargin: '8%',
                netIncome: '-$5M',
                eps: '-$0.60',
                status: 'actual',
            },
            {
                year: '2025 (转型年)',
                revenue: '$15M (BTC) + $140M (ETH staking 部分年化)',
                revenueNum: 155,
                grossMargin: '~85%',
                opIncome: '极度依赖 ETH 价格',
                ebitda: 'N/A',
                ebitdaMargin: 'N/A',
                netIncome: '高度波动',
                eps: '高度波动',
                status: 'actual',
            },
            {
                year: '2026E',
                revenue: '$15M (BTC) + $220M (ETH staking)',
                revenueNum: 235,
                grossMargin: '~88%',
                opIncome: '极度依赖 ETH 价格',
                ebitda: 'N/A',
                ebitdaMargin: 'N/A',
                netIncome: '高度波动',
                eps: '高度波动',
                status: 'estimate',
            },
            {
                year: '2027E',
                revenue: '$15M + $250-300M staking',
                revenueNum: 285,
                grossMargin: '~88%',
                opIncome: '极度依赖 ETH 价格',
                ebitda: 'N/A',
                ebitdaMargin: 'N/A',
                netIncome: '高度波动',
                eps: '高度波动',
                status: 'estimate',
            },
        ],

        marginEvolution: [
            { year: '2022', gross: 30, ebitda: -38, operating: -63, net: -100, status: 'actual' },
            { year: '2023', gross: 35, ebitda: -20, operating: -40, net: -60, status: 'actual' },
            { year: '2024', gross: 40, ebitda: 8, operating: -25, net: -42, status: 'actual' },
            { year: '2025', gross: 85, ebitda: null, operating: null, net: null, status: 'actual' },
            { year: '2026E', gross: 88, ebitda: null, operating: null, net: null, status: 'estimate' },
            { year: '2027E', gross: 88, ebitda: null, operating: null, net: null, status: 'estimate' },
        ],

        milestones: [
            { year: '2025-06', milestone: 'Tom Lee 加入 + 启动 ETH 战略', hit: true },
            { year: '2025-07', milestone: '完成 $250M PIPE', hit: true },
            { year: '2025-08', milestone: 'mNAV 冲到 5.5x 高点', hit: true },
            { year: '2025-12', milestone: 'ETH 持仓突破 1.5M', hit: true },
            { year: '2026-Q4', milestone: 'ETH 持仓突破 2.3M', hit: false, note: '关键里程碑' },
            { year: '2026-H2', milestone: 'PIPE 解锁分批吸收', hit: false, note: '70% 概率发生' },
            { year: '2027', milestone: '推出 ETH 优先股工具', hit: false },
            { year: '2030', milestone: 'ETH 持仓占总供应 3% (~3.6M)', hit: false, note: '管理层目标 5%' },
        ],

        unitEconomics: [
            { metric: 'ETH 持仓 (2026 Q1)', value: '~1,830,000 ETH', source: '估算（季报披露为准）' },
            { metric: 'ETH 平均成本', value: '~$3,150', source: '累计投入 / 持仓数' },
            { metric: 'ETH NAV / 股 (ETH=$3,500)', value: '~$34', source: '$6.4B / 190M 股' },
            { metric: 'Staking yield (年化)', value: '~3.5% (~$220M)', source: 'Lido / Coinbase 节点' },
            { metric: 'ETH Yield (Tom Lee 定义)', value: '~30-40%', source: '管理层自定义 KPI · 未审计' },
            { metric: 'mNAV (市值/ETH NAV)', value: '~1.33x', source: '$8.5B / $6.4B' },
            { metric: '股本年化稀释率', value: '~150-200%（早期）→ 30-50%（稳态）', source: '估算' },
            { metric: 'BTC 矿业 ARR (残余)', value: '~$15M', source: '原业务季报' },
        ],

        fcfPath:
            '**结构性差异**：BMNR 相对 MSTR 多一项 staking 内生现金流 ~$220M/年。这意味着即使 ATM/PIPE 关闭，公司也能维持运营和小幅增持。**关键观察**：staking 收入 $220M vs 运营成本 $30M 留下 $190M/年净现金，可用于：①复投买 ETH（10 年累计可增持 30-50% ETH/share）；②未来发行的优先股票息覆盖；③极端情景下的运营缓冲。这是 BMNR 的真正"杀手锏"——比 MSTR 多一道防线。',

        keyRisks: [
            'ETH 长期 <$2,500 + PIPE 解锁砸盘三杀，触发 mNAV 跌穿 1',
            'Tom Lee 隐退导致叙事崩塌，mNAV 1.5x → 1.0x',
            '稀释速度若超过 ETH Yield，普通股东实际亏损',
            '监管 staking 服务定证券，影响 $220M 内生现金流',
            'PIPE 锁定期到期是 70% 概率日历事件，已知不确定性',
        ],
    },

    competitiveLandscape: {
        summary:
            'BMNR 的"竞争对手"不是其他公司，而是**所有持有 ETH 的方式**：①**现货 ETH ETF (ETHA/FETH/ETHE)**：被动持有标准方案；②**直接持有 ETH + 自己 staking**：零费用零稀释但需自管节点；③**SharpLink Gaming (SBET)**：第二大 ETH 财库公司，规模 1/3；④**MSTR**：BTC 财库镜像，资产类别不同但商业模型类似。BMNR 的差异化在 mNAV 飞轮 + staking yield 复利——只在 mNAV>1 时成立。',

        competitors: [
            {
                name: 'BMNR (自身)',
                type: 'specialist',
                ticker: 'BMNR',
                revenue2026E: '$235M (staking + 矿业)',
                aiRevenue: '~1.83M ETH ($6.4B NAV)',
                gpuFleet: '190M 股 (9 个月增 23x)',
                backlog: 'ATM 持续 + 可能新 PIPE',
                ebitdaMargin: 'N/A (ETH 主导)',
                marketCap: '~$8.5B',
                nvidiaLevel: 4,
                threat: 'low',
                strength: '规模 + Tom Lee + Thiel 背书 + staking 内生收益',
                weakness: 'PIPE 解锁 + 稀释快 + 工具单薄 + Tom Lee 风险',
            },
            {
                name: 'iShares ETH Trust',
                type: 'hyperscaler',
                ticker: 'ETHA',
                revenue2026E: 'N/A (基金)',
                aiRevenue: '~$5B AUM',
                gpuFleet: '现货 ETF',
                backlog: '持续 inflow',
                ebitdaMargin: 'N/A',
                marketCap: '~$5B AUM',
                nvidiaLevel: 5,
                threat: 'high',
                strength: '0.25% 费率 · 透明 · 无稀释 · 税务高效',
                weakness: '无杠杆 · 无 mNAV · 无 staking 红利（部分 ETF 无 staking）',
            },
            {
                name: 'Fidelity ETH Fund',
                type: 'hyperscaler',
                ticker: 'FETH',
                revenue2026E: 'N/A',
                aiRevenue: '~$3B AUM',
                gpuFleet: '现货 ETF',
                backlog: '持续 inflow',
                ebitdaMargin: 'N/A',
                marketCap: '~$3B AUM',
                nvidiaLevel: 5,
                threat: 'high',
                strength: '机构信任 + Fidelity 渠道',
                weakness: '同 ETHA',
            },
            {
                name: 'SharpLink Gaming',
                type: 'specialist',
                ticker: 'SBET',
                revenue2026E: '~$50M (游戏 + ETH)',
                aiRevenue: '~600K ETH',
                gpuFleet: '体育游戏 + ETH 财库',
                backlog: '类似 BMNR 战略',
                ebitdaMargin: 'N/A',
                marketCap: '~$2.5B',
                nvidiaLevel: 4,
                threat: 'medium',
                strength: 'ETH 财库第二名 · 游戏主业现金流',
                weakness: '规模仅 BMNR 1/3 · 游戏业务杂',
            },
            {
                name: 'BIT Mining (BTCM)',
                type: 'specialist',
                ticker: 'BTCM',
                revenue2026E: '~$30M',
                aiRevenue: '~80K ETH',
                gpuFleet: '矿企 + 小规模 ETH 财库',
                backlog: 'ETH 财库探索',
                ebitdaMargin: 'N/A',
                marketCap: '~$300M',
                nvidiaLevel: 3,
                threat: 'low',
                strength: '中概矿企 + ETH 持仓',
                weakness: '规模小 · 中概折价',
            },
            {
                name: 'Coinbase 自持 ETH 财库',
                type: 'hyperscaler',
                ticker: 'COIN (部分敞口)',
                revenue2026E: '$8B (综合)',
                aiRevenue: '~140K ETH (公司自持)',
                gpuFleet: '加密交易所',
                backlog: '多元化',
                ebitdaMargin: '~32%',
                marketCap: '~$43B',
                nvidiaLevel: 5,
                threat: 'low',
                strength: 'Base L2 + ETH 托管 + 主业稳健',
                weakness: '不是纯 ETH 财库标的',
            },
            {
                name: 'MSTR (BTC 对照)',
                type: 'specialist',
                ticker: 'MSTR',
                revenue2026E: '$478M (软件)',
                aiRevenue: '~597K BTC ($61.5B)',
                gpuFleet: '5 优先股 + 可转债 + ATM',
                backlog: '"21/21" 计划',
                ebitdaMargin: 'N/A',
                marketCap: '~$92B',
                nvidiaLevel: 5,
                threat: 'medium',
                strength: 'BTC 财库龙头 · 5 年 track record · Saylor',
                weakness: 'BTC 无内生收益 · 可能与 BMNR 加密 β 共振',
            },
            {
                name: '直接持有 ETH + 自质押',
                type: 'specialist',
                ticker: 'ETH',
                revenue2026E: 'staking 4-5%',
                aiRevenue: '$3,500 / ETH',
                gpuFleet: '点对点',
                backlog: 'N/A',
                ebitdaMargin: 'N/A',
                marketCap: '~$420B (ETH 总市值)',
                nvidiaLevel: 5,
                threat: 'high',
                strength: '零费用 + 完整 staking yield + 100% 控制',
                weakness: '需 32 ETH 自运行节点 · 技术门槛 · 退休账户难持有',
            },
        ],

        positioning: [
            { dimension: 'ETH 持仓规模', nebius: '~1.83M ETH', industryAvg: '50-600K', leader: 'BMNR (远超第二)', nebiusStrong: true },
            { dimension: 'Staking 内生收益', nebius: '~$220M/年', industryAvg: 'ETF 多无 staking', leader: 'BMNR (独占)', nebiusStrong: true },
            { dimension: 'ETH 杠杆 (mNAV)', nebius: '~1.3x', industryAvg: '1.0x', leader: 'BMNR', nebiusStrong: true },
            { dimension: '费用率', nebius: '稀释 + 运营隐性', industryAvg: 'ETF 0.25%', leader: 'ETHA / FETH (低)', nebiusStrong: false },
            { dimension: '上行弹性', nebius: '极高', industryAvg: '中', leader: 'BMNR', nebiusStrong: true },
            { dimension: '下行风险', nebius: '极高 (-85%)', industryAvg: 'ETHA -50% (ETH 熊)', leader: 'ETHA (低)', nebiusStrong: false },
            { dimension: '资本市场工具完整度', nebius: 'ATM + PIPE', industryAvg: '类似', leader: 'MSTR (5 优先股)', nebiusStrong: false },
            { dimension: 'Track Record (战略)', nebius: '11 个月', industryAvg: 'N/A', leader: 'MSTR (5 年)', nebiusStrong: false },
            { dimension: '机构客户接受度', nebius: '低', industryAvg: 'ETHA 高', leader: 'ETHA', nebiusStrong: false },
            { dimension: 'PIPE 解锁日历风险', nebius: '高 (70% 概率砸盘)', industryAvg: 'N/A', leader: 'ETHA (无)', nebiusStrong: false },
        ],

        marketShare2026: [
            { name: 'iShares ETHA', pct: 30 },
            { name: 'BMNR (本公司)', pct: 22 },
            { name: 'Fidelity FETH', pct: 18 },
            { name: 'Grayscale ETHE', pct: 14 },
            { name: 'SharpLink (SBET)', pct: 6 },
            { name: 'Bitwise / VanEck / 其他 ETF', pct: 6 },
            { name: '其他财库公司', pct: 4 },
        ],

        winLoss: [
            {
                scenario: 'ETH 牛市超级行情 ($10K+)',
                winners: 'BMNR (mNAV 飞轮放大)',
                losers: '现货 ETF (无杠杆)',
                reasoning: 'mNAV 飞轮在牛市中威力倍增 + staking yield 复利双重红利',
            },
            {
                scenario: 'ETH 横盘震荡 ($3-5K)',
                winners: 'ETHA / 直接持币',
                losers: 'BMNR (稀释吃掉收益)',
                reasoning: 'mNAV 1.0-1.2x 时，30-50% 稀释率会吃掉相当比例的 ETH/share 增益',
            },
            {
                scenario: 'ETH 熊市 (<$2K)',
                winners: 'ETHA (无强制操作)',
                losers: 'BMNR (PIPE 解锁 + ATM 关闭双杀)',
                reasoning: '熊市时 mNAV<1 触发 ATM 关闭，PIPE 投资人砸盘形成死亡螺旋',
            },
            {
                scenario: '美国机构客户配置',
                winners: 'ETHA / FETH',
                losers: 'BMNR (会计复杂 + 治理小盘)',
                reasoning: 'GAAP 利润极端波动 + Russell 2000 小盘标的让机构配置受限',
            },
            {
                scenario: '退休账户 (401(k)/IRA)',
                winners: 'BMNR (普通股) + ETHA',
                losers: '直接持币 (难)',
                reasoning: '部分 401(k) 已开放 ETH ETF；BMNR 普通股一直可持有',
            },
            {
                scenario: 'ETH 主流化 + 央行配置',
                winners: 'BMNR (规模最大)',
                losers: '其他财库公司',
                reasoning: '若有央行 ETH 配置，BMNR 作为最大上市持仓方被重新定价',
            },
            {
                scenario: 'ETH staking 监管严格',
                winners: 'ETHA (部分 ETF 不 staking)',
                losers: 'BMNR (staking 收入受限)',
                reasoning: 'SEC 重新审视 staking 服务为证券将影响 $220M 内生现金流',
            },
            {
                scenario: 'PIPE 锁定期到期 (2026 H2)',
                winners: 'PIPE 投资人 (Founders Fund 等)',
                losers: 'BMNR 散户股东',
                reasoning: '70% 概率事件，砸盘压力可能导致 mNAV 跌穿 1',
            },
        ],

        structuralTrend:
            '未来 3-5 年行业结构性变化：①**ETF 替代效应**：ETHA / FETH 持续吞噬 mNAV 溢价空间，机构逐步从 BMNR 迁移到 ETF；②**ETH 财库竞争**：SharpLink 等模仿者出现，规模差距 3x 但还在缩小；③**staking 监管**：SEC 政策可能突变，影响 BMNR 内生收益结构；④**主权采用**：ETH 仍未被主权基金/央行配置，是最大未释放上行；⑤**Tom Lee 接班**：他离场风险持续存在，需要培育"叙事接班人"。**结论**：3 年内 BMNR vs ETHA 是行业最大变量；BMNR 必须证明 staking yield + mNAV 飞轮的"超额"才能维持溢价。',

        tam: {
            narrative:
                '"上市公司 ETH 财库"赛道：2025-06 启动 → 2026 当前 ~$10B → 2030 基线 $80B / 牛市 $300B。BMNR 占比从启动时 100% 降至当前 70%（SharpLink 等竞争出现）。**10x 路径**：ETH 价格 5x（$3.5K → $15-20K）+ BMNR 持仓 1.5-2x + mNAV 维持 1.2-1.5x = 9-15x ETH NAV/share，扣除稀释后 5-9x 股价。换言之：**BMNR 10x 需要 ETH 至少 5-7x**——比 MSTR 难度更高。',
            points: [
                { year: '2025-06', totalTam: 0.5, neocloudTam: 0.3, selfRevenue: 0, status: 'actual' },
                { year: '2025-12', totalTam: 12, neocloudTam: 9, selfRevenue: 0.04, status: 'actual' },
                { year: '2026', totalTam: 18, neocloudTam: 13, selfRevenue: 0.235, status: 'estimate' },
                { year: '2028', totalTam: 50, neocloudTam: 35, selfRevenue: 0.4, status: 'estimate' },
                { year: '2030', totalTam: 100, neocloudTam: 65, selfRevenue: 0.5, status: 'estimate' },
                { year: '2033', totalTam: 250, neocloudTam: 150, selfRevenue: 0.7, status: 'estimate' },
                { year: '2035', totalTam: 500, neocloudTam: 280, selfRevenue: 1.0, status: 'estimate' },
            ],
            keyNumbers: [
                { label: 'ETH 总市值 (当前)', value: '~$420B', sub: 'ETH=$3,500', cls: 'cyan' },
                { label: 'ETH 2030E 牛市', value: '$1.5-3T', sub: 'ETH $15K-30K', cls: 'purple' },
                { label: '上市 ETH 财库 TAM 2030', value: '$80-300B', sub: '基线/牛市', cls: 'purple' },
                { label: 'BMNR 当前占比', value: '~70%', sub: '主导但被分食', cls: 'green' },
                { label: 'BMNR 2030E 占比', value: '~50%', sub: '随竞争稀释', cls: 'cyan' },
                { label: 'ETH NAV / 股 当前', value: '~$34', sub: 'ETH=$3,500', cls: 'cyan' },
                { label: '10x 所需 ETH 价格', value: '$15-20K', sub: '叠加 mNAV 1.3x + 持仓 1.5x', cls: 'red' },
                { label: 'PIPE 解锁日历风险', value: '70% 砸盘概率', sub: '2026 H2', cls: 'red' },
            ],
            sourcesNote:
                '数据来源：Ethereum Treasuries 全球公司持仓排名、CoinGecko ETH 链上数据、各 ETF 招股书 AUM 披露、JPMorgan / Citi 2025-12 ETH 主流化研报、Tom Lee Fundstrat 公开演讲。2028-2035 为基于 ETH 5-7x 增长 + 上市公司财库占比 3-5% ETH 流通量的推演。',
        },

        radar: {
            peer1Name: 'MSTR (BTC)',
            peer2Name: 'iShares ETHA',
            dimensions: [
                { dim: '加密资产持仓规模 ($)', self: 4, peer1: 10, peer2: 4 },
                { dim: '加密敞口杠杆', self: 8, peer1: 9, peer2: 5 },
                { dim: '内生收益 (staking)', self: 10, peer1: 0, peer2: 3 },
                { dim: '资本工具完整度', self: 5, peer1: 10, peer2: 8 },
                { dim: '灵魂人物影响力', self: 7, peer1: 10, peer2: 6 },
                { dim: '上行弹性', self: 9, peer1: 9, peer2: 5 },
                { dim: '下行风险控制', self: 2, peer1: 4, peer2: 6 },
                { dim: 'Track Record', self: 1, peer1: 10, peer2: 7 },
            ],
            note: '1-10 分主观评分。BMNR 在 staking 内生收益 + 上行弹性上独家领先；MSTR 在持仓规模、资本工具、Track Record、灵魂人物影响力上结构性优势；ETHA 在下行风险控制 + 流动性上稳健。三家"不同的赢法"——BMNR 必须靠 staking yield 复利 + mNAV 飞轮 + Tom Lee 叙事三管齐下证明溢价。',
        },
    },

    valuation: {
        metrics: [
            { metric: 'mNAV (市值/ETH NAV)', value: '~1.33x', benchmark: '历史区间 1.0-5.5x', read: 'fair' },
            { metric: 'mNAV 历史百分位', value: '~5-10%', benchmark: '低位 = 估值压缩', read: 'cheap' },
            { metric: 'EV/Staking 收入', value: '~38x', benchmark: '高 (溢价反映 ETH 升值期权)', read: 'rich' },
            { metric: 'EV/总收入 (含矿业)', value: '~36x', benchmark: '不可与传统比较', read: 'rich' },
            { metric: 'Forward 5Y Mult (本分析)', value: '~2.16x', benchmark: '5Y CAGR 16.6%', read: 'fair' },
            { metric: '隐含 mNAV 飞轮期权', value: '$1-3B', benchmark: 'MSTR 隐含 $20-30B 比对', read: 'cheap' },
        ],
        sotp: [
            { item: 'ETH 持仓 NAV', valuation: '~$6.4B', method: '1.83M ETH × $3,500 (2026-05-06)', note: '核心资产，与 ETH 价格 1:1' },
            { item: 'Staking 内生收益 NPV', valuation: '$2-3B', method: '$220M/年 × 5Y NPV @10% 折现', note: 'MSTR 完全不具备的红利' },
            { item: 'BTC 矿业残值', valuation: '$0.05B', method: '原矿业 ARR $15M × 3x (变现价)', note: '影响极小' },
            { item: 'mNAV 飞轮期权价值', valuation: '$1-2B', method: '未来 5 年 ETH Yield 18-22% × NPV', note: '比 MSTR 期权价值低，因稀释快 + 工具单薄' },
            { item: '资本市场工具升级期权', valuation: '$0.5-1B', method: '若推出 ETH 优先股工具，参考 MSTR STRK', note: '管理层学习能力变量' },
        ],
        sotpTotal: '$9.95-12.45B',
        sotpPerShare: '对应合理区间 $52-66 (当前 $45 略低于下沿，便宜但不极端便宜)',
    },

    recommendation: {
        rating: 'Speculative Trade / 小仓位投机',
        ratingCls: 'neutral',
        timeHorizon: '3-5 年（中期赔率工具）',
        positionSize: '0.5-2.0% 组合权重 · ETH 杠杆敞口尾部赌注',
        addingZone: 'mNAV < 1.15x (当前 1.33x) + ETH < $3,000 + PIPE 解锁尘埃落定 (2027 Q1)',
        stopLoss: 'mNAV 持续 30 天 < 1.0 + Tom Lee 公开隐退 + PIPE 投资人 13F 大幅减持 → **三条任一发生立即清仓**',
        thesis:
            '当前 $45 略低于 SOTP 区间 $52-66 下沿，估值"便宜但不极端便宜"。**真正适合 BMNR 的人只有三种**：①坚信 ETH 主流化 + 想加杠杆（赌的是上行尾部）；②想吃 staking yield 但不想自管节点；③能承受 -85% 回撤 + 不会因 PIPE 解锁恐慌卖出。其他人**直接买 ETHA / FETH**——后者在加权期望意义上接近 BMNR 但下行风险小一半。**与 MSTR 不应同时持有**——加密 β 高度共振等于 BTC + ETH 双重加杠杆。',
        keyAssumptions: [
            'ETH 5Y 不陷入 >12 个月深熊 (ETH 不长期 <$2,500)',
            'Tom Lee 5 年内不退场或失能',
            'mNAV 长期均衡 ≥ 1.15x（飞轮持续运转）',
            'PIPE 解锁分批吸收（不集中砸盘）',
            'Staking yield 持续（监管不打压）',
            'ETH Yield 维持 ≥18%/年 (相对稀释率正向)',
        ],
        sizingFormula: {
            method: 'Kelly 公式（保守版，使用 1/2 Kelly）',
            formula: 'f* = (期望回报率 − 无风险利率) / 方差 × 0.5',
            inputs: [
                { label: '10Y 期望回报率', value: '17.6% CAGR' },
                { label: '无风险利率', value: '4.5% (10Y 国债)' },
                { label: '情景标准差 (10Y)', value: '$80B (~186% of E[Mcap])' },
                { label: '完整 Kelly', value: '~1.6%' },
                { label: '1/2 Kelly (极保守)', value: '~0.8%' },
            ],
            computedSize: '0.5-2.0% 组合权重',
            reasoning:
                'BMNR 的回报方差极高（10Y 标准差 ~186% 期望值，远高于 MSTR 的 74%），加上 PIPE 解锁是日历不确定性 + Tom Lee 是个人化风险，要求取 1/2 Kelly 保守值。**分层建仓**：基础 0.5%（试水）+ 牛市信号触发 +0.5%（mNAV 飞轮明确 + ETH 突破 $5K）+ PIPE 解锁后稳定 +0.5-1%（已知风险出清）。**严格止损**：mNAV 持续 30 天 <1.0 触发立即清仓——这是与 MSTR 60 天的关键差异（BMNR 没有缓冲）。',
        },
    },

    keyPersonRisks: [
        {
            name: 'Tom Lee (董事长 · 战略灵魂)',
            role: '叙事 · 资本市场 · 机构关系',
            departProb: '中 (~25% / 5 年，年龄 50+ 但精力旺盛)',
            departImpact: '致命 —— mNAV 必跌穿 1.0，股价 -30-40%',
            mitigation: '几乎无替代者；需要 18-24 个月培育第二代言人',
            criticality: 'critical',
        },
        {
            name: 'Founders Fund / Pantera / Galaxy (PIPE 投资人)',
            role: '战略支持 · 市场信誉',
            departProb: '中 (~70% 部分减持 / 2 年内 PIPE 解锁)',
            departImpact: '高 —— 短期股价 -15-25%，但是已知不确定性',
            mitigation: '与 PIPE 投资人沟通分批解锁；新投资者轮换',
            criticality: 'high',
        },
        {
            name: 'Jonathan Bates (CEO)',
            role: '执行 · 矿业残余 · 公司治理',
            departProb: '中 (~30% / 5 年)',
            departImpact: '中 —— 可替换；执行连续性受影响',
            mitigation: '团队成熟；外部职业经理人替代池较深',
            criticality: 'medium',
        },
        {
            name: 'Erik Hovde (CFO)',
            role: '财务 · 资本市场 · 投资者关系',
            departProb: '中 (~25% / 5 年)',
            departImpact: '中 —— 资本工具创新可能受影响（与 MSTR 的 Andrew Kang 有差距）',
            mitigation: '可招募更资深 CFO 升级；行业人才池可观',
            criticality: 'medium',
        },
        {
            name: '董事会成员（Thiel 系代表）',
            role: '战略指导 · VC 网络',
            departProb: '中 (~20% / 5 年)',
            departImpact: '中 —— 信誉支撑减弱',
            mitigation: '股权结构相对均衡；可补充新 VC 加入',
            criticality: 'medium',
        },
    ],

    cashFlow: {
        narrative:
            'BMNR 的现金流模型**比 MSTR 更健康**——多了一项 staking 内生收益 ~$220M/年。**关键差异**：①软件 OCF（MSTR）vs Staking OCF（BMNR）：BMNR 是真"内生"，不依赖运营业务；②MSTR 优先股票息 $550M/年 完全靠融资覆盖，BMNR 暂无优先股负担；③BMNR 运营成本 ~$30M（小公司），$220M staking 净留 $190M 可复投买 ETH。**最大风险**：staking 监管突变（SEC 重新分类），会让这道防线失效。',
        rows: [
            { year: '2022', ocf: -3, icf: -2, fcf: 5, freeCashFlow: -5, status: 'actual' },
            { year: '2023', ocf: -2, icf: -1, fcf: 3, freeCashFlow: -3, status: 'actual' },
            { year: '2024', ocf: 1, icf: -2, fcf: 1, freeCashFlow: -1, status: 'actual' },
            { year: '2025 (转型年)', ocf: 140, icf: -5800, fcf: 5800, freeCashFlow: 135, status: 'actual' },
            { year: '2026E', ocf: 220, icf: -2000, fcf: 1900, freeCashFlow: 215, status: 'estimate' },
            { year: '2027E', ocf: 280, icf: -1500, fcf: 1300, freeCashFlow: 270, status: 'estimate' },
            { year: '2028E', ocf: 350, icf: -1000, fcf: 700, freeCashFlow: 340, status: 'estimate' },
        ],
        conversionNote:
            '**BMNR 的 Cash Conversion 与 MSTR 完全不同**：staking 是真"运营"现金流，不是融资伪装。Staking OCF / 运营成本 = ~7x，是健康的覆盖比；这意味着即使 ATM/PIPE 关闭，公司仍能维持运营和小幅增持。**关键警惕**：随着 ETH staking yield 长期可能从 3.5% 降至 2.5%（更多 ETH 质押 → 收益分散），$220M 收入可能被压缩。',
        keyRisks: [
            'SEC 重新分类 staking 服务为证券，影响 $220M 内生现金流',
            '随着 ETH 质押比例上升（当前 25% → 未来 35%+），staking yield 可能从 3.5% 降至 2-2.5%',
            'Lido / Coinbase 等节点黑客或 slashing 事件',
            'PIPE 投资人 13F 集体减持触发 mNAV 跌破 1，ATM 必关闭',
            'ETH 长期熊市 + 稀释速度过快导致股本通胀',
        ],
    },

    historicalValuation: {
        narrative:
            'BMNR 的"历史"非常短——ETH 战略仅 11 个月。mNAV 区间 **1.0-5.5x**，从 2025-07 启动期 5.5x 高点跌至当前 1.33x。**关键时刻表**：mNAV 跌破 1.15x 是逢低布局信号；mNAV >2.5x 是过热警告；mNAV 跌穿 1.0 是死亡螺旋触发线（与 MSTR 的 1.05 阈值不同，BMNR 缓冲更小）。',
        history: [
            { period: '2025-07-15 (启动)', evSales: 5500, note: 'ETH 财库故事点燃 · mNAV 5.5x 散户暴买' },
            { period: '2025-08-30', evSales: 3200, note: '冲高回落 · mNAV 3.2x' },
            { period: '2025-10', evSales: 2000, note: '持续稀释 · ETH 横盘 · mNAV 2.0x' },
            { period: '2025-12', evSales: 1700, note: '飞轮放缓 · mNAV 1.7x' },
            { period: '2026-02', evSales: 1500, note: 'PIPE 解锁担忧 · mNAV 1.5x' },
            { period: '2026-Q1', evSales: 1400, note: '盘整 · mNAV 1.4x' },
            { period: '2026-05-06 (当前)', evSales: 1330, note: 'mNAV 1.33x · 进入合理偏便宜区间' },
        ],
        currentPercentile: '5-10%',
        verdict: 'cheap',
    },

    downsideMetrics: {
        narrative:
            '只看期望 17.6% CAGR 是 research theater。基于 5 档情景，BMNR 10Y **情景标准差约 $80B**（~186% 期望值，远高于 MSTR 的 74%）。**5Y 内亏损 50%+ 的概率约 28%** —— PIPE 解锁砸盘 + ETH 熊市 + Tom Lee 离场三杀触发 -85% 回撤是真实尾部。BMNR 是**比 MSTR 更极端的尾部偏度资产**：上行很大 + 下行更大。',
        scenarioStdDev: 80,
        sharpeLike: 0.43,
        probLoss30Pct5Y: 35,
        maxDrawdownEstimate: '-85%（PIPE 解锁 + ETH 熊 + mNAV 崩塌三杀；2025-08 至 2026-05 已经从 mNAV 5.5x 跌至 1.3x = -75% 估值压缩）',
        downsideToUpsideRatio: '下行 1 vs 上行 2（MSTR 是 1:2.4，BMNR 略不利）',
    },

    sensitivity: {
        narrative: '哪个变量对 10Y 期望市值最敏感？按单变量 ±1σ 扰动排序 ——',
        variables: [
            { variable: 'ETH 长期价格 ±50%', downImpact: -25, upImpact: 60, description: 'ETH β 核心：决定一切' },
            { variable: 'mNAV 长期均衡 ±0.3x', downImpact: -12, upImpact: 15, description: '飞轮强度决定估值倍数' },
            { variable: 'PIPE 解锁吸收能力', downImpact: -10, upImpact: 2, description: '**单边下行风险** · 日历事件' },
            { variable: 'Tom Lee 持续性', downImpact: -8, upImpact: 3, description: '叙事核心存续' },
            { variable: '股本年化稀释率', downImpact: -6, upImpact: 5, description: '过度稀释吃掉 ETH Yield' },
            { variable: 'Staking yield 持续性', downImpact: -3, upImpact: 4, description: '内生现金流 + 监管' },
            { variable: '监管 staking = 证券', downImpact: -5, upImpact: 0, description: '尾部下行' },
        ],
        takeaway:
            '**最敏感三变量：ETH 长期价格、mNAV 长期均衡、PIPE 解锁吸收**。每季度只盯这三件事就够。**特别警告**：PIPE 解锁是 70% 概率的日历事件（不是黑天鹅），ETH 价格 + mNAV 是核心 β。三者同向负向时（ETH 跌 + mNAV 压缩 + PIPE 砸盘），跌幅可能是单变量的乘积效应，触发 -75% 以上回撤。',
    },

    bearPlaybook: {
        scenario: '"熊市：飞轮反向"（20% 概率）+ "死亡螺旋"（8% 概率）合计 28% 概率的完整 ruin 时间线',
        steps: [
            {
                when: 'T+0 (ETH 跌穿 $3K + PIPE 临近解锁)',
                event: 'mNAV 压缩到 1.1-1.2x；散户开始恐慌',
                signal: 'ETH 连续 30 天 <$3K；mNAV 跌穿 1.2x；推特讨论度上升',
            },
            {
                when: 'T+1-3M (PIPE 锁定期到期)',
                event: 'Founders Fund / Pantera 部分减持披露 13F；股价单日 -10-15%',
                signal: 'Form 4 内幕交易披露；机构大宗交易 reports',
            },
            {
                when: 'T+3M (ATM 关闭)',
                event: 'mNAV<1 时增发反向稀释，公司主动暂停 ATM',
                signal: '月度增发归零；管理层公开声明"暂时调整融资节奏"',
            },
            {
                when: 'T+6M (Staking 不够付运营)',
                event: 'ETH 跌穿 $2K 后 staking 收益 $130M < 运营 + 利息 $40M 缓冲（实际还够），但市场担忧加剧',
                signal: '现金流量表显示融资活动收缩；分析师评级下调',
            },
            {
                when: 'T+9M (Tom Lee 削减露面)',
                event: 'Tom Lee Twitter 活跃度降低；CNBC 出镜频次减少',
                signal: '社交媒体监测；Tom Lee 在其他场合提 BMNR 频次下降',
            },
            {
                when: 'T+12M (被迫卖 ETH)',
                event: '公司开始卖出 ETH 偿付运营成本；破除"持有不卖"承诺',
                signal: '8-K 披露 ETH 减持；股价 -50%；散户大规模抛售',
            },
            {
                when: 'T+12-18M (退市风险)',
                event: 'mNAV<0.5 + NYSE American 持续合规警告；可能被强制摘牌或重组',
                signal: '股价持续 <$5；交易所合规通知',
            },
        ],
        exitTrigger:
            '**严格止损规则**：①mNAV 持续 30 天 <1.05；②Tom Lee 公开宣布隐退或大幅减少介入；③PIPE 投资人 13F 显示集体减持 >20%；④NYSE American 发出合规警告 —— **任一条触发立即清仓**。**与 MSTR 关键差异**：BMNR 没有缓冲（年轻 + 没经过 mNAV<1 测试），不允许"等等看"。**Tom Lee 公开承认"考虑卖 ETH"是终极信号**，不留一股。',
    },

    capitalAllocation: {
        narrative:
            'BMNR 处于"被市场观察"阶段——只有 11 个月战略 track record，无法做完整评分。Tom Lee 资本市场叙事能力强，PIPE + ATM 执行效率惊人（11 个月累计 1.83M ETH），但代价是 23x 稀释。**比 MSTR 缺一档**：没有 Saylor 那种"创业家级长期 commitment"；分析师能 walk away，创始人不能。',
        scores: [
            { dimension: 'ROIIC', label: '增量资本回报率', score: 3, detail: '2025-2026 ETH 投入回报受 ETH 价格主导；自身工具效率仅中等；ETH Yield 数据不足 1 年无法评分', evidence: '2025 季报 + ETH 价格' },
            { dimension: 'Buyback', label: '回购节奏', score: 1, detail: '不回购（与 ETH 战略冲突）', evidence: '历史回购数据' },
            { dimension: 'Dividend', label: '股息政策', score: 1, detail: '无股息（合理 · staking 收入复投）', evidence: '公司指引' },
            { dimension: 'M&A', label: '并购命中率', score: 2, detail: '不做并购；唯一"并购对象"是 ETH', evidence: '历史无并购' },
        ],
        overallGrade: 'C',
        historicalROIIC: 'N/A (战略 11 个月，数据不足)',
    },

    gapAnalysis: {
        narrative:
            'BMNR 2026 关键 gap 是"管理层 5% 总供应目标过于激进"——隐含的稀释规模会让普通股东几乎归零。卖方对 ETH 持仓增长过乐观，对稀释成本低估。',
        rows: [
            { metric: 'ETH 持仓 2026 末', guidance: '"持续增持"', consensus: '2.5M ETH', selfAssumption: '2.1M ETH', gap: '-16% 保守', risk: 'medium' },
            { metric: '5Y ETH 持仓占总供应', guidance: '"目标 5%" (~6M ETH)', consensus: '4-5%', selfAssumption: '2.5%', gap: '**-50%！需要再融资 $20-30B**', risk: 'high', note: '稀释代价巨大' },
            { metric: 'ETH Yield (Tom Lee 自定义)', guidance: '30-40%', consensus: '25-30%', selfAssumption: '18-22%', gap: '**-30%！** 稀释速度被低估', risk: 'high' },
            { metric: '5Y ETH 价格', guidance: '"数万"', consensus: '$8K', selfAssumption: '$7K', gap: '一致', risk: 'low' },
            { metric: 'mNAV 长期均衡', guidance: '未明示', consensus: '1.5-1.8x', selfAssumption: '1.2-1.4x', gap: '共识过乐观 -25%', risk: 'high', note: 'ETHA 替代效应被低估' },
            { metric: 'PIPE 解锁吸收', guidance: '"分批协调"', consensus: '"温和"', selfAssumption: '70% 概率砸盘 -15-25%', gap: '**共识严重低估**', risk: 'high', note: '日历事件被忽视' },
        ],
        takeaway:
            '**最关键 Gap 三连**：①管理层 5% 目标 vs 现实 2.5%（差距 50%）；②ETH Yield 30% vs 18%（差距 30%）；③PIPE 解锁砸盘共识"温和" vs 实际 70% 概率 -15-25%。**爆雷触发点**：PIPE 第一批解锁 + ETH 同期回调 → 共识下修 → 股价 -25-40%。**这是做空 BMNR 的最佳入场点**——比 MSTR 共识 vs 自己分析的 gap 更大、风险更集中。',
    },

    benchmarkComparison: {
        narrative:
            'BMNR 10Y 期望 CAGR 17.6% vs 被动组合 60% ETHA + 40% SPY (~16.5%) 的超额回报 = **+1.1pp**（marginal 正超额）。**机会成本是 ETHA，不是现金**。真正适合 BMNR 的人：①坚信 ETH 主流化 + 想加杠杆；②想吃 staking yield 但不想自管节点；③能承受 -85% 回撤。其他人**直接买 ETHA / FETH**。仓位上限 ≤2%——"赔率工具"而非"主仓位"。',
        alternatives: [
            { name: 'ETHA (ETH ETF)', ticker: 'ETHA', expectedReturn5Y: 16, expectedReturn10Y: 18, note: '现货 ETH，无杠杆，0.25% 费用' },
            { name: 'SPY (S&P 500)', ticker: 'SPY', expectedReturn5Y: 9, expectedReturn10Y: 10, note: '美国宽基' },
            { name: 'QQQ (纳斯达克 100)', ticker: 'QQQ', expectedReturn5Y: 10, expectedReturn10Y: 12, note: '科技权重' },
            { name: '60% ETHA + 40% SPY', expectedReturn5Y: 13.2, expectedReturn10Y: 16.5, note: 'ETH 现货 + 美股宽基' },
            { name: 'MSTR (BTC 财库对照)', ticker: 'MSTR', expectedReturn5Y: 15.1, expectedReturn10Y: 15.8, note: 'BTC 杠杆同框架对比' },
            { name: '直接持有 ETH + 自质押', expectedReturn5Y: 18, expectedReturn10Y: 20, note: '零费用 + 完整 staking yield' },
            { name: '60/40 (经典)', expectedReturn5Y: 7, expectedReturn10Y: 8, note: 'SPY + 国债' },
            { name: '10Y 国债 (TLT)', ticker: 'TLT', expectedReturn5Y: 4, expectedReturn10Y: 4.5, note: '无风险' },
        ],
        selfReturn5Y: 16.6,
        selfReturn10Y: 17.6,
        excessReturn5Y: 3.4,
        excessReturn10Y: 1.1,
        justifiesPosition: 'marginal',
        takeaway:
            '**BMNR 在加权期望意义上 marginal 跑赢 "60% ETHA + 40% SPY" 被动组合 1.1pp**——比 MSTR 的负超额 -2.2pp 好。但 BMNR 有两个 ETHA 不具备的特征：①**上行尾部更厚**（mNAV 飞轮 + staking 复利双红利）；②**传统券商账户兼容性**（退休账户/保证金/期权）。仓位上限 ≤2%——"赔率工具"而非"主仓位"。',
    },

    trackRecord: {
        narrative:
            '本分析锚定 2026-05-06。以下 6 条假设是未来 12-18 个月可验证命题，3/6/12 月后回看建立分析师自我校准数据。**ETH 价格 + mNAV + PIPE 解锁吸收**三项是核心先行指标。',
        assumptions: [
            { assumption: 'ETH 持仓 2026-12-31 ≥ 2,300,000 ETH', setAt: '2026-05-06', targetDate: '2026-12-31', targetValue: '≥ 2.3M ETH', verdict: 'pending', note: '"5%" 目标的中间里程碑' },
            { assumption: 'Tom Lee 2027-05 仍在董事长职位', setAt: '2026-05-06', targetDate: '2027-05-06', targetValue: '在任', verdict: 'pending', note: '叙事核心存续' },
            { assumption: 'mNAV 2026-08 不跌穿 1.0', setAt: '2026-05-06', targetDate: '2026-08-06', targetValue: '≥ 1.0x', verdict: 'pending', note: '死亡螺旋警戒线' },
            { assumption: 'PIPE 解锁后 6 个月内未触发 -30%+ 单日跌幅', setAt: '2026-05-06', targetDate: '2027-01-31', targetValue: 'no -30%+ day', verdict: 'pending', note: '70% 概率事件' },
            { assumption: 'ETH staking 收益 2026 全年 ≥ $200M', setAt: '2026-05-06', targetDate: '2027-02-28', targetValue: '≥ $200M', verdict: 'pending', note: '内生现金流' },
            { assumption: '2026 不出现监管"ETH staking = 证券"判决', setAt: '2026-05-06', targetDate: '2026-12-31', targetValue: 'no adverse ruling', verdict: 'pending' },
        ],
        hitRate: 'N/A (全部 pending)',
    },

    dataSources: {
        narrative: '本报告数据锚定 2026-05-06。**注意**：BMNR ETH 战略仅 11 个月，数据极度依赖最新 8-K / 季报 / Tom Lee 公开声明，与最新披露存在差异的可能性较高。情景概率与 5Y/10Y 期望为本分析主观推演。',
        accessedAt: '2026-05-06',
        sources: [
            { label: 'Bitmine Investor Relations (官方)', url: 'https://bitminetech.io/investors', category: 'primary', note: '季报 + 公告' },
            { label: 'Bitmine SEC EDGAR Filings', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001829311&type=10-Q', category: 'primary' },
            { label: 'Ethereum Treasuries 全球持仓排行', url: 'https://ethereumtreasuries.net/', category: 'data', note: 'BMNR 1.83M ETH 排第 1' },
            { label: 'Bitmine PIPE 公告 (2025-07)', url: 'https://www.businesswire.com/', category: 'primary', publishedAt: '2025-07', note: '$250M Founders Fund 等参与' },
            { label: 'Tom Lee Twitter (@fundstrat)', url: 'https://twitter.com/fundstrat', category: 'secondary', note: '叙事来源' },
            { label: 'Fundstrat Global Advisors', url: 'https://fundstrat.com/', category: 'research', note: 'Tom Lee 研究机构' },
            { label: 'JPMorgan ETF 替代效应分析 (2025-12)', url: 'https://www.jpmorgan.com/insights', category: 'research' },
            { label: 'Citi Research: ETH 主流化路径', url: 'https://www.citigroup.com/global/insights', category: 'research' },
            { label: 'Yahoo Finance BMNR', url: 'https://finance.yahoo.com/quote/BMNR/', category: 'data' },
            { label: 'CoinGecko ETH 市场数据', url: 'https://www.coingecko.com/en/coins/ethereum', category: 'data' },
            { label: 'Lido / Coinbase Staking yield 数据', url: 'https://lido.fi/ethereum', category: 'data' },
        ],
    },

    correlation: {
        narrative:
            'BMNR 是**全球最高 β 的 ETH 杠杆敞口**：涨跌 90%+ 由 ETH 价格 + Tom Lee 叙事驱动。如果组合中已持有 ETH / ETHA / 加密 ETF / MSTR，加 BMNR 的**边际多元化几乎为零**——只是把 ETH 敞口加上"mNAV 飞轮和稀释"两层杠杆。**与 MSTR 高度共振**（加密 β 0.78 相关），不应同时持有。真正的 hedge 是**反加密 + 久期资产**。',
        rows: [
            { asset: '以太坊 (ETH) / ETHA', beta: 1.4, correlation: 0.94, hedgeValue: 'low', note: '完全替代品，加 BMNR = 加 ETH 杠杆' },
            { asset: 'MSTR (BTC 财库)', beta: 1.2, correlation: 0.78, hedgeValue: 'low', note: '加密 β 高度共振，不应同时持有' },
            { asset: 'SharpLink Gaming (SBET)', beta: 1.5, correlation: 0.85, hedgeValue: 'low', note: '同框架 ETH 财库' },
            { asset: 'Coinbase (COIN)', beta: 0.9, correlation: 0.65, hedgeValue: 'low', note: '加密赛道 β 重合' },
            { asset: 'BTC / IBIT', beta: 1.0, correlation: 0.72, hedgeValue: 'low', note: '加密 β 共振' },
            { asset: 'QQQ (科技股)', beta: 1.6, correlation: 0.50, hedgeValue: 'medium', note: '风险偏好相关' },
            { asset: 'SPY (美国宽基)', beta: 1.8, correlation: 0.40, hedgeValue: 'medium', note: '宏观风险偏好' },
            { asset: '黄金 (GLD)', beta: -0.1, correlation: 0.10, hedgeValue: 'medium', note: '货币替代品弱对冲' },
            { asset: '10Y 国债 (TLT)', beta: -0.2, correlation: -0.20, hedgeValue: 'high', note: 'ETH 熊市 + 降息双重保护' },
        ],
        suggestedHedge:
            '如果 BMNR 占组合 0.5-2%，建议搭配：①**反向**：5-8% TLT（ETH 熊市 + 降息双保护）+ 2-3% GLD（货币替代品对冲）；②**不要同时持有**：BMNR + MSTR + ETHA + IBIT + COIN 之和超过 8% 是重大风险（共享加密 β，深熊时同步 -50-85%）。**最佳组合**：BMNR 1.5% + ETHA 4% + MSTR 2% + IBIT 3% + TLT 7% + GLD 3%。**核心原则**：把 BMNR 当成"ETH 头寸的杠杆放大器"而非独立头寸。**与 MSTR 共振警告**：两者同时持仓的 5Y -50%+ 概率达 35%（加密寒冬 + Saylor/Lee 双失能可能性低但相关）。',
    },
}
