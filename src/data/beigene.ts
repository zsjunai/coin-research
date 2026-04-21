import type { CompanyDetail } from '@/types/company'

export const beigene: CompanyDetail = {
    id: 'beigene',
    ticker: 'HK:06160',
    name: '百济神州 / BeOne Medicines',
    tagline:
        '中国本土成长起来的全球肿瘤龙头。2025 年首次全年 GAAP 盈利（$287M · vs 2024 亏损 $645M），泽布替尼（Brukinsa）全球 $3.9B 销售已超越伊布替尼成全球 BTK 第一。核心争议：从"卖一个爆款药"升级为"多管线 biotech 平台"能否兑现？',
    date: '2026-04-20',

    priceCards: [
        { label: '当前股价', value: 'HK$178.90', sub: '2026-04-20 收盘', cls: 'cyan' },
        { label: '52 周波动', value: 'HK$95 – HK$240', sub: '首次盈利带动反弹', cls: 'purple' },
        { label: '市值', value: '~HK$182B', sub: '~US$23.3B (7.8 汇率)', cls: 'purple' },
        { label: '分析师共识 PT', value: 'US$408 / ADR', sub: '23 家 · Strong Buy', cls: 'cyan' },
        { label: '2025 营收', value: 'US$5.34B', sub: '+40% YoY', cls: 'green' },
        { label: '2025 GAAP 净利', value: '+$287M', sub: '首次全年转正', cls: 'green' },
    ],

    keyFacts: {
        '2025 全年营收': 'US$5.34B (+40% YoY)',
        '2025 GAAP 净利': '+$287M (vs 2024 亏损 $645M)',
        'Brukinsa 2025 全球销售': '$3.9B (+49% YoY)',
        'Brukinsa 美国销售': '~$2.6B (+46% YoY)',
        'Tislelizumab 2025 销售': '$737M (+19% YoY)',
        'Amgen 授权产品': '$486M (+33% YoY)',
        '研发投入占比': '~42% (行业最高水平)',
        '全球员工': '~10,000+',
        '三地上市': 'NASDAQ:ONC · HKEX:06160 · SSE:688235',
        '公司更名': '2025-01-02 BeiGene → BeOne Medicines',
        '注册地迁册': '2025 开曼群岛 → 瑞士（BeOne Medicines AG）',
        '管线关键候选': 'Sonrotoclax (BCL2) · BGB-16673 (BTK CDAC) · CDK4',
    },

    contracts: [
        { customer: 'Amgen (产品合作)', amount: '~$486M 年销售', years: '2019 签约', detail: 'Xgeva / Blincyto / Kyprolis 等产品中国独家商业化' },
        { customer: 'Novartis (曾合作 Tislelizumab)', amount: '$650M 首付款', years: '2021-2023 合作后终止', detail: 'Novartis 2023 年终止替雷利珠海外开发权，百济收回' },
        { customer: 'Lilly (BGB-16673 头对头)', amount: '战略对标', years: '2025-2027 临床', detail: '与礼来三代 BTK 头对头三期入组，决定 BTK CDAC 市场格局' },
        { customer: '新加坡 + 瑞士生产基地', amount: '$800M+ CapEx', years: '2024-2026', detail: '新泽西 + 苏州 + 广州 + 瑞士 + 新加坡五大生产基地，减少中美脱钩风险' },
    ],

    subsidiaries: [
        { name: 'BeOne Medicines AG (瑞士母公司)', desc: '2025 迁册新主体，全球总部', stake: '100%', value: '架构重组 · 降低地缘风险' },
        { name: '百济神州（北京）有限公司', desc: '中国运营主体 · 科创板 688235', stake: '100%', value: 'A 股上市主体' },
        { name: 'BeOne Medicines USA Inc.', desc: '美国商业 + 研发', stake: '100%', value: '美国市场运营 · FDA 互动' },
        { name: '百济神州（广州）生物药', desc: '生物药生产', stake: '100%', value: '替雷利珠单抗生产基地' },
        { name: '苏州小分子药物生产基地', desc: '泽布替尼生产', stake: '100%', value: '主力工厂' },
        { name: '新泽西 Hopewell 商业化工厂', desc: '美国本土生产', stake: '100%', value: '中美脱钩对冲' },
    ],

    bullPoints: [
        { title: '泽布替尼全球 BTK 第一', body: '2025 全球销售 $3.9B (+49%)，首次超越艾伯维伊布替尼（历史 BTK 标杆），美国市占 >50%，欧洲 +68%，中国 +36%。单品已接近艾伯维 Humira 当年爆款级' },
        { title: '首次全年 GAAP 盈利里程碑', body: '2025 GAAP 净利 +$287M（vs 2024 亏损 $645M），8 年累计研发投入 $10B+ 后终于跨过"创新鸿沟"' },
        { title: '管线 18 个月超 20 项里程碑', body: 'Sonrotoclax (BCL2) · BGB-16673 (BTK CDAC) · CDK4 · 替雷利珠 NSCLC 扩适应症等 20+ 全球关键读出窗口' },
        { title: 'BTK CDAC 二代竞争先机', body: 'BGB-16673 对 BTK-C481S 耐药患者有效，与 Lilly 三代 BTK 头对头。若赢将是下一代 BTK 市场领先者' },
        { title: '全球化多点生产 · 地缘对冲', body: '苏州 / 广州 / 新泽西 / 瑞士 / 新加坡五大生产基地 · 2025 迁册瑞士 BeOne Medicines AG · 构建"世界公司"架构' },
        { title: '三地上市 · 流动性分散', body: 'NASDAQ:ONC / HKEX:6160 / SSE:688235 三地同时交易，机构可通过任何合规账户配置，稀缺性强' },
    ],

    bearPoints: [
        { title: '泽布替尼单品依赖 (~73% 营收)', body: 'Brukinsa $3.9B / 总营收 $5.34B = 73%。一旦 BTK 竞争恶化（Lilly 三代 BTK · Novartis BCL2 联合等），单品暴露风险极高' },
        { title: 'BTK 市场天花板可见', body: '全球 BTK 抑制剂市场 2028-2030 见顶约 $15-20B，Brukinsa 吃下 40-50% 即触顶 $6-8B/年。单药 10x 路径已难' },
        { title: '研发投入刚性 42%', body: '2025 研发费用占营收 42%，行业同类 Regeneron/Gilead 为 20-25%。高投入是必需也是拖累短期利润' },
        { title: '中美生物医药脱钩风险', body: 'BIOSECURE Act · Genomics Inc 审查 · 美国国会对中国药企数据/临床样本审查趋严，未来可能被动下架美国业务' },
        { title: '替雷利珠欧美放量慢', body: '2025 仅 $737M 全球（vs K 药 / O 药单品都超 $10B）。PD-1 全球后来者的定价权弱，难有突破性规模' },
        { title: '股价历史波动极大', body: '港股 HK$60（2022 低）→ HK$240（2025 高）→ 当前 HK$178，三地套利 + ADR 结构复杂，易被对冲基金操纵' },
    ],

    scenarios: [
        {
            name: '乐观: 中国第一家世界级 Biotech (Gilead / Regeneron 级)',
            cls: 'bull',
            prob: 15,
            y5Mcap: 'HK$450 – 800B',
            y5Value: 600,
            y10Mcap: 'HK$1.2 – 2T',
            y10Value: 1500,
            desc: 'Brukinsa 稳住 BTK 第一 + BGB-16673 成二代 BTK 领先 + Sonrotoclax BCL2 超 $2B/年 + 替雷利珠欧美放量 + 3-5 个新分子上市 · 2030 营收 $15-20B · 估值 12-15x 营收',
        },
        {
            name: '中性: 全球肿瘤 Biotech 第二梯队',
            cls: 'neutral',
            prob: 50,
            y5Mcap: 'HK$230 – 370B',
            y5Value: 300,
            y10Mcap: 'HK$400 – 700B',
            y10Value: 550,
            desc: 'Brukinsa 稳态 $5-6B · 管线部分命中 · 替雷利珠缓慢扩张 · 2030 营收 $8-10B · 估值 8-10x 营收 · 处于跨国药企收购候选池',
        },
        {
            name: '悲观: BTK 竞争加剧 · 管线命中率低',
            cls: 'bear',
            prob: 27,
            y5Mcap: 'HK$110 – 180B',
            y5Value: 140,
            y10Mcap: 'HK$150 – 250B',
            y10Value: 200,
            desc: 'Lilly 三代 BTK 吃掉 Brukinsa 份额 · BGB-16673 临床失败 · Sonrotoclax 未达关键终点 · 2030 营收 $6-7B · 估值压缩至 4-5x',
        },
        {
            name: '尾部: 地缘脱钩 + 重大安全事故',
            cls: 'bear',
            prob: 8,
            y5Mcap: 'HK$60 – 100B',
            y5Value: 80,
            y10Mcap: 'HK$70 – 130B',
            y10Value: 100,
            desc: 'BIOSECURE Act 收紧 / 美国下架中国药企 / 重大药品不良事件 / 中美生物脱钩 · 美国市场萎缩 70% · 回归中国区域性玩家',
        },
    ],

    tenXGene: [
        { dim: '软件边际成本 · 规模化杠杆', tenBagger: '边际成本 ≈ 0', nebius: '生物药边际成本不可忽视（$40-60/g 原料药），但专利期毛利率 85%+', status: 'yellow' },
        { dim: '网络/平台效应', tenBagger: '显著', nebius: '医生处方 + 学术会议共识形成弱网络效应 · 非平台生意', status: 'red' },
        { dim: '数据闭环 / 专属资产', tenBagger: '独占数据 / IP / 规模', nebius: '全球临床数据 + 专利组合 + BCL2/BTK CDAC 管线专属资产', status: 'green' },
        { dim: '毛利率 · 定价权', tenBagger: '60-80% 可持续', nebius: '专利期毛利 85%，但 2031-2034 泽布替尼专利陆续到期有 LOE 风险', status: 'yellow' },
        { dim: '消费者触点 / 品牌', tenBagger: '直接 C 端 / 开发者心智', nebius: 'B2B2C（通过医院 / 处方医生），但全球肿瘤医生心智已建立', status: 'yellow' },
        { dim: '再投资空间 · S-curve', tenBagger: '高 ROIC + TAM 够大', nebius: '全球肿瘤药 TAM 2030 预计 $450B，管线够宽。ROIC 取决于新药命中率', status: 'green' },
        { dim: '管理层 · 跨代际转型', tenBagger: '有过 0→$30B 记录', nebius: '欧雷强 (John V. Oyler) · 王晓东 · 2010 年从零做到全球前 30 biotech', status: 'green' },
    ],

    weightedExpectation: {
        currentMcap: 182,
        y5: {
            expectedMcap: 284,
            multiplier: 1.56,
            cagr: 9.3,
        },
        y10: {
            expectedMcap: 562,
            multiplier: 3.09,
            cagr: 12.0,
        },
        breakdown: [
            { scenario: 'A. 世界级 Biotech', prob: 15, y5Mid: 600, y10Mid: 1500, y5Contrib: 90, y10Contrib: 225 },
            { scenario: 'B. 第二梯队 Biotech', prob: 50, y5Mid: 300, y10Mid: 550, y5Contrib: 150, y10Contrib: 275 },
            { scenario: 'C. BTK 竞争加剧', prob: 27, y5Mid: 140, y10Mid: 200, y5Contrib: 38, y10Contrib: 54 },
            { scenario: 'D. 尾部', prob: 8, y5Mid: 80, y10Mid: 100, y5Contrib: 6, y10Contrib: 8 },
        ],
    },

    peerName: '信达生物 / 1801',
    coreWeaveCompare: [
        { metric: '2025 营收', nbis: 'US$5.34B', cwv: 'US$1.6B (估)', winner: 'nbis' },
        { metric: '营收增速', nbis: '+40%', cwv: '+35%', winner: 'nbis' },
        { metric: '毛利率', nbis: '~82%', cwv: '~78%', winner: 'nbis' },
        { metric: 'GAAP 盈利', nbis: '+$287M (2025 首次)', cwv: '亏损', winner: 'nbis' },
        { metric: '海外销售', nbis: '~70% (美欧为主)', cwv: '<5% (中国为主)', winner: 'nbis' },
        { metric: '研发投入占比', nbis: '~42%', cwv: '~30%', winner: 'cwv' },
        { metric: 'BTK / PD-1 / CDAC 管线', nbis: '全球第一梯队', cwv: 'PD-1/ADC 中国第二梯队', winner: 'nbis' },
        { metric: 'FDA 获批产品数', nbis: '2 (Brukinsa + Tislelizumab)', cwv: '1 (信迪利单抗美国被退)', winner: 'nbis' },
        { metric: '市值', nbis: 'HK$182B', cwv: '~HK$60B', winner: 'nbis' },
    ],

    analysts: [
        { firm: 'Jefferies (最高)', target: 498, rating: 'Buy' },
        { firm: '共识 (23 家)', target: 408, rating: 'Strong Buy' },
        { firm: 'Morgan Stanley', target: 420, rating: 'Overweight' },
        { firm: 'Goldman Sachs', target: 395, rating: 'Buy' },
        { firm: 'Cantor Fitzgerald', target: 362, rating: 'Overweight' },
        { firm: '最低 (UBS)', target: 333, rating: 'Neutral' },
    ],

    watchlist: [
        { indicator: 'Brukinsa 季度销售', strongSignal: '> $1.2B/季', baseSignal: '$0.9-1.1B/季', weakSignal: '< $0.8B/季' },
        { indicator: '美国 BTK 市占', strongSignal: '> 55%', baseSignal: '45-52%', weakSignal: '< 40% 流失' },
        { indicator: 'BGB-16673 头对头 vs Lilly', strongSignal: 'PFS 优于 Lilly 三代 BTK', baseSignal: '非劣效', weakSignal: '劣效 / 失败' },
        { indicator: 'Sonrotoclax BCL2 关键读出', strongSignal: 'ORR >80% + CR >40%', baseSignal: 'ORR 65-75%', weakSignal: 'ORR <60%' },
        { indicator: '研发费用 / 营收', strongSignal: '< 35% (规模效应)', baseSignal: '35-42%', weakSignal: '> 45% 失控' },
    ],

    finalQuote:
        '百济神州是**中国 biotech 走向世界的唯一范式样本**——10+ 年、$10B+ 研发投入、三地上市、迁册瑞士、全球 10000+ 员工。2025 年首次全年 GAAP 盈利是里程碑，但<strong>真正的 10 倍路径取决于 BGB-16673 / Sonrotoclax 等管线能否命中，以及是否能形成"不止一个 Brukinsa"的多管线平台</strong>。当前 HK$178 处于共识 PT 约 57% 水平，估值不贵，但要接受"BTK CDAC 三期临床读出 ±40% 股价波动"的二元风险。适合作为**"中国生物医药全球化"敞口**的核心持仓。',

    revenueChart: {
        labels: ['2022 Revenue', '2023 Revenue', '2024 Revenue', '2025 Revenue', '2026E Revenue'],
        values: [1416, 2459, 3811, 5343, 6800],
        kinds: ['revenue', 'revenue', 'revenue', 'revenue', 'revenue'],
    },

    overview: {
        founded: '2010 · 王晓东 · 欧雷强 (John V. Oyler) 在北京联合创立',
        headquarters: '瑞士巴塞尔（2025 迁册） / 北京 / 剑桥 MA',
        incorporation: '瑞士股份公司 (BeOne Medicines AG · 2025 从开曼迁册)',
        employees: '~10,500+ (2025 末 · 中美欧多地)',
        listing: 'NASDAQ:ONC (2016-02) · HKEX:06160 (2018-08) · SSE:688235 (2021-12)',
        history: [
            { year: '2010', event: '王晓东（美国国家科学院院士）+ 欧雷强联合创立', tag: '创立' },
            { year: '2014', event: 'A 轮融资 · 启动泽布替尼 I 期临床', tag: '里程碑' },
            { year: '2016-02', event: 'NASDAQ IPO · BGNE 代码 · 募资 $182M', tag: 'IPO' },
            { year: '2018-08', event: '港交所二次上市 (6160) · 18A 未盈利生物科技规则首批', tag: 'IPO' },
            { year: '2019-11', event: 'Brukinsa 获 FDA 突破性疗法认定（首个中国原创药获美国突破性疗法）', tag: '里程碑' },
            { year: '2019', event: '与 Amgen 签署战略合作 · 代理 Xgeva / Blincyto / Kyprolis 中国', tag: '合作' },
            { year: '2020-11', event: 'Brukinsa 获 FDA 完全批准（MCL 适应症）', tag: '里程碑' },
            { year: '2021-12', event: '科创板 IPO (688235) · 三地上市完成', tag: 'IPO' },
            { year: '2023-01', event: 'Brukinsa CLL 适应症获 FDA 批准 · 美国市场起飞', tag: '里程碑' },
            { year: '2023-09', event: 'Novartis 终止替雷利珠海外合作，百济收回权益', tag: '关键节点' },
            { year: '2024-03', event: 'Tislelizumab (TEVIMBRA) 获 FDA 首个批准（ESCC）', tag: '里程碑' },
            { year: '2025-01-02', event: '公司更名 BeOne Medicines · NASDAQ 代码 BGNE → ONC', tag: '重组' },
            { year: '2025', event: '迁册开曼 → 瑞士 BeOne Medicines AG', tag: '重组' },
            { year: '2025-Q1', event: '首次季度 GAAP 盈利（1Q25 +$1.27 每 ADR）', tag: '里程碑' },
            { year: '2026-02', event: '2025 年报：全年营收 $5.34B (+40%) · 首次全年 GAAP 盈利 $287M', tag: '业绩' },
            { year: '2026-04-20', event: '股价 HK$178.90 · 市值 HK$182B', tag: '当前' },
        ],
        businessModel:
            '**全球研发 + 全球商业化的创新肿瘤药企**三层收入结构：①**自主新药**（泽布替尼 / 替雷利珠单抗 · 2025 合计 $4.64B · 87% 营收）；②**代理 / 授权产品**（Amgen 三款产品中国独家商业化 · 2025 $486M）；③**里程碑付款 + 授权收入**（与跨国药企的出海合作收入）。核心差异化是"**真正的中国原创 + 全球市场销售**"——不是仿制药、不是 me-too、也不是单一市场。泽布替尼在美国 BTK 市场占率 >50% 是"中国药企攻占美国市场"的第一个成功样本。',
        revenueMix: [
            { name: 'Brukinsa (泽布替尼)', pct: 73, note: '2025 $3.9B · BTK 第一' },
            { name: 'Tislelizumab (替雷利珠)', pct: 14, note: '2025 $737M · PD-1' },
            { name: 'Amgen 授权产品', pct: 9, note: '2025 $486M' },
            { name: '其他 + 合作收入', pct: 4, note: '其他管线 + 国际合作' },
        ],
    },

    team: [
        {
            name: '欧雷强 (John V. Oyler)',
            role: 'CEO · 联合创始人 · 董事长',
            background:
                '麻省理工化学工程本科、哈佛 MBA。前 Telios Pharmaceuticals (Genzyme 收购) 运营负责人，跨国 biotech 并购整合与商业化专家。2010 年与王晓东共同创立百济神州，是"中美桥梁型"领导者。15+ 年掌舵公司从 0 到全球前 30 biotech。',
            since: '2010',
            rating: 5,
        },
        {
            name: '王晓东',
            role: '联合创始人 · 科学顾问委员会主席',
            background:
                '美国国家科学院院士、中国科学院外籍院士、清华大学本科、加州大学德州医学中心博士。细胞凋亡机制研究全球顶级科学家。百济神州的"科学灵魂"，早期 BCL2 / BTK 等管线方向设计者。不参与日常运营但对科学方向有否决权。',
            since: '2010',
            rating: 5,
        },
        {
            name: 'Lai Wang (汪来)',
            role: '首席医学官 + 全球研究负责人',
            background:
                '清华博士 · 加州理工博后。负责全球研发管线 · BCL2 / BTK CDAC / CDK4 等关键候选的临床开发。',
            rating: 5,
        },
        {
            name: 'Aaron Rosenberg',
            role: 'CFO',
            background:
                '前 Gilead Sciences VP Finance。2021 年加入百济神州，主导三地上市协同 + 迁册瑞士 + 2025 年 GAAP 盈利披露。',
            since: '2021',
            rating: 4,
        },
        {
            name: 'Jay Mei',
            role: '替雷利珠单抗 + 实体瘤研发负责人',
            background:
                '前 Bristol-Myers Squibb 免疫肿瘤全球负责人之一。2019 年加入，主导 PD-1 全球开发。',
            rating: 4,
        },
    ],

    shareholders: [
        { name: '欧雷强 (John V. Oyler)', pct: '~4-5%', type: '创始人', note: '含期权；早期主要股东' },
        { name: '高瓴资本 (Hillhouse)', pct: '~7-8%', type: '早期 VC', note: '2014 早期投资方 · 长期持有' },
        { name: '淡马锡 (Temasek)', pct: '~5-6%', type: '机构', note: 'Pre-IPO + IPO 参与' },
        { name: 'Baker Brothers', pct: '~4%', type: '生物科技 VC', note: '专注 biotech 的顶级基金' },
        { name: 'Amgen', pct: '已全部退出 (2023)', type: '曾战略股东', note: '2019-2023 持有约 20.5%，后全部出售' },
        { name: 'BlackRock + Fidelity + Capital Research', pct: '~15-20%', type: '被动 + 主动', note: '三地共同持股' },
        { name: '公众流通股 (港美股 + A 股)', pct: '~55%', type: '散户 + 机构', note: '三地同时交易，流动性分散' },
    ],

    advantages: [
        {
            title: 'Brukinsa 全球 BTK 第一 (独特性 ★★★★★)',
            body: '2025 全球销售 $3.9B（+49%），首次超越艾伯维伊布替尼。美国市占 >50%，欧洲 +68%，中国 +36%。是中国原创药首个"全球 class leader"，没有第二个中国 biotech 做到这点。',
            evidence: '2025 Q4 财报；IMS 全球 BTK 市场份额数据；艾伯维伊布替尼 2025 销售下滑对比',
        },
        {
            title: '首次全年 GAAP 盈利里程碑 (韧性 ★★★★★)',
            body: '2025 GAAP 净利 +$287M（vs 2024 亏损 $645M），8 年累计研发投入 $10B+ 后终于跨过"创新鸿沟"。生物科技最关键的拐点，公司不再依赖融资',
            evidence: '2025 年报 GAAP 财务数据；1Q25 起连续盈利',
        },
        {
            title: '三地上市 · 全球化资本结构 (独特性 ★★★★)',
            body: 'NASDAQ + HKEX + 科创板三地上市，全球唯一。机构可通过任何合规账户配置，分散流动性 + 估值套利窗口常在。2025 迁册瑞士 BeOne Medicines AG 进一步降低地缘风险。',
            evidence: '三地 ticker 独立交易历史；2025 迁册公告',
        },
        {
            title: '管线深度 · 18 个月 20+ 里程碑 (护城河 ★★★★)',
            body: 'Sonrotoclax (BCL2) 二期数据读出 + BGB-16673 (BTK CDAC) 头对头 Lilly + CDK4 三期启动 + 替雷利珠 NSCLC 等 20+ 项全球关键读出。管线深度在中国 biotech 中领先。',
            evidence: '公司业绩会披露；临床试验登记 (ClinicalTrials.gov)',
        },
        {
            title: '全球化生产 + 供应链 (规模 ★★★★)',
            body: '苏州 / 广州 / 新泽西 Hopewell / 瑞士 / 新加坡五大生产基地 · 应对 BIOSECURE Act / 中美脱钩风险。新泽西基地可完全本土化美国供应，是其他中国 biotech 没有的硬实力',
            evidence: '工厂 FDA 认证；2024-2025 CapEx 披露',
        },
        {
            title: '顶级管理层 · 中美桥梁 (治理 ★★★★★)',
            body: '欧雷强 (MIT + Harvard) 15 年掌舵 · 王晓东 (科学院院士) 科学把关 · Jay Mei / Aaron Rosenberg (前 BMS / Gilead) 等跨国药企高管。是中美双文化背景最强的 biotech 之一',
            evidence: '管理层履历；公司 ESG 报告',
        },
        {
            title: 'BTK CDAC 二代先发 (期权价值 ★★★★)',
            body: 'BGB-16673 是全球进展最快的 BTK 降解剂 (CDAC)，对 BTK-C481S 耐药患者有效 · 与 Lilly 三代 BTK 头对头三期临床。若赢将是下一代 BTK 市场 $5-10B 领先者',
            evidence: 'ASH 2024-2025 临床数据；Clinical Trials NCT06050304',
        },
    ],

    disadvantages: [
        {
            title: '泽布替尼单品 73% 营收依赖',
            body: '2025 Brukinsa $3.9B / 总营收 $5.34B = 73%。一旦 BTK 竞争加剧或专利到期，单品暴露风险极高。Lilly 三代 BTK / Novartis BCL2 联合疗法都是直接威胁。',
            evidence: '2025 年报产品收入结构；Lilly 新分子管线',
        },
        {
            title: 'BTK 全市场天花板可见',
            body: '全球 BTK 抑制剂市场 2028-2030 预计见顶约 $15-20B。即使 Brukinsa 吃下 50%，也只能到 $7-10B/年 —— 单药 10x 路径从这个数字出发很难',
            evidence: 'EvaluatePharma / IQVIA 肿瘤用药预测；BTK 市场饱和分析',
        },
        {
            title: '研发投入 42% 刚性',
            body: '2025 研发费用占营收 ~42%，行业同类 Regeneron/Gilead 为 20-25%。高投入是必需也是短期利润拖累，2025 GAAP 盈利薄（$287M / $5.34B 仅 5%）',
            evidence: '2025 财报；同行研发支出对比',
        },
        {
            title: 'BIOSECURE Act + 中美生物脱钩',
            body: '2024 美国国会审议 BIOSECURE Act；2025-2026 年对中国 biotech 的临床数据 · 样本管理 · 州与联邦合规审查趋严。虽然百济已迁册瑞士 + 新泽西生产，仍被归类为"中国 biotech"',
            evidence: 'BIOSECURE Act 立法进程；美国议员公开言论',
        },
        {
            title: '替雷利珠欧美放量慢',
            body: '2025 Tislelizumab 全球 $737M (+19%)，远低于 K 药 / O 药（单品 $25B+）。PD-1 全球后来者定价权弱，适应症落后 · 美国医保覆盖不全 · 难有突破性规模',
            evidence: '2025 财报 Tislelizumab 分地区；Merck K 药 vs 替雷利珠对比',
        },
        {
            title: '股价历史波动极大 · ADR 复杂',
            body: '港股 HK$60 → HK$240 → HK$178，两年波动 300%。三地上市 + ADR ratio 1:13 + 迁册瑞士造成结构复杂，易被对冲基金对冲操纵',
            evidence: '港股 6160 历史价格；NASDAQ ONC 历史价格',
        },
        {
            title: '2031-2034 专利到期风险',
            body: '泽布替尼核心化合物专利 2031-2034 陆续到期。虽然"组合物专利"可延至 2034-2037，但仿制药威胁从 2030 起逐步显现',
            evidence: '公司 10-K 专利披露；美国 FDA Orange Book',
        },
    ],

    shortTermCatalysts: [
        {
            when: '2026 Q2 (5 月)',
            event: 'Q1 2026 财报 · 验证盈利可持续性',
            impact: 'mixed',
            probability: '已预告',
            magnitude: '±10-15%',
        },
        {
            when: '2026 H1',
            event: 'Sonrotoclax (BCL2) 二期关键数据读出 + 全球加速上市申请',
            impact: 'positive',
            probability: '~70%',
            magnitude: '+15-25%',
        },
        {
            when: '2026 Q2-Q3',
            event: '替雷利珠早期 NSCLC 新辅助/辅助 EMA 上市申请',
            impact: 'positive',
            probability: '~75%',
            magnitude: '+5-10%',
        },
        {
            when: '2026 H2',
            event: 'BGB-16673 与 Lilly 三代 BTK 头对头三期 - 入组进度更新',
            impact: 'mixed',
            probability: '已在入组',
            magnitude: '±10-15%',
        },
        {
            when: '2026 Q4',
            event: 'CDK4 启动 HR+/HER- 乳腺癌三期临床',
            impact: 'positive',
            probability: '~65%',
            magnitude: '+5-8%',
        },
        {
            when: '2027',
            event: 'Sonrotoclax 美国 FDA 批准（若二期数据积极）',
            impact: 'positive',
            probability: '~60%',
            magnitude: '+20-30%',
        },
        {
            when: '2027-2028',
            event: 'BGB-16673 三期结果读出（BTK CDAC 关键时刻）',
            impact: 'mixed',
            probability: '已入组',
            magnitude: '±30-50% (二元结果)',
        },
        {
            when: '任何时点',
            event: 'BIOSECURE Act 立法细节 · 中美生物医药脱钩加剧',
            impact: 'negative',
            probability: '~20% / 年',
            magnitude: '-15-30%',
        },
        {
            when: '任何时点',
            event: 'Brukinsa 严重不良事件 / FDA 警告',
            impact: 'negative',
            probability: '~5% / 年',
            magnitude: '-20-40%',
        },
    ],

    longTermDrivers: [
        {
            name: '全球肿瘤药 TAM 持续扩张',
            horizon: '2026-2033',
            body: '全球肿瘤药市场 2025 $280B，2030 预计 $450B（CAGR 10-12%）。百济当前全球市占 ~2%，若做到 4-5% 对应 $18-23B 营收（当前 4x）',
            enabling: '人口老龄化 + 精准医疗普及 + 新靶点突破 (BCL2/CDAC/ADC)',
        },
        {
            name: '从"单品爆款"到"多分子平台" (Gilead / Vertex 路径)',
            horizon: '2027-2032',
            body: 'Brukinsa 之后需要 3-5 个 $500M+ 分子才能支撑"Gilead 级"biotech 估值。Sonrotoclax / BGB-16673 / CDK4 / ADC 管线中若 2-3 个命中，估值倍数可从 4x 营收升到 8-10x',
            enabling: '管线多样化 + 临床命中率 + 并购 (估值低迷时)',
        },
        {
            name: 'BTK CDAC 二代市场领先',
            horizon: '2027-2033',
            body: '全球 BTK 耐药（C481S 突变）患者逐年增加，BGB-16673 若在三期胜出 Lilly，可主导下一代 BTK 市场 $5-10B/年。这是"Brukinsa 的继任者"',
            enabling: '临床设计优化 · BTK 耐药病人池扩大 · 先发优势',
        },
        {
            name: 'ADC / 双抗 / 细胞疗法管线 (下一代)',
            horizon: '2028-2035',
            body: '百济 2024 开始加大 ADC / 双抗 / 细胞疗法投入，10+ 个分子进入早期临床。若 2028-2030 有 1-2 个突破性读出，将进入全球"创新前沿"',
            enabling: '研发投入 $2B+/年 · 外部合作 (已与 Juno / Agenus 等合作) · 并购 candidate',
        },
        {
            name: '中国创新药出海生态成熟',
            horizon: '2026-2033',
            body: '百济是第一个真正意义上的"中国创新药全球化"范本。后续药明康德 / 信达 / 恒瑞 / 君实 等跟随，共同建立"中国创新药出海"叙事。百济作为先锋溢价存续',
            enabling: '中国监管与美国 FDA 对齐 + 临床试验互认扩大 + 定价差异化',
        },
        {
            name: '潜在并购 candidate（估值低迷时）',
            horizon: '任何时点',
            body: '当前 EV/Sales 约 4x，远低于全球 biotech 平均 6-8x。若股价进一步下跌，可能成为 Pfizer / Merck / AstraZeneca 的并购目标（收购溢价 30-50%）',
            enabling: 'Brukinsa 现金流支撑 + 全球商业化基础 + 管线深度',
        },
    ],

    riskMatrix: [
        {
            category: '产品 / 竞争风险',
            level: 'critical',
            summary: 'Brukinsa 单品 73% 营收暴露',
            items: [
                {
                    name: 'Brukinsa BTK 竞争加剧',
                    body: 'Lilly 三代 BTK（Pirtobrutinib · LOXO-305）在耐药患者中表现优秀 · Novartis BCL2 联合疗法蚕食一线市场。Brukinsa 的 +49% 增速在 2027-2028 可能放缓至 +15-20%',
                    mitigation: 'BGB-16673 作为二代 BTK 接班；Brukinsa 还在扩适应症 (WM, FL, LBCL)',
                },
                {
                    name: '管线临床失败',
                    body: '生物医药行业 III 期失败率 ~40%。若 BGB-16673 / Sonrotoclax / CDK4 任一关键读出失败，估值立即下挫 20-30%',
                    mitigation: '管线矩阵化 (3-4 个独立分子) · 部分失败可接受',
                },
                {
                    name: '专利到期风险 (2031-2034)',
                    body: 'Brukinsa 核心化合物专利 2031-2034 到期，仿制药威胁开始显现 (loss of exclusivity = LOE)',
                    mitigation: '组合物专利延至 2037；新适应症专利延续；二代 BTK 接替',
                },
            ],
        },
        {
            category: '地缘 / 监管风险',
            level: 'high',
            summary: '中美生物脱钩 + BIOSECURE Act',
            items: [
                {
                    name: 'BIOSECURE Act 收紧',
                    body: '美国国会对中国 biotech 的临床数据 · 样本管理 · 州与联邦合规审查趋严。最坏情况：Brukinsa 美国销售（~$2.6B）被限制或强制剥离',
                    mitigation: '2025 迁册瑞士 · 新泽西本土生产 · 股东结构全球化',
                },
                {
                    name: '中美生物医药脱钩',
                    body: '若中美关系全面恶化，百济的"中国血统"可能使美国 biotech 生态排斥',
                    mitigation: '品牌 BeOne Medicines 去"中国"标签；瑞士总部 · 全球管理层',
                },
                {
                    name: '美国 IRA 医保药价谈判',
                    body: 'Inflation Reduction Act 使 Medicare 可谈判药价，Brukinsa 可能在 2028-2030 被纳入谈判名单，降价压力 30-40%',
                    mitigation: '适应症扩张 · 商业支付通道优先',
                },
            ],
        },
        {
            category: '财务 / 商业风险',
            level: 'medium',
            summary: '研发投入 + 盈利持续性',
            items: [
                {
                    name: '研发投入不可削减',
                    body: '研发占营收 42% · 若 2026 营收增速 <20%，净利率可能再度压缩至 3-5%',
                    mitigation: '规模效应 · 成熟产品盈利贡献增加 · 管线选择性聚焦',
                },
                {
                    name: '应收账款 / 分销渠道',
                    body: '中国医药分销 · 美国 PBM 议价 · 欧洲医保回款周期都有应收管理挑战',
                    mitigation: '全球化销售团队 · 多元化分销商',
                },
                {
                    name: '汇率风险 (CNY/USD/EUR/CHF)',
                    body: '全球化运营意味着汇率波动直接影响合并报表',
                    mitigation: '自然对冲（支出与收入多币种匹配）· 不主动对冲',
                },
            ],
        },
        {
            category: '临床 / 研发风险',
            level: 'high',
            summary: '管线命中率决定长期',
            items: [
                {
                    name: 'BGB-16673 头对头失败',
                    body: '与 Lilly 三代 BTK 头对头是高风险高回报赌注。若 PFS 劣效，BTK CDAC 故事结束',
                    mitigation: '管线不只 BGB-16673 · 尚有其他 CDAC 在研',
                },
                {
                    name: 'Sonrotoclax BCL2 不良反应',
                    body: 'BCL2 抑制剂有肿瘤溶解综合征风险，艾伯维 Venetoclax 有先例',
                    mitigation: '临床设计规避 · 剂量滴定方案成熟',
                },
                {
                    name: '替雷利珠美国放量慢',
                    body: '美国 PD-1 市场 K 药 / O 药根深蒂固 · 替雷利珠作为后来者医保覆盖有限',
                    mitigation: '聚焦差异化适应症 (ESCC, GEJ) · 定价策略',
                },
            ],
        },
        {
            category: '宏观 / 周期风险',
            level: 'medium',
            summary: 'Biotech 情绪 + 利率',
            items: [
                {
                    name: 'Biotech 整体估值周期',
                    body: 'XBI / IBB 等 biotech ETF 周期性强，2022 年曾暴跌 50%，2025 年反弹',
                    mitigation: 'Brukinsa 现金流支撑 · 不完全依赖融资',
                },
                {
                    name: '高利率压制长久期资产',
                    body: 'Biotech 估值是长久期 (10-20 年现金流)，对利率敏感',
                    mitigation: '2025 已盈利 · 现金流贡献逐步提升',
                },
            ],
        },
        {
            category: '治理 / ESG 风险',
            level: 'low',
            summary: '三地上市复杂 · 迁册瑞士',
            items: [
                {
                    name: '三地上市协调',
                    body: '不同市场披露规则 · 公司治理标准 · 交易时差带来信息不对称',
                    mitigation: '三地独立合规团队 · 同步披露机制',
                },
                {
                    name: '迁册瑞士合规成本',
                    body: '迁册涉及税务 · 股东权益 · 治理结构的复杂调整',
                    mitigation: '2025 已完成大部分迁册工作',
                },
            ],
        },
        {
            category: '人才 / 研发生态',
            level: 'low',
            summary: '全球科研人才 · 关键科学家依赖',
            items: [
                {
                    name: '王晓东 (科学灵魂)',
                    body: '科学方向依赖王晓东院士判断',
                    mitigation: 'Lai Wang · Jay Mei 等已形成研发梯队',
                },
                {
                    name: '美国研发人才招募',
                    body: '中美关系紧张可能影响百济在美国招募顶级 biotech 人才',
                    mitigation: '瑞士 / 新加坡研发据点分散',
                },
            ],
        },
    ],

    profitability: {
        narrative:
            '百济神州是**"典型的创新药长周期盈利曲线"**：2015-2024 十年累计亏损 $10B+，2025 年首次全年 GAAP 盈利 $287M。**关键拐点**：2025 是"跨越创新鸿沟"的里程碑 · 2026-2028 年是"规模效应释放"期 · 2029+ 进入"稳态高利润率"阶段（预期净利率 20-30%）。**核心观察**：研发投入占比能否从 42% 降至 25-30%（行业成熟 biotech 水平）。',

        incomeStatement: [
            {
                year: '2021',
                revenue: '$1.18B',
                revenueNum: 1180,
                grossMargin: '~62%',
                opIncome: '-$1.63B',
                ebitda: '-$1.4B',
                ebitdaMargin: '-119%',
                netIncome: '-$1.47B',
                eps: '-$11.64',
                status: 'actual',
            },
            {
                year: '2022',
                revenue: '$1.42B',
                revenueNum: 1416,
                grossMargin: '~70%',
                opIncome: '-$2.04B',
                ebitda: '-$1.8B',
                ebitdaMargin: '-127%',
                netIncome: '-$2.01B',
                eps: '-$15.05',
                status: 'actual',
            },
            {
                year: '2023',
                revenue: '$2.46B',
                revenueNum: 2459,
                grossMargin: '~77%',
                opIncome: '-$0.88B',
                ebitda: '-$0.5B',
                ebitdaMargin: '-20%',
                netIncome: '-$0.88B',
                eps: '-$6.43',
                status: 'actual',
            },
            {
                year: '2024',
                revenue: '$3.81B',
                revenueNum: 3811,
                grossMargin: '~80%',
                opIncome: '-$0.78B',
                ebitda: '-$0.2B',
                ebitdaMargin: '-5%',
                netIncome: '-$0.65B',
                eps: '-$4.65',
                status: 'actual',
            },
            {
                year: '2025',
                revenue: '$5.34B',
                revenueNum: 5343,
                grossMargin: '~82%',
                opIncome: '+$220M',
                ebitda: '+$450M',
                ebitdaMargin: '8%',
                netIncome: '+$287M',
                eps: '+$1.80',
                status: 'actual',
            },
            {
                year: '2026E',
                revenue: '$6.5-7.0B',
                revenueNum: 6800,
                grossMargin: '~83%',
                opIncome: '+$650-900M',
                ebitda: '+$900M-1.1B',
                ebitdaMargin: '~14%',
                netIncome: '+$600-800M',
                eps: '$3.5-4.5',
                status: 'guidance',
            },
            {
                year: '2027E',
                revenue: '$8.0-9.0B',
                revenueNum: 8500,
                grossMargin: '~83%',
                opIncome: '+$1.2-1.6B',
                ebitda: '+$1.5-1.9B',
                ebitdaMargin: '~20%',
                netIncome: '+$1.1-1.4B',
                eps: '$6-8',
                status: 'estimate',
            },
        ],

        marginEvolution: [
            { year: '2021', gross: 62, ebitda: -119, operating: -138, net: -125, status: 'actual' },
            { year: '2022', gross: 70, ebitda: -127, operating: -144, net: -142, status: 'actual' },
            { year: '2023', gross: 77, ebitda: -20, operating: -36, net: -36, status: 'actual' },
            { year: '2024', gross: 80, ebitda: -5, operating: -20, net: -17, status: 'actual' },
            { year: '2025', gross: 82, ebitda: 8, operating: 4, net: 5, status: 'actual' },
            { year: '2026E', gross: 83, ebitda: 14, operating: 11, net: 10, status: 'guidance' },
            { year: '2027E', gross: 83, ebitda: 20, operating: 16, net: 14, status: 'estimate' },
        ],

        milestones: [
            { year: '2016-02', milestone: 'NASDAQ IPO', hit: true },
            { year: '2019', milestone: 'Brukinsa FDA 突破性疗法认定', hit: true },
            { year: '2020', milestone: 'Brukinsa FDA 完全批准', hit: true },
            { year: '2023', milestone: 'Brukinsa CLL 适应症 FDA 批准 · 美国起飞', hit: true },
            { year: '2024', milestone: 'Tislelizumab FDA 首次批准', hit: true },
            { year: '2025-Q1', milestone: '首次季度 GAAP 盈利', hit: true },
            { year: '2025', milestone: '首次全年 GAAP 盈利 +$287M', hit: true },
            { year: '2025', milestone: '迁册瑞士 · 更名 BeOne Medicines', hit: true },
            { year: '2026-2027', milestone: 'Sonrotoclax FDA 加速批准', hit: false },
            { year: '2027-2028', milestone: 'BGB-16673 BTK CDAC 三期读出', hit: false, note: '关键二元事件' },
            { year: '2028-2030', milestone: '营收破 $10B · 稳态净利率 20%+', hit: false },
        ],

        unitEconomics: [
            { metric: 'Brukinsa 全球销售', value: '$3.9B (2025)', source: '年报' },
            { metric: '美国 BTK 市占', value: '>50%', source: 'IMS / 公司披露' },
            { metric: 'Brukinsa 毛利率', value: '~85% (专利期)', source: '行业标准' },
            { metric: '研发费用 / 营收', value: '~42% (2025)', source: '财报' },
            { metric: '营销费用 / 营收', value: '~28% (2025)', source: '财报' },
            { metric: '员工人均营收', value: '~$510K', source: '$5.34B / ~10500' },
            { metric: '现金及等价物', value: '$2.9B (2025 末)', source: '年报' },
            { metric: '管线在研分子', value: '~50 (含早期 + 后期)', source: '公司披露' },
        ],

        fcfPath:
            '2025 OCF 约 $800M · FCF $500M（首次大幅转正）。2026-2028 预计 FCF 稳定在 $800M-1.5B/年。**资产密集度中等**：生产基地 + 临床 CapEx · 2026-2028 CapEx $400-600M/年。现金流主要用于：①R&D（新分子 + 三期临床）；②CapEx（生产扩容）；③潜在并购（biotech 资产 · 外部 in-licensing）；④回购（2025 已启动小规模）。',

        keyRisks: [
            'Brukinsa 增速放缓 (YoY <30%) 会直接拉低盈利能力',
            'BGB-16673 三期失败会推迟管线接班 3-5 年',
            'BIOSECURE Act 若通过，美国销售 (~48% 营收) 可能受影响',
            '研发投入无法降到 30% 以下，长期 ROIC 压制',
        ],
    },

    competitiveLandscape: {
        summary:
            '全球肿瘤药赛道正从"跨国大药企统治"演化为"**三层竞争**"：①**Mega Pharma**（辉瑞 / 默克 / 罗氏 / BMS 等 $100B+ 市值）；②**专注型 Biotech**（Gilead / Regeneron / Vertex · $50-150B）；③**新兴全球化 Biotech**（百济神州是第一家真正从中国走出来的 · $20-30B）。百济的核心定位是"**中国血统 × 全球销售 × 创新药**"——这是历史上从未有过的组合。真正的 10 倍对手是 Regeneron / Vertex 级别的专注型 biotech · 需要 5-8 个 $500M+ 分子组合。',

        competitors: [
            {
                name: '百济神州 (自身)',
                type: 'specialist',
                ticker: 'HK:6160 / ONC',
                revenue2026E: '$6.5-7.0B',
                aiRevenue: '$6.8B (肿瘤药)',
                gpuFleet: 'Brukinsa + Tislelizumab + 管线 50+',
                backlog: 'Sonrotoclax · BGB-16673 · CDK4',
                ebitdaMargin: '~14%',
                marketCap: 'HK$182B',
                nvidiaLevel: 5,
                threat: 'low',
                strength: 'BTK 全球第一 · 首次盈利 · 三地上市 · 全球生产 · 瑞士迁册',
                weakness: '单品依赖 73% · 中美脱钩风险 · 研发投入 42% 刚性',
            },
            {
                name: '艾伯维 (AbbVie)',
                type: 'hyperscaler',
                ticker: 'NYSE:ABBV',
                revenue2026E: '~$60B',
                aiRevenue: '~$20B (肿瘤 + 免疫)',
                gpuFleet: '伊布替尼 · Venclexta · Skyrizi · Rinvoq',
                backlog: 'Humira LOE 后重建',
                ebitdaMargin: '~45%',
                marketCap: '~$350B',
                nvidiaLevel: 4,
                threat: 'high',
                strength: 'Imbruvica 历史 BTK 标杆 · 全球销售网络 · 免疫 + 肿瘤双赛道',
                weakness: 'Imbruvica 被 Brukinsa 反超 · Humira LOE 压力 · 管线老化',
            },
            {
                name: 'AstraZeneca',
                type: 'hyperscaler',
                ticker: 'NASDAQ:AZN',
                revenue2026E: '~$55B',
                aiRevenue: '~$22B (肿瘤)',
                gpuFleet: 'Tagrisso · Lynparza · Enhertu · Calquence',
                backlog: 'ADC + 双抗管线',
                ebitdaMargin: '~35%',
                marketCap: '~$230B',
                nvidiaLevel: 4,
                threat: 'medium',
                strength: 'Calquence (二代 BTK) 与 Brukinsa 直接竞争 · ADC Enhertu 全球第一',
                weakness: 'Calquence 美国市占 <25%，已被 Brukinsa 超越',
            },
            {
                name: 'Lilly (Eli Lilly)',
                type: 'hyperscaler',
                ticker: 'NYSE:LLY',
                revenue2026E: '~$65B',
                aiRevenue: '~$15B (肿瘤 + 糖尿病)',
                gpuFleet: 'Verzenio · Pirtobrutinib (三代 BTK)',
                backlog: '体重管理 + GLP-1 重点',
                ebitdaMargin: '~35%',
                marketCap: '~$720B',
                nvidiaLevel: 4,
                threat: 'high',
                strength: 'Pirtobrutinib 对 BTK-C481S 耐药有效 · 与 BGB-16673 头对头',
                weakness: 'Pirtobrutinib 三代 BTK 被 BTK CDAC 类技术颠覆风险',
            },
            {
                name: 'Merck (MRK)',
                type: 'hyperscaler',
                ticker: 'NYSE:MRK',
                revenue2026E: '~$64B',
                aiRevenue: '~$30B (肿瘤)',
                gpuFleet: 'Keytruda (K 药) · Lynparza',
                backlog: 'Keytruda LOE (2028) · ADC 布局',
                ebitdaMargin: '~40%',
                marketCap: '~$260B',
                nvidiaLevel: 4,
                threat: 'high',
                strength: 'K 药 $30B 单品 · PD-1 全球标杆',
                weakness: 'K 药专利 2028 到期 · 需接替',
            },
            {
                name: '信达生物 (Innovent)',
                type: 'specialist',
                ticker: 'HK:01801',
                revenue2026E: '~$1.8B',
                aiRevenue: '~$1.8B',
                gpuFleet: '信迪利单抗 · IBI310 + 管线',
                backlog: 'PD-1 + ADC + GLP-1',
                ebitdaMargin: '~10%',
                marketCap: '~HK$60B',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: '中国 PD-1 市场份额领先 · 与礼来合作深',
                weakness: '信迪利单抗美国 FDA 被退 · 海外销售弱',
            },
            {
                name: '恒瑞医药',
                type: 'specialist',
                ticker: 'SH:600276',
                revenue2026E: '~$4B',
                aiRevenue: '~$2.5B (肿瘤)',
                gpuFleet: '卡瑞利珠单抗 · 氟唑帕利',
                backlog: 'ADC · 双抗 · 出海',
                ebitdaMargin: '~25%',
                marketCap: '~RMB 320B / HK$350B',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: '中国创新药龙头 · 多产品组合',
                weakness: '海外销售极少 · 出海能力弱于百济',
            },
            {
                name: 'Regeneron',
                type: 'specialist',
                ticker: 'NASDAQ:REGN',
                revenue2026E: '~$14B',
                aiRevenue: '~$8B (肿瘤 + 免疫)',
                gpuFleet: 'Dupixent (与 Sanofi) · Eylea · Libtayo',
                backlog: '多管线 · ADC 布局',
                ebitdaMargin: '~45%',
                marketCap: '~$100B',
                nvidiaLevel: 5,
                threat: 'low',
                strength: '全球 biotech 成熟期范本 · 多管线平台',
                weakness: 'Eylea 面临仿制药 · Dupixent 与 Sanofi 分润',
            },
        ],

        positioning: [
            { dimension: '2025 营收', nebius: '$5.34B', industryAvg: '$2-15B', leader: 'Merck $64B', nebiusStrong: false },
            { dimension: '营收增速', nebius: '+40%', industryAvg: '+5-15%', leader: '百济神州', nebiusStrong: true },
            { dimension: '美国 BTK 市占', nebius: '>50%', industryAvg: 'N/A', leader: '百济神州', nebiusStrong: true },
            { dimension: '毛利率', nebius: '82%', industryAvg: '65-85%', leader: 'Regeneron 88%', nebiusStrong: true },
            { dimension: '研发投入占比', nebius: '42%', industryAvg: '18-25%', leader: '百济 (最高)', nebiusStrong: false },
            { dimension: '管线深度 (后期)', nebius: '5-6 个 III 期', industryAvg: '5-10 个', leader: 'Merck / AZ', nebiusStrong: false },
            { dimension: '全球化销售', nebius: '70% 海外 (含美国)', industryAvg: '60-80% 海外', leader: 'AZ / Merck', nebiusStrong: true },
            { dimension: '中国市场地位', nebius: '顶级三甲医院覆盖', industryAvg: '外企本土优势', leader: '百济 / 信达 / 恒瑞', nebiusStrong: true },
            { dimension: 'GAAP 盈利能力', nebius: '2025 首次 +$287M', industryAvg: '$0-$20B', leader: 'Merck $15B', nebiusStrong: false },
            { dimension: '市值 vs 营收', nebius: 'EV/S ~4x (低)', industryAvg: '4-8x', leader: 'Regeneron 8x', nebiusStrong: true },
        ],

        marketShare2026: [
            { name: 'Merck (K 药为主)', pct: 20 },
            { name: 'Bristol-Myers Squibb (O 药 + CAR-T)', pct: 12 },
            { name: 'AstraZeneca', pct: 12 },
            { name: 'Roche', pct: 11 },
            { name: 'Novartis', pct: 10 },
            { name: 'AbbVie (Imbruvica + Venclexta)', pct: 7 },
            { name: '百济神州 (Brukinsa)', pct: 3 },
            { name: '其他 (Lilly / Pfizer / BeOne 管线 / 中国药企)', pct: 25 },
        ],

        winLoss: [
            {
                scenario: '美国 BTK CLL/MCL 一线',
                winners: '百济 (Brukinsa)',
                losers: '艾伯维 Imbruvica · AZ Calquence',
                reasoning: 'Brukinsa ALPINE 三期数据优于 Imbruvica · 安全性优于 Calquence · 2025 美国市占 >50%',
            },
            {
                scenario: 'BTK C481S 耐药患者',
                winners: 'Lilly (Pirtobrutinib 三代) · 百济 (BGB-16673 CDAC)',
                losers: '一代 BTK (Imbruvica / Brukinsa / Calquence)',
                reasoning: '耐药患者市场是下一代 BTK 决胜点 · 2027-2028 头对头决定赢家',
            },
            {
                scenario: '全球 PD-1 一线',
                winners: 'Merck (K 药) · BMS (O 药)',
                losers: '替雷利珠 (后来者)',
                reasoning: 'K 药 / O 药在全球定价 · 医保覆盖 · 适应症先发优势明显',
            },
            {
                scenario: '中国 PD-1 市场',
                winners: '百济 · 信达 · 君实 · 恒瑞',
                losers: '跨国药企 (K 药/O 药价格高)',
                reasoning: '中国医保谈判后国产 PD-1 性价比碾压进口',
            },
            {
                scenario: 'BCL2 联合疗法',
                winners: '艾伯维 Venclexta · 百济 Sonrotoclax',
                losers: '其他靶点',
                reasoning: 'BCL2 在血液瘤联合治疗中地位稳固 · Sonrotoclax 是 next-gen',
            },
            {
                scenario: 'ADC / 双抗 / 细胞疗法',
                winners: 'AZ Enhertu · 第一三共 · Pfizer · 诺华',
                losers: '百济 (后来者)',
                reasoning: '百济 ADC 管线仍在早期 · 需要 3-5 年追赶',
            },
            {
                scenario: '中国创新药出海',
                winners: '百济 (唯一成功)',
                losers: '其他中国 biotech',
                reasoning: 'Brukinsa 美国 $2.6B 是中国原创药出海的孤例 · 其他公司 (信达 · 君实) 尚未真正做到',
            },
            {
                scenario: 'Biotech 估值修复行情',
                winners: '百济 (EV/S 4x 相对便宜)',
                losers: '已透支估值的 Mega Pharma',
                reasoning: '若 biotech 板块估值修复，百济作为全球第二梯队有 reranking 空间',
            },
        ],

        structuralTrend:
            '未来 3-5 年行业结构性变化：①**BTK 赛道世代更替**（一代 Imbruvica → 二代 Brukinsa / Calquence → 三代 Pirtobrutinib → 四代 CDAC · 百济在二三四代都布局）；②**中国创新药全球化范式确立**（百济是先锋，跟随者信达 · 君实 · 恒瑞等）；③**BIOSECURE + 中美脱钩加剧**（百济迁册瑞士是预防性动作）；④**ADC · 双抗 · 细胞疗法下一代（百济需追赶）**；⑤**Biotech 估值修复**（2022 低谷后的慢牛）。2028 年前百济必须：①守住 Brukinsa 全球 BTK 第一；②BGB-16673 三期胜出；③多管线 2-3 个关键读出成功；④海外销售占比 >75%。四者兼得才走上 Regeneron / Vertex 级别的 10 倍路径。',

        tam: {
            narrative:
                '全球肿瘤药 TAM 2025 ~$280B · 2030 预计 $450B (CAGR 10-12%)。百济当前全球市占 ~2%，若做到 4-5% 对应 $18-23B 营收（当前 3-4x）。更重要的是**估值倍数**：Regeneron / Vertex 级别的专注型 biotech 估值 6-8x 营收，百济当前 4x 有 reranking 空间。10x 市值路径：①营收 3-4x（$5.3B → $20B）+ ②估值倍数 1.5-2x（4x → 6-8x）+ ③人民币升值 1.2x = 总 7-10x。',
            points: [
                { year: '2022', totalTam: 200, neocloudTam: 100, selfRevenue: 1.42, status: 'actual' },
                { year: '2024', totalTam: 260, neocloudTam: 130, selfRevenue: 3.81, status: 'actual' },
                { year: '2025', totalTam: 280, neocloudTam: 150, selfRevenue: 5.34, status: 'actual' },
                { year: '2026', totalTam: 310, neocloudTam: 170, selfRevenue: 6.8, status: 'estimate' },
                { year: '2028', totalTam: 380, neocloudTam: 220, selfRevenue: 10, status: 'estimate' },
                { year: '2030', totalTam: 450, neocloudTam: 280, selfRevenue: 15, status: 'estimate' },
                { year: '2035', totalTam: 650, neocloudTam: 450, selfRevenue: 30, status: 'estimate' },
            ],
            keyNumbers: [
                { label: '全球肿瘤药 TAM (2025)', value: '$280B', sub: '占整个医药 13%', cls: 'cyan' },
                { label: '2030E 肿瘤药 TAM', value: '$450B', sub: 'CAGR ~10%', cls: 'purple' },
                { label: 'BTK 子赛道 (2028 峰值)', value: '$15-20B', sub: 'Brukinsa 核心', cls: 'green' },
                { label: '百济当前市占', value: '~2%', sub: '全球肿瘤', cls: 'cyan' },
                { label: '2030E 目标市占', value: '4-5%', sub: 'US$18-23B 营收', cls: 'green' },
                { label: '10x 所需', value: 'US$20B 营收', sub: '2030-2032', cls: 'red' },
                { label: '海外营收占比', value: '~70%', sub: '美欧为主', cls: 'green' },
                { label: '肿瘤药 CAGR', value: '~10-12%', sub: '长期增长', cls: 'purple' },
            ],
            sourcesNote:
                '数据来源：EvaluatePharma 全球肿瘤药市场 · IQVIA 销售数据 · 公司年报 · 券商研报。2028-2035 为基于"人口老龄化 + 精准医疗普及 + 百济管线命中"的推演。',
        },

        radar: {
            peer1Name: '艾伯维 (AbbVie)',
            peer2Name: 'Regeneron',
            dimensions: [
                { dim: '营收规模', self: 5, peer1: 10, peer2: 8 },
                { dim: '营收增速', self: 10, peer1: 4, peer2: 6 },
                { dim: '毛利率', self: 9, peer1: 8, peer2: 10 },
                { dim: 'BTK 竞争力', self: 10, peer1: 7, peer2: 2 },
                { dim: '管线深度', self: 8, peer1: 9, peer2: 8 },
                { dim: '全球化销售', self: 8, peer1: 10, peer2: 7 },
                { dim: '研发效率', self: 7, peer1: 8, peer2: 9 },
                { dim: '估值合理性', self: 9, peer1: 6, peer2: 7 },
            ],
            note: '1-10 分主观评分。百济神州在营收增速、BTK 竞争力、毛利率、估值合理性几乎与巨头并列；短板在营收规模和全球化销售广度。与艾伯维不同，百济是"增长型" Biotech；与 Regeneron 不同，百济还在"第一个爆款"阶段，需要管线多样化证明。',
        },
    },

    valuation: {
        metrics: [
            { metric: 'EV/Sales (2026E)', value: '~3.5x', benchmark: '全球 biotech 4-8x · Regeneron 7x', read: 'cheap' },
            { metric: 'Forward P/E (2026E)', value: '~55x', benchmark: '早期盈利 biotech 40-80x', read: 'fair' },
            { metric: 'Forward P/E (2027E)', value: '~28x', benchmark: '成熟 biotech 20-30x', read: 'fair' },
            { metric: 'PEG (2026E)', value: '~1.2', benchmark: '<1 视为便宜；1-1.5 合理', read: 'fair' },
            { metric: 'P/B', value: '~5x', benchmark: 'Biotech 3-8x', read: 'fair' },
            { metric: '隐含管线 (BTK CDAC + BCL2)', value: '约 20% 市值 ($4-5B)', benchmark: '类比 Vertex 早期管线期权', read: 'fair' },
        ],
        sotp: [
            { item: 'Brukinsa 泽布替尼 (现金流)', valuation: 'HK$100-130B', method: 'DCF · 2025 $3.9B 销售 · 2031 LOE 前现金流折现', note: '核心资产' },
            { item: 'Tislelizumab 替雷利珠 (未来 5 年)', valuation: 'HK$15-25B', method: '2025 $737M · 5x 峰值销售折现', note: 'PD-1 后来者' },
            { item: 'Amgen 授权产品 (稳态)', valuation: 'HK$8-12B', method: '10x 毛利流 · 稳定中国分销业务', note: '现金牛' },
            { item: 'BGB-16673 (BTK CDAC) 期权', valuation: 'HK$25-40B', method: 'rNPV · 三期成功概率 40% × 峰值 $3B × 8x', note: '二元风险 / 高回报期权' },
            { item: 'Sonrotoclax (BCL2) 期权', valuation: 'HK$15-25B', method: 'rNPV · 加速批准 60% × 峰值 $1.5B × 6x', note: 'BCL2 下一代' },
            { item: '其他管线 (ADC · 双抗 · CDK4 · 细胞疗法)', valuation: 'HK$15-25B', method: '早期管线期权总和', note: '5-10 个分子组合期权' },
            { item: '现金净额', valuation: 'HK$20-23B', method: '现金 $2.9B - 短期负债', note: '干净资产负债表' },
        ],
        sotpTotal: 'HK$198-280B',
        sotpPerShare: '对应合理区间 HK$195-275 (当前 HK$178 位于下沿)',
    },

    recommendation: {
        rating: '持有 · 分批建仓',
        ratingCls: 'neutral',
        timeHorizon: '5-10 年（长周期 biotech 配置）',
        positionSize: '3-5% 组合权重上限 · 全球 biotech 敞口',
        addingZone: 'HK$140-160 (SOTP 下沿 + 三期读出前支撑区)',
        stopLoss: 'BGB-16673 三期失败 / Brukinsa 美国市占跌破 40% / BIOSECURE Act 严重条款通过 → 重新评估',
        thesis:
            '当前 HK$178.9 相对共识 PT HK$302 的 59%，SOTP 区间 HK$195-275 位于下沿，估值不贵（EV/S 3.5x · Forward PEG 1.2）。看多核心在 **Brukinsa 全球 BTK 第一 + 首次盈利 + BGB-16673 CDAC 期权 + 中美脱钩下的瑞士迁册护城河**；看空核心在 **单品 73% 依赖 + BTK 市场天花板 + 研发投入 42% 刚性 + BIOSECURE 风险**。适合作为**"中国生物医药全球化"敞口**（替代信达 / 药明康德），与 Regeneron / Vertex / Gilead 等全球 biotech 搭配组合。需要 5-8 年耐心持有，周期性容忍 40%+ 回撤。',
        keyAssumptions: [
            '2026-2028 Brukinsa 全球销售年 YoY +25-30%（达 $6-7B 峰值）',
            'BGB-16673 2027-2028 三期头对头至少非劣效于 Lilly',
            'Sonrotoclax 2027 获得 FDA 加速批准',
            'BIOSECURE Act 不通过严厉条款（否则剥离美国业务风险）',
            '研发投入 / 营收 2028 降至 30-35%',
        ],
        sizingFormula: {
            method: 'Kelly 公式（保守版，使用 1/2 Kelly）',
            formula: 'f* = (期望回报率 − 无风险利率) / 方差 × 0.5',
            inputs: [
                { label: '10Y 期望回报率', value: '12.0% CAGR' },
                { label: '无风险利率', value: '4.0% (港币)' },
                { label: '情景标准差 (10Y)', value: 'HK$430B (~77% of E[Mcap])' },
                { label: '完整 Kelly', value: '~7%' },
                { label: '1/2 Kelly (保守)', value: '~3.5%' },
            ],
            computedSize: '3-5% 组合权重',
            reasoning:
                '10Y 情景标准差占期望值 ~77%，在已覆盖公司中属中等偏低（低于泡泡玛特 85% · 远低于 Circle 110%），因 Biotech 的"首次盈利"已显著降低尾部风险。但管线临床失败是真正的二元风险（BGB-16673 三期 ±40% 股价），应取 1/2 Kelly 保守仓位。**分层建仓**：基础 3%（当前估值 + 首次盈利安全边际）+ Sonrotoclax 加速批准 +1%（第二分子验证）+ BGB-16673 三期非劣效 +1%（二代 BTK 确认）= 最高 5%。',
        },
    },

    keyPersonRisks: [
        {
            name: '欧雷强 (CEO · 联合创始人)',
            role: '战略 · 全球化 · 投资者关系',
            departProb: '低 (~5% / 5 年)',
            departImpact: '极高 —— 股价短期 -25% · 中美桥梁角色不可替代',
            mitigation: '15 年长期掌舵 · 团队已成熟 · 接班梯队（Aaron Rosenberg · Lai Wang）培养中',
            criticality: 'critical',
        },
        {
            name: '王晓东 (联合创始人 · 科学顾问)',
            role: '科学方向 · 管线判断',
            departProb: '低 (~5% / 5 年)',
            departImpact: '中高 —— 科学灵魂缺失 · 下一代管线方向可能偏移',
            mitigation: 'Lai Wang (CMO) + Jay Mei + 全球 PhD 团队已形成研发梯队',
            criticality: 'high',
        },
        {
            name: 'Lai Wang (CMO + 全球研究负责人)',
            role: '管线临床开发 · 关键读出',
            departProb: '中 (~15% / 5 年)',
            departImpact: '高 —— BGB-16673 · Sonrotoclax 等关键临床节奏受影响',
            mitigation: 'Jay Mei 可升级接替 · 外部 biotech 挖角（BMS / Merck）',
            criticality: 'high',
        },
        {
            name: 'Aaron Rosenberg (CFO)',
            role: '财务 · 三地上市协调 · 投资者关系',
            departProb: '中 (~12% / 5 年)',
            departImpact: '中 —— 三地财报协调 · 迁册瑞士后续影响',
            mitigation: '2021 起已建立财务团队深度 · Gilead 背景人脉广',
            criticality: 'medium',
        },
        {
            name: 'Jay Mei (实体瘤 / 替雷利珠负责人)',
            role: 'PD-1 全球开发 · 扩适应症',
            departProb: '中 (~15% / 5 年)',
            departImpact: '中 —— 替雷利珠全球放量节奏受影响',
            mitigation: 'BMS 背景人脉广 · 替代者可从跨国药企 IO 部门挖角',
            criticality: 'medium',
        },
    ],

    cashFlow: {
        narrative:
            '百济神州是**"biotech 现金流典型曲线"**：2015-2024 持续烧钱 · 2025 年首次 OCF 大幅转正。**关键观察**：2026-2028 OCF 能否稳定在 $1-2B/年，决定是否能自筹 R&D 而不依赖融资。**资产中等**：生产基地 · 研发 CapEx 需要持续投入，但无持续大规模 M&A。',
        rows: [
            { year: '2021', ocf: -1400, icf: -300, fcf: 1200, freeCashFlow: -1700, status: 'actual' },
            { year: '2022', ocf: -2000, icf: -500, fcf: 1500, freeCashFlow: -2500, status: 'actual' },
            { year: '2023', ocf: -800, icf: -400, fcf: 900, freeCashFlow: -1200, status: 'actual' },
            { year: '2024', ocf: -200, icf: -350, fcf: -100, freeCashFlow: -550, status: 'actual' },
            { year: '2025', ocf: 800, icf: -400, fcf: -200, freeCashFlow: 400, status: 'actual' },
            { year: '2026E', ocf: 1400, icf: -500, fcf: -250, freeCashFlow: 900, status: 'estimate' },
            { year: '2027E', ocf: 2000, icf: -600, fcf: -300, freeCashFlow: 1400, status: 'estimate' },
            { year: '2028E', ocf: 2800, icf: -700, fcf: -400, freeCashFlow: 2100, status: 'estimate' },
        ],
        conversionNote:
            'Cash Conversion Ratio = OCF / Net Income。2025 约 2.8x (OCF $800M / Net Income $287M) 因递延税 + 折旧回转 · 2026+ 预期稳定在 1.5-2.0x（biotech 典型 · 折旧高 + 应收管理改善）。',
        keyRisks: [
            '若 2026 营收增速 <25%，OCF 目标 $1.4B 可能达不到 · 仍需融资',
            '临床 III 期支出集中在 2026-2028 年 · 研发 CapEx 压力最大',
            'BIOSECURE Act 若通过，美国现金回流可能受限',
            '生产基地扩建（新泽西 / 瑞士）是 2026-2027 CapEx 集中期',
        ],
    },

    historicalValuation: {
        narrative:
            '百济神州 2016-02 NASDAQ IPO · 10 年交易历史。**EV/Sales 区间 3-15x**，反映从"高估值烧钱 biotech"到"成熟盈利 biotech"的估值重估。当前 ~3.5x 2026E 处于上市以来 **30% 分位**（偏便宜），尤其相对全球 biotech 同业 6-8x 显得低估。对标：Regeneron 7x · Vertex 7x · Gilead 3x · 艾伯维 4x。',
        history: [
            { period: '2016-Q2 (IPO)', evSales: 35, note: 'IPO 估值高 · 早期 biotech' },
            { period: '2018-Q4', evSales: 40, note: 'Amgen 入股后高估' },
            { period: '2020-Q4', evSales: 20, note: 'Brukinsa FDA 完全批准' },
            { period: '2022-Q4 (Biotech 熊市)', evSales: 8, note: '整个板块回调 · $60 低点' },
            { period: '2023-Q4', evSales: 6, note: 'Brukinsa 美国起飞前' },
            { period: '2024-Q4', evSales: 5, note: '盈利预期逐渐反映' },
            { period: '2025-Q2 (首次盈利)', evSales: 4.5, note: '估值重估开始' },
            { period: '2025-Q4 (高点)', evSales: 5.5, note: 'HK$240' },
            { period: '2026-Q1', evSales: 4, note: '回调至 HK$180 区间' },
            { period: '2026-Q2 (当前)', evSales: 3.5, note: 'HK$178.90' },
        ],
        currentPercentile: '30%',
        verdict: 'cheap',
    },

    downsideMetrics: {
        narrative:
            '只看期望 12.0% CAGR 是 research theater。基于 4 档情景，百济神州 10Y **情景标准差约 HK$430B**（~77% 期望值）。**5Y 内亏损 30%+ 的概率约 22%**——主要风险是 BGB-16673 / Sonrotoclax 关键读出失败或 BIOSECURE Act 严厉通过。但首次盈利 + 瑞士迁册 + 全球生产布局已结构性降低尾部风险。',
        scenarioStdDev: 430,
        sharpeLike: 0.88,
        probLoss30Pct5Y: 22,
        maxDrawdownEstimate: '-40% 到 -55%（2022 年曾从 HK$280 跌至 HK$60 = -79%，下次预计 -40-50%）',
        downsideToUpsideRatio: '下行 1 vs 上行 6 (单次下跌 HK$30-40B · 单次上冲 HK$200B+)',
    },

    sensitivity: {
        narrative: '哪个变量对 10Y 期望市值最敏感？按单变量 ±1σ 扰动排序 ——',
        variables: [
            { variable: 'Brukinsa 峰值销售 $5B vs $9B', downImpact: -180, upImpact: 250, description: '单品 73% 营收 · 核心敏感度' },
            { variable: 'BGB-16673 三期结果 (二元)', downImpact: -160, upImpact: 280, description: 'BTK CDAC 决定下一代市场' },
            { variable: 'BIOSECURE Act 通过程度', downImpact: -200, upImpact: 50, description: '美国业务 48% 营收暴露' },
            { variable: 'Sonrotoclax BCL2 成败', downImpact: -80, upImpact: 150, description: '第二分子验证' },
            { variable: '研发投入 2030 占比 30% vs 42%', downImpact: -60, upImpact: 120, description: '盈利质量关键' },
            { variable: '替雷利珠美国放量', downImpact: -40, upImpact: 90, description: 'PD-1 出海成败' },
            { variable: '中美汇率 / 生物医药关税', downImpact: -70, upImpact: 30, description: '地缘 + 汇率综合' },
        ],
        takeaway:
            '**最敏感三变量：Brukinsa 峰值销售、BGB-16673 三期结果、BIOSECURE Act 走向**。每季度追踪前两项（新临床读出 + Brukinsa 市占），BIOSECURE Act 随国会议程动态评估。BGB-16673 三期数据读出（预计 2027-2028）是"二元事件" · 做好 ±30-40% 股价波动准备。',
    },

    bearPlaybook: {
        scenario: '"悲观：BTK 竞争加剧 · 管线命中率低"（27% 概率）的完整 ruin 路径',
        steps: [
            {
                when: '2026 H2',
                event: 'Lilly Pirtobrutinib 三代 BTK 美国加速批准 · 耐药患者抢占',
                signal: 'Lilly 三代 BTK 美国市占 +5-10% · Brukinsa 增速放缓至 +20%',
            },
            {
                when: '2027 Q1',
                event: 'BGB-16673 三期头对头数据读出 · 劣效于 Lilly Pirtobrutinib',
                signal: 'BGB-16673 PFS 劣效 · 或未达主要终点 · 股价单日 -30%',
            },
            {
                when: '2027 Q3',
                event: 'Sonrotoclax BCL2 二期数据不及预期 · 或 ORR <60%',
                signal: '关键临床节点失败 · 加速批准申请撤回',
            },
            {
                when: '2028',
                event: 'BIOSECURE Act 严厉条款通过 · 美国临床数据审查 · 部分产品被限',
                signal: '美国销售 QoQ -15-25% · 股价 -20%',
            },
            {
                when: '2028-2029',
                event: 'Brukinsa 专利 LOE 临近 · 艾伯维 / Lilly / AZ 多方围剿',
                signal: 'Brukinsa 美国市占跌破 40% · 价格战开始',
            },
            {
                when: '2029-2030',
                event: '百济沦为"中国地区 biotech" · 回归 $3-5B 营收 · 估值压缩至 EV/S 3x',
                signal: '全球营收 <$8B · 市值稳定在 HK$100-150B · 管线故事失效',
            },
        ],
        exitTrigger:
            '任一步骤在时间表前 1 个季度提前发生 → **减仓 50%**。连续 2 条发生 → **清仓观望**。特别关注：Brukinsa 美国季度市占 + BGB-16673 三期入组进度 + BIOSECURE 立法进程三项"先行指标"。',
    },

    capitalAllocation: {
        narrative:
            '百济神州 2015-2024 累计研发投入 $10B+，2025 首次盈利——典型"高 R&D × 延迟盈利"biotech 资本配置模型。研发 / 营收 42% 是行业最高之一，短期拖累 ROIIC 但构建长期管线深度。2025 启动小规模回购是"从烧钱到回报"的信号。',
        scores: [
            { dimension: 'ROIIC', label: '增量资本回报率', score: 2, detail: '2015-2024 研发投入累计 $10B 仅产出 Brukinsa + Tislelizumab 两个商业化分子 · ROIIC 估算 5-8% · 低于成熟 biotech', evidence: '历年研发投入 + 产品销售' },
            { dimension: 'Buyback', label: '回购节奏', score: 2, detail: '2025 首次启动小规模回购；处于早期阶段', evidence: '2025 财报' },
            { dimension: 'Dividend', label: '股息政策', score: 1, detail: '无股息 · biotech 合理（仍需保留现金做研发）', evidence: '公司指引' },
            { dimension: 'M&A', label: '并购命中率', score: 3, detail: 'Amgen 2019 战略合作（分销产品）执行良好；无大规模并购', evidence: 'Amgen 合作历史' },
        ],
        overallGrade: 'C',
        historicalROIIC: '~5-10% (高研发支出拖累)',
    },

    gapAnalysis: {
        narrative:
            '百济 2026 核心 gap 是"Brukinsa 峰值销售"分歧。卖方共识假设 Brukinsa +35% 增速可持续到 $6.5B，但本分析考虑 Lilly Pirtobrutinib 竞争加剧，2026 增速降至 +25-30%。另一 gap 是 BIOSECURE Act 立法进展。',
        rows: [
            { metric: '2026 Brukinsa 销售', guidance: '未直接指引', consensus: '$5.3-5.8B (+35%)', selfAssumption: '$5.0B (+28%)', gap: '-8% vs 共识', risk: 'high', note: 'Lilly 竞争' },
            { metric: '2026 总营收', guidance: '未指引', consensus: '$7.2B', selfAssumption: '$6.8B', gap: '-6%', risk: 'medium' },
            { metric: '2026 GAAP 净利率', guidance: '持续提升', consensus: '12%', selfAssumption: '10-12%', gap: '基本一致', risk: 'low' },
            { metric: 'BGB-16673 三期读出', guidance: '2027-2028', consensus: '50% 成功概率', selfAssumption: '45%', gap: '保守 5pp', risk: 'high', note: '二元事件' },
            { metric: 'BIOSECURE Act 影响', guidance: '"有限影响"', consensus: '20% 概率通过严厉条款', selfAssumption: '15%', gap: '保守 5pp', risk: 'medium' },
        ],
        takeaway:
            '**最关键 Gap：Brukinsa 峰值销售 $6B 共识 vs $5B 本分析**。$1B 差异对应 20% 市值（$5B × 8x P/E × 0.5 净利率）。关注 Lilly Pirtobrutinib 2026-2027 市占数据是先行指标——若 Lilly 抢到 >15% 市占，共识会下修。',
    },

    benchmarkComparison: {
        narrative:
            '百济 10Y 期望 CAGR 12% vs 被动 60/40 组合 7.8%——超额 4.2pp，**边缘 justify 3-5% 仓位**。但百济的独特性在于 "BGB-16673 三期二元事件" 提供 +40% 上行期权——这个期权不是 60/40 能获取的，值得支付 marginal 超额。',
        alternatives: [
            { name: 'SPY (S&P 500)', ticker: 'SPY', expectedReturn5Y: 9, expectedReturn10Y: 10, note: '美国宽基' },
            { name: 'XBI (Biotech ETF)', ticker: 'XBI', expectedReturn5Y: 8, expectedReturn10Y: 10, note: 'Biotech 被动组合' },
            { name: '60/40', expectedReturn5Y: 7, expectedReturn10Y: 8, note: '经典稳健' },
            { name: '10Y 国债 (TLT)', ticker: 'TLT', expectedReturn5Y: 4, expectedReturn10Y: 4.5, note: '无风险' },
            { name: 'IBB (Biotech 大盘 ETF)', ticker: 'IBB', expectedReturn5Y: 7, expectedReturn10Y: 9, note: '更成熟 biotech' },
            { name: 'Regeneron (REGN)', ticker: 'REGN', expectedReturn5Y: 9, expectedReturn10Y: 11, note: '已覆盖公司级对照' },
        ],
        selfReturn5Y: 9.3,
        selfReturn10Y: 12,
        excessReturn5Y: 2.3,
        excessReturn10Y: 4.2,
        justifiesPosition: 'marginal',
        takeaway:
            '**超额 4.2pp 处于"边缘 justify"** · 10Y 略优于 XBI / IBB · 与 Regeneron 接近。独特价值：①BTK CDAC 期权（BGB-16673 胜出可带 40% 上行）；②中国创新药范本（机构稀缺性溢价）。建议 3-4% 起步，BGB-16673 关键读出前后再决定是否加至 5%。',
    },

    trackRecord: {
        narrative:
            '本分析锚定 2026-04-20。以下 6 条可验证命题，特别关注 Brukinsa 季度市占 + BIOSECURE 立法进程。',
        assumptions: [
            { assumption: '2026 Brukinsa 全球销售 ≥$5B', setAt: '2026-04-20', targetDate: '2027-03-31', targetValue: '≥$5B', verdict: 'pending', note: '核心变量' },
            { assumption: 'Brukinsa 美国 BTK 市占 2026 末 ≥50%', setAt: '2026-04-20', targetDate: '2027-02-28', targetValue: '≥50%', verdict: 'pending' },
            { assumption: 'BGB-16673 三期入组 2026 完成', setAt: '2026-04-20', targetDate: '2026-12-31', targetValue: 'fully enrolled', verdict: 'pending' },
            { assumption: 'Sonrotoclax 2027 FDA 加速批准', setAt: '2026-04-20', targetDate: '2027-12-31', targetValue: 'approved', verdict: 'pending' },
            { assumption: 'BIOSECURE Act 2026 未通过严厉条款', setAt: '2026-04-20', targetDate: '2026-12-31', targetValue: 'no harsh version', verdict: 'pending' },
            { assumption: '2026 GAAP 净利 ≥$600M (持续盈利)', setAt: '2026-04-20', targetDate: '2027-03-31', targetValue: '≥$600M', verdict: 'pending' },
        ],
        hitRate: 'N/A (全部 pending)',
    },

    dataSources: {
        narrative: '本报告数据锚定 2026-04-20。核心数据来自 BeOne Medicines 季报、NASDAQ / 港交所 / 科创板披露、FDA 批准文件、主流财经媒体。情景概率与 10Y 期望为本分析主观推演。',
        accessedAt: '2026-04-20',
        sources: [
            { label: 'BeOne Medicines Q4/FY2025 Results', url: 'https://ir.beonemedicines.com/news/beone-medicines-announces-fourth-quarter-and-full-year-2025-financial-results-highlighting-global-success-of/dd3a3850-aeb0-4cd6-a3ef-5f0bd45d1340', category: 'primary', publishedAt: '2026-02-26', note: '$5.34B 营收 +40% · 首次 GAAP 盈利' },
            { label: 'Q1 2025 首次季度盈利 (Yicai)', url: 'https://www.yicaiglobal.com/news/chinese-drugmaker-beigene-turns-its-first-quarterly-profit-thanks-to-global-sales-surge', category: 'secondary' },
            { label: '百济神州 Q3 前三季度财报', url: 'https://news.yaozh.com/archive/46266.html', category: 'primary' },
            { label: 'Brukinsa 超越伊布替尼（新浪财经）', url: 'https://finance.sina.com.cn/roll/2025-11-07/doc-infwqkxt2483777.shtml', category: 'secondary' },
            { label: 'BeiGene 更名 BeOne Medicines', url: 'https://ir.beonemedicines.com/news/beigene-announces-fourth-quarter-and-full-year-2024-financial-results-and-business-updates/ae4b526f-e135-4ce7-84fe-e9a8ba557406', category: 'primary', publishedAt: '2025-01' },
            { label: '分析师目标价 (StockAnalysis)', url: 'https://stockanalysis.com/stocks/onc/forecast/', category: 'research' },
            { label: 'Morgan Stanley / Goldman / UBS 目标价', url: 'https://www.tipranks.com/stocks/onc/forecast', category: 'research' },
            { label: 'BRUKINSA 全球销售数据', url: 'https://beonemedicines.com/wp-content/uploads/2025/05/FINAL-BRUKINSA-US-Fact-Sheet.pdf', category: 'primary' },
            { label: 'BIOSECURE Act 立法追踪', url: 'https://www.congress.gov', category: 'primary' },
            { label: 'Yahoo Finance 6160.HK', url: 'https://finance.yahoo.com/quote/6160.HK/', category: 'data' },
        ],
    },

    correlation: {
        narrative:
            '百济神州是**中国创新药 + 全球 biotech + 港股通综合敞口**：涨跌 40% 由 biotech 板块情绪驱动、30% 由中美关系决定、30% 由公司自身管线读出驱动。如果组合中已持有 Regeneron / Vertex / Gilead · 港股科技股 · A 股医药 ETF，加百济的**边际多元化中等**。真正的 hedge 是**反周期 + 非 biotech 资产**。',
        rows: [
            { asset: 'Regeneron (REGN)', beta: 0.8, correlation: 0.70, hedgeValue: 'low', note: '全球 biotech 同业 · 情绪相关' },
            { asset: 'XBI (Biotech ETF)', beta: 1.1, correlation: 0.75, hedgeValue: 'low', note: 'Biotech 板块 β · 强相关' },
            { asset: 'Vertex (VRTX)', beta: 0.7, correlation: 0.60, hedgeValue: 'medium', note: '专注型 biotech · 相关但有差异' },
            { asset: '艾伯维 (ABBV)', beta: 0.4, correlation: 0.45, hedgeValue: 'medium', note: 'Mega Pharma · 较弱相关' },
            { asset: '信达生物 (1801)', beta: 1.2, correlation: 0.70, hedgeValue: 'low', note: '中国 biotech 同行 · 强相关' },
            { asset: '恒瑞医药 (600276)', beta: 0.9, correlation: 0.55, hedgeValue: 'medium', note: 'A 股医药龙头' },
            { asset: '腾讯 (HK:00700)', beta: 0.8, correlation: 0.50, hedgeValue: 'medium', note: '港股 β · 中美关系敏感' },
            { asset: '10Y 国债 (TLT)', beta: -0.3, correlation: -0.40, hedgeValue: 'high', note: '降息受益 · biotech 长久期反向' },
            { asset: '黄金 (GLD)', beta: -0.1, correlation: -0.10, hedgeValue: 'medium', note: '宏观对冲 · 中美冲突时上涨' },
        ],
        suggestedHedge:
            '如果百济占组合 3-5%，建议搭配：①**反向**：6-8% TLT（降息受益 · biotech 正向 correlation）+ 2-3% GLD（地缘对冲）；②**不要同时持有**：百济 + 信达 + XBI 三者加总超过 10% 是重大集中度风险；③**对标全球 biotech**：可搭配 Vertex 或 Regeneron 2-3%（同赛道分散）。**最佳组合**：百济 4% + Regeneron 3% + Vertex 2% + TLT 7% + GLD 2%（全球 biotech 分散 + 宏观对冲）。',
    },
}
