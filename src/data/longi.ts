import type { CompanyDetail } from '@/types/company'

export const longi: CompanyDetail = {
    id: 'longi',
    ticker: 'SH:601012',
    name: '隆基绿能 LONGi Green Energy',
    tagline:
        '曾经的全球光伏王者（2021 巅峰市值 ¥4,500 亿、PE 70x）2024 年首次年度亏损 -¥86 亿，股价从 ¥75 跌至 ¥18 = -76%。**典型 deep value 困境反转标的**——2024 全行业最差时点已现，PB 1.4x 处于上市以来 <5% 分位，现金 ¥460 亿可撑 3 年亏损，HPBC 2.0 量产是翻身关键。组件 + 硅片全球出货第一身位仍在，但 HPBC vs TOPCon 技术路线之争 + 行业产能严重过剩仍是最大变量。**与阳光电源（同赛道 quality compounder）形成最完整对照** —— 同样是 A 股光伏赛道、同样技术派创业家，但一个在储能爆发期、一个在组件最差期。',
    date: '2026-05-06',

    priceCards: [
        { label: '当前股价', value: '~¥18', sub: '2026-05-06 估算', cls: 'cyan' },
        { label: '52 周波动', value: '¥14 – ¥28', sub: '从 ¥75 巅峰 -76%', cls: 'red' },
        { label: '市值', value: '~¥1,360 亿', sub: '约 76 亿股流通', cls: 'purple' },
        { label: 'PB（市净率）', value: '~1.4x', sub: '历史 <5% 分位 · 极便宜', cls: 'green' },
        { label: '2024 营收', value: '¥825 亿', sub: '-36% YoY', cls: 'red' },
        { label: '2024 归母净利润', value: '-¥86 亿', sub: '首次年度亏损', cls: 'red' },
    ],

    keyFacts: {
        '2024 营收': '¥825 亿 (-36% YoY)',
        '2024 归母净利润': '-¥86 亿 (首次年度亏损)',
        '2024 综合毛利率': '~8% (历史最低)',
        '2024 净利率': '-10%',
        '2024 ROE': '-10%',
        '2024 海外营收占比': '~38% (vs 阳光 48%)',
        '2025 Q1 净利润': '-¥18 亿 (亏损收窄信号)',
        '组件全球市占': '~17-19% (连续多年第一)',
        '硅片全球市占': '~24-26% (连续多年第一)',
        'HPBC 量产产能 2025E': '~50 GW',
        '资产负债率': '~58% (健康)',
        '现金及等价物': '~¥460 亿 (可撑 3 年亏损)',
        '股价 5 年回撤': '-76% (¥75 → ¥18)',
        '高峰市值 (2021)': '¥4,500 亿 (PE 70x · PB 12x)',
    },

    contracts: [
        { customer: '中东大型组件订单（沙特/阿联酋）', amount: '~¥150 亿（潜在）', years: '2026-2027 交付', detail: '沙特 NEOM + 阿联酋 Masdar 项目，正在洽谈' },
        { customer: '国内五大发电集团', amount: '年度框架', years: '长期', detail: '国家电投 / 大唐 / 华能等' },
        { customer: 'HPBC 2.0 量产产能', amount: '50GW（2025E）→ 100GW（2027E）', years: '持续投产', detail: '第二代背接触电池技术，效率 26%+，行业领先' },
        { customer: '全球分销网络', amount: '130+ 国家', years: '长期', detail: '组件出口能力强，但海外占比 38% 低于阳光 48%' },
        { customer: '氢能电解槽订单', amount: '~¥15 亿（已签）', years: '2026-2028', detail: '中东大型绿氢项目，期权价值' },
    ],

    subsidiaries: [
        { name: '光伏组件业务', desc: '全球第一 (~17-19% 市占)，但价格腰斩', stake: '核心', value: '~¥630 亿（2027 SOTP 反转后）' },
        { name: '单晶硅片业务', desc: '全球第一 (~24-26%)，30 年技术沉淀', stake: '核心', value: '~¥600 亿（2027 SOTP 反转后）' },
        { name: 'HPBC 电池业务', desc: '第二代背接触技术，2025-2026 量产关键期', stake: '核心', value: '~¥750 亿（2027 SOTP 反转后）' },
        { name: 'BIPV（建筑光伏一体化）', desc: '行业先行布局，规模小', stake: '战略', value: '~¥150 亿（隐含期权）' },
        { name: '氢能业务（电解槽）', desc: '中东大型订单已落地，2030 后规模化期权', stake: '战略', value: '~¥100 亿（期权）' },
    ],

    bullPoints: [
        { title: '股价已从 ¥75 跌至 ¥18 = -76%，下行大部分释放', body: '2021 巅峰至今 5 年腰斩三次，最坏情景的大部分回撤已发生；从当前位置再跌 50% 概率不高' },
        { title: '现金 ¥460 亿是同行难匹敌的"过冬粮草"', body: '可支撑 3 年亏损 + HPBC 投产，是隆基比晶澳/天合/通威更有底气熬过周期的关键' },
        { title: 'PB 1.4x 处于上市以来 <5% 分位', body: '极便宜，反映市场对"反转能否兑现"的悲观；vs 2021 PB 12x 已大幅压缩' },
        { title: '组件 + 硅片全球第一身位仍在', body: '即使 2024 行业最差时刻，市占 17-19% / 24-26% 没掉；规模壁垒仍在' },
        { title: 'HPBC 2.0 第二代背接触电池效率 26%+', body: '行业领先 5-7 年技术储备；如果量产顺利，是翻身关键变量' },
        { title: '李振国 + 钟宝申 30 年技术派创业搭档', body: '北大物理系同学，2014-2021 是 A 股最优质资本配置者之一；能否找回纪律是关键' },
        { title: '行业 2026 H2 出清预期 + 海外大订单', body: '小厂商已在退出，组件价格 2025 Q4 见底信号；中东 GW 级订单在洽谈' },
    ],

    bearPoints: [
        { title: '2024 首次年度亏损 -¥86 亿是巨大信誉冲击', body: '机构持仓抛售（QFII 持仓 -50%），亏损公司估值倍数难以快速恢复' },
        { title: 'HPBC vs TOPCon 技术路线赌错的代价还没还完', body: '2022-2023 押注 HPBC 错过 TOPCon 主流红利；HPBC 2.0 必须证明自己，否则又是 5-7 年错失' },
        { title: '行业产能严重过剩仍未到底', body: '2023-2025 中国光伏产能 vs 全球需求 2-3x，价格战可能持续到 2027；隆基不能控制行业出清节奏' },
        { title: '组件业务周期性极强', body: '组件价格 2022 ¥2/W → 2024 ¥0.7/W = 单年跌 65%；2025 Q1 仍在 ¥0.7-0.8/W 低位徘徊' },
        { title: '海外占比 38% 比阳光 52% 低', body: '国内价格战暴露更大；海外多元化能力不及阳光' },
        { title: '业务结构单一 · 缺乏储能等增长极', body: '几乎全部依赖光伏赛道，没有阳光那种"逆变器+储能 + AI 数据中心"的多引擎' },
        { title: 'ROIIC 大幅下滑：2022 28% → 2024 -10%', body: '近 3 年大额资本开支后产能利用率下降，回报严重不佳' },
        { title: '困境反转时点和幅度高度不确定', body: '2025 不一定能扭亏；2026 H2 行业反转是 50% 概率事件，赔率工具不是确定性投资' },
    ],

    scenarios: [
        {
            name: '超级牛市: 行业反转 + HPBC 翻身 + 海外突破',
            cls: 'bull',
            prob: 15,
            y5Mcap: '¥4,500 - 5,500 亿',
            y5Value: 5000,
            y10Mcap: '¥10,000 - 14,000 亿',
            y10Value: 12000,
            desc: '行业 2026 H2 出清完成 + HPBC 2.0 效率 26.5%+ + 海外占比突破 50%；2030 重回巅峰营收 ¥2,000 亿，净利润 ¥200 亿；技术 + 全球化双兑现',
        },
        {
            name: '基线: 行业稳定回暖 + 市占率维持',
            cls: 'bull',
            prob: 35,
            y5Mcap: '¥2,200 - 2,800 亿',
            y5Value: 2500,
            y10Mcap: '¥4,500 - 5,500 亿',
            y10Value: 5000,
            desc: '行业出清 2027 完成；HPBC 2.0 量产顺利但不超预期；组件价格回升至 ¥1/W；2030 营收 ¥1,400 亿，净利润 ¥100 亿',
        },
        {
            name: '横盘: 价格战持续 + 缓慢恢复',
            cls: 'neutral',
            prob: 30,
            y5Mcap: '¥1,300 - 1,700 亿',
            y5Value: 1500,
            y10Mcap: '¥2,200 - 2,800 亿',
            y10Value: 2500,
            desc: '产能出清拖到 2028；HPBC 2.0 量产但效率仅 25-25.5%；组件价格 ¥0.85/W 缓慢恢复；2030 营收 ¥1,000 亿，净利润 ¥30 亿',
        },
        {
            name: '熊市: 技术路线再次错误 + 持续亏损',
            cls: 'bear',
            prob: 20,
            y5Mcap: '¥700 - 900 亿',
            y5Value: 800,
            y10Mcap: '¥800 - 1,200 亿',
            y10Value: 1000,
            desc: 'HPBC 2.0 量产效率不及预期 (<25%)；行业产能出清拖到 2029；组件价格 <¥0.7/W；2030 营收 ¥700 亿，仍亏损或微利；现金消耗严重',
        },
    ],

    tenXGene: [
        { dim: '软件边际成本 · 规模化杠杆', tenBagger: '边际成本 ≈ 0', nebius: '制造业有边际成本，且产能过剩；规模优势被周期掩盖', status: 'red' },
        { dim: '网络/平台效应', tenBagger: '显著', nebius: '硬件商，无网络效应；组件 + 硅片是 commodity 倾向', status: 'red' },
        { dim: '数据闭环 / 专属资产', tenBagger: '独占数据 / IP / 规模', nebius: '30 年硅片技术 + HPBC 专利积累，但短期被技术周期掩盖', status: 'yellow' },
        { dim: '毛利率 · 定价权', tenBagger: '60-80% 可持续', nebius: '8% 毛利完全没定价权 (2021 是 22%，已腰斩)', status: 'red' },
        { dim: '消费者触点 / 品牌', tenBagger: '直接 C 端 / 开发者心智', nebius: 'B2B 业务，但全球出货第一品牌力强；BIPV 有 C 端潜力', status: 'yellow' },
        { dim: '再投资空间 · S-curve', tenBagger: '高 ROIC + 大 TAM', nebius: 'TAM 大但 ROIC -10%；产能扩张到位后再投资空间有限', status: 'red' },
        { dim: '管理层 · 跨代际转型', tenBagger: '有过 0→$30B 记录', nebius: '李振国 + 钟宝申 2014-2021 有过 ¥10 亿 → ¥4,500 亿记录，但近 3 年战略错误', status: 'yellow' },
    ],

    weightedExpectation: {
        currentMcap: 1360,
        y5: {
            expectedMcap: 2235,
            multiplier: 1.64,
            cagr: 10.4,
        },
        y10: {
            expectedMcap: 4500,
            multiplier: 3.31,
            cagr: 12.7,
        },
        breakdown: [
            { scenario: 'A. 超级牛市', prob: 15, y5Mid: 5000, y10Mid: 12000, y5Contrib: 750, y10Contrib: 1800 },
            { scenario: 'B. 基线', prob: 35, y5Mid: 2500, y10Mid: 5000, y5Contrib: 875, y10Contrib: 1750 },
            { scenario: 'C. 横盘', prob: 30, y5Mid: 1500, y10Mid: 2500, y5Contrib: 450, y10Contrib: 750 },
            { scenario: 'D. 熊市', prob: 20, y5Mid: 800, y10Mid: 1000, y5Contrib: 160, y10Contrib: 200 },
        ],
    },

    peerName: '阳光电源（300274）',
    coreWeaveCompare: [
        { metric: '2024 营收 YoY', nbis: '-36%', cwv: '+7.8%', winner: 'cwv' },
        { metric: '2024 净利润', nbis: '-¥86 亿', cwv: '+¥110 亿', winner: 'cwv' },
        { metric: '2024 毛利率', nbis: '8%', cwv: '30.5%', winner: 'cwv' },
        { metric: 'ROE', nbis: '-10%', cwv: '22%', winner: 'cwv' },
        { metric: '海外营收占比', nbis: '38%', cwv: '52%', winner: 'cwv' },
        { metric: 'PB / PE 估值', nbis: 'PB 1.4x（历史最低）', cwv: 'PE 13.5x（5-15 分位）', winner: 'nbis' },
        { metric: '股价回撤', nbis: '-76%（已发生）', cwv: '-55%（高点起算）', winner: 'nbis' },
        { metric: '业务结构', nbis: '光伏单赛道', cwv: '逆变器+储能+AI 数据中心', winner: 'cwv' },
    ],

    analysts: [
        { firm: '中信证券（最高）', target: 28, rating: '买入' },
        { firm: '华泰证券', target: 25, rating: '增持' },
        { firm: '共识 (28 家覆盖)', target: 22, rating: '增持' },
        { firm: '招商证券', target: 21, rating: '增持' },
        { firm: '海通国际', target: 19, rating: 'Hold · 反转待验证' },
        { firm: '高盛 (最低)', target: 14, rating: 'Sell · 担忧 HPBC 量产' },
    ],

    watchlist: [
        { indicator: '季度毛利率', strongSignal: '> 15%', baseSignal: '10-13%', weakSignal: '< 8%' },
        { indicator: '季度净利润 (亿)', strongSignal: '> +¥10', baseSignal: '-¥5 至 +¥5', weakSignal: '< -¥10' },
        { indicator: 'HPBC 量产效率', strongSignal: '> 26%', baseSignal: '25.5-26%', weakSignal: '< 25%' },
        { indicator: '现金及等价物 (亿)', strongSignal: '> ¥420', baseSignal: '¥350-400', weakSignal: '< ¥320' },
        { indicator: '国内组件价格 (元/W)', strongSignal: '> ¥0.9', baseSignal: '¥0.7-0.85', weakSignal: '< ¥0.65' },
    ],

    finalQuote:
        '<strong>典型 deep value 困境反转标的</strong>——曾经的光伏王者跌至上市以来最低估值分位（PB 1.4x · <5% 分位），股价已 -76%，下行大部分释放。但**这不是 quality compounder（与阳光电源对照鲜明）**，是**赌"光伏行业最差时刻已过 + HPBC 2.0 翻身"的赔率工具**。**机会成本是阳光电源**——同样 A 股光伏赛道、同样技术派创业家，但阳光在储能爆发期（quality compounder），隆基在组件最差期（困境反转）。**仓位 1-3% 小仓位逆向投机**，与阳光电源 4% 配合形成"光伏赛道双仓位"（爆发期 + 反转期对冲）。**关键观察**：HPBC 2.0 量产效率 + 行业产能出清节奏 + 现金消耗速度三件事——任一恶化即触发减仓。最大优势是**最坏情景已大部分释放**，再深跌 50% 概率不高。',

    revenueChart: {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025E', '2026E'],
        values: [546, 809, 1289, 1294, 825, 780, 900],
        kinds: ['revenue', 'revenue', 'revenue', 'revenue', 'revenue', 'revenue', 'revenue'],
    },

    overview: {
        founded: '2000-04 · 由李振国、钟宝申（北大物理系同学）创立',
        headquarters: '中国 陕西 西安 (高新区)',
        incorporation: '中国 西安',
        employees: '~80,000 (2024 末)',
        listing: '上交所主板 · 601012 · 2012-12 上市',
        history: [
            { year: '2000-04', event: '李振国、钟宝申创立隆基股份，初做半导体硅材料', tag: '创立' },
            { year: '2007', event: '转向光伏单晶硅片，国内龙头', tag: '战略' },
            { year: '2012-12', event: '上交所主板上市', tag: 'IPO' },
            { year: '2014-2019', event: '"硅片成本曲线 + 多晶向单晶转型"成为全球光伏王者', tag: '崛起' },
            { year: '2020', event: '营收 ¥546 亿 (+66% YoY)，组件出货全球第一', tag: '里程碑' },
            { year: '2021', event: '巅峰：市值 ¥4,500 亿，PE 70x，光伏行业市值之王', tag: '巅峰' },
            { year: '2022', event: '营收 ¥1,289 亿 (+59%)，押注 HPBC 技术路线', tag: '战略错误起点' },
            { year: '2023', event: '行业产能过剩开始，TOPCon 成为主流，隆基 HPBC 错失', tag: '错失' },
            { year: '2024-Q4', event: '组件价格腰斩至 ¥0.7/W，**首次年度亏损 -¥86 亿**', tag: '危机' },
            { year: '2024-2025', event: '股价从 ¥75 跌至 ¥17 = -77%，机构集体撤离', tag: '低谷' },
            { year: '2025-Q1', event: '亏损收窄至 -¥18 亿，HPBC 2.0 量产准备', tag: '反转信号' },
            { year: '2025 H2', event: 'HPBC 2.0 量产关键观察期', tag: '关键节点' },
            { year: '2026-05-06', event: '股价 ¥18，市值 ¥1,360 亿，PB 1.4x 历史最低分位', tag: '当前' },
        ],
        businessModel:
            '**光伏一体化平台 + 困境反转期**：①**光伏组件（全球第一）**：2024 出货 ~85GW，市占 17-19%，但毛利率从 18% 跌至 5-8%；②**单晶硅片（全球第一）**：30 年技术沉淀，市占 24-26%，毛利率 10-12%；③**HPBC 电池（核心翻身赌注）**：第二代背接触电池技术，2025-2026 量产，效率 26%+；④**BIPV + 氢能**：战略期权业务。**核心争议**：李振国 + 钟宝申 2022-2023 押注 HPBC 错过 TOPCon 主流，是公司从王者跌落的核心战略错误；HPBC 2.0 能否兑现是 5 年内最关键变量。**机会**：行业产能出清 + HPBC 翻身 + 海外大订单三轨道，但都不确定。',
        revenueMix: [
            { name: '光伏组件', pct: 58, note: '全球第一 ~17-19% · 价格腰斩 · 毛利率 5-8%' },
            { name: '单晶硅片', pct: 26, note: '全球第一 ~24-26% · 30 年壁垒 · 毛利率 10-12%' },
            { name: '电池业务（HPBC）', pct: 10, note: '翻身关键 · 2025-2026 量产' },
            { name: 'BIPV + 服务', pct: 4, note: '建筑光伏一体化 · 长期期权' },
            { name: '氢能（电解槽）', pct: 2, note: '中东订单已落地 · 2030 后规模化' },
        ],
    },

    team: [
        {
            name: '李振国',
            role: '总裁 · 联合创始人 · 实控人之一',
            background:
                '北京大学物理系毕业，与钟宝申是同学。1990 年代起步半导体硅材料，2007 年带领隆基转向光伏单晶硅片。2014-2021 是 A 股最优质技术派创业家之一，但 2022-2023 押注 HPBC 技术路线被市场认为是战略错误。**关键风险**：能否找回 2014-2021 的资本配置纪律？持股 ~15%，与公司利益深度绑定。',
            since: '2000',
            rating: 4,
        },
        {
            name: '钟宝申',
            role: '董事长 · 联合创始人 · 实控人之一',
            background:
                '北京大学物理系毕业，与李振国搭档 30 年。负责战略 + 治理 + 资本市场，与李振国互补稳定。是 A 股少见的"双创始人长期搭档"。持股 ~10%。',
            since: '2000',
            rating: 4,
        },
        {
            name: '李文学',
            role: '副总裁 · HPBC 技术负责人',
            background:
                'HPBC（混合钝化背接触）电池技术核心研发负责人。2025-2026 HPBC 2.0 量产效率达成是隆基翻身的关键变量。**他的去留直接决定 HPBC 命运**。',
            rating: 4,
        },
        {
            name: '李华',
            role: 'CFO',
            background:
                '资深财务专家，2024 年首次年度亏损后承担机构沟通 + 资本市场重建任务。',
            rating: 3,
        },
        {
            name: '海外销售总监团队',
            role: '海外渠道 · 130 国市场',
            background:
                '欧洲 / 美国 / 中东 / 印度 / 东南亚多区域负责人，是公司海外占比 38% 的核心推动者；目标 2030 突破 50%。',
            rating: 3,
        },
    ],

    shareholders: [
        { name: '李振国 + 钟宝申 (实控人)', pct: '~25%', type: '创始人', note: '直接持股 + 西安隆基持股平台' },
        { name: '香港中央结算（陆股通）', pct: '~6%', type: '北向资金', note: '2024 减持后回升' },
        { name: '中央汇金 / 国家队', pct: '~2%', type: '战略持仓', note: '2024 困境后增持' },
        { name: '基金重仓（公募 + 私募）', pct: '~12%', type: '机构', note: '2024 大幅减持，2025 Q1 触底回流' },
        { name: 'JP Morgan / Goldman QFII', pct: '~3%', type: '外资', note: '2024 减持 -50%' },
        { name: '员工持股计划', pct: '~2%', type: '内部', note: '2024 推出新一轮激励' },
        { name: '公众流通股 + 散户', pct: '~50%', type: '散户', note: '高散户比例 (机构撤离后)' },
    ],

    advantages: [
        {
            title: '股价已从 ¥75 跌至 ¥18 = -76%（已大部分释放）(估值 ★★★★★)',
            body: '2021 巅峰至今 5 年腰斩三次，最坏情景的大部分回撤已发生。从当前 PB 1.4x（历史 <5% 分位）位置再深跌 50% 概率不高。这是 deep value 标的的核心吸引力。',
            evidence: '历史股价数据；PB 历史分位',
        },
        {
            title: '现金 ¥460 亿是同行难匹敌的"过冬粮草" (财务 ★★★★)',
            body: '可支撑 3 年亏损 + HPBC 投产，是隆基比晶澳/天合/通威更有底气熬过周期的关键。没有这一筹码，反转赌注根本无从谈起。',
            evidence: '2024 年报现金及等价物披露',
        },
        {
            title: '组件 + 硅片全球第一身位仍在 (规模 ★★★★)',
            body: '即使 2024 行业最差时刻，市占 17-19% / 24-26% 没掉。规模壁垒（产能 + 渠道 + 客户）仍在，反转时弹性最大。',
            evidence: 'Wood Mackenzie 全球出货排名 2024',
        },
        {
            title: 'HPBC 2.0 第二代背接触电池技术领先 (技术 ★★★★)',
            body: '效率 26%+ 行业领先；如果 2025-2026 量产顺利，是翻身关键变量。隆基在 HPBC 上比 TOPCon 阵营有 5-7 年技术储备领先。',
            evidence: '行业技术报告；专利数据',
        },
        {
            title: '李振国 + 钟宝申 30 年技术派创业搭档 (治理 ★★★★)',
            body: '北大物理系同学，2014-2021 是 A 股最优质资本配置者之一。"困境反转"的核心问题是他们能否重新找回纪律。最差也比"换帅"风险更小。',
            evidence: '历史股权结构；公开演讲',
        },
        {
            title: '行业 2026 H2 出清预期 + 海外大订单 (赛道 ★★★)',
            body: '小厂商已在退出（中环 2024 -¥98 亿，通威 -¥70 亿）；组件价格 2025 Q4 见底信号；中东 GW 级大订单在洽谈。',
            evidence: '行业产能数据；季度价格跟踪',
        },
        {
            title: 'BIPV + 氢能业务期权 (期权 ★★)',
            body: 'BIPV 是隆基提前布局的"建筑光伏一体化"赛道，2030 后空间巨大；氢能电解槽中东订单已签 ¥15 亿，是第二曲线期权。',
            evidence: 'BIPV 业务披露；氢能订单公告',
        },
    ],

    disadvantages: [
        {
            title: '2024 首次年度亏损 -¥86 亿是巨大信誉冲击',
            body: '机构持仓抛售（QFII 持仓 -50%），亏损公司估值倍数难以快速恢复；卖方分析师评级集体下调；散户对"光伏王者"信心崩塌。',
            evidence: '2024 年报；QFII 持仓变动',
        },
        {
            title: 'HPBC vs TOPCon 技术路线赌错的代价还没还完',
            body: '2022-2023 押注 HPBC 错过 TOPCon 主流红利。如果 HPBC 2.0 量产再次不及预期（效率 <25%），就是又 5-7 年错失，公司可能永远回不到光伏王者地位。',
            evidence: 'TOPCon vs HPBC 出货数据 2023-2024',
        },
        {
            title: '行业产能严重过剩仍未到底',
            body: '2023-2025 中国光伏产能 vs 全球需求 2-3x，价格战可能持续到 2027。隆基不能控制行业出清节奏；同行 5-6 家亏损正常但不退出，硬撑。',
            evidence: 'CPIA 2024 产能报告；行业价格指数',
        },
        {
            title: '组件业务周期性极强',
            body: '组件价格 2022 ¥2/W → 2024 ¥0.7/W = 单年跌 65%。2025 Q1 仍在 ¥0.7-0.8/W 低位徘徊。这种周期性导致估值倍数难以稳定。',
            evidence: '光伏行业组件价格历史数据',
        },
        {
            title: '海外占比 38% 比阳光 52% 低',
            body: '国内价格战暴露更大；海外多元化能力不及阳光（欧洲 / 中东 / 美国 / 印度全面突破）。',
            evidence: '2024 年报地区营收披露',
        },
        {
            title: '业务结构单一 · 缺乏储能等增长极',
            body: '几乎全部依赖光伏赛道，没有阳光那种"逆变器+储能 + AI 数据中心"的多引擎。光伏一个赛道见底意味着公司全面承压。',
            evidence: '2024 营收业务分部',
        },
        {
            title: 'ROIIC 大幅下滑：2022 28% → 2024 -10%',
            body: '近 3 年大额资本开支（HPBC 产能 + 硅片产能扩张）后产能利用率下降，回报严重不佳。2023-2024 累计 FCF -¥100 亿。',
            evidence: '2022-2024 年报 CapEx 数据',
        },
        {
            title: '困境反转时点和幅度高度不确定',
            body: '2025 不一定能扭亏；2026 H2 行业反转是 50% 概率事件。投资者必须接受"赔率工具"性质——下行有底，上行不确定，中位数回报有限。',
            evidence: '历史困境反转案例；行业周期数据',
        },
    ],

    shortTermCatalysts: [
        {
            when: '2026-04-30',
            event: '2025 全年报，亏损收窄到 -¥10 亿以内验证',
            impact: 'positive',
            probability: '~50%',
            magnitude: '+20-30%',
        },
        {
            when: '2026 H2',
            event: 'HPBC 2.0 量产数据超预期（效率 26%+）',
            impact: 'positive',
            probability: '~45%',
            magnitude: '+25-35%',
        },
        {
            when: '2026 H2',
            event: '中东沙特/阿联酋大型组件订单（GW+）落地',
            impact: 'positive',
            probability: '~50%',
            magnitude: '+15-20%',
        },
        {
            when: '2026-2027',
            event: '行业产能出清加速（小厂商退出 + 龙头出清）',
            impact: 'positive',
            probability: '~40%',
            magnitude: '+15-25%',
        },
        {
            when: '2026 H1',
            event: '国内 H1 装机超预期（推进降息 + 政策刺激）',
            impact: 'positive',
            probability: '~35%',
            magnitude: '+10-15%',
        },
        {
            when: '持续',
            event: '美联储降息（光伏 IRR 改善）',
            impact: 'positive',
            probability: '~60%',
            magnitude: '+10-15%',
        },
        {
            when: '2026 H2',
            event: '美国关税进一步升级',
            impact: 'negative',
            probability: '~30%',
            magnitude: '-15-20%',
        },
        {
            when: '2026 H2',
            event: 'HPBC 2.0 量产延迟或不及预期',
            impact: 'negative',
            probability: '~30%',
            magnitude: '-25-35%',
        },
        {
            when: '不定',
            event: '现金消耗加速 → 增发稀释',
            impact: 'negative',
            probability: '~20%',
            magnitude: '-15-25%',
        },
        {
            when: '不定',
            event: '资产减值（产能、应收）大额计提',
            impact: 'negative',
            probability: '~25%',
            magnitude: '-10-15%',
        },
    ],

    longTermDrivers: [
        {
            name: '行业产能出清 + 价格修复',
            horizon: '2026-2028',
            body: '2025-2027 小厂商退出，组件价格从 ¥0.7/W 回升至 ¥1.0/W；行业重回理性增长。隆基作为龙头第一受益。',
            enabling: '行业自然出清 + 政策推动 + 海外需求恢复',
        },
        {
            name: 'HPBC 2.0 技术领先期权释放',
            horizon: '2026-2032',
            body: '第二代背接触电池效率 26%+，5-7 年技术领先；如果量产顺利，2027-2030 营收占比可达 30-40%，毛利率 18-20% 高于组件。',
            enabling: 'HPBC 2.0 量产顺利 + 量产成本降至 TOPCon 平价',
        },
        {
            name: '全球能源转型加速',
            horizon: '2026-2035',
            body: '2030 全球光伏装机预计 5,000GW（vs 当前 ~2,000GW），TAM 翻倍。隆基组件全球第一身位下，享受赛道红利最大化。',
            enabling: '《巴黎协定》延续 + 各国净零承诺 + 化石能源价格上涨',
        },
        {
            name: 'BIPV 业务起飞',
            horizon: '2027-2035',
            body: '建筑光伏一体化是隆基提前 5 年布局赛道；2030 后欧洲 + 中国新建筑强制要求，TAM ¥1,000 亿+。',
            enabling: '欧盟新建筑光伏强制 + 中国"光伏绿色建筑"政策',
        },
        {
            name: '氢能业务期权',
            horizon: '2028-2035',
            body: '电解槽订单已破 GW 级别，2030 后规模化潜力。中东大型绿氢项目是隆基的早期验证场。',
            enabling: '欧洲绿氢补贴 + 中东绿氢项目 + 钢铁/化工脱碳需求',
        },
        {
            name: '海外占比突破 50%',
            horizon: '2026-2030',
            body: '当前 38%，目标 2030 50%+。已在欧洲 / 中东 / 印度 / 澳洲全面布局，但比阳光（52%）落后 14pp，追赶空间大。',
            enabling: '本地化生产（印度 / 美国合资） + 大客户绑定',
        },
    ],

    riskMatrix: [
        {
            category: '行业 / 周期风险',
            level: 'critical',
            summary: '产能过剩 + 价格战是最大变量',
            items: [
                {
                    name: '行业产能出清节奏慢',
                    body: '2023-2025 中国光伏产能 vs 全球需求 2-3x。出清拖到 2028-2029 概率高，期间组件价格难恢复。',
                    mitigation: '现金 ¥460 亿撑过去；HPBC 提供差异化',
                },
                {
                    name: '组件价格继续下跌',
                    body: '若组件价格继续跌至 ¥0.6/W，全行业现金成本以下；隆基亏损扩大。',
                    mitigation: 'HPBC 高效组件溢价；海外溢价市场',
                },
                {
                    name: '同质化竞争加剧',
                    body: '通威 / 晶澳 / 天合 / 晶科 全部 TOPCon 路线，产品差异化弱。',
                    mitigation: 'HPBC 2.0 是差异化核心；规模 + 品牌',
                },
            ],
        },
        {
            category: '技术 / 战略风险',
            level: 'critical',
            summary: 'HPBC vs TOPCon 是 5-7 年长期博弈',
            items: [
                {
                    name: 'HPBC 2.0 量产不及预期',
                    body: '若量产效率 <25%，HPBC 押注彻底失败；公司可能永远回不到王者地位。',
                    mitigation: 'TOPCon 备份产能；研发持续投入',
                },
                {
                    name: 'TOPCon 持续主流',
                    body: '2024-2026 TOPCon 仍是主流，若 HPBC 不能形成代际优势，被边缘化。',
                    mitigation: 'HPBC 2.0 效率领先 + BC 路径长期空间',
                },
                {
                    name: '钙钛矿等下一代技术',
                    body: '5-10 年后钙钛矿 + HJT 等可能改变格局，HPBC 提前过时。',
                    mitigation: '已布局多技术路线储备',
                },
            ],
        },
        {
            category: '财务 / 流动性风险',
            level: 'high',
            summary: '现金消耗 + 应收账款 + 资产减值',
            items: [
                {
                    name: '现金消耗加速',
                    body: '若亏损扩大或 CapEx 持续高，现金可能从 ¥460 亿快速消耗到 <¥300 亿，触发增发稀释。',
                    mitigation: 'CapEx 收紧 + 资产剥离 + 严控运营成本',
                },
                {
                    name: '应收账款坏账',
                    body: '电站 EPC 业务回款周期长，2024 应收账款攀升；坏账风险持续。',
                    mitigation: '客户信用管理；保理融资',
                },
                {
                    name: '资产减值计提',
                    body: '过剩产能 + 库存可能大额减值；2024 已减值 ¥40 亿，2025-2026 仍可能持续。',
                    mitigation: '保守会计处理；分批计提',
                },
            ],
        },
        {
            category: '政策 / 地缘风险',
            level: 'high',
            summary: '美国关税 + 国内补贴',
            items: [
                {
                    name: '美国关税升级',
                    body: '美国市场约占公司营收 10-15%（比阳光 18-22% 低），2025 关税升级影响相对较小但仍是风险。',
                    mitigation: '马来西亚 + 越南 + 印度厂房本地化生产',
                },
                {
                    name: 'UFLPA 强迫劳动指控',
                    body: '美国 UFLPA 法案对新疆多晶硅供应链审查严格。',
                    mitigation: '供应链审计 + 多元化采购',
                },
                {
                    name: '欧洲补贴退坡',
                    body: '欧洲约占营收 18%，欧盟绿色协议执行可能放缓。',
                    mitigation: 'utility 级订单占比提升；与大客户绑定',
                },
            ],
        },
        {
            category: '关键人风险',
            level: 'medium',
            summary: '李振国 + 钟宝申双核搭档',
            items: [
                {
                    name: '李振国 / 钟宝申战略转向',
                    body: '若两位创始人在困境中战略转向（如剥离硅片、放弃 HPBC），公司可能更深陷困境。',
                    mitigation: '30 年搭档稳定 + 持股 25% 利益绑定',
                },
                {
                    name: '李文学（HPBC 技术负责人）流失',
                    body: 'HPBC 量产关键期 (2025-2026) 核心技术骨干离职是致命风险。',
                    mitigation: '股权激励 + 长期文化',
                },
            ],
        },
        {
            category: '竞争风险',
            level: 'medium',
            summary: '全行业同质化竞争',
            items: [
                {
                    name: '通威 / 晶澳 / 天合 / 晶科同质化',
                    body: '4 家头部 TOPCon 路线 + 隆基 HPBC，技术分裂导致价格战难以协调出清。',
                    mitigation: 'HPBC 差异化 + 规模壁垒',
                },
                {
                    name: 'First Solar 美国本土壁垒',
                    body: '美国本土厂商 First Solar 享受 IRA 补贴 + 关税保护，2025 净利 +$1.3B；隆基美国市场难入。',
                    mitigation: '马来西亚厂房 + 中东扩张对冲',
                },
            ],
        },
    ],

    profitability: {
        narrative:
            '隆基绿能的盈利模型是**典型周期性 deep value**：①毛利率从 2021 的 22% 跌至 2024 的 8%（历史最低）；②2024 首次年度亏损 -¥86 亿；③2025 触底反转预期 - 2026 重回盈利；④2027 后正常化净利率 ~10%。**关键观察指标**：①季度毛利率（决定反转节奏）；②HPBC 2.0 量产效率（决定差异化能力）；③现金消耗速度（决定能否撑到反转）。**未来 3 年关键变量**：行业产能出清 + HPBC 量产 + 海外大订单兑现。',

        incomeStatement: [
            {
                year: '2020',
                revenue: '¥546 亿',
                revenueNum: 546,
                grossMargin: '~24%',
                opIncome: '¥110 亿',
                ebitda: '¥120 亿',
                ebitdaMargin: '22%',
                netIncome: '¥86 亿',
                eps: '¥1.13',
                status: 'actual',
            },
            {
                year: '2021',
                revenue: '¥809 亿',
                revenueNum: 809,
                grossMargin: '~22%',
                opIncome: '¥120 亿',
                ebitda: '¥130 亿',
                ebitdaMargin: '16%',
                netIncome: '¥91 亿',
                eps: '¥1.20',
                status: 'actual',
            },
            {
                year: '2022',
                revenue: '¥1,289 亿',
                revenueNum: 1289,
                grossMargin: '~16%',
                opIncome: '¥190 亿',
                ebitda: '¥210 亿',
                ebitdaMargin: '16.3%',
                netIncome: '¥148 亿',
                eps: '¥1.94',
                status: 'actual',
            },
            {
                year: '2023',
                revenue: '¥1,294 亿',
                revenueNum: 1294,
                grossMargin: '~18%',
                opIncome: '¥130 亿',
                ebitda: '¥150 亿',
                ebitdaMargin: '11.6%',
                netIncome: '¥108 亿',
                eps: '¥1.42',
                status: 'actual',
            },
            {
                year: '2024',
                revenue: '¥825 亿',
                revenueNum: 825,
                grossMargin: '~8%',
                opIncome: '-¥85 亿',
                ebitda: '-¥40 亿',
                ebitdaMargin: '-4.8%',
                netIncome: '-¥86 亿',
                eps: '-¥1.13',
                status: 'actual',
            },
            {
                year: '2025E',
                revenue: '¥780 亿',
                revenueNum: 780,
                grossMargin: '~12%',
                opIncome: '~-¥10 亿',
                ebitda: '~+¥10 亿',
                ebitdaMargin: '~1.3%',
                netIncome: '~-¥5 亿',
                eps: '-¥0.07',
                status: 'estimate',
            },
            {
                year: '2026E',
                revenue: '¥900 亿',
                revenueNum: 900,
                grossMargin: '~16%',
                opIncome: '~¥45 亿',
                ebitda: '~¥60 亿',
                ebitdaMargin: '~6.7%',
                netIncome: '~¥30 亿',
                eps: '¥0.40',
                status: 'estimate',
            },
        ],

        marginEvolution: [
            { year: '2020', gross: 24, ebitda: 22, operating: 20, net: 16, status: 'actual' },
            { year: '2021', gross: 22, ebitda: 16, operating: 15, net: 11, status: 'actual' },
            { year: '2022', gross: 16, ebitda: 16, operating: 15, net: 11, status: 'actual' },
            { year: '2023', gross: 18, ebitda: 12, operating: 10, net: 8, status: 'actual' },
            { year: '2024', gross: 8, ebitda: -5, operating: -10, net: -10, status: 'actual' },
            { year: '2025E', gross: 12, ebitda: 1, operating: -1, net: -1, status: 'estimate' },
            { year: '2026E', gross: 16, ebitda: 7, operating: 5, net: 3, status: 'estimate' },
        ],

        milestones: [
            { year: '2007', milestone: '国内单晶硅片市占第一', hit: true },
            { year: '2012', milestone: '上交所主板上市', hit: true },
            { year: '2014', milestone: '全球单晶硅片出货第一', hit: true },
            { year: '2020', milestone: '组件全球出货第一 + 营收破 ¥500 亿', hit: true },
            { year: '2021', milestone: '巅峰：市值 ¥4,500 亿 PE 70x', hit: true },
            { year: '2024', milestone: '**首次年度亏损 -¥86 亿**', hit: true, note: '负面里程碑' },
            { year: '2025E', milestone: '亏损收窄到 -¥10 亿以内', hit: false, note: '反转初步' },
            { year: '2026E', milestone: '重回盈利 ¥30 亿+ + HPBC 2.0 量产', hit: false, note: '反转关键' },
            { year: '2027-2028', milestone: '净利润恢复至 ¥80-100 亿', hit: false },
            { year: '2030', milestone: '海外占比 50%+ · 营收 ¥1,500 亿+ · 重回行业王者', hit: false, note: '终极目标' },
        ],

        unitEconomics: [
            { metric: '组件全球出货 2024', value: '~85 GW', source: 'Wood Mackenzie' },
            { metric: '硅片全球出货 2024', value: '~120 GW', source: 'CPIA' },
            { metric: '组件单瓦售价（2024）', value: '~¥0.70-0.80 / W', source: '行业价格指数' },
            { metric: '组件单瓦成本（2024）', value: '~¥0.70-0.75 / W', source: '行业估算' },
            { metric: '硅片单瓦售价（2024）', value: '~¥0.30-0.35 / W', source: '行业估算' },
            { metric: 'HPBC 量产产能 2025E', value: '~50 GW', source: '公司披露' },
            { metric: '研发人员占比', value: '~10%', source: '公司披露' },
            { metric: '专利数量（截至 2024）', value: '~5,000+', source: '专利局公开' },
        ],

        fcfPath:
            '2024 OCF ¥30 亿，FCF -¥90 亿（CapEx ¥120 亿）。2025-2026 预计 FCF -¥50 至 +¥20 亿（投产收尾期）。**Cash Conversion Ratio**：~0.35（2024 异常低 · 库存积压）。**资本配置**：当前主要靠现金 ¥460 亿熬过 HPBC 投产期；2026 H2 后 FCF 有望持续转正。**关键观察**：FCF 转正是反转兑现的最强信号。',

        keyRisks: [
            'HPBC 2.0 量产效率不及预期，反转赌注失败',
            '行业产能出清拖到 2028-2029，价格战持续',
            '现金消耗加速，可能触发增发稀释 (15-20%)',
            '资产减值大额计提（库存 + 过剩产能）',
            '美国关税 + UFLPA 影响海外占比 38%',
        ],
    },

    competitiveLandscape: {
        summary:
            '隆基所在的光伏赛道是**全行业同质化困境 + 技术路线博弈**：①**第一阵营**：隆基（HPBC）+ 通威 + 晶澳 + 天合 + 晶科（TOPCon），5 家头部全部亏损或微利；②**美国本土**：First Solar（CdTe + IRA 补贴）独享美国市场红利；③**新进入者**：BIPV + 氢能等差异化赛道。**核心战略**：靠 HPBC 2.0 + 现金 + 海外渠道熬过出清期，2027-2028 重回盈利。**与阳光电源对照鲜明** —— 同样光伏赛道，但阳光在储能爆发期享受溢价，隆基在组件最差期承受价格战。',

        competitors: [
            {
                name: '隆基绿能 (自身)',
                type: 'specialist',
                ticker: 'SH:601012',
                revenue2026E: '¥900 亿',
                aiRevenue: '组件 + 硅片 + HPBC',
                gpuFleet: '~17-19% 全球组件 + ~24-26% 硅片',
                backlog: '~¥800 亿订单池（估）',
                ebitdaMargin: '~7%（2026E 反转中）',
                marketCap: '~¥1,360 亿',
                nvidiaLevel: 4,
                threat: 'low',
                strength: '组件 + 硅片全球第一 · HPBC 技术领先 · 现金 ¥460 亿过冬',
                weakness: '2024 首亏 · HPBC 路线赌注 · 海外占比 38% · 业务单一',
            },
            {
                name: '阳光电源 (300274)',
                type: 'specialist',
                ticker: 'SZ:300274',
                revenue2026E: '¥1,150 亿',
                aiRevenue: '逆变器 + 储能',
                gpuFleet: '~28% 全球逆变器 + 美国储能第 1',
                backlog: '~¥1,500 亿',
                ebitdaMargin: '~19%',
                marketCap: '~¥1,750 亿',
                nvidiaLevel: 5,
                threat: 'low',
                strength: '储能爆发 · 海外 52% · ROE 22% · quality compounder',
                weakness: '美国关税风险 · 储能毛利压力',
            },
            {
                name: '通威股份 (600438)',
                type: 'specialist',
                ticker: 'SH:600438',
                revenue2026E: '~¥800 亿',
                aiRevenue: '硅料 + 组件 + 农业',
                gpuFleet: '~50 GW 组件 + 全球硅料第一',
                backlog: '~¥600 亿',
                ebitdaMargin: '~5%',
                marketCap: '~¥800 亿',
                nvidiaLevel: 4,
                threat: 'high',
                strength: '硅料 + 组件双引擎 · 2024 净利 -¥70 亿但仍可控',
                weakness: '硅料价格腰斩 · 农业业务非核心',
            },
            {
                name: '晶澳科技 (002459)',
                type: 'specialist',
                ticker: 'SZ:002459',
                revenue2026E: '~¥700 亿',
                aiRevenue: '组件',
                gpuFleet: '~80 GW 组件',
                backlog: '~¥500 亿',
                ebitdaMargin: '~3%',
                marketCap: '~¥350 亿',
                nvidiaLevel: 3,
                threat: 'high',
                strength: '组件全球第二 · TOPCon 主流路线',
                weakness: '2024 净利 -¥47 亿 · 资金压力',
            },
            {
                name: '晶科能源 (688223)',
                type: 'specialist',
                ticker: 'SH:688223',
                revenue2026E: '~¥850 亿',
                aiRevenue: '组件',
                gpuFleet: '~95 GW 组件 (全球第一)',
                backlog: '~¥600 亿',
                ebitdaMargin: '~6%',
                marketCap: '~¥600 亿',
                nvidiaLevel: 4,
                threat: 'high',
                strength: 'TOPCon 龙头 · 2024 微利 +¥12 亿是行业标杆',
                weakness: 'HPBC 落后 · 业务单一',
            },
            {
                name: '天合光能 (688599)',
                type: 'specialist',
                ticker: 'SH:688599',
                revenue2026E: '~¥650 亿',
                aiRevenue: '组件 + 储能',
                gpuFleet: '~75 GW 组件',
                backlog: '~¥400 亿',
                ebitdaMargin: '~4%',
                marketCap: '~¥400 亿',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: '组件 + 储能双引擎 · 海外突破',
                weakness: '2024 净利 -¥34 亿 · 储能小',
            },
            {
                name: '中环股份 (002129)',
                type: 'specialist',
                ticker: 'SZ:002129',
                revenue2026E: '~¥250 亿',
                aiRevenue: '硅片',
                gpuFleet: '硅片全球第二',
                backlog: '~¥200 亿',
                ebitdaMargin: '~2%',
                marketCap: '~¥250 亿',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: '硅片全球第二 · 大尺寸技术',
                weakness: '2024 净利 -¥98 亿 · 单一硅片业务',
            },
            {
                name: 'First Solar (FSLR · 美国)',
                type: 'specialist',
                ticker: 'NASDAQ:FSLR',
                revenue2026E: '~$5B',
                aiRevenue: '薄膜组件 + 美国本土',
                gpuFleet: '~12 GW (美国本土第一)',
                backlog: '~$15B 已签订单',
                ebitdaMargin: '~30%',
                marketCap: '~$22B',
                nvidiaLevel: 5,
                threat: 'low',
                strength: '美国 IRA 补贴 + 关税保护 + 2024 净利 +$1.3B',
                weakness: 'CdTe 薄膜 vs 晶硅技术非主流 · 仅美国市场',
            },
        ],

        positioning: [
            { dimension: '组件全球市占', nebius: '~17-19% (第一)', industryAvg: '5-10%', leader: '隆基绿能', nebiusStrong: true },
            { dimension: '硅片全球市占', nebius: '~24-26% (第一)', industryAvg: '5-10%', leader: '隆基绿能', nebiusStrong: true },
            { dimension: '2024 净利润', nebius: '-¥86 亿', industryAvg: '-¥40 至 -¥80 亿', leader: '晶科 +¥12 亿', nebiusStrong: false },
            { dimension: '2024 毛利率', nebius: '8%', industryAvg: '5-10%', leader: '阳光 30.5% (不同业务)', nebiusStrong: false },
            { dimension: '现金及等价物', nebius: '¥460 亿', industryAvg: '¥150-300 亿', leader: '隆基绿能', nebiusStrong: true },
            { dimension: '海外营收占比', nebius: '~38%', industryAvg: '30-40%', leader: '阳光 52% (不同业务)', nebiusStrong: false },
            { dimension: '技术路线', nebius: 'HPBC（独占）', industryAvg: 'TOPCon (主流)', leader: '主流 vs 差异化', nebiusStrong: true },
            { dimension: 'PB 估值', nebius: '~1.4x (历史最低分位)', industryAvg: '~1.5-2.0x', leader: '隆基最便宜', nebiusStrong: true },
            { dimension: '股价回撤幅度', nebius: '-76%', industryAvg: '-50% 至 -70%', leader: '隆基最深', nebiusStrong: false },
            { dimension: '研发投入占比', nebius: '~10%', industryAvg: '3-5%', leader: '隆基 + 阳光', nebiusStrong: true },
        ],

        marketShare2026: [
            { name: '隆基绿能', pct: 18 },
            { name: '晶科能源', pct: 18 },
            { name: '晶澳科技', pct: 15 },
            { name: '天合光能', pct: 14 },
            { name: '通威股份', pct: 9 },
            { name: 'First Solar (美国)', pct: 5 },
            { name: 'JinkoSolar / Canadian Solar 海外', pct: 8 },
            { name: '其他 (40+ 家)', pct: 13 },
        ],

        winLoss: [
            {
                scenario: '中国国内组件市场',
                winners: '隆基 / 晶科 / 晶澳 / 天合 / 通威',
                losers: '小厂商',
                reasoning: '5 大龙头瓜分 70% 市场，但价格战持续；行业出清后龙头集中度提升',
            },
            {
                scenario: '美国市场',
                winners: 'First Solar (本土 + IRA 补贴)',
                losers: '隆基 / 晶澳 / 天合 (关税)',
                reasoning: '中国厂商美国市场受 25-50% 关税 + UFLPA 制约；First Solar 独享',
            },
            {
                scenario: '欧洲 utility 市场',
                winners: '隆基 / 阳光 / 晶科',
                losers: '小厂商',
                reasoning: '欧洲大型 utility 偏好品牌 + 长质保，龙头优势',
            },
            {
                scenario: '中东大型组件订单',
                winners: '隆基 / 晶澳 / 阳光',
                losers: 'First Solar (无海外渠道)',
                reasoning: '中东 utility 偏好性价比 + 长期服务，中国厂商占优',
            },
            {
                scenario: 'HPBC 高效组件细分',
                winners: '隆基 (HPBC 独占)',
                losers: 'TOPCon 阵营',
                reasoning: '如果 HPBC 2.0 量产 + 高溢价市场（户用 + 商用屋顶）成立，隆基差异化',
            },
            {
                scenario: 'TOPCon 主流市场',
                winners: '晶科 / 晶澳 / 天合 / 通威',
                losers: '隆基 (HPBC 路线)',
                reasoning: '2024-2026 TOPCon 仍是主流，隆基 HPBC 量产前份额受影响',
            },
            {
                scenario: '行业产能出清',
                winners: '现金充足的龙头 (隆基 + 阳光)',
                losers: '小厂商 + 杠杆高的玩家',
                reasoning: '隆基现金 ¥460 亿 + 阳光 ¥250 亿是熬过周期的关键',
            },
            {
                scenario: 'BIPV / 氢能新赛道',
                winners: '隆基 (提前布局)',
                losers: '其他光伏厂商',
                reasoning: '隆基在 BIPV 和氢能上比同行领先 3-5 年',
            },
        ],

        structuralTrend:
            '未来 3-5 年行业结构性变化：①**产能出清是核心剧本**：2025-2027 全行业出清 30-50% 落后产能，龙头集中度从 65% 升至 75%+；②**技术路线博弈**：TOPCon 主流 vs HPBC 差异化的 5-7 年长期博弈；③**全球分裂**：美国 IRA 保护本土 (First Solar) + 中国关税壁垒 + 欧洲反倾销，全球供应链分裂；④**储能 + AI 成为第二增长极**：传统组件厂商必须扩展业务，单一组件赛道 ROIC 难恢复；⑤**BIPV / 氢能新赛道崛起**：隆基提前布局有先发优势。**结论**：隆基的反转兑现需要 HPBC 量产 + 行业出清 + 海外突破三轨道齐发，时点在 2026 H2 - 2027 H1。',

        tam: {
            narrative:
                '全球光伏 + 储能 TAM：①**光伏组件**：2025 ~250GW/年 → 2030 ~500GW/年；②**单晶硅片**：与组件同步；③**HPBC 高效细分**：2025 ~10GW → 2030 ~80GW (8x)；④**BIPV**：2025 ~$10B → 2030 ~$50B (5x)；⑤**氢能电解槽**：2025 ~5GW → 2030 ~30GW (6x)。**隆基 TAM**：组件 ~$200B + 硅片 ~$50B + HPBC ~$30B + BIPV ~$5B + 氢能 ~$3B = $288B。公司当前营收 ~¥825 亿（折合 $115B）对应 TAM 占比 4-5%。**反转兑现路径**：组件价格回升 + HPBC 量产 + 海外突破 = 2030 营收 ¥1,500 亿+，对应市值 ¥5,000 亿+（vs 当前 ¥1,360 亿，3.7x）。',
            points: [
                { year: '2020', totalTam: 80, neocloudTam: 20, selfRevenue: 7.6, status: 'actual' },
                { year: '2022', totalTam: 150, neocloudTam: 50, selfRevenue: 18, status: 'actual' },
                { year: '2024', totalTam: 180, neocloudTam: 80, selfRevenue: 11.5, status: 'actual' },
                { year: '2025', totalTam: 200, neocloudTam: 100, selfRevenue: 11, status: 'estimate' },
                { year: '2026', totalTam: 230, neocloudTam: 120, selfRevenue: 12.5, status: 'estimate' },
                { year: '2028', totalTam: 320, neocloudTam: 180, selfRevenue: 18, status: 'estimate' },
                { year: '2030', totalTam: 450, neocloudTam: 280, selfRevenue: 21, status: 'estimate' },
            ],
            keyNumbers: [
                { label: '全球光伏装机 2024', value: '~450 GW', sub: '中国 270 + 海外 180', cls: 'cyan' },
                { label: '组件 TAM 2030E', value: '~$200B', sub: '2x 增长', cls: 'purple' },
                { label: 'HPBC 高效细分 TAM 2030', value: '~$30B', sub: '8x 增长 (差异化)', cls: 'green' },
                { label: '隆基组件全球市占', value: '~17-19%', sub: '连续多年第一', cls: 'green' },
                { label: '隆基硅片全球市占', value: '~24-26%', sub: '30 年壁垒', cls: 'green' },
                { label: '反转后净利率目标', value: '~10% by 2027', sub: 'vs 2024 -10%', cls: 'cyan' },
                { label: '反转所需 (营收)', value: '+50%', sub: '从 ¥825 → ¥1,250 亿', cls: 'red' },
                { label: 'HPBC 2.0 量产时间', value: '2025 H2 - 2026 H1', sub: '关键观察', cls: 'red' },
            ],
            sourcesNote:
                '数据来源：Wood Mackenzie 全球组件出货排名、CPIA（中国光伏行业协会）数据、IEA 全球能源展望、公司年报披露、卖方研报。2028-2030 为基于光伏 + 储能 + HPBC + BIPV + 氢能五轨道驱动的推演。',
        },

        radar: {
            peer1Name: '阳光电源 (300274)',
            peer2Name: '晶科能源 (688223)',
            dimensions: [
                { dim: '组件 / 主业全球市占', self: 9, peer1: 5, peer2: 10 },
                { dim: '硅片技术壁垒', self: 10, peer1: 1, peer2: 4 },
                { dim: '2024 盈利能力', self: 1, peer1: 10, peer2: 6 },
                { dim: '现金及流动性', self: 9, peer1: 8, peer2: 6 },
                { dim: '海外营收占比', self: 6, peer1: 9, peer2: 7 },
                { dim: 'HPBC / 技术领先', self: 9, peer1: 5, peer2: 4 },
                { dim: '业务多元化', self: 3, peer1: 9, peer2: 4 },
                { dim: '估值便宜程度（PB）', self: 10, peer1: 4, peer2: 6 },
            ],
            note: '1-10 分主观评分。隆基在硅片技术、HPBC 领先、估值便宜、现金流动性上独家领先；阳光在 2024 盈利能力、海外占比、业务多元化上结构性优势；晶科在组件全球市占、TOPCon 主流路线上领先。**关键判断**：隆基 vs 阳光是"困境反转赔率工具 vs quality compounder"二选一；隆基 vs 晶科是"HPBC 差异化 vs TOPCon 规模"博弈。',
        },
    },

    valuation: {
        metrics: [
            { metric: 'PE (2024 实际)', value: '不适用 (-¥86 亿亏损)', benchmark: '历史 12-70x', read: 'rich' },
            { metric: 'PE (2025E)', value: '不适用 (-¥5 亿)', benchmark: '反转中', read: 'rich' },
            { metric: 'PE (2026E)', value: '~45x', benchmark: '反转初期高 PE', read: 'rich' },
            { metric: 'PE (2027E)', value: '~21x', benchmark: '接近正常', read: 'fair' },
            { metric: 'PB (当前)', value: '~1.4x', benchmark: '历史 <5% 分位', read: 'cheap' },
            { metric: 'EV/Sales (2026E)', value: '~1.5x', benchmark: '行业 1-2x', read: 'fair' },
        ],
        sotp: [
            { item: '光伏组件业务（2027 净利 ¥35 亿 × 18 PE）', valuation: '¥630 亿', method: '反转后 18x PE', note: '主业 · 2027 时点估值' },
            { item: '单晶硅片业务（2027 净利 ¥40 亿 × 15 PE）', valuation: '¥600 亿', method: '稳定 15x PE', note: '30 年壁垒' },
            { item: 'HPBC 电池业务（2027 净利 ¥30 亿 × 25 PE）', valuation: '¥750 亿', method: '高增长 25x PE', note: '差异化业务' },
            { item: 'BIPV 业务（隐含期权）', valuation: '¥150 亿', method: '战略期权 NPV', note: '2030+ 兑现' },
            { item: '氢能业务（隐含期权）', valuation: '¥100 亿', method: '战略期权 NPV', note: '2030+ 兑现' },
        ],
        sotpTotal: '¥2,230 亿 (2027 时点)',
        sotpPerShare: '对应合理股价 ~¥29.4 (当前 ¥18，潜在上行 64%) · 但需反转兑现',
    },

    recommendation: {
        rating: '困境反转 / 小仓位逆向投机',
        ratingCls: 'neutral',
        timeHorizon: '2-5 年（赔率工具）',
        positionSize: '1-3% 组合权重 · 困境反转赔率工具',
        addingZone: '¥15-18（PB <1.3x + 2025 H2 季报盈亏改善验证）',
        stopLoss: 'HPBC 2.0 量产效率 <25.5% / 现金 <¥300 亿 / 2025 全年亏损 >¥30 亿 → 减仓 30-50%',
        thesis:
            '当前 ¥18 接近 PB 1.4x 历史 <5% 分位（极便宜），股价已从 ¥75 跌至 ¥18 = -76% 下行大部分释放。**这不是 quality compounder**（与阳光电源对照鲜明），是**赌"光伏行业最差时刻已过 + HPBC 2.0 翻身"的赔率工具**。**机会成本是阳光电源**——同样 A 股光伏赛道、同样技术派创业家，但阳光在储能爆发期（quality compounder · +9.3pp 超额），隆基在组件最差期（困境反转 · +4.7pp 超额）。**适合 1-3% 小仓位逆向 + 严格止损**，与阳光电源 4% 配合形成"光伏赛道双仓位"（爆发期 + 反转期对冲）。**关键观察三件事**：HPBC 2.0 量产效率 + 行业产能出清节奏 + 现金消耗速度——任一恶化即触发减仓。',
        keyAssumptions: [
            '行业 2026 H2 出清完成，组件价格回升至 ¥0.85/W+',
            'HPBC 2.0 量产效率 ≥26% (2026 H2 验证)',
            '现金不破 ¥300 亿（不需要增发稀释）',
            '海外占比突破 45% by 2027',
            '李振国 + 钟宝申 5 年内不战略转向',
            '2026 全年重回盈利 ≥¥30 亿',
        ],
        sizingFormula: {
            method: 'Kelly 公式（保守版，使用 1/3 Kelly · 困境反转更保守）',
            formula: 'f* = (期望回报率 − 无风险利率) / 方差 × (1/3)',
            inputs: [
                { label: '10Y 期望回报率', value: '12.7% CAGR' },
                { label: '无风险利率', value: '2.5% (中国 10Y 国债)' },
                { label: '情景标准差 (10Y)', value: '¥3,400 亿 (~76% of E[Mcap])' },
                { label: '完整 Kelly', value: '~3.5%' },
                { label: '1/3 Kelly (困境反转保守)', value: '~1.2%' },
            ],
            computedSize: '1-3% 组合权重',
            reasoning:
                '隆基的回报方差较高（10Y 标准差 ~76% 期望值，比阳光 49% 高，比加密财库 70-190% 低），加上"困境反转时点和幅度高度不确定" + HPBC 路线赌注 + 行业产能出清节奏不可控，要求取 1/3 Kelly（更保守于 1/2）。**分层建仓**：基础 1%（试水）+ HPBC 2.0 量产数据超预期 +0.5-1%（技术兑现）+ 2026 H2 行业产能出清确认 +0.5%（行业反转）。**严格止损**：HPBC 2.0 效率 <25.5% / 现金 <¥300 亿 / 2025 亏损 >¥30 亿 → 任一触发减仓 30-50%。',
        },
    },

    keyPersonRisks: [
        {
            name: '李振国 (总裁 · 联合创始人)',
            role: '战略 · 技术路线决策 · HPBC 押注',
            departProb: '低 (~10% / 5 年，57 岁仍掌舵)',
            departImpact: '高 —— 战略连续性受影响，HPBC 路线可能被推翻',
            mitigation: '钟宝申可继任；30 年技术体系已沉淀',
            criticality: 'high',
        },
        {
            name: '钟宝申 (董事长 · 联合创始人)',
            role: '战略 · 治理 · 资本市场',
            departProb: '低 (~10% / 5 年)',
            departImpact: '高 —— 与李振国搭档 30 年，治理框架受影响',
            mitigation: '李振国可独立运营；制度化成熟',
            criticality: 'high',
        },
        {
            name: '李文学 (副总裁 · HPBC 技术负责人)',
            role: 'HPBC 量产关键执行者',
            departProb: '中 (~25% / 5 年)',
            departImpact: '极高 —— HPBC 2.0 量产效率达成的技术核心',
            mitigation: '股权激励 + 长期文化；研发团队厚',
            criticality: 'critical',
        },
        {
            name: '李华 (CFO)',
            role: '财务 · 资本市场 · 困境期沟通',
            departProb: '中 (~20% / 5 年)',
            departImpact: '中 —— 2024 首亏后机构沟通不易',
            mitigation: '可招募更资深 CFO 升级',
            criticality: 'medium',
        },
        {
            name: '海外销售总监团队',
            role: '海外渠道 · 130 国市场 · 反转关键',
            departProb: '中 (~25% / 5 年累计)',
            departImpact: '高 —— 海外占比突破 50% 是反转关键',
            mitigation: '多区域分散管理；与大客户关系制度化',
            criticality: 'high',
        },
    ],

    cashFlow: {
        narrative:
            '隆基绿能的现金流是**典型周期股困境期**：①2024 OCF ¥30 亿（远低于 2023 ¥130 亿）；②FCF 连续 2 年负（-¥10 至 -¥90 亿，反映 CapEx 错峰）；③现金及等价物 ¥460 亿（同行最厚）；④CapEx / 营收 ~12%（反转期投产 HPBC）。**关键观察**：①现金消耗速度（决定能撑多久）；②HPBC 投产收尾后 CapEx 收紧；③2026 H2 FCF 转正信号。**与阳光电源关键差异**：阳光 FCF 持续正增长是 quality compounder，隆基 FCF 仍在烧钱投产期；但 ¥460 亿现金给隆基足够"过冬粮草"。',
        rows: [
            { year: '2020', ocf: 110, icf: -30, fcf: -10, freeCashFlow: 80, status: 'actual' },
            { year: '2021', ocf: 120, icf: -40, fcf: 0, freeCashFlow: 80, status: 'actual' },
            { year: '2022', ocf: 158, icf: -70, fcf: 30, freeCashFlow: 80, status: 'actual' },
            { year: '2023', ocf: 130, icf: -140, fcf: 50, freeCashFlow: -10, status: 'actual' },
            { year: '2024', ocf: 30, icf: -120, fcf: 80, freeCashFlow: -90, status: 'actual' },
            { year: '2025E', ocf: 20, icf: -70, fcf: 30, freeCashFlow: -50, status: 'estimate' },
            { year: '2026E', ocf: 80, icf: -60, fcf: 0, freeCashFlow: 20, status: 'estimate' },
        ],
        conversionNote:
            'Cash Conversion Ratio = OCF / Net Income。2024 异常低 (~0.35，库存积压 + 应收攀升)；2025-2026 预期回升至 0.6-0.8（反转中）；2027+ 应回到 0.95-1.0（正常化）。**关键警惕**：①如果 2025 全年亏损 >¥30 亿 + CapEx 不收紧，现金可能消耗到 <¥350 亿；②资产减值（产能、应收、库存）可能继续大额计提。',
        keyRisks: [
            '现金消耗加速可能触发增发稀释 (15-20% 股本)',
            '应收账款大额坏账（2024 已计提 ¥40 亿减值）',
            '库存价值减值（组件价格继续下跌）',
            'HPBC 投产 CapEx 超预期',
            '人民币升值影响汇兑',
        ],
    },

    historicalValuation: {
        narrative:
            '隆基绿能 2012 年上市以来 PE 区间 **8-70x**，PB 区间 **1.4-12x**（剧烈波动反映光伏赛道周期性）。**关键时点**：2021 巅峰 PE 70x · PB 12x（光伏狂热）→ 2022 PE 18x · PB 5x（回调）→ 2024-Q4 PE -16x · PB 1.6x（首次年亏 + 估值崩塌）→ 2026-Q2 PB 1.4x（当前）。**当前 PB 处于上市以来 <5% 分位**——**极便宜**，但需要"反转"才能兑现。**关键认知**：估值便宜不等于一定上涨，反转的时点和幅度仍取决于 HPBC + 行业出清。',
        history: [
            { period: '2014-Q4', evSales: 16, note: 'PB 2x · 单晶硅片崛起' },
            { period: '2018-Q4', evSales: 12, note: 'PB 2.5x · 全球第一' },
            { period: '2020-Q4', evSales: 60, note: 'PB 8x · 新能源狂热' },
            { period: '2021-Q4', evSales: 70, note: '巅峰 · PE 70x · PB 12x · 股价 ¥75' },
            { period: '2022-Q4', evSales: 18, note: '回调 · PE 18x · PB 5x' },
            { period: '2023-Q4', evSales: 13, note: '继续下行 · PB 3x' },
            { period: '2024-Q4', evSales: -16, note: '首次年亏 · PE 不适用 · PB 1.6x · 估值崩塌' },
            { period: '2025-Q4', evSales: -255, note: '触底 · 反转预期 · PB 1.5x' },
            { period: '2026-Q2 (当前)', evSales: 45, note: 'PE 45x（反转初期高 PE）· PB 1.4x · 历史最低分位' },
        ],
        currentPercentile: '<5%',
        verdict: 'cheap',
    },

    downsideMetrics: {
        narrative:
            '只看期望 12.7% CAGR 是 research theater。基于 4 档情景，隆基 10Y **情景标准差约 ¥3,400 亿**（~76% 期望值，比阳光 49% 高，比加密财库 70-190% 低）。**5Y 内亏损 30%+ 的概率约 25%** —— HPBC 量产失败 + 行业出清慢双杀触发 -50% 回撤是真实尾部，但相对加密财库的 -85% 回撤已经"温和"。**关键认知**：与阳光（最大回撤 -55% 未来）不同，**隆基的下行 -76% 已大部分发生**。从当前位置再跌 -50% 概率较低（≤12%），更多是"反转能否兑现 + 兑现幅度"的不对称回报曲线。',
        scenarioStdDev: 3400,
        sharpeLike: 0.63,
        probLoss30Pct5Y: 25,
        maxDrawdownEstimate: '-65%（已发生 -76%，新一轮深跌概率小；除非 HPBC 完全失败 + 行业拖到 2029）',
        downsideToUpsideRatio: '下行 1 vs 上行 2.5（中等）',
    },

    sensitivity: {
        narrative: '哪个变量对 10Y 期望市值最敏感？按单变量 ±1σ 扰动排序 ——',
        variables: [
            { variable: '行业产能出清节奏', downImpact: -1500, upImpact: 3000, description: '决定组件价格反弹幅度' },
            { variable: 'HPBC vs TOPCon 技术路线', downImpact: -1800, upImpact: 2500, description: 'HPBC 2.0 量产效率决定差异化能力' },
            { variable: '组件价格反弹幅度', downImpact: -800, upImpact: 2000, description: '从 ¥0.7/W → ¥1.0/W 的反弹空间' },
            { variable: '海外占比提升', downImpact: -500, upImpact: 1000, description: '从 38% → 50% 的全球化空间' },
            { variable: '现金消耗速度', downImpact: -600, upImpact: 200, description: '**单边下行风险** · 决定是否需要增发' },
            { variable: '美国关税', downImpact: -600, upImpact: 400, description: '美国市场约占 10-15%' },
            { variable: '氢能 / BIPV 期权兑现', downImpact: -100, upImpact: 800, description: '**单边上行机会** · 2030 后' },
        ],
        takeaway:
            '**最敏感三变量：行业产能出清节奏、HPBC 技术验证、组件价格反弹**。每季度只盯这三件事就够。**特别警告**：HPBC 路线判断是单边变量（HPBC 2.0 量产效率 ≥26% 是大利好，<25% 是大利空），权重最大；现金消耗速度是单边下行风险（不会因现金多而上涨，但现金少了会增发稀释）。三者同向恶化时（HPBC 失败 + 行业不出清 + 现金消耗），跌幅可能是单变量的乘积效应，触发 -50% 回撤。',
    },

    bearPlaybook: {
        scenario: '"熊市：技术路线再次错误 + 持续亏损"（20% 概率）的完整 ruin 时间线',
        steps: [
            {
                when: '2026 H2 (HPBC 2.0 量产验证)',
                event: '量产效率 <25.5%，市场对 HPBC 失去信心',
                signal: '季报披露效率数据；分析师集体降级',
            },
            {
                when: '2026 H2 (国内组件价格跌破 ¥0.65/W)',
                event: '行业现金成本以下，全行业巨亏',
                signal: '产业链价格跟踪；行业协会数据',
            },
            {
                when: '2026 全年 (亏损扩大)',
                event: '2026 全年亏损 -¥30 亿以上 (vs 2024 -¥86 亿，恶化)',
                signal: '半年报 + 全年报',
            },
            {
                when: '2027 Q1 (现金告急)',
                event: '现金从 ¥460 亿 → <¥320 亿，市场担忧增发',
                signal: '季报现金披露；管理层公告',
            },
            {
                when: '2027 Q2 (评级下调 + 增发)',
                event: '国际评级机构下调；公司宣布增发 100 亿稀释 8% 股本',
                signal: '评级公告；DEF 14A',
            },
            {
                when: '2027 H2 (估值再下台阶)',
                event: 'PB 从 1.4x 压至 0.8x；股价 ¥18 → ¥10 = -45%',
                signal: '估值跟踪；机构集体抛售',
            },
            {
                when: '2028+ (反转或长期低迷)',
                event: '若 HPBC 3.0 推出 / 钙钛矿突破 → 反转；否则估值长期低位徘徊',
                signal: '管理层指引；技术突破公告',
            },
        ],
        exitTrigger:
            '**严格止损规则**：①HPBC 2.0 量产效率 <25.5% (2026 H2 验证) → 减仓 50%；②现金 <¥300 亿 → 立即清仓（增发稀释风险）；③2025 全年亏损 >¥30 亿 → 减仓 30%；④李振国 / 钟宝申战略转向（剥离硅片或放弃 HPBC）→ 立即清仓重新评估。**与阳光关键差异**：隆基是赔率工具，止损要更激进（不允许"等等看"），因为困境反转一旦失败，估值修复需要 5-7 年。',
    },

    capitalAllocation: {
        narrative:
            '李振国 + 钟宝申是"前 A 后 D"的资本配置者：**2014-2021 是 A 股最优质技术派创业家之一**（ROIIC 25-30%），但 **2022-2024 战略错误代价沉重**（HPBC 押注 + 大额 CapEx + 产能利用率下降，ROIIC 跌至 -10%）。**困境反转的核心问题是：他们能否重新找回 2014-2021 的资本配置纪律？** 与 Saylor / 曹仁贤等"全程 A"的资本配置者不同，隆基管理层正在"被市场观察"。',
        scores: [
            { dimension: 'ROIIC', label: '增量资本回报率', score: 2, detail: '2022-2024 大额资本开支后产能利用率下降，回报严重不佳；2025-2026 反转期可能回升', evidence: '历年财报 + ROE -10%' },
            { dimension: 'Buyback', label: '回购节奏', score: 3, detail: '2024 启动 ¥15 亿回购回应市场，但不是主旋律', evidence: '2024 回购公告' },
            { dimension: 'Dividend', label: '股息政策', score: 3.5, detail: '2014-2022 高分红期（派息率 ~30%），2024 亏损后暂停；2026+ 反转后可恢复', evidence: '历年分红方案' },
            { dimension: 'M&A', label: '并购命中率', score: 3, detail: '不大举并购，少数战略投资 (BIPV / 氢能)；整合度一般', evidence: '历史并购案例' },
        ],
        overallGrade: 'B',
        historicalROIIC: '2014-2021 ~25-30% / 2022-2024 -10% / 2025-2026 反转期待验证',
    },

    gapAnalysis: {
        narrative:
            '隆基 2026 关键 gap 是"行业产能出清节奏"——卖方共识对出清完成时点过乐观。HPBC 量产效率 + 现金消耗速度是另外两个关键观察点。',
        rows: [
            { metric: '2025 全年净利润', guidance: '"明显改善"', consensus: '-¥10 亿', selfAssumption: '-¥5 亿', gap: '一致', risk: 'low' },
            { metric: '2026 全年净利润', guidance: '"重回盈利"', consensus: '¥40 亿', selfAssumption: '¥30 亿', gap: '-25% 保守', risk: 'medium' },
            { metric: 'HPBC 2.0 量产时间', guidance: '2025 H2', consensus: '2025 H2 量产', selfAssumption: '2025 H2 - 2026 H1', gap: '略保守', risk: 'medium' },
            { metric: '行业产能出清', guidance: '"2026 完成"', consensus: '"2026 H2 完成"', selfAssumption: '"2027 才能完成"', gap: '**共识过激进 🔴**', risk: 'high', note: '反转兑现晚一年 = 估值差 30%' },
            { metric: '海外占比 2030', guidance: '"目标 50%"', consensus: '45%', selfAssumption: '42%', gap: '略保守', risk: 'medium' },
            { metric: 'HPBC 量产效率', guidance: '"26%+"', consensus: '26%', selfAssumption: '25.5-26%', gap: '略保守', risk: 'high' },
        ],
        takeaway:
            '**最关键 Gap：行业产能出清节奏（共识 2026 H2 完成 vs 自己 2027）**。差异 1 年 = ¥600-1,000 亿市值差。卖方过度乐观 - 中国 5 大龙头都在亏损但都不退出，硬撑现象明显。**业绩爆雷触发点**：2026 H2 行业仍未明显出清 + 隆基亏损扩大 → 共识下修 → 股价 -25-30%。这是反转赌注的核心风险点。',
    },

    benchmarkComparison: {
        narrative:
            '隆基绿能 10Y 期望 CAGR 12.7% vs 被动组合 60% CSI300 + 40% 国债 (~8%) 的超额回报 = **+4.7pp**（marginal 正超额）。**这是档案库当前覆盖中超额回报中等的标的**，远低于阳光电源 (+9.3pp) 和万华 (+5pp)。**机会成本是阳光电源**——同样 A 股光伏赛道、同样技术派创业家，但阳光在爆发期，隆基在反转期。仅适合"赌赔率 + 逆向反转"的投资者。',
        alternatives: [
            { name: 'CSI300', expectedReturn5Y: 7, expectedReturn10Y: 8, note: '中国 A 股宽基' },
            { name: '60% CSI300 + 40% 国债', expectedReturn5Y: 5.5, expectedReturn10Y: 6.5, note: '中国稳健组合' },
            { name: '阳光电源 (300274)', ticker: 'SZ:300274', expectedReturn5Y: 15.4, expectedReturn10Y: 17.3, note: '同赛道 quality compounder' },
            { name: '万华化学 (600309)', ticker: 'SH:600309', expectedReturn5Y: 9, expectedReturn10Y: 9, note: '化工龙头同档对照' },
            { name: '宁德时代 (300750)', ticker: 'SZ:300750', expectedReturn5Y: 13, expectedReturn10Y: 14, note: '电池龙头新能源对照' },
            { name: '通威股份 (600438)', ticker: 'SH:600438', expectedReturn5Y: 11, expectedReturn10Y: 12, note: '同赛道困境同业' },
            { name: 'SPY (S&P 500)', ticker: 'SPY', expectedReturn5Y: 9, expectedReturn10Y: 10, note: '美国宽基' },
            { name: '10Y 中国国债', expectedReturn5Y: 2.5, expectedReturn10Y: 2.5, note: '无风险' },
        ],
        selfReturn5Y: 10.4,
        selfReturn10Y: 12.7,
        excessReturn5Y: 4.9,
        excessReturn10Y: 4.7,
        justifiesPosition: 'marginal',
        takeaway:
            '**超额 4.7pp marginal justify 1-3% 仓位**。但相对阳光电源（+9.3pp）和万华（+5pp），隆基在加权期望意义上是档案库中等水平。**关键判断**：如果只能选一个 A 股新能源标的，阳光电源在所有维度都更优（确定性 + 回报 + 估值 + 质量）。隆基的唯一优势是"赔率 + 估值便宜 + 反转潜力"，适合作为 1-3% 小仓位逆向投机，与阳光 4% 配合形成"光伏赛道双仓位"。',
    },

    trackRecord: {
        narrative:
            '本分析锚定 2026-05-06。以下 6 条假设是未来 12-18 个月可验证命题，3/6/12 月后回看建立分析师自我校准数据。**HPBC 量产 + 行业出清 + 现金消耗**三项是核心先行指标。',
        assumptions: [
            { assumption: '2025 全年亏损收窄到 -¥10 亿以内', setAt: '2026-05-06', targetDate: '2026-04-30', targetValue: '≥-¥10 亿', verdict: 'pending', note: '2026 Q2 验证' },
            { assumption: 'HPBC 2.0 量产效率 ≥26%', setAt: '2026-05-06', targetDate: '2026 H2', targetValue: '≥26%', verdict: 'pending', note: '反转关键' },
            { assumption: '2026 全年重回盈利 ¥30 亿+', setAt: '2026-05-06', targetDate: '2027-04-30', targetValue: '≥¥30 亿', verdict: 'pending', note: '反转兑现' },
            { assumption: '现金及等价物 2026-12 ≥¥350 亿', setAt: '2026-05-06', targetDate: '2027-Q1', targetValue: '≥¥350 亿', verdict: 'pending', note: '不需要增发' },
            { assumption: '海外营收占比 2026 ≥42%', setAt: '2026-05-06', targetDate: '2027-Q1', targetValue: '≥42%', verdict: 'pending', note: '全球化继续' },
            { assumption: '行业组件价格 2026 H2 反弹至 ¥0.85/W+', setAt: '2026-05-06', targetDate: '2026-12-31', targetValue: '≥¥0.85/W', verdict: 'pending', note: '行业出清信号' },
        ],
        hitRate: 'N/A (全部 pending)',
    },

    dataSources: {
        narrative: '本报告数据锚定 2026-05-06。核心数据来自隆基绿能 2024 年报、2025 季报、Wood Mackenzie 全球组件出货排名、CPIA 数据、卖方研报。情景概率与 5Y/10Y 期望为本分析主观推演。**注意**：2025-2026 数据多为估算，需以公司最新季报为准。困境反转标的不确定性较高。',
        accessedAt: '2026-05-06',
        sources: [
            { label: '隆基绿能 投资者关系（官方）', url: 'https://www.longi.com/cn/investors/', category: 'primary', note: '年报 + 季报 + 公告' },
            { label: '隆基绿能 2024 年报（巨潮资讯）', url: 'http://www.cninfo.com.cn/new/disclosure/stock?stockCode=601012&orgId=9900008502', category: 'primary' },
            { label: '隆基绿能 SH:601012 同花顺', url: 'http://stockpage.10jqka.com.cn/601012/', category: 'data' },
            { label: '隆基绿能 东方财富', url: 'https://emweb.eastmoney.com/PC_HSF10/CompanySurvey/Index?code=SH601012', category: 'data' },
            { label: 'Wood Mackenzie 全球组件出货排名 2024', url: 'https://www.woodmac.com/research/products/power-and-renewables/', category: 'research' },
            { label: 'CPIA 中国光伏行业协会', url: 'http://www.chinapv.org.cn/', category: 'research', note: '行业产能 + 价格数据' },
            { label: 'IEA Renewables 2024 报告', url: 'https://www.iea.org/reports/renewables-2024', category: 'research' },
            { label: '中信证券 隆基绿能研报', url: 'https://research.citicsinfo.com/', category: 'research' },
            { label: '华泰证券 隆基绿能研报', url: 'https://www.htsc.com.cn/research', category: 'research' },
            { label: '李振国 + 钟宝申 公开演讲', url: 'https://www.longi.com/cn/news/', category: 'secondary' },
            { label: '雪球 隆基绿能讨论区', url: 'https://xueqiu.com/S/SH601012', category: 'secondary', note: '散户情绪监测' },
            { label: '行业组件价格指数 (PVInsights)', url: 'https://pvinsights.com/', category: 'data', note: '价格跟踪' },
        ],
    },

    correlation: {
        narrative:
            '隆基绿能是**A 股光伏赛道困境反转 β + 中国 β 双敞口**：涨跌主要由组件价格 + HPBC 进展 + 中国 A 股 β + 行业产能出清节奏共同驱动。**与阳光电源相关性 0.55** 中等（同赛道但业务结构差异）；**与晶澳/天合/晶科相关性 0.80** 极高（完全同业）。真正的 hedge 是**反新能源 + 久期资产**。',
        rows: [
            { asset: '阳光电源 (300274)', beta: 0.9, correlation: 0.55, hedgeValue: 'medium', note: '同赛道但逆变器 vs 组件 · 业务结构差异' },
            { asset: '通威股份 (600438)', beta: 1.1, correlation: 0.75, hedgeValue: 'low', note: '直接同业 · 硅料 + 组件' },
            { asset: '晶澳科技 (002459)', beta: 1.0, correlation: 0.80, hedgeValue: 'low', note: '完全同业 · 组件第二' },
            { asset: '天合光能 (688599)', beta: 1.0, correlation: 0.80, hedgeValue: 'low', note: '完全同业 · 组件 + 储能' },
            { asset: '晶科能源 (688223)', beta: 0.9, correlation: 0.78, hedgeValue: 'low', note: '完全同业 · 组件第一' },
            { asset: '宁德时代 (300750)', beta: 0.8, correlation: 0.40, hedgeValue: 'medium', note: '新能源相关 · 业务不重合' },
            { asset: '万华化学 (600309)', beta: 0.7, correlation: 0.30, hedgeValue: 'medium', note: '化工新能源公共因子弱' },
            { asset: '沪深300', beta: 1.0, correlation: 0.55, hedgeValue: 'medium', note: '中国 β' },
            { asset: '美股 First Solar (FSLR)', beta: 0.6, correlation: 0.30, hedgeValue: 'medium', note: '不同技术路线 + 美国市场' },
            { asset: '黄金 (GLD)', beta: -0.05, correlation: 0.05, hedgeValue: 'medium', note: '几乎不相关' },
            { asset: '10Y 中国国债', beta: -0.2, correlation: -0.20, hedgeValue: 'high', note: '反向对冲' },
        ],
        suggestedHedge:
            '如果隆基绿能占组合 1-3%，建议搭配：①**A 股光伏双仓位**：阳光电源 4% + 隆基 1.5% = 5.5% 总光伏敞口（爆发期 + 反转期对冲，但相关 0.55 需控制总仓位）；②**禁止同时持有**：隆基 + 通威 + 晶澳 + 天合 + 晶科超过 6% 是重大风险（相关性 0.75-0.80），同业全军覆没的概率高；③**反向对冲**：10% 中国 10Y 国债 + 3% 黄金（A 股回调时上涨）；④**全球分散**：隆基 1.5% + First Solar 1%（不同技术路线 + 美国市场）。**最佳光伏组合**：阳光 4% + 隆基 1.5% + 宁德 3% + First Solar 1% = 9.5% 总新能源敞口（A+美股新能源四角组合）。**核心原则**：把隆基当成"A 股光伏赛道困境反转赔率工具"——只在阳光为核心持仓的基础上叠加。',
    },
}
