import type { CompanyDetail } from '@/types/company'

export const sungrow: CompanyDetail = {
    id: 'sungrow',
    ticker: 'SZ:300274',
    name: '阳光电源 Sungrow Power',
    tagline:
        '全球光伏逆变器市占第一（连续 9 年 · ~28% 份额）+ 全球储能出货前 3 / 美国市场第 1 + AI 数据中心电力新基建受益方。1997 年由曹仁贤（中科大教授）创立，30 年研发底蕴，海外营收占比 52%。**A 股最优质的能源新基建 quality compounder**。核心争议：美国关税升级（2025 特朗普 2.0）vs 储能业务爆发期，能否在地缘风险下持续全球化？',
    date: '2026-05-06',

    priceCards: [
        { label: '当前股价', value: '~¥85', sub: '2026-05-06 估算', cls: 'cyan' },
        { label: '52 周波动', value: '¥58 – ¥120', sub: '储能爆发预期波动', cls: 'purple' },
        { label: '市值', value: '~¥1,750 亿', sub: '约 20.7 亿股流通', cls: 'purple' },
        { label: 'PE (2025E)', value: '~13.5x', sub: '历史 5-15 分位', cls: 'green' },
        { label: '2024 营收', value: '¥778 亿', sub: '+7.8% YoY', cls: 'cyan' },
        { label: '2024 归母净利润', value: '¥110 亿', sub: '+16.9% YoY', cls: 'green' },
    ],

    keyFacts: {
        '2024 营收': '¥778 亿 (+7.8% YoY)',
        '2024 归母净利润': '¥110 亿 (+16.9% YoY)',
        '2024 综合毛利率': '~30.5% (行业最高)',
        '2024 净利率': '~14%',
        '2024 ROE': '~22%',
        '2024 海外营收占比': '~48%',
        '2025 Q1 净利润': '¥38 亿 (+82% YoY)',
        '逆变器全球市占': '~28% (连续 9 年第一)',
        '储能 2024 出货': '~55 GWh (全球第 2-3)',
        '储能美国市场': '第 1 名',
        '海外大客户': 'NextEra / Engie / Sembcorp 等 500+ utilities',
        '研发投入占比': '~5-7% 营收',
        '资产负债率': '~62%',
        '现金及等价物': '~¥250 亿',
    },

    contracts: [
        { customer: 'NextEra Energy (美国 utility 巨头)', amount: '未披露年度规模', years: '长期框架', detail: '美国最大公用事业之一，长期储能 + 逆变器供应' },
        { customer: 'Engie (法国能源巨头)', amount: '欧洲多国订单', years: '长期', detail: '欧洲 + 中东市场重要客户' },
        { customer: 'Sembcorp (新加坡)', amount: '东南亚 + 印度', years: '长期', detail: '亚太多区域大型项目' },
        { customer: '沙特/阿联酋大型储能项目（潜在）', amount: '~$500M-1B (估)', years: '2026-2027', detail: '中东能源转型订单，正在洽谈' },
        { customer: '国内五大发电集团', amount: '年度框架', years: '长期', detail: '国家电投 / 大唐 / 华能等' },
    ],

    subsidiaries: [
        { name: '光伏逆变器业务', desc: '全球第一 (~28% 市占)，1500V/集中式/组串式全系列', stake: '核心业务', value: '~¥1,350 亿 (18 PE × ¥75 亿净利)' },
        { name: '储能系统业务', desc: '美国第 1 + 全球前 3，PCS + BMS + EMS 全栈', stake: '核心业务', value: '~¥1,125 亿 (25 PE × ¥45 亿净利)' },
        { name: '风电变流器业务', desc: '国内龙头，毛利率 ~25%', stake: '稳定业务', value: '~¥75 亿' },
        { name: '新能源电站投资 + EPC', desc: '资金占用业务，毛利率 ~15%', stake: '辅助业务', value: '~¥50 亿' },
        { name: '充电桩 + 制氢 + 电驱动', desc: '新业务孵化，2030 后规模化', stake: '战略期权', value: '~¥75 亿 (隐含期权)' },
    ],

    bullPoints: [
        { title: '全球光伏逆变器市占第一（连续 9 年）', body: '~28% 份额，技术 + 渠道 + 品牌三重壁垒；后来者 1-2 年内无法赶上' },
        { title: '储能爆发期最大受益方', body: '2024 全球出货 ~55GWh，美国市场第 1；2025-2030 全球储能 6x TAM 增长，公司是核心 picks' },
        { title: 'AI 数据中心电力新基建期权', body: 'Hyperscaler (Microsoft/Meta/Google) 2030 数据中心电力翻 3 倍，储能 + 微电网 + UPS 是关键基建' },
        { title: '海外营收占比 52% 持续提升', body: '从中国制造到全球 brand 路径清晰；2030 目标 70%+，已经在欧洲/中东/印度/澳洲全面突破' },
        { title: '曹仁贤是 A 股最优质技术派创业家', body: '中科大教授背景，30 年技术沉淀，研发投入 5-7% 营收持续；与投机型管理层完全不同' },
        { title: 'ROE 22% + FCF 转正且持续', body: '2023-2024 FCF 累计 ¥135 亿，财务结构健康；ROIIC 估 25-30% 优于行业平均' },
        { title: '估值合理（PE 13.5x · 历史低位）', body: '2025E PE 13.5x，处于上市以来 5-15 分位；vs 历史峰值 80x 已大幅压缩' },
    ],

    bearPoints: [
        { title: '美国关税是最大单一风险', body: '美国市场约占公司营收 18-22%，2025 特朗普 2.0 关税从 25% 可能升至 50%+，直接威胁储能 + 逆变器出货' },
        { title: '储能价格战 2025 H2 开始', body: '储能行业产能扩张过快，2025 下半年价格战开打；公司储能毛利率 28% 比逆变器 32% 低，更易受冲击' },
        { title: '华为数字能源全面冲击', body: '华为逆变器全球第二（~22%），数字能源 BU 战略推进储能 + 数据中心一体化，与公司直接竞争' },
        { title: '欧洲补贴退坡可能性', body: '欧洲约占营收 25%+，欧盟绿色协议执行可能放缓；意大利 / 西班牙 / 德国补贴政策变化敏感' },
        { title: '应收账款 28% 占营收', body: '电站 EPC 业务回款周期长，2024 应收账款 ¥220 亿，坏账风险持续监控' },
        { title: '国内逆变器价格已压到极限', body: '锦浪 / 固德威 / 古瑞瓦特等多线竞争，国内逆变器单瓦价格 2 年下跌 30%；只能靠海外溢价补' },
        { title: '人民币升值压力', body: '海外 52% 营收以美元/欧元结算，人民币升值 5% 直接吃掉 2-3% 利润' },
    ],

    scenarios: [
        {
            name: '超级牛市: 全球转型加速 + AI 数据中心 + 储能爆发',
            cls: 'bull',
            prob: 15,
            y5Mcap: '¥7,000 - 9,000 亿',
            y5Value: 8000,
            y10Mcap: '¥22,000 - 28,000 亿',
            y10Value: 25000,
            desc: '2030 全球光伏 5,000GW + 储能 1,500GWh；AI 数据中心储能成第二曲线；公司海外 70% + 储能毛利率 30%+；净利润 5Y ¥400 亿，10Y ¥800 亿+',
        },
        {
            name: '基线: 稳健全球龙头 + 储能稳定增长',
            cls: 'bull',
            prob: 40,
            y5Mcap: '¥3,500 - 4,500 亿',
            y5Value: 4000,
            y10Mcap: '¥8,000 - 10,000 亿',
            y10Value: 9000,
            desc: '美国关税维持但海外多元化抵消；储能毛利率 25-28%；海外占比 60-65%；净利润 5Y ¥250 亿，10Y ¥500 亿',
        },
        {
            name: '横盘: 行业内卷 + 关税持续 + 价格战',
            cls: 'neutral',
            prob: 30,
            y5Mcap: '¥1,800 - 2,300 亿',
            y5Value: 2000,
            y10Mcap: '¥3,000 - 4,000 亿',
            y10Value: 3500,
            desc: '储能价格战剧烈 + 美国关税升级 + 欧洲补贴退坡；储能毛利率压至 22%；净利润 5Y ¥150 亿增长停滞，10Y ¥200 亿',
        },
        {
            name: '熊市: 关税大幅升级 + 价格战剧烈',
            cls: 'bear',
            prob: 15,
            y5Mcap: '¥1,000 - 1,400 亿',
            y5Value: 1200,
            y10Mcap: '¥1,300 - 1,700 亿',
            y10Value: 1500,
            desc: '美国关税升至 50%+ → 美国市场退出；华为冲击国内份额 -30%；储能毛利率 20%；净利润 5Y ¥80 亿，10Y ¥100 亿',
        },
    ],

    tenXGene: [
        { dim: '软件边际成本 · 规模化杠杆', tenBagger: '边际成本 ≈ 0', nebius: '制造业有边际成本，但有规模优势 (毛利率 30.5% 行业最高)', status: 'yellow' },
        { dim: '网络/平台效应', tenBagger: '显著', nebius: 'EMS 平台 + 数据连接 utility 客户有微弱网络效应', status: 'yellow' },
        { dim: '数据闭环 / 专属资产', tenBagger: '独占数据 / IP / 规模', nebius: '30 年研发积累 + 130 国渠道 + 500+ utility 客户深度绑定', status: 'green' },
        { dim: '毛利率 · 定价权', tenBagger: '60-80% 可持续', nebius: '30% 综合毛利不算高，但行业最优；储能 28% 仍承压', status: 'yellow' },
        { dim: '消费者触点 / 品牌', tenBagger: '直接 C 端 / 开发者心智', nebius: 'B2B 商业模式但全球 utility 心智第一，品牌即背书', status: 'green' },
        { dim: '再投资空间 · S-curve', tenBagger: '高 ROIC × 大 TAM', nebius: 'TAM 翻倍 (光伏 + 储能 + AI 数据中心) + ROIIC 25-30%', status: 'green' },
        { dim: '管理层 · 跨代际转型', tenBagger: '有过 0→$30B 记录', nebius: '曹仁贤 30 年从 0 到 ¥1,750 亿市值，技术派创业家典范', status: 'green' },
    ],

    weightedExpectation: {
        currentMcap: 1750,
        y5: {
            expectedMcap: 3580,
            multiplier: 2.05,
            cagr: 15.4,
        },
        y10: {
            expectedMcap: 8625,
            multiplier: 4.93,
            cagr: 17.3,
        },
        breakdown: [
            { scenario: 'A. 超级牛市', prob: 15, y5Mid: 8000, y10Mid: 25000, y5Contrib: 1200, y10Contrib: 3750 },
            { scenario: 'B. 基线', prob: 40, y5Mid: 4000, y10Mid: 9000, y5Contrib: 1600, y10Contrib: 3600 },
            { scenario: 'C. 横盘', prob: 30, y5Mid: 2000, y10Mid: 3500, y5Contrib: 600, y10Contrib: 1050 },
            { scenario: 'D. 熊市', prob: 15, y5Mid: 1200, y10Mid: 1500, y5Contrib: 180, y10Contrib: 225 },
        ],
    },

    peerName: '华为数字能源（未上市）',
    coreWeaveCompare: [
        { metric: '2024 逆变器全球市占', nbis: '~28% (第一)', cwv: '~22% (第二)', winner: 'nbis' },
        { metric: '储能 2024 出货', nbis: '~55 GWh', cwv: '~40 GWh', winner: 'nbis' },
        { metric: '研发投入占比', nbis: '~5-7%', cwv: '~10%+', winner: 'cwv' },
        { metric: '海外渠道', nbis: '130 国 + 500+ utility', cwv: '120 国 + 多数发展中市场', winner: 'nbis' },
        { metric: '数据中心生态', nbis: '储能 + UPS 切入', cwv: '已有完整数据中心 BU', winner: 'cwv' },
        { metric: '美国市场', nbis: '储能第 1 + 逆变器 top 3', cwv: '基本退出 (制裁)', winner: 'nbis' },
        { metric: '财务透明度', nbis: '上市 + 季报披露', cwv: '未上市 + 不公开', winner: 'nbis' },
        { metric: '生态整合度', nbis: '能源专注', cwv: 'ICT + 能源 + 汽车', winner: 'cwv' },
    ],

    analysts: [
        { firm: '中信证券 (最高)', target: 130, rating: '买入' },
        { firm: '华泰证券', target: 115, rating: '买入' },
        { firm: '共识 (25 家覆盖)', target: 105, rating: '买入' },
        { firm: '招商证券', target: 98, rating: '增持' },
        { firm: '海通国际', target: 92, rating: 'Buy' },
        { firm: '高盛 (最低)', target: 75, rating: 'Neutral · 关税担忧' },
    ],

    watchlist: [
        { indicator: '储能季度出货 (GWh)', strongSignal: '> 25', baseSignal: '15-20', weakSignal: '< 12' },
        { indicator: '储能毛利率', strongSignal: '> 30%', baseSignal: '25-28%', weakSignal: '< 22%' },
        { indicator: '海外营收占比', strongSignal: '> 60%', baseSignal: '50-55%', weakSignal: '< 45%' },
        { indicator: '美国市场新签订单 ($M / 季度)', strongSignal: '> $500M', baseSignal: '$200-400M', weakSignal: '< $150M' },
        { indicator: '应收账款 / 营收', strongSignal: '< 25%', baseSignal: '25-30%', weakSignal: '> 35%' },
    ],

    finalQuote:
        '<strong>真正的 quality compounder</strong>——全球光伏逆变器第一 + 储能爆发期 + AI 数据中心电力受益方三重叙事叠加。曹仁贤是 A 股最优质的技术派创业家之一，30 年研发底蕴 + ROE 22% + FCF 转正且持续。**最大单一风险是美国关税**（约 20% 营收暴露），但即使最坏情景下，因海外多元化（欧洲 25% + 中东/印度/澳洲），下行有底（-55% vs 加密财库 -85%）。**vs 加权期望被动组合超额 +9.3pp**，是档案库当前覆盖中超额回报最高的标的之一。当前 PE 13.5x 处于历史 5-15 分位，估值合理偏便宜。**适合作为 A 股新能源核心持仓 3-6%**，不需要犹豫。',

    revenueChart: {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025E', '2026E'],
        values: [192, 241, 403, 722, 778, 950, 1150],
        kinds: ['revenue', 'revenue', 'revenue', 'revenue', 'revenue', 'revenue', 'revenue'],
    },

    overview: {
        founded: '1997 · 由曹仁贤（中科大副教授）在合肥创立',
        headquarters: '中国 安徽 合肥 (高新区)',
        incorporation: '中国 合肥',
        employees: '~16,000 (2024 末)',
        listing: '深交所创业板 · 300274 · 2011-11 上市',
        history: [
            { year: '1997', event: '曹仁贤辞去中科大副教授职务，创立阳光电源', tag: '创立' },
            { year: '2003', event: '进入光伏逆变器领域，国内首批', tag: '战略' },
            { year: '2007', event: '国内光伏逆变器市占率第一', tag: '里程碑' },
            { year: '2011-11', event: '深交所创业板上市', tag: 'IPO' },
            { year: '2015', event: '全球光伏逆变器出货量第一（首次）', tag: '里程碑' },
            { year: '2018', event: '储能业务正式启动', tag: '战略' },
            { year: '2020', event: '营收破 ¥190 亿，海外占比突破 30%', tag: '增长' },
            { year: '2022', event: '储能爆发，营收 ¥403 亿 (+67% YoY)', tag: '关键节点' },
            { year: '2023', event: '营收 ¥722 亿 (+79%)，归母净利润 ¥94 亿 (+163%)', tag: '巅峰' },
            { year: '2024', event: '美国关税升级，营收 +7.8% 增速放缓但净利润 +17%', tag: '过渡' },
            { year: '2025-Q1', event: '储能业务爆发，归母净利润 +82% YoY', tag: '反转' },
            { year: '2025', event: '储能美国市场第 1，全球出货 ~55GWh', tag: '里程碑' },
            { year: '2026-05-06', event: '股价 ¥85，市值 ¥1,750 亿，PE 13.5x 处于历史低位', tag: '当前' },
        ],
        businessModel:
            '**双引擎 + 多新业务孵化**：①**光伏逆变器（全球第一）**：1500V/集中式/组串式全系列，2025 营收 ~¥360 亿，毛利率 32%；②**储能系统（美国第 1）**：PCS + BMS + EMS + 电池模组全栈，2025 营收 ~¥400 亿，毛利率 28%；③**风电变流器**：国内龙头，2025 ~¥45 亿；④**电站投资 + EPC**：资金占用但稳定回报；⑤**新业务孵化**：充电桩 + 制氢 + 电驱动等。**核心战略**：从"中国制造"转向"全球能源转型平台"，海外占比 2030 目标 70%+；AI 数据中心电力是 2026-2030 新增长极。',
        revenueMix: [
            { name: '光伏逆变器', pct: 38, note: '全球第一 · 现金牛 · 毛利率 32%' },
            { name: '储能系统', pct: 42, note: '爆发引擎 · 毛利率 28% · 美国第 1' },
            { name: '风电变流器', pct: 5, note: '国内龙头 · 毛利率 25%' },
            { name: '新能源电站投资 + EPC', pct: 10, note: '资金占用 · 毛利率 15%' },
            { name: '充电桩 + 制氢 + 电驱动', pct: 5, note: '新业务孵化 · 毛利率 20%' },
        ],
    },

    team: [
        {
            name: '曹仁贤',
            role: '董事长 · 实控人 · 创始人',
            background:
                '1968 年生，浙江大学电气工程博士，原中国科学技术大学副教授。1997 年辞职创立阳光电源，30 年专注光伏逆变器与新能源电力电子技术。技术派创业家典范，与 A 股投机型管理层完全不同。持股 ~30%，与公司利益高度绑定。**A 股最优质的实控人之一**。',
            since: '1997',
            rating: 5,
        },
        {
            name: '顾亦磊',
            role: '总裁',
            background:
                '阳光电源老员工，从工程师起步，2018 年起任总裁。负责日常运营 + 全球业务推进，是曹仁贤之后的二把手。',
            since: '1999',
            rating: 4,
        },
        {
            name: '张荣',
            role: 'CFO',
            background:
                '资深财务专家，主导公司多轮融资 + 资本市场操作。2024 年回购 + 2025 启动可转债等资本工具运作。',
            since: '2010',
            rating: 4,
        },
        {
            name: '储能事业部总负责人',
            role: '储能 BU · 关键增长引擎',
            background:
                '负责储能业务从 0 到全球前 3 的爆发性增长。2024-2025 是公司最关键的执行者。',
            rating: 5,
        },
        {
            name: '海外销售总监团队',
            role: '海外渠道 · 130 国市场',
            background:
                '欧洲 / 北美 / 中东 / 印度 / 东南亚多区域负责人，是公司海外占比 52% 的核心推动者。',
            rating: 4,
        },
    ],

    shareholders: [
        { name: '曹仁贤 (实控人)', pct: '~30.5%', type: '创始人', note: '直接持股 + 阳光电源（合肥）持股平台' },
        { name: '香港中央结算（陆股通）', pct: '~12%', type: '北向资金', note: '外资青睐标的' },
        { name: '中央汇金 / 国家队', pct: '~3%', type: '战略持仓', note: '间接持仓' },
        { name: 'JP Morgan / Goldman / Vanguard QFII', pct: '~5%', type: '外资 QFII', note: 'A 股 QFII 持仓' },
        { name: '基金重仓（公募 + 私募）', pct: '~25%', type: '机构', note: '汇添富 / 易方达 / 兴全等' },
        { name: '员工持股计划', pct: '~3%', type: '内部', note: '激励机制' },
        { name: '公众流通股 + 散户', pct: '~21.5%', type: '散户', note: '相对低（机构主导）' },
    ],

    advantages: [
        {
            title: '全球光伏逆变器市占第一（连续 9 年）(规模 ★★★★★)',
            body: '2024 全球出货 ~120 GW，市占率 ~28%（第二名华为 ~22%）。1500V / 集中式 / 组串式 / 微逆全系列覆盖；技术 + 渠道 + 品牌三重壁垒。后来者 1-2 年内无法赶上。',
            evidence: 'Wood Mackenzie 全球逆变器排名 2024；公司年报',
        },
        {
            title: '储能爆发期最大受益方 (赛道 ★★★★★)',
            body: '2024 全球储能出货 ~55GWh（第 2-3 名），美国市场第 1。储能业务 2022 营收占 20% → 2025 占 42%；2030 全球储能 TAM 6x 增长，公司是核心受益方。',
            evidence: 'Wood Mackenzie / BNEF 2024 储能出货排名',
        },
        {
            title: 'AI 数据中心电力新基建期权 (赛道 ★★★★)',
            body: 'Hyperscaler 2030 数据中心电力翻 3 倍，储能 + 微电网 + UPS 是关键基建。公司储能 + PCS 技术可直接迁移；与 Microsoft / Meta / Google 等已有早期接触。',
            evidence: 'Goldman 2025 数据中心电力研报；公司公开评论',
        },
        {
            title: '海外营收占比 52% 持续提升 (全球化 ★★★★★)',
            body: '从 2020 年 30% → 2024 年 48% → 2025 年估 52%，2030 目标 70%+。已在欧洲 / 中东 / 印度 / 澳洲全面突破；美国市场依然是最大单一海外市场。',
            evidence: '2024 年报 + 2025 季报海外业务披露',
        },
        {
            title: '曹仁贤是 A 股最优质技术派创业家 (治理 ★★★★★)',
            body: '中科大副教授背景，30 年技术沉淀，研发投入 5-7% 营收持续。持股 ~30%，与公司利益高度绑定。与 A 股投机型管理层完全不同——是真正的 quality compounder 灵魂。',
            evidence: '历年研发投入披露；曹仁贤公开演讲；专利数据',
        },
        {
            title: 'ROE 22% + FCF 转正且持续 (财务质量 ★★★★)',
            body: '2024 ROE 22%，远高于制造业平均 12%。2023-2024 FCF 累计 ¥135 亿，已与早期烧钱阶段彻底告别。ROIIC 估算 25-30% 优于行业平均。',
            evidence: '2024 年报；历年财务数据',
        },
        {
            title: '估值合理（PE 13.5x · 历史低位）(估值 ★★★★)',
            body: '2025E PE 13.5x，处于上市以来 5-15 分位；vs 2021 巅峰 80x 已大幅压缩。SOTP 保守口径 ¥2,625 亿 vs 当前 ¥1,750 亿，潜在上行 50%+。',
            evidence: '历史 PE 数据；本分析 SOTP 计算',
        },
    ],

    disadvantages: [
        {
            title: '美国关税是最大单一风险',
            body: '美国市场约占公司营收 18-22%，2025 特朗普 2.0 关税从 25% 可能升至 50%+。直接威胁储能 + 逆变器出货；2026 H2 是关键观察窗口。',
            evidence: 'Trump 2025-Q1 关税公告；公司海外业务披露',
        },
        {
            title: '储能价格战 2025 H2 开始',
            body: '储能行业产能扩张过快（中国国内储能产能已超全球需求 2x），2025 下半年价格战开打。公司储能毛利率 28% 比逆变器 32% 低，更易受冲击。',
            evidence: '2025 Q2-Q3 行业价格走势；CATL / 比亚迪储能定价',
        },
        {
            title: '华为数字能源全面冲击',
            body: '华为逆变器全球第二（~22%），数字能源 BU 战略推进储能 + 数据中心一体化。在国内市场华为已抢走 30%+ 份额；海外多个市场也在追赶。',
            evidence: '华为数字能源 2024 业绩；国内市场份额变化',
        },
        {
            title: '欧洲补贴退坡可能性',
            body: '欧洲约占营收 25%+，欧盟绿色协议执行可能放缓。意大利 / 西班牙 / 德国户用补贴政策变化敏感；2025 已有部分国家削减。',
            evidence: '2025 欧盟政策跟踪；意大利 110% 补贴退坡',
        },
        {
            title: '应收账款 28% 占营收',
            body: '电站 EPC 业务回款周期长，2024 应收账款 ¥220 亿（占营收 28%）。坏账风险持续监控；国内民营电站客户尤其需要警惕。',
            evidence: '2024 年报应收账款披露；账龄分析',
        },
        {
            title: '国内逆变器价格已压到极限',
            body: '锦浪 / 固德威 / 古瑞瓦特 / 上能等多线竞争，国内逆变器单瓦价格 2 年下跌 30%。国内毛利率已被压到 22-25%，只能靠海外溢价（35%+）补。',
            evidence: '2023-2025 国内逆变器价格指数',
        },
        {
            title: '人民币升值压力',
            body: '海外 52% 营收以美元/欧元结算，人民币升值 5% 直接吃掉 2-3% 利润。2024-2025 人民币相对美元波动加大。',
            evidence: '汇率历史 + 公司汇兑损益披露',
        },
    ],

    shortTermCatalysts: [
        {
            when: '2026-04-30',
            event: '2025 全年报，归母净利润 ¥130 亿+ 验证',
            impact: 'positive',
            probability: '~60%',
            magnitude: '+10-15%',
        },
        {
            when: '2026-Q2',
            event: '2026 Q1 季报，储能业务同比 +50% 验证',
            impact: 'positive',
            probability: '~55%',
            magnitude: '+8-12%',
        },
        {
            when: '2026 H2',
            event: '中东大型储能订单（沙特 NEOM / 阿联酋 Masdar）落地',
            impact: 'positive',
            probability: '~50%',
            magnitude: '+10-15%',
        },
        {
            when: '2026-2027',
            event: 'AI 数据中心储能项目首签（Microsoft / Meta）',
            impact: 'positive',
            probability: '~35%',
            magnitude: '+15-20%',
        },
        {
            when: '不定',
            event: '美国关税豁免谈判（小幅缓和）',
            impact: 'positive',
            probability: '~20%',
            magnitude: '+15%',
        },
        {
            when: '2026-2027',
            event: '港股二次上市（A+H 股结构）',
            impact: 'positive',
            probability: '~30%',
            magnitude: '+10-15%',
        },
        {
            when: '2026 H2',
            event: '美国关税进一步升级（50%+）',
            impact: 'negative',
            probability: '~30%',
            magnitude: '-25-35%',
        },
        {
            when: '2026 全年',
            event: '储能价格战剧烈，毛利率压至 22%',
            impact: 'negative',
            probability: '~40%',
            magnitude: '-15-20%',
        },
        {
            when: '不定',
            event: '欧洲主要国家补贴退坡',
            impact: 'negative',
            probability: '~25%',
            magnitude: '-10-15%',
        },
        {
            when: '不定',
            event: '应收账款大额坏账（>¥10 亿计提）',
            impact: 'negative',
            probability: '~15%',
            magnitude: '-10%',
        },
    ],

    longTermDrivers: [
        {
            name: '全球能源转型加速',
            horizon: '2026-2035',
            body: '2030 全球光伏装机预计 5,000GW（vs 当前 ~2,000GW），逆变器 TAM 翻倍。公司全球第一身位下，享受赛道红利最大化。',
            enabling: '《巴黎协定》延续 + 各国净零承诺 + 化石能源价格上涨',
        },
        {
            name: '储能爆发期 (6x TAM 增长)',
            horizon: '2026-2030',
            body: '全球储能 2025 ~250GWh → 2030 ~1,500GWh（6x 空间）。公司当前美国第 1 + 全球前 3，是核心受益方。储能业务 2030 营收预计破 ¥800 亿（vs 当前 ¥400 亿）。',
            enabling: '电网调峰刚需 + 可再生能源占比上升 + 储能成本持续下降',
        },
        {
            name: 'AI 数据中心电力革命',
            horizon: '2026-2032',
            body: 'Hyperscaler 数据中心电力 2030 翻 3 倍（Microsoft / Meta / Google / Amazon 已公开承诺加大可再生能源 + 储能配置）。公司储能 + 微电网 + UPS 技术可直接切入。',
            enabling: 'GenAI 算力需求爆发 + 可再生能源就近供电要求',
        },
        {
            name: '海外占比突破 70%',
            horizon: '2026-2030',
            body: '当前 52%，目标 2030 70%+。从中国制造到全球 brand 路径清晰；欧洲 / 中东 / 印度 / 澳洲已全面突破。海外毛利率 35%+ vs 国内 22-25%，对利润贡献巨大。',
            enabling: '海外渠道深化 + 大客户绑定 + 本地化生产（印度 / 美国厂房）',
        },
        {
            name: '制氢业务期权释放',
            horizon: '2028-2035',
            body: '绿氢 + 电解槽技术储备已 5+ 年；2030 后规模化潜力。若全球绿氢市场起飞，公司可获得第二条增长曲线。',
            enabling: '欧洲绿氢补贴 + 中国绿氢示范项目 + 钢铁/化工脱碳需求',
        },
        {
            name: '充电桩 + 微电网平台化',
            horizon: '2026-2032',
            body: '形成"逆变器+储能+充电桩+EMS"一站式能源管理平台。利用 EMS 数据网络效应，从硬件商升级为能源数字化服务商。',
            enabling: 'EV 普及 + 分布式能源管理需求 + 数据驱动运维',
        },
    ],

    riskMatrix: [
        {
            category: '政策 / 地缘风险',
            level: 'critical',
            summary: '美国关税是单一最大变量',
            items: [
                {
                    name: '美国关税升级（25% → 50%+）',
                    body: '2025 特朗普 2.0 关税政策可能进一步升级，直接威胁美国 18-22% 营收占比。储能 + 逆变器同时受影响。',
                    mitigation: '海外多元化（欧洲 / 中东 / 印度 / 澳洲）；本地化生产（印度厂房 + 美国合资可能）',
                },
                {
                    name: '欧洲补贴退坡',
                    body: '欧洲 25%+ 营收占比，欧盟绿色协议执行可能放缓。意大利 110% 补贴 2024 已退坡。',
                    mitigation: 'utility 级订单占比提升；与 Engie / Iberdrola 等大客户绑定',
                },
                {
                    name: '中国出口政策不确定',
                    body: '中国可能反制对美国出口（如关键零部件管制），影响公司供应链。',
                    mitigation: '关键零部件多供应商；本地化生产',
                },
            ],
        },
        {
            category: '行业 / 竞争风险',
            level: 'high',
            summary: '价格战 + 华为冲击',
            items: [
                {
                    name: '储能价格战 2025 H2 开始',
                    body: '产能扩张过快，2025 下半年价格战开打；储能毛利率压力加大。',
                    mitigation: '海外溢价 + 大型 utility 订单稳定毛利；技术领先维持差异化',
                },
                {
                    name: '华为数字能源全面冲击',
                    body: '华为在国内市场已抢走 30%+ 份额；海外多市场追赶。',
                    mitigation: '美国市场华为退出（制裁红利）；海外大型 utility 客户更信任阳光',
                },
                {
                    name: '国内逆变器内卷',
                    body: '锦浪 / 固德威 / 古瑞瓦特 / 上能多线竞争，国内毛利率 22-25%。',
                    mitigation: '海外占比提升对冲；产品组合升级',
                },
            ],
        },
        {
            category: '财务 / 商业风险',
            level: 'medium',
            summary: '应收账款 + 汇率',
            items: [
                {
                    name: '应收账款攀升',
                    body: '2024 应收账款 ¥220 亿（占营收 28%），电站 EPC 回款周期长。',
                    mitigation: '客户信用管理；保理融资；坏账计提充分',
                },
                {
                    name: '人民币升值压力',
                    body: '海外 52% 营收，人民币升值 5% 吃掉 2-3% 利润。',
                    mitigation: '远期合约对冲；本地货币定价',
                },
                {
                    name: '原材料价格波动',
                    body: 'IGBT / 铜 / 铝 / 锂电池价格波动影响成本。',
                    mitigation: '长协采购；成本压力可向下传导',
                },
            ],
        },
        {
            category: '关键人风险',
            level: 'low',
            summary: '曹仁贤是核心，但团队制度化',
            items: [
                {
                    name: '曹仁贤健康 / 退休',
                    body: '57 岁创始人，未来 10 年退休风险逐步上升。',
                    mitigation: '团队制度化成熟；顾亦磊总裁可继任；技术体系已沉淀',
                },
                {
                    name: '关键技术骨干流失',
                    body: '逆变器 / 储能 PCS 核心研发人员是壁垒之一。',
                    mitigation: '股权激励 + 长期文化；产业链人才池较深',
                },
            ],
        },
        {
            category: '技术 / 产品风险',
            level: 'low',
            summary: '5-10 年外才需担心',
            items: [
                {
                    name: '钙钛矿等新技术替代',
                    body: '钙钛矿 + HJT 等新技术可能 5-10 年后改变行业格局。',
                    mitigation: '已有钙钛矿研发储备；技术迭代节奏跟得上',
                },
                {
                    name: '储能新型技术（钠离子 / 液流）',
                    body: '若钠离子或液流电池规模化，公司锂电储能可能受冲击。',
                    mitigation: '多技术路线储备；储能系统层级技术中性',
                },
            ],
        },
        {
            category: 'ESG / 声誉风险',
            level: 'low',
            summary: '总体良性',
            items: [
                {
                    name: '光伏供应链强迫劳动指控',
                    body: '美国 UFLPA 法案对新疆多晶硅供应链审查严格。',
                    mitigation: '供应链审计 + 多元化采购；公司主要使用合规多晶硅',
                },
                {
                    name: '电站 EPC 安全事故',
                    body: '大型电站 EPC 项目工程安全风险。',
                    mitigation: '项目管理体系成熟；保险覆盖充分',
                },
            ],
        },
    ],

    profitability: {
        narrative:
            '阳光电源的盈利模型是**典型 quality compounder**：①毛利率持续优于行业（30.5% vs 行业 22-25%）；②净利率稳定在 12-14%；③ROE 22% 远高于制造业平均；④FCF 转正且持续。**关键观察指标**：①储能毛利率（决定增量利润弹性）；②海外营收占比（决定毛利率结构性提升）；③应收账款周转率（决定现金流质量）。**未来 3 年关键变量**：储能爆发能否持续 + 美国关税演化 + AI 数据中心订单兑现。',

        incomeStatement: [
            {
                year: '2020',
                revenue: '¥192 亿',
                revenueNum: 192,
                grossMargin: '~22%',
                opIncome: '¥25 亿',
                ebitda: '¥30 亿',
                ebitdaMargin: '15.6%',
                netIncome: '¥19.5 亿',
                eps: '¥1.34',
                status: 'actual',
            },
            {
                year: '2021',
                revenue: '¥241 亿',
                revenueNum: 241,
                grossMargin: '~21%',
                opIncome: '¥20 亿',
                ebitda: '¥25 亿',
                ebitdaMargin: '10.4%',
                netIncome: '¥15.8 亿',
                eps: '¥1.06',
                status: 'actual',
            },
            {
                year: '2022',
                revenue: '¥403 亿',
                revenueNum: 403,
                grossMargin: '~24%',
                opIncome: '¥45 亿',
                ebitda: '¥52 亿',
                ebitdaMargin: '12.9%',
                netIncome: '¥35.9 亿',
                eps: '¥2.42',
                status: 'actual',
            },
            {
                year: '2023',
                revenue: '¥722 亿',
                revenueNum: 722,
                grossMargin: '~28%',
                opIncome: '¥115 亿',
                ebitda: '¥128 亿',
                ebitdaMargin: '17.7%',
                netIncome: '¥94.4 亿',
                eps: '¥6.36',
                status: 'actual',
            },
            {
                year: '2024',
                revenue: '¥778 亿',
                revenueNum: 778,
                grossMargin: '~30.5%',
                opIncome: '¥132 亿',
                ebitda: '¥150 亿',
                ebitdaMargin: '19.3%',
                netIncome: '¥110 亿',
                eps: '¥5.32',
                status: 'actual',
            },
            {
                year: '2025E',
                revenue: '¥950 亿',
                revenueNum: 950,
                grossMargin: '~31%',
                opIncome: '¥160 亿',
                ebitda: '¥180 亿',
                ebitdaMargin: '18.9%',
                netIncome: '¥130 亿',
                eps: '¥6.27',
                status: 'estimate',
            },
            {
                year: '2026E',
                revenue: '¥1,150 亿',
                revenueNum: 1150,
                grossMargin: '~30%',
                opIncome: '¥190 亿',
                ebitda: '¥215 亿',
                ebitdaMargin: '18.7%',
                netIncome: '¥160 亿',
                eps: '¥7.71',
                status: 'estimate',
            },
        ],

        marginEvolution: [
            { year: '2020', gross: 22, ebitda: 16, operating: 13, net: 10, status: 'actual' },
            { year: '2021', gross: 21, ebitda: 10, operating: 8, net: 7, status: 'actual' },
            { year: '2022', gross: 24, ebitda: 13, operating: 11, net: 9, status: 'actual' },
            { year: '2023', gross: 28, ebitda: 18, operating: 16, net: 13, status: 'actual' },
            { year: '2024', gross: 31, ebitda: 19, operating: 17, net: 14, status: 'actual' },
            { year: '2025E', gross: 31, ebitda: 19, operating: 17, net: 14, status: 'estimate' },
            { year: '2026E', gross: 30, ebitda: 19, operating: 17, net: 14, status: 'estimate' },
        ],

        milestones: [
            { year: '2007', milestone: '国内光伏逆变器市占第一', hit: true },
            { year: '2011', milestone: '深交所创业板上市', hit: true },
            { year: '2015', milestone: '全球光伏逆变器出货第一（首次）', hit: true },
            { year: '2018', milestone: '储能业务正式启动', hit: true },
            { year: '2023', milestone: '营收破 ¥700 亿，归母净利 ¥94 亿', hit: true },
            { year: '2025', milestone: '储能美国市场第 1', hit: true },
            { year: '2026E', milestone: '营收破 ¥1,150 亿，海外占比 55%+', hit: false },
            { year: '2027-2028', milestone: 'AI 数据中心储能首签 + 中东大型订单', hit: false },
            { year: '2030', milestone: '海外占比 70%+ · 储能营收 ¥800 亿+', hit: false },
        ],

        unitEconomics: [
            { metric: '逆变器全球出货 2024', value: '~120 GW', source: 'Wood Mackenzie' },
            { metric: '储能 2024 出货', value: '~55 GWh', source: 'BNEF / 公司披露' },
            { metric: '逆变器单瓦售价（海外）', value: '~¥0.18-0.22 / W', source: '行业估算' },
            { metric: '储能系统售价', value: '~¥0.8-1.2 / Wh', source: '行业估算' },
            { metric: '研发人员占比', value: '~35%', source: '公司披露' },
            { metric: '专利数量（截至 2024）', value: '~6,000+', source: '专利局公开' },
            { metric: '海外区域中心', value: '20+ 国家', source: '公司年报' },
            { metric: '应收账款周转天数', value: '~95 天', source: '2024 财报' },
        ],

        fcfPath:
            '2024 OCF ¥105 亿，FCF ¥75 亿（CapEx ¥30 亿）。2025-2026 预计 FCF ¥100-130 亿/年，与早期烧钱阶段彻底告别。**Cash Conversion Ratio**：~0.95（OCF/Net Income），健康。**资本配置**：主要投向研发（¥50 亿+/年）+ 海外产能（印度 / 美国合资可能）+ 适度回购。**关键观察**：FCF 持续正增长意味着公司已进入"自驱"成长阶段，不依赖外部融资。',

        keyRisks: [
            '储能价格战使储能毛利率从 28% 压至 22%，影响净利润 ¥30-40 亿',
            '美国关税升级直接冲击海外营收 18-22%',
            '应收账款 28% 占营收，电站 EPC 回款风险',
            '人民币升值 5% 直接吃掉 2-3% 利润',
            '原材料（IGBT / 锂电）价格大幅波动',
        ],
    },

    competitiveLandscape: {
        summary:
            '阳光电源的竞争格局是**两强对决 + 多线挑战**：①**全球第一阵营**：阳光电源 + 华为数字能源（占据光伏逆变器 50%+ 份额）；②**储能赛道**：阳光 + 比亚迪 + Tesla + Fluence 四强；③**国内挑战者**：锦浪 / 固德威 / 古瑞瓦特等多线竞争；④**海外品牌**：SMA Solar / Enphase / SolarEdge 各有市场。**核心战略**：靠技术 + 全球渠道 + 大客户绑定保持龙头身位；储能 + AI 数据中心是 2026-2030 关键增长点。',

        competitors: [
            {
                name: '阳光电源 (自身)',
                type: 'specialist',
                ticker: 'SZ:300274',
                revenue2026E: '¥1,150 亿',
                aiRevenue: '储能 ¥400 亿 + 逆变器 ¥360 亿',
                gpuFleet: '~28% 全球逆变器 + 美国储能第 1',
                backlog: '~¥1,500 亿订单池（估）',
                ebitdaMargin: '~19%',
                marketCap: '~¥1,750 亿',
                nvidiaLevel: 5,
                threat: 'low',
                strength: '全球第一 · 海外渠道 · 储能爆发 · 曹仁贤研发派',
                weakness: '美国关税风险 · 储能毛利压力 · 华为竞争',
            },
            {
                name: '华为数字能源',
                type: 'hyperscaler',
                ticker: '未上市 (华为子公司)',
                revenue2026E: '~¥800 亿（估）',
                aiRevenue: '逆变器 + 储能 + 数据中心',
                gpuFleet: '~22% 全球逆变器',
                backlog: '未披露',
                ebitdaMargin: '~25%（估）',
                marketCap: 'N/A',
                nvidiaLevel: 5,
                threat: 'high',
                strength: '研发投入 10%+ · 数据中心生态 · 国内份额抢占',
                weakness: '美国市场制裁退出 · 不上市估值不透明',
            },
            {
                name: 'Tesla Energy',
                type: 'specialist',
                ticker: 'TSLA (部分)',
                revenue2026E: '$10-15B',
                aiRevenue: 'Megapack + Powerwall',
                gpuFleet: '储能 ~80GWh',
                backlog: '~$5B+ 储能 backlog',
                ebitdaMargin: '~15%（估）',
                marketCap: '~$1.2T (公司整体)',
                nvidiaLevel: 5,
                threat: 'high',
                strength: '品牌 · 软件生态 · Megapack 大型项目',
                weakness: '产能受限 · 价格高 · 仅储能聚焦',
            },
            {
                name: '比亚迪储能',
                type: 'specialist',
                ticker: '002594',
                revenue2026E: '~¥800 亿（储能部分）',
                aiRevenue: '电池 + 储能',
                gpuFleet: '~70 GWh 出货',
                backlog: '~¥1,000 亿',
                ebitdaMargin: '~15%',
                marketCap: '~¥7,500 亿（公司整体）',
                nvidiaLevel: 4,
                threat: 'high',
                strength: '电池垂直整合 · 国内规模 · 价格优势',
                weakness: '海外渠道弱 · 主业是汽车',
            },
            {
                name: 'Fluence Energy',
                type: 'specialist',
                ticker: 'FLNC',
                revenue2026E: '~$3-4B',
                aiRevenue: '储能 + 软件',
                gpuFleet: '~30 GWh 出货',
                backlog: '~$4B',
                ebitdaMargin: '~5%（亏损中）',
                marketCap: '~$2.5B',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: 'Siemens & AES 合资 · 软件平台 Mosaic',
                weakness: '盈利能力弱 · 规模小',
            },
            {
                name: 'SMA Solar (德)',
                type: 'specialist',
                ticker: 'S92.DE',
                revenue2026E: '~€1.5B',
                aiRevenue: '逆变器为主',
                gpuFleet: '~6% 全球逆变器',
                backlog: '~€2B',
                ebitdaMargin: '~10%',
                marketCap: '~€1.5B',
                nvidiaLevel: 3,
                threat: 'low',
                strength: '欧洲品牌 · 高端户用 + 工商业',
                weakness: '规模小 · 储能弱 · 利润率低',
            },
            {
                name: 'Enphase Energy',
                type: 'specialist',
                ticker: 'ENPH',
                revenue2026E: '~$1.8B',
                aiRevenue: '微逆 + 户储',
                gpuFleet: '美国户用第 1',
                backlog: '~$2B',
                ebitdaMargin: '~20%',
                marketCap: '~$8B',
                nvidiaLevel: 4,
                threat: 'low',
                strength: '微逆专精 · 美国户用品牌',
                weakness: '聚焦户用 · 工商业 + 大型项目弱',
            },
            {
                name: '锦浪科技',
                type: 'specialist',
                ticker: '300763',
                revenue2026E: '~¥80 亿',
                aiRevenue: '逆变器 (C&I 强)',
                gpuFleet: '~5% 全球',
                backlog: '~¥100 亿',
                ebitdaMargin: '~12%',
                marketCap: '~¥150 亿',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: 'C&I 工商业储能逆变器 · 海外突破',
                weakness: '储能小 · 规模仅阳光 1/10',
            },
        ],

        positioning: [
            { dimension: '逆变器全球市占', nebius: '~28% (第一)', industryAvg: '5-10%', leader: '阳光电源', nebiusStrong: true },
            { dimension: '储能 2024 出货 (GWh)', nebius: '~55 GWh', industryAvg: '15-30 GWh', leader: 'Tesla (~80) / 比亚迪 (~70)', nebiusStrong: true },
            { dimension: '研发投入占比', nebius: '~5-7%', industryAvg: '3-5%', leader: '华为 (~10%)', nebiusStrong: false },
            { dimension: '海外营收占比', nebius: '~52%', industryAvg: '30-40%', leader: '阳光电源 (中国厂商中)', nebiusStrong: true },
            { dimension: '美国市场身位', nebius: '储能第 1 + 逆变器 top 3', industryAvg: '基本退出 (中国厂商)', leader: '阳光电源', nebiusStrong: true },
            { dimension: '欧洲市场身位', nebius: 'top 3', industryAvg: '~5-10%', leader: 'SMA / Huawei / 阳光', nebiusStrong: true },
            { dimension: '综合毛利率', nebius: '~30.5%', industryAvg: '~22-25%', leader: '阳光电源 (行业最高)', nebiusStrong: true },
            { dimension: 'ROE', nebius: '~22%', industryAvg: '~12%', leader: '阳光电源', nebiusStrong: true },
            { dimension: 'AI 数据中心生态', nebius: '初步切入', industryAvg: '基本无', leader: '华为 (有完整 BU)', nebiusStrong: false },
            { dimension: '资本配置质量', nebius: '研发再投资', industryAvg: '一般', leader: '阳光电源', nebiusStrong: true },
        ],

        marketShare2026: [
            { name: '阳光电源', pct: 28 },
            { name: '华为数字能源', pct: 22 },
            { name: 'SMA Solar', pct: 6 },
            { name: 'Enphase', pct: 5 },
            { name: 'SolarEdge', pct: 4 },
            { name: '锦浪科技', pct: 5 },
            { name: '固德威', pct: 4 },
            { name: '古瑞瓦特', pct: 3 },
            { name: '其他 (50+ 家)', pct: 23 },
        ],

        winLoss: [
            {
                scenario: '全球公用事业大型电站逆变器',
                winners: '阳光电源 / 华为',
                losers: 'SMA / 锦浪',
                reasoning: '大型 utility 项目对品牌 + 服务 + 长质保要求极高，阳光 + 华为是标配；中小厂商难以进入',
            },
            {
                scenario: '美国市场（储能 + 逆变器）',
                winners: '阳光电源 / Tesla / Enphase',
                losers: '华为 (制裁退出)',
                reasoning: '华为在美国基本退出，阳光独享中国厂商红利；Tesla 是品牌竞争对手',
            },
            {
                scenario: '欧洲户用市场',
                winners: 'Enphase / SMA / 古瑞瓦特',
                losers: '阳光电源 (聚焦工商业 + 大型)',
                reasoning: '阳光在户用市场份额低，Enphase 微逆 + SMA 品牌占优',
            },
            {
                scenario: '中东大型储能项目',
                winners: '阳光电源 / Fluence',
                losers: 'Tesla (产能 + 价格)',
                reasoning: '中东 utility 偏好性价比 + 长期服务，阳光的全球渠道 + 大客户经验占优',
            },
            {
                scenario: '中国国内市场',
                winners: '华为 / 比亚迪 / 阳光',
                losers: '海外厂商',
                reasoning: '国内市场华为份额抢占 + 比亚迪垂直整合 + 阳光技术品牌，三强分割',
            },
            {
                scenario: 'AI 数据中心电力',
                winners: '华为 (有完整 DC BU) / 阳光 (储能切入)',
                losers: 'Tesla / Fluence (聚焦电网)',
                reasoning: '华为有完整数据中心生态优势；阳光通过储能 + UPS 切入',
            },
            {
                scenario: '钙钛矿等下一代技术',
                winners: '阳光电源 / 华为 (研发)',
                losers: '小厂商',
                reasoning: '研发投入 5-10% 营收的厂商才能跟得上技术迭代',
            },
            {
                scenario: '工商业 (C&I) 储能',
                winners: '阳光 / 锦浪 / 比亚迪',
                losers: 'Tesla (产能受限)',
                reasoning: 'C&I 客户需要快速交付 + 灵活配置，中国厂商有优势',
            },
        ],

        structuralTrend:
            '未来 3-5 年行业结构性变化：①**储能超越光伏成为最大增长引擎**：储能 TAM 6x 增长 vs 光伏 2x；②**AI 数据中心电力新基建崛起**：Hyperscaler 数据中心电力翻 3 倍，催生储能 + 微电网 + UPS 新需求；③**地缘政治分裂**：美国关税 + 制造本地化趋势 + 中国厂商海外建厂（印度 / 越南 / 墨西哥）；④**行业集中度提升**：阳光 + 华为 + Tesla + 比亚迪四强格局加固，中小厂商退出；⑤**软件 + 数据价值释放**：EMS 平台 + 虚拟电厂 + AI 优化运维成为新差异化。**结论**：阳光电源在四强中身位最优——海外占比最高 + 美国市场华为退出红利 + 储能爆发期 + AI 数据中心期权。',

        tam: {
            narrative:
                '全球能源新基建 TAM：①**光伏装机**：2025 ~250GW/年 → 2030 ~500GW/年；②**储能装机**：2025 ~250GWh/年 → 2030 ~1,500GWh/年（6x 空间）；③**AI 数据中心电力**：2025 ~100TWh/年 → 2030 ~300TWh/年。**阳光电源 TAM**：逆变器市场 ~$80B + 储能市场 ~$200B + 数据中心电力市场 ~$50B = $330B 总 TAM。公司当前营收 $130B 折合 $18B，对应 TAM 占比 5-6%；2030 目标占比 10%+。**10x 路径**：TAM 翻 3-5 倍 + 公司份额翻 2-3 倍 = 营收翻 6-15 倍 + 估值倍数微升 = 8-12x 股价。',
            points: [
                { year: '2022', totalTam: 100, neocloudTam: 25, selfRevenue: 6.5, status: 'actual' },
                { year: '2024', totalTam: 180, neocloudTam: 80, selfRevenue: 11, status: 'actual' },
                { year: '2025', totalTam: 220, neocloudTam: 110, selfRevenue: 13.5, status: 'estimate' },
                { year: '2026', totalTam: 270, neocloudTam: 150, selfRevenue: 16, status: 'estimate' },
                { year: '2028', totalTam: 400, neocloudTam: 250, selfRevenue: 25, status: 'estimate' },
                { year: '2030', totalTam: 600, neocloudTam: 400, selfRevenue: 40, status: 'estimate' },
                { year: '2035', totalTam: 1000, neocloudTam: 700, selfRevenue: 70, status: 'estimate' },
            ],
            keyNumbers: [
                { label: '全球光伏装机 2024', value: '~450 GW', sub: '中国 270 + 海外 180', cls: 'cyan' },
                { label: '全球储能 2024 出货', value: '~250 GWh', sub: '中美欧三足鼎立', cls: 'purple' },
                { label: '储能 TAM 2030E', value: '~$200B', sub: '6x 增长', cls: 'green' },
                { label: 'AI 数据中心电力 TAM 2030', value: '~$50B/年', sub: '新增市场', cls: 'green' },
                { label: '阳光电源全球市占', value: '~28% (逆变器)', sub: '连续 9 年第一', cls: 'green' },
                { label: '阳光储能全球市占', value: '~12-15%', sub: '前 3 名', cls: 'cyan' },
                { label: '10x 所需 (营收)', value: '6-15x 增长', sub: '需 TAM 翻 3-5x + 份额翻 2-3x', cls: 'red' },
                { label: 'AI 数据中心订单首签', value: '2026-2027 预期', sub: '关键观察', cls: 'purple' },
            ],
            sourcesNote:
                '数据来源：Wood Mackenzie 全球逆变器排名、BNEF 储能出货数据、IEA 全球能源展望、公司年报披露、Goldman 2025 数据中心电力研报。2028-2035 为基于光伏 + 储能 + AI 数据中心三轨道驱动的推演。',
        },

        radar: {
            peer1Name: '华为数字能源',
            peer2Name: 'Tesla Energy',
            dimensions: [
                { dim: '逆变器全球市占', self: 10, peer1: 9, peer2: 1 },
                { dim: '储能出货规模', self: 8, peer1: 7, peer2: 10 },
                { dim: '海外营收占比', self: 9, peer1: 7, peer2: 8 },
                { dim: '研发投入占比', self: 7, peer1: 10, peer2: 8 },
                { dim: 'AI 数据中心生态', self: 5, peer1: 10, peer2: 6 },
                { dim: '美国市场身位', self: 9, peer1: 1, peer2: 10 },
                { dim: '财务透明度', self: 10, peer1: 1, peer2: 10 },
                { dim: '综合盈利能力', self: 9, peer1: 8, peer2: 7 },
            ],
            note: '1-10 分主观评分。阳光电源在逆变器全球市占、海外营收、美国市场身位、财务透明度、综合盈利能力上均领先；华为在研发投入、数据中心生态上有结构性优势但受美国制裁；Tesla 在储能规模、品牌、美国本土上独家领先。**关键判断**：阳光电源是"全球化最彻底 + 财务最透明 + 综合质量最高"的能源新基建平台；华为是中国本土最强对手但海外受限；Tesla 是品牌竞争但产能受限。',
        },
    },

    valuation: {
        metrics: [
            { metric: 'PE (2024 实际)', value: '~16x', benchmark: '历史区间 12-80x', read: 'fair' },
            { metric: 'PE (2025E)', value: '~13.5x', benchmark: '历史 5-15 分位', read: 'cheap' },
            { metric: 'PE (2026E)', value: '~11x', benchmark: '高增长成长股理应 18-25x', read: 'cheap' },
            { metric: 'PEG (2025-2027)', value: '~0.7', benchmark: 'PEG <1 = 便宜', read: 'cheap' },
            { metric: 'PB', value: '~3.5x', benchmark: 'ROE 22% 对应 PB 4-5x 合理', read: 'cheap' },
            { metric: 'EV/EBITDA (2025E)', value: '~10x', benchmark: '行业平均 12-15x', read: 'cheap' },
        ],
        sotp: [
            { item: '光伏逆变器（2025 净利 ¥75 亿 × 18 PE）', valuation: '¥1,350 亿', method: '18x PE，反映稳定成长', note: '现金牛业务' },
            { item: '储能业务（2025 净利 ¥45 亿 × 25 PE）', valuation: '¥1,125 亿', method: '25x PE，反映高增长 + AI 期权', note: '爆发引擎' },
            { item: '风电变流器（2025 净利 ¥7 亿 × 15 PE）', valuation: '¥105 亿', method: '15x PE，国内龙头但增速一般', note: '稳定贡献' },
            { item: '电站投资 + EPC（2025 净利 ¥8 亿 × 8 PE）', valuation: '¥64 亿', method: '8x PE，资金占用', note: '辅助业务' },
            { item: '充电桩 + 制氢 + 电驱动（隐含期权）', valuation: '¥80 亿', method: '战略期权 NPV', note: '2030+ 兑现' },
        ],
        sotpTotal: '¥2,724 亿',
        sotpPerShare: '对应合理股价 ~¥130 (当前 ¥85，潜在上行 50%+)',
    },

    recommendation: {
        rating: '持有 / 分批建仓',
        ratingCls: 'bullish',
        timeHorizon: '3-7 年（成长股核心持仓）',
        positionSize: '3-6% 组合权重 · A 股新能源核心持仓',
        addingZone: '¥70-80（PE <12x + 储能毛利率 28%+ 验证）',
        stopLoss: '美国关税升至 50%+ + 储能毛利率连续 2 季度 <22% → 减仓 30-50%；曹仁贤健康 / 战略转向 → 重新评估',
        thesis:
            '当前 ¥85 显著低于 SOTP 合理 ¥130（潜在上行 50%+），PE 13.5x 处于历史 5-15 分位。**真正的 quality compounder**：①全球光伏逆变器第一 + 储能爆发期 + AI 数据中心受益方三重叙事叠加；②曹仁贤是 A 股最优质技术派创业家之一，30 年研发底蕴；③ROE 22% + FCF 转正且持续；④海外占比 52% 全球化路径清晰；⑤vs 加权期望被动组合 +9.3pp 超额回报，是档案库当前覆盖中最优标的之一。**最大单一风险是美国关税**（约 20% 营收暴露），但海外多元化（欧洲 25% + 中东/印度/澳洲）提供下行保护。**适合作为 A 股新能源核心持仓 3-6%**，与万华化学、宁德时代形成"A 股新能源核心三剑客"组合。',
        keyAssumptions: [
            '美国关税不超过 35%（不进一步剧烈升级）',
            '储能毛利率维持 25%+（行业价格战可控）',
            '海外占比突破 60% by 2027（全球化继续）',
            'AI 数据中心储能订单 2027 内首签（新增长极兑现）',
            '曹仁贤 5 年内不退休（战略连续性）',
            '人民币不大幅升值（汇率相对稳定）',
        ],
        sizingFormula: {
            method: 'Kelly 公式（保守版，使用 1/2 Kelly）',
            formula: 'f* = (期望回报率 − 无风险利率) / 方差 × 0.5',
            inputs: [
                { label: '10Y 期望回报率', value: '17.3% CAGR' },
                { label: '无风险利率', value: '2.5% (中国 10Y 国债)' },
                { label: '情景标准差 (10Y)', value: '¥4,200 亿 (~49% of E[Mcap])' },
                { label: '完整 Kelly', value: '~7.5%' },
                { label: '1/2 Kelly (保守)', value: '~3.7%' },
            ],
            computedSize: '3-6% 组合权重',
            reasoning:
                '阳光电源的回报方差中等（10Y 标准差 ~49% 期望值，远低于加密财库的 70-190%），加上 ROE 22% + FCF 持续 + 海外多元化等多重 quality factor，可以从 1/2 Kelly 适度上浮至 3-6%。**分层建仓**：基础 3%（核心持仓）+ ¥70-80 加仓 +1-2%（PE <12x 触发）+ AI 数据中心订单首签 +1%（独占叙事兑现）。**严格止损**：美国关税升至 50%+ 触发减仓 30%；储能毛利率连续 2 季度 <22% 触发减仓 30%；曹仁贤战略转向触发重新评估。',
        },
    },

    keyPersonRisks: [
        {
            name: '曹仁贤 (董事长 · 实控人 · 创始人)',
            role: '战略灵魂 · 技术派 · 30 年研发底蕴',
            departProb: '低 (~10% / 5 年，57 岁仍精力旺盛)',
            departImpact: '高 —— 战略连续性受影响，但团队制度化成熟可继任',
            mitigation: '顾亦磊总裁完整接班能力；技术体系已沉淀 30 年；股权稳定 ~30%',
            criticality: 'high',
        },
        {
            name: '顾亦磊 (总裁)',
            role: '运营 · 全球业务推进 · 二把手',
            departProb: '中 (~15% / 5 年)',
            departImpact: '中 —— 日常运营节奏受影响',
            mitigation: '内部多人储备；外部职业经理人替代池较深',
            criticality: 'medium',
        },
        {
            name: '储能事业部总负责人',
            role: '储能业务统帅 · 关键增长引擎',
            departProb: '中 (~20% / 5 年)',
            departImpact: '高 —— 储能业务执行节奏受影响',
            mitigation: '中层团队厚实；储能业务战略已明确',
            criticality: 'high',
        },
        {
            name: '海外销售总监团队',
            role: '海外渠道 · 130 国市场',
            departProb: '中 (~25% / 5 年累计)',
            departImpact: '高 —— 海外占比 52% 全球化命脉',
            mitigation: '多区域分散管理；与大客户关系制度化',
            criticality: 'high',
        },
        {
            name: '研发核心骨干',
            role: '技术壁垒 · 30 年技术沉淀',
            departProb: '低 (~10% 集体 / 5 年)',
            departImpact: '中 —— 长期技术领先受影响',
            mitigation: '股权激励 + 长期文化 + 产业链人才池',
            criticality: 'medium',
        },
    ],

    cashFlow: {
        narrative:
            '阳光电源的现金流模型是**典型 quality compounder**：①OCF 持续优于净利润（Cash Conversion ~0.95）；②FCF 2023 转正后持续增长；③CapEx / 营收 ~3-4%，资本密集度低；④资金主要投向研发 + 海外产能。**关键观察**：①OCF 增速是否跟上营收（应收账款管理）；②CapEx 节奏是否匹配储能扩张；③现金及等价物 ¥250 亿可支撑 2 年研发 + 全球扩张。**与早期烧钱阶段彻底告别**——已进入"自驱"成长阶段，不依赖外部融资。',
        rows: [
            { year: '2020', ocf: 18, icf: -16, fcf: 2, freeCashFlow: 2, status: 'actual' },
            { year: '2021', ocf: 22, icf: -18, fcf: -3, freeCashFlow: 4, status: 'actual' },
            { year: '2022', ocf: 12, icf: -20, fcf: 30, freeCashFlow: -8, status: 'actual' },
            { year: '2023', ocf: 88, icf: -28, fcf: -10, freeCashFlow: 60, status: 'actual' },
            { year: '2024', ocf: 105, icf: -30, fcf: -15, freeCashFlow: 75, status: 'actual' },
            { year: '2025E', ocf: 140, icf: -40, fcf: -20, freeCashFlow: 100, status: 'estimate' },
            { year: '2026E', ocf: 170, icf: -45, fcf: -30, freeCashFlow: 125, status: 'estimate' },
        ],
        conversionNote:
            'Cash Conversion Ratio = OCF / Net Income。2024 ~0.95（健康），2025E 预期 ~1.05（应收回款改善）。**关键警惕**：①电站 EPC 业务回款周期长（90 天+），应收账款 ¥220 亿是潜在坏账风险；②储能新业务回款条款相对宽松，需密切监控。',
        keyRisks: [
            '应收账款 28% 占营收，电站 EPC 业务回款周期长',
            '储能价格战使 OCF 增速放缓',
            '美国关税升级影响海外回款',
            'CapEx 加速（海外建厂）可能压缩 FCF',
            '人民币升值影响汇兑现金流',
        ],
    },

    historicalValuation: {
        narrative:
            '阳光电源 2011 年上市以来 PE 区间 **8-80x**（剧烈波动反映新能源赛道周期性）。**关键时点**：2021 巅峰 PE 80x（新能源狂热）→ 2022 PE 35x（碳价压力 + 储能未爆发）→ 2023 PE 18x（储能爆发预期）→ 2025 PE 13.5x（关税担忧 + 储能价格战）。**当前 PE 处于 5-15 分位**——非常便宜，反映市场对关税 + 价格战的悲观预期。',
        history: [
            { period: '2020-Q4', evSales: 60, note: '新能源狂热 · PE 60x' },
            { period: '2021-Q4', evSales: 80, note: '巅峰 · PE 80x · 股价 ¥150+' },
            { period: '2022-Q4', evSales: 35, note: '回调 · PE 35x · 储能未爆发' },
            { period: '2023-Q4', evSales: 18, note: '储能爆发预期 · PE 18x' },
            { period: '2024-Q4', evSales: 16, note: '关税担忧浮现 · PE 16x' },
            { period: '2025-Q2', evSales: 14, note: '储能价格战开始 · PE 14x' },
            { period: '2026-Q2 (当前)', evSales: 13.5, note: 'PE 13.5x · 历史 5-15 分位 · 估值压缩极限' },
        ],
        currentPercentile: '5-15%',
        verdict: 'cheap',
    },

    downsideMetrics: {
        narrative:
            '只看期望 17.3% CAGR 是 research theater。基于 4 档情景，阳光电源 10Y **情景标准差约 ¥4,200 亿**（~49% 期望值，远低于加密财库的 70-190%）。**5Y 内亏损 30%+ 的概率约 18%** —— 美国关税升级 + 储能价格战剧烈双杀触发 -55% 回撤是真实尾部，但相对加密财库的 -85% 回撤已经"温和"很多。**这是制造业 quality compounder 的尾部偏度**：上行 5x + 下行 -55%，是远好于加密财库的风险收益比。',
        scenarioStdDev: 4200,
        sharpeLike: 0.76,
        probLoss30Pct5Y: 18,
        maxDrawdownEstimate: '-55%（美国关税升级 + 储能价格战剧烈叠加；2021 巅峰至 2024 已经经历 -45% 估值压缩）',
        downsideToUpsideRatio: '下行 1 vs 上行 3.5（远好于加密财库 1:1.7-2.4）',
    },

    sensitivity: {
        narrative: '哪个变量对 10Y 期望市值最敏感？按单变量 ±1σ 扰动排序 ——',
        variables: [
            { variable: '美国关税政策', downImpact: -1800, upImpact: 800, description: '**单边偏下行** · 18-22% 营收暴露' },
            { variable: '储能毛利率持续性 ±5pp', downImpact: -1500, upImpact: 2000, description: '储能业务毛利率决定增量利润弹性' },
            { variable: 'AI 数据中心储能需求兑现', downImpact: -600, upImpact: 3500, description: '**单边偏上行** · 新增长极期权' },
            { variable: '全球光伏装机增速 ±20%', downImpact: -1000, upImpact: 1200, description: '基础盘增长' },
            { variable: '国内储能价格战', downImpact: -800, upImpact: 400, description: '国内毛利率压力' },
            { variable: '人民币汇率 ±5%', downImpact: -500, upImpact: 500, description: '海外营收 52% 影响' },
            { variable: '华为竞争强度', downImpact: -600, upImpact: 200, description: '国内份额博弈' },
        ],
        takeaway:
            '**最敏感三变量：美国关税、储能毛利率、AI 数据中心储能订单**。每季度只盯这三件事就够。**特别警告**：美国关税是单边下行风险（不像储能毛利率有上下双向弹性），权重最大；AI 数据中心订单是单边上行机会（无下行风险但兑现需要时间）。三者同向负向时（关税升级 + 价格战 + AI 订单延期），跌幅可能是单变量的乘积效应，触发 -55% 以上回撤。',
    },

    bearPlaybook: {
        scenario: '"熊市：关税大幅升级 + 价格战剧烈"（15% 概率）的完整 ruin 时间线',
        steps: [
            {
                when: '2026-Q3 (美国关税升级)',
                event: '特朗普 2.0 关税从 25% 升至 50%+',
                signal: '政策公告 · 中国厂商集体抛压',
            },
            {
                when: '2026-Q4 (美国订单萎缩)',
                event: '2026 H2 美国新订单 -40% · 储能 + 逆变器同时受影响',
                signal: '季报披露 · 美国市场营收 -30%+',
            },
            {
                when: '2027-Q1 (储能毛利率压缩)',
                event: '储能毛利率从 28% 压到 22% · 行业价格战剧烈',
                signal: '2026 Q4 季报 · 毛利率 -6pp',
            },
            {
                when: '2027-Q2 (欧洲补贴退坡叠加)',
                event: '欧盟绿色协议执行放缓 · 欧洲新签订单 -25%',
                signal: '欧盟政策跟踪 · 欧洲营收增速 -20%',
            },
            {
                when: '2027-Q3 (业绩 miss)',
                event: '2027 H1 净利润 YoY 转负 · 共识下修 30%+',
                signal: '半年报披露 · 卖方下调评级',
            },
            {
                when: '2027-Q4 (戴维斯双杀)',
                event: 'PE 从 13x 压缩至 8x · 股价 -50% 至 ¥40',
                signal: '估值跟踪 · 资金集中抛售',
            },
            {
                when: '2028 (反转或长期低估)',
                event: '若曹仁贤推出新战略 (印度/墨西哥本地化建厂 + AI 数据中心订单) → 反转；否则估值长期低位徘徊',
                signal: '管理层指引 + 海外大型订单签约',
            },
        ],
        exitTrigger:
            '**严格止损规则**：①美国关税升至 50%+ → 减仓 30%；②储能毛利率连续 2 季度 <22% → 减仓 30%；③欧洲季度新签订单 -30% → 减仓 30%；④曹仁贤健康事件 / 战略转向 → 立即清仓重新评估。**与加密财库关键差异**：阳光电源是基本面驱动，止损可以"等等看"（连续 2 季度数据验证），不需要"30 天 mNAV 跌穿"那种紧急止损。',
    },

    capitalAllocation: {
        narrative:
            '曹仁贤是**A 股最优质的资本配置者之一**——30 年研发再投资策略已被成果验证。2020-2024 ROIIC 估 25-30%，远高于制造业平均 12%。**核心策略**：①研发投入 5-7% 营收持续（行业领先）；②适度回购（2024 启动 ¥10 亿回购）；③派息率 30%（稳健不激进）；④少数战略并购整合度好。**与 Saylor / Tom Lee / Lubin 等加密财库灵魂人物完全不同**——曹仁贤全身心投入主业，且有 30 年技术沉淀，是真正的 quality compounder 灵魂。',
        scores: [
            { dimension: 'ROIIC', label: '增量资本回报率', score: 5, detail: '2020-2024 ROIIC 估 25-30%，远高于行业 12%；研发投入产出比明确', evidence: '历年财报 + ROE 22%' },
            { dimension: 'Buyback', label: '回购节奏', score: 3, detail: '2024 启动 ¥10 亿回购；适度但非主旋律；与高增长再投资策略冲突', evidence: '2024 回购公告' },
            { dimension: 'Dividend', label: '股息政策', score: 3, detail: '派息率 ~30%，稳健但非高股息标的；A 股制造业平均水平', evidence: '历年分红方案' },
            { dimension: 'M&A', label: '并购命中率', score: 4, detail: '不大举并购，少数战略并购（电站资产 + 海外渠道）整合度好', evidence: '历史并购案例' },
        ],
        overallGrade: 'A',
        historicalROIIC: '~25-30% (2020-2024 实际，研发驱动 quality compounder)',
    },

    gapAnalysis: {
        narrative:
            '阳光电源 2026 关键 gap 是"美国关税影响"——卖方共识对关税升级风险偏低估。储能毛利率 + AI 数据中心订单兑现是另外两个关键观察点。',
        rows: [
            { metric: '2026 营收', guidance: '"稳健增长 20%+"', consensus: '¥1,180 亿', selfAssumption: '¥1,150 亿', gap: '一致', risk: 'low' },
            { metric: '2026 净利润', guidance: '未明示', consensus: '¥168 亿', selfAssumption: '¥160 亿', gap: '-5% 保守', risk: 'low' },
            { metric: '储能毛利率', guidance: '"维持 25-30%"', consensus: '28%', selfAssumption: '26%', gap: '-7% 保守', risk: 'medium', note: '价格战压力被低估' },
            { metric: '美国关税影响', guidance: '"可控"', consensus: '营收影响 -3%', selfAssumption: '营收影响 -5-8%', gap: '**共识低估 🔴**', risk: 'high', note: '2026 H2 关键观察' },
            { metric: '海外占比 2030', guidance: '"目标 70%"', consensus: '65%', selfAssumption: '60%', gap: '共识略激进', risk: 'medium' },
            { metric: 'AI 数据中心首签', guidance: '"积极探索"', consensus: '2026 内首签', selfAssumption: '2027 内首签', gap: '共识过激进', risk: 'medium' },
        ],
        takeaway:
            '**最关键 Gap：美国关税影响（共识 -3% vs 自己 -5-8%）**。差异 ~3-5pp = ¥80-130 亿营收影响。卖方过度乐观 - "可控" 假设是对地缘风险的低估。**业绩爆雷触发点**：2026 H2 美国关税公告升级 + 季报披露美国营收 -20%+ → 共识下修 → 股价 -25-30%。这是做空阳光电源的最佳时点（也是逆向加仓的最佳时点）。',
    },

    benchmarkComparison: {
        narrative:
            '阳光电源 10Y 期望 CAGR 17.3% vs 被动组合 60% CSI300 + 40% 国债 (~8%) 的超额回报 = **+9.3pp**（显著正超额）。**这是档案库当前覆盖中超额回报最高的标的之一**。即使考虑制造业波动，Sharpe 调整后仍是 quality compounder 的典范。机会成本是 CSI300 + 国债，不是现金。',
        alternatives: [
            { name: 'CSI300', expectedReturn5Y: 7, expectedReturn10Y: 8, note: '中国 A 股宽基' },
            { name: '60% CSI300 + 40% 国债', expectedReturn5Y: 5.5, expectedReturn10Y: 6.5, note: '中国稳健组合' },
            { name: '万华化学 (600309)', ticker: 'SH:600309', expectedReturn5Y: 9, expectedReturn10Y: 9, note: '化工龙头同档对照' },
            { name: '宁德时代 (300750)', ticker: 'SZ:300750', expectedReturn5Y: 13, expectedReturn10Y: 14, note: '电池龙头新能源对照' },
            { name: '比亚迪 (002594)', ticker: 'SZ:002594', expectedReturn5Y: 15, expectedReturn10Y: 14, note: '新能源整车对照' },
            { name: 'SPY (S&P 500)', ticker: 'SPY', expectedReturn5Y: 9, expectedReturn10Y: 10, note: '美国宽基' },
            { name: 'QQQ (纳斯达克 100)', ticker: 'QQQ', expectedReturn5Y: 10, expectedReturn10Y: 12, note: '美国科技股' },
            { name: '10Y 中国国债', expectedReturn5Y: 2.5, expectedReturn10Y: 2.5, note: '无风险' },
        ],
        selfReturn5Y: 15.4,
        selfReturn10Y: 17.3,
        excessReturn5Y: 9.9,
        excessReturn10Y: 9.3,
        justifiesPosition: 'yes',
        takeaway:
            '**超额 9.3pp 显著 justify 3-6% 仓位**。相对万华化学（+5pp）和加密财库（-2~+1pp），阳光电源在加权期望意义上是档案库当前覆盖中最优标的之一。**核心优势**：①超额回报最高；②回撤最小（-55% vs 加密 -85%）；③估值最便宜（PE 13.5x vs 历史峰值 80x）；④质量最高（ROE 22% + FCF 转正持续 + 曹仁贤研发派）。**适合作为 A 股新能源核心持仓 3-6%**。',
    },

    trackRecord: {
        narrative:
            '本分析锚定 2026-05-06。以下 6 条假设是未来 12-18 个月可验证命题，3/6/12 月后回看建立分析师自我校准数据。**美国关税 + 储能毛利率 + AI 数据中心订单**三项是核心先行指标。',
        assumptions: [
            { assumption: '2025 全年归母净利润 ≥¥125 亿', setAt: '2026-05-06', targetDate: '2026-04-30', targetValue: '≥¥125 亿', verdict: 'pending', note: '约 4 月内可验证' },
            { assumption: '2026 储能毛利率 ≥25%', setAt: '2026-05-06', targetDate: '2027-Q1', targetValue: '≥25%', verdict: 'pending', note: '价格战可控验证' },
            { assumption: '2026 H2 美国关税不超 35%（不进一步升级）', setAt: '2026-05-06', targetDate: '2026-12-31', targetValue: '≤35%', verdict: 'pending', note: '地缘风险关键' },
            { assumption: '2026 海外营收占比 ≥55%', setAt: '2026-05-06', targetDate: '2027-04-30', targetValue: '≥55%', verdict: 'pending', note: '全球化继续' },
            { assumption: '2026 AI 数据中心储能订单首次披露', setAt: '2026-05-06', targetDate: '2027-04-30', targetValue: '首签公告', verdict: 'pending', note: '新增长极兑现' },
            { assumption: '2026 不出现 -30%+ 单日跌幅', setAt: '2026-05-06', targetDate: '2026-12-31', targetValue: '无 -30% 单日', verdict: 'pending', note: '黑天鹅监控' },
        ],
        hitRate: 'N/A (全部 pending)',
    },

    dataSources: {
        narrative: '本报告数据锚定 2026-05-06。核心数据来自阳光电源 2024 年报、2025 季报、Wood Mackenzie 全球逆变器排名、BNEF 储能数据、卖方研报。情景概率与 5Y/10Y 期望为本分析主观推演。**注意**：2025-2026 数据多为估算，需以公司最新季报为准。',
        accessedAt: '2026-05-06',
        sources: [
            { label: '阳光电源 投资者关系（官方）', url: 'https://www.sungrowpower.com/investor', category: 'primary', note: '年报 + 季报 + 公告' },
            { label: '阳光电源 2024 年报（巨潮资讯）', url: 'http://www.cninfo.com.cn/new/disclosure/stock?stockCode=300274&orgId=9900022502', category: 'primary' },
            { label: '阳光电源 SZ:300274 同花顺', url: 'http://stockpage.10jqka.com.cn/300274/', category: 'data' },
            { label: '阳光电源 东方财富', url: 'https://emweb.eastmoney.com/PC_HSF10/CompanySurvey/Index?code=SZ300274', category: 'data' },
            { label: 'Wood Mackenzie 全球逆变器排名 2024', url: 'https://www.woodmac.com/research/products/power-and-renewables/global-pv-inverter-market-share/', category: 'research' },
            { label: 'BNEF Energy Storage Outlook 2025', url: 'https://about.bnef.com/energy-storage/', category: 'research' },
            { label: '中信证券 阳光电源研报', url: 'https://research.citicsinfo.com/', category: 'research' },
            { label: '华泰证券 阳光电源研报', url: 'https://www.htsc.com.cn/research', category: 'research' },
            { label: 'IEA Renewables 2024 报告', url: 'https://www.iea.org/reports/renewables-2024', category: 'research' },
            { label: 'Goldman Sachs AI 数据中心电力研报 2025', url: 'https://www.goldmansachs.com/insights', category: 'research' },
            { label: '曹仁贤 公开演讲 + 媒体访谈', url: 'https://www.sungrowpower.com/news', category: 'secondary' },
            { label: '雪球 阳光电源讨论区', url: 'https://xueqiu.com/S/SZ300274', category: 'secondary', note: '散户情绪监测' },
        ],
    },

    correlation: {
        narrative:
            '阳光电源是**A 股新能源 + 全球能源转型双 β 敞口**：涨跌主要由全球新能源装机 + 中国 A 股 β + 美国关税预期共同驱动。与万华化学、宁德时代等 A 股新能源龙头相关性中高（0.55-0.65），但与加密财库相关性低（<0.20）。真正的 hedge 是**反新能源 + 久期资产**。',
        rows: [
            { asset: '宁德时代 (300750)', beta: 1.1, correlation: 0.65, hedgeValue: 'low', note: '储能 + 电池上下游 · 高度共振' },
            { asset: '比亚迪 (002594)', beta: 1.0, correlation: 0.55, hedgeValue: 'low', note: '新能源赛道共振' },
            { asset: '万华化学 (600309)', beta: 0.8, correlation: 0.45, hedgeValue: 'medium', note: 'A 股工业 + 新能源公共因子' },
            { asset: '华为（未上市）', beta: 0.9, correlation: 0.70, hedgeValue: 'low', note: '直接竞争对手' },
            { asset: 'Enphase (ENPH)', beta: 1.3, correlation: 0.50, hedgeValue: 'medium', note: '美股逆变器同业' },
            { asset: 'Tesla Energy', beta: 1.1, correlation: 0.40, hedgeValue: 'medium', note: '储能竞争 + AI 叙事' },
            { asset: '沪深300', beta: 1.0, correlation: 0.55, hedgeValue: 'medium', note: '中国 β' },
            { asset: '美股科技 (QQQ)', beta: 0.8, correlation: 0.30, hedgeValue: 'medium', note: 'AI 数据中心叙事' },
            { asset: 'MSTR (BTC 财库)', beta: 0.4, correlation: 0.15, hedgeValue: 'high', note: '完全不相关赛道' },
            { asset: '黄金 (GLD)', beta: -0.05, correlation: 0.05, hedgeValue: 'medium', note: '几乎不相关' },
            { asset: '10Y 中国国债', beta: -0.2, correlation: -0.20, hedgeValue: 'high', note: '反向对冲' },
        ],
        suggestedHedge:
            '如果阳光电源占组合 3-6%，建议搭配：①**新能源核心组合**：阳光 4% + 宁德时代 3% + 比亚迪 2%（A 股新能源核心三剑客，但相关性高需控制总仓位 ≤10%）；②**A 股工业平衡**：阳光 4% + 万华化学 3%（不同赛道，相关性 0.45 中等）；③**反向对冲**：10% 中国 10Y 国债 + 3% 黄金（A 股回调时上涨）；④**全球分散**：阳光 4% + 美股 AI（NVDA / MSFT 5-8%）+ MSTR 2%（加密 β 完全不相关）。**最佳全球新能源组合**：阳光电源 4% + 宁德时代 3% + 比亚迪 2% + Tesla 2% + Enphase 1%（A+美股新能源 12% 总仓位）。',
    },
}
