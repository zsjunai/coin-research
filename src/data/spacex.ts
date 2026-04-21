import type { CompanyDetail } from '@/types/company'

export const spacex: CompanyDetail = {
    id: 'spacex',
    ticker: 'PRIVATE:SPX',
    name: 'SpaceX (Space Exploration Technologies)',
    tagline:
        '未上市私有公司 · 2025-12 二级交易估值 $800B · 2026-04-01 confidentially filed IPO 目标 $1.75-2T。2026-02 与 xAI 合并后总估值 $1.25T。Starlink 2026E $18.7B 营收（占 79%）+ Starship 下一代火箭 + Dragon 载人。核心争议：IPO 是机会还是估值天花板？',
    date: '2026-04-21',

    priceCards: [
        { label: '最新二级交易估值', value: '$800B', sub: '2025-12 内部 tender @ $421/股', cls: 'cyan' },
        { label: 'IPO 目标估值', value: '$1.75 – 2T', sub: '2026-04-01 confidential filing', cls: 'purple' },
        { label: '合并 xAI 估值', value: '$1.25T', sub: '2026-02 合并 SpaceX $1T + xAI $250B', cls: 'purple' },
        { label: '2025 全年营收', value: '$15.5B', sub: '+18% YoY vs $13.1B', cls: 'green' },
        { label: '2026E 营收', value: '$27 – 30B', sub: 'Starlink 爆发驱动', cls: 'green' },
        { label: 'Starlink 用户', value: '10M+', sub: '2026-02 里程碑', cls: 'green' },
    ],

    keyFacts: {
        '2025 全年营收': '$15.5B (+18% YoY)',
        '2024 营收': '$13.1B',
        '2026E 营收': '$27-30B',
        'Starlink 2025 营收': '$10-10.6B (~67% 总营收)',
        'Starlink 2026E 营收': '$18.7B (+80%)',
        'Starlink 用户 (2026-02)': '10M+',
        '火箭发射业务': '政府 (NASA/DoD) + 商业',
        'Starship 进展': 'FAA 批准 Starbase 年 25 次发射',
        'IPO 时间目标': '2026 中下 (confidential 已交)',
        'IPO 融资规模': '$50-75B (史上最大 IPO)',
        'xAI 合并': '2026-02 最大私营合并',
        'Musk 持股': '~42% (IPO 前 · 双层股权)',
    },

    contracts: [
        { customer: 'NASA (商业载人 + 补给)', amount: '~$3-4B/年', years: '长期 CRS / CCtCap', detail: 'Dragon 载人 + Cargo 的独家承包方；2026 仍是 NASA 对 ISS 的唯一美国载人通道' },
        { customer: 'DoD / Space Force (NSSL 机密发射)', amount: '$2-3B/年', years: '多年合同', detail: 'Falcon 9 / Heavy 的国防发射合同 · Starshield 军用卫星网' },
        { customer: 'Starlink 零售订阅', amount: '$10B+ (2025)', years: '持续 ARPU 订阅', detail: '消费者 $2k/年 + 企业 + 海事 $34k + 航空 $300k' },
        { customer: 'xAI 合并', amount: '2026-02 完成', years: '战略融合', detail: 'xAI $250B 估值合并入 SpaceX $1T，合计 $1.25T 形成"太空 + AI"综合体' },
        { customer: 'Commercial launch (Iridium / OneWeb / 政府)', amount: '~$1-2B/年', years: '多年', detail: 'Falcon 9 是全球最便宜可靠的发射载具，市占 >80%' },
    ],

    subsidiaries: [
        { name: 'Starlink', desc: '低轨卫星互联网 · 10M+ 用户', stake: '全资运营', value: 'Sacra 预估独立估值 $300-500B · IPO 后可能分拆' },
        { name: 'Starship Program', desc: '下一代完全可重复使用超重型火箭', stake: '内部研发', value: '未独立估值 · 10Y 终局决定者' },
        { name: 'xAI (合并后)', desc: 'Musk 的 AI 公司 · Grok / Colossus 超算', stake: '2026-02 合并', value: '合并时估值 $250B' },
        { name: 'Starshield', desc: '军用版 Starlink · DoD 主导', stake: '内部', value: '未披露 · 估 $5-10B' },
        { name: 'Dragon', desc: '载人 + 货运飞船 · NASA 独家', stake: '内部', value: '成熟业务 · 稳定现金流' },
    ],

    bullPoints: [
        { title: '垂直整合 + 可重复使用颠覆发射经济', body: 'Falcon 9 单次成本 $15-20M vs 竞品 $60-120M · 发射市占 >80%。Starship 若成熟，单次成本可能降至 $2-5M，再颠覆一次' },
        { title: 'Starlink 订阅模式可复合增长', body: '2025 → 2026 订阅 6M → 10M+，营收 $10B → $18.7B (+87%)。ARPU 全球化分层（消费/企业/海事/航空），网络效应 + 低轨壁垒' },
        { title: 'IPO 将释放巨大流动性溢价', body: '当前二级市场折价 ~30% vs IPO 目标。IPO 后机构资金 + 被动指数配置可驱动估值上行 1.5-2x' },
        { title: '政府依赖双向锁定', body: 'NASA / DoD 离不开 SpaceX（唯一载人通道、NSSL 独家承包）。这种"国家关键基础设施"地位使监管反向保护 SpaceX' },
        { title: 'xAI 合并后 AI + 太空叙事融合', body: 'Grok / Colossus 超算可作为 Starlink 的 AI 服务叠加（边缘 AI + 低延迟），2027+ 有独特"太空计算"卡位' },
        { title: 'Musk 执行力 · 0 → $1T 唯一先例', body: 'Musk 同时掌舵 Tesla ($1T+) + SpaceX ($1T+) + xAI + Neuralink · 没有第二个企业家在私营公司创造 $1T 估值的先例' },
    ],

    bearPoints: [
        { title: 'IPO 估值 $2T 隐含极高期待', body: 'IPO 若定价 $2T = 2026E 营收 70x · 远超 Tesla 巅峰（12x）或 NVDA（30x）。这种估值需要 Starship 商业化 + Starlink 10x + xAI 协同全部兑现，容错率极低' },
        { title: '"Musk 折价"vs"Musk 溢价"摇摆', body: 'Musk 分身乏术 + 政治化言论 + xAI 激进收购，历史上 Tesla 股价被 Musk Twitter / 政治站队多次打压。IPO 后散户情绪放大这种风险' },
        { title: 'Starship 技术未完全成熟', body: '2024-2025 多次试飞成功但完整闭环（含轨道释放 + 返回 + 复用）仍在迭代。若 2027 年前商业运营未达预期，估值模型会被打破' },
        { title: 'Amazon Kuiper 等对手快速追赶', body: 'Amazon Kuiper 2024 开始发射，目标 2027 年 3200 颗卫星 · 中国千帆、鸿鹄项目 2026-2030 快速部署。Starlink 从"独占"变"双寡头"是高概率事件' },
        { title: 'xAI 合并估值争议', body: 'xAI $250B 估值内部定价被批评 "Musk 自己定价自己买"。SEC 可能介入审查关联交易；独立投资人对合并对价的分歧已公开' },
        { title: 'Starlink 对主权国家监管敏感', body: '俄罗斯 / 中国 / 伊朗等国明令禁止 Starlink。欧盟 / 印度 / 巴西等要求本地化数据 + 牌照。地缘风险使全球化 TAM 打折' },
    ],

    scenarios: [
        {
            name: '乐观: 世界第一公司（太空 + 通信 + AI）',
            cls: 'bull',
            prob: 12,
            y5Mcap: '$3 – 5T',
            y5Value: 4000,
            y10Mcap: '$8 – 15T',
            y10Value: 11000,
            desc: 'Starship 商业运营 + Starlink 80% 宽带市占 + xAI 协同 + Mars 殖民叙事资本化。2030 营收 $80-100B，估值 80-120x（类比 TSMC 黄金期）',
        },
        {
            name: '中性: IPO 后稳态增长 · Starlink 主引擎',
            cls: 'neutral',
            prob: 50,
            y5Mcap: '$1.5 – 2.5T',
            y5Value: 2000,
            y10Mcap: '$3 – 5T',
            y10Value: 4000,
            desc: 'Starlink 2030 $50B 营收 + 发射稳态 + Starship 部分商业化；2030 营收 $60-80B · 估值 40-50x · 与今日微软 / Apple 量级持平',
        },
        {
            name: '悲观: Starship 延期 + 竞争加剧',
            cls: 'bear',
            prob: 30,
            y5Mcap: '$500 – 800B',
            y5Value: 650,
            y10Mcap: '$800B – 1.5T',
            y10Value: 1100,
            desc: 'Starship 2028 前未达商业化 · Amazon Kuiper 吃下 25-30% 宽带市场 · Starlink 单价下行 · 2030 营收 $35-45B · 估值 20-25x',
        },
        {
            name: '尾部: Musk 退出 / 政治打击 / 重大事故',
            cls: 'bear',
            prob: 8,
            y5Mcap: '$300 – 500B',
            y5Value: 400,
            y10Mcap: '$500B – 1T',
            y10Value: 700,
            desc: 'Musk 被迫退出 (政治或法律) · 重大发射事故 · NASA / DoD 合同被削减 · 估值回归"纯火箭公司"逻辑',
        },
    ],

    tenXGene: [
        { dim: '软件边际成本 · 规模化杠杆', tenBagger: '边际成本 ≈ 0', nebius: '火箭发射有边际成本，但 Starlink 订阅软件化 + 卫星重复使用接近零边际', status: 'yellow' },
        { dim: '网络/平台效应', tenBagger: '显著', nebius: 'Starlink 低轨星座 = 物理网络效应（更多用户 → 更多卫星 → 更低延迟）+ 先发壁垒', status: 'green' },
        { dim: '数据闭环 / 专属资产', tenBagger: '独占数据 / IP / 规模', nebius: '10M+ 用户全球使用数据 + Falcon 回收经验 + Starship 试飞数据 + xAI 超算', status: 'green' },
        { dim: '毛利率 · 定价权', tenBagger: '60-80% 可持续', nebius: 'Starlink 订阅毛利 70%+ · 发射业务 40-50% · 美国政府合同定价权强', status: 'green' },
        { dim: '消费者触点 / 品牌', tenBagger: '直接 C 端 / 开发者心智', nebius: '10M+ Starlink 直接 C 端 · Musk/SpaceX 全球品牌 TOP 5 科技公司', status: 'green' },
        { dim: '再投资空间 · S-curve', tenBagger: '高 ROIC + TAM 够大', nebius: '全球宽带 TAM $500B+ · Starship 打开深空 TAM 级别 · Mars 是未知 TAM', status: 'green' },
        { dim: '管理层 · 跨代际转型', tenBagger: '有过 0→$30B 记录', nebius: 'Musk 已做到 0 → $1T 两次（Tesla + SpaceX），历史上无先例', status: 'green' },
    ],

    weightedExpectation: {
        currentMcap: 800,
        y5: {
            expectedMcap: 1707,
            multiplier: 2.13,
            cagr: 16.4,
        },
        y10: {
            expectedMcap: 3706,
            multiplier: 4.63,
            cagr: 16.6,
        },
        breakdown: [
            { scenario: 'A. 世界第一', prob: 12, y5Mid: 4000, y10Mid: 11000, y5Contrib: 480, y10Contrib: 1320 },
            { scenario: 'B. 稳态增长', prob: 50, y5Mid: 2000, y10Mid: 4000, y5Contrib: 1000, y10Contrib: 2000 },
            { scenario: 'C. Starship 延期', prob: 30, y5Mid: 650, y10Mid: 1100, y5Contrib: 195, y10Contrib: 330 },
            { scenario: 'D. 尾部', prob: 8, y5Mid: 400, y10Mid: 700, y5Contrib: 32, y10Contrib: 56 },
        ],
    },

    peerName: 'Rocket Lab / RKLB',
    coreWeaveCompare: [
        { metric: '2025 营收', nbis: '$15.5B', cwv: '~$500M', winner: 'nbis' },
        { metric: '发射次数 (2025)', nbis: '130+ (Falcon 9)', cwv: '~15 (Electron)', winner: 'nbis' },
        { metric: '可重复使用', nbis: '一级回收 · 10+ 次复用', cwv: 'Neutron 开发中', winner: 'nbis' },
        { metric: '订阅业务 (Starlink)', nbis: '$10B+ 规模', cwv: '无', winner: 'nbis' },
        { metric: '人类发射能力', nbis: 'Dragon 载人 (唯一美国)', cwv: '无', winner: 'nbis' },
        { metric: '估值', nbis: '~$800B – 2T', cwv: '~$15B', winner: 'nbis' },
        { metric: '增长专注度', nbis: '多业务复杂', cwv: '单一发射聚焦', winner: 'cwv' },
        { metric: '上市 / 流动性', nbis: '未上市 (IPO pending)', cwv: '已上市 NASDAQ', winner: 'cwv' },
    ],

    analysts: [
        { firm: '最高 IPO 估值 (Techi)', target: 2000, rating: 'IPO $2T 目标' },
        { firm: 'SpaceX IPO 目标中值', target: 1750, rating: 'IPO $1.75T' },
        { firm: 'Morgan Stanley (估值)', target: 1000, rating: 'Private · $1T' },
        { firm: '二级市场 (2025-12 tender)', target: 800, rating: 'Private @ $421/股' },
        { firm: 'Morningstar 公允估值', target: 650, rating: 'Private · Fair Value' },
        { firm: '保守估值 (悲观情景)', target: 400, rating: 'Bear · Starship 失败' },
    ],

    watchlist: [
        { indicator: 'Starlink 月新增用户', strongSignal: '> 500k/月', baseSignal: '300-400k/月', weakSignal: '< 200k/月' },
        { indicator: 'Starship 发射成功率', strongSignal: '> 80% 含完整 EDL', baseSignal: '60-75%', weakSignal: '< 50% 关键任务失败' },
        { indicator: 'Starlink ARPU (综合)', strongSignal: '> $120/月', baseSignal: '$80-110/月', weakSignal: '< $70/月 (价格战)' },
        { indicator: 'IPO 执行节奏', strongSignal: '2026 Q3 内上市', baseSignal: '2026 Q4 / 2027 Q1', weakSignal: '推迟至 2027 Q2+' },
        { indicator: '政府合同占比 (风险分散)', strongSignal: '< 30%', baseSignal: '30-45%', weakSignal: '> 50% 过度依赖' },
    ],

    finalQuote:
        'SpaceX 是<strong>"Musk 个人溢价 + 垂直整合物理壁垒 + 订阅化现金流"</strong>三位一体的独一无二私营巨头。10 年 5x 期望市值是理性判断，但任何单一情景（Starship 失败、Kuiper 抢占、Musk 退出）都可能让现实落在 -50% 到 +200% 之间。<strong>非上市不可直接买入；IPO 后若定价 $2T 是估值天花板，$1T 以下才是入场点</strong>。值得作为"不可复制的太空 + 通信基础设施"敞口关注，但不要在 IPO 前 FOMO。',

    revenueChart: {
        labels: ['2022 Revenue', '2023 Revenue', '2024 Revenue', '2025 Revenue', '2026E Revenue'],
        values: [4600, 8700, 13100, 15500, 28000],
        kinds: ['revenue', 'revenue', 'revenue', 'revenue', 'revenue'],
    },

    overview: {
        founded: '2002 · Elon Musk 在加州霍桑创立',
        headquarters: '美国 · 德州 Starbase + 加州 Hawthorne + 华盛顿 Redmond (Starlink)',
        incorporation: '美国 Delaware',
        employees: '~16,000+ (2025 末)',
        listing: 'PRIVATE · 2026-04-01 confidentially filed IPO · 预计 2026 Q3-Q4 上市',
        history: [
            { year: '2002', event: 'Elon Musk 以 $100M 个人资金创立 · 目标让人类成为跨行星物种', tag: '创立' },
            { year: '2008', event: 'Falcon 1 第四次试飞成功 · 第一家私营公司入轨', tag: '里程碑' },
            { year: '2010', event: 'Falcon 9 首次成功发射 + Dragon 入轨并返回', tag: '里程碑' },
            { year: '2012', event: 'Dragon 首次为 ISS 补给（首个私营任务）', tag: '里程碑' },
            { year: '2015-12', event: 'Falcon 9 一级首次陆地回收成功', tag: '里程碑' },
            { year: '2017-03', event: '二级使用过的 Falcon 9 首次复用发射', tag: '里程碑' },
            { year: '2020-05', event: 'Crew Dragon 首次载人任务 · 九年首次美国本土载人', tag: '里程碑' },
            { year: '2020', event: 'Starlink 第一批卫星运营', tag: '产品' },
            { year: '2022-2023', event: 'Starlink 用户从 50 万 → 200 万', tag: '增长' },
            { year: '2023-04', event: 'Starship 首次综合试飞（IFT-1）', tag: 'Starship' },
            { year: '2024-10', event: 'Starship 首次"筷子"捕获一级', tag: 'Starship' },
            { year: '2025', event: '全年发射 130+ 次 · Starlink 用户破 9M · 营收 $15.5B', tag: '业绩' },
            { year: '2025-12', event: '二级 tender @ $421/股 · 估值 $800B', tag: '估值' },
            { year: '2026-02', event: '与 xAI 合并 · 合并估值 $1.25T ($1T SpaceX + $250B xAI)', tag: '并购' },
            { year: '2026-02', event: 'Starlink 用户破 10M', tag: '里程碑' },
            { year: '2026-04-01', event: 'Confidential IPO filing · 21 家投行参与', tag: 'IPO' },
            { year: '2026-04-21', event: 'IPO 在 confidential review · 预计 Q3-Q4 上市', tag: '当前' },
        ],
        businessModel:
            '**垂直整合的太空经济综合体**三大支柱：①**发射服务**（Falcon 9 / Heavy · Starship 研发中）——全球市占 >80% · 可回收 10+ 次摊薄成本 · 政府 (NASA/DoD) + 商业双轮；②**Starlink 订阅**（消费 $120/月 · Business $500+/月 · Maritime $34k/年 · Aviation $300k/年）——2025 $10B → 2026E $18.7B · 10M+ 用户；③**研发平台**（Starship 下一代 · Dragon 载人 · Starshield 军用 · xAI 合并后 AI + 边缘计算）。核心战略：**用发射收入补贴 Starlink 扩张 → Starlink 订阅反哺 Starship → Mars 殖民的长尾故事**。',
        revenueMix: [
            { name: 'Starlink 订阅', pct: 67, note: '2025 $10B · 消费 + 企业 + 海事 + 航空' },
            { name: '政府发射 (NASA + DoD)', pct: 20, note: 'NSSL + CRS + Starshield · 稳定现金牛' },
            { name: '商业发射', pct: 10, note: 'Iridium / OneWeb / 卫星公司' },
            { name: 'Dragon 载人 / 其他', pct: 3, note: 'ISS 载人 + 私营旅游' },
        ],
    },

    team: [
        {
            name: 'Elon Musk',
            role: 'CEO · 首席工程师 · 创始人',
            background:
                '1971 年生于南非。Queen\'s University + Penn 经济/物理双学位。Zip2 → PayPal → Tesla + SpaceX + xAI + Neuralink + The Boring Company。**史上唯一同时掌舵 3 家 $100B+ 公司的企业家**。2022-06 收购 Twitter (改名 X) · 2024 起深度介入美国政治（Trump 总统政府顾问）。个人持股 SpaceX ~42% + 高投票权。',
            since: '2002',
            rating: 5,
        },
        {
            name: 'Gwynne Shotwell',
            role: 'President · COO',
            background:
                '西北大学机械工程本科 + 硕士。2002 年加入 SpaceX (第 7 号员工)，从销售 VP 做到 President + COO。**真正的日常运营执掌者** · 与 NASA / DoD 所有大合同的直接对接人。低调但能力极强，被誉为"让 Musk 的疯狂可执行"的人。',
            since: '2002',
            rating: 5,
        },
        {
            name: 'Bret Johnsen',
            role: 'CFO',
            background:
                '前 Broadcom CFO · 2015 年加入 SpaceX。主导多轮 tender offer 融资（2024-2025 年估值从 $200B 推到 $800B）。IPO 筹备核心执行者。',
            since: '2015',
            rating: 4,
        },
        {
            name: 'Jon Edwards',
            role: 'Starship 项目负责人',
            background:
                '前航天工程师，2005 年加入 SpaceX 。Starship / Super Heavy 研发的日常总执行官。负责 Starbase 德州总部的研发 + 试飞节奏。',
            rating: 4,
        },
        {
            name: 'Mark Juncosa',
            role: 'VP of Vehicle Engineering · Starlink',
            background:
                '2006 年加入。Falcon 9 / Dragon / Starlink 硬件设计负责人。Musk 的"第二大脑"之一，决定 Starlink 卫星迭代速度。',
            rating: 5,
        },
    ],

    shareholders: [
        { name: 'Elon Musk (+ 信托)', pct: '~42%', type: '创始人', note: '双层股权 · 实际投票权 >70%' },
        { name: 'Founders Fund (Peter Thiel)', pct: '~5-7%', type: '早期 VC', note: '2008 起持有' },
        { name: 'Fidelity Contra Fund', pct: '~4-5%', type: '公募基金', note: '多轮 tender 购入' },
        { name: 'Google / Alphabet', pct: '~3%', type: '战略股东', note: '2015 年 $1B 投资' },
        { name: 'a16z + Sequoia + DFJ', pct: '~10-12%', type: 'VC 组合', note: '早期多轮' },
        { name: 'Baillie Gifford', pct: '~3-4%', type: '长期机构', note: 'Tesla 长期持有者类似策略' },
        { name: 'ARK Invest (Cathie Wood)', pct: '~2%', type: '主动管理', note: '通过 SPAC + 二级市场持有' },
        { name: '员工股权 + 其他', pct: '~20-25%', type: '员工 + 早期个人', note: '包括多轮 tender 员工出售' },
    ],

    advantages: [
        {
            title: '垂直整合 + 可重复使用（物理壁垒 ★★★★★）',
            body: 'Falcon 9 一级回收成本 $15-20M vs Atlas V $120M+。Starship 若成熟将再降 10x 到 $2-5M。这是竞争对手（Blue Origin / ULA / Arianespace / 中国航天）10 年内难以复制的物理性壁垒',
            evidence: '2025 年发射 130+ 次 · 全球发射市占 >80%',
        },
        {
            title: 'Starlink 低轨星座先发 + 网络效应（规模 ★★★★★）',
            body: '2025 末在轨 7000+ 颗卫星 · 占全球低轨卫星 60%+。低轨频段 + 轨道资源有天然上限，Starlink 先占 = 永久优势。对手 Kuiper 追赶要 3-5 年',
            evidence: '10M+ 活跃用户 · 2026-02 破 10M 里程碑',
        },
        {
            title: '美国政府深度锁定 (护城河 ★★★★★)',
            body: 'NASA ISS 载人独家承包 · NSSL 国防发射合同 · Starshield 军用网。美国国家安全依赖 SpaceX 到不可替代程度，监管反向保护',
            evidence: 'NASA 2024-2026 合同 · NSSL Phase 3 中标公告',
        },
        {
            title: 'Musk 执行力 + 跨公司协同（治理 ★★★★★）',
            body: 'Tesla 电池 / 电机 / 自动驾驶 + SpaceX 结构 / 推进 + xAI 算力 + X 平台 + Neuralink BCI。这 5 家公司的技术协同（比如 Starlink + xAI 边缘 AI）是其他人无法复制的企业组合',
            evidence: 'Musk 同时 CEO 5 家 $B+ 公司 · 史上唯一',
        },
        {
            title: 'Starship 打开深空与超重载荷市场',
            body: 'Starship 100+ 吨近地轨道 vs Falcon 9 22 吨 · 月球/火星载人 · 超大载荷的新 TAM（天基太阳能、轨道工厂、空间望远镜）。若商业化，将开启"第二次太空经济革命"',
            evidence: 'IFT-10 / 11 试飞进度（2025-2026）',
        },
        {
            title: 'xAI 合并创造 AI + 太空叙事',
            body: '2026-02 合并后 Grok + Colossus 超算可直接赋能 Starlink（AI 客服 / 路由优化 / 边缘推理）。"太空互联网 + AI"故事在 IPO 时会放大估值倍数',
            evidence: '2026-02 合并公告 · 合并估值 $1.25T',
        },
        {
            title: '私募多轮 tender 已形成价格锚',
            body: '2024-07 $400B → 2025-12 $800B → 2026-02 $1T 合并。估值 12 个月翻倍证明机构持续买入意愿，是 IPO 定价 $1.75-2T 的心理支撑',
            evidence: '多轮 tender offer 价格 · 21 家投行愿意承销',
        },
    ],

    disadvantages: [
        {
            title: 'IPO 估值 $2T 隐含极端期待',
            body: '$2T ÷ 2026E $28B 营收 = 71x EV/Sales · 远超 Tesla 巅峰 12x 或 Nvidia 30x。这种估值需要 Starship 商业化 + Starlink 10x + xAI 协同三者全部达标，容错率近零',
            evidence: 'IPO $2T 目标 · 2026 营收预期 $27-30B',
        },
        {
            title: 'Musk 个人风险 + 政治化',
            body: 'Musk 分身 5 家公司 · 深度介入美国政治（2024 Trump 竞选 · 2025+ 白宫顾问）· Twitter (X) 言论多次引发抵制。历史上 Tesla 被 Musk 言论打压 -20% 屡见不鲜',
            evidence: '2024-2025 Tesla 股价多次因 Musk 政治言论波动',
        },
        {
            title: 'xAI 合并关联交易争议',
            body: 'xAI $250B 估值由 Musk "自己定价自己买入"，独立股东无议价权。SEC 可能审查；Tesla 股东诉讼先例（收购 SolarCity）表明法律风险真实',
            evidence: '2026-02 合并公告 · 部分股东公开异议',
        },
        {
            title: 'Starship 技术未完全闭环',
            body: '2024-2025 试飞成功但完整轨道插入 + EDL + 复用链路仍在迭代。若 2027 前商业运营未达预期，估值会被打破（Morningstar bear case）',
            evidence: 'IFT-1 to IFT-11 试飞数据 · 2025 部分试飞未达全部目标',
        },
        {
            title: '竞争：Amazon Kuiper + 主权星座快速追赶',
            body: 'Amazon Kuiper 2024 开始发射 · 目标 2027 年 3200 颗 · Jeff Bezos 投入无上限。中国"千帆"(SSST) + "鸿鹄" 2026-2030 快速部署 · 欧洲 IRIS² 也在推进',
            evidence: 'Kuiper 2024-2026 发射计划 · 中国低轨星座布局',
        },
        {
            title: 'Starlink 主权国家监管 · TAM 打折',
            body: '中国 / 俄罗斯 / 伊朗完全禁用 · 印度 / 巴西 / 欧盟要求本地化数据 + 落地牌照 · 非洲部分国家征收高额特许费。全球化 TAM 实际可及可能只有 60-70%',
            evidence: '印度 / 南非 / 巴西 2024-2026 牌照审查案例',
        },
        {
            title: '私募流动性 + 散户可及性低',
            body: 'IPO 前散户几乎无法直接持有（需 $1M+ 资产门槛的 ARK Venture Fund / Destiny Tech100 等间接通道）。IPO 后估值已体现大量预期，早期 alpha 主要被 PE / VC 吃掉',
            evidence: '现有 PE 渠道如 Hiive / EquityZen · ARK Venture / DXYZ 等 SPV',
        },
    ],

    shortTermCatalysts: [
        {
            when: '2026 Q2-Q3',
            event: 'IPO 路演 + 定价 · 预计 $1.75-2T',
            impact: 'mixed',
            probability: '~80% IPO 发生',
            magnitude: '±30-40%',
        },
        {
            when: '2026 Q3-Q4',
            event: 'Starship 完成首次商业载荷发射',
            impact: 'positive',
            probability: '~65%',
            magnitude: '+15-25%',
        },
        {
            when: '2026 Q4',
            event: 'Starlink 用户突破 15M',
            impact: 'positive',
            probability: '~70%',
            magnitude: '+5-10%',
        },
        {
            when: '2027',
            event: 'Starship 载人月球任务（NASA Artemis III）',
            impact: 'positive',
            probability: '~50%',
            magnitude: '+20-30%',
        },
        {
            when: '2027-2028',
            event: 'Kuiper 全球覆盖开始 · 竞争加剧',
            impact: 'negative',
            probability: '~75%',
            magnitude: '-10-15%',
        },
        {
            when: '任何时点',
            event: 'Musk 政治言论或健康事件引发股价震荡',
            impact: 'negative',
            probability: '~40% / 年',
            magnitude: '-10-25% 回调',
        },
        {
            when: '任何时点',
            event: 'Starship 重大事故 / Starlink 大规模掉线',
            impact: 'negative',
            probability: '~15% / 2 年',
            magnitude: '-20-35%',
        },
        {
            when: '任何时点',
            event: 'xAI 关联交易被 SEC 审查',
            impact: 'negative',
            probability: '~20%',
            magnitude: '-10-15%',
        },
    ],

    longTermDrivers: [
        {
            name: 'Starlink 全球宽带市占扩张',
            horizon: '2026-2032',
            body: '全球消费宽带 TAM $500B · 海事 / 航空 / 企业 / 政府各约 $50-100B。Starlink 若 2030 年达 30M 用户 × 平均 $150/月 = $54B · 仅消费端',
            enabling: '卫星迭代（V2 mini / V3）+ 激光星间链路 + 地面网关扩张',
        },
        {
            name: 'Starship 打开超重载荷 + 星际市场',
            horizon: '2027-2035',
            body: '单发 100+ 吨 + 复用摊薄 = 发射成本降 10-100x。新市场：空间太阳能、轨道工厂、月球基地、Mars 殖民。每个 TAM $100B-1T 级别',
            enabling: 'Starship 完整回收 + 加注技术 + 月球星门载人',
        },
        {
            name: 'Starshield 军用 + 国防 AI',
            horizon: '2026-2030',
            body: 'Starshield 是 Starlink 的军用版 · 定制化加密 + 低轨侦察。DoD 2025 已启动相关合同。xAI 合并后可叠加"卫星 AI"战力',
            enabling: 'DoD 预算倾斜 + 美国对中俄太空威慑升级',
        },
        {
            name: '移动网络直连卫星 (Direct to Cell)',
            horizon: '2026-2030',
            body: 'Starlink 与 T-Mobile / Rogers / Optus 等 10+ 运营商合作 · 2026 开始提供直连手机的卫星服务。TAM 是全球手机用户 × 偏远地区补贴费 × $5-10/月',
            enabling: '频谱协议 + 监管（FCC 2024 批准部分）+ 运营商合作扩张',
        },
        {
            name: 'IPO 后被动指数资金',
            horizon: '2026-2028',
            body: 'IPO 后自动进入 S&P 500 / Nasdaq-100（市值 $2T 是 TOP 5 级）· 被动 ETF 强制配置。叠加 ARK / Tesla 类主动基金的"Musk 组合"策略，资金面结构性支撑',
            enabling: 'IPO 成功 + 流通股 > 10% + 盈利季度连续',
        },
        {
            name: 'xAI 合并协同 · "太空 + AI" 独特故事',
            horizon: '2026-2033',
            body: 'Colossus 超算可与 Starlink 边缘节点结合 · Grok 模型可为企业用户提供"低延迟全球 AI"。这是 AWS / Azure 都无法复制的特殊组合',
            enabling: 'xAI 合并完成 + Starship 用于 Colossus 扩建 + 企业客户接入',
        },
    ],

    riskMatrix: [
        {
            category: '技术 / 工程风险',
            level: 'high',
            summary: 'Starship 是估值最大变量',
            items: [
                {
                    name: 'Starship 商业化延期',
                    body: '若 2027 前未达到商业运营，估值模型（含 Mars / 月球基地故事）会被打破 · 估值回归"Falcon 9 + Starlink" $500-800B',
                    mitigation: '现有业务已有 $1T+ 估值支撑 · Starship 延期可接受 1-2 年',
                },
                {
                    name: '重大发射事故',
                    body: 'Falcon 9 载人或 Starship 爆炸导致死亡事故将引发监管暂停 · 类似 2003 哥伦比亚号后 NASA 载人中断 3 年',
                    mitigation: 'Dragon 设计冗余度极高 · 历史零死亡记录',
                },
                {
                    name: '卫星寿命 / 星链碰撞',
                    body: '7000+ 颗低轨卫星的轨道拥挤 · Kessler Syndrome 风险。若发生连锁碰撞，整个星座可能报废',
                    mitigation: '主动规避 + 卫星快速脱轨设计 (5 年寿命)',
                },
            ],
        },
        {
            category: '竞争风险',
            level: 'high',
            summary: 'Amazon Kuiper + 主权星座加速追赶',
            items: [
                {
                    name: 'Amazon Kuiper 抢占',
                    body: 'Bezos 无上限投入 · Kuiper 2027 全球覆盖 · Amazon 零售 / AWS 生态打包卖 · 企业端威胁大',
                    mitigation: '先发优势 · 卫星迭代快 · 价格可降',
                },
                {
                    name: '主权国家星座',
                    body: '中国"千帆"目标 2030 年 1.5 万颗 · 欧洲 IRIS² 2027 年运营 · 印度 BhartNet 推进',
                    mitigation: 'Starlink 全球品牌 + 先发 · 非敌对市场优势',
                },
                {
                    name: '移动运营商融合',
                    body: 'T-Mobile / Rogers 是合作方也是潜在对手 · 运营商可能自建 / 投资对手',
                    mitigation: '技术先发 · FCC 频谱已占',
                },
            ],
        },
        {
            category: '监管 / 政策风险',
            level: 'critical',
            summary: 'Musk 政治化 + 主权国家监管',
            items: [
                {
                    name: 'Musk 政治化 / 外交风险',
                    body: 'Musk 与 Trump 政府关系使他成为"政治人物" · 任何政府更替或对华关系恶化 · SpaceX 国际合同可能受影响',
                    mitigation: '业务深度锁定美国政府 · 国内政治反复对业务影响有限',
                },
                {
                    name: 'xAI 关联交易 SEC 审查',
                    body: 'SEC 可能介入 xAI 合并的估值公平性审查 · 最坏情况下要求重新定价或补偿小股东',
                    mitigation: '2025 独立审计 · 多家投行背书',
                },
                {
                    name: '主权国家禁用 / 限制',
                    body: '俄 / 中 / 伊完全禁用 · 印度 / 巴西 / 欧盟要求数据本地化 · 非洲部分国家高税',
                    mitigation: '美国 + 欧洲 + 日韩主市场已开放 · 非敌对市场增长充足',
                },
            ],
        },
        {
            category: '财务 / 估值风险',
            level: 'high',
            summary: 'IPO 估值 $2T 隐含风险',
            items: [
                {
                    name: 'IPO 定价 $2T 后破发',
                    body: '若 IPO 后 6 个月内跌 20-30%（类似 Uber 2019 / Coinbase 2021），会打击"Musk 溢价"叙事',
                    mitigation: '分步建仓 · 不追高 · IPO 后 6 个月观察',
                },
                {
                    name: 'Starlink ARPU 下行',
                    body: 'Kuiper 低价竞争 · 主权星座补贴 · 价格战压缩利润率',
                    mitigation: '海事 / 航空 / 企业高价段护城河深',
                },
                {
                    name: '高资本支出',
                    body: 'Starship 开发 + Starlink 卫星发射 $5-10B/年 · 若收入增速放缓会压迫利润率',
                    mitigation: 'Falcon 9 + Starlink 订阅提供现金流缓冲',
                },
            ],
        },
        {
            category: '治理 / 人事风险',
            level: 'high',
            summary: 'Musk 个人依赖极高',
            items: [
                {
                    name: 'Musk 分身 / 健康 / 退出',
                    body: 'Musk 同时 CEO 5 家公司 · 任何健康事件 / 精力分散对估值冲击巨大',
                    mitigation: 'Gwynne Shotwell 接班能力已证明 · 2026 已是实际运营主导者',
                },
                {
                    name: 'Musk 政治化争议',
                    body: 'Twitter (X) 言论 + 政治站队 · Tesla 已经受累多次 · IPO 后风险放大',
                    mitigation: '业务独立性强 · 散户可忍受',
                },
                {
                    name: 'IPO 后员工持股稀释',
                    body: 'IPO 会让大量员工期权兑现 · 可能引发人才流失',
                    mitigation: '新一轮 RSU 激励 · 企业文化稳定',
                },
            ],
        },
        {
            category: '宏观 / 周期风险',
            level: 'medium',
            summary: 'AI + 太空双高估值板块',
            items: [
                {
                    name: '成长股估值周期回调',
                    body: '2026-2027 若 AI 板块回调 · SpaceX 作为"太空 + AI"双主题股可能跟跌',
                    mitigation: '现金流业务（Falcon 9 + Starlink）提供下行保护',
                },
                {
                    name: '美元 / 利率变动',
                    body: '高利率环境下长久期成长股承压',
                    mitigation: '长期合同 + 订阅收入的稳定性',
                },
            ],
        },
        {
            category: 'ESG 风险',
            level: 'low',
            summary: '卫星光污染 + 太空碎片',
            items: [
                {
                    name: '卫星光污染争议',
                    body: '天文学界多次抗议 Starlink 影响深空观测 · 可能引发国际条约限制',
                    mitigation: '第二代卫星低反射涂层 + 部分轨道协调',
                },
                {
                    name: '太空碎片责任',
                    body: '7000+ 颗卫星增加碰撞概率 · 如发生跨国碰撞事件赔偿压力大',
                    mitigation: '主动规避系统 + 5 年脱轨设计',
                },
            ],
        },
    ],

    profitability: {
        narrative:
            'SpaceX 是**"双引擎协同"典型 biz model**：发射业务作为现金牛 + Starlink 订阅作为增长引擎。Sacra 估算 2025 公司整体 adj EBITDA $3-4B（~20-25% margin）· 2026E 随 Starlink 规模效应可达 $7-9B。**关键拐点**：Starship 资本投入 2026-2028 将压抑利润率（$5-8B CapEx/年），2028+ 若商业化成功会释放大量自由现金流。',

        incomeStatement: [
            {
                year: '2022',
                revenue: '$4.6B',
                revenueNum: 4600,
                grossMargin: 'N/A',
                opIncome: 'N/A',
                ebitda: '~-$0.5B',
                ebitdaMargin: '~-11%',
                netIncome: '~-$0.8B',
                eps: 'N/A (私有)',
                status: 'estimate',
            },
            {
                year: '2023',
                revenue: '$8.7B',
                revenueNum: 8700,
                grossMargin: 'N/A',
                opIncome: 'N/A',
                ebitda: '~-$0.2B',
                ebitdaMargin: '~-2%',
                netIncome: '~-$0.6B',
                eps: 'N/A',
                status: 'estimate',
            },
            {
                year: '2024',
                revenue: '$13.1B',
                revenueNum: 13100,
                grossMargin: 'N/A',
                opIncome: 'N/A',
                ebitda: '+$2.5B',
                ebitdaMargin: '~19%',
                netIncome: '+$1.5B',
                eps: 'N/A',
                status: 'estimate',
            },
            {
                year: '2025',
                revenue: '$15.5B',
                revenueNum: 15500,
                grossMargin: 'N/A',
                opIncome: 'N/A',
                ebitda: '~$3.5B',
                ebitdaMargin: '~23%',
                netIncome: '~$2.5B',
                eps: 'N/A',
                status: 'estimate',
            },
            {
                year: '2026E',
                revenue: '$27-30B',
                revenueNum: 28000,
                grossMargin: 'N/A',
                opIncome: 'N/A',
                ebitda: '+$7-9B',
                ebitdaMargin: '~28%',
                netIncome: '+$5-7B',
                eps: 'N/A',
                status: 'guidance',
            },
            {
                year: '2027E',
                revenue: '$40-50B',
                revenueNum: 45000,
                grossMargin: 'N/A',
                opIncome: 'N/A',
                ebitda: '+$12-16B',
                ebitdaMargin: '~32%',
                netIncome: '+$9-12B',
                eps: 'N/A',
                status: 'estimate',
            },
            {
                year: '2028E',
                revenue: '$60-75B',
                revenueNum: 67500,
                grossMargin: 'N/A',
                opIncome: 'N/A',
                ebitda: '+$20-26B',
                ebitdaMargin: '~34%',
                netIncome: '+$15-20B',
                eps: 'N/A',
                status: 'estimate',
            },
        ],

        marginEvolution: [
            { year: '2022', gross: null, ebitda: -11, operating: null, net: -17, status: 'estimate' },
            { year: '2023', gross: null, ebitda: -2, operating: null, net: -7, status: 'estimate' },
            { year: '2024', gross: null, ebitda: 19, operating: null, net: 11, status: 'estimate' },
            { year: '2025', gross: null, ebitda: 23, operating: null, net: 16, status: 'estimate' },
            { year: '2026E', gross: null, ebitda: 28, operating: null, net: 21, status: 'guidance' },
            { year: '2027E', gross: null, ebitda: 32, operating: null, net: 24, status: 'estimate' },
            { year: '2028E', gross: null, ebitda: 34, operating: null, net: 26, status: 'estimate' },
        ],

        milestones: [
            { year: '2020', milestone: 'Crew Dragon 首次载人', hit: true },
            { year: '2024', milestone: '全年营收破 $13B · EBITDA 转正', hit: true },
            { year: '2025', milestone: 'Starlink 用户破 9M · 营收 $15.5B', hit: true },
            { year: '2026-04', milestone: 'IPO Confidential Filing', hit: true },
            { year: '2026-Q3', milestone: 'IPO 公开发行 · 目标 $1.75-2T', hit: false },
            { year: '2027', milestone: 'Starship 首次商业运营', hit: false },
            { year: '2028', milestone: 'Starlink 用户破 30M · 营收 $60B+', hit: false },
            { year: '2030+', milestone: 'Mars 载人 / 永久月球基地', hit: false },
        ],

        unitEconomics: [
            { metric: '2025 营收', value: '$15.5B (+18% YoY)', source: 'Musk 推文 + Sacra 验证' },
            { metric: 'Starlink 用户 (2026-02)', value: '10M+', source: '公司公告' },
            { metric: 'Starlink 综合 ARPU', value: '~$100-120/月', source: 'Sacra 报告' },
            { metric: 'Falcon 9 发射成本', value: '~$15-20M/次', source: '行业分析' },
            { metric: 'Falcon 9 售价 (商业)', value: '~$67M/次', source: '标牌价' },
            { metric: 'Starship 开发支出 (累计)', value: '~$10B+', source: 'Musk 多次披露' },
            { metric: '在轨卫星数 (2025 末)', value: '~7000 颗', source: 'Sentinel Mission' },
        ],

        fcfPath:
            '2025 估算 OCF $2-3B · FCF -$2 到 -$3B（大量 Starship CapEx）。2026-2028 因 Starlink 订阅规模化 OCF 可能达 $8-12B，但 Starship + 卫星发射 CapEx $5-8B/年仍让 FCF 徘徊在正负之间。**2028+ 若 Starship 商业化**：预计 FCF 转正到 $5-10B/年，进入自持续增长阶段。',

        keyRisks: [
            'Starship 2027 前未商业化 · CapEx 压力持续 · FCF 延迟转正',
            'Starlink ARPU 下行（Kuiper 竞争）· 毛利率可能从 70% 压缩到 55%',
            'IPO 后公开披露压力 · 利润率透明化可能低于市场预期',
            'xAI 合并会计处理复杂 · 商誉减值风险',
        ],
    },

    competitiveLandscape: {
        summary:
            '太空经济分三层：①**发射服务**（SpaceX 垄断 + 中俄欧日追赶 + Rocket Lab 小型化）；②**卫星互联网**（SpaceX Starlink 先发 + Amazon Kuiper + 主权星座 + OneWeb）；③**深空 / 载人**（SpaceX + Blue Origin + NASA + 中俄载人）。SpaceX 的核心位置是"**低轨基础设施唯一玩家**"——竞争对手都需要 5-10 年追赶，且多数被资本限制（Blue Origin / ULA 融资能力远弱于 Musk）。',

        competitors: [
            {
                name: 'SpaceX (自身)',
                type: 'hyperscaler',
                ticker: 'PRIVATE:SPX',
                revenue2026E: '$27-30B',
                aiRevenue: '$18.7B (Starlink)',
                gpuFleet: '7000+ 卫星 · 130+ 发射/年',
                backlog: 'Starship + Mars + xAI',
                ebitdaMargin: '~28%',
                marketCap: '~$800B (pre-IPO) / $2T (post-IPO)',
                nvidiaLevel: 5,
                threat: 'low',
                strength: '垂直整合 · 可重复使用 · 网络效应 · Musk 执行 · 美国政府锁定',
                weakness: 'IPO 估值天花板 · Musk 分身 · 主权监管',
            },
            {
                name: 'Amazon Kuiper',
                type: 'hyperscaler',
                ticker: 'AMZN (子业务)',
                revenue2026E: '~$0.5-1B',
                aiRevenue: '~$0.5B',
                gpuFleet: '~100 颗（2026 末目标）',
                backlog: '3200 颗总规划',
                ebitdaMargin: '亏损',
                marketCap: '~$2.2T (母公司)',
                nvidiaLevel: 3,
                threat: 'high',
                strength: 'Bezos 无上限资金 · AWS 捆绑 · 企业生态',
                weakness: '晚 Starlink 4 年 · 发射依赖 ULA / ArianeGroup',
            },
            {
                name: 'Rocket Lab',
                type: 'specialist',
                ticker: 'NASDAQ:RKLB',
                revenue2026E: '~$700M',
                aiRevenue: '~$300M (发射)',
                gpuFleet: '~15 Electron 发射/年',
                backlog: 'Neutron 中型火箭',
                ebitdaMargin: '~5%',
                marketCap: '~$15B',
                nvidiaLevel: 3,
                threat: 'low',
                strength: '小型卫星发射龙头 · Neutron 2026 首飞',
                weakness: '规模小 30x · 无卫星互联网业务',
            },
            {
                name: 'Blue Origin',
                type: 'specialist',
                ticker: '未上市',
                revenue2026E: '~$0.5-1B',
                aiRevenue: '~$0.5B',
                gpuFleet: 'New Shepard + New Glenn 2 次/年',
                backlog: 'Orbital Reef 空间站 · 月球登陆器',
                ebitdaMargin: '~-40%',
                marketCap: '未披露',
                nvidiaLevel: 2,
                threat: 'medium',
                strength: 'Bezos 资金无限 · 月球计划',
                weakness: '20 年成立仍未规模化 · New Glenn 2024 才首飞',
            },
            {
                name: 'ULA (United Launch Alliance)',
                type: 'specialist',
                ticker: '未上市 (Boeing + LMT)',
                revenue2026E: '~$1.5B',
                aiRevenue: '~$1.5B (发射)',
                gpuFleet: 'Vulcan · Atlas V · Delta IV',
                backlog: 'NSSL Phase 3 (部分)',
                ebitdaMargin: '~10%',
                marketCap: '~$3B (估)',
                nvidiaLevel: 3,
                threat: 'low',
                strength: '美国政府传统承包商',
                weakness: '成本 5-10x SpaceX · 已被 SpaceX 蚕食',
            },
            {
                name: 'ArianeGroup (Airbus + Safran)',
                type: 'specialist',
                ticker: 'EPA:AIR + EPA:SAF',
                revenue2026E: '~$3.5B (发射部分)',
                aiRevenue: '~$3.5B',
                gpuFleet: 'Ariane 6 · Vega',
                backlog: '欧洲主权发射',
                ebitdaMargin: '~5%',
                marketCap: '~$60B (母公司)',
                nvidiaLevel: 2,
                threat: 'low',
                strength: '欧洲主权保护 · Kuiper 合同',
                weakness: 'Ariane 6 成本仍高 · 2024 才首飞',
            },
            {
                name: '中国航天 (CASC + CASIC)',
                type: 'hyperscaler',
                ticker: '未上市 (国企)',
                revenue2026E: '~$15-20B (估)',
                aiRevenue: '~$15B',
                gpuFleet: '60+ 发射/年 · 长征系列',
                backlog: '千帆 · 鸿鹄 · 空间站 · 载人登月',
                ebitdaMargin: 'N/A (国企)',
                marketCap: 'N/A',
                nvidiaLevel: 3,
                threat: 'high',
                strength: '主权投入无限 · 全产业链自主',
                weakness: '国际市场受限 · 商业化慢',
            },
            {
                name: 'OneWeb (Eutelsat 旗下)',
                type: 'specialist',
                ticker: 'EPA:ETL',
                revenue2026E: '~$1.5B',
                aiRevenue: '~$1.5B',
                gpuFleet: '~630 颗卫星',
                backlog: '企业 + 主权客户为主',
                ebitdaMargin: '~0%',
                marketCap: '~$4B',
                nvidiaLevel: 2,
                threat: 'low',
                strength: '欧洲支持 · B2B 优先',
                weakness: '规模 10x 小于 Starlink · 消费端基本无',
            },
        ],

        positioning: [
            { dimension: '2025 营收', nebius: '$15.5B', industryAvg: '$1-3B', leader: '中国航天 $20B', nebiusStrong: true },
            { dimension: '发射市占', nebius: '>80%', industryAvg: '<10%', leader: 'SpaceX', nebiusStrong: true },
            { dimension: '可重复使用能力', nebius: 'Falcon 9 + Starship', industryAvg: '少数', leader: 'SpaceX (独占)', nebiusStrong: true },
            { dimension: '低轨卫星数', nebius: '~7000', industryAvg: '~500', leader: 'SpaceX', nebiusStrong: true },
            { dimension: '卫星互联网用户', nebius: '10M+', industryAvg: '0-0.5M', leader: 'SpaceX', nebiusStrong: true },
            { dimension: '载人能力', nebius: 'Dragon (唯一美国)', industryAvg: '无', leader: 'SpaceX', nebiusStrong: true },
            { dimension: '政府合同', nebius: 'NASA + DoD 深度', industryAvg: '部分', leader: 'SpaceX', nebiusStrong: true },
            { dimension: '估值', nebius: '~$800B-$2T', industryAvg: '$3-15B', leader: 'SpaceX', nebiusStrong: true },
            { dimension: '上市流动性', nebius: '未上市', industryAvg: '上市', leader: 'RKLB', nebiusStrong: false },
            { dimension: '管理层焦点度', nebius: 'Musk 5 公司分心', industryAvg: '专注', leader: 'RKLB / Blue Origin', nebiusStrong: false },
        ],

        marketShare2026: [
            { name: 'SpaceX (发射)', pct: 80 },
            { name: '中国航天', pct: 10 },
            { name: 'ArianeGroup', pct: 4 },
            { name: 'ULA', pct: 3 },
            { name: 'Rocket Lab', pct: 2 },
            { name: 'Blue Origin', pct: 1 },
            { name: '其他 (印度 / 俄罗斯 / 日本)', pct: 1 },
        ],

        winLoss: [
            {
                scenario: 'NASA 商业载人',
                winners: 'SpaceX (独家)',
                losers: 'Boeing Starliner',
                reasoning: 'Starliner 2024 首次载人后返程异常 · 2025 暂停。SpaceX Dragon 仍是唯一美国载人通道',
            },
            {
                scenario: '美国 DoD NSSL Phase 3',
                winners: 'SpaceX (主份额) · ULA (备份)',
                losers: 'Blue Origin · ArianeGroup',
                reasoning: 'SpaceX 成本优势 + 可靠性 · Pentagon 需 backup 给 ULA',
            },
            {
                scenario: '全球消费者卫星互联网',
                winners: 'SpaceX Starlink',
                losers: 'OneWeb · Kuiper (暂)',
                reasoning: 'Starlink 先发 4 年 · 7000 颗 vs Kuiper 100 颗 · 2026 中后期 Kuiper 追赶',
            },
            {
                scenario: '企业 / 海事 / 航空卫星',
                winners: 'SpaceX Starlink',
                losers: 'Iridium · Viasat · SES',
                reasoning: 'Starlink 带宽 × 价格 10x 优于 geo 卫星 · 快速替代传统玩家',
            },
            {
                scenario: '小型卫星发射 (rideshare)',
                winners: 'SpaceX Falcon 9 · Rocket Lab',
                losers: '传统玩家',
                reasoning: 'Falcon 9 一箭百星 · Rocket Lab 专注 100kg 以下 · 两家瓜分市场',
            },
            {
                scenario: '月球 / 深空任务',
                winners: 'SpaceX (Artemis) + Blue Origin (备用)',
                losers: 'ArianeGroup · 中俄 (非 NASA 体系)',
                reasoning: 'NASA 选定 Starship + Blue Moon 为登月载人方案',
            },
            {
                scenario: '中国市场',
                winners: '中国航天 (垄断)',
                losers: 'SpaceX (被禁)',
                reasoning: '政策性完全排除 · 千帆 / 鸿鹄 / 国网 主导',
            },
            {
                scenario: '欧洲主权 / 印度主权',
                winners: 'ArianeGroup / ISRO',
                losers: 'SpaceX (政策受限)',
                reasoning: '欧盟 IRIS² · 印度 BhartNet 强调主权自主',
            },
        ],

        structuralTrend:
            '未来 5 年行业结构性变化：①**SpaceX 发射垄断被主权资本挑战** —— 中国千帆 / 欧洲 IRIS² / 印度发射力 2027-2030 大量投入，Starlink 海外 TAM 打 30-50% 折扣；②**Kuiper 成为 Starlink 唯一真实对手** —— Bezos 资本深度使 Kuiper 成唯一商业挑战者，消费端可能进入双寡头；③**Starship 是 10 倍路径的关键** —— 商业化成功 = 打开月球 / Mars / 轨道工业的新 TAM；失败 = 估值压缩到 $500-800B；④**IPO 后资本结构变化** —— Musk 持股从 42% 降至 ~35% · 机构话语权上升 · 治理可能更制衡。SpaceX 必须在 2028 年前完成：①Starship 商业化；②Starlink 突破 30M 用户；③xAI 协同落地，三者一齐达成才能匹配 $2T 估值。',

        tam: {
            narrative:
                '太空经济 TAM **2025 $500B → 2035 $1.8T**（Morgan Stanley 预测）。SpaceX 当前 $15.5B 营收 ≈ 3% 市占。**10x 回报路径**：①发射 TAM 2030 $50B · SpaceX 70% → $35B · ②Starlink TAM $300B (全球宽带) · SpaceX 20% → $60B · ③Starship 新 TAM（月球 / Mars / 轨道工业）$100B+ · SpaceX 80% → $80B · 综合 2030 营收 $175B+ = 估值 $5-7T（给到 30-40x）= 当前 6-9x。',
            points: [
                { year: '2022', totalTam: 350, neocloudTam: 50, selfRevenue: 4.6, status: 'actual' },
                { year: '2024', totalTam: 450, neocloudTam: 70, selfRevenue: 13.1, status: 'actual' },
                { year: '2025', totalTam: 500, neocloudTam: 90, selfRevenue: 15.5, status: 'actual' },
                { year: '2026', totalTam: 580, neocloudTam: 120, selfRevenue: 28, status: 'estimate' },
                { year: '2028', totalTam: 800, neocloudTam: 200, selfRevenue: 68, status: 'estimate' },
                { year: '2030', totalTam: 1100, neocloudTam: 300, selfRevenue: 100, status: 'estimate' },
                { year: '2035', totalTam: 1800, neocloudTam: 600, selfRevenue: 250, status: 'estimate' },
            ],
            keyNumbers: [
                { label: '全球太空经济 (2025)', value: '$500B', sub: 'Morgan Stanley', cls: 'cyan' },
                { label: '2035E 太空经济', value: '$1.8T', sub: '3.6x 增长', cls: 'purple' },
                { label: 'Starlink 2026E 营收', value: '$18.7B', sub: '+80% YoY', cls: 'green' },
                { label: 'SpaceX 2026E 营收', value: '$28B', sub: '占行业 ~5%', cls: 'cyan' },
                { label: '2030E 发射 TAM', value: '$50B', sub: 'SpaceX 70%+ 市占', cls: 'purple' },
                { label: '2030E 卫星互联网 TAM', value: '$300B', sub: '双寡头', cls: 'red' },
                { label: '10x 所需营收 (2035)', value: '$250B+', sub: '当前 16x 对应 $4-5T', cls: 'red' },
                { label: '行业 CAGR', value: '~13%', sub: '2025-2035', cls: 'purple' },
            ],
            sourcesNote:
                '数据来源：Morgan Stanley 太空经济报告、Sacra SpaceX 分析、Quilty Space Starlink 预测、SpaceX 公开披露。2030-2035 为"Starship 成功 + Starlink 扩张"基准假设。',
        },

        radar: {
            peer1Name: 'Rocket Lab',
            peer2Name: 'Blue Origin',
            dimensions: [
                { dim: '营收规模', self: 10, peer1: 3, peer2: 2 },
                { dim: '可重复使用能力', self: 10, peer1: 5, peer2: 4 },
                { dim: '载人能力', self: 10, peer1: 0, peer2: 3 },
                { dim: '卫星互联网', self: 10, peer1: 0, peer2: 2 },
                { dim: '政府深度锁定', self: 10, peer1: 4, peer2: 3 },
                { dim: '发射成本优势', self: 9, peer1: 6, peer2: 4 },
                { dim: '研发创新速度', self: 10, peer1: 7, peer2: 3 },
                { dim: '上市流动性', self: 2, peer1: 10, peer2: 0 },
            ],
            note: '1-10 分主观评分。SpaceX 在 7 个维度近乎满分，唯一短板是未上市（流动性）。Blue Origin 在 20 年里几乎所有维度都被 SpaceX 碾压，Bezos 资金也没能扳回。Rocket Lab 保持小型化专注的差异化路线。',
        },
    },

    valuation: {
        metrics: [
            { metric: 'EV/Sales (2025)', value: '~52x', benchmark: 'Tesla 巅峰 12x · NVDA 30x', read: 'rich' },
            { metric: 'EV/Sales (2026E)', value: '~29x', benchmark: '高成长科技 10-20x', read: 'rich' },
            { metric: 'EV/Sales (2028E)', value: '~12x', benchmark: '成熟科技 6-10x', read: 'fair' },
            { metric: 'EV/EBITDA (2026E)', value: '~100x', benchmark: '高增长 30-50x', read: 'rich' },
            { metric: 'EV/EBITDA (2028E)', value: '~30x', benchmark: '成熟科技 15-25x', read: 'fair' },
            { metric: '2025-12 vs 2024-07 估值', value: '2x (6 个月 +100%)', benchmark: 'Pre-IPO 热度', read: 'rich' },
        ],
        sotp: [
            { item: 'Starlink (订阅业务)', valuation: '$500-700B', method: '10M 用户 × 预计峰值 50M × $120/月 × 12 = $72B 峰值 × 12x', note: '核心主体' },
            { item: '发射业务 (Falcon 9 / Heavy)', valuation: '$80-120B', method: '发射 130 次 × $67M 均价 × 20% 净利 × 30x', note: '现金牛' },
            { item: 'Starship 项目期权', valuation: '$100-300B', method: 'rNPV · 商业化概率 60% × 峰值 $50B 营收 × 10x', note: '10 年关键' },
            { item: 'xAI (合并后)', valuation: '$250-400B', method: '合并时 $250B + 未来增长溢价', note: 'AI 协同' },
            { item: 'Dragon + 载人 + Starshield', valuation: '$30-50B', method: '政府合同现金流折现', note: '稳定' },
            { item: '净现金', valuation: '$15-20B', method: 'IPO 前 tender + 合同预付', note: '' },
        ],
        sotpTotal: '$1.0-1.6T',
        sotpPerShare: '当前 ~$421/股 (2025-12 tender) · IPO 目标区间 $800/股-$1000/股',
    },

    recommendation: {
        rating: '关注 · IPO 后择机建仓',
        ratingCls: 'neutral',
        timeHorizon: '5-10 年（Starship + Starlink 终局）',
        positionSize: '3-5% 组合权重 · IPO 后分批建仓',
        addingZone: 'IPO 估值 ≤$1.2T 直接建仓 · $1.2-1.5T 分批 · >$1.7T 观望',
        stopLoss: 'Starship 2027 前未商业化 / Musk 离任 / Kuiper 抢占超 30% 市占 → 重新评估',
        thesis:
            '当前二级估值 $800B 相对 10Y 加权期望 $3.7T 有 4.6x 上行空间（CAGR 16.6%），但 IPO 后短期估值已定价到 $2T ≈ 期望中值的 55%。**未上市期无法直接买入**（需 ARK Venture / Destiny 等 SPV 间接）。**最佳策略**：关注 IPO 定价 → $1.2T 以下 = 合理建仓；$2T 以上 = 等待首年回调到 SOTP 下沿 ($1-1.5T) 再进。SpaceX 是"**不可复制的太空 + 通信基础设施**"敞口，长期 5-10 年视角下的核心持仓，但要规避 IPO 热钱冲顶。',
        keyAssumptions: [
            'IPO 2026 Q3-Q4 成功上市（不推迟至 2027+）',
            'Starlink 2030 用户 30M+，ARPU 维持 $100+',
            'Starship 2027-2028 完成首次商业载荷运营',
            'Musk 2030 前仍是 CEO 或主导股东',
            'Kuiper 2030 全球市占 <30%',
        ],
        sizingFormula: {
            method: 'Kelly 公式（保守版，使用 1/2 Kelly）',
            formula: 'f* = (期望回报率 − 无风险利率) / 方差 × 0.5',
            inputs: [
                { label: '10Y 期望回报率', value: '16.6% CAGR' },
                { label: '无风险利率', value: '4.5% (10Y 国债)' },
                { label: '情景标准差 (10Y)', value: '$3T (~80% of E[Mcap])' },
                { label: '完整 Kelly', value: '~8%' },
                { label: '1/2 Kelly (保守)', value: '~4%' },
            ],
            computedSize: '3-5% 组合权重',
            reasoning:
                '10Y 情景标准差占期望值 ~80%，在已覆盖 7 家公司中属中等（低于 Circle 110% / Coinbase 105% · 高于泡泡玛特 85%）。原因：SpaceX 下行有"发射 + Starlink + 政府合同"三重垫底（$500-800B 是底），上行靠 Starship + xAI 两个期权放大。**未上市阶段仓位**：0%（无法直接买）· **IPO 定价 $1.2T 以下**：基础 3% · **若首年回调到 $1T 以下**：加到 5%。',
        },
    },

    keyPersonRisks: [
        {
            name: 'Elon Musk (CEO · 创始人)',
            role: '战略 · 技术方向 · 资本叙事',
            departProb: '中 (~15% / 5 年)',
            departImpact: '极高 —— "Musk 溢价"丢失 · 估值可能立即 -30-40%',
            mitigation: 'Gwynne Shotwell 接班能力已验证 · 2026 实际运营主导者 · 但品牌溢价不可替代',
            criticality: 'critical',
        },
        {
            name: 'Gwynne Shotwell (President · COO)',
            role: '运营 · 政府关系 · 大合同',
            departProb: '低 (~10% / 5 年)',
            departImpact: '高 —— 执行力核心流失',
            mitigation: '23 年任职 · 深度绑定 SpaceX · 接班人从内部培养',
            criticality: 'critical',
        },
        {
            name: 'Mark Juncosa (VP Engineering)',
            role: '硬件架构 · Starship 工程',
            departProb: '低 (~8% / 5 年)',
            departImpact: '中高 —— Starship 研发节奏受影响',
            mitigation: '已培养副手团队 · 技术栈成熟化',
            criticality: 'high',
        },
        {
            name: 'Bret Johnsen (CFO)',
            role: '财务 · IPO 准备',
            departProb: '中 (~15% / 5 年)',
            departImpact: '中 —— IPO 过渡期受影响',
            mitigation: 'IPO 后可考虑换更资本市场经验 CFO',
            criticality: 'medium',
        },
    ],

    cashFlow: {
        narrative:
            'SpaceX 是**"重资本投入 → 订阅现金流"转型中的典型阶段**：2022-2024 FCF 深度为负（Starship + 卫星发射吞钱）· 2025 OCF 转正但 FCF 仍受 CapEx 压制 · 2026-2028 Starlink 规模化 + Starship 完工 → FCF 2028 后大幅转正。**关键观察：2027 Starship CapEx 是否见顶**——如见顶，2028+ FCF 可达 $10-15B/年。',
        rows: [
            { year: '2022', ocf: -500, icf: -2500, fcf: 3500, freeCashFlow: -3000, status: 'actual' },
            { year: '2023', ocf: 500, icf: -3000, fcf: 2500, freeCashFlow: -2500, status: 'actual' },
            { year: '2024', ocf: 2500, icf: -4000, fcf: 2000, freeCashFlow: -1500, status: 'actual' },
            { year: '2025', ocf: 3500, icf: -5000, fcf: 2000, freeCashFlow: -1500, status: 'actual' },
            { year: '2026E', ocf: 8000, icf: -6500, fcf: 5000, freeCashFlow: 1500, status: 'estimate' },
            { year: '2027E', ocf: 14000, icf: -7500, fcf: -500, freeCashFlow: 6500, status: 'estimate' },
            { year: '2028E', ocf: 22000, icf: -8000, fcf: -1000, freeCashFlow: 14000, status: 'estimate' },
        ],
        conversionNote:
            'Cash Conversion = OCF / Net Income。SpaceX 2024-2025 约 1.5-2x（折旧占比大）· 2026+ 随 Starlink 毛利持续爬升趋于 1.2-1.4x。注：私募阶段披露有限，数据为 Sacra / Morgan Stanley 估算。',
        keyRisks: [
            'Starship 成本超支 · 2027-2028 CapEx 可能冲 $10B+ 压 FCF',
            'Starlink 全球扩张投入 · 卫星发射 + 网关基础设施 $2-3B/年',
            'xAI 合并后 AI 超算 CapEx 巨额（Colossus $5B+）· 合并后现金流承压',
            'IPO 后分红压力 · Musk 风格是"不分红"但机构可能施压',
        ],
    },

    historicalValuation: {
        narrative:
            'SpaceX 估值历史呈"指数级上涨"：2020 $46B → 2022 $127B → 2023 $150B → 2024-07 $200B → 2024-12 $350B → 2025-07 $400B → **2025-12 $800B → 2026-02 $1T 合并后 → 2026-04 IPO 目标 $1.75-2T**。当前处于 **estimate 价值区间的 80-95% 分位**（偏贵）· 但 IPO 前溢价是正常现象。',
        history: [
            { period: '2020-Q3', evSales: 40, note: 'Starlink 启动前' },
            { period: '2022-Q2', evSales: 28, note: '$127B · Falcon 稳定' },
            { period: '2023-Q4', evSales: 17, note: '$150B · Starlink 起飞' },
            { period: '2024-Q3', evSales: 22, note: '$200B tender' },
            { period: '2024-Q4', evSales: 35, note: '$350B · Starlink 8M 用户' },
            { period: '2025-Q3', evSales: 32, note: '$400B · 稳定增长' },
            { period: '2025-Q4', evSales: 52, note: '$800B · 二级市场激增' },
            { period: '2026-Q1', evSales: 50, note: '$1T (xAI 合并后)' },
            { period: '2026-Q2 (当前)', evSales: 52, note: 'IPO pending $1.75-2T 目标' },
        ],
        currentPercentile: '90%',
        verdict: 'rich',
    },

    downsideMetrics: {
        narrative:
            '情景标准差 ~$3T（10Y），看似惊人但占期望 80%——**其实是已覆盖 7 家公司中偏低的**（Circle 110% · Nebius 130% vs SpaceX 80%）。主要因 SpaceX 有"**多层现金流垫底**"：Falcon 9 + Starlink 订阅 + 政府合同形成 $500B 底。**5Y 内亏损 30%+ 概率约 18%** · **最大回撤估计 -40-55%**（类比 Tesla 2022 熊市 -65%）。',
        scenarioStdDev: 3000,
        sharpeLike: 0.96,
        probLoss30Pct5Y: 18,
        maxDrawdownEstimate: '-40% 到 -55%（2022 Tesla 先例 -65%，SpaceX 基础设施属性稍好）',
        downsideToUpsideRatio: '下行 1 vs 上行 10（单次下跌 $200-400B，单次上冲 $2-4T）',
    },

    sensitivity: {
        narrative: '哪个变量对 10Y 期望市值最敏感？按单变量 ±1σ 扰动排序 ——',
        variables: [
            { variable: 'Starship 商业化成败 (binary)', downImpact: -1500, upImpact: 3500, description: '成功 = Mars/月球 TAM 打开 · 失败 = 估值回归 Falcon+Starlink' },
            { variable: 'Starlink 2030 用户 30M vs 60M', downImpact: -1200, upImpact: 2500, description: '订阅增长决定核心估值' },
            { variable: 'Kuiper 抢占市占 (10% vs 30%)', downImpact: -800, upImpact: 400, description: '竞争强度' },
            { variable: 'IPO 后 Musk 事件 (健康 / 政治)', downImpact: -1000, upImpact: 200, description: '个人风险' },
            { variable: 'xAI 协同兑现', downImpact: -500, upImpact: 1500, description: 'AI + 太空独特故事' },
            { variable: '主权国家准入 (中 / 印 / 欧)', downImpact: -600, upImpact: 800, description: 'TAM 地理扩张' },
            { variable: '美国政府合同 (NSSL / NASA)', downImpact: -400, upImpact: 200, description: '基本盘' },
        ],
        takeaway:
            '**最敏感三变量：Starship 商业化、Starlink 用户规模、Kuiper 竞争强度**。Starship 是"二元期权"——成则 +$3.5T，败则 -$1.5T。Kuiper 是"缓慢侵蚀"——每 5pp 市占 = -$400B 估值。IPO 后每季度关注前两项即可。',
    },

    bearPlaybook: {
        scenario: '"悲观：Starship 延期 + 竞争加剧"（30% 概率）的完整 ruin 路径',
        steps: [
            {
                when: '2026 Q4 - 2027 Q2',
                event: 'Starship IFT-12 / 13 关键试飞发生重大事故 · 推迟商业化 1-2 年',
                signal: '试飞部分目标未达 · FAA 调查 · Musk 推迟进度推文',
            },
            {
                when: '2027 Q1-Q2',
                event: 'IPO 后首份财报披露利润率低于预期 · 股价 -20%',
                signal: 'IPO 后 6 个月破发 · Q1 2027 财报 EBITDA 不达 guide',
            },
            {
                when: '2027 H2',
                event: 'Amazon Kuiper 全球覆盖 · 企业端抢占 15%+',
                signal: 'Kuiper 宣布企业客户破 10 万 · AWS 捆绑优惠',
            },
            {
                when: '2028',
                event: 'xAI 合并关联交易被 SEC 起诉 · 股价 -15%',
                signal: 'SEC 公告 · Tesla-SolarCity 类似判决先例',
            },
            {
                when: '2028-2029',
                event: 'Starlink ARPU 因 Kuiper 价格战下降 20%',
                signal: 'Starlink 调价公告 · Q4 2028 营收 YoY 首次负增长',
            },
            {
                when: '2030',
                event: '市值稳定在 $800B-1.2T · 无法进入 "$2T+" 梯队',
                signal: '多季度营收增速 <15% · Starship 仍在试飞阶段',
            },
        ],
        exitTrigger:
            '任一步骤在时间表前 1 个季度提前发生 → **减仓 50%**。连续 2 条发生 → **清仓观望**。特别关注：Starship IFT 进展 + Kuiper 部署速度两项"先行指标"。',
    },

    correlation: {
        narrative:
            'SpaceX (IPO 后) 将是**AI + 太空 + Musk 三重 β** 的复合敞口：涨跌约 40% 由美股成长股驱动、30% 由 Musk 情绪 / 事件驱动、30% 由 Starship / Starlink 自身进展驱动。如果组合中已持有 Tesla / NVDA / xAI 相关，边际多元化有限。真正的 hedge 是**防御性 + 实物资产**。',
        rows: [
            { asset: 'Tesla (TSLA)', beta: 1.1, correlation: 0.75, hedgeValue: 'low', note: 'Musk 溢价同向 · 情绪联动最高' },
            { asset: 'NVDA', beta: 0.9, correlation: 0.65, hedgeValue: 'low', note: 'AI 叙事共振 · xAI 合并后更强' },
            { asset: 'QQQ (纳斯达克)', beta: 1.0, correlation: 0.60, hedgeValue: 'medium', note: '大盘成长股 β' },
            { asset: 'Iridium (IRDM) / Viasat (VSAT)', beta: -0.3, correlation: -0.40, hedgeValue: 'medium', note: '传统卫星被 Starlink 替代，反向' },
            { asset: '10Y 国债 (TLT)', beta: -0.4, correlation: -0.45, hedgeValue: 'high', note: '长久期成长股对利率敏感' },
            { asset: '黄金 (GLD)', beta: -0.1, correlation: -0.15, hedgeValue: 'medium', note: '宏观对冲' },
            { asset: 'Bitcoin (BTC)', beta: 0.6, correlation: 0.50, hedgeValue: 'low', note: '风险偏好 + Musk 情绪共振' },
            { asset: '防御股 (PG / KO / VZ)', beta: 0.2, correlation: 0.15, hedgeValue: 'high', note: '防御性敞口' },
        ],
        suggestedHedge:
            '如果 SpaceX (IPO 后) 占组合 3-5%，建议搭配：①**反向**：7-10% TLT（利率敏感对冲）+ 2-3% GLD + 3-5% 防御股（PG/KO）；②**不要同时持有**：SpaceX + Tesla + NVDA 三者加总不超过 15%（三者 PnL 强耦合）；③**对标 "Musk 组合"**：如已持 Tesla 5%，SpaceX 仓位 ≤3%。**最佳组合**：SpaceX 3% + Tesla 3% + NVDA 2% + TLT 8% + PG 3%（分散 Musk 溢价 + 宏观对冲 + 防御底）。',
    },

    capitalAllocation: {
        narrative:
            'SpaceX 是**"再投资驱动"经典资本配置**：2002-2024 几乎所有利润投回 Starship + Starlink · 无股息 · 无回购 · 无外部并购（除 xAI 2026-02 合并 · 关联交易）。**Musk 式资本配置**：极端长期视角 · 不避讳稀释 · 愿意 15-20 年无回报建设基础设施。IPO 后可能被迫启动部分回报（分红或回购），但核心还是再投资。',
        scores: [
            { dimension: 'ROIIC', label: '增量资本回报率', score: 4, detail: 'Starlink 订阅模式下 2025+ ROIIC 预计 25-35% · 但 Starship 前期 ROIIC 极低（20 年投入未产出）', evidence: 'Starlink 单位经济 · Starship CapEx 累计 $10B+' },
            { dimension: 'Buyback', label: '回购节奏', score: 1, detail: 'IPO 前无回购 · 持续融资扩张 · tender offer 反而是员工出售', evidence: '多轮 tender offer 历史' },
            { dimension: 'Dividend', label: '股息政策', score: 1, detail: 'Musk 反对分红 · Tesla 从未分红 · SpaceX 短期不会', evidence: 'Musk 公开言论' },
            { dimension: 'M&A', label: '并购命中率', score: 3, detail: 'xAI 合并 2026-02 是首次重大并购 · 关联交易争议使得命中率评价复杂', evidence: 'xAI 合并公告' },
        ],
        overallGrade: 'B',
        historicalROIIC: '~15-25% (综合估算 · Starlink 主导 · Starship 拖累)',
    },

    gapAnalysis: {
        narrative:
            'SpaceX 未上市无卖方 consensus，但有丰富的 Morgan Stanley / Sacra / Payload 等 research 报告。核心 gap 是"**IPO 定价 $2T vs SOTP 公允 $1.2-1.6T**"——承销银行预期 vs 独立估值。另一 gap 是"Musk 2026 营收 Guidance $15.5B vs 实际 2025 仅达到"。',
        rows: [
            { metric: '2025 营收', guidance: '$15.5B (Musk 推文)', consensus: '$14-16B (研报共识)', selfAssumption: '$15.5B', gap: '基本一致', risk: 'low' },
            { metric: '2026 营收', guidance: '未披露', consensus: '$27-30B (研报)', selfAssumption: '$28B', gap: '中值', risk: 'medium' },
            { metric: 'IPO 估值', guidance: '未官方公布', consensus: '$1.75-2T (承销投行)', selfAssumption: '$1.2-1.6T 公允', gap: '-20-30% 保守', risk: 'high', note: 'IPO 承销有 20-30% 推高偏差' },
            { metric: 'Starship 商业化时间', guidance: '2026-2027 (Musk)', consensus: '2027-2028 (分析师)', selfAssumption: '2027 H2', gap: '稍保守', risk: 'high' },
            { metric: 'Starlink 2030 用户', guidance: 'Musk: 100M+', consensus: '40-60M', selfAssumption: '50M', gap: '大幅保守 vs Musk', risk: 'high', note: 'Musk 历来夸大 2-3x' },
        ],
        takeaway:
            '**最关键 Gap：IPO 估值 $2T vs SOTP 公允 $1.2-1.6T**。承销银行压力使 IPO 定价通常高于公允值 20-30% · 叠加散户 FOMO，首日可能再溢价 30-50%。历史经验：高估值 IPO 首年破发概率 60%+ (Uber · Snowflake · Coinbase 都破过)。**最佳策略**：等 IPO 后 6-12 个月回调到 SOTP 下沿 $1-1.3T 再建仓。',
    },

    benchmarkComparison: {
        narrative:
            'SpaceX 10Y 期望 CAGR 16.6% vs 被动 60/40 组合 7.8%——超额 8.8pp · **显著 justify 3-5% 仓位**。对标 Tesla CAGR 历史 ~20% · NVDA ~30% · QQQ ~12%。SpaceX 比 QQQ 超额 5pp，和 Tesla 接近 · 远不如 NVDA。**但 SpaceX 的独特性在于"太空 + 通信基础设施垄断"，这是其他成长股都无法提供的 α**。',
        alternatives: [
            { name: 'SPY (S&P 500)', ticker: 'SPY', expectedReturn5Y: 9, expectedReturn10Y: 10, note: '美国宽基' },
            { name: 'QQQ (纳斯达克 100)', ticker: 'QQQ', expectedReturn5Y: 10, expectedReturn10Y: 12, note: '科技权重' },
            { name: '60/40', expectedReturn5Y: 7, expectedReturn10Y: 8, note: '经典稳健' },
            { name: '10Y 国债 (TLT)', ticker: 'TLT', expectedReturn5Y: 4, expectedReturn10Y: 4.5, note: '无风险' },
            { name: 'Tesla (TSLA)', ticker: 'TSLA', expectedReturn5Y: 15, expectedReturn10Y: 15, note: 'Musk 另一家公司' },
            { name: 'NVDA', ticker: 'NVDA', expectedReturn5Y: 18, expectedReturn10Y: 15, note: 'AI 叙事对标' },
            { name: 'ARK Space (ARKX)', ticker: 'ARKX', expectedReturn5Y: 8, expectedReturn10Y: 10, note: '太空 ETF 替代' },
        ],
        selfReturn5Y: 16.4,
        selfReturn10Y: 16.6,
        excessReturn5Y: 8.6,
        excessReturn10Y: 8.8,
        justifiesPosition: 'yes',
        takeaway:
            '**超额 8.8pp CAGR 显著 justify 3-5% 仓位**。SpaceX 作为"**不可替代的太空 + 通信基础设施**"，比 QQQ 超额 5pp · 对应 10Y 1.7x 额外回报。但**未上市阶段无法持有**，IPO 后入场时机决定实际收益——$2T 买入 10Y 回报约 +100% (CAGR 7%) · $1.2T 买入 10Y +300% (CAGR 15%)。**入场价决定一切**。',
    },

    dataSources: {
        narrative: '本报告数据锚定 2026-04-21 (IPO pending 前)。SpaceX 未上市，数据主要来自 Sacra equity research、Quilty Space forecast、主流财经媒体、Musk 公开言论。情景概率、10Y 期望、SOTP 估值均为本分析的主观推演，不构成第三方意见。',
        accessedAt: '2026-04-21',
        sources: [
            { label: 'Sacra SpaceX Equity Research', url: 'https://sacra.com/c/spacex/', category: 'research', note: '未上市股权研究 · 单位经济推算' },
            { label: 'Quilty Space Starlink Forecast', url: 'https://www.advanced-television.com/2025/09/11/forecast-starlinks-revenues-at-15-9bn-in-2026/', category: 'research', note: '卫星互联网专业研究' },
            { label: 'SpaceX IPO Confidential Filing (CNBC)', url: 'https://edition.cnn.com/2026/04/01/business/spacex-ipo', category: 'secondary', publishedAt: '2026-04-01' },
            { label: '$1.75-2T IPO 估值 (Techi)', url: 'https://www.techi.com/spacex-ipo/', category: 'secondary' },
            { label: 'xAI 合并 $1.25T (Wikipedia)', url: 'https://en.wikipedia.org/wiki/SpaceX', category: 'data', publishedAt: '2026-02' },
            { label: 'SpaceX 2025 $15.5B Revenue (Aerotime)', url: 'https://www.aerotime.aero/articles/spacex-earn-15-5b-2025-surpassing-nasa-elon-musk', category: 'secondary', note: 'Musk 推文引用' },
            { label: '2025-12 $800B 二级估值 (TimeTrex)', url: 'https://www.timetrex.com/blog/spacex-2026-ipo', category: 'secondary' },
            { label: 'Starlink 10M 用户里程碑', url: 'https://www.tesery.com/blogs/news/starlink-surpasses-9-million-active-customers-weeks-after-hitting-8-million-milestone', category: 'secondary', publishedAt: '2026-02' },
            { label: 'Morgan Stanley 太空经济 TAM', url: 'https://www.morganstanley.com/ideas/investing-in-space', category: 'research' },
            { label: 'Morningstar SpaceX 估值分析', url: 'https://www.morningstar.com/stocks/does-spacexs-sky-high-valuation-make-sense', category: 'research' },
            { label: 'NASA CRS / Commercial Crew 合同', url: 'https://www.nasa.gov/humans-in-space/commercial-space/', category: 'primary' },
            { label: 'FAA Starbase 发射许可', url: 'https://www.faa.gov/space', category: 'primary', publishedAt: '2025-05' },
        ],
    },

    trackRecord: {
        narrative:
            '本分析锚定 2026-04-21（IPO pending 前）。以下 7 条是未来 12-18 个月的可验证命题，涵盖 IPO 定价、Starship 进展、Starlink 扩张、Kuiper 竞争等关键变量。',
        assumptions: [
            { assumption: 'IPO 2026 Q4 前公开发行', setAt: '2026-04-21', targetDate: '2026-12-31', targetValue: 'IPO 完成', verdict: 'pending', note: 'confidential filing 已交' },
            { assumption: 'IPO 定价 $1.5-2.2T 区间', setAt: '2026-04-21', targetDate: '2026-12-31', targetValue: '$1.5-2.2T', verdict: 'pending' },
            { assumption: '2026 末 Starlink 用户 ≥15M', setAt: '2026-04-21', targetDate: '2027-02-28', targetValue: '≥15M', verdict: 'pending' },
            { assumption: 'Starship 2026 完成 ≥1 次商业载荷', setAt: '2026-04-21', targetDate: '2026-12-31', targetValue: '1+ 商业载荷', verdict: 'pending' },
            { assumption: '2026 全年营收 ≥$25B', setAt: '2026-04-21', targetDate: '2027-03-31', targetValue: '≥$25B', verdict: 'pending', note: '共识 $27-30B 下限' },
            { assumption: 'Musk 2026 年内仍任 CEO', setAt: '2026-04-21', targetDate: '2026-12-31', targetValue: '仍任 CEO', verdict: 'pending' },
            { assumption: 'Kuiper 2026 末在轨卫星 <500 颗', setAt: '2026-04-21', targetDate: '2027-02-28', targetValue: '<500', verdict: 'pending', note: '竞争进展判断' },
        ],
        hitRate: 'N/A (全部 pending · 首次建立 Track Record)',
    },
}
