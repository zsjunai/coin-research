import type { CompanyDetail } from '@/types/company'

export const robinhood: CompanyDetail = {
    id: 'robinhood',
    ticker: 'NASDAQ:HOOD',
    name: 'Robinhood Markets, Inc.',
    tagline:
        '美国千禧一代零售券商龙头。**第 9 次大规模校准（2026-05-15）**：股价从 52w 高点 $153.86 已回调 50% 至 $76.86，但 Q1 2026 暴露双引擎切换——加密交易收入 -47%（$134M）拖累被预测市场 +320%（$147M、8.8B 合约）/ Trump Accounts（7月4日上线 · 4M 儿童签约）/ Bitstamp 整合三个新引擎弥补。Forward PE 从 Q3 2025 的 58x 压缩至 33x = 估值合理化。核心争议从"PFOF 单点风险"转向"加密 -47% 是否结构性 + 预测市场能否撑起第二曲线"。',
    date: '2026-05-15',

    priceCards: [
        { label: '当前股价', value: '$76.86', sub: '2026-05-15 收盘 · 距高点 -50%', cls: 'cyan' },
        { label: '52 周波动', value: '$57.68 – $153.86', sub: '2025-Q4 高点已大幅回调', cls: 'purple' },
        { label: '市值', value: '~$69.5B', sub: '~905M 股稀释', cls: 'purple' },
        { label: '分析师共识 PT', value: '$108', sub: '22-28 家中值 · 19 Buy / 5 Hold / 3 Sell', cls: 'cyan' },
        { label: 'Q1 2026 营收', value: '$1.07B', sub: '+15% YoY · 加密 -47% 拖累', cls: 'green' },
        { label: '平台资产 (AUC)', value: '$307B', sub: '+39% YoY · 27.4M 客户', cls: 'green' },
    ],

    keyFacts: {
        'Q1 2026 营收': '$1.07B (+15% YoY)',
        'Q1 2026 净利': '$346M (+3% YoY)',
        'Q1 2026 EPS': '$0.38 (+3% YoY)',
        'Q1 加密营收': '$134M (-47% YoY) · 量 $24B (-48%)',
        'Q1 Event Contracts': '$147M (+320% YoY) · 8.8B 合约创新高',
        'Q1 期权 / 股票 / NII': '$260M (+8%) / $82M (+46%) / $359M (+24%)',
        'Forward PE': '~38x (vs Q3 2025 58x · 已大幅压缩)',
        '资金客户': '27.4M (+1.7M YoY)',
        '平台资产 (AUC)': '$307B (+39%) · 股票 $208B + 加密 $30B + RIA $42B',
        'Gold 订阅': '4.3M (+36% YoY · ARPU $157 +8%)',
        '退休账户 AUC': '$27.4B (+90% YoY · 账户 1.98M +50%)',
        '2025 全年': '营收 $4.5B (+51.6%) · 净利 $1.9B (+33.5%) · 净利率 42.1%',
        '2026 OpEx 指引': '$2.7-2.825B (含 Trump Accounts +$100M)',
        'Trump Accounts': '7月4日 launch · 已 4M 儿童签约 · cost-plus 合约',
        'Bitstamp 并购': '$200M 已完成 (2025-06)',
        'WonderFi 并购': 'C$0.36/股 ≈ $179M · 2026 H1 预计完成',
        'MIAXdx (预测市场)': '与 Susquehanna 合资 · 2026 Q1 收购 · 2026 内 launch',
    },

    contracts: [
        { customer: 'Citadel Securities (主 PFOF 对手方)', amount: '~40% PFOF 营收', years: '持续', detail: '零售股票订单流最大买方；Susquehanna / Virtu 分列二三' },
        { customer: 'Kalshi (预测市场独家分发)', amount: '未披露', years: '2024 起', detail: '事件合约（政治 · 经济 · 体育 · 娱乐）独家券商合作' },
        { customer: 'Bitstamp 并购资产', amount: '$200M', years: '2025-06 完成', detail: '获取 50+ 全球加密牌照 + 机构客户 + 欧盟合规基础' },
        { customer: 'Arbitrum (代币化股票 L2 基础)', amount: '战略合作', years: '长期', detail: '基于 Arbitrum 发行欧洲代币化股票，未来自研 L1 链' },
        { customer: 'Coastal Community Bank (银行合作)', amount: '未披露', years: '长期', detail: '主要银行合作伙伴，支持 FDIC 扫至 $2.5M + 现金管理' },
    ],

    subsidiaries: [
        { name: 'Bitstamp', desc: '欧洲老牌加密交易所（2011 年成立）', stake: '全资', value: '$200M 收购价 · 2026 整合完成' },
        { name: 'Robinhood Crypto', desc: '加密做市 + 交易 + 自研 L2 链（Arbitrum）', stake: '全资', value: '2025 贡献 37% 交易营收' },
        { name: 'Robinhood Derivatives', desc: '期货交易 + 指数期权', stake: '全资', value: '2024-2025 上线' },
        { name: 'Robinhood Gold', desc: '订阅会员（$5/月 · 3% IRA 匹配 · 4.5% 现金利息）', stake: '全资', value: '4.2M 订阅 · ARR ~$250M' },
        { name: 'Robinhood Banking', desc: '2026 推出的全面银行服务 + Gold/Platinum 信用卡', stake: '全资', value: '早期阶段' },
        { name: 'Sherwood Media', desc: '金融媒体（Chartr 收购后重组）', stake: '全资', value: '未披露' },
    ],

    bullPoints: [
        { title: '估值已合理化 (PE 58x → 33x)', body: '股价从 $153.86 高点回调 50% + Forward PE 从 Q3 2025 的 58x 压缩至 33x = 反弹陷阱风险已基本出清，是 4 季度以来最佳风险/回报比' },
        { title: '预测市场年化 pace $300M+', body: '2025 全年 12B+ 合约 · Q1 2026 单季 8.8B 合约 (+320% YoY)。MIAXdx (与 Susquehanna 合资) 2026 内 launch 后摆脱 Kalshi 五五分账，每张合约从 1c 升至 2c' },
        { title: 'Trump Accounts = 18 年终身护城河', body: '7月4日上线，4M 儿童已签约。2025-2028 出生儿童每个国库注资 $1000 + 父母可继续追加。BNY 联合运营，cost-plus 合约 - 利润率小但锁定一代人客户旅程' },
        { title: '退休业务 +90% AUC 爆发', body: '退休 AUC $27.4B (+90% YoY) + 账户 1.98M (+50%)。Gold 的 3% IRA 匹配是行业内最高，正在系统性吃 Fidelity / Schwab 401(k) 滚出资金' },
        { title: 'Event Contracts 弥补加密 -47%', body: 'Q1 加密 -$118M YoY 被 Event Contracts +$112M 完美对冲，营收仍 +15%。证明 Super App 战略真有"产品组合多样性"对冲单一周期' },
        { title: 'Bitstamp + WonderFi 国际加密三柱', body: 'Bitstamp 50+ 全球牌照 (已合并 · $7B notional vol) + WonderFi 加拿大 (2026 H1 完成 · $179M) = 美国加密熊市时的国际对冲' },
    ],

    bearPoints: [
        { title: '加密 -47% 不止周期 · 是结构性挤压', body: 'Q1 加密营收 -47% 远超 BTC -25% 同期跌幅 = 用户结构性流失 (Schwab Crypto Q2 2026 launch · 0.75% fee 截胡)。加密占交易营收从 37% 降到 21%' },
        { title: 'Charles Schwab 正面进军加密', body: 'Schwab Crypto 2026-Q2 上线 · 0.75% fee (vs HOOD 0.03-0.95%) + $11.9T 客户资产 + 46.5M 账户 (100x HOOD 规模)。HOOD 加密身位首次受挑战' },
        { title: 'OpEx 2026 跃升 22%', body: '2026 OpEx 指引 $2.7-2.825B vs 2025 $2.28B = +22%。多投 $100M 给 Trump Accounts UI 建设，但 Trump Accounts 是 cost-plus 小利润业务 - 短期净利率压力' },
        { title: '预测市场监管不确定', body: 'CFTC vs 州博彩法争议持续。2028 大选周期可能触发"操纵选举"指控；MIAXdx 自营交易所若被监管挑战，将影响 $300M+ 年化营收' },
        { title: 'PFOF 永久达摩克利斯之剑', body: 'SEC Rule 605/606 持续修订；欧盟 MiFID III 已禁止 PFOF。任一任期 SEC 主席都可能进一步限制，PFOF 贡献约 30% 总营收' },
        { title: '反弹陷阱 - 仍处于半山腰', body: '股价虽已从 $153 回调到 $77，但仍是 2022 低点 $6.81 的 11x；2024-2025 涨幅 25x 的几何外推空间已被透支' },
    ],

    scenarios: [
        {
            name: '乐观: 三引擎齐发 (预测市场 + Trump Accounts + 加密复苏)',
            cls: 'bull',
            prob: 12,
            y5Mcap: '$240 – 360B',
            y5Value: 300,
            y10Mcap: '$550 – 850B',
            y10Value: 700,
            desc: '预测市场年化营收 $1.5B+ (2028 大选周期 spike) + Trump Accounts 锁定 1 代人客户旅程 + BTC 复苏 + 国际化突破 + 代币化证券 SEC 许可。2030 营收 $15-18B · 净利率 38% · EV/S 12-15x',
        },
        {
            name: '基线: 多产品组合平稳演进 (Super App 故事兑现)',
            cls: 'neutral',
            prob: 42,
            y5Mcap: '$140 – 220B',
            y5Value: 180,
            y10Mcap: '$300 – 460B',
            y10Value: 380,
            desc: '预测市场撑起加密 -47% 拖累，Trump Accounts 渐进贡献，Gold 订阅 4.3M → 8M。用户 27.4M → 40M、ARPU $157 → $260、AUC $307B → $1T。2030 营收 $10-12B · 净利率 35% · EV/S 8-10x',
        },
        {
            name: '承压: Schwab 抢份额 + 加密持续低位',
            cls: 'bear',
            prob: 36,
            y5Mcap: '$60 – 120B',
            y5Value: 90,
            y10Mcap: '$90 – 170B',
            y10Value: 130,
            desc: 'Schwab Crypto 抢走 20-30% 加密份额；预测市场监管打击；Gold 6M 触顶；Trump Accounts 进度慢。2030 营收 $7B · 净利率 28% · EV/S 5-6x',
        },
        {
            name: '尾部: PFOF 禁令 + 加密熊 + 美股调整',
            cls: 'bear',
            prob: 10,
            y5Mcap: '$20 – 40B',
            y5Value: 30,
            y10Mcap: '$30 – 50B',
            y10Value: 40,
            desc: 'SEC 全面禁止 PFOF (-30% 营收) + BTC 持续熊市 5 年 + 美股熊市叠加。2030 营收 $4B · 净利率 15% · EV/S 3x',
        },
    ],

    tenXGene: [
        { dim: '软件边际成本 · 规模化杠杆', tenBagger: '边际成本 ≈ 0', nebius: '纯软件 App，单客户服务成本 <$5/年', status: 'green' },
        { dim: '网络/平台效应', tenBagger: '显著', nebius: '社交 + 分享 + Kalshi/Bitstamp 生态，网络效应中等', status: 'yellow' },
        { dim: '数据闭环 / 专属资产', tenBagger: '独占数据 / IP / 规模', nebius: '27M 千禧用户数据 + Gold 订阅 + 品牌心智', status: 'green' },
        { dim: '毛利率 · 定价权', tenBagger: '60-80% 可持续', nebius: '毛利率 ~85%，但 PFOF + 加密费率存在监管风险', status: 'yellow' },
        { dim: '消费者触点 / 品牌', tenBagger: '直接 C 端 / 开发者心智', nebius: '千禧 + Z 世代金融 App 心智 TOP 1，"一键开户"代名词', status: 'green' },
        { dim: '再投资空间 · S-curve', tenBagger: '高 ROIC + TAM 够大', nebius: '美国 TAM 接近饱和，但代币化 + 预测市场 + 国际化打开新 S-curve', status: 'yellow' },
        { dim: '管理层 · 跨代际转型', tenBagger: '有过 0→$30B 记录', nebius: 'Vlad Tenev 连续 12 年 CEO，2021 IPO → 2022 低谷 → 2025 反转', status: 'green' },
    ],

    weightedExpectation: {
        currentMcap: 69.5,
        y5: {
            expectedMcap: 147,
            multiplier: 2.12,
            cagr: 16.2,
        },
        y10: {
            expectedMcap: 294,
            multiplier: 4.23,
            cagr: 15.5,
        },
        breakdown: [
            { scenario: 'A. 三引擎齐发', prob: 12, y5Mid: 300, y10Mid: 700, y5Contrib: 36, y10Contrib: 84 },
            { scenario: 'B. 多产品平稳演进', prob: 42, y5Mid: 180, y10Mid: 380, y5Contrib: 75.6, y10Contrib: 159.6 },
            { scenario: 'C. Schwab 抢份额', prob: 36, y5Mid: 90, y10Mid: 130, y5Contrib: 32.4, y10Contrib: 46.8 },
            { scenario: 'D. PFOF 禁令 + 熊市', prob: 10, y5Mid: 30, y10Mid: 40, y5Contrib: 3, y10Contrib: 4 },
        ],
    },

    peerName: 'Schwab / SCHW',
    coreWeaveCompare: [
        { metric: '2025 营收', nbis: '$4.5B (+51.6%)', cwv: '~$22B', winner: 'cwv' },
        { metric: '资金客户数', nbis: '27.4M (+1.7M)', cwv: '~46.5M', winner: 'cwv' },
        { metric: '平台资产 AUC', nbis: '$307B (+39%)', cwv: '~$11.9T', winner: 'cwv' },
        { metric: 'ARPU', nbis: '$157 (+8%)', cwv: '~$600 (成熟)', winner: 'cwv' },
        { metric: '净利率', nbis: '42.1% (2025)', cwv: '~30%', winner: 'nbis' },
        { metric: '加密能力', nbis: 'Bitstamp + 0.03-0.95% · 早 5 年', cwv: 'Schwab Crypto Q2 2026 launch · 0.75%', winner: 'nbis' },
        { metric: '预测市场', nbis: 'Event Contracts $147M Q1 (+320%)', cwv: '无', winner: 'nbis' },
        { metric: '品牌 / 年轻用户', nbis: '千禧 / Z 世代 TOP 1', cwv: 'X 世代 / 婴儿潮', winner: 'nbis' },
        { metric: 'Trump Accounts', nbis: '独家 + BNY (4M 儿童签约)', cwv: '无', winner: 'nbis' },
        { metric: '市值', nbis: '$69.5B', cwv: '~$170B', winner: 'cwv' },
    ],

    analysts: [
        { firm: 'Cantor Fitzgerald (最高)', target: 110, rating: 'Overweight' },
        { firm: '共识 (22-28 家)', target: 108, rating: 'Buy' },
        { firm: 'Bernstein', target: 108, rating: 'Outperform' },
        { firm: 'Mizuho', target: 105, rating: 'Buy' },
        { firm: 'Barclays', target: 89, rating: 'Overweight' },
        { firm: '最低共识', target: 48, rating: 'Sell' },
    ],

    watchlist: [
        { indicator: '加密营收 YoY (Q3/Q4 2026)', strongSignal: '回正 +0% 以上', baseSignal: '-20% 到 -10%', weakSignal: '< -30% 持续' },
        { indicator: 'Event Contracts 年化合约量', strongSignal: '> 50B/年', baseSignal: '30-45B/年', weakSignal: '< 25B/年 (Q1 已达 8.8B)' },
        { indicator: 'Trump Accounts 注册儿童数', strongSignal: '> 10M (2027 Q1)', baseSignal: '6-9M', weakSignal: '< 5M 启动慢' },
        { indicator: 'Gold 订阅量 + ARPU', strongSignal: 'Gold > 7M · ARPU > $200', baseSignal: 'Gold 5-6M · ARPU $170-190', weakSignal: 'Gold < 5M · ARPU < $160' },
        { indicator: 'MIAXdx 交易所运行', strongSignal: '2026 内 launch + 全 fee 切换', baseSignal: '2026 Q4 launch · Kalshi 渐次替换', weakSignal: '延期到 2027' },
    ],

    finalQuote:
        'Robinhood 在 Q1 2026 完成了一个反直觉的<strong>引擎切换</strong>：加密 -47% 的拖累被 Event Contracts +320% 完美对冲，营收仍 +15%。这证明 Super App 战略不只是营销话术——而是真有"组合多样性"对冲周期。<strong>当前最大 alpha 是估值合理化（PE 58x → 33x）+ Trump Accounts 18 年护城河 + 预测市场年化 $300M pace</strong>；<strong>最大风险是 Schwab Q2 launch 抢加密份额 + 反弹陷阱仍未完全出清</strong>。$76 估值已较 5 个月前 $90 改善 - vs 被动从 +2.7pp 升至 +7.7pp。合理仓位：3-5% 核心持仓。',

    revenueChart: {
        labels: ['2022 Revenue', '2023 Revenue', '2024 Revenue', '2025 Revenue', '2026E Revenue'],
        values: [1358, 1865, 2948, 4500, 5200],
        kinds: ['revenue', 'revenue', 'revenue', 'revenue', 'revenue'],
    },

    overview: {
        founded: '2013 · 由 Vlad Tenev 与 Baiju Bhatt 在加州门洛帕克创立',
        headquarters: '美国 · 加州门洛帕克',
        incorporation: '美国 Delaware',
        employees: '~3,800 (2025 末，含 Bitstamp)',
        listing: 'NASDAQ · HOOD · 2021-07-29 IPO',
        history: [
            { year: '2013', event: 'Vlad Tenev + Baiju Bhatt 创立，目标"让金融普惠化"', tag: '创立' },
            { year: '2015', event: 'App 正式上线，首创零佣金股票交易', tag: '里程碑' },
            { year: '2018', event: '用户数突破 600 万，估值达 $5.6B', tag: '增长' },
            { year: '2021-01', event: 'GameStop 事件，被迫限制 GME 买入，引发国会听证', tag: '危机' },
            { year: '2021-07', event: 'NASDAQ IPO 定价 $38，首日即破发至 $34.82', tag: 'IPO' },
            { year: '2022', event: '加密熊市 + 利率上行，股价最低 $6.81', tag: '危机' },
            { year: '2023-06', event: '启动 $1B 股票回购计划', tag: '资本' },
            { year: '2024-01', event: 'Gold Card 发布，进入信用卡市场', tag: '产品' },
            { year: '2024-06', event: '宣布 $200M 收购 Bitstamp', tag: '并购' },
            { year: '2024-10', event: '推出预测市场（Kalshi 合作）', tag: '产品' },
            { year: '2025-03', event: '纳入 S&P 500 指数', tag: '里程碑' },
            { year: '2025-06', event: 'Bitstamp 并购完成；欧洲代币化股票上线（Arbitrum L2）', tag: '全球化' },
            { year: '2025-12', event: 'Q4 EPS $0.66 创历史新高 · 股价摸高 $153.86', tag: '业绩' },
            { year: '2026-03', event: 'Platinum Card + Robinhood Banking 服务发布', tag: '产品' },
            { year: '2026-04-06', event: 'BNY + Robinhood 联合赢得 Trump Accounts 合约 (7月4日上线)', tag: '产品' },
            { year: '2026-04-28', event: 'Q1 2026 财报：营收 $1.07B (+15%) · 加密 -47% · Event Contracts +320%', tag: '业绩' },
            { year: '2026-05-15', event: '股价 $76.86 · 市值 $69.5B · 距 52w 高点 -50% · PE 已合理化至 33x', tag: '当前' },
        ],
        businessModel:
            '核心是"**零佣金 + PFOF 商业模式**"：用户免费下单，Robinhood 将订单流卖给 Citadel / Susquehanna / Virtu 等做市商获得返佣。在此基础上叠加多条第二曲线：①**Gold 订阅**（$5/月，3% IRA 匹配 + 4.5% 现金利息 + 信用卡权益）；②**加密交易**（Bitstamp + 自研 L2）；③**期权 / 期货 / 预测市场**；④**Banking + Credit Card**（信用卡 + FDIC 现金 + IRA）。战略目标：从"交易 App"升级到"金融 Super App"。',
        revenueMix: [
            { name: '交易 (Transaction)', pct: 58, note: 'Q1 2026: 期权 41% · Event Contracts 23% (从 5% 跃升) · 加密 21% (从 37% 暴跌) · 股票 13% · 其他 2%' },
            { name: '净利息收入', pct: 34, note: '保证金贷款 + 现金管理 + 信用卡利息 · Q1 +24% YoY' },
            { name: '其他 (订阅 + Banking)', pct: 8, note: 'Gold 4.3M 订阅 + Banking + Trump Accounts' },
        ],
    },

    team: [
        {
            name: 'Vlad Tenev',
            role: 'CEO · 联合创始人 · 董事长',
            background:
                '保加利亚移民，斯坦福大学数学本科 + UCLA 数学博士（未完成）。2010 年与 Baiju Bhatt 共同创立 Chronos Research 对冲基金软件，2013 年转型做 Robinhood。经历 GameStop 事件国会听证、2022 熊市低谷、Super App 战略重塑。2026 年仍持 Class B 股高投票权。',
            since: '2013',
            rating: 5,
        },
        {
            name: 'Jason Warnick',
            role: 'CFO',
            background:
                '前亚马逊副总裁（任职 24 年），AWS 增长期的关键财务操盘手。2018 年加入 Robinhood，主导 IPO + 后续资本运作。',
            since: '2018',
            rating: 5,
        },
        {
            name: 'Steve Quirk',
            role: 'Chief Brokerage Officer',
            background:
                '前 TD Ameritrade 核心交易产品负责人，2022 年加入 Robinhood。期权 / 期货 / 复杂交易产品的落地主导者，是 2023-2025 期权业务暴涨的关键推手。',
            since: '2022',
            rating: 4,
        },
        {
            name: 'Johann Kerbrat',
            role: 'VP of Crypto · Bitstamp 整合',
            background:
                '前 Robinhood Crypto CTO。主导 Bitstamp 并购 + 代币化股票上线 + 自研 L1 链战略。',
            rating: 4,
        },
    ],

    shareholders: [
        { name: 'Vlad Tenev (含信托)', pct: '~7-8%', type: '创始人', note: 'Class B 股 10:1 投票权' },
        { name: 'Baiju Bhatt (含信托)', pct: '~6%', type: '联合创始人', note: '2024 已退出日常，持股' },
        { name: 'DST Global', pct: '~10-12%', type: '早期 VC', note: 'Yuri Milner 领投' },
        { name: 'Index Ventures', pct: '~5-7%', type: '早期 VC', note: 'Series A 投资方' },
        { name: 'Vanguard / BlackRock', pct: '~8-10%', type: '被动 + 主动', note: 'S&P 500 纳入后机构持股提升' },
        { name: 'ARK Invest', pct: '~2-3%', type: '主动管理', note: 'Cathie Wood 长期看多' },
        { name: '公众流通股 + 其他机构', pct: '~55%', type: '散户 + 机构', note: 'NASDAQ 高流动性' },
    ],

    advantages: [
        {
            title: '千禧 / Z 世代品牌心智 TOP 1 (独特性 ★★★★★)',
            body: '2015 年零佣金先发 + 2021 年 GameStop 事件带来的"反叛者"品牌，使 Robinhood 在 25-40 岁人群中几乎等同于"投资 App"。Schwab / Fidelity 的品牌老化明显。',
            evidence: 'Q4 2025 funded customer 27M 中 65% 年龄 <40；Brand Finance 2025 金融 App 排名',
        },
        {
            title: 'ARPU 两年翻倍的 Super App 战略 (护城河 ★★★★★)',
            body: '2023 ARPU $105 → 2025 $191（+82%），证明多产品交叉销售真实带来用户价值。Gold + Credit Card + IRA + Crypto + Prediction 五层套娃。',
            evidence: '2025 Q4 shareholder letter；Gold 订阅从 1.5M → 4.2M 两年增长 180%',
        },
        {
            title: 'Bitstamp 国际 + 机构基础 (规模 ★★★★)',
            body: '$200M 收购成本相对获取 50+ 全球加密牌照 + 机构客户基础非常低。欧洲 MiCA 合规 + 英国 FCA + 新加坡 MAS 已全部就位，省下 3-4 年合规积累时间。',
            evidence: 'Bitstamp 官网牌照列表；2025-06 并购公告',
        },
        {
            title: '预测市场 + 代币化证券先发 (护城河 ★★★★)',
            body: '预测市场（Kalshi 独家分发）+ 代币化股票（欧洲已上线，基于 Arbitrum L2）是 Robinhood 独家跑通的新战线。2028 大选周期是预测市场的超级催化剂。',
            evidence: 'Kalshi 2024-10 合作公告；CoinDesk 2025-06 代币化股票报道',
        },
        {
            title: '干净资产负债表 + 现金流生成 (韧性 ★★★★)',
            body: '2025 Adj. EBITDA $761M (+24%) ，低 CapEx 模式。$11B+ 现金及等价物（含客户资金），公司自有净现金充裕。2022 熊市时曾大规模回购。',
            evidence: '2025 年报；回购计划持续执行',
        },
        {
            title: 'S&P 500 指数纳入 (合规身位 ★★★)',
            body: '2025-03 纳入标普 500，进入被动配置池 + 机构 401(k) 可选。用户心理学上从"高风险零售 App"升级为"美国金融基础设施"。',
            evidence: 'S&P Dow Jones 2025-03 指数调整公告',
        },
        {
            title: '跨资产类一站式体验 (用户粘性 ★★★★)',
            body: '单一 App 内：股票 + ETF + 期权 + 期货 + 加密 + 代币化股票 + 预测市场 + IRA + Credit Card + Banking。这是所有传统券商都难以复制的"体验一体化"。',
            evidence: 'Robinhood App 当前功能矩阵；NerdWallet 2026 评测',
        },
    ],

    disadvantages: [
        {
            title: 'PFOF 是永久的达摩克利斯之剑',
            body: 'SEC 对 Payment for Order Flow 的监管从未停止。2024 年 Rule 605/606 修订已要求更高透明度；任一任期的 SEC 主席都可能选择进一步限制或禁止。PFOF 贡献约 30% 总营收。',
            evidence: 'SEC Rule 605/606 修订文件；欧盟 MiFID III 已禁止 PFOF',
        },
        {
            title: '加密业务 β 极高（双刃剑）',
            body: 'Q3 2025 加密交易营收 $268M（+300% YoY）是好消息，但也意味着加密熊市时可能一夜减半。加密占交易营收 37% = 营收与 BTC 价格的相关系数 >0.7。',
            evidence: 'Q3 2025 10-Q；Robinhood 2022 熊市营收数据',
        },
        {
            title: '美国用户增长已接近饱和',
            body: '27M funded 用户 ≈ 美国 25-45 岁成人的 25%（约 1.1 亿人口）。2021 年增速 40%/年 → 2025 年增速 7%/年。除非国际扩张，否则增长天花板已临近。',
            evidence: '2025 年报；美国人口普查数据',
        },
        {
            title: '估值对增长预期极敏感',
            body: 'IPO $38 → 2022 低 $6.81 → 2025 高 $160 → 当前 $90.75，24 个月波动 230%。任何一个季度增速不达预期，股价可能 -20% 到 -40%。',
            evidence: 'NASDAQ HOOD 历史价格',
        },
        {
            title: '传统券商的深度反击',
            body: 'Charles Schwab / Fidelity / Interactive Brokers 全部加速加密、代币化、零售 App 升级。特别是 Fidelity 的 401(k) 通道 + Schwab 的资产规模（$9.5T AUC vs Robinhood $324B）在长期客户生命周期价值上碾压。',
            evidence: 'SCHW / FICS / IBKR 2025 年报',
        },
        {
            title: '预测市场监管灰色地带',
            body: 'Kalshi 模式（事件合约）在美国仍有 CFTC vs 州级博彩法争议。若 2026-2028 出现严重负面事件（操纵 / 选举干预指控），整条业务线可能被按下暂停键。',
            evidence: 'CFTC 2024 Kalshi 选举合约许可争议；部分州博彩委员会异议',
        },
        {
            title: '国际化成本高 · ARPU 低',
            body: '欧洲 MiCA、英国 FCA、新加坡 MAS、阿联酋 VARA 合规成本刚性上升。海外 ARPU 通常只有美国的 1/3-1/2，短期内难以对美国用户增长天花板构成替代。',
            evidence: '海外 fintech 通例；Revolut / N26 ARPU 对比',
        },
    ],

    shortTermCatalysts: [
        {
            when: '2026-07-04',
            event: 'Trump Accounts 正式上线（4M 儿童已签约 + BNY 联合运营）',
            impact: 'positive',
            probability: '已确定',
            magnitude: '+5-10%',
        },
        {
            when: '2026 Q3',
            event: 'Q2 2026 财报（验证加密 -47% 是否企稳 + Event Contracts 继续 +320%）',
            impact: 'mixed',
            probability: '已确定 (7 月底-8 月初)',
            magnitude: '±15-20%',
        },
        {
            when: '2026 H2',
            event: 'MIAXdx 交易所启动（与 Susquehanna 合资 · 摆脱 Kalshi 五五分账）',
            impact: 'positive',
            probability: '~70%',
            magnitude: '+10-15%',
        },
        {
            when: '2026 H1',
            event: 'WonderFi 加拿大加密交易所并购完成（C$0.36/股 ≈ $179M）',
            impact: 'positive',
            probability: '~80%',
            magnitude: '+2-5%',
        },
        {
            when: '2026 Q2',
            event: 'Schwab Crypto launch (0.75% fee) 抢占加密份额',
            impact: 'negative',
            probability: '已确定',
            magnitude: '-5-10%',
        },
        {
            when: '2026 Q4',
            event: '美联储降息对 Robinhood 净利息收入 (NII) 的影响（NII 占 35% 营收）',
            impact: 'negative',
            probability: '降息已开始',
            magnitude: '-5-10%',
        },
        {
            when: '2027',
            event: '自研 L1 链（"Robinhood Chain"）主网上线',
            impact: 'positive',
            probability: '~50%',
            magnitude: '+10-15%',
        },
        {
            when: '2028',
            event: '美国大选 → 预测市场 + 政治事件合约爆发',
            impact: 'positive',
            probability: '已确定发生',
            magnitude: '+20-40%（单季度 spike）',
        },
        {
            when: '任何时点',
            event: 'SEC 限制或禁止 PFOF',
            impact: 'negative',
            probability: '~15% / 4 年',
            magnitude: '-30-50%',
        },
        {
            when: '任何时点',
            event: 'BTC 暴跌 >30% 触发加密熊市',
            impact: 'negative',
            probability: '~20% / 2 年',
            magnitude: '-25-40%',
        },
    ],

    longTermDrivers: [
        {
            name: '千禧 / Z 世代财富转移',
            horizon: '2026-2035',
            body: '美国"大财富转移"：婴儿潮世代向千禧 + Z 世代传承 $84T 财富（2023-2045）。Robinhood 是这批资金的天然承接平台。若能吃下 5% 份额 → AUC $4T+（对比当前 $324B 即 12x）。',
            enabling: '千禧一代进入 40-50 岁财富累积高峰 + IRA/401(k) 迁移 + 品牌心智已锁定',
        },
        {
            name: '全球金融 Super App 战略',
            horizon: '2026-2032',
            body: 'Bitstamp 并购 + 代币化股票 + 自研 L1 链的组合目标：打造"全球 24/7 跨资产 Super App"（股票 / 期权 / 加密 / RWA / 预测 / 银行 / 信用卡）。欧美日韩三大市场是首选扩张地。',
            enabling: 'Bitstamp 已有 50+ 牌照；MiCA 完整实施；Arbitrum L2 基础设施',
        },
        {
            name: '订阅化转型（Gold 2.0）',
            horizon: '2026-2030',
            body: 'Gold 4.2M 订阅 → 目标 10M+（约 27M 用户的 37%）。叠加 Gold Card + Platinum Card + Banking，月均价从 $5 升至 $15-20。ARR 从 $50M → $2B+ 可期。',
            enabling: '信用卡 + Banking + IRA 匹配形成"订阅粘性堆叠"',
        },
        {
            name: '代币化证券 RWA 基础设施',
            horizon: '2027-2033',
            body: '全球代币化证券 TAM 2030 预计 $5T+。Robinhood 欧洲已先行，未来可成为"零售代币化证券入口"（类似 Coinbase 在机构侧）。若拿下 5% 份额 = $2.5M 新 AUC × 20-30bp 费率 = 显著营收。',
            enabling: 'SEC 对代币化证券监管明确化；自研 L1 链上线；BlackRock BUIDL 等机构代币化产品普及',
        },
        {
            name: '预测市场作为第四资产类',
            horizon: '2026-2033',
            body: '预测市场（事件合约）在 2028 大选 + 重大赛事催化下可能成为继股票 / 期权 / 加密后的第四大零售资产类。TAM 2030 预计 $50-100B，Robinhood 借 Kalshi 合作先发。',
            enabling: 'CFTC 监管许可持续扩展 + 2028 大选周期驱动 + Kalshi 独家合作',
        },
        {
            name: '国际化 + 新兴市场',
            horizon: '2027-2035',
            body: '欧洲 + 英国已开始，下一步：日本、新加坡、巴西、印度（通过 Bitstamp 的国际基础）。若海外用户达 20M ARPU $80 = $1.6B 新营收。',
            enabling: 'Bitstamp 牌照组合 + 本地化合作（类似 Revolut / N26 成长路径）',
        },
    ],

    riskMatrix: [
        {
            category: '监管 / 政策风险',
            level: 'critical',
            summary: 'PFOF 是最大单点风险',
            items: [
                {
                    name: 'PFOF 被限制或禁止',
                    body: 'SEC 任一任期都可能选择限制 PFOF。欧盟 MiFID III 已禁止，美国在政治压力下可能跟进。',
                    mitigation: '交易营收多元化（加密 / 期权 / 期货 / 预测市场）+ 订阅化 + Banking 净利息收入',
                },
                {
                    name: '预测市场监管反复',
                    body: 'CFTC 许可与州级博彩法争议；选举操纵指控可能迫使暂停。',
                    mitigation: 'Kalshi 为合作方承担主要合规风险；Robinhood 仅为分发通道',
                },
                {
                    name: '加密监管反转',
                    body: '下届政府若反加密，GENIUS Act + 代币化证券框架可能收紧。',
                    mitigation: 'Bitstamp 国际牌照提供对冲；多元化资产类降低单一依赖',
                },
            ],
        },
        {
            category: '宏观 / 周期风险',
            level: 'high',
            summary: '加密 β + 利率敏感 + 美股周期三重叠加',
            items: [
                {
                    name: '加密熊市',
                    body: '加密占交易营收 37%，BTC 下跌 >30% 会让交易营收减半。',
                    mitigation: '订阅 + 净利息 + 期权多元化；Bitstamp 机构业务',
                },
                {
                    name: '美联储降息',
                    body: '净利息收入占 35% 营收，每降息 100bp → NII 下降 20-25%。',
                    mitigation: 'Gold 订阅 + 信用卡收入补偿；客户资金增长部分对冲',
                },
                {
                    name: '美股熊市',
                    body: '美股下跌 >30% → AUC 缩水 + 交易量减少 + 保证金贷款违约风险。',
                    mitigation: '$11B 现金 + 快速调整运营费用能力（2022 已证明）',
                },
            ],
        },
        {
            category: '竞争风险',
            level: 'high',
            summary: '传统券商 + 加密交易所 + 国际玩家三面围攻',
            items: [
                {
                    name: 'Schwab / Fidelity 快速反击',
                    body: '传统券商正加速零售 App + 加密 + 代币化，品牌信任长期优于 Robinhood。',
                    mitigation: '千禧 / Z 世代心智先发优势 + Super App 体验集成度',
                },
                {
                    name: 'Coinbase / Binance 加密业务挤压',
                    body: 'Coinbase 机构 + 衍生品、Binance 全球规模都高于 Robinhood Crypto。',
                    mitigation: 'Bitstamp 并购补齐国际；Robinhood 零售入口优势',
                },
                {
                    name: '国际 fintech（Revolut / N26）',
                    body: '欧洲已建立 5000 万+ 用户，Robinhood 国际化撞对手。',
                    mitigation: 'Bitstamp 欧洲 + 代币化股票差异化',
                },
            ],
        },
        {
            category: '技术 / 运营风险',
            level: 'medium',
            summary: '黑客 + 运维稳定性',
            items: [
                {
                    name: '数据泄露 / 黑客',
                    body: '2021 年曾发生 700 万用户信息泄露事件。再次发生会严重打击品牌。',
                    mitigation: '安全团队 + 保险 + 历史教训后体系升级',
                },
                {
                    name: '系统宕机（GameStop 再现）',
                    body: '极端交易日系统崩溃（2021 GME 事件前车之鉴）。',
                    mitigation: '基础设施 2021 年后大规模投资升级；2023-2025 重大事件日无宕机',
                },
                {
                    name: 'Bitstamp 整合失败',
                    body: '技术栈 + 文化 + 合规整合难度大。',
                    mitigation: '2026 年整合进度过半，早期信号积极',
                },
            ],
        },
        {
            category: '财务 / 商业风险',
            level: 'medium',
            summary: '利润率依赖市场环境',
            items: [
                {
                    name: '运营费用刚性',
                    body: '合规 + 技术 + 营销支出刚性，熊市时利润率压缩明显。',
                    mitigation: '2022 已证明裁员 23% 快速调整能力',
                },
                {
                    name: '回购与现金消耗',
                    body: '$1B 回购 + 并购会持续消耗现金。',
                    mitigation: 'FCF 生成能力强（$800M+/年）',
                },
            ],
        },
        {
            category: '治理 / 声誉风险',
            level: 'low',
            summary: '创始人 GME 事件历史包袱',
            items: [
                {
                    name: 'GameStop 事件政治后遗症',
                    body: '2021 年限制 GME 买入触发国会听证，左右两党都批评 Robinhood。',
                    mitigation: '2022-2025 已在合规与透明度上补齐；品牌重塑成功',
                },
                {
                    name: '双重股权 + Tenev 控制',
                    body: 'Class B 股 10:1 投票权使 Tenev 实控超过 50% 投票权。',
                    mitigation: '行业通例；Tenev 长期 alignment 态度一致',
                },
            ],
        },
        {
            category: 'ESG 风险',
            level: 'low',
            summary: '赌博化质疑',
            items: [
                {
                    name: '"赌博化 (Gamification)" 争议',
                    body: '2021 年被批评过度游戏化投资（五彩纸屑、奖励机制），引发监管和媒体批评。',
                    mitigation: '2022 年已移除游戏化元素；教育栏目加强',
                },
            ],
        },
    ],

    profitability: {
        narrative:
            'Robinhood 是典型的"**周期性 + 高运营杠杆 + 订阅化转型**"组合：牛市时营收 × 净利率双重放大（2025 净利率 ~25%），熊市时利润可能为负（2022 净亏损 $1B）。**关键拐点**：若订阅与服务营收（Gold + Banking + 订阅 + Card）占比 2028 年突破 30%，则 Robinhood 可从"高 β 周期股"重估为"fintech SaaS"——估值倍数翻倍。',

        incomeStatement: [
            {
                year: '2021',
                revenue: '$1.82B',
                revenueNum: 1820,
                grossMargin: '~85%',
                opIncome: '-$3.69B',
                ebitda: '-$3.58B',
                ebitdaMargin: '-197%',
                netIncome: '-$3.69B',
                eps: '-$7.49',
                status: 'actual',
            },
            {
                year: '2022',
                revenue: '$1.36B',
                revenueNum: 1358,
                grossMargin: '~78%',
                opIncome: '-$1.17B',
                ebitda: '-$922M',
                ebitdaMargin: '-68%',
                netIncome: '-$1.03B',
                eps: '-$1.17',
                status: 'actual',
            },
            {
                year: '2023',
                revenue: '$1.87B',
                revenueNum: 1865,
                grossMargin: '~82%',
                opIncome: '-$541M',
                ebitda: '-$340M',
                ebitdaMargin: '-18%',
                netIncome: '-$541M',
                eps: '-$0.61',
                status: 'actual',
            },
            {
                year: '2024',
                revenue: '$2.95B',
                revenueNum: 2948,
                grossMargin: '~85%',
                opIncome: '+$1.05B',
                ebitda: '+$1.4B',
                ebitdaMargin: '47%',
                netIncome: '+$1.41B',
                eps: '$1.56',
                status: 'actual',
            },
            {
                year: '2025',
                revenue: '~$4.5B',
                revenueNum: 4500,
                grossMargin: '~85%',
                opIncome: '+$2.0B',
                ebitda: '+$761M (Adj.)',
                ebitdaMargin: '~17%',
                netIncome: '+$1.8B',
                eps: '~$2.00',
                status: 'actual',
            },
            {
                year: '2026E',
                revenue: '$5.5-6.0B',
                revenueNum: 5800,
                grossMargin: '~85%',
                opIncome: '+$2.5-3.0B',
                ebitda: '+$2.3-2.7B',
                ebitdaMargin: '~42%',
                netIncome: '+$2.0-2.3B',
                eps: '$2.2-2.6',
                status: 'guidance',
            },
            {
                year: '2027E',
                revenue: '$7-8B',
                revenueNum: 7500,
                grossMargin: '~85%',
                opIncome: '+$3.5-4.0B',
                ebitda: '+$3.2-3.8B',
                ebitdaMargin: '~45%',
                netIncome: '+$2.5-3.0B',
                eps: '$2.8-3.4',
                status: 'estimate',
            },
        ],

        marginEvolution: [
            { year: '2021', gross: 85, ebitda: -197, operating: -203, net: -203, status: 'actual' },
            { year: '2022', gross: 78, ebitda: -68, operating: -86, net: -76, status: 'actual' },
            { year: '2023', gross: 82, ebitda: -18, operating: -29, net: -29, status: 'actual' },
            { year: '2024', gross: 85, ebitda: 47, operating: 36, net: 48, status: 'actual' },
            { year: '2025', gross: 85, ebitda: 17, operating: 44, net: 40, status: 'actual' },
            { year: '2026E', gross: 85, ebitda: 42, operating: 48, net: 38, status: 'guidance' },
            { year: '2027E', gross: 85, ebitda: 45, operating: 50, net: 38, status: 'estimate' },
        ],

        milestones: [
            { year: '2021', milestone: 'NASDAQ IPO', hit: true },
            { year: '2023', milestone: '启动 $1B 股票回购', hit: true },
            { year: '2024', milestone: '全年净利转正 ($1.41B)', hit: true },
            { year: '2025-03', milestone: '纳入标普 500', hit: true },
            { year: '2025-06', milestone: 'Bitstamp 并购完成', hit: true },
            { year: '2026-03', milestone: 'Platinum Card + Banking', hit: true },
            { year: '2026', milestone: 'ARPU 突破 $220', hit: false, note: '关键目标' },
            { year: '2027', milestone: '自研 L1 链主网', hit: false },
            { year: '2028-2030', milestone: 'Gold 订阅 10M+ · 国际营收 >20%', hit: false },
        ],

        unitEconomics: [
            { metric: '资金客户数', value: '27.4M (Q1 2026 · +1.7M YoY)', source: 'Q1 2026 财报' },
            { metric: 'ARPU (年化)', value: '$157 (+8% YoY)', source: 'Q1 2026 财报' },
            { metric: 'Gold 订阅渗透率', value: '~16% (4.3M / 27.4M)', source: 'Q1 2026' },
            { metric: '平均账户规模', value: '~$11,200', source: '$307B / 27.4M' },
            { metric: '获客成本 CAC', value: '~$50-80', source: '营销费用 / 新增用户' },
            { metric: '客户 LTV', value: '~$1,400+ (估)', source: 'ARPU × 存续期' },
            { metric: 'LTV / CAC', value: '~18-28x', source: '推算' },
            { metric: '退休 AUC', value: '$27.4B (+90% YoY)', source: 'Q1 2026 财报 · 账户 1.98M (+50%)' },
        ],

        fcfPath:
            '2025 OCF 约 $1.5-1.8B，FCF $1.4-1.6B（低 CapEx 模式）。2026-2028 预计 FCF 稳定在 $2-3B/年。**轻资产模型**：无数据中心、无库存，CapEx / 营收 <4%。资金主要投向：①合规与法务；②并购（Bitstamp + 未来可能的国际 fintech 收购）；③自研 L1 链开发；④股票回购。',

        keyRisks: [
            '加密熊市时交易营收可一夜减半，即使订阅 + NII 也无法完全对冲',
            'PFOF 监管突变会造成营收结构性冲击（-30% 交易营收）',
            'Bitstamp 整合若延期或文化冲突，可能产生商誉减值',
            '营销 + 合规支出刚性，牛转熊时利润压缩明显',
        ],
    },

    competitiveLandscape: {
        summary:
            '零售金融赛道正演化为"**三层竞争**"：①**品牌心智**（Robinhood 千禧 TOP 1 vs Schwab/Fidelity 老钱）；②**跨资产类深度**（Robinhood 6+ 资产 vs IBKR 专业深度 vs Coinbase 加密垂直）；③**Super App 能力**（Robinhood + Revolut + Cash App 的消费金融一体化）。Robinhood 的核心战略是"用心智 + Super App + 加密 = 下一代金融操作系统"，但必须在 2027 年前确立国际化和代币化两大新战场身位。',

        competitors: [
            {
                name: 'Robinhood (自身)',
                type: 'specialist',
                ticker: 'HOOD',
                revenue2026E: '$5.5-6.0B',
                aiRevenue: '$5.8B (综合)',
                gpuFleet: '27M 用户 · $324B AUC',
                backlog: 'Bitstamp + Banking + L1 链',
                ebitdaMargin: '~42%',
                marketCap: '~$80B',
                nvidiaLevel: 5,
                threat: 'low',
                strength: '千禧心智 · Super App · ARPU 高增速 · 加密 · 预测市场',
                weakness: 'PFOF 依赖 · 美国集中 · AUC 仅 SCHW 1/30',
            },
            {
                name: 'Charles Schwab',
                type: 'hyperscaler',
                ticker: 'SCHW',
                revenue2026E: '~$22B',
                aiRevenue: '~$22B',
                gpuFleet: '36M 账户 · $9.5T AUC',
                backlog: '401(k) + TD Ameritrade 整合',
                ebitdaMargin: '~45%',
                marketCap: '~$170B',
                nvidiaLevel: 4,
                threat: 'high',
                strength: '规模碾压 · 机构 + 401(k) 渠道 · 品牌信任',
                weakness: '年轻用户弱 · 加密滞后 · App 体验陈旧',
            },
            {
                name: 'Fidelity (私有)',
                type: 'hyperscaler',
                ticker: '未上市',
                revenue2026E: '~$30B',
                aiRevenue: '~$30B',
                gpuFleet: '43M 账户 · $12T AUM',
                backlog: '401(k) 龙头 · BTC ETF',
                ebitdaMargin: '~40%',
                marketCap: 'N/A',
                nvidiaLevel: 4,
                threat: 'high',
                strength: '401(k) 管道 · 机构信任 · BTC ETF 先发',
                weakness: '零售 App 体验 · 创新速度 · 千禧心智不足',
            },
            {
                name: 'Interactive Brokers',
                type: 'hyperscaler',
                ticker: 'IBKR',
                revenue2026E: '~$5B',
                aiRevenue: '~$5B',
                gpuFleet: '2.5M 账户 · $500B AUC',
                backlog: '全球机构 · 专业交易',
                ebitdaMargin: '~70%',
                marketCap: '~$70B',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: '专业深度 · 全球市场覆盖 · 成本最低',
                weakness: '零售 UX · 千禧心智 · 加密浅',
            },
            {
                name: 'Coinbase',
                type: 'specialist',
                ticker: 'COIN',
                revenue2026E: '~$8.5B',
                aiRevenue: '~$8.5B (加密)',
                gpuFleet: '9.3M 交易 · ETF 托管',
                backlog: 'Deribit + Base + USDC',
                ebitdaMargin: '~32%',
                marketCap: '~$43B',
                nvidiaLevel: 4,
                threat: 'medium',
                strength: '加密合规身位 · 机构 · Deribit 衍生品',
                weakness: '非加密资产弱 · UX 专业化',
            },
            {
                name: 'SoFi',
                type: 'specialist',
                ticker: 'SOFI',
                revenue2026E: '~$3.5B',
                aiRevenue: '~$3.5B',
                gpuFleet: '10M 会员',
                backlog: '银行 + 贷款 + 投资',
                ebitdaMargin: '~20%',
                marketCap: '~$20B',
                nvidiaLevel: 2,
                threat: 'medium',
                strength: '银行牌照 + 学生贷 + 信用卡一体化',
                weakness: '交易业务弱 · 加密浅',
            },
            {
                name: 'Cash App (Block)',
                type: 'specialist',
                ticker: 'XYZ',
                revenue2026E: '~$18B',
                aiRevenue: '~$4B (投资)',
                gpuFleet: '56M 月活',
                backlog: 'P2P + BTC + 商家',
                ebitdaMargin: '~15%',
                marketCap: '~$45B',
                nvidiaLevel: 2,
                threat: 'medium',
                strength: 'P2P 网络效应 · 商家生态',
                weakness: '投资深度 · 期权 / 复杂交易',
            },
            {
                name: 'Webull',
                type: 'specialist',
                ticker: 'BULL',
                revenue2026E: '~$0.5B',
                aiRevenue: '~$0.5B',
                gpuFleet: '~5M 活跃',
                backlog: '全球零售',
                ebitdaMargin: '~10%',
                marketCap: '~$3-5B',
                nvidiaLevel: 2,
                threat: 'low',
                strength: '专业图表 · 低佣金 · 中资背景',
                weakness: '规模小 · 品牌弱 · 监管担忧',
            },
        ],

        positioning: [
            { dimension: '2025 营收', nebius: '$4.5B', industryAvg: '$3-10B', leader: 'Fidelity $30B', nebiusStrong: false },
            { dimension: 'AUC', nebius: '$324B', industryAvg: '$500B-12T', leader: 'Fidelity $12T', nebiusStrong: false },
            { dimension: '千禧/Z 世代心智', nebius: 'TOP 1', industryAvg: '中等', leader: 'Robinhood', nebiusStrong: true },
            { dimension: 'ARPU 增速', nebius: '+82% (2 年)', industryAvg: '+5-15%', leader: 'Robinhood', nebiusStrong: true },
            { dimension: '跨资产深度', nebius: '6+ 资产类', industryAvg: '2-4 类', leader: 'Robinhood / IBKR', nebiusStrong: true },
            { dimension: '加密能力', nebius: 'Bitstamp + 代币化 + L2', industryAvg: '弱 / 无', leader: 'Coinbase / Robinhood', nebiusStrong: true },
            { dimension: '订阅化转型', nebius: 'Gold 4.2M', industryAvg: '无', leader: 'Robinhood', nebiusStrong: true },
            { dimension: '国际化', nebius: '早期（Bitstamp 欧洲）', industryAvg: '强（IBKR）', leader: 'IBKR', nebiusStrong: false },
            { dimension: '机构渠道', nebius: '弱（纯零售）', industryAvg: '强', leader: 'Schwab / Fidelity', nebiusStrong: false },
            { dimension: '预测市场', nebius: 'Kalshi 独家', industryAvg: '无', leader: 'Robinhood', nebiusStrong: true },
        ],

        marketShare2026: [
            { name: 'Fidelity', pct: 28 },
            { name: 'Charles Schwab', pct: 25 },
            { name: 'Vanguard (零售部分)', pct: 12 },
            { name: 'E*TRADE (Morgan Stanley)', pct: 8 },
            { name: 'Robinhood', pct: 5 },
            { name: 'Interactive Brokers', pct: 4 },
            { name: 'Cash App + SoFi', pct: 4 },
            { name: '其他 (Webull / Public 等)', pct: 14 },
        ],

        winLoss: [
            {
                scenario: '千禧 / Z 世代开户',
                winners: 'Robinhood (独占心智)',
                losers: 'Schwab / Fidelity',
                reasoning: '25-40 岁人群"投资 App = Robinhood"品牌心智稳固，传统券商难以撼动',
            },
            {
                scenario: '零售加密交易',
                winners: 'Coinbase / Robinhood',
                losers: '传统券商',
                reasoning: 'Bitstamp 并购补齐国际，Coinbase + Robinhood 双寡头锁定美国零售加密',
            },
            {
                scenario: '401(k) / IRA 资金',
                winners: 'Fidelity / Schwab',
                losers: 'Robinhood (缺乏雇主渠道)',
                reasoning: '雇主 401(k) 提供商渠道 Robinhood 尚未突破，长期资金管道受限',
            },
            {
                scenario: '代币化证券 (欧洲)',
                winners: 'Robinhood (独占)',
                losers: '传统券商',
                reasoning: 'Arbitrum L2 代币化股票欧洲已先发，传统券商完全缺位',
            },
            {
                scenario: '专业机构 / 复杂交易',
                winners: 'Interactive Brokers',
                losers: 'Robinhood (深度不够)',
                reasoning: 'IBKR 专业深度 + 全球市场覆盖不是 Robinhood 能短期超越的',
            },
            {
                scenario: '预测市场 / 事件合约',
                winners: 'Robinhood (Kalshi 独家)',
                losers: '所有传统券商',
                reasoning: 'Kalshi 合作 + 先发优势使 Robinhood 在 2028 大选周期占据零售预测市场主场',
            },
            {
                scenario: '信用卡 + Banking',
                winners: 'SoFi / Cash App (先发) · Robinhood (追赶)',
                losers: '传统券商',
                reasoning: 'SoFi 的银行牌照 + Cash App 的 P2P 网络 Robinhood 仍在追赶',
            },
            {
                scenario: '国际零售 (欧美日韩)',
                winners: 'Revolut / N26 (欧洲) / Robinhood (后来者)',
                losers: '—',
                reasoning: 'Bitstamp 提供合规起点，但 Revolut 5000 万用户 + N26 欧洲深度在先',
            },
        ],

        structuralTrend:
            '未来 3 年行业结构性变化：①**"赢者通吃"向"分层专业化"转变**——Robinhood 占零售心智 + 加密；Schwab/Fidelity 占机构 + 401(k)；IBKR 占专业交易；②**代币化证券 + 预测市场是新战场**——Robinhood 先发，传统券商缺位；③**订阅化成标配**——Fidelity / Schwab 会跟进，但 Robinhood 的 Gold 生态已积累 3-5 年领先；④**国际化是胜负手**——Revolut / N26 在欧洲、SoFi 在北美、Robinhood 需要全球突破。2028 年前 Robinhood 必须在国际化 + 代币化 + 预测市场三个新战场确立身位，否则"美国零售龙头"会触顶。',

        tam: {
            narrative:
                '全球零售金融 TAM 超过 $50T 资产 + $2T/年交易量。Robinhood 当前 $324B AUC 仅占全球的 0.6%。**10x 回报路径**：AUC 从 $324B → $3T（10x），通过：①千禧 / Z 世代财富转移（$84T 大财富传承）；②国际扩张（欧美日韩）；③订阅化（ARPU $191 → $400）；④新资产类（代币化 + 预测市场）。三路齐头可达到 $800B 市值。',
            points: [
                { year: '2022', totalTam: 45000, neocloudTam: 10000, selfRevenue: 1.36, status: 'actual' },
                { year: '2024', totalTam: 52000, neocloudTam: 13000, selfRevenue: 2.95, status: 'actual' },
                { year: '2025', totalTam: 55000, neocloudTam: 15000, selfRevenue: 4.5, status: 'actual' },
                { year: '2026', totalTam: 58000, neocloudTam: 16500, selfRevenue: 5.8, status: 'estimate' },
                { year: '2028', totalTam: 70000, neocloudTam: 22000, selfRevenue: 10, status: 'estimate' },
                { year: '2030', totalTam: 85000, neocloudTam: 30000, selfRevenue: 18, status: 'estimate' },
                { year: '2035', totalTam: 130000, neocloudTam: 55000, selfRevenue: 40, status: 'estimate' },
            ],
            keyNumbers: [
                { label: '全球零售金融资产', value: '$55T', sub: '2025 总 TAM', cls: 'cyan' },
                { label: '千禧 / Z 世代财富传承', value: '$84T', sub: '2023-2045', cls: 'purple' },
                { label: 'Robinhood AUC', value: '$324B', sub: '+68% YoY', cls: 'green' },
                { label: '当前 TAM 渗透率', value: '~0.6%', sub: '$324B / $55T', cls: 'cyan' },
                { label: '10x 所需 AUC', value: '$3T+', sub: '增长 10x', cls: 'red' },
                { label: '美国零售经纪市占', value: '~5%', sub: '2026 估', cls: 'green' },
                { label: 'Gold 订阅数', value: '4.2M', sub: '+58% YoY', cls: 'purple' },
                { label: '零售金融 CAGR', value: '~8-10%', sub: '长期增长', cls: 'purple' },
            ],
            sourcesNote:
                '数据来源：Cerulli Associates / McKinsey 零售金融 TAM 报告、Federal Reserve 家庭资产数据、Robinhood 年报。2028-2035 为基于 ARPU 提升 + 国际扩张 + 代币化增量三重假设推演。',
        },

        radar: {
            peer1Name: 'Charles Schwab',
            peer2Name: 'Coinbase',
            dimensions: [
                { dim: '收入规模', self: 4, peer1: 10, peer2: 7 },
                { dim: '平台资产', self: 3, peer1: 10, peer2: 5 },
                { dim: '千禧/Z 心智', self: 10, peer1: 3, peer2: 8 },
                { dim: '跨资产深度', self: 9, peer1: 7, peer2: 5 },
                { dim: '加密能力', self: 8, peer1: 3, peer2: 10 },
                { dim: '订阅化转型', self: 10, peer1: 4, peer2: 6 },
                { dim: '国际化', self: 5, peer1: 5, peer2: 7 },
                { dim: '机构渠道', self: 3, peer1: 10, peer2: 8 },
            ],
            note: '1-10 分主观评分。Robinhood 在心智、订阅化、加密、跨资产"形状"最饱满；Schwab 在规模、AUC、机构渠道占绝对优势；Coinbase 在加密、机构、国际占优。Robinhood 的策略是"心智 + Super App 深度弥补规模劣势"——能否成功决定估值是 $80B 还是 $800B。',
        },
    },

    valuation: {
        metrics: [
            { metric: 'EV/Sales (TTM)', value: '~14x', benchmark: 'Payment 行业 5-10x', read: 'fair' },
            { metric: 'EV/Sales (2026E)', value: '~12x', benchmark: 'Coinbase 5x · Schwab 8x', read: 'fair' },
            { metric: 'Trailing P/E', value: '~33.6x', benchmark: 'fintech 25-35x · 已合理化', read: 'fair' },
            { metric: 'Forward P/E (2026E)', value: '~38x', benchmark: '从 Q3 2025 58x 压缩 · 已合理', read: 'fair' },
            { metric: 'Forward P/E (2027E)', value: '~28x', benchmark: 'Square / Block ~25x', read: 'fair' },
            { metric: 'PEG (基于 15% CAGR)', value: '~2.2x', benchmark: 'PEG 1-2 合理 · 略高', read: 'fair' },
        ],
        sotp: [
            { item: '核心交易业务 (2026E)', valuation: '$25-35B', method: '11x 2026E 交易营收 $2.9B × 0.42 净利率 ÷ (10% WACC - 4% 增速)', note: '加密拖累' },
            { item: '净利息收入业务', valuation: '$14-20B', method: '8x 2026E NII $2.3B × 0.5 净利率', note: '利率敏感 · Q1 +24%' },
            { item: 'Gold 订阅 + Banking (SaaS)', valuation: '$10-15B', method: '20x 2026E Gold ARR $400M', note: 'SaaS 估值法' },
            { item: 'Bitstamp + 加密业务', valuation: '$7-11B', method: '加密 -47% 拖累压低估值', note: '已合并' },
            { item: '预测市场 (MIAXdx)', valuation: '$8-15B', method: '$300M ARR × 30x 增长股估值 (Kalshi 估值 $2B 类比)', note: '2028 大选触发' },
            { item: 'Trump Accounts 期权', valuation: '$4-10B', method: '4M kids × 18 年 × $50/年 LTV', note: '终身客户旅程' },
            { item: '现金净额', valuation: '$10-12B', method: '$11B 现金 + 股权证券 - 运营负债', note: '干净资产负债表' },
        ],
        sotpTotal: '$78-118B',
        sotpPerShare: '对应合理区间 $86-130 (当前 $76.86 位于区间下沿)',
    },

    recommendation: {
        rating: '分批建仓 / 核心持仓',
        ratingCls: 'bullish',
        timeHorizon: '3-5 年（10 年视角下的中期节奏）',
        positionSize: '3-5% 组合权重 · 零售金融 Super App 核心敞口',
        addingZone: '$65-80 (当前位置已合理 · 跌破 $65 加大仓位)',
        stopLoss: 'SEC 全面限制 PFOF / Schwab Crypto 抢走 >40% 加密份额 / Event Contracts 监管打击 → 重新评估',
        thesis:
            '$76.86 已从 52w 高点 $153.86 回调 50%，PE 从 58x 压缩到 33x = 反弹陷阱风险基本出清。**看多三引擎**：①预测市场年化 $300M+ pace（MIAXdx 自营 2026 launch 后 fee 翻倍）；②Trump Accounts 18 年终身护城河（4M 儿童签约 + BNY 联合运营）；③加密 -47% 已被 Event Contracts +320% 完美对冲（Q1 营收仍 +15%）。**看空二风险**：①Schwab Crypto Q2 2026 launch 抢加密份额；②OpEx +22% 跃升期 (2026 H1 净利率承压)。vs 60-40 被动 +7.7pp 已进入"yes-justifies-3-5%"区间。',
        keyAssumptions: [
            '2026 全年营收 ≥$5.0B（Q1 1.07B × 4.5 = $4.8B）',
            '加密营收 2026 H2 同比回正（vs Q1 -47%）',
            'MIAXdx 2026 内 launch，Event Contracts 全年 ≥40B 合约',
            'Trump Accounts 2027 Q1 注册 ≥8M 儿童',
            '2026-2028 SEC 不禁止或严重限制 PFOF',
        ],
        sizingFormula: {
            method: 'Kelly 公式（保守版，使用 1/4 Kelly）',
            formula: 'f* = (期望回报率 − 无风险利率) / 方差 × 0.5',
            inputs: [
                { label: '10Y 期望回报率', value: '15.5% CAGR' },
                { label: '无风险利率', value: '4.5% (10Y 国债)' },
                { label: '情景标准差 (10Y)', value: '$210B (~71% of E[Mcap])' },
                { label: '完整 Kelly', value: '~21%' },
                { label: '1/4 Kelly (保守)', value: '~5%' },
            ],
            computedSize: '3-5% 组合权重',
            reasoning:
                '估值合理化后，10Y CAGR 15.5% (基础) vs 4.5% 无风险 = 11pp 风险溢价。情景标准差降至 71% (vs 校准前 97%)——因为 4 引擎组合 (交易 + NII + 订阅 + Event Contracts) 平滑了单一加密 β 风险。**分层建仓**：基础 3% (估值合理 + 三引擎)+ 加密 Q3 回正 +1% (周期信号)+ MIAXdx 上线 +1% (预测市场加速)= 最高 5%。**反 Coinbase 配对**：与 Coinbase 合计 < 8% (两者共享加密 β)；不要 + Schwab 因竞争关系增加重复敞口。',
        },
    },

    keyPersonRisks: [
        {
            name: 'Vlad Tenev (CEO · 创始人)',
            role: '战略 · 产品 · 文化塑造',
            departProb: '低 (~5% / 5 年)',
            departImpact: '极高 —— 股价短期 -30%，Super App 战略连续性断裂',
            mitigation: '已执掌 12 年，双重股权控制 50%+ 投票权；Jason Warnick (CFO) 可短期代理',
            criticality: 'critical',
        },
        {
            name: 'Jason Warnick (CFO)',
            role: '财务治理 · 资本市场 · 投资者关系',
            departProb: '中 (~12% / 5 年)',
            departImpact: '高 —— IPO 后投资者关系枢纽，过渡期股价波动',
            mitigation: '亚马逊背景深厚，团队已建制；接班梯队培养中',
            criticality: 'high',
        },
        {
            name: 'Steve Quirk (CBO)',
            role: '交易产品 · 期权 / 期货深度',
            departProb: '中 (~15% / 5 年)',
            departImpact: '中高 —— 期权 / 期货业务增长动能可能放缓',
            mitigation: 'TD Ameritrade 背景人脉广；替代者可从 IBKR / Schwab 招募',
            criticality: 'high',
        },
        {
            name: 'Johann Kerbrat (VP Crypto)',
            role: 'Bitstamp 整合 · 代币化 · L1 链',
            departProb: '中 (~20% / 5 年)',
            departImpact: '中 —— 加密战线整合节奏受影响',
            mitigation: 'Bitstamp 原团队保留；加密人才市场流动性高',
            criticality: 'medium',
        },
    ],

    cashFlow: {
        narrative:
            'Robinhood 是**典型的"轻资产现金生成器"**：无数据中心、无库存、无长期合同，CapEx / 营收 <4%。2025 年 OCF 约 $1.5-1.8B，FCF $1.4-1.6B。**关键观察指标：FCF / Revenue 比率**——决定 Robinhood 在不同市场环境下的现金转化能力。历史上该比率在 0.25-0.35（健康），熊市时可能跌至 0.1-0.15。',
        rows: [
            { year: '2022', ocf: -480, icf: -100, fcf: 50, freeCashFlow: -580, status: 'actual' },
            { year: '2023', ocf: 320, icf: -60, fcf: -40, freeCashFlow: 260, status: 'actual' },
            { year: '2024', ocf: 1200, icf: -80, fcf: -800, freeCashFlow: 1120, status: 'actual' },
            { year: '2025', ocf: 1800, icf: -250, fcf: -1000, freeCashFlow: 1550, status: 'actual' },
            { year: '2026E', ocf: 2500, icf: -300, fcf: -800, freeCashFlow: 2200, status: 'estimate' },
            { year: '2027E', ocf: 3200, icf: -400, fcf: -600, freeCashFlow: 2800, status: 'estimate' },
            { year: '2028E', ocf: 4000, icf: -500, fcf: -500, freeCashFlow: 3500, status: 'estimate' },
        ],
        conversionNote:
            'Cash Conversion Ratio = OCF / Net Income。2024-2025 约 1.0-1.2x（健康）。2026+ 预期稳定在 1.1-1.3x。ICF -$250M (2025) 主要来自 Bitstamp 收购；FCF -$1B (2025) 包含回购 + 股权激励结算。',
        keyRisks: [
            '熊市时 OCF 可能从 $1.8B 骤降至 $500M 以下（2022 已证明）',
            'PFOF 被限制会立即冲击 OCF（影响交易营收 30%）',
            '加密熊市时回购可能暂停，FCF 转回 +（看似改善但实则业务恶化）',
            '国际扩张 + 自研 L1 链投入会在 2026-2028 压低 FCF $300-500M/年',
        ],
    },

    historicalValuation: {
        narrative:
            'Robinhood 2021-07 上市，有 5 年交易历史。**EV/Sales 区间 3-30x**，反映加密 + 美股双重周期性。当前 ~12x 2026E 处于上市以来 **45% 分位**（合理偏中位）。Forward PE 已从 Q3 2025 的 58x 大幅压缩到 33-38x，反弹陷阱风险基本出清。对标：Coinbase 5x · Schwab 8x · Shopify 15x。',
        history: [
            { period: '2021-Q3 (IPO 后)', evSales: 30, note: 'IPO 狂热 $70+' },
            { period: '2022-Q2 (熊市初)', evSales: 10, note: '$10 以下' },
            { period: '2022-Q4 (低点)', evSales: 3, note: '$6.81 历史低' },
            { period: '2023-Q4', evSales: 5, note: '缓慢复苏' },
            { period: '2024-Q4 (Trump 胜选)', evSales: 14, note: '$40+' },
            { period: '2025-Q2 (S&P 纳入)', evSales: 20, note: '$70+' },
            { period: '2025-Q4 (52w 高点)', evSales: 28, note: '$153.86 历史高' },
            { period: '2026-Q1 (Q4 miss)', evSales: 16, note: '$90 业绩 miss 回调' },
            { period: '2026-Q2 (当前 $76.86)', evSales: 12, note: 'PE 58x → 33x 合理化 · 距高点 -50%' },
        ],
        currentPercentile: '45%',
        verdict: 'fair',
    },

    downsideMetrics: {
        narrative:
            '只看期望 15.5% CAGR 是 research theater。基于 4 档情景，Robinhood 10Y **情景标准差约 $210B**（~71% 期望值，比校准前的 97% 大幅下降）。**5Y 内亏损 30%+ 的概率约 25%**——估值合理化 + 三引擎组合（交易 + NII + 订阅 + Event Contracts）已结构性降低单一周期 β 风险。但 PFOF 监管仍是不可量化尾部。',
        scenarioStdDev: 210,
        sharpeLike: 1.07,
        probLoss30Pct5Y: 25,
        maxDrawdownEstimate: '-40% 到 -60%（2022 年曾从 $85 跌至 $6.81 = -92%，但当前 $77 已较 52w 高 $154 回调 50% · 大底已确立可能性增加）',
        downsideToUpsideRatio: '下行 1 vs 上行 5（单次下跌 $20-30B，单次上冲 $100-150B）',
    },

    sensitivity: {
        narrative: '哪个变量对 10Y 期望市值最敏感？按单变量 ±1σ 扰动排序 ——',
        variables: [
            { variable: 'PFOF 监管情景 (维持 vs 禁止)', downImpact: -80, upImpact: 20, description: '核心商业模式单点风险' },
            { variable: 'BTC / 加密长期价格 ±50%', downImpact: -60, upImpact: 100, description: '加密占交易营收 37%' },
            { variable: 'ARPU 2030 $250 vs $450', downImpact: -50, upImpact: 130, description: 'Super App 战略成败' },
            { variable: 'Gold 订阅 7M vs 15M', downImpact: -35, upImpact: 70, description: '订阅化深度' },
            { variable: '美联储终端利率 ±100bp', downImpact: -30, upImpact: 25, description: 'NII 占 35% 营收' },
            { variable: '国际营收占比 2030 5% vs 25%', downImpact: -20, upImpact: 60, description: '国际化能否突破' },
            { variable: '代币化证券 + 预测市场营收', downImpact: -15, upImpact: 80, description: '新战场兑现' },
            { variable: 'SCHW / FIDELITY 竞争强度', downImpact: -40, upImpact: 15, description: '传统券商反击深度' },
        ],
        takeaway:
            '**最敏感三变量：PFOF 监管、ARPU 演进、加密价格**。每季度追踪这三项，尤其 PFOF 监管信号是决定 Robinhood 估值上限的关键——如果 PFOF 被限制，所有其他增长故事都打折。',
    },

    bearPlaybook: {
        scenario: '"悲观：PFOF 受限 + 加密熊 + Gold 饱和"（27% 概率）的完整 ruin 路径',
        steps: [
            {
                when: '2026 Q4 - 2027 Q1',
                event: 'SEC 主席更迭，启动 PFOF 全面限制立法进程',
                signal: 'SEC 新主席公开表态；行业游说团体紧急集结；欧盟 MiFID III 执行细节趋严',
            },
            {
                when: '2027 Q1 - Q2',
                event: 'BTC 跌破 $60K，加密熊市开始；加密交易营收 QoQ -40%',
                signal: 'BTC 连续 3 月负收益；交易量 MoM -30%；加密 ETF 资金流出',
            },
            {
                when: '2027 H2',
                event: 'Gold 订阅增速停滞在 5M；Schwab / Fidelity 推出类似订阅产品',
                signal: 'Gold QoQ 净增 < 100k；竞品发布公告；渗透率触顶 18%',
            },
            {
                when: '2028',
                event: '预测市场监管争议（大选干预指控）；CFTC 暂停部分合约',
                signal: '媒体曝光操纵案例；参议院听证会；Kalshi 被迫调整模式',
            },
            {
                when: '2028-2029',
                event: 'PFOF 正式法规生效，限制零售订单流返佣至机构水平（bps 级）',
                signal: '法规正式发布；Robinhood 交易营收 YoY -30%',
            },
            {
                when: '2029-2030',
                event: 'Robinhood 沦为"美国零售龙头但增长乏力"，估值回归 8-10x EV/S；市值稳定在 $40-60B',
                signal: '营收复合增速 <10%；ARPU 停滞在 $220；Super App 故事失效',
            },
        ],
        exitTrigger:
            '任一步骤在时间表前 1 个季度提前发生 → **减仓 50%**。连续 2 条发生 → **清仓观望**。特别关注：PFOF 监管动向 + BTC 趋势两项"先行指标"。',
    },

    capitalAllocation: {
        narrative:
            'Robinhood 2023-2025 完成"从烧钱到盈利"的转型，现在进入"资本回报股东"阶段——$1B 股票回购已执行。Bitstamp $200M 并购是精彩的"国际合规牌照 + 机构客户基础"打包购买。管理层（Tenev）从"激进增长"转向"成熟配置者"的身份切换。',
        scores: [
            { dimension: 'ROIIC', label: '增量资本回报率', score: 3, detail: '2024 净利率 48% · 2025 ~40%，ARPU +82% 说明增量客户获取效率高', evidence: '2024-2025 财报' },
            { dimension: 'Buyback', label: '回购节奏', score: 5, detail: '2023 起 $1B 回购已执行大部分；2025 宣布新一轮；属机构类 fintech 中最积极', evidence: '2024 年报 · Q4 2025' },
            { dimension: 'Dividend', label: '股息政策', score: 1, detail: '无股息（合理 · 还需保留现金）', evidence: '公司指引' },
            { dimension: 'M&A', label: '并购命中率', score: 4, detail: 'Bitstamp $200M 以低价买到 50+ 全球加密牌照 + 机构客户基础，是 2024-2025 最精明并购之一', evidence: '2025-06 并购完成' },
        ],
        overallGrade: 'B',
        historicalROIIC: '~18-22% (核心业务稳态)',
    },

    gapAnalysis: {
        narrative:
            'Robinhood 2026 最大 gap 是"管理层已经暗示增速放缓"vs 共识仍乐观。Q4 2025 业绩管理层给出保守 2026 展望，卖方尚未完全下调预期——这是"gap 触发爆雷"的典型位置。',
        rows: [
            { metric: '2026 营收增速', guidance: '<+25% (管理层保守)', consensus: '+30%', selfAssumption: '+25%', gap: '-5pp 保守', risk: 'high', note: '管理层已预警' },
            { metric: '2026 Q1 EPS', guidance: '$0.40', consensus: '$0.43', selfAssumption: '$0.40', gap: '-7%', risk: 'medium' },
            { metric: 'Gold 订阅 2026 末', guidance: '未指引', consensus: '5.5M', selfAssumption: '5.2M', gap: '小幅保守', risk: 'low' },
            { metric: '加密营收占交易营收', guidance: '未指引', consensus: '30%', selfAssumption: '28%', gap: '基本一致', risk: 'medium', note: 'BTC 2026 Q4 走势决定' },
            { metric: 'Bitstamp 整合贡献', guidance: '2026 H2 完成', consensus: '$200M 新营收', selfAssumption: '$150M (保守)', gap: '-25%', risk: 'medium', note: '整合可能延期' },
        ],
        takeaway:
            '**最关键 Gap：管理层 +25% vs 共识 +30%**。5pp gap + 管理层先发指引说明卖方将会被迫下修，未来 2-3 份季报可能触发 -15% 的估值压缩。做多需耐心等待共识下修后入场。',
    },

    benchmarkComparison: {
        narrative:
            'Robinhood 10Y 期望 CAGR 15.5% vs 被动 60/40 组合 7.8%——超额 +7.7pp，**进入"yes-justifies-3-5%"区间**。估值合理化（PE 58x → 33x）+ 三引擎切换是主要 alpha 来源。vs QQQ 12% 超额 +3.5pp 仍有意义——因为 HOOD 提供了 QQQ 无法复制的 Trump Accounts 长尾 + 预测市场期权价值。',
        alternatives: [
            { name: 'SPY (S&P 500)', ticker: 'SPY', expectedReturn5Y: 9, expectedReturn10Y: 10, note: '美国宽基' },
            { name: 'QQQ (纳斯达克 100)', ticker: 'QQQ', expectedReturn5Y: 10, expectedReturn10Y: 12, note: '科技权重' },
            { name: '60/40', expectedReturn5Y: 7, expectedReturn10Y: 8, note: '经典稳健' },
            { name: '10Y 国债 (TLT)', ticker: 'TLT', expectedReturn5Y: 4, expectedReturn10Y: 4.5, note: '无风险' },
            { name: 'SCHW (Schwab)', ticker: 'SCHW', expectedReturn5Y: 7, expectedReturn10Y: 8, note: '传统券商竞品' },
            { name: 'XLF (金融 ETF)', ticker: 'XLF', expectedReturn5Y: 8, expectedReturn10Y: 9, note: 'Fintech 对照' },
        ],
        selfReturn5Y: 16.2,
        selfReturn10Y: 15.5,
        excessReturn5Y: 8.2,
        excessReturn10Y: 7.7,
        justifiesPosition: 'yes',
        takeaway:
            '**超额 +7.7pp 进入 yes 区间**。校准前的 +2.7pp marginal 仓位升级到 yes - 主要因为 ①股价回调 50% + PE 合理化；②预测市场 +320% 新引擎被市场低估；③Trump Accounts 终身客户旅程刚显现。vs QQQ +3.5pp 超额仍有意义——HOOD 提供 QQQ 不能复制的 fintech / 加密 / 退休组合敞口。**最佳搭配**：HOOD 4% + QQQ 30% + BTC 5% + TLT 6% - 形成"宽基 + 科技 + 加密 + 久期"四象限组合。',
    },

    trackRecord: {
        narrative:
            '本分析锚定 2026-05-15。以下 6 条可验证命题，2027 Q1 回看。',
        assumptions: [
            { assumption: '2026 全年营收 ≥$5.0B', setAt: '2026-05-15', targetDate: '2027-02-28', targetValue: '≥$5.0B', verdict: 'pending', note: 'Q1 1.07B × 4.5 = $4.8B 基线' },
            { assumption: '加密营收 Q3/Q4 2026 同比回正', setAt: '2026-05-15', targetDate: '2027-02-28', targetValue: 'YoY ≥0%', verdict: 'pending', note: 'vs Q1 -47% 拐点' },
            { assumption: 'MIAXdx 交易所 2026 内 launch', setAt: '2026-05-15', targetDate: '2026-12-31', targetValue: 'live trading', verdict: 'pending', note: '脱离 Kalshi 五五分账关键' },
            { assumption: 'Trump Accounts 2027 Q1 注册 ≥8M', setAt: '2026-05-15', targetDate: '2027-03-31', targetValue: '≥8M kids', verdict: 'pending', note: '当前 4M' },
            { assumption: 'Event Contracts 2026 全年 ≥40B 合约', setAt: '2026-05-15', targetDate: '2027-02-28', targetValue: '≥40B 合约', verdict: 'pending', note: 'Q1 已 8.8B 年化 35B' },
            { assumption: '股价 12 个月触及 $100+', setAt: '2026-05-15', targetDate: '2027-05-15', targetValue: '≥$100', verdict: 'pending', note: '共识 $108 中值' },
        ],
        hitRate: 'N/A (全部 pending)',
    },

    dataSources: {
        narrative: '本报告数据锚定 2026-05-15（第 9 次大规模校准）。核心数据来自 Robinhood Q1 2026 财报（2026-04-28）、SEC 10-Q、Bitstamp/WonderFi 并购公告、主流财经媒体。情景概率与 10Y 期望为本分析主观推演。',
        accessedAt: '2026-05-15',
        sources: [
            { label: 'Robinhood Q1 2026 Results', url: 'https://investors.robinhood.com/news-releases/news-release-details/robinhood-reports-first-quarter-2026-results', category: 'primary', publishedAt: '2026-04-28', note: '营收 $1.07B (+15%) · 加密 -47% · Event Contracts +320%' },
            { label: 'Robinhood Q4/FY2025 Results', url: 'https://investors.robinhood.com/news-releases/news-release-details/robinhood-reports-fourth-quarter-and-full-year-2025-results', category: 'primary', publishedAt: '2026-02-10', note: '全年营收 $4.5B (+51.6%) · 净利 $1.9B' },
            { label: 'Trump Accounts (BNY + Robinhood) 合约', url: 'https://www.cnbc.com/2026/04/06/treasury-trump-accounts-bny-robinhood.html', category: 'primary', publishedAt: '2026-04-06', note: '4M 儿童已签约 · 7月4日 launch' },
            { label: 'MIAXdx 收购 (与 Susquehanna 合资)', url: 'https://defirate.com/news/robinhood-q1-earnings-show-prediction-markets-holding-strong-as-rothera-exchange-nears-launch/', category: 'research', note: '2026 内 launch' },
            { label: 'Schwab Crypto Q2 2026 Launch', url: 'https://www.cnbc.com/2026/04/16/charles-schwab-to-launch-direct-bitcoin-ethereum-trading-to-compete-with-robinhood.html', category: 'secondary', publishedAt: '2026-04-16', note: '0.75% fee · 加密竞争加剧' },
            { label: 'Cantor Fitzgerald PT $110 + 共识 $108', url: 'https://www.marketbeat.com/stocks/NASDAQ/HOOD/forecast/', category: 'research' },
            { label: 'Robinhood Q3 2025 Results', url: 'https://investors.robinhood.com/news-releases/news-release-details/robinhood-reports-third-quarter-2025-results', category: 'primary', publishedAt: '2025-11' },
            { label: 'Bitstamp $200M 收购完成', url: 'https://www.theblock.co/post/356701/robinhood-bitstamp-acquisition', category: 'secondary', publishedAt: '2025-06' },
            { label: '代币化股票 + Arbitrum L2 (CoinDesk)', url: 'https://www.coindesk.com/business/2025/06/30/robinhood-pushes-deeper-into-crypto-with-own-blockchain-tokenized-stock-launch', category: 'secondary' },
            { label: 'Q3 2025 交易营收 +129% 分析', url: 'https://insights4vc.substack.com/p/q3-2025-results-robinhood-vs-coinbase', category: 'research' },
            { label: 'Robinhood Banking + Platinum Card', url: 'https://www.crowdfundinsider.com/2026/03/268874-robinhood-markets-now-offers-banking-services-gold-card-to-streamline-spending-trading-investing/', category: 'secondary', publishedAt: '2026-03' },
            { label: 'Bernstein $130 / Goldman $91 / Barclays $89 Targets', url: 'https://public.com/stocks/hood/forecast-price-target', category: 'research' },
            { label: 'Yahoo Finance HOOD', url: 'https://finance.yahoo.com/quote/HOOD/', category: 'data' },
            { label: 'SEC PFOF 监管 Rule 605/606', url: 'https://www.sec.gov/files/dera_wp_payment-order-flow-2501.pdf', category: 'primary' },
        ],
    },

    correlation: {
        narrative:
            'Robinhood 是**零售金融 + 加密 + 美股的复合敞口**：涨跌约 50% 由美股驱动、30% 由加密驱动、20% 由 fintech 叙事驱动。如果组合中已持有 BTC / Coinbase / Circle / Visa，加 Robinhood 的**边际多元化有限**。真正的 hedge 是**反周期 + 非交易相关资产**。',
        rows: [
            { asset: 'Coinbase (COIN)', beta: 1.1, correlation: 0.75, hedgeValue: 'low', note: '加密 + 零售相关性高，但 Coinbase 加密占比更高' },
            { asset: '比特币 (BTC)', beta: 0.8, correlation: 0.60, hedgeValue: 'medium', note: '加密权重仅占 37% 交易营收，相关性中等' },
            { asset: 'Charles Schwab (SCHW)', beta: 0.6, correlation: 0.50, hedgeValue: 'medium', note: '传统券商对照，竞争关系' },
            { asset: 'Block / Square (XYZ)', beta: 1.0, correlation: 0.65, hedgeValue: 'low', note: 'fintech + 加密 + 消费金融高度相似' },
            { asset: 'Visa / Mastercard (V/MA)', beta: 0.5, correlation: 0.40, hedgeValue: 'medium', note: '支付行业对标，低相关' },
            { asset: '10Y 国债 (TLT)', beta: -0.3, correlation: -0.40, hedgeValue: 'high', note: '降息时上涨，但 Robinhood NII 也会受损' },
            { asset: '黄金 (GLD)', beta: -0.1, correlation: -0.10, hedgeValue: 'medium', note: '宏观避险，弱相关' },
        ],
        suggestedHedge:
            '如果 Robinhood 占组合 3-5%，建议搭配：①**反向**：5-8% TLT（加密熊 + 美股调整双重保护）+ 2-3% GLD（宏观对冲）；②**不要同时持有**：Robinhood + Coinbase + Circle 三者加总超过 12% 是重大风险（三者共享加密 β + fintech 监管敏感）。**最佳组合**：Robinhood 4% + Coinbase 4% + 传统券商（SCHW）3% + TLT 6% + GLD 2%（分散零售金融 + 加密敞口）。',
    },
}
