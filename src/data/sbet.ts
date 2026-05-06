import type { CompanyDetail } from '@/types/company'

export const sbet: CompanyDetail = {
    id: 'sbet',
    ticker: 'NASDAQ:SBET',
    name: 'SharpLink Gaming',
    tagline:
        '全球第二大上市公司 ETH 财库（~580K ETH · 占总供应 ~0.48%）。2025-05 由原体育博彩营销公司转型，董事长 Joseph Lubin（以太坊联合创始人 + ConsenSys 创始人）启动 ETH 财库战略。**结构性差异 vs BMNR**：Lubin 是加密原生"教父级"叙事来源（远超 Tom Lee 的金融圈分析师身位），但代价是规模仅 BMNR 1/3、稀释速度 30 倍/年（更激进）、Lubin 是兼职（主业 ConsenSys）、流动性陷阱（NASDAQ 小盘）。当前 mNAV 1.48x 比 BMNR 略贵但还未经历 mNAV<1 测试。**这是档案库中最具投机性质的标的之一**——加密尾部赌注的尾部。',
    date: '2026-05-06',

    priceCards: [
        { label: '当前股价', value: '~$20', sub: '2026-05-06 估算', cls: 'cyan' },
        { label: '52 周波动', value: '$3 – $80', sub: '上市以来极端波动', cls: 'red' },
        { label: '市值', value: '~$3B', sub: '约 150M 股稀释（12 个月增 30x）', cls: 'purple' },
        { label: 'ETH 持仓', value: '~580K ETH', sub: '占总供应 ~0.48%', cls: 'cyan' },
        { label: 'ETH NAV / 股', value: '~$13.5', sub: 'ETH=$3,500 假设', cls: 'green' },
        { label: 'mNAV (市值/NAV)', value: '~1.48x', sub: '已从 6.0x 高点压缩', cls: 'red' },
    ],

    keyFacts: {
        'ETH 持仓': '~580,000 ETH (估算 · 2026 Q1)',
        'ETH 平均成本': '~$3,250 / ETH',
        '累计投入资本': '~$1.9B',
        '已发行普通股': '~150M (12 个月从 ~5M 暴增)',
        'PIPE 融资 (2025-06)': '~$425M (ConsenSys / Pantera / Galaxy / ParaFi 参与)',
        '体育博彩业务 ARR': '~$18M ("Fans Cohort" 等产品)',
        'ETH NAV (ETH=$3,500)': '~$2.03B',
        'mNAV (当前)': '~1.48x',
        'mNAV 历史峰值': '~6.0x (2025-06 启动期)',
        'Staking 年化收益': '~$71M (580K × 3.5% × $3,500)',
        'Lubin 加入时间': '2025-05 (董事长)',
        'Lubin 主业': 'ConsenSys / MetaMask / Linea (SBET 是兼职)',
        '公司年龄 (ETH 战略)': '12 个月',
        '指数纳入': 'Russell 2000 (2026)',
    },

    contracts: [
        { customer: '首轮 PIPE 融资 (2025-06)', amount: '~$425M', years: '锁定期 6-12 月', detail: 'ConsenSys、Pantera、Galaxy Digital、ParaFi 等参与；2026 H2 陆续解锁，砸盘风险 70%' },
        { customer: '后续 ATM 增发 (2025 全年)', amount: '~$1.5B 累计', years: '持续滚动', detail: '通过 At-the-Market 增发持续募资买 ETH，30x 稀释主因' },
        { customer: 'ConsenSys 战略合作 (隐性)', amount: '未公开估值', years: '长期', detail: 'Lubin 串联，可能未来共享 Linea L2 / MetaMask 流量与技术' },
        { customer: 'Coinbase Custody / Anchorage', amount: 'ETH 托管', years: '长期', detail: '机构级冷钱包 + 多机构托管' },
        { customer: 'Lido / Coinbase Staking', amount: 'ETH 质押', years: '长期', detail: '通过去中心化质押协议获 ~3.5% staking yield' },
    ],

    subsidiaries: [
        { name: 'ETH Treasury (核心资产)', desc: '~580K ETH 全球第二大上市公司持仓', stake: '直接持有', value: '~$2.03B (ETH=$3,500)' },
        { name: 'Staking 收益管道', desc: '通过 Lido + Coinbase 节点质押', stake: '运营', value: '$71M/年内生现金流' },
        { name: '体育博彩营销 (Fans Cohort)', desc: '原主营业务，规模微小', stake: '全资', value: '~$30M (10x ARR · $18M)' },
        { name: 'Lubin / ConsenSys 联动期权', desc: 'Linea L2 / MetaMask / Infura 战略联动可能', stake: '隐性', value: '$0.3-0.6B (期权 NPV)' },
        { name: '资本市场工具 (ATM + PIPE)', desc: '与 BMNR 同款但规模更小', stake: '自营发行', value: '已用 ~$1.9B 募资' },
    ],

    bullPoints: [
        { title: 'Joseph Lubin 加持是稀缺叙事资源', body: '以太坊联合创始人 + ConsenSys 创始人 + MetaMask/Linea 创始人，加密原生圈影响力远超 Tom Lee 的"金融圈分析师"身位' },
        { title: 'ConsenSys 影子支持的潜在期权价值', body: 'ConsenSys 在 ETH 生态绝对核心；可能给 SBET 输血技术 + 流量 + 战略指导（Linea L2 / MetaMask 用户基础）' },
        { title: 'ETH 财库赛道第二名身位明确', body: '580K ETH 远超第三名（BIT Mining 80K），先发规模优势在 ETH 二线财库公司中独占' },
        { title: 'Staking 内生收益 ~$71M/年', body: '虽不及 BMNR 的 $220M 但比 MSTR 多；ETH 是生产性资产可"自我造血"' },
        { title: '加密原生散户粘性强', body: 'SBET 在 ETH 原生社区里粉丝粘性比 BMNR 强（Lubin 影响力 + ConsenSys 生态）' },
        { title: 'mNAV 已大幅压缩到 1.48x', body: '从 2025-06 启动期 6.0x 高点跌至 1.48x，估值进入"合理但不极便宜"区间；与 SOTP 下沿基本对齐' },
    ],

    bearPoints: [
        { title: 'Lubin 是兼职董事长 (主业 ConsenSys)', body: '他主管 ConsenSys / MetaMask / Linea 等多个项目，SBET 只是他的"业余战场"——注意力分散是结构性缺陷' },
        { title: '规模仅 BMNR 1/3，所有规模优势都不在 SBET 这边', body: 'ETH 持仓 580K vs BMNR 1.83M，规模差距决定指数权重 + 叙事影响力 + 机构关注度' },
        { title: '30x 稀释速度比 BMNR 还激进', body: '12 个月股本从 ~5M → 150M，普通股东 ETH/share 增厚率必须 >稀释率才不亏' },
        { title: 'mNAV 1.48x 比 BMNR 1.33x 略贵', body: '估值优势不在 SBET 这边；同条件下 BMNR 性价比更优' },
        { title: '流动性陷阱：NASDAQ 小盘 + 期权深度浅', body: '机构难大仓位 + 退出；做空成本低、卖出无阻力；散户主导导致波动剧烈' },
        { title: 'PIPE 解锁砸盘是 70% 概率日历事件', body: '2026 H2 锁定期到期，ConsenSys/Pantera 等任一减持都引发抛压' },
        { title: '原业务体育博彩与 ETH 战略毫无协同', body: '"Fans Cohort"等产品几乎可忽略 ($18M ARR)，反而是治理负担' },
        { title: '与 BMNR 共振 (相关系数 0.85)，不是独立标的', body: 'SBET + BMNR 同时持有等于 ETH 杠杆敞口加倍，本质上不构成多元化' },
    ],

    scenarios: [
        {
            name: '超级牛市: ETH 主流化 + Lubin 全身心 + ConsenSys 联动',
            cls: 'bull',
            prob: 10,
            y5Mcap: '$13 – 20B',
            y5Value: 16,
            y10Mcap: '$45 – 70B',
            y10Value: 55,
            desc: 'ETH 主流化 + Lubin 公开抛弃 ConsenSys 全身心投入 SBET（极不可能）+ ConsenSys/Linea 战略并表；mNAV 1.5x；持仓占总供应 1.5%',
        },
        {
            name: '基线牛市: ETH 稳健增长 + Lubin 持续兼职',
            cls: 'bull',
            prob: 28,
            y5Mcap: '$6 – 10B',
            y5Value: 8,
            y10Mcap: '$13 – 20B',
            y10Value: 16,
            desc: 'ETH 在 RWA 代币化和稳定币驱动下温和上涨；mNAV 1.2-1.4x；持仓持续增持但稀释速度放缓；PIPE 解锁分批吸收',
        },
        {
            name: '横盘: ETH 失速 + Lubin 减少介入',
            cls: 'neutral',
            prob: 30,
            y5Mcap: '$2.5 – 4B',
            y5Value: 3,
            y10Mcap: '$3 – 5B',
            y10Value: 4,
            desc: 'ETH 被 SOL/SUI 分流，叙事弱化；mNAV 跌至 0.9-1.1x；ATM 关闭；Lubin 在其他项目花更多时间',
        },
        {
            name: '熊市: 飞轮反向',
            cls: 'bear',
            prob: 22,
            y5Mcap: '$0.8 – 1.6B',
            y5Value: 1.2,
            y10Mcap: '$1 – 2B',
            y10Value: 1.5,
            desc: 'ETH 跌穿 $2K + PIPE 解锁砸盘；mNAV 0.6-0.7x；staking $35M 不够运营 $20M + 利息缓冲；股价 -75%',
        },
        {
            name: '死亡螺旋: PIPE + Lubin 离场 + ETH 熊',
            cls: 'bear',
            prob: 10,
            y5Mcap: '$0.2 – 0.6B',
            y5Value: 0.4,
            y10Mcap: '$0.2 – 0.6B',
            y10Value: 0.4,
            desc: 'ETH<$1.5K + Lubin 公开撤回 + PIPE 集体减持 + NASDAQ 小盘退市风险；mNAV 0.3-0.4x；股价 -90%',
        },
    ],

    tenXGene: [
        { dim: '软件边际成本 · 规模化杠杆', tenBagger: '边际成本 ≈ 0', nebius: '资产管理边际成本 0，但运营 + 合规刚性 ($20M/年)', status: 'green' },
        { dim: '网络/平台效应', tenBagger: '显著', nebius: '间接（Lubin 加密圈影响力 + ConsenSys 生态）', status: 'yellow' },
        { dim: '数据闭环 / 专属资产', tenBagger: '独占数据 / IP / 规模', nebius: '580K ETH 规模壁垒小，BMNR 3x 领先；Lubin 叙事是唯一独占', status: 'red' },
        { dim: '毛利率 · 定价权', tenBagger: '60-80% 可持续', nebius: '不适用；Staking yield ~3.5% 是参考收益率', status: 'red' },
        { dim: '消费者触点 / 品牌', tenBagger: '直接 C 端 / 开发者心智', nebius: 'Lubin 是 ETH 联合创始人，加密原生影响力强但传统机构受限', status: 'yellow' },
        { dim: '再投资空间 · S-curve', tenBagger: '高 ROIC + TAM 够大', nebius: 'ETH TAM 巨大；但稀释速度 (ATM 30x/年) 吃掉大部分复利', status: 'red' },
        { dim: '管理层 · 跨代际转型', tenBagger: '有过 0→$30B 记录', nebius: 'Lubin 在 ConsenSys 有过 0→$10B 估值记录，但 SBET 是他的兼职项目', status: 'yellow' },
    ],

    weightedExpectation: {
        currentMcap: 3.0,
        y5: {
            expectedMcap: 5.04,
            multiplier: 1.68,
            cagr: 10.9,
        },
        y10: {
            expectedMcap: 11.55,
            multiplier: 3.85,
            cagr: 14.4,
        },
        breakdown: [
            { scenario: 'A. 超级牛市', prob: 10, y5Mid: 16, y10Mid: 55, y5Contrib: 1.6, y10Contrib: 5.5 },
            { scenario: 'B. 基线牛市', prob: 28, y5Mid: 8, y10Mid: 16, y5Contrib: 2.24, y10Contrib: 4.48 },
            { scenario: 'C. 横盘', prob: 30, y5Mid: 3, y10Mid: 4, y5Contrib: 0.9, y10Contrib: 1.2 },
            { scenario: 'D. 熊市', prob: 22, y5Mid: 1.2, y10Mid: 1.5, y5Contrib: 0.264, y10Contrib: 0.33 },
            { scenario: 'E. 死亡螺旋', prob: 10, y5Mid: 0.4, y10Mid: 0.4, y5Contrib: 0.04, y10Contrib: 0.04 },
        ],
    },

    peerName: 'Bitmine Immersion (BMNR)',
    coreWeaveCompare: [
        { metric: 'ETH 持仓规模', nbis: '~580K ETH', cwv: '~1.83M ETH', winner: 'cwv' },
        { metric: 'mNAV', nbis: '~1.48x', cwv: '~1.33x', winner: 'cwv' },
        { metric: 'Staking 内生收益', nbis: '~$71M/年', cwv: '~$220M/年', winner: 'cwv' },
        { metric: '灵魂人物', nbis: 'Lubin (ETH 联创)', cwv: 'Tom Lee (分析师)', winner: 'nbis' },
        { metric: 'Lubin 专注度', nbis: '兼职 (ConsenSys 主)', cwv: 'Tom Lee 兼职 (Fundstrat 主)', winner: 'cwv' },
        { metric: '加密原生叙事深度', nbis: '极深 (ETH 真核)', cwv: '深 (Tom Lee Twitter)', winner: 'nbis' },
        { metric: '流动性 + 期权深度', nbis: '差 (NASDAQ 小盘)', cwv: '中 (NYSE American)', winner: 'cwv' },
        { metric: '稀释速度 (12 个月)', nbis: '30x', cwv: '23x', winner: 'cwv' },
    ],

    analysts: [
        { firm: 'Lubin / 加密圈隐含 PT', target: 80, rating: '隐含 Strong Buy' },
        { firm: 'Benchmark Co.', target: 50, rating: 'Buy' },
        { firm: '共识 (3 家覆盖)', target: 35, rating: 'Buy' },
        { firm: 'H.C. Wainwright', target: 28, rating: 'Buy' },
        { firm: 'Cantor Fitzgerald', target: 25, rating: 'Hold' },
        { firm: 'Bear / Skeptics 隐含', target: 8, rating: '隐含 Sell' },
    ],

    watchlist: [
        { indicator: 'ETH 价格', strongSignal: '> $8K', baseSignal: '$3-5K', weakSignal: '< $2.5K' },
        { indicator: 'mNAV', strongSignal: '> 2.0x', baseSignal: '1.2-1.7x', weakSignal: '< 1.0x' },
        { indicator: 'ETH 持仓 (K)', strongSignal: '> 800K', baseSignal: '580-700K', weakSignal: '< 500K' },
        { indicator: 'Lubin 公开活跃度', strongSignal: '周更 + 媒体', baseSignal: '月更', weakSignal: '销声匿迹 60+ 天' },
        { indicator: 'PIPE 解锁吸收 (2026 H2)', strongSignal: '平稳', baseSignal: '小幅折让', weakSignal: '砸盘 -30%+' },
    ],

    finalQuote:
        '<strong>SBET = BMNR 的浓缩版 + 加密原生叙事溢价</strong>。它的稀缺资源是 Joseph Lubin（以太坊联合创始人 + ConsenSys 创始人）的"影子支持"，加密原生度远超 Tom Lee。但代价是规模仅 BMNR 1/3、稀释速度 30 倍/年（更激进）、Lubin 是兼职（主业 ConsenSys）、流动性陷阱（NASDAQ 小盘）。**真正适合 SBET 的人极少**：①已经持有 BMNR 但仍想叠加 ETH 加密原生叙事；②坚信 ConsenSys 与 SBET 会发生战略联动；③能承受 -90% 回撤 + 不会因 Lubin 减少介入恐慌卖出。其他人**直接买 BMNR 或 ETHA**——在加权期望意义上 SBET 跑输 "60% ETHA + 40% SPY" 被动组合 -2.1pp。**这是组合里的"加密尾部赌注的尾部"**——仓位上限 0.3-1.5%，是赔率工具，不是核心持仓。',

    revenueChart: {
        labels: ['2025-06 起步', '2025-08', '2025-10', '2025-12', '2026-Q1', '2026E 12-31'],
        values: [660, 1260, 1530, 1680, 2030, 2625],
        kinds: ['revenue', 'revenue', 'revenue', 'revenue', 'revenue', 'revenue'],
    },

    overview: {
        founded: '1971 (前身 Mer Telemanagement Solutions) · 2021 反向并购为 SharpLink Gaming',
        headquarters: '美国 明尼苏达州 明尼通卡 (Minnetonka, MN)',
        incorporation: '美国 Delaware',
        employees: '~50 (2025 末，转型后微调)',
        listing: 'NASDAQ · SBET · 1986 上市（多次更名）',
        history: [
            { year: '1971', event: '前身 Mer Telemanagement Solutions 成立（电信账单管理）', tag: '前史' },
            { year: '1986', event: '在 NASDAQ 上市', tag: 'IPO' },
            { year: '2021', event: '与 SharpLink, Inc. 反向并购，更名 SharpLink Gaming，转型体育博彩营销', tag: '转型 1.0' },
            { year: '2021-2024', event: '体育博彩 SaaS 业务，市值 <$30M，连年亏损', tag: '低谷' },
            { year: '2025-05', event: '宣布与 Joseph Lubin 合作，启动 ETH 财库战略', tag: '关键节点' },
            { year: '2025-06', event: '完成 ~$425M PIPE，ConsenSys / Pantera / Galaxy / ParaFi 参与；ETH 持仓 188K', tag: '融资' },
            { year: '2025-06-15', event: 'mNAV 冲到 6.0x 高点；股价从 $3 暴涨至 $80，市值 $10B+ 短暂触及', tag: '亢奋' },
            { year: '2025-08', event: '冲高回落 · ETH 持仓 ~360K · mNAV 3.5x', tag: '盘整' },
            { year: '2025-12', event: 'ETH 持仓突破 480K · mNAV 1.8x', tag: '稀释' },
            { year: '2026 (年初)', event: '纳入 Russell 2000 指数', tag: '指数' },
            { year: '2026-Q1', event: 'ETH 持仓 ~580K (估算) · mNAV 1.6x · 股价 $25', tag: '成熟期' },
            { year: '2026-05-06', event: '股价 ~$20，市值 ~$3B，mNAV ~1.48x；面临 PIPE 解锁', tag: '当前' },
            { year: '2026-H2 (预期)', event: 'PIPE 锁定期到期，ConsenSys/Pantera 等首批解禁', tag: '关键事件' },
        ],
        businessModel:
            '**双引擎，主辅极端悬殊**：①**以太坊财库（核心，价值 90%+）**：通过 ATM + PIPE 持续募资买入 ETH，并通过 Lido/Coinbase 质押获 ~3.5% staking yield；②**体育博彩营销（残余）**："Fans Cohort"等转化平台，年化营收 ~$18M，与 ETH 战略毫无协同。**与 BMNR 核心差异**：Lubin 提供加密原生叙事 + ConsenSys 影子支持的潜在期权价值；但 Lubin 是兼职（主业 ConsenSys / MetaMask / Linea），注意力分散是结构性缺陷。**核心逻辑**：SBET 不创造价值，是"ETH 长期看涨 + Lubin 加密原生叙事 + ConsenSys 联动期权"三重信念在资本市场的杠杆放大器。',
        revenueMix: [
            { name: 'Staking 收益 (ETH 质押)', pct: 75, note: '~$71M/年 · 3.5% × 580K ETH' },
            { name: '体育博彩营销 (Fans Cohort)', pct: 19, note: '~$18M · 与 ETH 无协同' },
            { name: '其他 (托管 / 利息)', pct: 6, note: '~$5M' },
            { name: '注：ETH 升值不计入营收', pct: 0, note: 'GAAP 走利润表' },
        ],
    },

    team: [
        {
            name: 'Joseph Lubin',
            role: '董事长 (Chairman) · 战略灵魂',
            background:
                '以太坊联合创始人（与 Vitalik Buterin 等）· ConsenSys 创始人兼 CEO · MetaMask / Linea / Infura 创始人。加密圈"教父级"人物之一，与 Saylor 在 BTC 圈的地位类似但身位偏 ETH 原生派。**关键风险**：他的主业是 ConsenSys（估值 $7B），SBET 只是兼职项目；任何减少介入信号都会瞬间击穿 mNAV。Lubin 个人持有大量 ETH，与 ETH 网络利益深度绑定但与 SBET 股东利益相对独立。',
            since: '2025-05',
            rating: 4,
        },
        {
            name: 'Rob Phythian',
            role: 'CEO · 联合创始人',
            background:
                'SharpLink Gaming 原 CEO，体育博彩营销背景。2021 年反向并购后任 CEO，负责执行落地。在 ETH 战略中是执行层，Lubin 之外的第二决策者。',
            since: '2021',
            rating: 3,
        },
        {
            name: 'Robert DeLucia',
            role: 'CFO',
            background:
                '原 SharpLink CFO，2025 转型后留任。资本市场操作经验中等；与 BMNR 的 Erik Hovde 相当，与 MSTR 的 Andrew Kang 不在同一档。',
            since: '2021',
            rating: 3,
        },
        {
            name: 'ConsenSys 战略顾问团 (影子)',
            role: '战略 + 加密圈接入',
            background:
                'ConsenSys 高级管理层间接支持 SBET，提供 ETH 生态接入和 Linea L2 / MetaMask 流量协同的隐性资源。但缺乏正式合约绑定。',
            rating: 4,
        },
        {
            name: 'PIPE 投资人代表 (Pantera / Galaxy / ParaFi)',
            role: '加密圈联系',
            background:
                '加密圈主要 VC，参与 $425M PIPE。提供加密生态接入与战略指导；锁定期到期后的减持决策是关键变量。',
            rating: 3,
        },
    ],

    shareholders: [
        { name: 'ConsenSys (Lubin 关联)', pct: '~10%', type: 'PIPE 投资者', note: '2025-06 PIPE 主要参与方' },
        { name: 'Pantera Capital', pct: '~6%', type: 'PIPE 投资者', note: '加密圈老牌 VC' },
        { name: 'Galaxy Digital (Mike Novogratz)', pct: '~5%', type: 'PIPE 投资者', note: '加密圈头部公司' },
        { name: 'ParaFi Capital', pct: '~4%', type: 'PIPE 投资者', note: '加密原生 VC' },
        { name: 'Joseph Lubin (个人持股)', pct: '~3%', type: '管理层', note: '个人股权相对低，主要利益在 ConsenSys' },
        { name: 'Rob Phythian + 原管理层', pct: '~2%', type: '内部', note: '反向并购后稀释明显' },
        { name: 'Vanguard / 被动基金', pct: '~3%', type: '指数', note: 'Russell 2000 纳入后被动持仓' },
        { name: '公众流通股 + 散户', pct: '~67%', type: '散户 + 机构', note: '极高散户比例（加密圈 + ETH 原生社区）' },
    ],

    advantages: [
        {
            title: 'Joseph Lubin 加持是稀缺叙事资源 (品牌 ★★★★★)',
            body: '以太坊联合创始人 + ConsenSys 创始人 + MetaMask/Linea/Infura 创始人。加密原生圈影响力远超 Tom Lee；Lubin 是 ETH 真核，他对 SBET 的"加持"是 BMNR 无法复制的稀缺资源。',
            evidence: 'ConsenSys 官网；以太坊基金会创始团队；Twitter 影响力',
        },
        {
            title: 'ConsenSys 影子支持的潜在期权价值 (生态 ★★★★)',
            body: 'ConsenSys 在 ETH 生态绝对核心位置。Linea L2 / MetaMask 月活 3000 万 / Infura RPC 服务全球第一。SBET 与 ConsenSys 通过 Lubin 串联，可能输血技术 + 流量 + 战略指导。',
            evidence: 'ConsenSys 公开生态数据；Lubin 在 SBET 公告中暗示协同',
        },
        {
            title: 'ETH 财库赛道第二名身位明确 (规模 ★★★★)',
            body: '580K ETH 远超第三名（BIT Mining 80K，规模差距 7x）。在 ETH 二线财库公司中独占第二位置；先发规模优势已经成立。',
            evidence: 'Ethereum Treasuries 全球持仓排行；季报披露',
        },
        {
            title: 'ETH staking 内生收益 (财务 ★★★)',
            body: '~$71M/年现金流（580K × 3.5% × $3,500）。虽不及 BMNR 的 $220M 但比 MSTR 多；ETH 是生产性资产可"自我造血"覆盖运营。',
            evidence: 'Lido / Coinbase 节点数据；ETH 网络 staking yield',
        },
        {
            title: '加密原生散户粘性 (社群 ★★★★)',
            body: 'SBET 在 ETH 原生社区里粉丝粘性比 BMNR 强（Lubin 在 ETH 圈是教父级，Tom Lee 在金融圈但加密圈次之）。Twitter 加密 KOL 自发传播。',
            evidence: '社交媒体影响力分析；Reddit r/ethereum 提及频次',
        },
        {
            title: 'mNAV 已大幅压缩到合理偏便宜 (估值 ★★★)',
            body: '从 2025-06 启动期 6.0x 高点跌至 1.48x，估值与 SOTP 下沿基本对齐。当前下行空间相对有限（除非 mNAV 跌穿 1）；估值压缩可能是入场点。',
            evidence: 'mNAV 历史轨迹；SaylorTracker 类工具数据',
        },
        {
            title: 'PIPE 投资人加密圈背书 (信誉 ★★★)',
            body: '$425M PIPE 由 ConsenSys 自身领投 + Pantera / Galaxy / ParaFi 跟进。这种"以太坊原生 + 加密 VC"双重背书是 BMNR 没有的。',
            evidence: '2025-06 PIPE 公告；DEF 14A 披露',
        },
    ],

    disadvantages: [
        {
            title: 'Lubin 是兼职董事长 (主业 ConsenSys)',
            body: '他主管 ConsenSys（$7B 估值）/ MetaMask / Linea 等多个项目，SBET 只是他的"业余战场"。注意力分散是结构性缺陷；任何减少介入信号都会击穿 mNAV。',
            evidence: 'Lubin 多项 CEO/Chairman 头衔；公开露面分布',
        },
        {
            title: '规模仅 BMNR 1/3',
            body: 'ETH 持仓 580K vs BMNR 1.83M，规模差距决定指数权重 + 叙事影响力 + 机构关注度。所有规模优势都不在 SBET 这边。',
            evidence: 'Ethereum Treasuries 排名',
        },
        {
            title: '30x 稀释速度比 BMNR 还激进',
            body: '12 个月股本从 ~5M → 150M。普通股东 ETH/share 增厚率必须 >稀释率才不亏；当前数学勉强为正。',
            evidence: '2025-05 至今股本演进数据',
        },
        {
            title: 'mNAV 1.48x 比 BMNR 1.33x 略贵',
            body: '估值优势不在 SBET 这边；同条件下 BMNR 性价比更优。Lubin 叙事溢价是否值得这 0.15x mNAV 价差是关键判断点。',
            evidence: '两公司 mNAV 实时对比',
        },
        {
            title: '流动性陷阱：NASDAQ 小盘 + 期权深度浅',
            body: '虽市值 $3B，但日成交量 + 期权深度都远不如 BMNR。机构难大仓位 + 退出；做空成本低、卖出无阻力；散户主导导致波动剧烈。',
            evidence: '日成交量数据；期权链深度对比',
        },
        {
            title: 'PIPE 解锁砸盘是 70% 概率日历事件',
            body: '2026 H2 锁定期到期，ConsenSys / Pantera / Galaxy / ParaFi 任一减持都引发抛压；与 BMNR 同期共振可能加剧。',
            evidence: '2025-06 PIPE 文件锁定条款',
        },
        {
            title: '原业务体育博彩与 ETH 战略毫无协同',
            body: '"Fans Cohort"等产品规模微小（$18M ARR），不是真"双引擎"，反而是治理负担；可能未来剥离。',
            evidence: '2025 Q4 季报业务分部数据',
        },
        {
            title: '与 BMNR 共振 (相关系数 0.85)',
            body: 'SBET + BMNR 同时持有等于 ETH 杠杆敞口加倍，本质上不构成多元化。在加密熊市中两者 -75-90% 同步发生概率高。',
            evidence: '历史共动数据；ETH β 共享',
        },
    ],

    shortTermCatalysts: [
        {
            when: '2026-Q2-Q3',
            event: 'ETH 突破 $5,000（基于 RWA + 稳定币驱动）',
            impact: 'positive',
            probability: '~35%',
            magnitude: '+30-50%',
        },
        {
            when: '2026-Q2-持续',
            event: 'Lubin 强化公开站台 (CNBC / Bloomberg / Twitter 频次提升)',
            impact: 'positive',
            probability: '~40%',
            magnitude: '+10-20%',
        },
        {
            when: '2026-Q3',
            event: 'ConsenSys / Linea 与 SBET 启动公开战略合作',
            impact: 'positive',
            probability: '~25%',
            magnitude: '+15-25%',
        },
        {
            when: '2026-Q2',
            event: 'ETH 现货 ETF 期权获批，资金加速流入',
            impact: 'positive',
            probability: '~60%',
            magnitude: '+10-20%',
        },
        {
            when: '2026-H2',
            event: 'Russell 2000 → Russell 1000 升档',
            impact: 'positive',
            probability: '~30%',
            magnitude: '+5-10%',
        },
        {
            when: '2026-H2',
            event: '**PIPE 解锁砸盘**（ConsenSys/Pantera/Galaxy 部分减持）',
            impact: 'negative',
            probability: '~70%',
            magnitude: '-20-35%',
        },
        {
            when: '不定',
            event: 'Lubin 公开减少介入 / 隐退',
            impact: 'negative',
            probability: '~15%',
            magnitude: '-30-50%',
        },
        {
            when: '2026-Q4',
            event: 'ETH 跌穿 $2,500 触发 mNAV 压缩警报',
            impact: 'negative',
            probability: '~25%',
            magnitude: '-35-50%',
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
            event: 'NASDAQ 小盘股退市 / 合规警告',
            impact: 'negative',
            probability: '~5% / 5 年',
            magnitude: '-50-70%',
        },
    ],

    longTermDrivers: [
        {
            name: 'ETH 主流化 + Lubin 加密话事人地位',
            horizon: '2026-2033',
            body: 'Lubin 是 ETH 真核，他的"ETH 长期看涨 + 主流化"叙事在加密原生圈传播力强。若 ETH 成全球结算资产层，SBET 作为最大上市持仓方之一直接受益。',
            enabling: 'BlackRock BUIDL / GENIUS Act / 央行配置 / Lubin 持续公开站台',
        },
        {
            name: 'ConsenSys 联动期权释放',
            horizon: '2026-2030',
            body: '若 ConsenSys / Linea / MetaMask 与 SBET 启动公开战略合作（流量共享 / 技术联动），可释放 $0.3-0.6B 隐性期权价值。这是 BMNR 完全不具备的差异化。',
            enabling: 'Lubin 主动推动；监管/治理层面无障碍；ConsenSys 战略意愿',
        },
        {
            name: 'ETH staking yield 复利',
            horizon: '2026-2032',
            body: '~$71M/年内生收益，按 50% 复投买 ETH，10 年累计可增持 ~30% ETH/share。规模虽不及 BMNR 但比 MSTR 多。',
            enabling: 'ETH PoS 网络稳定 + staking 监管不打压',
        },
        {
            name: '持仓占总供应突破 1%',
            horizon: '2026-2030',
            body: '当前 0.48%，目标接近 1% (~1.2M ETH)。若达 1%，叙事价值和指数纳入权重大幅提升，mNAV 溢价可结构性扩张。但稀释代价巨大。',
            enabling: '持续 ATM + PIPE；ConsenSys 配合融资；管理层资本工具创新',
        },
        {
            name: '可能成为 ETH 财库赛道整合者',
            horizon: '2026-2032',
            body: '若 ETH 财库赛道形成寡头格局（SBET / BMNR），SBET 可能并购小型 ETH 财库（BIT Mining / 其他）。Lubin 加密圈资本网络是优势。',
            enabling: 'Lubin 资本网络 + 加密 VC 关系 + 行业整合周期',
        },
        {
            name: 'L2 / RWA / 稳定币三大引擎',
            horizon: '2027-2033',
            body: 'ETH 是智能合约平台 + L2 锁仓 $50B+ + RWA 代币化 $3-5T + 稳定币 $200B+ 的底层。SBET 与 BMNR 共享这些 ETH 用例红利。',
            enabling: 'BlackRock / Franklin 进入；ERC-3643 等标准；GENIUS Act',
        },
    ],

    riskMatrix: [
        {
            category: '关键人 / 治理风险',
            level: 'critical',
            summary: 'Lubin 是兼职董事长，注意力分散是结构性缺陷',
            items: [
                {
                    name: 'Lubin 公开减少介入 / 转向 ConsenSys',
                    body: '他主业是 ConsenSys，SBET 只是兼职项目。任何减少 Twitter / 媒体露面的信号都会瞬间击穿 mNAV。',
                    mitigation: '几乎无替代者；SBET 必须培育独立叙事；与 Lubin 谈判更深 commitment',
                },
                {
                    name: 'ConsenSys 与 SBET 战略冲突',
                    body: 'Lubin 主业 ConsenSys 与 SBET 财库可能存在战略冲突（如 Linea L2 资金分配）。',
                    mitigation: '股权结构相对独立；治理层面隔离',
                },
                {
                    name: 'Lubin 健康 / 法律风险',
                    body: '加密圈领袖通常面临监管 / 法律风险（Lubin 此前曾被 SEC 调查 ConsenSys 业务）。',
                    mitigation: '历史诉讼已和解；行业整体监管缓和趋势',
                },
            ],
        },
        {
            category: '宏观 / 加密周期风险',
            level: 'critical',
            summary: 'ETH β 是 SBET 命脉，比 BMNR 更脆弱（规模小 + 流动性差）',
            items: [
                {
                    name: 'ETH 长期熊市 (>12 月 < $2,500)',
                    body: 'ETH 跌穿 $2,500 + 12+ 个月 → mNAV 必<1 → 飞轮反向 → 公司必须卖 ETH 偿付。',
                    mitigation: 'Staking yield $71M/年是缓冲；Lubin 加密圈可能调动救援资金',
                },
                {
                    name: 'ETH/BTC 比值持续下行',
                    body: '"ETH never catches up" 叙事强化，机构 ETH 配置低于 BTC。',
                    mitigation: 'L2 / RWA / 稳定币用例增长可能扭转',
                },
            ],
        },
        {
            category: '资本结构 / 稀释风险',
            level: 'critical',
            summary: 'PIPE 解锁 + 30x 稀释速度（比 BMNR 还激进）',
            items: [
                {
                    name: 'PIPE 解锁砸盘 (2026 H2)',
                    body: 'ConsenSys / Pantera / Galaxy / ParaFi 锁定期到期，集体减持是 70% 概率事件。与 BMNR 同期共振加剧风险。',
                    mitigation: '与 PIPE 投资人沟通分批解锁；新投资者轮换',
                },
                {
                    name: '稀释速度过快',
                    body: '12 个月股本 30x（比 BMNR 还激进），普通股东 ETH/share 增厚必须 >稀释率才不亏。',
                    mitigation: 'ATM 节奏放缓；Staking 复利吸收稀释',
                },
                {
                    name: 'ATM 关闭 (mNAV<1)',
                    body: '一旦 mNAV<1 ATM 必须暂停，公司失去主要融资工具。',
                    mitigation: '推出 ETH 优先股 / 可转债工具；staking 维持运营',
                },
            ],
        },
        {
            category: '流动性 / 市场结构风险',
            level: 'high',
            summary: 'NASDAQ 小盘 + 期权深度浅',
            items: [
                {
                    name: '机构难大仓位',
                    body: '日成交量 + 期权深度远不如 BMNR / MSTR；机构难入场也难退出。',
                    mitigation: '指数升档可缓解；可能未来转板 NYSE',
                },
                {
                    name: '做空成本低',
                    body: '小盘股做空容易；卖出无阻力；空头集中可能加剧波动。',
                    mitigation: '密切监控空头 + Short Interest 数据',
                },
                {
                    name: 'NASDAQ 退市风险',
                    body: '若股价 <$1 或市值 <$15M 持续，可能触发合规警告。',
                    mitigation: '当前距警戒线远；ETH 持仓提供 floor',
                },
            ],
        },
        {
            category: '监管风险',
            level: 'high',
            summary: 'SEC ETH 分类 + Staking 服务 + ConsenSys 监管历史',
            items: [
                {
                    name: 'SEC 重新审查 ETH 分类',
                    body: 'ETH 是否构成"证券"长期争议；不利判决会让 SBET 业务受限。',
                    mitigation: 'ETF 已通过暗示 SEC 立场偏向商品',
                },
                {
                    name: 'Staking 服务被定为证券',
                    body: 'SEC 此前曾起诉 ConsenSys 的 MetaMask staking；类似风险延伸至 SBET。',
                    mitigation: '直接质押节点（非托管）部分免疫',
                },
                {
                    name: 'ConsenSys 关联交易审查',
                    body: 'SBET 与 ConsenSys 通过 Lubin 关联，可能引发 SEC 关联交易审查。',
                    mitigation: '正式合约的关联交易披露完整',
                },
            ],
        },
        {
            category: '竞争风险',
            level: 'high',
            summary: 'BMNR 规模 3x 优势 + ETH ETF 替代',
            items: [
                {
                    name: 'BMNR 规模优势持续扩大',
                    body: 'BMNR 持仓 1.83M ETH 是 SBET 的 3x；规模差距决定指数权重 + 机构关注度。',
                    mitigation: 'Lubin 加密原生叙事独占；ConsenSys 联动期权',
                },
                {
                    name: 'ETHA / FETH 抢"持有 ETH"份额',
                    body: 'ETF 流入 2025 累计 $15B+，部分 mNAV 溢价已被 ETF 替代。',
                    mitigation: 'mNAV 飞轮 + staking yield 复利',
                },
                {
                    name: 'SOL/SUI 等公链分流 ETH',
                    body: '若 SOL 持续分流 ETH 用户和开发者，ETH 长期价值受质疑。',
                    mitigation: 'L2 生态绑定 ETH；以太坊基金会持续创新',
                },
            ],
        },
        {
            category: '财务 / 商业风险',
            level: 'medium',
            summary: '体育博彩残余 + 运营负担',
            items: [
                {
                    name: '体育博彩业务拖累',
                    body: '原业务 ARR $18M，但运营成本可能高于收入；与 ETH 战略毫无协同。',
                    mitigation: '占比微小；可剥离或停业',
                },
                {
                    name: '运营费用刚性',
                    body: '合规 + 法务 + 安全开支熊市无法快速削减。',
                    mitigation: 'Staking 收入 $71M 完全覆盖运营 $20M',
                },
            ],
        },
    ],

    profitability: {
        narrative:
            'SBET 的 GAAP 损益表**几乎无意义**——FASB 公允价值规则让 ETH 涨跌直接进利润表。**真正应该看的指标**：①**ETH/share 增厚率**（vs 30x 稀释）；②**Staking 收入**（~$71M/年内生现金流）；③**Lubin 公开活跃度**（叙事核心）。SBET 不是运营公司，是"ETH 杠杆资产管理 + Lubin 叙事品牌 + ConsenSys 影子支持"三合一的资本市场工具。**注意**：转型仅 12 个月，财务数据极度有限，下表很多为估算。',

        incomeStatement: [
            {
                year: '2022',
                revenue: '$5M (体育博彩)',
                revenueNum: 5,
                grossMargin: '~25%',
                opIncome: '-$8M',
                ebitda: '-$6M',
                ebitdaMargin: '-120%',
                netIncome: '-$10M',
                eps: '-$2.00',
                status: 'actual',
            },
            {
                year: '2023',
                revenue: '$12M',
                revenueNum: 12,
                grossMargin: '~35%',
                opIncome: '-$5M',
                ebitda: '-$3M',
                ebitdaMargin: '-25%',
                netIncome: '-$7M',
                eps: '-$1.40',
                status: 'actual',
            },
            {
                year: '2024',
                revenue: '$15M',
                revenueNum: 15,
                grossMargin: '~40%',
                opIncome: '-$3M',
                ebitda: '-$1M',
                ebitdaMargin: '-7%',
                netIncome: '-$4M',
                eps: '-$0.80',
                status: 'actual',
            },
            {
                year: '2025 (转型年)',
                revenue: '$18M (博彩) + $50M (ETH staking 部分年化)',
                revenueNum: 68,
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
                revenue: '$18M (博彩) + $71M (ETH staking)',
                revenueNum: 89,
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
                revenue: '$20M + $90M staking',
                revenueNum: 110,
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
            { year: '2022', gross: 25, ebitda: -120, operating: -160, net: -200, status: 'actual' },
            { year: '2023', gross: 35, ebitda: -25, operating: -42, net: -58, status: 'actual' },
            { year: '2024', gross: 40, ebitda: -7, operating: -20, net: -27, status: 'actual' },
            { year: '2025', gross: 85, ebitda: null, operating: null, net: null, status: 'actual' },
            { year: '2026E', gross: 88, ebitda: null, operating: null, net: null, status: 'estimate' },
            { year: '2027E', gross: 88, ebitda: null, operating: null, net: null, status: 'estimate' },
        ],

        milestones: [
            { year: '2025-05', milestone: 'Lubin 加入 + 启动 ETH 战略', hit: true },
            { year: '2025-06', milestone: '完成 $425M PIPE', hit: true },
            { year: '2025-06', milestone: 'mNAV 冲到 6.0x 高点', hit: true },
            { year: '2025-12', milestone: 'ETH 持仓突破 480K', hit: true },
            { year: '2026-Q1', milestone: 'Russell 2000 纳入', hit: true },
            { year: '2026-Q4', milestone: 'ETH 持仓突破 750K', hit: false, note: '关键里程碑' },
            { year: '2026-H2', milestone: 'PIPE 解锁分批吸收', hit: false, note: '70% 概率发生' },
            { year: '2027', milestone: 'ConsenSys / Linea 战略合作公开', hit: false },
            { year: '2030', milestone: 'ETH 持仓占总供应 1% (~1.2M)', hit: false, note: '管理层目标 1.5%' },
        ],

        unitEconomics: [
            { metric: 'ETH 持仓 (2026 Q1)', value: '~580,000 ETH', source: '估算（季报披露为准）' },
            { metric: 'ETH 平均成本', value: '~$3,250', source: '累计投入 / 持仓数' },
            { metric: 'ETH NAV / 股 (ETH=$3,500)', value: '~$13.5', source: '$2.03B / 150M 股' },
            { metric: 'Staking yield (年化)', value: '~3.5% (~$71M)', source: 'Lido / Coinbase 节点' },
            { metric: 'mNAV (市值/ETH NAV)', value: '~1.48x', source: '$3B / $2.03B' },
            { metric: '股本年化稀释率', value: '~200%（早期）→ 50-80%（稳态）', source: '估算' },
            { metric: '体育博彩 ARR (残余)', value: '~$18M', source: '原业务季报' },
            { metric: 'Lubin 个人 ETH 持仓 (估)', value: '~10 万+ ETH', source: '加密圈公开估算' },
        ],

        fcfPath:
            '**与 BMNR 框架相同但规模更小**：staking 内生现金流 ~$71M/年（BMNR $220M），是 BMNR 的 1/3。**关键观察**：staking 收入 $71M vs 运营成本 $20M 留下 $51M/年净现金，可用于：①复投买 ETH（10 年累计可增持 ~30% ETH/share）；②未来发行的优先股票息覆盖；③极端情景下的运营缓冲。**比 MSTR 强（有内生收益）但比 BMNR 弱（规模 1/3）**。',

        keyRisks: [
            'ETH 长期 <$2,500 + PIPE 解锁砸盘 + Lubin 减少介入三杀',
            'Lubin 公开转向 ConsenSys / Linea / MetaMask，削减 SBET 介入',
            '稀释速度若超过 ETH Yield，普通股东实际亏损',
            '监管 staking 服务定证券，影响 $71M 内生现金流',
            'NASDAQ 小盘流动性陷阱，机构难大仓位',
        ],
    },

    competitiveLandscape: {
        summary:
            'SBET 处于"ETH 财库赛道夹缝"——既不是 BMNR 那种规模龙头（持仓 3x 差距），也不是 ETHA / FETH 那种零费用现货 ETF（流动性 + 费用全面优势），更不是 Lubin 主业 ConsenSys（生态完整度）。SBET 的差异化在 **Lubin 加密原生叙事 + ConsenSys 联动期权**——只在 mNAV>1 时成立。**真正的竞争对手是 BMNR**：两者高度共振（相关系数 0.85），投资者通常二选一。',

        competitors: [
            {
                name: 'SBET (自身)',
                type: 'specialist',
                ticker: 'SBET',
                revenue2026E: '$89M (staking + 博彩)',
                aiRevenue: '~580K ETH ($2B NAV)',
                gpuFleet: '150M 股 (12 个月增 30x)',
                backlog: 'ATM 持续 + 可能新 PIPE',
                ebitdaMargin: 'N/A (ETH 主导)',
                marketCap: '~$3B',
                nvidiaLevel: 4,
                threat: 'low',
                strength: 'Lubin (ETH 联创) + ConsenSys 影子支持 + 加密原生叙事',
                weakness: '规模 1/3 BMNR · Lubin 兼职 · 流动性陷阱 · 稀释 30x',
            },
            {
                name: 'BMNR (头名)',
                type: 'specialist',
                ticker: 'BMNR',
                revenue2026E: '$235M (staking + 矿业)',
                aiRevenue: '~1.83M ETH ($6.4B)',
                gpuFleet: '190M 股',
                backlog: 'ATM + 可能新 PIPE',
                ebitdaMargin: 'N/A',
                marketCap: '~$8.5B',
                nvidiaLevel: 5,
                threat: 'high',
                strength: '规模 + Tom Lee + Thiel 背书 + staking 内生',
                weakness: 'PIPE 解锁 + 稀释快 + Tom Lee 兼职',
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
                weakness: '无杠杆 · 无 mNAV · 部分 ETF 无 staking',
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
                weakness: '规模仅 SBET 1/7 · 中概折价',
            },
            {
                name: 'Coinbase 自持 ETH',
                type: 'hyperscaler',
                ticker: 'COIN (部分)',
                revenue2026E: '$8B (综合)',
                aiRevenue: '~140K ETH',
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
                name: 'ConsenSys (Lubin 主业)',
                type: 'specialist',
                ticker: '未上市',
                revenue2026E: '~$200M',
                aiRevenue: 'MetaMask + Linea + Infura',
                gpuFleet: 'ETH 生态核心',
                backlog: 'Linea L2 / MetaMask 月活 30M',
                ebitdaMargin: 'N/A',
                marketCap: '~$7B (估)',
                nvidiaLevel: 5,
                threat: 'medium',
                strength: 'ETH 生态核心地位 · Lubin 全身心',
                weakness: '不是 ETH 财库标的；与 SBET 关系暧昧',
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
                weakness: '需 32 ETH 自运行节点 · 退休账户难持有',
            },
        ],

        positioning: [
            { dimension: 'ETH 持仓规模', nebius: '~580K ETH', industryAvg: '50-150K', leader: 'BMNR (1.83M)', nebiusStrong: false },
            { dimension: 'Staking 内生收益', nebius: '~$71M/年', industryAvg: 'ETF 多无 staking', leader: 'BMNR ($220M)', nebiusStrong: true },
            { dimension: 'ETH 杠杆 (mNAV)', nebius: '~1.48x', industryAvg: '1.0x', leader: 'BMNR (1.33x · 更便宜)', nebiusStrong: false },
            { dimension: '加密原生叙事深度', nebius: 'Lubin (ETH 联创)', industryAvg: 'N/A', leader: 'SBET (独占)', nebiusStrong: true },
            { dimension: '费用率', nebius: '稀释 + 运营隐性', industryAvg: 'ETF 0.25%', leader: 'ETHA / FETH (低)', nebiusStrong: false },
            { dimension: '上行弹性', nebius: '极高', industryAvg: '中', leader: 'SBET / BMNR', nebiusStrong: true },
            { dimension: '下行风险', nebius: '极高 (-90%)', industryAvg: 'ETHA -50% (ETH 熊)', leader: 'ETHA (低)', nebiusStrong: false },
            { dimension: '资本市场工具完整度', nebius: 'ATM + PIPE', industryAvg: '类似', leader: 'MSTR (5 优先股)', nebiusStrong: false },
            { dimension: '流动性 + 期权深度', nebius: '差 (NASDAQ 小盘)', industryAvg: '中', leader: 'MSTR (大盘)', nebiusStrong: false },
            { dimension: 'Track Record (战略)', nebius: '12 个月', industryAvg: 'N/A', leader: 'MSTR (5 年)', nebiusStrong: false },
        ],

        marketShare2026: [
            { name: 'iShares ETHA', pct: 28 },
            { name: 'BMNR (头名)', pct: 22 },
            { name: 'Fidelity FETH', pct: 17 },
            { name: 'Grayscale ETHE', pct: 14 },
            { name: 'SBET (本公司)', pct: 7 },
            { name: 'Bitwise / VanEck / 其他 ETF', pct: 7 },
            { name: '其他财库公司 (BIT Mining 等)', pct: 5 },
        ],

        winLoss: [
            {
                scenario: 'ETH 牛市超级行情 + Lubin 全力公开站台',
                winners: 'SBET (mNAV 飞轮 + Lubin 叙事双放大)',
                losers: '现货 ETF (无杠杆)',
                reasoning: 'Lubin 在加密原生圈影响力倍增；mNAV 飞轮放大 ETH 价格 + 叙事溢价',
            },
            {
                scenario: 'ETH 横盘震荡 ($3-5K) + Lubin 持续兼职',
                winners: 'ETHA / 直接持币 / BMNR',
                losers: 'SBET (稀释 30x 吃掉收益 + Lubin 注意力分散)',
                reasoning: 'mNAV 1.0-1.2x 时，30x 稀释会吃掉相当比例 ETH/share 增益；Lubin 兼职减弱叙事支撑',
            },
            {
                scenario: 'ETH 熊市 (<$2K) + PIPE 解锁',
                winners: 'ETHA (无强制操作)',
                losers: 'SBET (双杀触发死亡螺旋)',
                reasoning: 'PIPE 投资人砸盘 + ATM 关闭 + 流动性陷阱; SBET 比 BMNR 跌得更快',
            },
            {
                scenario: '美国机构客户配置',
                winners: 'ETHA / FETH / BMNR (规模)',
                losers: 'SBET (会计复杂 + 小盘 + Lubin 兼职)',
                reasoning: 'GAAP 极端波动 + NASDAQ 小盘 + Lubin 注意力分散让机构配置受限',
            },
            {
                scenario: '退休账户 (401(k)/IRA)',
                winners: 'BMNR / ETHA (流动性优先)',
                losers: 'SBET (流动性陷阱)',
                reasoning: 'SBET 期权深度浅 + 日成交量小，401(k) 计划倾向流动性更好的标的',
            },
            {
                scenario: 'ConsenSys / Linea 战略联动',
                winners: 'SBET (独占)',
                losers: 'BMNR / ETHA (无联动)',
                reasoning: '若 ConsenSys 与 SBET 启动战略合作，是 BMNR 完全无法复制的差异化',
            },
            {
                scenario: 'ETH staking 监管严格',
                winners: 'ETHA (部分 ETF 不 staking)',
                losers: 'SBET / BMNR (staking 收入受限)',
                reasoning: 'SEC 重新审视 staking 服务为证券将影响 SBET $71M 内生现金流',
            },
            {
                scenario: 'PIPE 锁定期到期 (2026 H2)',
                winners: 'PIPE 投资人 (ConsenSys 等)',
                losers: 'SBET 散户股东',
                reasoning: '70% 概率事件，砸盘压力可能导致 mNAV 跌穿 1；与 BMNR 同期共振加剧',
            },
            {
                scenario: '加密原生叙事强化时代',
                winners: 'SBET (Lubin 加持)',
                losers: 'BMNR (Tom Lee 是金融圈)',
                reasoning: '若加密原生叙事压过金融圈叙事，Lubin 影响力放大',
            },
        ],

        structuralTrend:
            '未来 3-5 年行业结构性变化：①**ETH 财库赛道两极分化**：BMNR (头名 + 规模) vs SBET (二名 + 加密原生叙事)，其他 ETH 财库被边缘化；②**ETF 替代效应**：ETHA / FETH 持续吞噬 mNAV 溢价空间；③**staking 监管**：SEC 政策可能突变，影响 SBET 内生收益结构；④**ConsenSys 联动**：是 SBET 唯一的差异化期权，2026-2027 是关键观察窗；⑤**Lubin 接班**：他注意力分散是结构性问题，需要培育"叙事接班人"。**结论**：3 年内 SBET 的命运取决于 Lubin 是否真正"押注 SBET" + ConsenSys 联动是否落地。',

        tam: {
            narrative:
                '"上市公司 ETH 财库"赛道（与 BMNR 共享）：2025-06 启动 → 2026 当前 ~$10B → 2030 基线 $80B / 牛市 $300B。SBET 占比从启动时 30% 降至当前 22%（BMNR 抢占大部分）。**10x 路径**：ETH 价格 5x（$3.5K → $15-20K）+ SBET 持仓 1.5-2x + mNAV 维持 1.2-1.5x = 9-15x ETH NAV/股，扣除稀释后 5-8x 股价。换言之：**SBET 10x 需要 ETH 至少 5-7x + Lubin 真正押注**——比 BMNR 难度更高。',
            points: [
                { year: '2025-06', totalTam: 0.5, neocloudTam: 0.3, selfRevenue: 0, status: 'actual' },
                { year: '2025-12', totalTam: 12, neocloudTam: 9, selfRevenue: 0.05, status: 'actual' },
                { year: '2026', totalTam: 18, neocloudTam: 13, selfRevenue: 0.089, status: 'estimate' },
                { year: '2028', totalTam: 50, neocloudTam: 35, selfRevenue: 0.15, status: 'estimate' },
                { year: '2030', totalTam: 100, neocloudTam: 65, selfRevenue: 0.2, status: 'estimate' },
                { year: '2033', totalTam: 250, neocloudTam: 150, selfRevenue: 0.3, status: 'estimate' },
                { year: '2035', totalTam: 500, neocloudTam: 280, selfRevenue: 0.4, status: 'estimate' },
            ],
            keyNumbers: [
                { label: 'ETH 总市值 (当前)', value: '~$420B', sub: 'ETH=$3,500', cls: 'cyan' },
                { label: 'ETH 2030E 牛市', value: '$1.5-3T', sub: 'ETH $15K-30K', cls: 'purple' },
                { label: '上市 ETH 财库 TAM 2030', value: '$80-300B', sub: '基线/牛市', cls: 'purple' },
                { label: 'SBET 当前占比', value: '~22%', sub: '二名身位', cls: 'cyan' },
                { label: 'SBET 2030E 占比', value: '~15-20%', sub: '随竞争稀释', cls: 'cyan' },
                { label: 'ETH NAV / 股 当前', value: '~$13.5', sub: 'ETH=$3,500', cls: 'cyan' },
                { label: '10x 所需 ETH 价格', value: '$15-20K', sub: '+ Lubin 押注 + ConsenSys 联动', cls: 'red' },
                { label: 'Lubin 注意力风险', value: '兼职董事长', sub: 'SBET 命运系于此', cls: 'red' },
            ],
            sourcesNote:
                '数据来源：Ethereum Treasuries 全球公司持仓排名、CoinGecko ETH 链上数据、各 ETF 招股书 AUM 披露、Lubin Twitter / ConsenSys 公开资料、加密圈研报。2028-2035 为基于 ETH 5-7x 增长 + SBET 持仓占比 0.3-0.5% ETH 流通量的推演。',
        },

        radar: {
            peer1Name: 'BMNR (头名)',
            peer2Name: 'iShares ETHA',
            dimensions: [
                { dim: 'ETH 持仓规模', self: 4, peer1: 7, peer2: 4 },
                { dim: 'Staking 内生收益', self: 6, peer1: 9, peer2: 3 },
                { dim: '加密原生叙事深度', self: 10, peer1: 7, peer2: 5 },
                { dim: 'ETH 杠杆 (mNAV)', self: 7, peer1: 8, peer2: 5 },
                { dim: '灵魂人物影响力', self: 8, peer1: 7, peer2: 5 },
                { dim: '上行弹性', self: 9, peer1: 9, peer2: 5 },
                { dim: '下行风险控制', self: 1, peer1: 2, peer2: 6 },
                { dim: '流动性 + 期权深度', self: 3, peer1: 5, peer2: 10 },
            ],
            note: '1-10 分主观评分。SBET 在加密原生叙事深度（Lubin = ETH 联创）独家领先；BMNR 在持仓规模、staking 收入、流动性上结构性优势；ETHA 在下行风险控制 + 流动性上稳健。**关键判断**：SBET 的 Lubin 叙事溢价 vs BMNR 规模优势是投资者必须做的二选一——通常 BMNR 性价比更高，SBET 仅适合"加密原生信徒"。',
        },
    },

    valuation: {
        metrics: [
            { metric: 'mNAV (市值/ETH NAV)', value: '~1.48x', benchmark: '历史区间 1.0-6.0x · BMNR 1.33x', read: 'fair' },
            { metric: 'mNAV 历史百分位', value: '~5-15%', benchmark: '低位但比 BMNR 略贵', read: 'cheap' },
            { metric: 'EV/Staking 收入', value: '~42x', benchmark: '高 (溢价反映 ETH 升值期权 + Lubin)', read: 'rich' },
            { metric: 'EV/总收入', value: '~34x', benchmark: '不可与传统比较', read: 'rich' },
            { metric: 'Forward 5Y Mult (本分析)', value: '~1.68x', benchmark: '5Y CAGR 10.9% · 比 BMNR 低', read: 'fair' },
            { metric: '隐含 Lubin / ConsenSys 期权', value: '$0.3-0.6B', benchmark: '是 SBET vs BMNR 唯一差异', read: 'fair' },
        ],
        sotp: [
            { item: 'ETH 持仓 NAV', valuation: '~$2.03B', method: '580K ETH × $3,500 (2026-05-06)', note: '核心资产' },
            { item: 'Staking 内生收益 NPV', valuation: '$0.8-1.2B', method: '$71M/年 × 5Y NPV @10% 折现', note: '比 BMNR 小 3x' },
            { item: '体育博彩业务残值', valuation: '$0.05B', method: '原业务 ARR $18M × 3x', note: '影响极小' },
            { item: 'mNAV 飞轮期权价值', valuation: '$0.3-0.6B', method: '未来 5 年 ETH Yield 18-22% × NPV', note: '比 BMNR 期权价值低（规模 + 工具）' },
            { item: 'Lubin / ConsenSys 联动期权', valuation: '$0.3-0.6B', method: 'ConsenSys 战略合作可能性 NPV', note: '**SBET 独占差异化**' },
        ],
        sotpTotal: '$3.18-3.88B',
        sotpPerShare: '对应合理区间 $21-26 (当前 $20 处于 SOTP 下沿，便宜但尾部风险更厚)',
    },

    recommendation: {
        rating: 'Speculative Bet / 极小仓位试水',
        ratingCls: 'neutral',
        timeHorizon: '3-5 年（中期赔率工具）',
        positionSize: '0.3-1.5% 组合权重 · 加密尾部赌注的尾部',
        addingZone: 'mNAV < 1.2x (当前 1.48x) + ETH < $3,000 + Lubin 仍高频公开支持',
        stopLoss: 'mNAV 持续 30 天 < 1.05 + Lubin 60 天未公开提及 SBET + PIPE 投资人 13F 大幅减持 → **任一发生立即清仓**',
        thesis:
            '当前 $20 处于 SOTP 区间 $21-26 下沿，估值"便宜但尾部风险更厚"。**真正适合 SBET 的人极少**：①已经持有 BMNR 但仍想叠加 ETH 加密原生叙事（Lubin 溢价值得 0.15x mNAV 价差）；②坚信 ConsenSys 与 SBET 会发生战略联动（隐性期权 $0.3-0.6B）；③能承受 -90% 回撤 + 不会因 Lubin 减少介入恐慌卖出。其他人**直接买 BMNR 或 ETHA**——在加权期望意义上 SBET 跑输 "60% ETHA + 40% SPY" 被动组合 -2.1pp。**与 BMNR 不应同时持有**——加密 β 高度共振（相关系数 0.85）等于 ETH 杠杆敞口加倍。',
        keyAssumptions: [
            'ETH 5Y 不陷入 >12 个月深熊 (ETH 不长期 <$2,500)',
            'Lubin 5 年内不撤回 SBET 介入 + 公开支持频次维持',
            'mNAV 长期均衡 ≥ 1.15x（飞轮持续运转）',
            'PIPE 解锁分批吸收（不集中砸盘）',
            'ConsenSys 与 SBET 启动至少一次公开战略合作',
            'Staking yield 持续（监管不打压）',
        ],
        sizingFormula: {
            method: 'Kelly 公式（保守版，使用 1/2 Kelly）',
            formula: 'f* = (期望回报率 − 无风险利率) / 方差 × 0.5',
            inputs: [
                { label: '10Y 期望回报率', value: '14.4% CAGR' },
                { label: '无风险利率', value: '4.5% (10Y 国债)' },
                { label: '情景标准差 (10Y)', value: '$22B (~190% of E[Mcap])' },
                { label: '完整 Kelly', value: '~1.5%' },
                { label: '1/2 Kelly (极保守)', value: '~0.75%' },
            ],
            computedSize: '0.3-1.5% 组合权重',
            reasoning:
                'SBET 的回报方差极高（10Y 标准差 ~190% 期望值，与 BMNR 类似但绝对值小一个数量级），加上 Lubin 兼职 + 流动性陷阱 + PIPE 解锁三重不确定性，要求取 1/2 Kelly 极保守值。**分层建仓**：基础 0.3%（试水）+ ConsenSys 联动公开 +0.5%（独占期权落地）+ PIPE 解锁后稳定 +0.5-0.7%（已知风险出清）。**严格止损**：mNAV 持续 30 天 <1.05 触发立即清仓——这是与 BMNR/MSTR 的关键差异（SBET 流动性最差，缓冲最小）。',
        },
    },

    keyPersonRisks: [
        {
            name: 'Joseph Lubin (董事长 · 战略灵魂)',
            role: '加密原生叙事 · 资本市场 · ConsenSys 联动',
            departProb: '中 (~15% / 5 年，但减少介入概率 ~25%)',
            departImpact: '致命 —— mNAV 必跌穿 1.0，股价 -40-60%；他是 SBET 唯一的真护城河',
            mitigation: '几乎无替代者；需要 24+ 个月培育第二代言人；与 Lubin 谈判更深 commitment',
            criticality: 'critical',
        },
        {
            name: 'ConsenSys (Lubin 主业 + 影子支持)',
            role: '战略 + 加密圈接入 + 隐性技术支持',
            departProb: '中 (~20% / 5 年战略转向)',
            departImpact: '高 —— SBET 失去 $0.3-0.6B 期权价值，叙事大幅减弱',
            mitigation: '正式合约绑定；新加密圈合作伙伴',
            criticality: 'high',
        },
        {
            name: 'PIPE 投资人 (ConsenSys / Pantera / Galaxy / ParaFi)',
            role: '战略支持 · 市场信誉',
            departProb: '中 (~70% 部分减持 / 2 年内 PIPE 解锁)',
            departImpact: '高 —— 短期股价 -20-35%，但已知不确定性',
            mitigation: '与 PIPE 投资人沟通分批解锁；新投资者轮换',
            criticality: 'high',
        },
        {
            name: 'Rob Phythian (CEO)',
            role: '执行 · 体育博彩残余 · 公司治理',
            departProb: '中 (~30% / 5 年)',
            departImpact: '中 —— 可替换；执行连续性受影响',
            mitigation: '团队成熟；外部职业经理人替代池较深',
            criticality: 'medium',
        },
        {
            name: 'Robert DeLucia (CFO)',
            role: '财务 · 资本市场 · 投资者关系',
            departProb: '中 (~25% / 5 年)',
            departImpact: '中 —— 资本工具创新可能受影响',
            mitigation: '可招募更资深 CFO；行业人才池可观',
            criticality: 'medium',
        },
    ],

    cashFlow: {
        narrative:
            'SBET 的现金流模型**与 BMNR 同框架但规模仅 1/3**——staking 内生收益 ~$71M/年（BMNR $220M）。**关键差异**：①Staking OCF $71M vs 运营成本 $20M = 净留 $51M/年（BMNR 留 $190M），可复投空间小得多；②体育博彩 OCF 几乎 0，没有像 MSTR 软件业务那样的"备胎"现金流；③极端情景下的运营缓冲只够 ~3 年（BMNR 是 ~10 年）。**最大风险**：staking 监管突变（SEC 重新分类），会让这道防线失效。',
        rows: [
            { year: '2022', ocf: -7, icf: -1, fcf: 5, freeCashFlow: -8, status: 'actual' },
            { year: '2023', ocf: -4, icf: -1, fcf: 2, freeCashFlow: -5, status: 'actual' },
            { year: '2024', ocf: -2, icf: -1, fcf: 0, freeCashFlow: -3, status: 'actual' },
            { year: '2025 (转型年)', ocf: 50, icf: -1900, fcf: 1900, freeCashFlow: 48, status: 'actual' },
            { year: '2026E', ocf: 71, icf: -800, fcf: 750, freeCashFlow: 68, status: 'estimate' },
            { year: '2027E', ocf: 90, icf: -500, fcf: 450, freeCashFlow: 88, status: 'estimate' },
            { year: '2028E', ocf: 110, icf: -300, fcf: 250, freeCashFlow: 108, status: 'estimate' },
        ],
        conversionNote:
            '**SBET 的 Cash Conversion 与 BMNR 同框架**：staking 是真"运营"现金流。Staking OCF / 运营成本 = ~3.5x（BMNR 是 ~7x），是健康但比 BMNR 弱的覆盖比；这意味着即使 ATM/PIPE 关闭，公司仍能维持运营 ~3 年（vs BMNR 10 年）。**关键警惕**：随着 ETH staking yield 长期可能从 3.5% 降至 2.5%（更多 ETH 质押 → 收益分散），$71M 收入可能压缩至 $50M，缓冲进一步收窄。',
        keyRisks: [
            'SEC 重新分类 staking 服务为证券，影响 $71M 内生现金流',
            'ETH 质押比例上升导致 staking yield 从 3.5% 降至 2-2.5%',
            'Lido / Coinbase 等节点黑客或 slashing 事件',
            'PIPE 投资人 13F 集体减持触发 mNAV 跌破 1，ATM 必关闭',
            'NASDAQ 小盘股流动性陷阱，机构难以做大仓位',
        ],
    },

    historicalValuation: {
        narrative:
            'SBET 的"历史"非常短——ETH 战略仅 12 个月。mNAV 区间 **1.0-6.0x**（比 BMNR 1.0-5.5x 还高），从 2025-06 启动期 6.0x 高点跌至当前 1.48x。**关键时刻表**：mNAV 跌破 1.2x 是逢低布局信号；mNAV >2.5x 是过热警告；mNAV 跌穿 1.0 是死亡螺旋触发线。**与 BMNR 关键差异**：SBET 流动性最差，mNAV 跌穿 1 后修复时间会更长（潜在退市风险叠加）。',
        history: [
            { period: '2025-06-15 (启动)', evSales: 6000, note: 'Lubin 加入震撼上市 · mNAV 6.0x 散户暴买 · 股价 $3 → $80' },
            { period: '2025-08', evSales: 3500, note: '冲高回落 · mNAV 3.5x' },
            { period: '2025-10', evSales: 2200, note: '持续稀释 · ETH 横盘 · mNAV 2.2x' },
            { period: '2025-12', evSales: 1800, note: '飞轮放缓 · mNAV 1.8x' },
            { period: '2026-02', evSales: 1600, note: 'PIPE 解锁担忧 · mNAV 1.6x' },
            { period: '2026-Q1', evSales: 1500, note: '盘整 · mNAV 1.5x · Russell 2000 纳入' },
            { period: '2026-05-06 (当前)', evSales: 1480, note: 'mNAV 1.48x · 进入合理偏便宜区间但比 BMNR 1.33x 略贵' },
        ],
        currentPercentile: '5-15%',
        verdict: 'cheap',
    },

    downsideMetrics: {
        narrative:
            '只看期望 14.4% CAGR 是 research theater。基于 5 档情景，SBET 10Y **情景标准差约 $22B**（~190% 期望值，与 BMNR 类似但绝对值小一个数量级）。**5Y 内亏损 50%+ 的概率约 32%** —— PIPE 解锁砸盘 + ETH 熊市 + Lubin 减少介入三杀触发 -90% 回撤是真实尾部。**SBET 是档案库中最具尾部偏度的标的**：上行很大 + 下行更大 + 流动性陷阱让"修复时间"更长。',
        scenarioStdDev: 22,
        sharpeLike: 0.37,
        probLoss30Pct5Y: 38,
        maxDrawdownEstimate: '-90%（PIPE 解锁 + ETH 熊 + Lubin 减少介入三杀；2025-06 至 2026-05 已经从 mNAV 6.0x 跌至 1.48x = -75% 估值压缩）',
        downsideToUpsideRatio: '下行 1 vs 上行 1.7（BMNR 1:2，MSTR 1:2.4，SBET 最差）',
    },

    sensitivity: {
        narrative: '哪个变量对 10Y 期望市值最敏感？按单变量 ±1σ 扰动排序 ——',
        variables: [
            { variable: 'ETH 长期价格 ±50%', downImpact: -8, upImpact: 15, description: 'ETH β 核心：决定一切' },
            { variable: 'Lubin 公开承诺持续性', downImpact: -5, upImpact: 2, description: '**单边下行风险** · SBET 唯一真护城河' },
            { variable: 'mNAV 长期均衡 ±0.3x', downImpact: -4, upImpact: 5, description: '飞轮强度决定估值倍数' },
            { variable: 'PIPE 解锁吸收能力', downImpact: -3, upImpact: 0.5, description: '**日历事件** · 70% 概率发生' },
            { variable: '股本年化稀释率', downImpact: -2, upImpact: 2, description: '过度稀释吃掉 ETH Yield' },
            { variable: 'ConsenSys 联动深化', downImpact: -1, upImpact: 3, description: 'SBET 独占差异化期权' },
            { variable: '监管 staking = 证券', downImpact: -2, upImpact: 0, description: '尾部下行' },
        ],
        takeaway:
            '**最敏感三变量：ETH 长期价格、Lubin 公开承诺持续性、mNAV 长期均衡**。每季度只盯这三件事就够。**特别警告**：Lubin 减少介入是单边下行风险（不像 ETH 价格有上行对冲），且权重仅次于 ETH 价格。三者同向负向时（ETH 跌 + Lubin 撤 + mNAV 压缩），跌幅可能是单变量的乘积效应，触发 -85% 以上回撤。',
    },

    bearPlaybook: {
        scenario: '"熊市：飞轮反向"（22% 概率）+ "死亡螺旋"（10% 概率）合计 32% 概率的完整 ruin 时间线',
        steps: [
            {
                when: 'T+0 (ETH 跌穿 $3K + Lubin 减少 Twitter)',
                event: 'mNAV 压缩到 1.1-1.2x；散户开始恐慌',
                signal: 'ETH 连续 30 天 <$3K；mNAV 跌穿 1.2x；Lubin 月内未提 SBET',
            },
            {
                when: 'T+1-3M (PIPE 锁定期到期)',
                event: 'ConsenSys / Pantera 部分减持披露 13F；股价单日 -15-20%',
                signal: 'Form 4 内幕交易披露；机构大宗交易 reports；与 BMNR 同期共振',
            },
            {
                when: 'T+3M (ATM 关闭)',
                event: 'mNAV<1 时增发反向稀释，公司主动暂停 ATM',
                signal: '月度增发归零；管理层公开声明"暂时调整融资节奏"',
            },
            {
                when: 'T+6M (Lubin 公开转向 ConsenSys/Linea)',
                event: 'Lubin Twitter 几乎不再提及 SBET；CNBC 出镜频次降至零',
                signal: '社交媒体监测；Lubin 在 ConsenSys / Linea 公开活动频次提升',
            },
            {
                when: 'T+9M (Staking 减半)',
                event: 'ETH 跌穿 $2K 后 staking 收益 $35M < 运营 + 成本，缓冲快速消耗',
                signal: '现金流量表显示融资活动收缩；分析师评级下调',
            },
            {
                when: 'T+12M (被迫卖 ETH)',
                event: '公司开始卖出 ETH 偿付运营成本；破除"持有不卖"承诺',
                signal: '8-K 披露 ETH 减持；股价 -65%；散户大规模抛售',
            },
            {
                when: 'T+12-18M (退市风险)',
                event: 'mNAV<0.5 + NASDAQ 小盘合规警告；可能被强制摘牌或重组',
                signal: '股价持续 <$5；交易所合规通知；NASDAQ 小盘股退市先例',
            },
        ],
        exitTrigger:
            '**最严格止损规则（比 BMNR 更紧）**：①mNAV 持续 30 天 <1.05；②Lubin 连续 60 天公开未提 SBET；③PIPE 投资人 13F 显示集体减持 >20%；④NASDAQ 发出小盘合规警告 —— **任一条触发立即清仓**。**与 MSTR/BMNR 关键差异**：SBET 流动性最差，等等看的成本最高（一旦警觉再卖已经晚了）。**Lubin 公开承认"减少 SBET 介入"是终极信号**，不留一股。',
    },

    capitalAllocation: {
        narrative:
            'SBET 处于"被市场观察"阶段——只有 12 个月战略 track record，无法做完整评分。**比 BMNR 弱半档**：规模小 + 工具薄 + Lubin 是兼职。Lubin 资本市场叙事能力强（加密原生信誉），PIPE + ATM 执行效率高（12 个月累计 580K ETH），但代价是 30x 稀释（比 BMNR 还激进）。',
        scores: [
            { dimension: 'ROIIC', label: '增量资本回报率', score: 3, detail: '2025-2026 ETH 投入回报受 ETH 价格主导；自身工具效率仅中等；ETH Yield 数据不足 1 年无法评分', evidence: '2025 季报 + ETH 价格' },
            { dimension: 'Buyback', label: '回购节奏', score: 1, detail: '不回购（与 ETH 战略冲突）', evidence: '历史回购数据' },
            { dimension: 'Dividend', label: '股息政策', score: 1, detail: '无股息（合理 · staking 收入复投）', evidence: '公司指引' },
            { dimension: 'M&A', label: '并购命中率', score: 2, detail: '不做并购；唯一"并购对象"是 ETH；未来可能并购小型 ETH 财库', evidence: '历史无并购' },
        ],
        overallGrade: 'C',
        historicalROIIC: 'N/A (战略 12 个月，数据不足；Lubin 在 ConsenSys 有 0→$10B 估值记录但是不同公司)',
    },

    gapAnalysis: {
        narrative:
            'SBET 2026 关键 gap 是"Lubin 持续介入是否真实"——卖方对 Lubin 注意力分散低估。卖方对 ETH 持仓增长 + ConsenSys 联动过乐观，对稀释成本低估。',
        rows: [
            { metric: 'ETH 持仓 2026 末', guidance: '"持续增持"', consensus: '900K ETH', selfAssumption: '750K ETH', gap: '-17% 保守', risk: 'medium' },
            { metric: '5Y ETH 持仓占总供应', guidance: '"目标 1.5%"', consensus: '1-1.5%', selfAssumption: '0.8%', gap: '**-47%！需要再融资 $5B+**', risk: 'high', note: '稀释代价巨大' },
            { metric: 'Lubin 介入度', guidance: '"全力支持"', consensus: '持续', selfAssumption: '50% 概率减少介入', gap: '**大分歧 🔴**', risk: 'high', note: '注意力分散结构性问题' },
            { metric: 'ConsenSys 联动', guidance: '"探索中"', consensus: '~70% 落地', selfAssumption: '~30% 落地', gap: '**共识过激进 -40%**', risk: 'high' },
            { metric: '5Y ETH 价格', guidance: '"数万"', consensus: '$8K', selfAssumption: '$7K', gap: '一致', risk: 'low' },
            { metric: 'mNAV 长期均衡', guidance: '未明示', consensus: '1.5-1.8x', selfAssumption: '1.2-1.4x', gap: '共识过乐观 -25%', risk: 'high', note: 'ETHA 替代效应被低估' },
            { metric: 'PIPE 解锁吸收', guidance: '"分批协调"', consensus: '"温和"', selfAssumption: '70% 概率砸盘 -20-35%', gap: '**共识严重低估**', risk: 'high', note: '日历事件被忽视' },
        ],
        takeaway:
            '**最关键 Gap 三连**：①Lubin 持续介入度（共识"持续" vs 自己 50% 减少）；②ConsenSys 联动落地（共识 70% vs 自己 30%）；③PIPE 解锁砸盘共识"温和" vs 实际 70% 概率 -20-35%。**爆雷触发点**：Lubin 公开减少 + PIPE 第一批解锁 + ETH 同期回调 → 共识下修 → 股价 -35-50%。**这是做空 SBET 的最佳入场点**——比 BMNR 共识 vs 自己分析的 gap 更大、风险更集中。',
    },

    benchmarkComparison: {
        narrative:
            'SBET 10Y 期望 CAGR 14.4% vs 被动组合 60% ETHA + 40% SPY (~16.5%) 的超额回报 = **-2.1pp**（负超额）。**机会成本是 ETHA + BMNR**。残酷的事实：在加权期望意义上 SBET **跑输** 被动组合。**真正适合 SBET 的人**只有"已持有 BMNR + 想叠加 Lubin 加密原生叙事溢价"——其他人**直接买 BMNR 或 ETHA**。仓位上限 ≤1.5%——"赔率工具的赔率"，不是核心持仓。',
        alternatives: [
            { name: 'ETHA (ETH ETF)', ticker: 'ETHA', expectedReturn5Y: 16, expectedReturn10Y: 18, note: '现货 ETH，无杠杆，0.25% 费用' },
            { name: 'BMNR (ETH 头名)', ticker: 'BMNR', expectedReturn5Y: 16.6, expectedReturn10Y: 17.6, note: '同框架但规模 3x + 流动性更好' },
            { name: 'SPY (S&P 500)', ticker: 'SPY', expectedReturn5Y: 9, expectedReturn10Y: 10, note: '美国宽基' },
            { name: 'QQQ (纳斯达克 100)', ticker: 'QQQ', expectedReturn5Y: 10, expectedReturn10Y: 12, note: '科技权重' },
            { name: '60% ETHA + 40% SPY', expectedReturn5Y: 13.2, expectedReturn10Y: 16.5, note: 'ETH 现货 + 美股宽基' },
            { name: 'MSTR (BTC 财库对照)', ticker: 'MSTR', expectedReturn5Y: 15.1, expectedReturn10Y: 15.8, note: 'BTC 杠杆同框架对比' },
            { name: '直接持有 ETH + 自质押', expectedReturn5Y: 18, expectedReturn10Y: 20, note: '零费用 + 完整 staking yield' },
            { name: '10Y 国债 (TLT)', ticker: 'TLT', expectedReturn5Y: 4, expectedReturn10Y: 4.5, note: '无风险' },
        ],
        selfReturn5Y: 10.9,
        selfReturn10Y: 14.4,
        excessReturn5Y: -2.3,
        excessReturn10Y: -2.1,
        justifiesPosition: 'no',
        takeaway:
            '**SBET 在加权期望意义上跑输 "60% ETHA + 40% SPY" 被动组合 -2.1pp，也跑输 BMNR -3.2pp**。如果只能选一个 ETH 杠杆敞口，BMNR 在所有维度都更优（规模 3x、流动性更好、估值更便宜）。SBET 的唯一卖点是 Lubin 加密原生叙事 + ConsenSys 联动期权——这两个都是"无法量化的故事"。仓位上限 ≤1.5%——"赔率工具的赔率"。',
    },

    trackRecord: {
        narrative:
            '本分析锚定 2026-05-06。以下 6 条假设是未来 12-18 个月可验证命题，3/6/12 月后回看建立分析师自我校准数据。**ETH 价格 + Lubin 介入度 + ConsenSys 联动**三项是核心先行指标。',
        assumptions: [
            { assumption: 'ETH 持仓 2026-12-31 ≥ 750,000 ETH', setAt: '2026-05-06', targetDate: '2026-12-31', targetValue: '≥ 750K ETH', verdict: 'pending', note: '"1.5%" 目标的中间里程碑' },
            { assumption: 'Lubin 2027-05 仍在董事长职位且月度公开提及 SBET ≥3 次', setAt: '2026-05-06', targetDate: '2027-05-06', targetValue: '在任 + 高频提及', verdict: 'pending', note: '叙事核心存续' },
            { assumption: 'mNAV 2026-08 不跌穿 1.0', setAt: '2026-05-06', targetDate: '2026-08-06', targetValue: '≥ 1.0x', verdict: 'pending', note: '死亡螺旋警戒线' },
            { assumption: 'PIPE 解锁后 6 个月内未触发 -40%+ 单日跌幅', setAt: '2026-05-06', targetDate: '2027-01-31', targetValue: 'no -40%+ day', verdict: 'pending', note: '70% 概率事件' },
            { assumption: 'ETH staking 收益 2026 全年 ≥ $65M', setAt: '2026-05-06', targetDate: '2027-02-28', targetValue: '≥ $65M', verdict: 'pending', note: '内生现金流' },
            { assumption: 'ConsenSys / Linea 与 SBET 启动公开战略合作', setAt: '2026-05-06', targetDate: '2027-05-06', targetValue: '公开合作公告', verdict: 'pending', note: 'SBET 独占差异化' },
        ],
        hitRate: 'N/A (全部 pending)',
    },

    dataSources: {
        narrative: '本报告数据锚定 2026-05-06。**注意**：SBET ETH 战略仅 12 个月，数据极度依赖最新 8-K / 季报 / Lubin 公开声明，与最新披露存在差异的可能性较高。情景概率与 5Y/10Y 期望为本分析主观推演。',
        accessedAt: '2026-05-06',
        sources: [
            { label: 'SharpLink Gaming Investor Relations (官方)', url: 'https://www.sharplink.com/investors', category: 'primary', note: '季报 + 公告' },
            { label: 'SharpLink SEC EDGAR Filings', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001981535&type=10-Q', category: 'primary' },
            { label: 'Ethereum Treasuries 全球持仓排行', url: 'https://ethereumtreasuries.net/', category: 'data', note: 'SBET 580K ETH 排第 2' },
            { label: 'SharpLink ETH 财库公告 (2025-05)', url: 'https://www.businesswire.com/', category: 'primary', publishedAt: '2025-05', note: 'Lubin 加入 + ETH 战略启动' },
            { label: 'SharpLink $425M PIPE 公告 (2025-06)', url: 'https://www.businesswire.com/', category: 'primary', publishedAt: '2025-06', note: 'ConsenSys / Pantera / Galaxy / ParaFi 参与' },
            { label: 'Joseph Lubin Twitter (@ethereumJoseph)', url: 'https://twitter.com/ethereumJoseph', category: 'secondary', note: '叙事来源 · Lubin 个人账号' },
            { label: 'ConsenSys 官网', url: 'https://consensys.io/', category: 'secondary', note: 'Lubin 主业；潜在战略联动方' },
            { label: 'JPMorgan ETF 替代效应分析 (2025-12)', url: 'https://www.jpmorgan.com/insights', category: 'research' },
            { label: 'Citi Research: ETH 主流化路径', url: 'https://www.citigroup.com/global/insights', category: 'research' },
            { label: 'Yahoo Finance SBET', url: 'https://finance.yahoo.com/quote/SBET/', category: 'data' },
            { label: 'CoinGecko ETH 市场数据', url: 'https://www.coingecko.com/en/coins/ethereum', category: 'data' },
            { label: 'Lido / Coinbase Staking yield 数据', url: 'https://lido.fi/ethereum', category: 'data' },
        ],
    },

    correlation: {
        narrative:
            'SBET 是**全球最高 β + 最尖锐尾部的 ETH 杠杆敞口**：涨跌 90%+ 由 ETH 价格 + Lubin 叙事驱动。**与 BMNR 高度共振（相关系数 0.85），不应同时持有**——本质上是 ETH 杠杆敞口加倍。如果组合中已持有 ETH / ETHA / BMNR / 加密 ETF，加 SBET 的**边际多元化几乎为零**。真正的 hedge 是**反加密 + 久期资产**。',
        rows: [
            { asset: '以太坊 (ETH) / ETHA', beta: 1.5, correlation: 0.92, hedgeValue: 'low', note: '完全替代品，加 SBET = 加 ETH 杠杆' },
            { asset: 'BMNR (ETH 财库头名)', beta: 1.2, correlation: 0.85, hedgeValue: 'low', note: '**同框架 ETH 财库，几乎可替代，不应同时持有**' },
            { asset: 'MSTR (BTC 财库)', beta: 1.0, correlation: 0.70, hedgeValue: 'low', note: '加密 β 共振' },
            { asset: 'Coinbase (COIN)', beta: 0.9, correlation: 0.60, hedgeValue: 'low', note: '加密赛道 β 重合' },
            { asset: 'BTC / IBIT', beta: 0.8, correlation: 0.65, hedgeValue: 'low', note: '加密 β 共振' },
            { asset: 'QQQ (科技股)', beta: 1.6, correlation: 0.50, hedgeValue: 'medium', note: '风险偏好相关' },
            { asset: 'SPY (美国宽基)', beta: 1.8, correlation: 0.40, hedgeValue: 'medium', note: '宏观风险偏好' },
            { asset: '黄金 (GLD)', beta: -0.1, correlation: 0.10, hedgeValue: 'medium', note: '货币替代品弱对冲' },
            { asset: '10Y 国债 (TLT)', beta: -0.2, correlation: -0.20, hedgeValue: 'high', note: 'ETH 熊市 + 降息双重保护' },
        ],
        suggestedHedge:
            '如果 SBET 占组合 0.3-1.5%，建议搭配：①**反向**：5-8% TLT（ETH 熊市 + 降息双保护）+ 2-3% GLD（货币替代品对冲）；②**绝对不要同时持有**：SBET + BMNR 共振 0.85 = ETH 杠杆敞口加倍，深熊时同步 -75-90%；③**整体加密敞口上限**：SBET + BMNR + MSTR + ETHA + IBIT + COIN 之和 ≤ 8%。**最佳组合**（如选 SBET）：SBET 1% + ETHA 4% + MSTR 2% + IBIT 3% + TLT 7% + GLD 3%（替代 BMNR）。**核心原则**：把 SBET 当成"BMNR 的加密原生增强版"——只在 BMNR 不可买时考虑，且仓位是 BMNR 的一半。',
    },
}
