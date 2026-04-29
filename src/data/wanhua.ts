import type { CompanyDetail } from '@/types/company'

export const wanhua: CompanyDetail = {
    id: 'wanhua',
    ticker: 'SH:600309',
    name: '万华化学 (Wanhua Chemical Group)',
    tagline:
        '全球 MDI 龙头（产能 380 万吨/年 · 全球份额 33.8%）。2025 营收首破 2,000 亿（+11.62%），Q1\'26 单季营收 +25.5% / 归母 +20.6%，海外营收占比 47.4%——周期底部见拐 + 新材料二曲线（POE / 尼龙 12 / LFP）+ 福建二期 2026 Q2 投产将产能推至 450 万吨。核心争议：周期质量股能否完成"中国版 BASF"的估值切换？',
    date: '2026-04-29',

    priceCards: [
        { label: '当前股价', value: '¥89.48', sub: '2026-04-28 收盘', cls: 'cyan' },
        { label: '52 周区间', value: '¥53.90 – ¥95+', sub: '2025-07 回购均价 53.90', cls: 'purple' },
        { label: '总市值', value: '~¥2,801 亿', sub: '~$385B (按 7.27 汇率 ~$385 亿)', cls: 'purple' },
        { label: '机构综合目标价', value: '¥109.30', sub: '隐含 +22% 空间', cls: 'cyan' },
        { label: '2025 营收', value: '¥2,032.35 亿', sub: '+11.62% · 首破 2000 亿', cls: 'green' },
        { label: '海外营收占比', value: '47.4%', sub: '2026 Q1 · 突破地产 β', cls: 'green' },
    ],

    keyFacts: {
        '2025 营收': '¥2,032.35 亿 (+11.62%)',
        '2025 归母净利': '¥125.27 亿 (-3.88%)',
        '2025 扣非净利': '¥121.44 亿 (-9.10%)',
        '2025 经营现金流': '¥331.05 亿 (+10.2%)',
        '2025 EPS': '3.99 元',
        '2024 营收': '¥1,820.69 亿 (+3.83%)',
        '2024 归母净利': '¥130.33 亿 (-22.49%)',
        '2026 Q1 营收': '¥540.52 亿 (+25.50%)',
        '2026 Q1 归母净利': '¥37.18 亿 (+20.62%)',
        '聚氨酯营收 (2024)': '¥758.44 亿 (毛利 26.15%)',
        '石化营收 (2024)': '¥725.18 亿 (毛利 3.52%)',
        '精细化学品 & 新材料 (2024)': '¥282.73 亿 (毛利 12.78%)',
        'MDI 全球产能 (2025末)': '380 万吨/年 (全球 33.8%)',
        'MDI 全球产能 (2026 Q2 后)': '450 万吨/年',
        '2025 现金分红 + 回购': '¥44.13 亿',
        'PE (TTM)': '20.59x · 5Y 分位 87%',
        'PB': '~3.0x · 10Y 5% 分位',
    },

    contracts: [
        { customer: '福建二期 70 万吨 MDI 技改 + 36 万吨 TDI', amount: '~¥150 亿', years: '2024-2026', detail: '2026 Q2 MDI 投产，全球份额跃升至 35-37%；TDI 2025 已投' },
        { customer: '蓬莱高性能新材料一体化基地', amount: '¥231 亿', years: '2022-2028', detail: '一期 PDH 90 万吨 + PO 40 万吨 + 丙烯酸酯 34 万吨，2024 起陆续投产' },
        { customer: '蓬莱电池材料产业园', amount: '¥168 亿', years: '2025-2032', detail: '一期 10 万吨 LFP（2026-06 投产），全部完成 2032-12' },
        { customer: '蓬莱 POE 二期 40 万吨', amount: '未单独披露', years: '2025-2026', detail: '一期 20 万吨 2024-06 投，二期 2025 末投，合计 60 万吨/年' },
        { customer: '烟台乙烯二期 (120 万吨/年级)', amount: '大型综合', years: '2023-2025', detail: '2025 年内投产，全乙烷进料改造' },
        { customer: '宁波 60 万吨 MDI 远期扩产', amount: '推进中', years: '2026-2028+', detail: '全部完成后总 MDI 产能 480 万吨/年' },
    ],

    subsidiaries: [
        { name: '万华聚氨酯（烟台/宁波/福建）', desc: 'MDI/TDI/聚醚多元醇核心资产', stake: '全资', value: '2024 营收 ¥758 亿 · 毛利 26% · 公司利润支柱（贡献 70%+ 毛利）' },
        { name: '匈牙利 BorsodChem (BC 公司)', desc: '欧洲 MDI/TDI/PVC 一体化', stake: '96%', value: '2011 €12.63 亿欧元收购 · 40 万吨 MDI · 欧洲市场制造业回流关键资产' },
        { name: '万华石化 (烟台/蓬莱)', desc: '乙烯 + 丙烯 + PDH + PO/SAP', stake: '全资', value: '2024 营收 ¥725 亿 · 毛利仅 3.52% · 周期低迷期' },
        { name: '万华新材料 (POE/尼龙12/LFP/PC)', desc: '高附加值新材料平台', stake: '全资', value: '2024 营收 ¥283 亿 +19% · 公司"二次曲线"' },
        { name: '万华墨西哥', desc: '北美市场配套', stake: '全资', value: '对冲美墨加 / 美国关税摩擦' },
    ],

    bullPoints: [
        { title: '全球 MDI 唯一上升龙头 (33.8% → 37%+)', body: '过去 10 年是全球 MDI 厂商中唯一份额持续提升的：2025 末产能 380 万吨/年 (33.8%)，2026 Q2 福建二期投后 450 万吨/年；Covestro 已被 ADNOC 私有化进入整合期，万华是最大整合受益者' },
        { title: 'Q1\'26 业绩拐点已现', body: '2026 Q1 营收 ¥540.52 亿 (+25.50%) / 归母 ¥37.18 亿 (+20.62%)，远高于 2025 全年 -3.88% 走势；MDI 价格中枢 14000→16500 上移，周期底部确认' },
        { title: '海外营收占比 47.4% 突破地产 β', body: '2026 Q1 海外占比已升至 47%+，匈牙利 BC + 墨西哥 + 出口三轨并行；Brexit 后欧洲制造业回流给 BC 公司带来欧洲份额提升红利' },
        { title: '新材料二次曲线进入放量期', body: 'POE 60 万吨/年 (国内最早量产) + 尼龙 12 4 万吨 (破赢创垄断) + LFP 10 万吨 (2026-06 投) + PC 60 万吨 + 香精香料；新材料板块 2024 +19% 高于聚氨酯' },
        { title: 'CapEx 见顶 · 自由现金流即将释放', body: '2022-2025 累计 CapEx 800-1000 亿，2026-2027 福建/烟台/蓬莱主项目陆续投产后 CapEx 大幅放缓，FCF 有望从 ~50 亿跳升至 200+ 亿' },
        { title: '资本配置一流 (廖增太团队)', body: '2024 分红 ¥39.25 亿 (分红率 30.11%) + 2025 回购 ¥5 亿全部注销 + 现金分红 12.50 元/10 股，年度回报合计 ¥44.13 亿；员工持股平台 中诚投资 长期绑定' },
        { title: '估值历史底部 (PB 10Y 5% 分位)', body: '当前 PB ~3.0x 处于过去 10 年的 5% 分位线；价差指数处于历史 5.83% 分位，意味着行业景气底 + 估值底双重底部' },
    ],

    bearPoints: [
        { title: '中国地产长周期下行压制 MDI 国内需求', body: '聚合 MDI 国内需求 52% 来自白电保温、13% 来自建筑保温外墙；房地产长期下行 + 家电饱和让国内 MDI 需求结构性承压' },
        { title: '全球 MDI 产能过剩 (开工率 78%)', body: '2024 全球产能 1,095 万吨/需求 850 万吨；万华自身扩产推高全球供给，对自家边际价格构成压力——典型"反身性"风险' },
        { title: '石化板块毛利仅 3.52%', body: '占营收 40% 的石化板块周期性极强，2024 毛利率仅 3.52%；油价下行 + 全球乙烯产能投放将持续压制盈利' },
        { title: 'CapEx 周期高位 + 资产负债率 64.7%', body: '2024 资产负债率上升 2.05pct 至 64.72%；福建二期 + 蓬莱基地 + 烟台乙烯重资产投入期，若周期复苏不及预期 ROIC 将进一步下滑' },
        { title: 'ROE 从 30%+ 跌到 11.5%', body: '加权 ROE 2024 14.29% (-6.13pct)，2025 估算约 11.5%，离 2021 年巅峰 30%+ 已大幅回落；周期股估值切换的"美好故事"需要 ROE 重回 18%+' },
        { title: '中欧 / 中美贸易摩擦风险', body: '海外占比 47% 的同时，欧洲反倾销 + 美国 IRA / 关税 + 印度 BIS 认证延迟都是潜在催化负面' },
        { title: '关键人风险 (廖增太接班机制不透明)', body: '廖董领导的技术派 + 实业派团队是公司过去 20 年成功核心，公开信息中未见明确接班人安排' },
    ],

    scenarios: [
        {
            name: '乐观: MDI 龙头整合 + 新材料平台化 (中国版 BASF)',
            cls: 'bull',
            prob: 15,
            y5Mcap: '¥5,500 – 7,500 亿',
            y5Value: 6500,
            y10Mcap: '¥10,000 – 15,000 亿',
            y10Value: 12500,
            desc: 'Covestro 整合期万华抢占 5pp 份额至 38%；MDI 价差中枢回到 ¥14,000+；新材料 (POE/LFP/尼龙12) 营收破 800 亿；海外占比 60%+；2030 营收 ¥3,500 亿，扣非净利 ¥350 亿；按 PE 25-30x 切换至"中国版 BASF"溢价',
        },
        {
            name: '中性: 周期均值回归 + 新材料贡献 25-30% 营收',
            cls: 'neutral',
            prob: 50,
            y5Mcap: '¥3,500 – 4,500 亿',
            y5Value: 4000,
            y10Mcap: '¥6,500 – 9,000 亿',
            y10Value: 7750,
            desc: 'MDI 价差均值 ¥12-13k；福建二期满产 + 蓬莱基地放量；新材料贡献 ~28% 营收；海外占比稳定 50%；2030 营收 ¥2,800 亿，归母 ¥240 亿；PE 15-18x 中位回归',
        },
        {
            name: '悲观: 地产长期下行 + 全球 MDI 产能继续过剩',
            cls: 'bear',
            prob: 28,
            y5Mcap: '¥1,800 – 2,500 亿',
            y5Value: 2150,
            y10Mcap: '¥2,200 – 3,200 亿',
            y10Value: 2700,
            desc: 'MDI 国内挂牌价长期 ¥10-12k；房地产 / 家电需求结构性下台阶；新材料兑现速度低于预期；福建二期 ROIIC <8%；2030 营收 ¥2,200 亿，归母 ¥120 亿；PE 压缩至 10-12x',
        },
        {
            name: '尾部: 大装置事故 / 中欧 / 中美关税战 / BC 能源失控',
            cls: 'bear',
            prob: 7,
            y5Mcap: '¥1,200 – 1,800 亿',
            y5Value: 1500,
            y10Mcap: '¥1,500 – 2,500 亿',
            y10Value: 2000,
            desc: '烟台 / 宁波装置重大安全或环保事件 + 欧洲 BC 能源价格失控 + 中欧反倾销裁定 + 中美关税升级；ROE 长期低位，估值倍数压缩到 8-10x',
        },
    ],

    tenXGene: [
        { dim: '规模化边际成本', tenBagger: '边际成本 ≈ 0', nebius: '重资产化工，CapEx 高，固定资产 ~2,300 亿', status: 'red' },
        { dim: '网络/平台效应', tenBagger: '显著网络效应', nebius: 'B2B 大宗品，无网络效应；客户切换主要源于认证 + 配方', status: 'red' },
        { dim: '数据/资产壁垒', tenBagger: '独占数据 / IP / 规模', nebius: 'MDI 全流程自主工艺 + 万吨级装置 know-how + 烟台/宁波/福建/匈牙利 一体化', status: 'yellow' },
        { dim: '定价权 · 毛利', tenBagger: '60%+ 毛利可持续', nebius: 'MDI 全球四寡头 (CR5 89%) 有一定定价权；周期内毛利 3-30%，长期均值 ~18%', status: 'yellow' },
        { dim: '再投资空间 (TAM × ROIC)', tenBagger: '高 ROIC × TAM 巨大', nebius: '全球 MDI 2031 1,164 万吨；新材料 (POE/LFP/PC) 千亿级 TAM；ROIC 周期 5-25%', status: 'yellow' },
        { dim: '管理层资本配置', tenBagger: '0→$30B+ 跨代际', nebius: '廖增太团队 20 年执行力卓越；BC 收购、整体上市、福建/蓬莱布局都是经典案例', status: 'green' },
        { dim: '消费者品牌 / 心智', tenBagger: '直接 C 端品牌', nebius: '2B 大宗品无 C 端心智；行业内技术品牌强（"万华工艺"=自主可控代名词）', status: 'red' },
    ],

    weightedExpectation: {
        currentMcap: 2800,
        y5: {
            expectedMcap: 3686,
            multiplier: 1.32,
            cagr: 5.7,
        },
        y10: {
            expectedMcap: 6651,
            multiplier: 2.38,
            cagr: 9.1,
        },
        breakdown: [
            { scenario: 'A. 中国版 BASF 路径', prob: 15, y5Mid: 6500, y10Mid: 12500, y5Contrib: 975, y10Contrib: 1875 },
            { scenario: 'B. 周期均值回归', prob: 50, y5Mid: 4000, y10Mid: 7750, y5Contrib: 2000, y10Contrib: 3875 },
            { scenario: 'C. 地产下行 + MDI 过剩', prob: 28, y5Mid: 2150, y10Mid: 2700, y5Contrib: 602, y10Contrib: 756 },
            { scenario: 'D. 尾部 (事故 / 关税)', prob: 7, y5Mid: 1500, y10Mid: 2000, y5Contrib: 105, y10Contrib: 140 },
        ],
    },

    peerName: 'Covestro (整合前) / BASF',
    coreWeaveCompare: [
        { metric: '2025 营收', nbis: '¥2,032 亿', cwv: '€14.2B (~¥1,100 亿)', winner: 'nbis' },
        { metric: 'MDI 全球产能', nbis: '380 万吨 (33.8%)', cwv: '177 万吨 (16%)', winner: 'nbis' },
        { metric: '聚氨酯毛利率', nbis: '26.15% (2024)', cwv: '~12%', winner: 'nbis' },
        { metric: '全球份额趋势', nbis: '过去 10 年持续上升', cwv: '过去 10 年持续下滑', winner: 'nbis' },
        { metric: '海外营收占比', nbis: '47.4% (Q1\'26)', cwv: '本身就是全球公司 ~95%', winner: 'cwv' },
        { metric: '新材料布局', nbis: 'POE/LFP/尼龙 12/PC 全面', cwv: 'PC + 高性能聚氨酯', winner: 'nbis' },
        { metric: '净利率', nbis: '6.2% (2025)', cwv: '亏损或微利', winner: 'nbis' },
        { metric: '估值', nbis: 'PB 3.0x · PE 20.6x', cwv: 'ADNOC 私有化 PB 1.4x · EV/EBITDA 10x', winner: 'cwv' },
        { metric: '现金流', nbis: 'OCF ¥331 亿 (2025)', cwv: 'OCF €1.2B', winner: 'nbis' },
    ],

    analysts: [
        { firm: '一致预期 2026 EPS (~¥5.88)', target: 109, rating: 'Buy 综合' },
        { firm: 'Morgan Stanley', target: 105, rating: 'Overweight (基于 33.8% 全球份额)' },
        { firm: '东吴证券', target: 110, rating: '"全球聚氨酯龙头再启航"' },
        { firm: '中信证券 (估)', target: 102, rating: 'Buy' },
        { firm: '中金公司 (估)', target: 100, rating: '推荐' },
        { firm: '海通证券 (估)', target: 95, rating: '增持' },
    ],

    watchlist: [
        { indicator: 'MDI 国内挂牌价 (聚合 + 纯)', strongSignal: '聚合 ¥17k+ / 纯 ¥21k+', baseSignal: '聚合 ¥14-16k / 纯 ¥18-20k', weakSignal: '聚合 <¥13k / 纯 <¥17k 长期低迷' },
        { indicator: '聚氨酯板块毛利率', strongSignal: '>28%', baseSignal: '22-26%', weakSignal: '<18% 周期深底' },
        { indicator: '海外营收占比', strongSignal: '>55%', baseSignal: '45-50%', weakSignal: '<40% 退回内循环' },
        { indicator: '新材料板块营收占比', strongSignal: '>25%', baseSignal: '15-20%', weakSignal: '<12% 二曲线失败' },
        { indicator: 'CapEx / OCF', strongSignal: '<60% (FCF 释放)', baseSignal: '70-90%', weakSignal: '>100% (持续扩张烧钱)' },
    ],

    finalQuote:
        '万华化学的核心争议是：<strong>它是"中国版 BASF"还是"高级版 大化工周期股"？</strong>——前者是 PB 切换到 4-5x 对应 ¥4,000+ 亿市值的故事，后者是 PB 永远在 1.5-3x 区间震荡的现实。<strong>2026 Q1 +25.5% 营收 / +20.6% 归母</strong> 已经验证周期底部见拐；<strong>海外占比 47.4%</strong> 突破地产 β 是结构性变化；<strong>福建二期 2026 Q2 投产</strong> 让全球份额跃升至 37%。当前 ¥89.48 对应 PE TTM 20.6x、PB 3.0x（10Y 5% 分位），机构综合目标价 ¥109.30 隐含 +22% 空间。<strong>但要接受："周期 + 重资产 + 高 CapEx" 的天然属性意味着不会变成软件或消费白马</strong>。基础仓位 3-5%，<strong>福建二期投产 + MDI 价差扩张 + 新材料破 25% 营收占比</strong> 三条件兑现可加仓至 6-8%。',

    revenueChart: {
        labels: ['2021', '2022', '2023', '2024', '2025', '2026E', '2027E'],
        values: [1455, 1656, 1754, 1820, 2032, 2300, 2550],
        kinds: ['revenue', 'revenue', 'revenue', 'revenue', 'revenue', 'revenue', 'revenue'],
    },

    overview: {
        founded: '1978 (烟台合成革厂前身) · 1998 改制独立 · 2001 上交所上市',
        headquarters: '中国 · 山东烟台',
        incorporation: '中国 · 山东省 (国资 + 员工持股 + 战略投资者三角共治)',
        employees: '~28,000+ (含匈牙利 BC、墨西哥等海外基地)',
        listing: '上交所主板 · 600309 · 2001-01-05 IPO',
        history: [
            { year: '1978', event: '烟台合成革厂成立 (万华前身)', tag: '创立' },
            { year: '1995', event: '改制为现代企业制度国企 (山东首家)', tag: '改制' },
            { year: '1998', event: '剥离 MDI 优质资产成立股份公司', tag: '改制' },
            { year: '2001-01-05', event: 'A 股上市 600309', tag: 'IPO' },
            { year: '2007', event: '宁波 MDI 装置投产，规模化突破', tag: '里程碑' },
            { year: '2011', event: '€12.63 亿欧元完成对匈牙利 BorsodChem (BC) 收购', tag: '里程碑' },
            { year: '2018-08', event: '吸收合并母公司烟台万华化工，整体上市，BC 公司装入', tag: '改制' },
            { year: '2021', event: '业绩巅峰：营收 ¥1,455 亿 / 归母 ¥246 亿 / ROE 30%+', tag: '业绩' },
            { year: '2024', event: '蓬莱 PDH 一期投产；福建二期 / 烟台乙烯二期推进', tag: '产能' },
            { year: '2024-06', event: 'POE 一期 20 万吨投产，国内最早量产', tag: '新材料' },
            { year: '2025-02', event: '蓬莱电池材料产业园 ¥168 亿开工', tag: '新材料' },
            { year: '2025-07', event: '回购 927.5 万股全部注销 (耗资 ¥5 亿，均价 53.90 元)', tag: '资本' },
            { year: '2025-12', event: 'Covestro 被 ADNOC 完成 95.1% 收购私有化，万华成最大整合受益者', tag: '行业' },
            { year: '2026-04-21', event: '2025 年报 + 2026 Q1 同披露：Q1 营收 +25.5% / 归母 +20.6%，周期拐点', tag: '业绩' },
            { year: '2026 Q2', event: '福建二期 70 万吨 MDI 技改投产，全球产能 380→450 万吨', tag: '产能' },
            { year: '2026-04-29', event: '股价 ¥89.48 · 市值 ~¥2,801 亿', tag: '当前' },
        ],
        businessModel:
            '**"全产业链一体化 × 全球四基地 × 三板块协同"的大化工平台**：①**聚氨酯**：MDI 380 万吨 / TDI 147 万吨 / 聚醚多元醇 232 万吨——公司利润支柱（41% 营收 / 70% 毛利）；②**石化**：自烟台一体化园区起步，乙烯 120 万吨 + PDH 90 万吨 + PO/SAP/丙烯酸 多元化下游，2024 毛利仅 3.5% 因周期低位；③**精细化学品 & 新材料**：POE 60 万吨（国内最早量产）+ 尼龙 12 4 万吨（破赢创垄断）+ PC 60 万吨 + LFP 10 万吨（2026-06）+ 香精香料——"二次曲线"放量期。**全球四基地**：烟台（核心总部）+ 宁波（MDI 第一基地）+ 福建（80→150 万吨 MDI）+ 匈牙利 BC（欧洲 40 万吨 MDI）+ 墨西哥（北美配套）。**核心差异化**：是中国唯一在 MDI 万吨级装置上拥有自主工艺包的企业，工艺壁垒 + 成本优势支撑了"过去 10 年全球唯一上升龙头"的地位。',
        revenueMix: [
            { name: '聚氨酯 (MDI/TDI/聚醚)', pct: 42, note: '2024 ¥758 亿 (+12.55%) · 毛利 26.15%' },
            { name: '石化 (乙烯/PDH/PO/丙烯酸)', pct: 40, note: '2024 ¥725 亿 (+4.60%) · 毛利 3.52%' },
            { name: '精细化学品 & 新材料', pct: 16, note: '2024 ¥283 亿 (+18.61%) · 毛利 12.78%' },
            { name: '其他 (代加工/贸易)', pct: 2, note: '~¥40 亿' },
        ],
    },

    team: [
        {
            name: '廖增太',
            role: '董事长 · 总裁',
            background:
                '万华化学灵魂人物，技术派出身。30+ 年扎根万华，从工程师做起一路晋升至董事长 + 总裁双重职务（A 股化工龙头中罕见）。主导了 BC 公司收购、烟台 / 宁波 / 福建 / 蓬莱多基地布局、整体上市、新材料平台搭建。风格务实、强调长期主义，"先打通成本壁垒，再做大规模，最后做品牌"。',
            since: '1992 (加入万华) · 2016 任董事长',
            rating: 5,
        },
        {
            name: '寇光武',
            role: '副总裁 (新材料)',
            background:
                '负责新材料事业部 (POE / 尼龙 12 / PC / 锂电材料)，是公司"二次曲线"的核心执行人。',
            rating: 4,
        },
        {
            name: '华卫琦',
            role: '副总裁 (聚氨酯)',
            background:
                '负责聚氨酯主业、海外业务协调；BC 公司董事会代表。',
            rating: 4,
        },
        {
            name: '丁建生 (创始一代)',
            role: '前董事长 (已退休)',
            background:
                '万华化学第一代领导人，1990 年代主导从合成革厂改制独立，1998 年成立股份公司，2001 上市。技术派典范，奠定"工艺自主可控"文化基因。已退居二线但仍是文化奠基人。',
            rating: 5,
        },
        {
            name: '中诚投资 (员工持股平台)',
            role: '一致行动人 / 治理压舱石',
            background:
                '万华核心员工持股平台，与烟台国丰、宁波中凯信构成 41.72% 一致行动人。这是公司治理的"稳定器"——既有国资战略主导，又有市场化激励。',
            rating: 5,
        },
    ],

    shareholders: [
        { name: '烟台国丰投资控股集团', pct: '~21.59%', type: '控股股东 (国资)', note: '烟台市国资委 100% 持股' },
        { name: '中诚投资 (员工持股平台)', pct: '~14.87%', type: '一致行动人', note: '核心员工通过有限合伙持股' },
        { name: '宁波市中凯信创业投资', pct: '~5.26%', type: '一致行动人', note: '一致行动人合计 41.72%' },
        { name: 'Prime Partner (海外战略)', pct: '~3-5%', type: '海外战略投资者', note: '韩国 SKC 系，海外业务协同' },
        { name: '陆股通 (北上资金)', pct: '~7-9%', type: '外资', note: '过去 5 年持续增持' },
        { name: '社保基金 + 公募 + 险资', pct: '~12-15%', type: '机构', note: 'A 股化工白马标配' },
        { name: '公众流通股', pct: '~25-30%', type: '散户 + 私募', note: '日均成交 ~10-20 亿' },
    ],

    advantages: [
        {
            title: '全球唯一上升的 MDI 龙头 (壁垒 ★★★★★)',
            body: '过去 10 年全球 MDI 产能格局：万华 25%→33.8%，BASF 22%→19%，Covestro 19%→16%（已私有化）。万华是唯一份额持续上升的厂商。2026 Q2 福建二期投产后份额将进一步升至 37%+。',
            evidence: 'Morgan Stanley 测算；公司年报；福建二期投产时间表',
        },
        {
            title: '海外营收 47.4% 突破地产 β (规模 ★★★★★)',
            body: '2026 Q1 海外营收占比 47.4%，过去 5 年从 30% 升至接近 50%。匈牙利 BC + 墨西哥 + 出口三轨，欧洲 + 北美 + 东南亚多元化，对冲国内地产长周期下行。',
            evidence: '2026 Q1 报告；BC 公司欧洲份额持续提升',
        },
        {
            title: '工艺自主可控 + 成本壁垒 (护城河 ★★★★★)',
            body: 'MDI 全流程自主工艺包（不依赖巴斯夫 / Covestro 专利），万吨级装置 know-how + 一体化园区降低能耗 / 物流成本。万华吨 MDI 完全成本比海外低 1,500-2,500 元，这是"周期底部仍能盈利"的根本。',
            evidence: '行业咨询机构测算；公司多年披露毛利率领先全球同行',
        },
        {
            title: '新材料二曲线进入放量期 (期权 ★★★★)',
            body: 'POE 60 万吨 (国内最早) + 尼龙 12 4 万吨 (破赢创垄断) + LFP 10 万吨 (2026-06) + PC 60 万吨 + 香精香料。新材料 2024 ¥283 亿 +19% 高于聚氨酯 +12.5%，2030 有望破 800 亿。',
            evidence: '蓬莱新材料一体化基地 + 电池材料产业园投产计划',
        },
        {
            title: 'CapEx 即将见顶 · FCF 大释放 (现金流 ★★★★)',
            body: '2022-2025 累计 CapEx 800-1,000 亿。2026-2027 福建二期 + 烟台乙烯二期投产后 CapEx 会从 700-800 亿 / 年降至 400-500 亿 / 年，FCF 有望从 ~50 亿跳升至 200+ 亿。',
            evidence: '公司 IR 沟通；2025 年报披露的资本性支出计划',
        },
        {
            title: '资本配置稳健 · 国资 + 员工持股双轮 (治理 ★★★★)',
            body: '一致行动人 41.72% + 中诚投资员工持股 14.87% + 国资 21.59% 三角共治；2024 分红率 30.11% / 2025 年度回购 + 分红合计 ¥44.13 亿；廖增太 30+ 年技术派执行力。',
            evidence: '2025 年报；中诚投资员工持股平台稳定性',
        },
        {
            title: '估值历史底部双重底 (估值 ★★★★)',
            body: 'PB ~3.0x 处于过去 10 年的 5% 分位线（即 95% 时间高于此值）；价差指数处于历史 5.83% 分位。行业景气底 + 估值底 + Q1\'26 业绩拐点 三重底部信号同时出现。',
            evidence: '里昂金融估值数据；山东烟台行业测算',
        },
    ],

    disadvantages: [
        {
            title: '中国地产长周期下行 (国内需求 β)',
            body: '聚合 MDI 国内需求 52% 来自白电保温（冰箱 / 冷柜）+ 13% 来自建筑保温外墙。中国房地产长周期下行 + 家电饱和率 95%+ 的双重压制让国内 MDI 需求结构性下台阶。',
            evidence: '行业研报下游需求拆解；统计局家电保有量数据',
        },
        {
            title: '全球 MDI 产能过剩 (开工率 78%)',
            body: '2024 全球 MDI 产能 1,095 万吨 / 需求 850 万吨，开工率仅 78%。万华自身扩产至 450 万吨意味着对自己的边际价格也构成压力——典型反身性风险。',
            evidence: 'Mordor Intelligence 全球 MDI 报告',
        },
        {
            title: '石化板块重资产 + 周期低毛利 (3.52%)',
            body: '占营收 40% 的石化板块周期波动剧烈；2024 毛利率仅 3.52%，远低于行业历史均值 8-12%。乙烯产能投放 + 原油波动会持续压制盈利。',
            evidence: '2024 年报分部数据',
        },
        {
            title: '资产负债率 64.7% + CapEx 周期高位',
            body: '2024 资产负债率 +2.05pct 至 64.72%；总资产 +15.92% 至 ¥2,933 亿；在建工程 ~440 亿。若周期复苏不及预期，财务费用上升 + ROE 进一步下滑。',
            evidence: '2024 年报',
        },
        {
            title: 'ROE 从 30%+ 跌到 11.5% (盈利质量)',
            body: '加权 ROE 2021 30%+ → 2024 14.29% → 2025 估算 ~11.5%。"周期股估值切换"的故事需要 ROE 重回 18%+，这取决于 MDI 价差扩张 + 新材料利润率提升 双重前提。',
            evidence: '历年年报 ROE',
        },
        {
            title: '中欧 / 中美贸易摩擦风险',
            body: '海外占比 47% 的双刃剑：欧洲反倾销 + 美国关税升级 + 印度 BIS 认证延迟都直接影响海外营收。BC 公司虽在欧洲，但匈牙利能源价格波动 + 欧元 / 人民币汇率也是变量。',
            evidence: '近期欧洲 PVC 反倾销案；美国 IRA / 232 关税',
        },
        {
            title: '关键人风险 (廖增太接班机制)',
            body: '廖董领导的技术派 + 实业派团队是公司过去 20 年成功核心，公开信息中未见明确接班人安排。一旦廖董退休，战略连续性是公开存疑的。',
            evidence: '公开人事档案',
        },
    ],

    shortTermCatalysts: [
        {
            when: '2026 Q2 (2026-06)',
            event: '福建二期 70 万吨 MDI 技改投产 (产能 380→450 万吨)',
            impact: 'positive',
            probability: '~85%',
            magnitude: '+8-12%',
        },
        {
            when: '2026 Q3-Q4',
            event: 'MDI 国内挂牌价中枢上移至 16,500-18,000 (春检 + 海外检修)',
            impact: 'positive',
            probability: '~65%',
            magnitude: '+10-15%',
        },
        {
            when: '2026 H2',
            event: '蓬莱电池材料一期 LFP 10 万吨投产',
            impact: 'positive',
            probability: '~80%',
            magnitude: '+5-8%',
        },
        {
            when: '2026 全年',
            event: '中报 / 三季报验证 Q1 +25.5% 趋势是否延续',
            impact: 'mixed',
            probability: '已确认',
            magnitude: '±15-25%',
        },
        {
            when: '2026 H2',
            event: 'POE 二期 40 万吨爬产 + 尼龙 12 / PC 出口放量',
            impact: 'positive',
            probability: '~70%',
            magnitude: '+5-8%',
        },
        {
            when: '2027 H1',
            event: 'CapEx 见顶 + FCF 大幅释放，分红率有望从 30% 提升至 35-40%',
            impact: 'positive',
            probability: '~60%',
            magnitude: '+8-12%',
        },
        {
            when: '任何时点',
            event: 'Covestro (ADNOC 整合) / BASF 关闭欧洲产能 → 万华出口替代',
            impact: 'positive',
            probability: '~30% / 年',
            magnitude: '+10-20%',
        },
        {
            when: '任何时点',
            event: '欧洲 PVC / MDI 反倾销裁定不利 / 美国关税加征',
            impact: 'negative',
            probability: '~20% / 年',
            magnitude: '-10-18%',
        },
        {
            when: '任何时点',
            event: '烟台 / 宁波 / 福建装置重大安全或环保事件',
            impact: 'negative',
            probability: '~5% / 年',
            magnitude: '-15-25%',
        },
        {
            when: '任何时点',
            event: '原油剧烈波动 → 石化板块利润大幅波动',
            impact: 'mixed',
            probability: '~50%',
            magnitude: '±10-15%',
        },
    ],

    longTermDrivers: [
        {
            name: '全球 MDI 寡头进一步集中 (Covestro 整合期)',
            horizon: '2026-2032',
            body: 'Covestro 已被 ADNOC 私有化，整合期 (3-5 年) 不可避免会出现欧洲产能减产或关停；BASF 化工部门长期亏损也在战略评估关闭欧洲老旧产能；万华是唯一具备同步扩张 + 成本优势 + 客户关系的承接者，份额从 33.8% 升至 40%+ 是合理路径。',
            enabling: '全球 MDI CR5 89% + 万华成本壁垒 + Covestro 整合期 + 福建/宁波/印度新产能',
        },
        {
            name: '新材料 (POE/LFP/尼龙12/PC) 平台化',
            horizon: '2026-2032',
            body: '当前新材料板块 ¥283 亿 / 16% 营收占比；目标 2030 年 ¥800-1,000 亿 / 25-30% 营收占比。POE 受光伏胶膜 + 高端聚烯烃驱动 (TAM ¥600 亿+)；LFP 受新能源车 + 储能 (TAM ¥500 亿+)；尼龙 12 / PC / 香精香料各有 ¥100-200 亿 TAM。',
            enabling: '万华工艺研发能力 + 多品种联产成本优势 + 烟台 / 蓬莱基地协同',
        },
        {
            name: '海外占比从 47% → 60%+',
            horizon: '2026-2030',
            body: '匈牙利 BC 欧洲份额提升 (Brexit 后欧洲制造业回流) + 墨西哥北美配套 + 出口替代欧美减产产能。"全球本地化生产"对冲贸易摩擦。',
            enabling: 'BC 公司既有欧洲基地 + 墨西哥项目 + 印度可能新基地',
        },
        {
            name: '中国版 BASF 估值切换',
            horizon: '2027-2032',
            body: '若 ROE 回到 18-20%、新材料破 25% 营收、海外占比 >55%，估值有望从 PE 12-15x 切换到 20-25x，PB 从 3.0x 切换到 4-5x。这是从"周期股"到"周期成长股"再到"白马平台股"的三段路径。',
            enabling: '行业地位 + 新材料兑现 + 投资者教育',
        },
        {
            name: 'CapEx 见顶 + FCF 释放 + 股东回报提升',
            horizon: '2026-2030',
            body: '2027 后 CapEx 大幅放缓 → FCF 从 50 亿跳升至 200-300 亿 / 年。叠加分红率从 30% 升至 40%、回购常态化，年度股东回报有望从 ¥44 亿升至 ¥100+ 亿。',
            enabling: '主项目集中投产期结束 + 国资分红考核要求',
        },
        {
            name: '聚氨酯下游一体化 (Pyride 路径)',
            horizon: '2027-2033',
            body: '从 MDI 上游往下游一体化延伸：硬泡保温板 / 软泡 / 弹性体 / 鞋材，对标 BASF 的"基础化学 → 高端材料 → 终端产品"路径。万华已有香精香料、TPU 试水。',
            enabling: '客户关系 + 工艺协同 + 中国制造业基础',
        },
    ],

    riskMatrix: [
        {
            category: '需求 / 周期风险',
            level: 'critical',
            summary: '中国地产长周期 + 全球 MDI 产能过剩双重压制',
            items: [
                {
                    name: '中国房地产长周期下行',
                    body: '聚合 MDI 国内需求 52% 白电 + 13% 建筑，房地产长周期下行 + 家电饱和率 95%+ → 国内需求结构性下台阶 (5-8 年衰减期)。',
                    mitigation: '海外占比已升至 47%；白电出口 + 新能源车保温替代部分 + 新材料分散风险',
                },
                {
                    name: '全球 MDI 产能过剩 (开工率 78%)',
                    body: '2024 全球产能 1,095 万吨 / 需求 850 万吨。万华自身扩产推高全球供给，对自家边际价格构成压力 (反身性)。',
                    mitigation: '成本曲线优势 + 海外检修 / 关停 + Covestro 整合期减产',
                },
                {
                    name: 'MDI 价差长期低位',
                    body: '若 MDI 国内挂牌价长期 ¥10-12k (vs 当前 ¥14-15k)，毛利率从 26% 跌至 15%，归母腰斩。',
                    mitigation: '一体化成本 + 出口溢价 + 新材料贡献',
                },
            ],
        },
        {
            category: '财务 / 资本结构',
            level: 'high',
            summary: 'CapEx 周期高位 + 资产负债率 64.7%',
            items: [
                {
                    name: '资产负债率 64.72% (上行 2pct)',
                    body: '2024 末资产负债率上升 2.05pct，主要因为蓬莱 + 福建二期 + 烟台乙烯重资产投入。若 2026-2027 业绩复苏不及预期，财务费用上升将进一步侵蚀利润。',
                    mitigation: '2026-2027 主项目投产后 CapEx 放缓 + FCF 释放 + 财务费用回落',
                },
                {
                    name: 'ROE 从 30%+ 跌到 11.5%',
                    body: '估值切换需要 ROE 重回 18%+；若 ROE 长期低于 15%，PB 切换故事破灭，估值压回 PB 1.5-2x = ¥1,400-1,900 亿市值。',
                    mitigation: 'MDI 价差扩张 + 新材料利润率提升 + 资本周转效率',
                },
            ],
        },
        {
            category: '地缘 / 贸易风险',
            level: 'high',
            summary: '海外占比 47% 的双刃剑',
            items: [
                {
                    name: '欧洲反倾销 / 美国关税',
                    body: '欧洲历史上对中国 PVC / TDI 有反倾销裁定；美国 IRA + 232 关税持续加征化工品。万华 BC 公司虽在欧洲生产，但中国出口 + 墨西哥出口都暴露在关税风险中。',
                    mitigation: 'BC 公司本地化 + 墨西哥布局 + 多市场分散',
                },
                {
                    name: 'BC 公司欧洲能源成本',
                    body: '匈牙利电力 / 天然气价格波动，俄乌冲突期 BC 利润受冲击；当前已经稳定但仍有政策不确定。',
                    mitigation: 'BC 自有电厂 + 长期供气合同',
                },
                {
                    name: '人民币 / 欧元汇率',
                    body: '海外营收 47% 大部分以欧元 / 美元结算，人民币长期升值会压制利润。',
                    mitigation: '本地化生产 + 自然对冲',
                },
            ],
        },
        {
            category: '运营 / 安全风险',
            level: 'high',
            summary: '化工大装置安全 + 环保',
            items: [
                {
                    name: '装置重大安全事故',
                    body: '万华历史管理较好但化工业内事故仍是常态化风险；一次重大事故 (烟台 / 宁波 / 福建) 会导致装置停产 3-12 个月 + 监管处罚 + 估值压制。',
                    mitigation: 'HSE 体系 (国际化标准) + 多基地分散',
                },
                {
                    name: '环保突袭与中央政策',
                    body: '中国环保政策迭代快，化工龙头是常态化检查对象；任何超标事件都会引发停产整顿 + 媒体冲击。',
                    mitigation: '环保投入 + 一体化园区设计 + 政府关系',
                },
            ],
        },
        {
            category: '新材料兑现风险',
            level: 'medium',
            summary: '二曲线放量速度不及预期',
            items: [
                {
                    name: 'POE / 尼龙 12 / LFP 价格战',
                    body: 'POE 国内已有 7-8 家厂商规划，2027 年可能价格战；LFP 已是红海，万华 10 万吨在国内排名 10+ 之外；价格战会压缩新材料毛利率。',
                    mitigation: '一体化成本 + 多品种联产 + 客户切换成本',
                },
                {
                    name: '尼龙 12 市场容量有限',
                    body: '全球尼龙 12 市场 ~10 万吨/年，万华 4 万吨已占 40%；继续扩产空间有限。',
                    mitigation: '高端聚酰胺平台延伸 (尼龙 6 / 66 / 11)',
                },
            ],
        },
        {
            category: '治理 / 关键人',
            level: 'medium',
            summary: '廖增太接班机制不透明',
            items: [
                {
                    name: '廖董退休 / 接班',
                    body: '廖董领导团队是过去 20 年成功核心；接班人安排公开信息有限，一旦突发离任战略连续性存疑。',
                    mitigation: '中诚投资员工持股长期绑定核心团队 + 国资治理框架',
                },
                {
                    name: '国资 + 员工 + 外资三方协调',
                    body: '虽然过去 20 年协调良好，但若任一方诉求变化（如国资分红考核加码 / 员工持股二次激励 / Prime Partner 退出）会引发战略波动。',
                    mitigation: '一致行动人协议长期稳定',
                },
            ],
        },
        {
            category: 'ESG / 监管',
            level: 'low',
            summary: '碳排 + 化学品安全',
            items: [
                {
                    name: '碳关税 (CBAM)',
                    body: '欧盟 CBAM 2026-2034 逐步实施，对中国出口化工品征收碳税；万华聚氨酯 + 部分石化品在影响清单。',
                    mitigation: 'BC 公司本地生产 + 自有电厂减碳 + 碳交易布局',
                },
                {
                    name: 'REACH / TSCA 化学品监管',
                    body: '欧美对部分化学品 (双酚 A / 异氰酸酯) 长期审查，未来可能限制使用。',
                    mitigation: '替代产品研发 + 多元化产品组合',
                },
            ],
        },
    ],

    profitability: {
        narrative:
            '万华化学是**"周期重资产 × 工艺壁垒 × 一体化成本"的大化工平台**。**核心特征**：盈利与 MDI 价差 + 油价 + 全球需求三重周期高度相关；2021 巅峰 ROE 30%+，2024 跌至 14.29%，当前位于历史 5-10 分位。**关键观察**：① MDI 价差拐点 (Q1\'26 已现)；② 新材料板块毛利率从 12.78% 提升至 18%+；③ 石化板块毛利率从 3.52% 回归 8-10%。',

        incomeStatement: [
            {
                year: '2021',
                revenue: '¥1,455 亿',
                revenueNum: 14550,
                grossMargin: '24%',
                opIncome: '¥280 亿',
                ebitda: '¥350 亿',
                ebitdaMargin: '24%',
                netIncome: '¥246 亿',
                eps: '7.83',
                status: 'actual',
            },
            {
                year: '2022',
                revenue: '¥1,656 亿',
                revenueNum: 16560,
                grossMargin: '17%',
                opIncome: '¥190 亿',
                ebitda: '¥260 亿',
                ebitdaMargin: '16%',
                netIncome: '¥162 亿',
                eps: '5.16',
                status: 'actual',
            },
            {
                year: '2023',
                revenue: '¥1,754 亿',
                revenueNum: 17540,
                grossMargin: '16%',
                opIncome: '¥200 亿',
                ebitda: '¥280 亿',
                ebitdaMargin: '16%',
                netIncome: '¥168 亿',
                eps: '5.35',
                status: 'actual',
            },
            {
                year: '2024',
                revenue: '¥1,820.69 亿',
                revenueNum: 18207,
                grossMargin: '14%',
                opIncome: '¥165 亿',
                ebitda: '¥260 亿',
                ebitdaMargin: '14%',
                netIncome: '¥130.33 亿',
                eps: '4.15',
                status: 'actual',
            },
            {
                year: '2025',
                revenue: '¥2,032.35 亿',
                revenueNum: 20324,
                grossMargin: '14%',
                opIncome: '¥160 亿',
                ebitda: '¥270 亿',
                ebitdaMargin: '13%',
                netIncome: '¥125.27 亿',
                eps: '3.99',
                status: 'actual',
            },
            {
                year: '2026E',
                revenue: '¥2,300 亿 (+13%)',
                revenueNum: 23000,
                grossMargin: '17%',
                opIncome: '¥220 亿',
                ebitda: '¥340 亿',
                ebitdaMargin: '15%',
                netIncome: '¥184 亿',
                eps: '5.88',
                status: 'guidance',
            },
            {
                year: '2027E',
                revenue: '¥2,550 亿 (+11%)',
                revenueNum: 25500,
                grossMargin: '19%',
                opIncome: '¥270 亿',
                ebitda: '¥400 亿',
                ebitdaMargin: '16%',
                netIncome: '¥223 亿',
                eps: '7.13',
                status: 'estimate',
            },
        ],

        marginEvolution: [
            { year: '2021', gross: 24, ebitda: 24, operating: 19, net: 17, status: 'actual' },
            { year: '2022', gross: 17, ebitda: 16, operating: 11, net: 9.8, status: 'actual' },
            { year: '2023', gross: 16, ebitda: 16, operating: 11, net: 9.6, status: 'actual' },
            { year: '2024', gross: 14, ebitda: 14, operating: 9, net: 7.2, status: 'actual' },
            { year: '2025', gross: 14, ebitda: 13, operating: 8, net: 6.2, status: 'actual' },
            { year: '2026E', gross: 17, ebitda: 15, operating: 9.5, net: 8.0, status: 'guidance' },
            { year: '2027E', gross: 19, ebitda: 16, operating: 10.6, net: 8.7, status: 'estimate' },
        ],

        milestones: [
            { year: '2001', milestone: '上交所上市', hit: true },
            { year: '2011', milestone: '收购匈牙利 BC 公司 (€12.63 亿)', hit: true },
            { year: '2018', milestone: '整体上市', hit: true },
            { year: '2021', milestone: '营收破 1,400 亿 / ROE 30%+ (历史峰值)', hit: true },
            { year: '2024', milestone: 'POE 国内最早量产', hit: true },
            { year: '2025', milestone: '营收首破 2,000 亿', hit: true },
            { year: '2026 Q2', milestone: '福建二期 70 万吨 MDI 投产 (产能 380→450)', hit: false, note: '关键里程碑' },
            { year: '2026-06', milestone: '蓬莱电池材料一期 LFP 10 万吨投产', hit: false },
            { year: '2027', milestone: 'CapEx 见顶 / FCF 大释放', hit: false, note: '估值切换关键' },
            { year: '2028-2030', milestone: '新材料板块占比破 25%', hit: false, note: '中国版 BASF 路径验证' },
        ],

        unitEconomics: [
            { metric: '2025 总营收', value: '¥2,032.35 亿', source: '2025 年报' },
            { metric: 'EPS (2025)', value: '3.99 元', source: '2025 年报' },
            { metric: '聚氨酯毛利率 (2024)', value: '26.15%', source: '2024 年报分部' },
            { metric: '石化毛利率 (2024)', value: '3.52%', source: '2024 年报分部' },
            { metric: '新材料毛利率 (2024)', value: '12.78%', source: '2024 年报分部' },
            { metric: 'MDI 全球产能 (2025末)', value: '380 万吨/年 · 33.8%', source: 'Morgan Stanley 测算' },
            { metric: 'MDI 全球产能 (2026 Q2)', value: '450 万吨/年', source: '福建二期投产计划' },
            { metric: '2025 OCF', value: '¥331.05 亿', source: '2025 年报' },
        ],

        fcfPath:
            '2024-2025 OCF ¥300-330 亿 / CapEx ¥700-800 亿 → FCF 短期为负到 ~¥50 亿正 (2025)。**关键拐点**：2026-2027 福建 + 烟台乙烯 + 蓬莱主项目陆续投产后 CapEx 大幅放缓至 ¥400-500 亿 / 年，FCF 有望跳升至 **¥200-300 亿 / 年**。叠加 ROE 回到 15-18%，公司将进入"重资产投入期 → 现金奶牛期"切换。',

        keyRisks: [
            'MDI 价差长期低位 (聚合 <¥12k) 会让 ROE 长期 <12%，估值切换故事破灭',
            '石化板块毛利率长期 <5% 拖累整体盈利',
            '新材料价格战 (POE / LFP) 让二曲线毛利率压缩至 8-10%',
            '资产负债率超 70% 会触发分红能力下降 + 信用评级下调',
        ],
    },

    competitiveLandscape: {
        summary:
            '全球 MDI 是 CR5 89% 的高度寡头格局：万华 33.8% / BASF 19% / Covestro 16% (已私有化) / Huntsman 13% / Dow 10%。**结构性变化**：①Covestro 被 ADNOC/XRG 收购进入整合期，市场份额可能流失；②BASF 化工部门长期亏损，欧洲产能有关停可能；③万华是过去 10 年唯一持续上升的厂家，2026 Q2 福建二期投产后份额跃升至 37%。**真正的 10 倍对手**是"中国版 BASF"——综合化工平台 + 新材料平台 + 全球本地化的三位一体。',

        competitors: [
            {
                name: '万华化学 (自身)',
                type: 'specialist',
                ticker: 'SH:600309',
                revenue2026E: '¥2,300 亿',
                aiRevenue: '¥230B',
                gpuFleet: 'MDI 380→450 万吨 · 全球四基地',
                backlog: '福建二期 + 蓬莱基地 + LFP 10 万吨',
                ebitdaMargin: '~15%',
                marketCap: '¥2,801 亿',
                nvidiaLevel: 5,
                threat: 'low',
                strength: '工艺自主 · 成本壁垒 · 海外 47% · 新材料平台 · 廖董团队',
                weakness: 'ROE 11.5% · 资产负债率 64.7% · 地产 β 仍存',
            },
            {
                name: 'BASF',
                type: 'hyperscaler',
                ticker: 'XETR:BAS',
                revenue2026E: '€68B',
                aiRevenue: '$70B+',
                gpuFleet: 'MDI 207 万吨 · 全球综合化工',
                backlog: 'Verbund 一体化平台 · 高端材料',
                ebitdaMargin: '~10%',
                marketCap: '~€42B',
                nvidiaLevel: 5,
                threat: 'medium',
                strength: '全球第一综合化工 · 100+ 年品牌 · 全产业链',
                weakness: '化工部门长期亏损 · 欧洲能源成本 · MDI 份额下滑',
            },
            {
                name: 'Covestro (XRG/ADNOC 私有化)',
                type: 'specialist',
                ticker: '已私有化',
                revenue2026E: '€14B',
                aiRevenue: '$15B',
                gpuFleet: 'MDI 177 万吨 · PC 龙头',
                backlog: 'ADNOC 整合期 · 欧洲产能优化',
                ebitdaMargin: '~8%',
                marketCap: '€16B (收购价)',
                nvidiaLevel: 4,
                threat: 'medium',
                strength: 'PC + MDI 双龙头 · ADNOC 资本支持',
                weakness: '整合期不确定 · 欧洲老旧产能 · 份额持续下滑',
            },
            {
                name: 'Huntsman',
                type: 'specialist',
                ticker: 'NYSE:HUN',
                revenue2026E: '$6.0B',
                aiRevenue: '$6B',
                gpuFleet: 'MDI 137 万吨 · 美国主导',
                backlog: '高性能弹性体 + 高端聚氨酯',
                ebitdaMargin: '~7%',
                marketCap: '~$3B',
                nvidiaLevel: 3,
                threat: 'low',
                strength: '美国制造业回流 · IRA 受益 · 客户关系深',
                weakness: '盈利波动大 · 市值缩水 50%+ (2021→2026)',
            },
            {
                name: 'Dow',
                type: 'hyperscaler',
                ticker: 'NYSE:DOW',
                revenue2026E: '$45B',
                aiRevenue: '$45B',
                gpuFleet: 'MDI 111 万吨 · 全产业链',
                backlog: '硅材料 + 聚氨酯 + 包装',
                ebitdaMargin: '~12%',
                marketCap: '~$28B',
                nvidiaLevel: 3,
                threat: 'low',
                strength: '美国本土 + 北美天然气优势 · 产业链宽',
                weakness: 'MDI 业务非核心 · 增长有限',
            },
            {
                name: 'Mitsui Chemicals',
                type: 'specialist',
                ticker: 'TSE:4183',
                revenue2026E: 'JPY 2.1T',
                aiRevenue: '~$14B',
                gpuFleet: 'MDI 71 万吨 · 日本',
                backlog: '本田 / 丰田汽车配套 + 高端聚氨酯',
                ebitdaMargin: '~10%',
                marketCap: 'JPY 1.0T',
                nvidiaLevel: 3,
                threat: 'low',
                strength: '日本汽车产业链绑定 + 高端材料',
                weakness: '规模小 · 日本本土需求衰退',
            },
            {
                name: '中国其他化工 (恒力 / 荣盛 / 卫星)',
                type: 'specialist',
                ticker: 'A 股多家',
                revenue2026E: '¥1,500-2,500 亿/家',
                aiRevenue: '~$200B',
                gpuFleet: '炼化一体化 + PTA / 烯烃',
                backlog: '炼化 / PE / PP 扩产',
                ebitdaMargin: '~10%',
                marketCap: '¥1,000-3,000 亿',
                nvidiaLevel: 3,
                threat: 'low',
                strength: '原油 → 烯烃 一体化 · 大宗品规模',
                weakness: '产品同质化 · 无 MDI / 高端聚氨酯能力',
            },
            {
                name: 'SK Geocentric (韩国)',
                type: 'specialist',
                ticker: '未上市',
                revenue2026E: 'KRW 13T',
                aiRevenue: '$10B',
                gpuFleet: 'MDI 25 万吨 · 韩国',
                backlog: '高端聚氨酯',
                ebitdaMargin: '~8%',
                marketCap: 'N/A',
                nvidiaLevel: 2,
                threat: 'low',
                strength: '韩国汽车产业链 + 锦湖石化协同',
                weakness: '规模过小 · 仅韩国市场',
            },
        ],

        positioning: [
            { dimension: 'MDI 全球产能', nebius: '380 万吨 (33.8%)', industryAvg: '120-150 万吨', leader: '万华 (自己)', nebiusStrong: true },
            { dimension: '聚氨酯毛利率', nebius: '26.15%', industryAvg: '8-15%', leader: '万华', nebiusStrong: true },
            { dimension: '工艺自主性', nebius: '全流程自主 + BC 公司双备份', industryAvg: '依赖授权', leader: '万华 / BASF / Covestro', nebiusStrong: true },
            { dimension: '海外营收占比', nebius: '47.4%', industryAvg: '本土厂商 30% / 国际厂商 90%+', leader: 'BASF 90%', nebiusStrong: false },
            { dimension: '新材料布局', nebius: 'POE/LFP/尼龙12/PC 全面', industryAvg: '单点布局', leader: 'BASF / 万华', nebiusStrong: true },
            { dimension: '资本配置 (ROIIC)', nebius: '15-25%', industryAvg: '5-10%', leader: '万华', nebiusStrong: true },
            { dimension: '资产负债率', nebius: '64.7%', industryAvg: '50-65%', leader: 'Mitsui 50%', nebiusStrong: false },
            { dimension: '股息 + 回购年度回报', nebius: '¥44.13 亿 (2025)', industryAvg: '本土同行少分红', leader: '万华', nebiusStrong: true },
            { dimension: '估值 (PB)', nebius: '3.0x', industryAvg: 'BASF 1.0x / Covestro 1.4x', leader: 'BASF 最便宜', nebiusStrong: false },
            { dimension: '市值', nebius: '¥2,801 亿', industryAvg: 'BASF €42B (¥3,300 亿)', leader: 'BASF', nebiusStrong: false },
        ],

        marketShare2026: [
            { name: '万华化学', pct: 34 },
            { name: 'BASF', pct: 19 },
            { name: 'Covestro (XRG)', pct: 16 },
            { name: 'Huntsman', pct: 13 },
            { name: 'Dow', pct: 10 },
            { name: 'Mitsui Chemicals', pct: 7 },
            { name: '其他 (SK / Tosoh / 等)', pct: 1 },
        ],

        winLoss: [
            {
                scenario: '中国 MDI 市场',
                winners: '万华 (绝对龙头 ~70%)',
                losers: 'BASF / Covestro (份额持续下滑)',
                reasoning: '中国市场万华成本 + 渠道优势压倒进口；2026 Q1 海外占比 47% 显示出口能力',
            },
            {
                scenario: '欧洲 MDI 市场',
                winners: 'BC 公司 (万华子公司) + BASF',
                losers: 'Covestro 整合期可能减产',
                reasoning: 'BC 在匈牙利本地化生产对冲了关税；ADNOC 整合期创造份额机会',
            },
            {
                scenario: '北美 MDI 市场',
                winners: 'Huntsman + Dow + 万华墨西哥',
                losers: '亚洲出口受关税限制',
                reasoning: '美国 IRA + 关税保护本土供应商；万华墨西哥基地是 USMCA 框架内的本地化方案',
            },
            {
                scenario: 'MDI 高端 (光学 / 高纯)',
                winners: 'BASF / Covestro / 万华 (新进入)',
                losers: '其他厂商缺乏技术',
                reasoning: '高纯 MDI 用于光学、医疗、电子级，万华正在追赶但仍非主导',
            },
            {
                scenario: 'POE 全球市场',
                winners: 'Dow (杜邦后) · ExxonMobil · 万华 (新进入)',
                losers: '其他厂商技术壁垒高',
                reasoning: 'POE 主要供应商是美企；万华是国内首批量产，但全球份额仍小',
            },
            {
                scenario: 'LFP 锂电正极',
                winners: '湖南裕能 + 德方纳米 + 富临精工',
                losers: '万华 (后来者)',
                reasoning: 'LFP 已是红海，万华 10 万吨规模在 TOP 10 之外',
            },
            {
                scenario: '尼龙 12 高端聚酰胺',
                winners: '万华 + 赢创 + Arkema',
                losers: '其他厂商无技术',
                reasoning: '万华破赢创垄断进入第二梯队',
            },
            {
                scenario: '高端聚氨酯应用 (汽车 / 建筑保温)',
                winners: 'BASF · Covestro · 万华 (追赶)',
                losers: '低端聚氨酯厂商',
                reasoning: '高端配方 + 客户认证壁垒高，万华持续投入但仍在追赶 BASF',
            },
        ],

        structuralTrend:
            '未来 3 年行业结构性变化：①**Covestro 整合期 (2026-2028)** 给万华提供 5pp 份额增长窗口；②**BASF 欧洲产能可能关停**——化工部门长期亏损 + 能源成本压力，2027-2030 是关键观察期；③**新材料从"高毛利专精"转向"价格战"**——POE / LFP / PC 国内厂商扩产潮；④**碳关税 (CBAM)** 改变全球化工流通格局，万华 BC 公司 + 墨西哥本地化是重要对冲。**关键命题**：万华能否在"MDI 守 + 新材料攻"的双战线同时赢下，决定它是停在"全球 MDI 龙头" (¥3,000 亿) 还是切换到"中国版 BASF" (¥6,000+ 亿)。',

        tam: {
            narrative:
                '全球 MDI 市场 2025 ~$25B (~862 万吨)，2031 预计 $35B (~1,164 万吨)，CAGR 5.13%。万华当前 33.8% 市占，2030 目标 38-40% 对应 ¥1,400 亿 MDI 营收。叠加 TDI、聚醚、石化、新材料，公司 2030 年营收路径 ¥3,500 亿是合理（CAGR ~12%），按 PE 18-20x 对应 ¥6,000+ 亿市值。但要实现需要：①Covestro 整合期份额转移；②新材料破 25% 营收；③海外占比 60%+。',
            points: [
                { year: '2021', totalTam: 22, neocloudTam: 8, selfRevenue: 200, status: 'actual' },
                { year: '2024', totalTam: 23, neocloudTam: 8.5, selfRevenue: 250, status: 'actual' },
                { year: '2025', totalTam: 25, neocloudTam: 9, selfRevenue: 280, status: 'actual' },
                { year: '2026', totalTam: 27, neocloudTam: 10, selfRevenue: 315, status: 'estimate' },
                { year: '2028', totalTam: 30, neocloudTam: 12, selfRevenue: 400, status: 'estimate' },
                { year: '2030', totalTam: 33, neocloudTam: 14, selfRevenue: 480, status: 'estimate' },
                { year: '2035', totalTam: 42, neocloudTam: 18, selfRevenue: 700, status: 'estimate' },
            ],
            keyNumbers: [
                { label: '全球 MDI 市场 (2025)', value: '$25B', sub: '862 万吨', cls: 'cyan' },
                { label: 'MDI 子赛道 CAGR', value: '5.13%', sub: '2025-2031', cls: 'purple' },
                { label: '万华 MDI 全球份额', value: '33.8%', sub: '2025末 · 全球第一', cls: 'green' },
                { label: '2026 Q2 后份额', value: '~37%', sub: '450 万吨/年', cls: 'green' },
                { label: '万华全球聚氨酯营收', value: '$10.4B', sub: '2025 · 含 TDI/聚醚', cls: 'purple' },
                { label: '新材料 TAM (POE/LFP/PC)', value: '$50B+', sub: '光伏 + 储能 + 高端', cls: 'cyan' },
                { label: '10x 路径所需', value: '¥3,500 亿营收 + ROE 20%', sub: '2030-2032', cls: 'red' },
                { label: '海外营收占比 (Q1\'26)', value: '47.4%', sub: '已突破地产 β', cls: 'green' },
            ],
            sourcesNote:
                '数据来源：Mordor Intelligence 全球 MDI 市场报告 + Morgan Stanley 万华深度报告 + 公司年报。2028-2035 推演基于"Covestro 整合期 + 新材料平台化 + 全球 MDI 寡头继续集中"。万华营收单位统一为亿元 (¥)。',
        },

        radar: {
            peer1Name: 'BASF',
            peer2Name: 'Covestro',
            dimensions: [
                { dim: '产能规模', self: 10, peer1: 6, peer2: 5 },
                { dim: '聚氨酯毛利率', self: 9, peer1: 4, peer2: 5 },
                { dim: '工艺自主性', self: 9, peer1: 9, peer2: 8 },
                { dim: '全球本地化', self: 7, peer1: 10, peer2: 9 },
                { dim: '新材料宽度', self: 8, peer1: 10, peer2: 7 },
                { dim: '资本配置', self: 9, peer1: 5, peer2: 6 },
                { dim: '股东回报', self: 8, peer1: 6, peer2: 4 },
                { dim: '增长性', self: 9, peer1: 4, peer2: 3 },
            ],
            note: '1-10 分主观评分。万华在"产能规模、毛利率、资本配置、增长性"四个维度全面领先 BASF / Covestro，形状向右倾斜；唯一短板是"全球本地化"（BASF 是真全球公司，万华仍主要中国生产）和"新材料宽度"（BASF 平台更广）。Covestro 2025 已被 ADNOC 私有化，整合期中是万华最大份额对手。',
        },
    },

    valuation: {
        metrics: [
            { metric: 'PE (TTM)', value: '20.59x', benchmark: '5Y 分位 87% (周期底特征)', read: 'fair' },
            { metric: 'Forward PE (2026E EPS 5.88)', value: '15.2x', benchmark: '化工龙头中位 12-18x', read: 'fair' },
            { metric: 'Forward PE (2027E EPS 7.13)', value: '12.5x', benchmark: 'BASF 12x · Covestro 15x', read: 'cheap' },
            { metric: 'PB', value: '~3.0x', benchmark: '过去 10 年的 5% 分位 · BASF 1.0x', read: 'cheap' },
            { metric: 'EV/EBITDA (2025)', value: '~12x', benchmark: '化工龙头 8-12x', read: 'fair' },
            { metric: '股息率 (2025)', value: '~1.4%', benchmark: 'A 股化工白马 1-3%', read: 'fair' },
            { metric: 'PEG (2026E +47% 净利)', value: '~0.32', benchmark: '<1 视为便宜', read: 'cheap' },
        ],
        sotp: [
            { item: '聚氨酯主业 (2026E 营收 ¥900 亿)', valuation: '¥1,800-2,200 亿', method: '15-18x 2026E 净利 ¥120 亿', note: '全球龙头溢价' },
            { item: '石化板块 (周期低迷)', valuation: '¥400-500 亿', method: '8-10x 2026E 净利 ¥45 亿', note: '低 PE 反映周期性' },
            { item: '新材料 + 精细化学品 (高增长)', valuation: '¥800-1,200 亿', method: '20-25x 2026E 净利 ¥40 亿', note: 'POE/LFP/尼龙 12 增速溢价' },
            { item: 'BC 公司 (匈牙利欧洲基地)', valuation: '¥300-450 亿', method: '12x 2026E 净利 ¥30 亿', note: '欧洲份额提升期权' },
            { item: 'CapEx 见顶 + FCF 释放期权', valuation: '¥200-400 亿', method: '隐含 2027 后股东回报上修', note: '类似 BASF 现金奶牛模式' },
            { item: '现金净额 + 投资组合', valuation: '¥150-200 亿', method: '账面值', note: '资产负债率 64.7% 不算干净' },
        ],
        sotpTotal: '¥3,650-4,950 亿',
        sotpPerShare: '对应合理区间 ¥117-158 (当前 ¥89.48 位于区间下沿 -23% 至 -43%)',
    },

    recommendation: {
        rating: '持有 / 分批建仓 (周期底部 + 新材料期权)',
        ratingCls: 'neutral',
        timeHorizon: '3-5 年（10 年视角下的中期节奏）',
        positionSize: '3-5% 组合权重 (核心持仓上限 6-8%)',
        addingZone: '¥75-85 (PB 2.5-2.8x 历史 2-3% 分位 + 周期底部支撑)',
        stopLoss: 'MDI 价差长期低于 ¥10k / 福建二期投产延期 6 月+ / ROE 跌破 8% / 装置重大事故 → 重新评估',
        thesis:
            '当前 ¥89.48 / 市值 ¥2,801 亿，**5Y 期望 1.32x (CAGR 5.7% 不含分红)、10Y 期望 2.38x (CAGR 9.1%)**。看多核心：①**全球 MDI 唯一上升龙头 33.8%** + 福建二期 2026 Q2 投产；②**Q1\'26 营收 +25.5% / 归母 +20.6%** 周期拐点；③**海外占比 47%** 突破地产 β；④**新材料二曲线 (POE/LFP/尼龙12)** 进入放量期；⑤**估值 PB 10Y 5% 分位 + PE 周期底部分位**。看空核心：①中国地产长周期下行 + 全球 MDI 产能过剩；②ROE 11.5% 远离 30%+ 巅峰；③资产负债率 64.7%；④石化板块毛利仅 3.52%。**这不是 10x 股**，而是"中国版 BASF + 周期底拐点"的中期持有标的。',
        keyAssumptions: [
            '2026 Q2 福建二期 70 万吨 MDI 如期投产，全球份额跃升至 37%',
            '2026 全年营收 ≥¥2,300 亿 / 归母 ≥¥180 亿 (隐含 +44%)',
            'MDI 国内挂牌价 2026 年中枢 ¥14-16k 维持',
            '新材料板块 2027 年营收占比突破 20%',
            'CapEx 2027 后下台阶至 ¥400-500 亿 / 年',
            '2027 ROE 回升至 15%+',
        ],
        sizingFormula: {
            method: 'Kelly 公式 (保守版 1/2 Kelly)',
            formula: 'f* = (期望回报率 − 无风险利率) / 方差 × 0.5',
            inputs: [
                { label: '10Y 期望回报率 (含分红)', value: '~12% CAGR' },
                { label: '无风险利率 (10Y 国债)', value: '2.5%' },
                { label: '情景标准差 (10Y)', value: '~¥3,400 亿 (~85% E[Mcap])' },
                { label: '完整 Kelly', value: '~6%' },
                { label: '1/2 Kelly (保守)', value: '~3%' },
            ],
            computedSize: '3-5% 组合权重',
            reasoning:
                '10Y 情景标准差 ¥3,400 亿占期望值 ~85%，反映周期股不对称下行风险。**分层建仓**：基础 3%（PB 5% 分位 + Q1\'26 拐点）+ 福建二期投产 +1%（份额跃升至 37%）+ 新材料破 20% 营收 +1%（二曲线验证）+ ROE 回到 15% +1%（盈利质量回归）= 最高 6%。**特别注意**：万华是周期股 + 重资产，不适合作为成长股满仓配置。仓位上限 6-8%。',
        },
    },

    keyPersonRisks: [
        {
            name: '廖增太 (董事长 + 总裁)',
            role: '战略 · 资本配置 · 文化塑造',
            departProb: '中 (~15% / 5 年，年龄因素)',
            departImpact: '极高 —— 股价短期 -25%，战略连续性最大变量',
            mitigation: '中诚投资员工持股平台 + 国资治理框架 + 技术派副总团队 (寇光武 / 华卫琦) 可短期代理',
            criticality: 'critical',
        },
        {
            name: '中诚投资 (员工持股平台核心团队)',
            role: '运营 · 技术 · 工艺',
            departProb: '低 (~5% / 5 年集体性)',
            departImpact: '高 —— 工艺 know-how + 长期主义文化',
            mitigation: '员工持股深度绑定 (历史 30+ 年) · 工艺自主可控 · 国资战略稳定',
            criticality: 'high',
        },
        {
            name: '寇光武 (新材料副总)',
            role: '二曲线核心执行',
            departProb: '低 (~10% / 5 年)',
            departImpact: '中-高 —— 新材料平台执行力',
            mitigation: '新材料团队建制成熟 · 蓬莱基地由建制化团队运营',
            criticality: 'medium',
        },
        {
            name: 'BC 公司 (匈牙利) 海外团队',
            role: '欧洲业务执行',
            departProb: '低 (~8% / 5 年)',
            departImpact: '中 —— 欧洲市场关系 + 本地合规',
            mitigation: '万华 96% 控股 · 欧洲管理层稳定 · 当地员工持股计划',
            criticality: 'medium',
        },
    ],

    cashFlow: {
        narrative:
            '万华化学是**"周期重资产 × 长期 CapEx 高"模型**。2024-2025 OCF ¥300-330 亿稳定但 CapEx ¥700-800 亿吞噬大部分现金，FCF 短期紧张。**关键拐点**：2026-2027 福建二期 + 烟台乙烯 + 蓬莱基地主项目陆续投产后 CapEx 大幅放缓到 ¥400-500 亿/年，FCF 跳升至 ¥200-300 亿/年。这将是公司从"重资产投入期"切换到"现金奶牛期"的标志。',
        rows: [
            { year: '2021', ocf: 32000, icf: -25000, fcf: -5000, freeCashFlow: 7000, status: 'actual' },
            { year: '2022', ocf: 28000, icf: -45000, fcf: 15000, freeCashFlow: -17000, status: 'actual' },
            { year: '2023', ocf: 26000, icf: -55000, fcf: 25000, freeCashFlow: -29000, status: 'actual' },
            { year: '2024', ocf: 30040, icf: -75000, fcf: 40000, freeCashFlow: -44960, status: 'actual' },
            { year: '2025', ocf: 33105, icf: -70000, fcf: 35000, freeCashFlow: -36895, status: 'actual' },
            { year: '2026E', ocf: 38000, icf: -55000, fcf: 15000, freeCashFlow: -17000, status: 'estimate' },
            { year: '2027E', ocf: 45000, icf: -40000, fcf: 0, freeCashFlow: 5000, status: 'estimate' },
            { year: '2028E', ocf: 52000, icf: -35000, fcf: -8000, freeCashFlow: 17000, status: 'estimate' },
        ],
        conversionNote:
            'Cash Conversion Ratio = OCF / Net Income。2025 约 2.6x (¥331 亿 / ¥125 亿)，远高于 1x 反映折旧 + 摊销规模庞大 (重资产特征)。2027 后 CapEx 见顶后 FCF Conversion 会显著改善。注：表格数字单位为百万元。',
        keyRisks: [
            'CapEx 长期 >¥700 亿 / 年会让 FCF 持续为负，财务费用上升',
            'MDI 价差长期低位 OCF 可能从 ¥330 亿降至 ¥200 亿，FCF 加深为负',
            '资产负债率突破 70% 会触发评级下调 + 融资成本上升',
            '海外业务汇率风险 (欧元 / 人民币波动会影响 BC 公司现金回流)',
        ],
    },

    historicalValuation: {
        narrative:
            '万华化学 2001 上市，有 25+ 年交易历史。**PB 区间 1.5-8x · PE 区间 8-40x**，反映周期股估值大幅波动。**当前 PB ~3.0x 处于过去 10 年的 5% 分位线**（即 95% 时间高于此值），属于历史绝对底部。PE TTM 20.6x 处于 87% 高分位，但这是周期股"利润底 → PE 高 → 利润恢复 → PE 下降"的经典特征。',
        history: [
            { period: '2018-Q4 (整体上市)', evSales: 1.8, note: 'PB 4.0x · PE 9x' },
            { period: '2019-Q4', evSales: 2.0, note: 'PB 3.5x · PE 12x' },
            { period: '2020-Q4 (Q4 周期复苏)', evSales: 2.5, note: 'PB 4.5x · PE 18x' },
            { period: '2021-Q4 (历史巅峰)', evSales: 4.5, note: '股价 ¥130+ · PB 7.5x · PE 18x · ROE 30%+' },
            { period: '2022-Q4', evSales: 2.2, note: 'PB 4.0x · PE 12x' },
            { period: '2023-Q4', evSales: 1.6, note: 'PB 3.0x · PE 12x' },
            { period: '2024-Q4', evSales: 1.5, note: 'PB 2.8x · PE 14x' },
            { period: '2025-Q3 (深度底)', evSales: 1.4, note: '股价 ¥58 · PB 2.4x · PE 18x' },
            { period: '2026-Q1 (当前)', evSales: 1.6, note: '股价 ¥89.48 · PB 3.0x · PE 20.6x' },
        ],
        currentPercentile: 'PB 5% (10Y) · PE 87% (5Y)',
        verdict: 'cheap',
    },

    downsideMetrics: {
        narrative:
            '只看 9.1% CAGR 期望是 research theater。基于 4 档情景，**10Y 情景标准差约 ¥3,400 亿**（~120% 期望值，高于已覆盖白马公司的 80-95%）反映周期股极强的不对称性。**5Y 内亏损 30%+ 概率约 30%**——主要由"地产长期下行 + MDI 全球过剩"的悲观情景驱动。但 ¥120-180 亿稳态净利 + 中诚投资员工持股 + 国资治理 + PB 5% 分位提供了较强的下行保护。',
        scenarioStdDev: 3400,
        sharpeLike: 1.13,
        probLoss30Pct5Y: 30,
        maxDrawdownEstimate: '-35% 到 -55%（参考 2018 / 2022 周期低点；下次预计 -40-50%）',
        downsideToUpsideRatio: '下行 1 vs 上行 4 (单次下跌 ¥1,000 亿，单次上冲 ¥4,000 亿+)',
    },

    sensitivity: {
        narrative: '哪个变量对 10Y 期望市值最敏感？按单变量 ±1σ 扰动排序 ——',
        variables: [
            { variable: 'MDI 国内挂牌价中枢 (¥10k vs ¥17k)', downImpact: -1800, upImpact: 2500, description: '聚氨酯板块 70% 利润所在，最敏感' },
            { variable: '全球 MDI 份额 (28% vs 40%)', downImpact: -1200, upImpact: 2000, description: 'Covestro 整合期份额转移' },
            { variable: '新材料板块占营收比 (10% vs 30%)', downImpact: -800, upImpact: 1800, description: '"中国版 BASF" 路径核心' },
            { variable: '海外营收占比 (35% vs 65%)', downImpact: -600, upImpact: 1500, description: '突破地产 β + 关税对冲' },
            { variable: 'CapEx 强度 (CapEx/OCF)', downImpact: -500, upImpact: 800, description: '决定 FCF 释放速度' },
            { variable: 'ROE (8% vs 20%)', downImpact: -700, upImpact: 1200, description: '估值切换的盈利前提' },
            { variable: '中欧 / 中美关税升级', downImpact: -800, upImpact: 200, description: '海外 47% 营收暴露' },
        ],
        takeaway:
            '**最敏感三变量：MDI 价差中枢、全球 MDI 份额演进、新材料板块占比**。每季度追踪这三项。其中 MDI 价差是"先行指标"——任何连续 2 季度 <¥12k 的下滑都意味着周期重新探底。新材料占比是"中长期信号"——若 2027 年仍 <18%，"中国版 BASF" 故事破灭。',
    },

    bearPlaybook: {
        scenario: '"悲观：地产长期下行 + 全球 MDI 产能继续过剩"（28% 概率）的完整 ruin 路径',
        steps: [
            {
                when: '2026 Q3 - 2027 Q1',
                event: 'MDI 国内挂牌价跌回 ¥12k 以下，福建二期投产推高全球供给',
                signal: '聚合 MDI 国内挂牌价连续 3 月 <¥12k；全球开工率跌至 75% 以下',
            },
            {
                when: '2027 Q2',
                event: '中报营收增速跌回个位数 / 归母 -20%+',
                signal: '2027 中报披露营收增速 <8%、归母 <¥80 亿（远低于 2026 Q1 +20.6%）',
            },
            {
                when: '2027 H2',
                event: '中国房地产持续下行 + 家电零售 -10%，国内 MDI 需求结构性下台阶',
                signal: '统计局白电零售连续 12 月负增长；建材 / 保温材料价格 -15%',
            },
            {
                when: '2028 Q1',
                event: '新材料板块价格战 (POE / LFP / PC) 全面爆发，毛利率从 13% 跌至 8%',
                signal: 'POE 国内售价 ¥9k → ¥6k；LFP <¥30k/吨',
            },
            {
                when: '2028 H2',
                event: 'ROE 跌破 8% + 资产负债率超 70% + 信用评级下调',
                signal: '中诚信 / 联合评级从 AAA → AA+；财务费用同比 +30%',
            },
            {
                when: '2029-2030',
                event: '股价稳定在 ¥45-60 / 市值 ¥1,400-1,900 亿 / "周期质量股估值 + 增长困境"',
                signal: 'PE 12-15x · PB 1.5-2x · 股息率 3%+ 但增长停滞',
            },
        ],
        exitTrigger:
            '任一步骤在时间表前 1 个季度提前发生 → **减仓 50%**。连续 2 条发生 → **清仓观望**。特别关注：①MDI 国内挂牌价、②全球 MDI 开工率、③国内白电 / 建材零售。',
    },

    capitalAllocation: {
        narrative:
            '万华化学的资本配置是 A 股化工龙头中**最好的之一**：廖增太长期主义 + 中诚投资员工持股利益绑定 + 国资治理框架。20+ 年坚持"工艺研发 → 产能扩张 → 一体化降本 → 海外并购"的清晰路径，BC 收购、整体上市、福建 / 蓬莱布局都是经典案例。**最强项**：再投资能力 (ROIIC 历史 15-25%)；**最弱项**：回购规模相对市值偏小 (2025 仅 ¥5 亿 vs 市值 ¥2,800 亿 = 0.18%)。',
        scores: [
            { dimension: 'ROIIC', label: '增量资本回报率', score: 5, detail: '历史 ROIIC 15-25% (周期均值)；BC 收购 IRR 18%+；福建一期 IRR 15%+；蓬莱基地预期 IRR 12-15%', evidence: '历年并购回报 + 项目立项 IRR' },
            { dimension: 'Buyback', label: '回购节奏', score: 3, detail: '2025 年首次大规模回购 ¥5 亿全部注销 (均价 53.90 元，已被业绩验证为低位)；但相对 ¥2,800 亿市值仍偏小', evidence: '2025-07 回购公告' },
            { dimension: 'Dividend', label: '股息政策', score: 4, detail: '2024 分红率 30.11% (¥39.25 亿) · 2025 提升至每 10 股 12.50 元 (合计 ¥39 亿) · 国资 + 员工持股双方都对现金回报有诉求', evidence: '历年分红公告' },
            { dimension: 'M&A', label: '并购命中率', score: 5, detail: '2011 BC 公司收购是 A 股化工史上最经典海外并购 (€12.63 亿现回报 €30 亿+)；其他并购规模较小但极少失败', evidence: 'BC 公司 14 年历史回报' },
        ],
        overallGrade: 'A',
        historicalROIIC: '~15-25% (周期均值 · 化工行业最高)',
    },

    gapAnalysis: {
        narrative:
            '万华化学 2026 是"管理层指引保守 + 卖方共识中等 + Q1\'26 实绩超预期"的经典套利机会。Q1\'26 +25.5% 营收 / +20.6% 归母 已经显著高于公司年初指引，市场仍在消化拐点信息。共识 2026 净利 ¥184 亿 (+47%)，本分析略乐观至 ¥190 亿。',
        rows: [
            { metric: '2026 营收增速', guidance: '+10% (年初保守)', consensus: '+13%', selfAssumption: '+15%', gap: '+2-5pp 乐观', risk: 'medium', note: 'Q1 +25.5% 已远超指引' },
            { metric: '2026 归母净利', guidance: '未明确指引', consensus: '¥184 亿 (+47%)', selfAssumption: '¥190 亿 (+52%)', gap: '+3pp 乐观', risk: 'medium' },
            { metric: 'MDI 价差中枢', guidance: '"温和上移"', consensus: '聚合 ¥15-16k', selfAssumption: '聚合 ¥14-16k', gap: '保守 1k', risk: 'low' },
            { metric: '海外营收占比', guidance: '">45%"', consensus: '50%', selfAssumption: '52%', gap: '+2pp 乐观', risk: 'medium' },
            { metric: '新材料板块增速', guidance: '">+20%"', consensus: '+25%', selfAssumption: '+30%', gap: '+5pp 乐观', risk: 'medium', note: 'POE 二期 + LFP 投产' },
            { metric: '2027 ROE', guidance: '未指引', consensus: '14%', selfAssumption: '15%', gap: '+1pp 乐观', risk: 'low' },
        ],
        takeaway:
            '**最关键 Gap：Q1\'26 实绩 vs 年初指引 +15pp**。这是"管理层先发保守 + 业绩超预期 + 共识滞后上修"的经典套利结构。若 Q2-Q3 持续 +20% 增速，共识会被推高至 ¥200 亿净利 (+60%)，触发 +20-30% 上行；若 Q2-Q3 回落到 +10%，共识下修至 ¥160 亿，触发 -10-15% 回调。',
    },

    benchmarkComparison: {
        narrative:
            '万华化学 10Y 期望 CAGR 9.1% (不含分红) / 12% (含分红) vs 被动 60/40 组合 7.8% / 沪深 300 ~7%。超额 ~4-5pp，**justify 3-5% 仓位**。相对 A 股化工同业 (恒力 / 荣盛 / 华鲁) 超额 5-8pp，作为 A 股化工核心持仓值得。',
        alternatives: [
            { name: '沪深 300 (HS300)', ticker: '510300', expectedReturn5Y: 6, expectedReturn10Y: 7, note: 'A 股宽基' },
            { name: '上证 50', ticker: '510050', expectedReturn5Y: 6, expectedReturn10Y: 7, note: '大盘核心' },
            { name: 'A 股化工 ETF (515030)', expectedReturn5Y: 5, expectedReturn10Y: 7, note: '化工行业指数' },
            { name: '60/40 (沪深300 + 国债)', expectedReturn5Y: 6, expectedReturn10Y: 7.5, note: '稳健均衡' },
            { name: '10Y 国债', ticker: '019xxx', expectedReturn5Y: 2.5, expectedReturn10Y: 2.8, note: '无风险' },
            { name: 'BASF (XETR:BAS)', ticker: 'BAS', expectedReturn5Y: 5, expectedReturn10Y: 7, note: '全球化工对照' },
            { name: '恒力石化 (SH:600346)', ticker: '600346', expectedReturn5Y: 4, expectedReturn10Y: 6, note: 'A 股化工同业' },
        ],
        selfReturn5Y: 5.7,
        selfReturn10Y: 9.1,
        excessReturn5Y: -0.3,
        excessReturn10Y: 1.6,
        justifiesPosition: 'marginal',
        takeaway:
            '**5Y 超额 -0.3pp 边际不显著，10Y 超额 1.6pp justify 3-5% 仓位**。相对沪深 300 / 化工 ETF 都有超额，但 5Y 周期内可能跑输被动指数（因为还在拐点确认期）。**特别考虑**：万华是"周期 + 重资产"，与 A 股消费白马、互联网、医药完全不同因子；如果你的组合已经偏成长 (科技 / 消费)，万华的"价值 + 周期 + 国企" 因子是天然补充。但如果已持有 BASF / Covestro / 化工 ETF，边际多元化有限。',
    },

    trackRecord: {
        narrative:
            '本分析锚定 2026-04-29。以下 6 条可验证命题，特别关注 MDI 价差 + 福建二期投产 + 新材料占比 三大先行指标。',
        assumptions: [
            { assumption: '2026 Q2 福建二期 70 万吨 MDI 如期投产 (产能 380→450 万吨)', setAt: '2026-04-29', targetDate: '2026-09-30', targetValue: '产能跃升至 450', verdict: 'pending', note: '基础假设之一' },
            { assumption: '2026 全年营收 ≥¥2,300 亿 / 归母 ≥¥180 亿', setAt: '2026-04-29', targetDate: '2027-04-30', targetValue: '营收 ≥¥2,300 亿', verdict: 'pending', note: 'Q1 已 +25.5%' },
            { assumption: '2026 全年 MDI 国内聚合挂牌价中枢 ≥¥14,000/吨', setAt: '2026-04-29', targetDate: '2027-04-30', targetValue: '≥¥14,000', verdict: 'pending' },
            { assumption: '2027 年报新材料板块营收占比 ≥20%', setAt: '2026-04-29', targetDate: '2028-04-30', targetValue: '≥20%', verdict: 'pending', note: '"中国版 BASF" 验证' },
            { assumption: '2027 年加权 ROE 回升至 ≥15%', setAt: '2026-04-29', targetDate: '2028-04-30', targetValue: '≥15%', verdict: 'pending', note: '盈利质量回归' },
            { assumption: '2027 年海外营收占比 ≥55%', setAt: '2026-04-29', targetDate: '2028-04-30', targetValue: '≥55%', verdict: 'pending', note: 'Q1\'26 已 47.4%' },
        ],
        hitRate: 'N/A (全部 pending)',
    },

    correlation: {
        narrative:
            '万华化学是**"中国制造 × 全球化工 β × 新材料期权"复合敞口**：涨跌 50% 由全球化工周期决定、25% 由中国地产 / 家电决定、25% 由公司 alpha (新材料 + 海外份额) 决定。如果组合中已持有 BASF / Covestro / 化工 ETF，加万华的**边际多元化中等**。真正的 hedge 是**反周期 + 非化工资产** (国债 / 黄金 / 消费白马)。',
        rows: [
            { asset: 'BASF (XETR:BAS)', beta: 1.0, correlation: 0.75, hedgeValue: 'low', note: '全球化工 β · 同赛道' },
            { asset: 'Huntsman (NYSE:HUN)', beta: 1.1, correlation: 0.70, hedgeValue: 'low', note: '北美聚氨酯' },
            { asset: 'A 股化工 ETF (515030)', beta: 1.0, correlation: 0.85, hedgeValue: 'low', note: '高度同质' },
            { asset: '恒力石化 (SH:600346)', beta: 0.9, correlation: 0.60, hedgeValue: 'medium', note: 'A 股炼化同业' },
            { asset: '茅台 (SH:600519)', beta: 0.4, correlation: 0.30, hedgeValue: 'high', note: '消费白马 + 不同因子' },
            { asset: '宁德时代 (SZ:300750)', beta: 0.6, correlation: 0.45, hedgeValue: 'medium', note: '新能源材料协同 (LFP)' },
            { asset: '10Y 国债', beta: -0.4, correlation: -0.35, hedgeValue: 'high', note: '降息受益 + 周期对冲' },
            { asset: '黄金 (518880)', beta: -0.2, correlation: -0.15, hedgeValue: 'medium', note: '宏观对冲' },
        ],
        suggestedHedge:
            '如果万华占组合 3-5%，建议搭配：①**反向**：8-10% 国债 + 3-5% 黄金 ETF（降息受益 + 地缘对冲）；②**不要同时持有**：万华 + 恒力石化 + 化工 ETF 三者加总超过 12% 是重大集中度风险；③**对标全球化工 + 消费白马**：可搭配 BASF 2-3% (XETR:BAS) 或 茅台 5-8%（消费白马 + 不同因子）。**最佳组合**：万华 4% + 茅台 6% + 宁德时代 3% + 10Y 国债 8% + 黄金 3%（中国制造 / 消费 / 新能源 / 防御 / 对冲五维分散）。',
    },

    dataSources: {
        narrative: '本报告数据 anchor 日期 2026-04-29。核心数据来自万华化学 2024/2025 年报、2026 Q1 季报、上交所披露、巨潮资讯、卓创资讯、Morgan Stanley 研报。情景概率与 10Y 期望为本分析主观推演。',
        accessedAt: '2026-04-29',
        sources: [
            { label: '万华化学 2024 年报 (cninfo)', url: 'https://dataclouds.cninfo.com.cn/shgonggao/2025/2025-04-15/ddc9a4a9193911f0b5c6fa163e957f7a.pdf', category: 'primary', publishedAt: '2025-04-14' },
            { label: '2025 年报核心数据 (新浪财经)', url: 'https://finance.sina.com.cn/stock/aiassist/yjbg/2025-04-14/doc-inetefei4707096.shtml', category: 'secondary' },
            { label: '2026 Q1 财报 +25.5% / +20.6% (新浪财经)', url: 'https://finance.sina.com.cn/stock/hkstock/ggscyd/2026-04-21/doc-inhvenry7420263.shtml', category: 'secondary', publishedAt: '2026-04-21' },
            { label: 'Q1 海外营收占比 47.4% (DoNews)', url: 'https://www.donews.com/news/detail/4/6520220.html', category: 'secondary' },
            { label: '2025 Q3 季报 (新浪财经)', url: 'https://finance.sina.com.cn/jjxw/2025-10-25/doc-infvaiqp0572865.shtml', category: 'secondary' },
            { label: 'Morgan Stanley 上调 OW (Investing.com)', url: 'https://www.investing.com/news/analyst-ratings/morgan-stanley-upgrades-wanhua-chemical-stock-to-overweight-on-market-position-93CH-4242693', category: 'research' },
            { label: '东吴证券深度报告 (东方财富)', url: 'https://pdf.dfcfw.com/pdf/H3_AP202509011737740262_1.pdf', category: 'research' },
            { label: '机构综合目标价 ¥109.30 (新浪财经)', url: 'https://finance.sina.com.cn/roll/2026-04-07/doc-inhtryte0433772.shtml', category: 'research' },
            { label: 'Covestro 私有化完成 (XRG / ADNOC)', url: 'https://xrg.com/en/news/XRG-Completes-Acquisition-of-Covestro-AG', category: 'secondary' },
            { label: '全球 MDI 市场 (Mordor Intelligence)', url: 'https://www.mordorintelligence.com/industry-reports/methylene-diphenyl-di-isocyanate-mdi-market', category: 'research' },
            { label: '福建二期 / 蓬莱基地产能 (Industrial Info)', url: 'https://www.industrialinfo.com/iirenergy/industry-news/article/chinas-wanhua-chemical-to-expand-mdi-capacity--317101', category: 'secondary' },
            { label: '蓬莱电池材料 168 亿开工 (OFweek)', url: 'https://libattery.ofweek.com/2025-02/ART-36008-8120-30657711.html', category: 'secondary' },
            { label: 'POE 国内最早量产 (新浪财经)', url: 'https://finance.sina.com.cn/jjxw/2025-03-05/doc-inenqhup9091625.shtml', category: 'secondary' },
            { label: '2025 回购注销 ¥5 亿 (新浪财经)', url: 'https://finance.sina.com.cn/roll/2025-07-14/doc-inffkmyz6996370.shtml', category: 'secondary', publishedAt: '2025-07-14' },
            { label: '历史 PB 估值数据 (理杏仁)', url: 'https://www.lixinger.com/equity/company/detail/sh/600309/600309/fundamental/valuation/pb', category: 'data' },
            { label: '万华化学官方投资者关系', url: 'https://www.whchem.com/cn/touzizhe/', category: 'primary' },
            { label: 'F10 企业概况 (东方财富)', url: 'https://emweb.eastmoney.com/PC_HSF10/OperationsRequired/Index?type=web&code=sh600309', category: 'data' },
        ],
    },
}
