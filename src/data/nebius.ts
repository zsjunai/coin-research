import type { CompanyDetail } from '@/types/company'

export const nebius: CompanyDetail = {
    id: 'nebius',
    ticker: 'NASDAQ:NBIS',
    name: 'Nebius Group N.V.',
    tagline:
        '从 Yandex 遗产拆分而来的西方阵营 AI Neocloud 龙头之一。凭借微软、Meta 超级订单与英伟达战略入股，未来 5 年合同积压 ~$46B。核心争议：资本强度能否换来软件边际？',
    date: '2026-04-17',

    priceCards: [
        { label: '当前股价', value: '$166.77', sub: '2026-04-15 收盘', cls: 'cyan' },
        { label: '52 周涨幅', value: '+681%', sub: '从 $20.25 启动', cls: 'green' },
        { label: '市值', value: '~$40B', sub: '稀释后估算', cls: 'purple' },
        { label: 'Goldman PT', value: '$205', sub: 'Meta 合同后上调', cls: 'cyan' },
        { label: '2025 净亏损', value: '-$518M', sub: 'TTM', cls: 'red' },
        { label: '2026 CapEx', value: '$16-20B', sub: '客户预付覆盖 60%', cls: 'purple' },
    ],

    keyFacts: {
        '2025 营收': '$530M (+479% YoY)',
        'Q4 2025 ARR': '$1.2B (超指引上限)',
        '2025 Adj. EBITDA': '-$65M',
        '2026 营收指引': '$3.0 - 3.4B',
        '2026 ARR 指引': '$7 - 9B',
        '2026 EBITDA margin': '40% (指引)',
        '合同积压': '~$46B (微软 + Meta)',
        '英伟达持股': '8.3% ($2B 入股)',
        现金: '~$6B+',
        可转债: '$4.34B',
        '2026 末合同电力': '2.5-3GW',
        '2026 末连接电力': '800MW - 1GW',
    },

    contracts: [
        { customer: '微软', amount: '$17.4-19.4B', years: 5, detail: '100k+ GB300 起交，2027 年达 run-rate' },
        { customer: 'Meta', amount: '~$27B', years: 5, detail: '$12B 专属 + $15B 选购，2027 起交付' },
        { customer: '英伟达', amount: '$2B 股权 + 战略', years: '至 2030', detail: '5GW 英伟达系统部署路径' },
    ],

    subsidiaries: [
        { name: 'Avride', desc: '自动驾驶，Uber 领投', stake: '~83%', value: '隐含 ~$4.2B' },
        { name: 'Toloka', desc: 'AI 数据标注，Bezos Expeditions 领投', stake: '少数', value: '~$500M' },
        { name: 'TripleTen', desc: '软工/数据科学 Bootcamp', stake: '全资', value: '未披露' },
        { name: 'ClickHouse', desc: '开源分析数据库', stake: '少数股东', value: '未披露' },
    ],

    bullPoints: [
        { title: '$46B 合同积压', body: '未来 3-4 年收入可见性，所有 Neocloud 中最厚的' },
        { title: '英伟达 "亲儿子"地位', body: '8.3% 股权 + 5GW 系统部署路径图' },
        { title: '干净的资产负债表', body: 'P/B 6.28x（CoreWeave 10.15x），$6B+ 现金' },
        { title: '子公司期权价值', body: 'Avride $4.2B + Toloka $500M' },
        { title: '创始人回归', body: 'Volozh 2026-02 回任 CEO，Yandex 成功先例' },
        { title: '产能即门票', body: '已售罄，瓶颈是交付不是需求' },
    ],

    bearPoints: [
        { title: '资本强度极端', body: 'CapEx/Rev ~5-6x，自筹 $6-8B，18 个月内必再融资' },
        { title: '估值透支', body: '47-65x TTM EV/Sales，定价完美执行' },
        { title: '客户集中度', body: 'MSFT + Meta 将占 2027+ 收入主体' },
        { title: 'CoreWeave 规模碾压', body: '2026E 收入 4x，已 60% EBITDA margin 盈利' },
        { title: 'GPU 折旧周期', body: '12-18 月一代，残值摊销压力' },
        { title: '大客户悖论', body: '订单越大，客户自建动机越强' },
    ],

    scenarios: [
        {
            name: '乐观: 商业模式跃迁 (Mag 7 候选)',
            cls: 'bull',
            prob: 12,
            y5Mcap: '$280 - 450B',
            y5Value: 360,
            y10Mcap: '$1.0 - 1.5T',
            y10Value: 1200,
            desc: '5Y 内 MSFT + Meta 合同全兑现 + 商业模式跃迁（如主权 AI 平台或自有模型栈）启动；10Y 营收 $100-150B，Operating margin 25-30%',
        },
        {
            name: '中性: AI 时代的甲骨文',
            cls: 'neutral',
            prob: 55,
            y5Mcap: '$120 - 200B',
            y5Value: 160,
            y10Mcap: '$200 - 500B',
            y10Value: 350,
            desc: '5Y 合同按期履行，稳态 Neocloud 第二阵营；10Y 成为全球第三大 Neocloud，营收 $30-60B，保持盈利',
        },
        {
            name: '悲观: 规模被压 / 价格战',
            cls: 'bear',
            prob: 25,
            y5Mcap: '$50 - 90B',
            y5Value: 70,
            y10Mcap: '$50 - 120B',
            y10Value: 85,
            desc: 'MSFT 自建加速，CoreWeave 规模优势扩大，再融资稀释 30%+；10Y 仍可运营但估值被压',
        },
        {
            name: '退出: 并购 / 私有化',
            cls: 'bear',
            prob: 8,
            y5Mcap: '~$70B',
            y5Value: 70,
            y10Mcap: '~$80B (溢价)',
            y10Value: 80,
            desc: '股价长期低迷，英伟达/MSFT 战略收购，或被迫出售欧洲资产',
        },
    ],

    tenXGene: [
        { dim: '软件边际成本 · 规模化杠杆', tenBagger: '边际成本 ≈ 0', nebius: 'CapEx/Rev ~5x (2026)', status: 'red' },
        { dim: '网络/平台效应', tenBagger: '显著（用户越多越值钱）', nebius: '供应侧规模，无用户网络', status: 'red' },
        { dim: '数据闭环 / 专属资产', tenBagger: '独占数据 / IP / 规模', nebius: '无独占训练数据', status: 'red' },
        { dim: '毛利率 · 定价权', tenBagger: '60-80% 可持续', nebius: '25-40%，MSFT/Meta 决定价格', status: 'yellow' },
        { dim: '消费者触点 / 品牌', tenBagger: '直接 C 端 / 开发者心智', nebius: '纯 B2B', status: 'yellow' },
        { dim: '再投资空间 · S-curve', tenBagger: '高 ROIC + TAM 够大', nebius: 'TAM 足但 ROIC 未验证', status: 'yellow' },
        { dim: '管理层 · 跨代际转型', tenBagger: '有过 0→$30B 记录', nebius: 'Volozh 已证明过 (Yandex)', status: 'green' },
    ],

    weightedExpectation: {
        currentMcap: 40,
        y5: {
            expectedMcap: 156,
            multiplier: 3.9,
            cagr: 31,
        },
        y10: {
            expectedMcap: 364,
            multiplier: 9.1,
            cagr: 24,
        },
        breakdown: [
            { scenario: 'A. Mag 7 级', prob: 12, y5Mid: 360, y10Mid: 1200, y5Contrib: 43, y10Contrib: 144 },
            { scenario: 'B. AI 甲骨文', prob: 55, y5Mid: 160, y10Mid: 350, y5Contrib: 88, y10Contrib: 193 },
            { scenario: 'C. 规模被压', prob: 25, y5Mid: 70, y10Mid: 85, y5Contrib: 18, y10Contrib: 21 },
            { scenario: 'D. 并购退出', prob: 8, y5Mid: 70, y10Mid: 80, y5Contrib: 6, y10Contrib: 6 },
        ],
    },

    peerName: 'CoreWeave',
    coreWeaveCompare: [
        { metric: '2025 营收', nbis: '$530M', cwv: '$5.13B', winner: 'cwv' },
        { metric: '2026E 营收', nbis: '$3.0-3.4B', cwv: '~$12.5B', winner: 'cwv' },
        { metric: '2025 EBITDA margin', nbis: '亏损', cwv: '60%', winner: 'cwv' },
        { metric: '净利润', nbis: '-$518M', cwv: '盈利', winner: 'cwv' },
        { metric: 'P/B', nbis: '6.28x', cwv: '10.15x', winner: 'nbis' },
        { metric: '资产负债表', nbis: '干净 $6B+ 现金', cwv: '重债务', winner: 'nbis' },
        { metric: '客户集中度', nbis: 'MSFT+Meta 主导', cwv: '略分散', winner: 'cwv' },
        { metric: '英伟达持股', nbis: '8.3% ($2B)', cwv: '无', winner: 'nbis' },
    ],

    analysts: [
        { firm: 'Goldman Sachs', target: 205, rating: 'Buy' },
        { firm: 'DA Davidson', target: 200, rating: 'Buy' },
        { firm: '共识 (11 家)', target: 163, rating: 'Strong Buy' },
        { firm: 'Cantor Fitzgerald', target: 129, rating: 'Overweight' },
    ],

    watchlist: [
        { indicator: 'CapEx/Revenue', strongSignal: '2030 < 1.5x', baseSignal: '2030 ~2x', weakSignal: '2030 > 3x' },
        { indicator: '客户集中度 (前 2)', strongSignal: '< 25%', baseSignal: '25-40%', weakSignal: '> 50%' },
        { indicator: 'Gross margin', strongSignal: '> 60%', baseSignal: '40-55%', weakSignal: '< 35%' },
        { indicator: '开发者/API 规模', strongSignal: '百万级', baseSignal: '十万级', weakSignal: '万级以下' },
        { indicator: '商业模式层级', strongSignal: '平台/OS/模型', baseSignal: 'IaaS + 少量 PaaS', weakSignal: '纯 IaaS' },
    ],

    finalQuote:
        '卖铲子的公司能赚很多钱，但"Mag 7"这张牌桌上，从来只坐<strong>制造铲子的</strong>（英伟达）和<strong>买下金矿的</strong>（微软/Google/亚马逊/Meta），没有替人租铲子的。Nebius 的 10 年终局，大概率是 AI 时代最成功的"铲子租赁商"，而不是 Mag 7 的第八名。',

    revenueChart: {
        labels: ['2024 Revenue', '2025 Revenue', '2026E Revenue', '2025 CapEx', '2026E CapEx'],
        values: [120, 530, 3200, 2000, 18000],
        kinds: ['revenue', 'revenue', 'revenue', 'capex', 'capex'],
    },

    // ========================= NEW SECTIONS =========================

    overview: {
        founded: '1997 (Yandex) / 2024 (Nebius 重组)',
        headquarters: '荷兰 · 阿姆斯特丹',
        incorporation: '荷兰 N.V.',
        employees: '~500+ (工程 + 运营，不含子公司)',
        listing: 'NASDAQ · NBIS · 2024-10 重新上市',
        history: [
            { year: '1997', event: 'Volozh 与 Segalovich 在莫斯科创立 Yandex 搜索引擎', tag: '创立' },
            { year: '2011', event: 'Yandex N.V. NASDAQ IPO，估值 $8B', tag: 'IPO' },
            { year: '2022-02', event: '俄乌战争爆发，EU 制裁波及 Volozh', tag: '关键节点' },
            { year: '2022-06', event: 'Volozh 辞去 Yandex CEO 职位', tag: '关键节点' },
            { year: '2024-07', event: 'Yandex 俄罗斯业务以 $5.2B 出售给俄方财团', tag: '重组' },
            { year: '2024-10', event: '剩余国际资产重组为 Nebius，重启 NBIS 交易', tag: 'IPO' },
            { year: '2025-09', event: '与微软签署 $17.4-19.4B 5 年 GPU 产能合同', tag: '里程碑' },
            { year: '2025-12', event: 'Q4 核心 AI 云收入 YoY +830%，ARR 达 $1.2B', tag: '业绩' },
            { year: '2026-02', event: 'Volozh 以荷兰公民身份回任 CEO，放弃俄罗斯国籍', tag: '关键节点' },
            { year: '2026-03', event: 'Meta $27B 合同 + 英伟达 $2B 战略入股 (8.3%)', tag: '里程碑' },
            { year: '2026-03', event: '$4.34B 可转债发行；Missouri 1.2GW 场地奠基', tag: '融资' },
            { year: '2026-04', event: '股价 $167，市值 ~$40B；合同积压达 $46B', tag: '当前' },
        ],
        businessModel:
            '核心为 GPU-as-a-Service Neocloud，向 AI 实验室与超大规模云厂提供专属 GPU 产能、裸金属与托管服务。收费模式以多年专属产能合同 (Dedicated Capacity) 为主、按需使用为辅。客户预付款覆盖约 60% CapEx，余下以股权和债务融资。',
        revenueMix: [
            { name: 'AI 云 · 专属产能', pct: 82, note: 'MSFT + Meta 合同为主' },
            { name: 'AI 云 · 按需 (API/Studio)', pct: 10, note: 'AI 实验室与企业试用' },
            { name: 'Avride / TripleTen / 其他', pct: 8, note: '子公司并表部分' },
        ],
    },

    team: [
        {
            name: 'Arkady Volozh',
            role: 'CEO · 创始人',
            background:
                '1964 年生于哈萨克斯坦阿特劳（苏联时期），莫斯科石油化工与天然气工业大学（Gubkin）应用数学背景。1989 年共同创立 CompTek，1997 年创立 Yandex，2011 年率领 Yandex 在 NASDAQ IPO。2022-06 因 EU 制裁辞任 Yandex CEO，后放弃俄罗斯国籍并取得荷兰国籍。2026-02 回归担任 Nebius CEO。',
            since: '2026-02',
            rating: 5,
        },
        {
            name: '核心技术团队',
            role: '原 Yandex 技术骨干',
            background:
                '大量搜索、基础设施、ML 系统工程师自 Yandex 无缝过渡到 Nebius。团队持续运营自研的 Soperator、Slurm 分支与可观测性栈 (Observability)，在千卡级 GPU 编排上有可被验证的实战经验。',
            rating: 4,
        },
        {
            name: 'Charles Ryan',
            role: '非执行董事长',
            background: 'UFG Asset Management 创始人，原 Yandex N.V. 董事会成员，过渡期主导重组与上市工作。',
            rating: 4,
        },
        {
            name: 'Jon Teherani',
            role: 'Chief Commercial Officer (CCO)',
            background:
                '据 2025 年公司披露从英伟达 GTM 团队加入，主导微软、Meta 两笔超级合同的商务条款。英伟达背景是与芯片供给方深度绑定的关键润滑剂。',
            rating: 3,
        },
    ],

    shareholders: [
        { name: 'Volozh 家族信托', pct: '~13-17%', type: '创始人', note: '具体比例随可转债稀释浮动' },
        { name: '英伟达', pct: '8.3%', type: '战略投资者', note: '2026-03 以 $2B 入股' },
        { name: '原 Yandex 机构股东', pct: '~20-25%', type: '老股东', note: '部分仍持有，含老 UFG 系' },
        { name: '公众流通股', pct: '~50%', type: '机构 + 散户', note: 'ARK / Baillie Gifford / Fidelity 等' },
    ],

    advantages: [
        {
            title: '英伟达战略绑定 (独特性 ★★★★★)',
            body: '8.3% 股权 + 5GW 系统部署路径图，是 CoreWeave、Lambda 都没有的待遇。意味着下一代 Rubin/下下代架构的首批分配、工程合作、GTM 联动。',
            evidence: '2026-03-11 英伟达官宣；英伟达董事会指派代表进入 Nebius 战略委员会。',
        },
        {
            title: '全栈自研软件层 (护城河 ★★★★)',
            body: '继承 Yandex 的基础设施传统，自研 Soperator (Kubernetes 扩展)、Slurm 分支、Observability 栈，客户不仅租 GPU，还租 "可直接运行千卡训练任务的工厂"。对比单纯倒卖产能的 Neocloud 有明确差异化。',
            evidence: '开源仓库活跃度、微软 / Meta 愿意签 5 年独占合同本身是对技术层的背书。',
        },
        {
            title: '$46B 合同积压 (可见性 ★★★★★)',
            body: '行业中最厚的收入地板。按 5 年摊销，年均 $9B 收入基础，远超 2025 年 $530M 真实营收。',
            evidence: 'MSFT 合同 SEC 6-K；Meta 合同 2026-03-16 CNBC 披露。',
        },
        {
            title: '欧洲主权云卡位 (监管优势 ★★★★)',
            body: '荷兰 N.V. + Finland / 欧盟境内数据中心，天然符合 GDPR、AI Act、数据主权。欧洲政府级客户（主权 AI、国防）长期大概率倾向非美企。',
            evidence: 'Finland Lappeenranta 310MW 厂房 2027 投产；法国、德国曾公开表达对欧洲 AI 基础设施独立性的诉求。',
        },
        {
            title: '干净的资产负债表 (韧性 ★★★)',
            body: '$6B+ 现金、$4.34B 低票息可转债 (1.25%-2.625%)、转股溢价 55-57.5%。在利率上行与 AI 周期回调中扛压能力强于 CoreWeave。',
            evidence: 'Q4 2025 财报；2026-03 可转债发行条款。',
        },
        {
            title: '创始人回归 + 过往成功履历 (治理 ★★★★)',
            body: 'Volozh 曾把 Yandex 从 0 做到 $30B（巅峰）。回归 CEO 是强烈的"再做一次"的信号，且其放弃俄罗斯国籍使地缘风险结构性下降。',
            evidence: '2026-02 董事会公告；Dutch 国籍官方文件。',
        },
        {
            title: '子公司期权组合 (下行垫 ★★★)',
            body: 'Avride (自动驾驶，Uber 领投 $15B 估值)、Toloka (贝索斯领投)、TripleTen、ClickHouse 股权。IPO / 分拆变现可以提供非核心业务的估值重估空间。',
            evidence: 'Uber 对 Avride 投资公告；Toloka 2025-05 Bezos Expeditions 投资。',
        },
    ],

    disadvantages: [
        {
            title: '规模劣势：落后 CoreWeave 整整一代',
            body: '2025 营收 $530M vs CoreWeave $5.13B（10 倍差距）；2026E 仍是 4 倍差距。客户为何选择规模更小的供应商？核心卖点只剩"便宜 + 地缘差异化"。',
            evidence: 'CoreWeave 2025 财报；Morgan Stanley 2026-Q1 研报把 CWV 列为行业领导者。',
        },
        {
            title: '纯 B2B，没有消费者品牌',
            body: '估值倍数上限受限。所有万亿美元公司 (Apple/Google/Meta/亚马逊/微软/特斯拉/英伟达) 都有强品牌或开发者心智。Nebius 不具备。',
            evidence: '行业可比：Equinix $80B、甲骨文 $500B、AWS (内嵌亚马逊)；纯 B2B 基建公司历史天花板难以突破 Mag 7。',
        },
        {
            title: '定价权弱 — 微软 / Meta 是价格决定方',
            body: '5 年合同条款中对价格调整的控制权主要在客户侧。折旧快的 GPU 叠加长期锁价，是毛利率恶化的结构性风险。',
            evidence: '长期产能合同标准条款；CoreWeave 招股书披露的类似条款可作对照。',
        },
        {
            title: '没有独占数据或网络效应',
            body: '客户的训练数据不归 Nebius，算完就带走；不同客户之间没有互联互通产生的 network effect。这条是 Mag 7 的核心基因，缺失是结构性的。',
            evidence: '商业模式本质 — IaaS 层面的通用特征。',
        },
        {
            title: '极端资本强度',
            body: '2026 CapEx / Revenue ~5-6x，即使客户预付覆盖 60%，仍每年需融资 $6-8B。这意味着估值 de-rating 风险持续存在，股东持续被稀释。',
            evidence: '2026 公司指引；历史上 AWS 巅峰期 CapEx/Rev 也仅 ~25%。',
        },
        {
            title: '核心业务地域单一',
            body: '产能集中于北美 + 欧洲，亚洲市场（尤其日韩、东南亚）近乎缺席。相对 AWS / Azure / GCP 的全球化，地理多元化程度低。',
            evidence: '官方站点地图：Finland、Kansas City、Paris、Israel 等；亚洲仅 Israel 中东节点，无东亚主力节点。',
        },
        {
            title: '管理层厚度相对浅',
            body: 'CEO 回归是强信号，但第二梯队（CTO 层面、主要业务负责人）公开信息较少，相对 CoreWeave 完整披露的管理团队，投资者可做尽调的透明度不足。',
            evidence: '公司 2025 年 Proxy 披露程度；对比 CoreWeave S-1 招股书。',
        },
    ],

    shortTermCatalysts: [
        {
            when: '2026 Q2 (5 月)',
            event: 'Q1 2026 业绩披露：首次包含 MSFT 合同部分收入确认',
            impact: 'positive',
            probability: '~90% 公告',
            magnitude: '±10-15%',
        },
        {
            when: '2026 Q2-Q3',
            event: '微软第二批产能交付 (GB300 升级)',
            impact: 'positive',
            probability: '已确认',
            magnitude: '+5-10%',
        },
        {
            when: '2026 Q3 (8 月)',
            event: 'Q2 业绩 + 是否提升全年指引上限',
            impact: 'mixed',
            probability: '~50% 上调',
            magnitude: '±15-20%',
        },
        {
            when: '2026 下半年',
            event: '第三个 $1B+ 客户签约（潜在候选：欧洲主权 AI / OpenAI / Anthropic）',
            impact: 'positive',
            probability: '~40%',
            magnitude: '+15-25%',
        },
        {
            when: '2026 下半年',
            event: 'Missouri 1.2GW 场地首阶段送电',
            impact: 'positive',
            probability: '~80%',
            magnitude: '+5%',
        },
        {
            when: '2026-2027',
            event: '再融资事件（股权定增或额外可转债）',
            impact: 'negative',
            probability: '~85%',
            magnitude: '-5 至 -15%',
        },
        {
            when: '2027 Q1',
            event: 'Meta 合同首批交付 + 真实收入开始确认',
            impact: 'positive',
            probability: '已合同约束',
            magnitude: '+20-30%',
        },
        {
            when: '2027',
            event: 'Avride IPO 或战略融资轮（$15B+ 估值）',
            impact: 'positive',
            probability: '~50%',
            magnitude: '+10%',
        },
        {
            when: '持续',
            event: '英伟达下一代 (Rubin) 首发卡分配',
            impact: 'positive',
            probability: '~70%',
            magnitude: '+5-10%',
        },
        {
            when: '任何时点',
            event: 'AI capex 周期拐点信号 (MSFT/META/GOOG capex 指引下修)',
            impact: 'negative',
            probability: '不确定',
            magnitude: '-30-50%',
        },
    ],

    longTermDrivers: [
        {
            name: 'AI 训练 TAM 爆发',
            horizon: '2026-2030',
            body: '全球 AI 基础设施支出从 2026 ~$500B 预计到 2030 达 $1.5-2T。Neocloud 第三方 GPU 云部分占比预计 $150-300B。Nebius 若能吃下 10-15% 市占，对应 $15-45B 年营收。',
            enabling: '推理需求爆发 + 主权 AI 浪潮 + 开源大模型商业化',
        },
        {
            name: '欧洲主权 AI 与国防云',
            horizon: '2027-2032',
            body: '欧盟目前 AI 基础设施严重依赖美国三大云，法国、德国、北欧国家正在推动"欧洲 AI 独立"。Nebius 荷兰控股 + 北欧数据中心是最天然候选。国防级客户（定价权 + 高粘性）是关键突破点。',
            enabling: 'EU AI Act、法国 La Ferme 数据战略、北约数字化采购预算',
        },
        {
            name: '英伟达绑定深化为"第三家英伟达云"',
            horizon: '2026-2030',
            body: '类似 DGX Cloud 在 AWS/Azure/OCI 之外，英伟达可能把 Nebius 培育为"英伟达直营色彩最强的 Neocloud"。若英伟达持股加码至 15-20%，本质上 Nebius 成为英伟达云事业部的独立上市载体，估值倍数会结构性提升。',
            enabling: '英伟达董事席位、技术合作深度、互为单一最大供应商 / 客户',
        },
        {
            name: '商业模式向上跃迁 (IaaS → PaaS → Model)',
            horizon: '2027-2030',
            body: 'Nebius AI Studio 已有雏形。若能升级为类似 OpenRouter、Fireworks 的推理 API 层，再进一步孵化欧洲主权大模型（合作 Mistral 或自研），可以把估值从 basevalley 5-8x EV/Sales 提升到 10-15x。',
            enabling: '自有推理栈 + 欧洲模型生态 + 监管合规差异化',
        },
        {
            name: '子公司组合期权释放',
            horizon: '2027-2029',
            body: 'Avride IPO (2027-2028 预计 $20-30B 估值)、Toloka 独立估值提升、TripleTen 潜在分拆。Sum-of-the-Parts 层面为母公司提供 $10-20B 的非核心资产重估空间。',
            enabling: '资本市场窗口开启、Uber / Bezos 两大战略股东的退出需求',
        },
        {
            name: '推理时代的去中心化 / 边缘化',
            horizon: '2028-2033',
            body: '训练集中于超大规模数据中心，但推理需求将向边缘、企业本地、主权节点分散。Nebius 中等规模 + 模块化建站策略，相对超大规模云更灵活。',
            enabling: '开源模型普及、推理延迟敏感场景爆发、数据本地化监管',
        },
    ],

    riskMatrix: [
        {
            category: '财务风险',
            level: 'high',
            summary: '资本强度 + 融资节奏 + 稀释压力',
            items: [
                {
                    name: 'CapEx 自筹缺口',
                    body: '2026 需自筹 $6-8B。若债券市场收紧或股价下跌，融资成本急剧上升。',
                    mitigation: 'MSFT + Meta 预付款锁定 60% CapEx；已备现金 $6B+',
                },
                {
                    name: '股权稀释',
                    body: '可转债转股价 ~$200，若股价长期高于此点，5 年内稀释 10-15%。',
                    mitigation: '公司可选择现金结算部分转股',
                },
                {
                    name: 'GPU 残值减值',
                    body: 'H100 → B200 → GB300 → Rubin 每 12-18 个月一代，代际切换时旧设备账面价值可能急剧减值。',
                    mitigation: '5 年摊销 + 客户合同匹配部分折旧',
                },
            ],
        },
        {
            category: '客户 / 商业风险',
            level: 'critical',
            summary: 'MSFT + Meta 将占 2027+ 收入 >50%',
            items: [
                {
                    name: '客户集中度',
                    body: '两家任一延迟部署或重谈条款，单季收入可能跌 20-40%。',
                    mitigation: '合同条款含最低保证（具体数额未披露）',
                },
                {
                    name: '客户自建替代',
                    body: '微软自有 Azure AI 基础设施、Meta 自建 Llama 训练集群均在加速。Nebius 是"补缺"而非"替代"。',
                    mitigation: '5 年锁定合同；Nebius 交付速度优势',
                },
                {
                    name: '合同条款不对称',
                    body: '长期产能合同一旦确立，价格调整机制通常对买方更有利。',
                    mitigation: '部分合同含通胀调整条款（未公开细节）',
                },
            ],
        },
        {
            category: '技术 / 运营风险',
            level: 'medium',
            summary: '产能交付 + GPU 供应 + 运维稳定性',
            items: [
                {
                    name: '电力交付延迟',
                    body: 'Missouri 1.2GW 场地依赖当地电网升级。Finland 310MW 依赖北欧电网。任一延期直接影响收入确认。',
                    mitigation: '多地并行建设、风险分散',
                },
                {
                    name: '英伟达供应优先级',
                    body: '虽 8.3% 持股，但英伟达仍需平衡 AWS / Azure / GCP / OCI / Meta / xAI 等大客户诉求。',
                    mitigation: '官方战略合作协议 + 5GW 部署承诺',
                },
                {
                    name: '运维事故风险',
                    body: '千卡 / 万卡级训练集群对网络、存储、调度的稳定性极其敏感。一次大规模事故可能导致违约。',
                    mitigation: 'Soperator 自研编排栈、SLA 机制',
                },
            ],
        },
        {
            category: '竞争风险',
            level: 'high',
            summary: 'CoreWeave 规模碾压 + 超大规模云内卷',
            items: [
                {
                    name: 'CoreWeave 持续扩大规模优势',
                    body: '规模 = 单位成本，Neocloud 价格战中 CoreWeave 拥有长期优势。',
                },
                {
                    name: '超大规模云厂推价格战',
                    body: 'AWS / Azure / GCP 随时可用亏损策略压缩 Neocloud 利润空间。',
                    mitigation: '专属产能合同价格锁定；差异化 (欧洲主权)',
                },
                {
                    name: '新兴 Neocloud 涌现',
                    body: 'Crusoe、Lambda、Fluidstack 等中型玩家持续融资扩张。',
                },
            ],
        },
        {
            category: '宏观 / 周期风险',
            level: 'high',
            summary: 'AI capex 周期拐点',
            items: [
                {
                    name: 'AI capex 放缓',
                    body: '若 MSFT / META / GOOG / AMZN 的 AI capex 进入平台期（当前共识预计 2027-2028），Neocloud 行业将首当其冲。',
                    mitigation: '长期合同锁定；主权 AI 作为新增量',
                },
                {
                    name: '利率与融资环境',
                    body: '高利率环境下 Neocloud 融资成本上升，估值倍数压缩。',
                },
                {
                    name: '模型算力需求曲线',
                    body: '若下一代大模型训练算力需求不再指数增长（物理极限 / 算法效率跃升），训练 GPU 需求将放缓。',
                },
            ],
        },
        {
            category: '地缘 / 监管风险',
            level: 'medium',
            summary: '历史包袱 + 主权资产定位的双刃',
            items: [
                {
                    name: '俄罗斯历史关联',
                    body: 'Volozh 虽放弃俄罗斯国籍，但 Yandex 遗留资产的历史在某些政治情景下仍可能被放大。',
                    mitigation: '完整合规重组 + 荷兰 N.V. 架构',
                },
                {
                    name: 'EU / US AI Act 执行细节',
                    body: '欧盟 AI Act、美国出口管制可能对跨境 GPU 流转、数据主权产生新约束。',
                },
                {
                    name: '数据本地化要求',
                    body: '不同主权下的数据本地化要求增加合规成本，但同时也是 Nebius 相对美国三大云的机会。',
                },
            ],
        },
        {
            category: '治理风险',
            level: 'low',
            summary: '公司刚重组完成 · 披露规范仍在建立',
            items: [
                {
                    name: '信息披露不成熟',
                    body: '作为 2024 年重新上市的新实体，季报披露颗粒度仍弱于 CoreWeave 等成熟对手。',
                    mitigation: '2026 年预计增加细分收入披露',
                },
                {
                    name: 'CEO 依赖 (Key Person)',
                    body: 'Volozh 个人对战略、融资、客户关系的依赖度较高。',
                    mitigation: '第二梯队团队延续 Yandex 体系',
                },
            ],
        },
    ],

    profitability: {
        narrative:
            'Nebius 正处于"重资本投入 → 规模经济兑现"的拐点。2025 年仍在显著亏损（净亏 $518M、Adj. EBITDA -$65M），但 Q4 单季度已接近 EBITDA 转正。2026 指引 40% Adj. EBITDA margin 是**行业内最激进的转型速度**。真正的转折点：2026 Q2-Q3 能否兑现指引，决定估值倍数是维持 47x TTM 还是压缩到 5-8x。',

        incomeStatement: [
            {
                year: '2023',
                revenue: '~$40M',
                revenueNum: 40,
                grossMargin: 'N/M',
                opIncome: '-$280M',
                ebitda: '-$180M',
                ebitdaMargin: 'N/M',
                netIncome: '-$320M',
                eps: 'N/A',
                status: 'estimate',
            },
            {
                year: '2024',
                revenue: '$117M',
                revenueNum: 117,
                grossMargin: '~8%',
                opIncome: '-$380M',
                ebitda: '-$150M',
                ebitdaMargin: '-128%',
                netIncome: '-$397M',
                eps: 'N/A',
                status: 'actual',
            },
            {
                year: '2025',
                revenue: '$530M',
                revenueNum: 530,
                grossMargin: '~25%',
                opIncome: '-$480M',
                ebitda: '-$65M',
                ebitdaMargin: '-12%',
                netIncome: '-$518M',
                eps: '-$2.20',
                status: 'actual',
            },
            {
                year: '2026E',
                revenue: '$3.0-3.4B',
                revenueNum: 3200,
                grossMargin: '~45%',
                opIncome: '-$50 至 +$150M',
                ebitda: '~$1.2-1.4B',
                ebitdaMargin: '40% (指引)',
                netIncome: '-$200 至 +$100M',
                eps: '~$0',
                status: 'guidance',
            },
            {
                year: '2027E',
                revenue: '$7-9B',
                revenueNum: 8000,
                grossMargin: '~50%',
                opIncome: '+$800M-1.5B',
                ebitda: '~$3.5-4.5B',
                ebitdaMargin: '~50%',
                netIncome: '+$500M-1B',
                eps: '+$2.0-4.0',
                status: 'estimate',
            },
            {
                year: '2028E',
                revenue: '$12-16B',
                revenueNum: 14000,
                grossMargin: '~52%',
                opIncome: '+$2-3B',
                ebitda: '~$6-8B',
                ebitdaMargin: '~52%',
                netIncome: '+$1.5-2.5B',
                eps: '+$6-10',
                status: 'estimate',
            },
        ],

        marginEvolution: [
            { year: '2023', gross: null, ebitda: -450, operating: -700, net: -800, status: 'estimate' },
            { year: '2024', gross: 8, ebitda: -128, operating: -325, net: -339, status: 'actual' },
            { year: '2025', gross: 25, ebitda: -12, operating: -91, net: -98, status: 'actual' },
            { year: '2026E', gross: 45, ebitda: 40, operating: 3, net: 0, status: 'guidance' },
            { year: '2027E', gross: 50, ebitda: 50, operating: 15, net: 10, status: 'estimate' },
            { year: '2028E', gross: 52, ebitda: 52, operating: 18, net: 14, status: 'estimate' },
        ],

        milestones: [
            { year: '2025 Q4', milestone: 'Adj. EBITDA 单季度转正', hit: true, note: '已达成' },
            { year: '2026 H1', milestone: 'Gross margin 突破 40%', hit: false, note: '指引隐含' },
            { year: '2026 H2', milestone: '全年 Adj. EBITDA 转正', hit: false, note: '指引 40% margin' },
            { year: '2027 Q1', milestone: 'GAAP Operating Income 转正', hit: false, note: 'Meta 合同交付启动' },
            { year: '2027 H2', milestone: 'GAAP Net Income 转正', hit: false, note: '依赖利息 + 折旧控制' },
            { year: '2028', milestone: '自由现金流转正 (FCF positive)', hit: false, note: '取决于 CapEx 节奏' },
            { year: '2029-2030', milestone: '累计回收 2026 投资成本', hit: false },
        ],

        unitEconomics: [
            { metric: 'H100/H200 租赁价', value: '$2.0-2.8/GPU-小时', source: '行业 spot 价参考 2026 Q1' },
            { metric: '专属合同均价', value: '$1.5-2.0/GPU-小时', source: '长合同折扣约 20-30%' },
            { metric: 'GPU 毛利率', value: '~50-60% (满负荷)', source: '满载时单位经济模型' },
            { metric: 'GPU 回本周期', value: '18-24 个月', source: 'CapEx / 年毛利现金流' },
            { metric: '利用率', value: '85-92% (专属产能)', source: '锁定合同接近 100%，按需略低' },
            { metric: 'CapEx / 营收', value: '~5-6x (2026)', source: '2026 指引 vs 营收预期' },
            { metric: 'ARR/员工', value: '~$2.4M (2026E)', source: 'Exit ARR $8B / ~500 员工' },
        ],

        fcfPath:
            '2025 FCF 深度为负（-$3B+ 级），2026 预计 -$8 至 -$10B（CapEx 占大头），2027 随着微软合同收入确认 + CapEx 节奏放缓，FCF 缺口缩窄至 -$3 至 -$5B，2028 有望首次接近 FCF breakeven，2029-2030 可实现稳态 FCF 正（年化 $3-6B）。关键变量：CapEx 节奏、折旧口径、客户预付款比例能否维持 60%。',

        keyRisks: [
            '若 2026 Q2 实际 gross margin < 35%，40% EBITDA margin 指引基本不可能达成 → 估值重估',
            'GPU 残值一次性减值（Rubin 代际切换时）可能拉低某季度利润 $500M+',
            '客户合同价格调整条款若偏向买方，2028+ 毛利率可能从 52% 回落至 40%',
            '欧洲主权 AI 合同若 2027 年前未落地，Avride 期权价值也推迟释放 → 净利复合增速打折',
        ],
    },

    competitiveLandscape: {
        summary:
            'AI 基础设施市场正分化为三层：**超大规模云厂（AWS/Azure/GCP/OCI）**拥有规模与客户，**Neocloud（CoreWeave/Nebius/Lambda/Crusoe）**拥有速度与专注，**垂直专家（SambaNova/Cerebras）**拥有差异化硬件。Nebius 的位置是 Neocloud 第二名，面对 CoreWeave 的规模压制与超大规模云的资源碾压，核心护城河是英伟达战略绑定 + 欧洲主权卡位。',

        competitors: [
            {
                name: 'Nebius (自身)',
                type: 'neocloud',
                ticker: 'NBIS',
                revenue2026E: '$3.0-3.4B',
                aiRevenue: '~$2.8B',
                gpuFleet: '~100k (2026 末)',
                backlog: '$46B',
                ebitdaMargin: '40% (指引)',
                marketCap: '~$40B',
                nvidiaLevel: 5,
                threat: 'low',
                strength: '英伟达 8.3% 股权、全栈软件栈、欧洲主权卡位、干净资产负债表',
                weakness: '规模落后 CoreWeave 4x、纯 B2B、地域集中',
            },
            {
                name: 'CoreWeave',
                type: 'neocloud',
                ticker: 'CRWV',
                revenue2026E: '~$12.5B',
                aiRevenue: '~$12B',
                gpuFleet: '~250k+',
                backlog: '$20B+',
                ebitdaMargin: '~60%',
                marketCap: '~$60-80B',
                nvidiaLevel: 4,
                threat: 'high',
                strength: '规模最大、已盈利、MSFT/OpenAI 深度客户、IPO 后融资能力',
                weakness: '重债务、MSFT 依赖 > 60%、增长放缓到 ~140% YoY',
            },
            {
                name: 'Lambda',
                type: 'neocloud',
                ticker: '未上市',
                revenue2026E: '~$1.5B',
                aiRevenue: '~$1.5B',
                gpuFleet: '~60k',
                backlog: '< $3B',
                ebitdaMargin: '~5-10%',
                marketCap: '~$4-5B (2024 轮次)',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: '开发者社区、Reserved Instances、AI 研究者首选',
                weakness: '资本不足、规模小、客户多为初创',
            },
            {
                name: 'Crusoe Energy',
                type: 'neocloud',
                ticker: '未上市',
                revenue2026E: '~$1-1.5B',
                aiRevenue: '~$800M',
                gpuFleet: '~50k',
                backlog: '~$5B',
                ebitdaMargin: '~15-20%',
                marketCap: '~$2.8B (2024 轮次)',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: '停搁气发电 ESG 叙事、Kuwait/Iceland 能源整合',
                weakness: '能源叙事难扩展到百 GW 规模、合规复杂',
            },
            {
                name: '微软 Azure',
                type: 'hyperscaler',
                ticker: 'MSFT',
                revenue2026E: '~$90B (Azure)',
                aiRevenue: '~$25-30B',
                gpuFleet: '~1M+ GPU',
                backlog: '$300B+ (含 Copilot)',
                ebitdaMargin: '~45%',
                marketCap: '~$3.5T (母公司)',
                nvidiaLevel: 4,
                threat: 'high',
                strength: 'OpenAI 独家、企业软件绑定、全球 60+ 区域',
                weakness: '同时是 Nebius 最大客户（悖论）、价格战风险',
            },
            {
                name: 'AWS',
                type: 'hyperscaler',
                ticker: 'AMZN',
                revenue2026E: '~$130B',
                aiRevenue: '~$15-20B',
                gpuFleet: '~800k',
                backlog: '巨大 (未具体披露)',
                ebitdaMargin: '~40%',
                marketCap: '~$2.2T (母公司)',
                nvidiaLevel: 3,
                threat: 'high',
                strength: '规模最大、自研 Trainium/Inferentia、企业客户最厚',
                weakness: '在前沿 AI (OpenAI/Anthropic 级) 竞争落后',
            },
            {
                name: '谷歌云 (GCP)',
                type: 'hyperscaler',
                ticker: 'GOOG',
                revenue2026E: '~$60B',
                aiRevenue: '~$15B',
                gpuFleet: '~500k 英伟达 + 自研 TPU',
                backlog: '~$100B',
                ebitdaMargin: '~15-20%',
                marketCap: '~$2.5T (母公司)',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: '自研 TPU 独立供给、DeepMind 研究、Gemini',
                weakness: '企业销售弱于 AWS/Azure、TPU 生态与 CUDA 竞争',
            },
            {
                name: '甲骨文云 (OCI)',
                type: 'hyperscaler',
                ticker: 'ORCL',
                revenue2026E: '~$30B (OCI)',
                aiRevenue: '~$10B',
                gpuFleet: '~300k+',
                backlog: '$160B+ (RPO)',
                ebitdaMargin: '~42%',
                marketCap: '~$500B (母公司)',
                nvidiaLevel: 5,
                threat: 'high',
                strength: '激进 AI 扩张、OpenAI/Meta 大单、裸金属集群架构',
                weakness: '晚入场、企业客户局限、数据库遗留包袱',
            },
        ],

        positioning: [
            { dimension: '收入规模', nebius: '$3.0-3.4B', industryAvg: '$4-8B', leader: 'AWS ~$130B', nebiusStrong: false },
            { dimension: '合同积压 / 营收比', nebius: '15x', industryAvg: '2-4x', leader: 'Nebius 15x', nebiusStrong: true },
            { dimension: 'GPU 队列规模', nebius: '~100k', industryAvg: '50-250k', leader: 'AWS ~800k', nebiusStrong: false },
            { dimension: '英伟达绑定深度', nebius: '战略股东 + 5GW', industryAvg: 'GTM 合作', leader: 'Nebius / OCI 并列', nebiusStrong: true },
            { dimension: '欧洲主权定位', nebius: '荷兰 N.V. + 北欧节点', industryAvg: '美国主导', leader: 'Nebius / Mistral', nebiusStrong: true },
            { dimension: 'EBITDA margin', nebius: '40% (指引)', industryAvg: '15-60%', leader: 'CoreWeave 60%', nebiusStrong: false },
            { dimension: '客户集中度 (Top 2)', nebius: '~70% (MSFT+Meta)', industryAvg: '30-50%', leader: 'AWS < 20%', nebiusStrong: false },
            { dimension: '资产负债表健康度', nebius: '$6B+ 现金, 低息可转债', industryAvg: '高债', leader: 'Nebius 最干净', nebiusStrong: true },
            { dimension: '增长速度 (YoY)', nebius: '~500%', industryAvg: '100-200%', leader: 'Nebius 最快', nebiusStrong: true },
            { dimension: '开发者心智', nebius: '早期', industryAvg: '中等', leader: 'AWS / Lambda', nebiusStrong: false },
        ],

        marketShare2026: [
            { name: 'AWS', pct: 32 },
            { name: 'Azure', pct: 22 },
            { name: '谷歌云', pct: 14 },
            { name: '甲骨文云', pct: 8 },
            { name: 'CoreWeave', pct: 7 },
            { name: 'Nebius', pct: 2 },
            { name: 'Lambda / Crusoe / 其他', pct: 15 },
        ],

        winLoss: [
            {
                scenario: '大型超算训练 (100k+ GPU 级)',
                winners: 'AWS / Azure / CoreWeave',
                losers: 'Nebius (规模不够)',
                reasoning: '前沿实验室 (OpenAI/xAI/Anthropic) 需要单集群超过 100k GPU，Nebius 2026 末 800MW-1GW 连接电力约对应 60-80k GPU，尚无法满足顶级训练需求',
            },
            {
                scenario: '专属产能 (10-50k GPU)',
                winners: 'Nebius / CoreWeave',
                losers: 'Lambda / Crusoe',
                reasoning: 'Nebius 的全栈软件 + 英伟达优先级可与 CoreWeave 分庭抗礼，微软 / Meta 大单正是此类',
            },
            {
                scenario: '欧洲 / 主权 AI 客户',
                winners: 'Nebius (独占)',
                losers: '美国三大云',
                reasoning: 'EU AI Act + GDPR + 数据主权使美国大厂受限，Nebius 荷兰 N.V. + 北欧数据中心是结构性优势',
            },
            {
                scenario: 'AI 初创与开发者',
                winners: 'Lambda / Runpod / Together',
                losers: 'Nebius / CoreWeave (过重)',
                reasoning: '小时级按需计费 + 信用卡即可开通是 Nebius 和 CoreWeave 的弱项',
            },
            {
                scenario: '企业 AI 工作负载 (Fortune 500)',
                winners: 'AWS / Azure / GCP',
                losers: 'Nebius',
                reasoning: '企业客户粘性极高，迁移成本大，AWS/Azure 的完整服务栈（数据库、分析、安全）是 Nebius 短期无法替代的',
            },
            {
                scenario: '英伟达下一代 (Rubin) 首发',
                winners: 'Nebius / OCI',
                losers: '无英伟达深度绑定的玩家',
                reasoning: '英伟达战略股权关系使 Nebius 进入首批分配名单，这是相对 CoreWeave 的独特优势',
            },
        ],

        structuralTrend:
            '未来 3 年行业结构性变化：①超大规模云 vs Neocloud 的边界模糊化（MSFT 既是 Nebius 客户又是对手）②欧洲会诞生 1-2 个千亿美元级主权 AI 平台（Nebius 是最强候选）③价格战不可避免（GPU 供应正在从紧缺转向平衡）④整合潮：中小 Neocloud (Lambda/Crusoe/Fluidstack) 会被并购或被挤出。Nebius 需要在 2027 年前锁定"欧洲主权 + 英伟达亲儿子"双重身份，否则将被 CoreWeave 吃掉 Neocloud 第二的定位。',

        tam: {
            narrative:
                '全球 AI 基础设施 TAM 处在**指数级扩张期**：2024 年 ~$300B，2030 年预计 $1.5-2T（5-7x 增长）。Nebius 所在的 **Neocloud 子赛道**（第三方 GPU 云，排除 AWS/Azure/GCP 自建）增长更猛：2024 年 ~$12B → 2030 年 $150-300B（~20x）。Nebius 要做到 10x 回报，必须在 Neocloud 里占到 **10-15% 市占率**（对应 2030 年年营收 $30-50B）。以 2026 年 $3B 对应 ~10% 市占为起点，保住这个份额就能兑现。',
            points: [
                { year: '2024', totalTam: 300, neocloudTam: 12, selfRevenue: 0.12, status: 'actual' },
                { year: '2025', totalTam: 400, neocloudTam: 20, selfRevenue: 0.53, status: 'actual' },
                { year: '2026', totalTam: 500, neocloudTam: 30, selfRevenue: 3.2, status: 'estimate' },
                { year: '2028', totalTam: 1000, neocloudTam: 75, selfRevenue: 14, status: 'estimate' },
                { year: '2030', totalTam: 1750, neocloudTam: 225, selfRevenue: 35, status: 'estimate' },
                { year: '2035', totalTam: 4000, neocloudTam: 600, selfRevenue: 90, status: 'estimate' },
            ],
            keyNumbers: [
                { label: '2026 AI 基建 TAM', value: '$500B', sub: '当前总赛道', cls: 'cyan' },
                { label: '2030E AI 基建 TAM', value: '$1.5-2T', sub: '5-7x vs 2024', cls: 'purple' },
                { label: '2026 Neocloud TAM', value: '$30B', sub: '第三方 GPU 云', cls: 'cyan' },
                { label: '2030E Neocloud TAM', value: '$150-300B', sub: '~20x vs 2024', cls: 'purple' },
                { label: 'Nebius 市占 (2025)', value: '2.7%', sub: 'Neocloud 中', cls: 'green' },
                { label: 'Nebius 市占 (2026E)', value: '~10%', sub: '跨越式上升', cls: 'green' },
                { label: 'Nebius 10x 所需市占', value: '15%', sub: '2030 年 $30-50B 营收', cls: 'red' },
                { label: 'Neocloud CAGR', value: '~50%', sub: '2024→2030 复合增速', cls: 'purple' },
            ],
            sourcesNote:
                '数据来源：IDC / Gartner 公开 AI 基建 TAM 预测、Forrester Neocloud 2026 年 $20B 估算、Mordor Intelligence $35B 估算（本分析取中值 $30B）、Nebius 2024-2026 实际/指引营收。2028-2035 为本分析基于 50% Neocloud CAGR 推演。',
        },

        radar: {
            peer1Name: 'CoreWeave',
            peer2Name: 'Lambda',
            // 0-10 分量化评分，方便雷达图可视化
            dimensions: [
                { dim: '收入规模', self: 3, peer1: 9, peer2: 2 },
                { dim: '增长速度', self: 9, peer1: 8, peer2: 5 },
                { dim: '盈利能力', self: 3, peer1: 9, peer2: 4 },
                { dim: '英伟达绑定', self: 10, peer1: 7, peer2: 5 },
                { dim: '欧洲/主权定位', self: 10, peer1: 2, peer2: 3 },
                { dim: '资产负债表健康', self: 9, peer1: 5, peer2: 4 },
                { dim: '客户分散度', self: 3, peer1: 5, peer2: 7 },
                { dim: '软件栈完整性', self: 8, peer1: 7, peer2: 5 },
            ],
            note: '1-10 分主观评分。Nebius 的"形状"告诉你它在什么维度上有**结构性优势**（英伟达绑定、欧洲定位、资产负债表、增速），哪些维度是**结构性短板**（收入规模、盈利能力、客户分散度）。越不规则的多边形 = 越明显的差异化定位。',
        },
    },

    valuation: {
        metrics: [
            { metric: 'EV/Sales (TTM)', value: '~47-65x', benchmark: '行业均值 10-15x', read: 'rich' },
            { metric: 'EV/Sales (2026E)', value: '~7-8x', benchmark: 'CoreWeave ~5x', read: 'fair' },
            { metric: 'EV/ARR (Exit 2026)', value: '~4-5x', benchmark: 'SaaS 平均 8-12x', read: 'cheap' },
            { metric: 'P/B', value: '6.28x', benchmark: 'CoreWeave 10.15x', read: 'cheap' },
            { metric: '2026 EBITDA 倍数', value: 'N/M (EBITDA 亏损 → 盈利转折点)', benchmark: '-', read: 'fair' },
            { metric: 'Forward P/E', value: 'N/A (仍亏损)', benchmark: '-', read: 'fair' },
        ],
        sotp: [
            { item: '核心 AI 云 (2026E)', valuation: '$28-32B', method: '7x 2026E 营收 ($3-3.4B × 7-9x)', note: '可比: CoreWeave 5-6x, 主权溢价给 7-9x' },
            { item: 'Avride', valuation: '$4.2B', method: '83% × $15B Uber 定价', note: '2027-2028 IPO 退出' },
            { item: 'Toloka (少数股权)', valuation: '$0.5B', method: 'Bezos 轮推算', note: '已 deconsolidate' },
            { item: 'TripleTen + ClickHouse 股权', valuation: '$0.3-0.5B', method: '营收倍数 / 比较交易', note: '保守估计' },
            { item: '现金净额', valuation: '$2-3B', method: '现金 $6B − 可转债调整 $4.34B', note: '扣除净债务' },
        ],
        sotpTotal: '$35-40B',
        sotpPerShare: '对应合理区间 $145-170 (当前 $167 位于区间上沿)',
    },

    recommendation: {
        rating: '持有 · 分批建仓',
        ratingCls: 'neutral',
        timeHorizon: '3-5 年（10 年视角下的中期节奏）',
        positionSize: '5-8% 组合权重上限 · 高成长卫星仓',
        addingZone: '$130-145 （Cantor 目标价下限 + 技术支撑）',
        stopLoss: '微软 / Meta 任一合同重大修订或 2026 Q2 指引下修 → 重新评估',
        thesis:
            '当前 $167 已接近共识目标价 $163，风险收益比不再对称。合同积压提供下行保护（SOTP 底在 $140），但上行需要"商业模式跃迁"（概率 ~12%）才能打开 Mag 7 级空间。适合作为 AI 基础设施敞口的一部分，与 CoreWeave、英伟达、甲骨文搭配降低单一执行风险。',
        keyAssumptions: [
            '微软合同 2027 全年 run-rate 如期实现',
            'Meta 合同 2027 Q1 开始交付，无实质延期',
            '再融资发生但稀释 <15%',
            '欧洲主权 AI 合同 2027-2028 出现至少 1 单 $1B+',
            '2028 年前 AI capex 周期不进入下行阶段',
        ],
        sizingFormula: {
            method: 'Kelly 公式（保守版，使用 1/2 Kelly）',
            formula: 'f* = (期望回报率 − 无风险利率) / 方差 × 0.5',
            inputs: [
                { label: '10Y 期望回报率', value: '24% CAGR' },
                { label: '无风险利率', value: '4.5% (10Y 国债)' },
                { label: '情景标准差', value: '~45%' },
                { label: '完整 Kelly', value: '~10%' },
                { label: '1/2 Kelly (保守)', value: '~5%' },
            ],
            computedSize: '5-8% 组合权重',
            reasoning:
                '完整 Kelly 假设概率估算准确（12% / 55% / 25% / 8%）。但情景概率本身有主观误差，且 Nebius 存在尾部风险（地缘 / 合同单点 / GPU 代际切换），应取 1/2 到 3/4 Kelly。范围 5-8% 是标准做法：下限 5% 当概率估算不确定时用；上限 8% 仅当你对创始人 + 合同积压极有把握。',
        },
    },

    keyPersonRisks: [
        {
            name: 'Arkady Volozh (CEO · 创始人)',
            role: '战略决策 · 投资人关系 · 合同谈判',
            departProb: '低 (~5% / 5 年)',
            departImpact: '极高 —— 股价短期 -20%，长期战略执行能力打折',
            mitigation: '已有 Yandex 到 Nebius 的过渡经验，但没有明确继任者',
            criticality: 'critical',
        },
        {
            name: '核心技术团队（原 Yandex 骨干）',
            role: '自研软件栈 · GPU 集群运营',
            departProb: '中 (~20% 流失 / 5 年)',
            departImpact: '中 —— 关键工程师流失拖慢 Soperator/Slurm 迭代',
            mitigation: '团队深度 3-5 层，Amsterdam 有吸引力的 remote + equity',
            criticality: 'high',
        },
        {
            name: 'Jon Teherani (CCO)',
            role: '超大客户商务 · 英伟达关系',
            departProb: '中 (~15% / 5 年)',
            departImpact: '中高 —— 微软/Meta 后续续约可能受影响',
            mitigation: '核心合同已锁定 5 年，替代者可从英伟达/AWS GTM 招募',
            criticality: 'high',
        },
        {
            name: 'Charles Ryan (非执行董事长)',
            role: '公司治理 · 机构股东关系',
            departProb: '低 (~8% / 5 年)',
            departImpact: '中 —— 过渡可靠，董事会深度足够',
            mitigation: 'UFG 背景丰富，董事会继任者池充足',
            criticality: 'medium',
        },
    ],

    cashFlow: {
        narrative:
            '对重资本公司，**现金流比利润重要 10 倍**。Nebius 2025-2027 是"烧钱建设期"，自由现金流深度为负；2028 开始靠微软 + Meta 合同付款回血，2029-2030 实现稳态正现金流。**关键观察指标：OCF / Revenue 比率** —— 决定未来不依赖融资的可持续性。',
        rows: [
            { year: '2024', ocf: -180, icf: -600, fcf: 720, freeCashFlow: -480, status: 'actual' },
            { year: '2025', ocf: -65, icf: -2000, fcf: 2200, freeCashFlow: -2065, status: 'actual' },
            { year: '2026E', ocf: 800, icf: -18000, fcf: 9500, freeCashFlow: -9200, status: 'estimate' },
            { year: '2027E', ocf: 3500, icf: -12000, fcf: 5000, freeCashFlow: -5500, status: 'estimate' },
            { year: '2028E', ocf: 6500, icf: -8000, fcf: 1500, freeCashFlow: -1500, status: 'estimate' },
            { year: '2029E', ocf: 8000, icf: -6000, fcf: 0, freeCashFlow: 2000, status: 'estimate' },
            { year: '2030E', ocf: 10000, icf: -5000, fcf: -500, freeCashFlow: 5000, status: 'estimate' },
        ],
        conversionNote:
            'Cash Conversion Ratio = OCF / Net Income。SaaS 健康水位 >1.2x，Neocloud 因折旧重通常 0.8-1.2x。Nebius 2028+ 预期稳定在 1.1-1.3x（合同预付款改善 OCF）。',
        keyRisks: [
            '微软 / Meta 预付比例若下降（目前 60% 预付），OCF 路径整体后移 1-2 年',
            '2028 前任何大规模 GPU 减值会造成 OCF 单季度锐减',
            '再融资若被迫发股权（非可转债），稀释但不影响 OCF；发优先债则利息支付压 OCF',
        ],
    },

    historicalValuation: {
        narrative:
            'Nebius 2024-10 才重新上市，历史不长。使用**季度 forward EV/Sales** 分位。当前 47x（TTM）/ 7-8x（2026E）—— 在自己上市以来区间的 **85% 分位**（偏贵），但在 Neocloud 同业里属中位（CoreWeave 曾高达 15x forward）。',
        history: [
            { period: '2024-Q4', evSales: 35, note: '上市初期，市值小' },
            { period: '2025-Q1', evSales: 22, note: '估值消化' },
            { period: '2025-Q2', evSales: 28, note: '首份 Q1 财报后' },
            { period: '2025-Q3', evSales: 40, note: '微软合同公布' },
            { period: '2025-Q4', evSales: 55, note: 'Q4 ARR 超指引' },
            { period: '2026-Q1', evSales: 62, note: 'Meta 合同 + 英伟达入股' },
            { period: '2026-Q2', evSales: 47, note: '情绪回落，当前位置' },
        ],
        currentPercentile: '85%',
        verdict: 'rich',
    },

    downsideMetrics: {
        narrative:
            '只看期望值 9.1x 是 research theater。真正的决策框架需要**下行分布**。基于 4 档情景，Nebius 10Y **情景标准差约 $470B**（1.3x 期望值），波动极大。**5Y 内亏损 30%+ 的概率约 25%** —— 不能承受这种回撤就不该上 5-8% 仓位。',
        scenarioStdDev: 470,
        sharpeLike: 0.78,
        probLoss30Pct5Y: 25,
        maxDrawdownEstimate: '-40% 到 -60%（参考 CoreWeave 2024 IPO 后首次回调）',
        downsideToUpsideRatio: '下行 1 vs 上行 8（单次下跌 $15B，单次上冲 $120B）',
    },

    sensitivity: {
        narrative: '哪个变量对 10Y 期望市值最敏感？按单变量 ±1σ 扰动排序 ——',
        variables: [
            { variable: '微软合同交付延期 ±6 个月', downImpact: -85, upImpact: 20, description: '5 年 run-rate 推后，收入曲线整体右移' },
            { variable: 'Meta 合同 ±20% 规模', downImpact: -60, upImpact: 80, description: 'Meta 签更多产能或削减' },
            { variable: '2028 EBITDA margin ±10pp', downImpact: -70, upImpact: 90, description: 'GPU 折旧 / 定价压力' },
            { variable: '欧洲主权合同 0 vs 2 单 $2B+', downImpact: -40, upImpact: 120, description: 'Mag 7 级情景的关键触发器' },
            { variable: '再融资稀释 ±10pp', downImpact: -35, upImpact: 15, description: '股权稀释直接影响每股权益' },
            { variable: 'Avride IPO 估值 ±50%', downImpact: -12, upImpact: 15, description: 'SOTP 期权价值' },
            { variable: 'AI 基建 CAGR ±10pp', downImpact: -55, upImpact: 100, description: '行业整体增速' },
        ],
        takeaway:
            '**最敏感三变量：AI 基建 CAGR、微软合同、EBITDA margin**。每季度追踪时优先看这三项，而不是股价或短期新闻。',
    },

    bearPlaybook: {
        scenario: '"悲观：规模被压 / 价格战"（25% 概率）的完整 ruin 路径',
        steps: [
            {
                when: '2026 Q4 - 2027 Q2',
                event: '微软完成自建 1.5GW 数据中心，续约需求减半',
                signal: '微软 capex 指引上修 + 新 Azure AI 数据中心公告密集',
            },
            {
                when: '2027 Q2 - Q4',
                event: 'CoreWeave 借微软业务爆发筹 $10B+，规模优势扩大到 5x',
                signal: 'CRWV 市占率持续高于 2x NBIS + 财报 YoY 超 150%',
            },
            {
                when: '2028 Q1 - Q3',
                event: 'GPU 代际切换（Rubin）导致 B200 残值下杀，Nebius 计提 $1B+ 减值',
                signal: '英伟达 Rubin 交付时间线 + 二手 GPU 挂牌价暴跌',
            },
            {
                when: '2028 Q3',
                event: '为维持建设节奏被迫 $3-5B 股权定增，稀释 15-20%',
                signal: '投行调研 + 股价长期低迷',
            },
            {
                when: '2029',
                event: 'Meta 第二阶段合同重新谈判，单价降 20%',
                signal: 'Meta 季报 capex 指引下修 + AI 基建分析师降级',
            },
            {
                when: '2030',
                event: '市值稳定在 $80-120B，未能进入千亿梯队',
                signal: '多季度 YoY 增速 < 50%',
            },
        ],
        exitTrigger:
            '任一步骤在时间表前 1 个季度提前发生 → **减仓 50%**。连续 2 条发生 → **清仓观望**。',
    },

    capitalAllocation: {
        narrative:
            'Nebius 是"超资本强度"生意，**资本配置能力直接决定 10Y 终局**。Volozh 在 Yandex 时代资本配置历史是正向的（现金流稳健、股东回报清晰）。但 Nebius 刚从重组起步，2024-2026 属于"极端再投资期"，没有分红、没有回购——这是阶段性特征而非管理层偏好。关键判断：2027-2029 FCF 转正后，Volozh 会选择继续扩张、回购还是分红？Yandex 先例倾向"边扩张边回购"。',
        scores: [
            { dimension: 'ROIIC', label: '增量资本回报率', score: 3, detail: '2026 CapEx/Rev ~5-6x 说明 ROIIC 不可能很高（<10%）；但客户预付款覆盖 60% 降低真实增量资本成本', evidence: '2026 指引 CapEx $16-20B · 营收 $3-3.4B' },
            { dimension: 'Buyback', label: '回购节奏', score: 2, detail: '2024-2026 无回购；处于融资扩张阶段。可转债发行 $4.34B 反而是稀释', evidence: '公司 2026-03 可转债条款' },
            { dimension: 'Dividend', label: '股息政策', score: 1, detail: '无股息，不太可能 2030 前启动', evidence: '公司指引' },
            { dimension: 'M&A', label: '并购命中率', score: 4, detail: '历史上 Avride / Toloka / TripleTen 孵化成功 · 子公司期权价值 ~$5B；Yandex 时代并购记录良好', evidence: 'Avride Uber 领投 $15B 估值；Bezos 投 Toloka' },
        ],
        overallGrade: 'C',
        historicalROIIC: '~5-8% (2024-2026 估算 · 扩张期偏低)',
    },

    gapAnalysis: {
        narrative:
            '管理层对 2026 指引相对激进（ARR $7-9B · EBITDA margin 40%），但卖方共识显著更低。真正的风险是"管理层承诺 vs 卖方共识"gap 太大——任一季度低于管理层指引下限，就会触发股价 -15-20%。',
        rows: [
            { metric: '2026 ARR Exit', guidance: '$7-9B', consensus: '$6.5-7.5B', selfAssumption: '$6.8B', gap: '+15% (管理层 vs 共识)', risk: 'high', note: '管理层更乐观' },
            { metric: '2026 Adj EBITDA margin', guidance: '40%', consensus: '32-35%', selfAssumption: '35%', gap: '+5-8pp (高)', risk: 'high', note: '可能是最大爆雷点' },
            { metric: '2026 CapEx', guidance: '$16-20B', consensus: '$15-18B', selfAssumption: '$17B', gap: '基本一致', risk: 'low' },
            { metric: '2027 Meta 合同收入确认', guidance: '起步', consensus: '$2-3B', selfAssumption: '$1.5B (保守)', gap: '-1B 保守', risk: 'medium', note: '我比共识保守' },
            { metric: '2030 营收', guidance: '未指引', consensus: '$25-35B', selfAssumption: '$30B', gap: '中值', risk: 'medium' },
        ],
        takeaway:
            '**最关键 Gap：2026 EBITDA margin 40% vs 卖方 32-35%**。这 5-8pp 的差距决定 Nebius 是"40% margin SaaS-like"还是"AI 时代的 OCI（25% margin）"。Q2-Q3 2026 真实交付数据会揭晓答案，做好 ±20% 股价波动准备。',
    },

    benchmarkComparison: {
        narrative:
            '任何单股决策都必须与"被动持有指数 + 国债"对照。若单股 10Y 超额回报 <5%，直接买 ETF 更省心。Nebius 10Y 期望 CAGR 24% vs 被动 60/40 组合 7.8%——超额 16pp，**显著 justify 3-5% 仓位**。但这个超额高度依赖"中性情景兑现"（55% 概率），情景概率错 10% 就会让超额 CAGR 从 16pp 跌到 10pp。',
        alternatives: [
            { name: 'SPY (S&P 500)', ticker: 'SPY', expectedReturn5Y: 9, expectedReturn10Y: 10, note: '美国宽基 · 历史长期回报' },
            { name: 'QQQ (纳斯达克 100)', ticker: 'QQQ', expectedReturn5Y: 10, expectedReturn10Y: 12, note: '科技权重 · 高波动' },
            { name: '60/40 (SPY + TLT)', expectedReturn5Y: 7, expectedReturn10Y: 8, note: '经典稳健组合' },
            { name: '10Y 美债 (TLT)', ticker: 'TLT', expectedReturn5Y: 4, expectedReturn10Y: 4.5, note: '无风险利率基准' },
            { name: '纯 AI 组合 (NVDA+MSFT+GOOG)', expectedReturn5Y: 14, expectedReturn10Y: 15, note: 'AI 行业暴露对照' },
        ],
        selfReturn5Y: 31,
        selfReturn10Y: 24,
        excessReturn5Y: 23,
        excessReturn10Y: 16,
        justifiesPosition: 'yes',
        takeaway:
            '**超额 16pp CAGR 足以 justify 3-5% 单股仓位**，但如果你已持有 NVDA+MSFT+GOOG 组合（CAGR ~15%），Nebius 的边际超额只有 9pp——仍然有吸引力，但要控制在 3% 以内避免 AI 敞口过度集中。',
    },

    trackRecord: {
        narrative:
            '本分析锚定 2026-04-17，以下 6 条假设是未来 12-24 个月的可验证命题。每季度回看，连续 2 条 miss → 重新评估整个框架。',
        assumptions: [
            { assumption: '2026 Q2 Adj EBITDA margin ≥ 30%', setAt: '2026-04-17', targetDate: '2026-08-31', targetValue: '≥ 30%', verdict: 'pending', note: '指引 40% 的第一次真实检验' },
            { assumption: '2026 末 ARR ≥ $7B', setAt: '2026-04-17', targetDate: '2027-02-28', targetValue: '≥ $7B', verdict: 'pending', note: '指引下限' },
            { assumption: 'Meta 合同 2027 Q1 开始收入确认', setAt: '2026-04-17', targetDate: '2027-05-15', targetValue: '≥ $0.5B Q1 贡献', verdict: 'pending', note: '合同兑现关键节点' },
            { assumption: 'Volozh 2026 年底前不离任 CEO', setAt: '2026-04-17', targetDate: '2026-12-31', targetValue: '仍任 CEO', verdict: 'pending', note: '创始人风险' },
            { assumption: '2026 年末连接电力 ≥ 800MW', setAt: '2026-04-17', targetDate: '2027-02-28', targetValue: '≥ 800MW', verdict: 'pending', note: '产能兑现' },
            { assumption: '2027 H1 出现至少 1 个新 $1B+ 客户', setAt: '2026-04-17', targetDate: '2027-06-30', targetValue: '1 个新单', verdict: 'pending', note: '客户多元化' },
        ],
        hitRate: 'N/A (全部 pending · 首次建立 track record)',
    },

    dataSources: {
        narrative: '本报告数据锚定 2026-04-17。以下为核心数据点的可追溯来源。情景概率、10Y 期望、SOTP 估值均为本分析的主观推演，不构成第三方意见。',
        accessedAt: '2026-04-17',
        sources: [
            { label: 'Nebius Q4 2025 财报', url: 'https://group.nebius.com/investors', category: 'primary', publishedAt: '2026-02', note: '营收 $530M / ARR $1.2B / 2026 指引' },
            { label: 'SEC 6-K 微软合同披露', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001810019&type=6-K', category: 'primary', publishedAt: '2025-09' },
            { label: 'Meta 合同 CNBC 报道', url: 'https://www.cnbc.com', category: 'secondary', publishedAt: '2026-03-16' },
            { label: 'Goldman Sachs 目标价 $205', url: 'https://seekingalpha.com/symbol/NBIS', category: 'research', publishedAt: '2026-03' },
            { label: 'CoreWeave 2025 年报（对比）', url: 'https://investors.coreweave.com', category: 'primary' },
            { label: '英伟达 8.3% 入股公告', url: 'https://nvidianews.nvidia.com', category: 'primary', publishedAt: '2026-03-11' },
            { label: 'Avride Uber 领投 $15B 估值', url: 'https://www.uber.com/newsroom/', category: 'secondary', publishedAt: '2025' },
            { label: 'IDC AI 基建 TAM 预测', url: 'https://www.idc.com', category: 'research' },
            { label: 'Yahoo Finance NBIS 历史价', url: 'https://finance.yahoo.com/quote/NBIS/', category: 'data' },
        ],
    },

    correlation: {
        narrative:
            'Nebius 不是独立资产，它的涨跌 70-80% 由 AI 基建情绪驱动。如果你已持有英伟达 / 微软 / CoreWeave，加 Nebius 的**边际多元化几乎为零**。真正的 hedge 应该是**反相关或低相关**的资产。',
        rows: [
            { asset: 'CoreWeave (CRWV)', beta: 1.3, correlation: 0.82, hedgeValue: 'low', note: '同赛道高度相关，共涨共跌' },
            { asset: '英伟达 (NVDA)', beta: 1.1, correlation: 0.75, hedgeValue: 'low', note: 'AI 基建情绪主导' },
            { asset: '微软 (MSFT)', beta: 0.7, correlation: 0.55, hedgeValue: 'medium', note: '客户同时是对手，复杂' },
            { asset: '甲骨文 (ORCL)', beta: 0.6, correlation: 0.50, hedgeValue: 'medium', note: '企业云对冲' },
            { asset: '特斯拉 (TSLA)', beta: 0.8, correlation: 0.45, hedgeValue: 'medium', note: '另一个高贝塔成长股' },
            { asset: '10Y 国债 (TLT)', beta: -0.3, correlation: -0.35, hedgeValue: 'high', note: '避险资产，加息周期反向' },
            { asset: '黄金 (GLD)', beta: -0.1, correlation: -0.15, hedgeValue: 'high', note: '宏观对冲' },
        ],
        suggestedHedge:
            '如果 Nebius 占组合 5-8%，建议搭配 5-10% TLT + 3-5% GLD 作为尾部保护。AI 情绪崩盘时这两类资产通常上涨，能抵消 Nebius 30-50% 的下行。',
    },
}
