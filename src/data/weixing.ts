import type { CompanyDetail } from '@/types/company'

export const weixing: CompanyDetail = {
    id: 'weixing',
    ticker: 'SZ:002648',
    name: '卫星化学 (Satellite Chemical)',
    tagline:
        '"美国乙烷 + 中国裂解"成本套利模型 + 全球 SAP 龙头 + α-烯烃园 2026 投产。Q1\'26 归母 +34.97% 反转 · 2024 ROE 21.87% (远超万华 14%) · 资产负债率 51.74% 健康 · 国内丙烯酸第一 (84 万吨 · 市占 20.59%)。核心争议：14 艘 VLEC + ORBIT 长期合同的"乙烷脆弱性"溢价 vs 折价？POE 落后万华 18-24 个月还能不能补课？',
    date: '2026-04-29',

    priceCards: [
        { label: '当前股价', value: '¥29.00', sub: '2026-04-28 收盘 (+3.76%)', cls: 'cyan' },
        { label: '52 周区间', value: '¥17.10 – ¥30.29', sub: '2025-07 回购成本 17.10-18.90', cls: 'purple' },
        { label: '总市值', value: '~¥977 亿', sub: '2026-04-13 一度破千亿', cls: 'purple' },
        { label: '机构目标价', value: '¥24-34', sub: '太平洋 32.25 / 国海 33.52', cls: 'cyan' },
        { label: '2025 营收', value: '¥460.68 亿', sub: '+0.92% (Q1\'26 +2.82% 增速回升)', cls: 'green' },
        { label: 'Q1\'26 归母', value: '¥21.17 亿 +34.97%', sub: '气头路线 alpha 兑现', cls: 'green' },
    ],

    keyFacts: {
        '2025 营收': '¥460.68 亿 (+0.92%)',
        '2025 归母净利': '¥53.11 亿 (-12.54%)',
        '2025 扣非净利': '¥62.92 亿 (+4.02%)',
        '2024 营收': '¥456.48 亿 (+10.03%)',
        '2024 归母净利': '¥60.72 亿 (+26.77% · 历史新高)',
        '2024 加权 ROE': '21.87% (+2.18pct)',
        '2026 Q1 营收': '¥126.77 亿 (+2.82%)',
        '2026 Q1 归母': '¥21.17 亿 (+34.97%)',
        '2026 Q1 经营现金流': '¥22.11 亿 (+38.31%)',
        'C3 业务营收 (2025)': '¥258.74 亿 (+19.19%)',
        '高分子新材料 (2025)': '¥87.62 亿 (-26.91%)',
        '新能源材料 (2025)': '¥6.91 亿',
        '连云港乙烷裂解': '250 万吨/年 (一+二阶段)',
        '丙烯酸国内市占': '84 万吨 · 20.59% · 全国第一',
        'SAP 产能': '15 万吨 (全球主要厂商)',
        'VLEC 船队': '14 艘 + 4 艘新建 (2025-2026)',
        'PE (TTM)': '18.4x · PB 1.9x',
        '2025 资产负债率': '51.74% (-3.89pct)',
        '实控人持股': '杨卫东 + 杨亚珍家族 50.4%',
    },

    contracts: [
        { customer: 'α-烯烃高端材料一阶段 (PE 90 万吨 + α-烯烃 20 万吨)', amount: '¥121.5 亿', years: '2024-2026', detail: '2025 底建成 · 2026 初投产' },
        { customer: 'α-烯烃高端材料二阶段 (POE 60 万吨 + α-烯烃 30 万吨)', amount: '¥144.5 亿', years: '2025-2027', detail: '2026 底建成 · POE 工业化关键' },
        { customer: '连云港 PE/EOE/ACN 联合装置', amount: '¥592 亿', years: '2024-2027', detail: '2025 底进度 55% · 大型综合化工平台' },
        { customer: '连云港绿色新材料 三期 (PS + 碳酸酯)', amount: '¥150 亿 (一/二/三期合计)', years: '2024-2027', detail: '2027 底全面投产 · 注：不是新增乙烷裂解' },
        { customer: 'ORBIT Nederland Terminal (与 Energy Transfer 合资)', amount: '长期', years: '长期协议', detail: '美国乙烷出口码头 17.5 万桶/日 ≈ 300 万吨/年长协' },
        { customer: '14+4 艘 VLEC 船队 (HD 现代 + 三星重工 + 江南造船)', amount: '~$30 亿+', years: '已交付 + 2025-2026 续交', detail: '全球最大 VLEC 船队 · 物流壁垒' },
    ],

    subsidiaries: [
        { name: '连云港石化', desc: 'C2 产业链 + α-烯烃园核心', stake: '全资', value: '250 万吨乙烷裂解 + α-烯烃园 (266 亿) + UHMWPE/POE/碳酸酯 · 公司未来 5 年增长引擎' },
        { name: '平湖石化 (总部)', desc: 'C3 产业链 + PDH 大本营', stake: '全资', value: 'PDH 90 万吨 (三期到 180 万吨) + 丙烯酸 84 万吨 + SAP 15 万吨' },
        { name: '嘉兴新材料', desc: '高分子乳液 + 高附加值', stake: '全资', value: '26 万吨高分子乳液 (涂料 / 纺织 / 电池粘结剂 / 涂覆剂)' },
        { name: 'ORBIT Ethane Pipeline', desc: '美国乙烷出口码头 (与 Energy Transfer 合资)', stake: '50%', value: '17.5 万桶/日 ≈ 300 万吨/年长协 · 2026 Q1 二期扩建至 18 万桶/日' },
        { name: 'STL Shipping (新加坡)', desc: 'VLEC 船队运营', stake: '全资', value: '14 艘 + 4 艘新建 · 全球最大 VLEC 船队 · 物流自主可控' },
    ],

    bullPoints: [
        { title: '气头路线全球成本第一梯队', body: '美国乙烷价格 2025 年 6 月跌至历史低位 (18.75 美分/加仑)，蒙特贝维现货 150-200 美元/吨；卫星乙烯单吨成本比石脑油路线低 ¥1,500-3,000；这是过去 5 年市值 50 亿 → 977 亿的根本' },
        { title: 'Q1\'26 业绩 +34.97% 拐点确认', body: '2026 Q1 归母 21.17 亿 +34.97% / 扣非 +15.47% / OCF +38.31% / 境外收入 +45.3%；中东油价上行带动烯烃涨价，美国乙烷因页岩气宽松维持低位，剪刀差打开' },
        { title: 'ROE 21.87% · 远超化工同行 (万华 14% / 恒力 8%)', body: '2024 加权 ROE 21.87% 同比 +2.18pct，是 A 股化工龙头中最高之一；资产负债率 51.74% 低于万华 64.7%，财务稳健性显著领先' },
        { title: 'C3 板块全球 SAP 龙头 + 国内丙烯酸第一', body: '丙烯酸 84 万吨国内市占 20.59% 第一；SAP 15 万吨与日本触媒 / 巴斯夫 / 赢创并列全球前 5；C3 是稳定现金流主源' },
        { title: 'α-烯烃园 2026 投产 · 高端聚烯烃国产替代', body: '总投资 266 亿 · 一阶段 (PE 90 万吨 + α-烯烃 20 万吨) 2026 初投产；二阶段 (POE 60 万吨 + α-烯烃 30 万吨) 2026 底；UHMWPE / mPE / PAO 系全产品线' },
        { title: '14+4 艘 VLEC 物流壁垒', body: '14 艘已交付 + 4 艘 99000 m³ 在建 (江南造船 2025-2026 交付)，是全球最大 VLEC 船队；ORBIT 出口码头 50% 股权 + Energy Transfer 长协，物流自主可控对冲国别风险' },
        { title: '管理层回购成本 17.10-18.90 元 (vs 当前 29.00)', body: '2025-04-27 启动回购 4 亿元上限 · 价上限 29.50 元，截至 7 月底已回购 1207 万股 (2.18 亿)；管理层成本基准已被股价翻倍验证' },
    ],

    bearPoints: [
        { title: '美国乙烷出口管控是单点最大风险', body: '2025-04 美国关税 + 2025-05-23 BIS 将乙烷列入许可商品 + 2025-07-02 撤销，已"充分演练"一次；公司估值最大折价因子，未来 5 年若中美再次升级，C2 板块利润直接归零' },
        { title: 'POE 落后万华 18-24 个月', body: '万华 POE 60 万吨 (2024-06 投产 20 万吨 + 2025 末蓬莱二期 40 万吨)；卫星 POE 中试 500-600 吨 (2025-05 获批) 工业化要等 2026 年底；落后万华一个完整产品周期' },
        { title: '2025 净利同比 -12.54% · 周期下行已现', body: '2025 全年归母 53.11 亿 -12.54%（虽扣非 +4%）；油价下行使产品价格承压，反映"气头 alpha"也不能完全免疫周期' },
        { title: 'POE 国产化 2026-2027 可能从紧平衡转过剩', body: '万华 60 万吨 + 卫星 60 万吨 + 茂名石化 + 其他 = 2027 国内 POE 200+ 万吨，光伏胶膜需求 2027 年若放缓将引发价格战' },
        { title: '总投资 1,000+ 亿在建 · 资本开支高位', body: 'α-烯烃园 266 亿 + 连云港联合装置 592 亿 + 绿色新材料三期 150 亿 ≈ 1,000+ 亿在建项目；若周期复苏不及预期，IRR 兑现压力大' },
        { title: '估值已包含 POE 兑现预期 (PE 18.4x · PB 1.9x)', body: 'YTD +71% 涨幅 + 历史高 30.29 元已经定价"α-烯烃投产 + POE 二期"，而非"低估的逆向机会"；左侧机会已远去' },
        { title: '杨卫东家族 50.4% 控股 · 治理透明度有限', body: '夫妻俩高度集中控股，独董制衡相对有限；战略由家族驱动，市值管理偶有粗糙' },
    ],

    scenarios: [
        {
            name: '乐观: α-烯烃 + POE 全部兑现 + 中美和解',
            cls: 'bull',
            prob: 15,
            y5Mcap: '¥1,800 – 2,800 亿',
            y5Value: 2200,
            y10Mcap: '¥4,000 – 6,000 亿',
            y10Value: 5000,
            desc: 'α-烯烃二期 60 万吨 POE 2027 满产 + 全球前 3 (仅次于陶氏 / 万华) · UHMWPE / mPE / PAO 国产替代成功 · C2 三阶段规划 · 2030 营收 ¥800 亿 / 归母 ¥150 亿 · 切换至"高端聚烯烃平台"溢价 PE 22-25x',
        },
        {
            name: '基准: 周期均值 + 高端材料温和放量',
            cls: 'neutral',
            prob: 50,
            y5Mcap: '¥1,200 – 1,800 亿',
            y5Value: 1500,
            y10Mcap: '¥1,800 – 2,600 亿',
            y10Value: 2200,
            desc: 'α-烯烃园全部投产 · POE 60 万吨满产但价格战部分压低毛利 · 乙烷-乙烯价差温和 · SAP 价格稳定 · 2030 营收 ¥600 亿 / 归母 ¥100 亿 · PE 14-16x 中位回归',
        },
        {
            name: '悲观: 中美关税升级 + POE 价格战',
            cls: 'bear',
            prob: 28,
            y5Mcap: '¥450 – 750 亿',
            y5Value: 600,
            y10Mcap: '¥600 – 1,000 亿',
            y10Value: 800,
            desc: '美国乙烷出口管控 + 中美关税升级到 50%+ · POE 全行业价格战毛利率从 30% 跌到 8% · 连云港利用率跌至 70% · 2030 归母 ¥40 亿 · PE 压缩 10-12x',
        },
        {
            name: '尾部: 美国乙烷断供 + 巨额减值',
            cls: 'bear',
            prob: 7,
            y5Mcap: '¥250 – 500 亿',
            y5Value: 350,
            y10Mcap: '¥300 – 600 亿',
            y10Value: 400,
            desc: '美国乙烷断供 6 月+ + 加工贸易方案不可持续 · 连云港 250 万吨闲置 · α-烯烃园投产即停 · 巨额减值',
        },
    ],

    tenXGene: [
        { dim: '规模化边际成本', tenBagger: '边际成本 ≈ 0', nebius: '重资产化工 · 连云港 + 嘉兴 + 平湖 多基地 CapEx 巨大', status: 'red' },
        { dim: '网络/平台效应', tenBagger: '显著网络效应', nebius: 'B2B 大宗品 · 无网络效应', status: 'red' },
        { dim: '数据/资产壁垒', tenBagger: '独占 IP / 规模', nebius: '14 艘 VLEC 船队 + ORBIT 50% + α-烯烃自研 · 国内独有的"美国乙烷套利模型"', status: 'green' },
        { dim: '定价权 · 毛利率', tenBagger: '60%+ 可持续', nebius: '气头路线吨成本壁垒 · 2025 毛利率 22.31% · 周期内 18-30%', status: 'yellow' },
        { dim: '再投资空间 (TAM × ROIC)', tenBagger: '高 ROIC × TAM 巨大', nebius: 'α-烯烃园 + POE + 高端聚烯烃 + 碳酸酯 + UHMWPE · ROIC 长期 15-25%', status: 'yellow' },
        { dim: '管理层资本配置', tenBagger: '0→$30B+ 跨代际', nebius: '杨卫东 20 年从 50 亿做到 977 亿 (19x) · ROE 21.87% 行业最高 · 但治理透明度有限', status: 'green' },
        { dim: '消费者品牌 / 心智', tenBagger: '直接 C 端品牌', nebius: '2B 大宗品无 C 端心智 · "气头路线龙头"机构投资者圈内识别度高', status: 'red' },
    ],

    weightedExpectation: {
        currentMcap: 977,
        y5: {
            expectedMcap: 1269,
            multiplier: 1.30,
            cagr: 5.4,
        },
        y10: {
            expectedMcap: 2102,
            multiplier: 2.15,
            cagr: 7.95,
        },
        breakdown: [
            { scenario: 'A. POE + α-烯烃全兑现', prob: 15, y5Mid: 2200, y10Mid: 5000, y5Contrib: 330, y10Contrib: 750 },
            { scenario: 'B. 周期均值 + 温和放量', prob: 50, y5Mid: 1500, y10Mid: 2200, y5Contrib: 750, y10Contrib: 1100 },
            { scenario: 'C. 关税升级 + POE 价格战', prob: 28, y5Mid: 600, y10Mid: 800, y5Contrib: 168, y10Contrib: 224 },
            { scenario: 'D. 尾部 (乙烷断供)', prob: 7, y5Mid: 350, y10Mid: 400, y5Contrib: 24, y10Contrib: 28 },
        ],
    },

    peerName: '万华化学 (POE 直接对手)',
    coreWeaveCompare: [
        { metric: '2025 营收', nbis: '¥460.68 亿', cwv: '¥2,032 亿 (万华)', winner: 'cwv' },
        { metric: '2024 ROE', nbis: '21.87%', cwv: '14.29% (万华)', winner: 'nbis' },
        { metric: '资产负债率', nbis: '51.74%', cwv: '64.72% (万华)', winner: 'nbis' },
        { metric: 'POE 已投产产能', nbis: '中试 500-600 吨', cwv: '20 万吨 (2024-06 投)', winner: 'cwv' },
        { metric: 'POE 2026 末规划', nbis: '60 万吨 (二期建成)', cwv: '60 万吨 (蓬莱二期)', winner: 'nbis' },
        { metric: '差异化优势', nbis: '美国乙烷套利 + VLEC 14 艘', cwv: 'MDI 全球第一 (33.8%)', winner: 'cwv' },
        { metric: 'Q1\'26 业绩', nbis: '+34.97% 归母', cwv: '+20.62% 归母', winner: 'nbis' },
        { metric: '估值 (PE TTM)', nbis: '18.4x', cwv: '20.59x', winner: 'nbis' },
        { metric: '估值 (PB)', nbis: '1.9x', cwv: '3.0x', winner: 'nbis' },
    ],

    analysts: [
        { firm: '国海证券', target: 33.52, rating: '强烈推荐 (2026 净利 75 亿)' },
        { firm: '太平洋证券', target: 32.25, rating: '买入 (15× PE)' },
        { firm: '国信证券', target: 30, rating: '优于大市 (2026 PE 9.4×)' },
        { firm: '一致预期 (Investing)', target: 24.46, rating: '12 个月平均 (区间 20.20-33.50)' },
        { firm: '国联民生 (2026-04)', target: 31, rating: '买入 (Q1 成本优势)' },
        { firm: '最低估 (回购成本)', target: 18, rating: '管理层成本基准 17.10-18.90' },
    ],

    watchlist: [
        { indicator: '美国乙烷价格 (蒙特贝维现货)', strongSignal: '<$200/吨', baseSignal: '$200-300', weakSignal: '>$350 价差关闭' },
        { indicator: '中美关税 / BIS 出口政策', strongSignal: '稳定无新管控', baseSignal: '常态化谈判', weakSignal: '乙烷再次列入许可' },
        { indicator: 'C3 板块毛利率 (丙烯酸/SAP)', strongSignal: '>25%', baseSignal: '20-24%', weakSignal: '<18% 价格战' },
        { indicator: 'α-烯烃 + POE 项目进度', strongSignal: '一期 2026 Q1 投 / 二期 2026 Q4 投', baseSignal: '延期 1-2 季度', weakSignal: '延期 6 月+' },
        { indicator: '连云港装置利用率', strongSignal: '>95%', baseSignal: '85-95%', weakSignal: '<75% 价格战或断供' },
    ],

    finalQuote:
        '卫星化学的核心争议是：<strong>"美国乙烷 + 中国裂解"的成本套利模型，是溢价资产还是脆弱资产？</strong>——前者是 14 艘 VLEC + ORBIT 50% + 长协 300 万吨/年的全球独家壁垒，对应 PE 20x +；后者是单点国别风险叠加 ¥977 亿市值已经定价"α-烯烃投产" 的左侧机会消失。<strong>2025 BIS 短暂禁令已"充分演练"</strong>这条供应链的脆弱与韧性。<strong>Q1\'26 +34.97% 归母</strong> 验证了气头路线 alpha；<strong>2024 ROE 21.87%</strong> 是化工 A 股最高之一。当前 ¥29.00 (PE TTM 18.4 / PB 1.9) 处于太平洋目标价 32.25 / 国海 33.52 区间下方 10-15%。<strong>但 POE 落后万华 18-24 月</strong> 是结构性短板。基础仓位 2-4%，<strong>α-烯烃园 2026 Q1 顺利投产 + POE 工业化时间表确认 + 中美关税不升级</strong> 三条件兑现可加仓至 5%。',

    revenueChart: {
        labels: ['2021', '2022', '2023', '2024', '2025', '2026E', '2027E'],
        values: [286, 370, 407, 456, 461, 580, 700],
        kinds: ['revenue', 'revenue', 'revenue', 'revenue', 'revenue', 'revenue', 'revenue'],
    },

    overview: {
        founded: '2005 · 杨卫东在浙江平湖创立卫星石化',
        headquarters: '中国 · 浙江嘉兴 (平湖总部)',
        incorporation: '中国 · 浙江省',
        employees: '~8,000+ (含连云港 + 嘉兴 + 平湖)',
        listing: '深交所主板 · 002648 · 2011-01-07 创业板上市',
        history: [
            { year: '2005', event: '杨卫东在浙江平湖创立卫星石化', tag: '创立' },
            { year: '2011-01-07', event: '深交所创业板上市 002648', tag: 'IPO' },
            { year: '2013', event: 'PDH 一期投产 (45 万吨/年)，C3 产业链起步', tag: '里程碑' },
            { year: '2017', event: '在连云港徐圩新区设立连云港石化，启动 C2 战略', tag: '战略' },
            { year: '2021-05', event: '连云港 C2 一阶段投产 (乙烷裂解 125 万吨/年)', tag: '里程碑' },
            { year: '2021', event: '业绩 285.57 亿 +165% / 归母 60.07 亿 +262%', tag: '业绩' },
            { year: '2022-08', event: '连云港 C2 二阶段开车成功，合计 250 万吨乙烷裂解', tag: '里程碑' },
            { year: '2024-06', event: 'α-烯烃高端材料产业园项目启动 (266 亿，分两阶段)', tag: '战略' },
            { year: '2024', event: '营收 456 亿 / 归母 60.72 亿历史新高 / ROE 21.87%', tag: '业绩' },
            { year: '2025-04', event: '美国对华关税 84% + BIS 5-23 将乙烷列入许可', tag: '危机' },
            { year: '2025-04-27', event: '启动 4 亿元回购 (上限价 29.50 元)', tag: '资本' },
            { year: '2025-05', event: 'POE 中试 500-600 吨/年获批', tag: '产品' },
            { year: '2025-07-02', event: 'BIS 撤销对华乙烷出口许可要求 · 危机解除', tag: '里程碑' },
            { year: '2025-07-31', event: '已回购 1207.84 万股 (2.18 亿)，价区 17.10-18.90', tag: '资本' },
            { year: '2026-04-13', event: '股价 30.29 元 · 市值首破千亿', tag: '里程碑' },
            { year: '2026-04-21', event: '2025 年报 + Q1\'26 同披露：Q1 归母 +34.97%', tag: '业绩' },
            { year: '2026-04-29', event: '股价 29.00 元 · 市值 ~977 亿', tag: '当前' },
        ],
        businessModel:
            '**"美国乙烷套利 + C3 龙头 + α-烯烃高端化"三轮驱动**：①**C2 产业链 (连云港)**：进口美国乙烷 → 250 万吨/年裂解 → 聚乙烯 80 万吨 + EO/EG 219 万吨 + 苯乙烯 60 万吨 + 聚醚大单体 50 万吨；气头路线吨成本比石脑油低 ¥1,500-3,000，全球第一梯队；②**C3 产业链 (平湖)**：PDH 90 万吨 (三期到 180 万吨) → 丙烯酸 84 万吨 (国内市占 20.59% 第一) + SAP 15 万吨 (全球前 5) + 丙烯酸酯 + 乳液；③**α-烯烃 + POE (连云港)**：2024-06 启动总投资 266 亿的高端材料产业园，2026 年初一阶段投产 + 2026 年底二阶段（含 60 万吨 POE）。**核心物流壁垒**：14 艘 + 4 艘新建 VLEC 船队（全球最大）+ ORBIT 出口码头 50% 股权 + Energy Transfer 长协 17.5 万桶/日。',
        revenueMix: [
            { name: '功能化学品 (C3：丙烯酸/SAP/酯/乳液)', pct: 56, note: '2025 ¥258.74 亿 (+19.19%)' },
            { name: '高分子新材料 (PE/EO-EG/苯乙烯)', pct: 19, note: '2025 ¥87.62 亿 (-26.91%) · 周期承压' },
            { name: '新能源材料', pct: 1.5, note: '2025 ¥6.91 亿' },
            { name: '其他 (含中间品销售)', pct: 23.5, note: '~¥107 亿' },
        ],
    },

    team: [
        {
            name: '杨卫东',
            role: '副董事长 · 浙江卫星控股董事兼总经理',
            background:
                '1968 年生，公司创始人。2005 年在嘉兴平湖创立卫星石化，2011 创业板上市；2017 决策启动连云港 C2 战略 (335 亿赌局)；2024 启动 α-烯烃园（266 亿）。技术派 + 战略豪赌型创始人，过去 20 年从 50 亿做到 977 亿 (19x)，在 A 股化工创始人中执行力第一梯队。',
            since: '2005',
            rating: 5,
        },
        {
            name: '杨亚珍',
            role: '董事长 · 实控人之一',
            background:
                '杨卫东之妻，与杨卫东共同控股 50.4%。董事长身份是 A 股化工龙头中少见的"夫妻共治"。',
            rating: 4,
        },
        {
            name: '李大伟 (CFO)',
            role: '财务总监',
            background:
                '负责财务管理 + 资本市场关系。2025 年回购 + 分红 + 资产负债率从 64% 降至 51.74% 是其战果。',
            rating: 4,
        },
        {
            name: '宋志强 (副总裁)',
            role: '连云港基地 + C2 业务',
            background:
                '主管连云港 C2 大本营 + α-烯烃园项目执行。2021/2022 一二阶段顺利投产是关键工程战果。',
            rating: 4,
        },
        {
            name: '研发团队 (POE / α-烯烃自主)',
            role: '高端聚烯烃技术突破',
            background:
                'POE 中试 500-600 吨/年自主突破，α-烯烃自主路线打破美国 / 韩国垄断。但工业化进度落后万华 18-24 个月。',
            rating: 3,
        },
    ],

    shareholders: [
        { name: '浙江卫星控股 (杨卫东 + 杨亚珍)', pct: '~50.4%', type: '实控人', note: '夫妻共治 · 控制权稳固' },
        { name: '陆股通 (北上资金)', pct: '~6-8%', type: '外资', note: '过去 5 年持续增持' },
        { name: '社保基金 + 公募 + 险资', pct: '~10-13%', type: '机构', note: 'A 股化工成长股标配' },
        { name: '回购专户 (库存股)', pct: '~0.36%', type: '回购', note: '2025-07 已回购 1207.84 万股' },
        { name: '公众流通股', pct: '~28-32%', type: '散户 + 私募', note: '日均成交 ¥10-30 亿 · 流动性好' },
    ],

    advantages: [
        {
            title: '"美国乙烷 + 中国裂解" 全球独家成本曲线 (壁垒 ★★★★★)',
            body: '14 艘 + 4 艘新建 VLEC（全球最大船队）+ ORBIT 50%（与 Energy Transfer 合资美国出口码头）+ 长协 17.5 万桶/日 ≈ 300 万吨/年，国内独家成本套利模型；乙烯吨成本比石脑油低 ¥1,500-3,000。',
            evidence: 'STL Shipping 船队信息 + ORBIT 公司公告 + 卫星 C2 装置利润数据',
        },
        {
            title: '2024 ROE 21.87% · 化工 A 股最高之一 (盈利质量 ★★★★★)',
            body: '2024 加权 ROE 21.87% 同比 +2.18pct · 远超万华 14.29% / 恒力 8% / 荣盛 5%。资产负债率 51.74% 也低于万华 64.7%。盈利质量 + 财务稳健性双优。',
            evidence: '2024 / 2025 年报；东方财富 F10 数据',
        },
        {
            title: 'C3 全球 SAP 龙头 + 国内丙烯酸第一 (规模 ★★★★)',
            body: '丙烯酸 84 万吨/年 国内市占 20.59% 第一（第二名泰兴盛科 48 万吨）；SAP 15 万吨与日本触媒 / 巴斯夫 / 赢创并列全球前 5；C3 是稳定现金流主源。',
            evidence: '中国产业研究院 + 卓创资讯',
        },
        {
            title: 'α-烯烃自主 + POE 60 万吨规划 (二曲线 ★★★★)',
            body: 'α-烯烃综合利用高端新材料产业园 266 亿总投资：一阶段 (2026 初投产 PE 90 + α-烯烃 20) + 二阶段 (2026 底 POE 60 + α-烯烃 30)；UHMWPE / mPE / PAO 全产品线国产替代。',
            evidence: '公司公告；α-烯烃园项目环评公示',
        },
        {
            title: 'Q1\'26 +34.97% 归母 · 业绩拐点确认 (动量 ★★★★)',
            body: '2026 Q1 营收 126.77 亿 +2.82% / 归母 21.17 亿 +34.97% / 扣非 +15.47% / OCF +38.31% / 境外 +45.3%；中东油价上行 + 美国乙烷宽松，气头剪刀差打开。',
            evidence: '2026 Q1 季报',
        },
        {
            title: '管理层回购成本 17.10-18.90 元 (信心 ★★★★)',
            body: '2025-04-27 启动 4 亿元回购 (上限价 29.50)；7 月底已回购 1207 万股 (2.18 亿)；当前 29.00 已较回购成本翻倍 → 管理层信心 + 事实意义上的"成本基准"。',
            evidence: '2025-04-27 / 2025-08-04 公司公告',
        },
        {
            title: 'PE 18.4x · PB 1.9x · 估值合理 (估值 ★★★)',
            body: '当前 PE TTM 18.4x · PE 按 Q1 年化 11.5x · PB 1.9x · 太平洋目标价 32.25 / 国海 33.52 · 隐含上行 11-15%；非便宜但非昂贵。',
            evidence: '太平洋 / 国海 / 国信研报',
        },
    ],

    disadvantages: [
        {
            title: '美国乙烷出口管控是估值最大折价因子',
            body: '2025-04 美国关税 84% + 5-23 BIS 列乙烷为许可商品 + 7-2 解禁，已"充分演练"。但 14 艘 VLEC + ORBIT 50% + 加工贸易方案都不能根本对冲国别风险；未来 5 年若中美升级，C2 板块利润直接归零。',
            evidence: '2025-04 至 2025-07 关税链事件',
        },
        {
            title: 'POE 落后万华 18-24 个月 (结构性差距)',
            body: '万华 POE 60 万吨 (2024-06 投 20 万吨已稳定运行 + 2025 末蓬莱二期 40 万吨)；卫星 POE 中试 500-600 吨/年，工业化要等 2026 年底；落后一个完整产品周期 + 错过 2025 光伏抢装窗口。',
            evidence: '万华 vs 卫星 POE 项目时间表对比',
        },
        {
            title: '2025 净利同比 -12.54% · 周期下行已显现',
            body: '2025 全年归母 53.11 亿 -12.54% (虽扣非 +4%)；2025 H2 油价下行使产品价格承压，气头 alpha 也未能完全免疫。',
            evidence: '2025 年报',
        },
        {
            title: 'POE 国产化 2026-2027 转过剩风险',
            body: '万华 60 万吨 + 卫星 60 万吨 + 茂名石化 + 其他在建 = 2027 国内 POE 200+ 万吨；光伏胶膜需求若放缓将引发价格战，毛利率从 30% 跌到 8% 不是不可能。',
            evidence: '行业研报 POE 产能规划汇总',
        },
        {
            title: '总投资 1,000+ 亿在建 · CapEx 周期高位',
            body: 'α-烯烃园 266 亿 + 连云港联合 592 亿 + 绿色新材料三期 150 亿 ≈ 1,000+ 亿；若周期复苏不及预期 + POE 价格战，IRR 兑现压力大。',
            evidence: '公司公告 + 研报项目数据',
        },
        {
            title: '估值已包含 α-烯烃投产预期 (左侧机会消失)',
            body: 'YTD +71% 涨幅 + 2026-04-13 历史高 30.29 元已经定价"α-烯烃投产 + POE 二期"，回购成本 17.10-18.90 已远去；当前 29.00 是右侧持仓 vs 左侧布局的分歧。',
            evidence: '股价历史',
        },
        {
            title: '杨卫东家族 50.4% 控股 · 治理透明度有限',
            body: '夫妻共治 + 高度集中控股 + 独董制衡有限；战略由家族驱动，市值管理偶有粗糙；信息披露质量不如万华标杆。',
            evidence: '股东结构 + 历年沟通质量',
        },
    ],

    shortTermCatalysts: [
        {
            when: '2026 Q1 (已发生)',
            event: 'α-烯烃园一阶段投产 (PE 90 万吨 + α-烯烃 20 万吨)',
            impact: 'positive',
            probability: '~95%',
            magnitude: '+10-15%',
        },
        {
            when: '2026 H2',
            event: 'α-烯烃园一阶段满产爬坡 + 中报验证 Q1 +34.97% 趋势',
            impact: 'mixed',
            probability: '已确认',
            magnitude: '±15-25%',
        },
        {
            when: '2026 Q4',
            event: 'α-烯烃园二阶段建成 (含 60 万吨 POE 工业化关键)',
            impact: 'positive',
            probability: '~80%',
            magnitude: '+12-18%',
        },
        {
            when: '2027 H1',
            event: 'POE 二期满产 + 商业化销售验证',
            impact: 'mixed',
            probability: '~70%',
            magnitude: '±15-20%',
        },
        {
            when: '2026-2027',
            event: '连云港 PE/EOE/ACN 联合装置爬产 + 高端新材料贡献',
            impact: 'positive',
            probability: '~75%',
            magnitude: '+8-12%',
        },
        {
            when: '任何时点',
            event: '中美乙烷管控升级 (BIS 再次列入许可清单)',
            impact: 'negative',
            probability: '~15% / 年',
            magnitude: '-25-40%',
        },
        {
            when: '任何时点',
            event: 'POE 全行业价格战 (万华 + 卫星 + 茂名共振)',
            impact: 'negative',
            probability: '~30% / 2 年',
            magnitude: '-15-20%',
        },
        {
            when: '任何时点',
            event: '原油剧烈下行 (低油价压制气头价差)',
            impact: 'mixed',
            probability: '~50%',
            magnitude: '±10-15%',
        },
        {
            when: '任何时点',
            event: '连云港 / 嘉兴 / 平湖装置重大安全事故',
            impact: 'negative',
            probability: '~5% / 年',
            magnitude: '-15-25%',
        },
    ],

    longTermDrivers: [
        {
            name: 'α-烯烃高端聚烯烃国产替代',
            horizon: '2026-2032',
            body: '中国高端聚烯烃 (POE / mPE / UHMWPE / PAO) 90%+ 依赖进口，TAM ¥1,000+ 亿；卫星 α-烯烃自主路线 + 60 万吨 POE 是国产替代核心力量；2030 公司高端聚烯烃营收有望破 ¥200 亿。',
            enabling: 'α-烯烃自研工艺 + 美国乙烷低成本原料 + 光伏 / 新能源车 / 高端制造下游需求',
        },
        {
            name: 'C3 全球 SAP 龙头地位巩固',
            horizon: '2026-2032',
            body: '全球 SAP 市场 600+ 亿元，年增 5%；纸尿裤 + 卫生护理 + 农业保水剂三大应用稳健。卫星 SAP 15 万吨 + 全球前 5 + 出海高端市场（北美 / 欧洲）。',
            enabling: '丙烯酸一体化成本 + 高纯化工艺 + 全球客户认证',
        },
        {
            name: '气头路线 vs 油头路线长期套利',
            horizon: '2026-2030',
            body: '美国页岩气革命使乙烷长期富余 (EIA 预测 2026 产量 300 万桶/日 + 中国吸收 45%)，乙烷-石脑油价差长期存在；卫星气头路线吨成本壁垒可持续。',
            enabling: '美国页岩气 + VLEC 物流 + ORBIT 长协 + 中国乙烷关税从 2% 降至 1%',
        },
        {
            name: '海外业务拓展 (北美 / 东南亚)',
            horizon: '2027-2033',
            body: '2026 Q1 境外收入 +45.3%，海外 SAP / 高端聚烯烃出口高速增长；未来不排除在墨西哥 / 东南亚布局本地化生产对冲关税。',
            enabling: '人民币贬值 + 中国制造业出海 + 一带一路化工合作',
        },
        {
            name: '电池材料 + 新能源价值链延伸',
            horizon: '2027-2033',
            body: '连云港规划 75 万吨/年碳酸酯（动力电池电解液原料）+ POE (光伏胶膜原料) + UHMWPE (锂电池隔膜原料)；卫星正从化工龙头扩展到电池材料供应商。',
            enabling: '新能源车 + 储能行业 CAGR 15%+ + 卫星化工原料协同',
        },
        {
            name: '"中国版陶氏 / LyondellBasell" 估值切换',
            horizon: '2028-2033',
            body: '若 ROE 能维持 18%+ + 高端聚烯烃破 30% 营收 + 海外占比 20%+，估值切换至 PE 18-22x，对应市值 ¥3,000+ 亿；这是从"周期成长股"到"全球高端聚烯烃平台"的路径。',
            enabling: '行业地位 + 新材料兑现 + 国际化 + 治理改善',
        },
    ],

    riskMatrix: [
        {
            category: '地缘 / 国别风险',
            level: 'critical',
            summary: '美国乙烷出口管控是最大单点风险',
            items: [
                {
                    name: '中美关税战升级',
                    body: '2025-04 美国对华关税 84%；若 2026-2028 进一步升级到 100%+ 或对乙烷加征报复关税，C2 板块利润 (~50% 公司利润) 直接腰斩。',
                    mitigation: '14 艘 VLEC + ORBIT 长协 + 加工贸易方案 + 中国乙烷关税降至 1% 鼓励进口',
                },
                {
                    name: 'BIS 出口管制再次启动',
                    body: '2025-05-23 BIS 已经将乙烷列为许可商品 (7-2 撤销)；任何未来再次启动都会冲击 C2 业务连续性。',
                    mitigation: '2025 演练后公司已建立应急方案 + 美国乙烷中国吸收占其出口 45% 是双向依赖',
                },
                {
                    name: '美国乙烷供应中断',
                    body: '飓风 / 恐袭 / 基础设施事故等极端事件可能短期 (1-3 月) 中断美国乙烷出口；连云港 250 万吨闲置成本巨大。',
                    mitigation: '14+4 艘 VLEC + 多源采购 + 库存储备',
                },
            ],
        },
        {
            category: '产品 / 周期风险',
            level: 'high',
            summary: 'POE 价格战 + C2/C3 价差波动',
            items: [
                {
                    name: 'POE 国产化转过剩',
                    body: '2027 国内 POE 产能 200+ 万吨 (万华 60 + 卫星 60 + 茂名 + 其他)；光伏胶膜需求若放缓将引发价格战。',
                    mitigation: 'α-烯烃自研路线长期成本优势 + 光伏 + 新能源车 + 高端制造多应用',
                },
                {
                    name: '气头-油头价差关闭',
                    body: '低油价 + 高乙烷价 (美国页岩气拐点) 会使气头优势消失；2014-2016 油价崩盘期卫星利润大幅下滑。',
                    mitigation: '美国页岩气长期富余 + 中国产能扩张吸收价格 + C3 板块对冲',
                },
                {
                    name: 'SAP 全球价格战',
                    body: '日本触媒 / 巴斯夫 / 赢创对冲产能扩张；新兴市场 SAP 进入低价竞争。',
                    mitigation: '一体化成本 + 全球客户认证 + 高纯化工艺',
                },
            ],
        },
        {
            category: '财务 / 资本结构',
            level: 'medium',
            summary: 'CapEx 周期高位 + 1,000+ 亿在建',
            items: [
                {
                    name: '在建项目超 ¥1,000 亿',
                    body: 'α-烯烃园 266 亿 + 连云港联合 592 亿 + 绿色新材料三期 150 亿；若周期复苏不及预期，IRR 兑现压力大。',
                    mitigation: '资产负债率 51.74% 健康 + Q1\'26 OCF +38% + 分红率 35.7% 平衡',
                },
                {
                    name: '回购成本基准已被超越',
                    body: '回购价区 17.10-18.90 vs 当前 29.00 已翻倍；管理层信号已弱化。',
                    mitigation: '2026-2027 业绩兑现可重启回购',
                },
            ],
        },
        {
            category: '运营 / 安全风险',
            level: 'high',
            summary: '化工大装置 + 乙烷储罐安全',
            items: [
                {
                    name: '连云港装置重大事故',
                    body: '250 万吨乙烷裂解 + 大型乙烷储罐 + 危险化学品；任何重大安全或环保事件都会引发停产 6-18 月 + 监管处罚。',
                    mitigation: 'HSE 体系 + 多基地分散 + 备用储罐',
                },
                {
                    name: '环保突袭与中央政策',
                    body: '中国环保政策迭代快，化工龙头是常态化检查对象。',
                    mitigation: '环保投入 + 一体化园区设计 + 政府关系',
                },
            ],
        },
        {
            category: '竞争 / 战略风险',
            level: 'medium',
            summary: 'POE 落后万华 18-24 月 + 高端市场后来者',
            items: [
                {
                    name: 'POE 商业化时间窗口压力',
                    body: '2025 光伏胶膜需求高峰已被万华吃下；卫星 2026-2027 进入时市场竞争更激烈。',
                    mitigation: 'α-烯烃自研可能更具成本优势 + 60 万吨规模化效应',
                },
                {
                    name: '高端聚烯烃 (UHMWPE/mPE/PAO) 后来者',
                    body: '陶氏 / LG 化学 / 三井化学等国际巨头在高端市场壁垒厚；客户认证 1-2 年起步。',
                    mitigation: '一体化成本 + 国产替代政策红利',
                },
            ],
        },
        {
            category: '治理 / 关键人',
            level: 'medium',
            summary: '杨卫东家族 50.4% 集中控股',
            items: [
                {
                    name: '夫妻共治 + 高度集中控股',
                    body: '杨卫东 + 杨亚珍 50.4% 控股；独董制衡相对有限；战略由家族驱动。',
                    mitigation: 'A 股监管框架 + 杨卫东长期主义 (20 年从 50 亿做到 977 亿)',
                },
                {
                    name: '杨卫东接班机制',
                    body: '杨卫东 1968 年生 (58 岁)，未来 5-10 年接班机制公开信息有限。',
                    mitigation: '专业团队建制成熟 + 子公司治理',
                },
            ],
        },
        {
            category: 'ESG / 监管',
            level: 'low',
            summary: '碳排 + 化学品安全',
            items: [
                {
                    name: '欧盟 CBAM 碳关税',
                    body: '2026-2034 逐步实施，对中国出口化工品征收碳税；卫星 SAP / 高端聚烯烃出口在影响清单。',
                    mitigation: '减碳投入 + 海外本地化生产对冲',
                },
                {
                    name: 'REACH / TSCA 化学品监管',
                    body: '欧美对部分化学品长期审查。',
                    mitigation: '产品组合多元化',
                },
            ],
        },
    ],

    profitability: {
        narrative:
            '卫星化学是**"气头路线 × C3 龙头 × 高 ROE"的差异化化工平台**。**核心特征**：盈利与"乙烷-乙烯价差 + 油价 + SAP 全球需求"三重周期相关；**2024 ROE 21.87% 是化工 A 股最高之一**（万华 14.29% / 恒力 8% / 荣盛 5%）。**关键观察**：① Q1\'26 +34.97% 反转持续性 ② α-烯烃园 IRR 兑现 ③ POE 工业化时间表与价格战。',

        incomeStatement: [
            {
                year: '2021',
                revenue: '¥285.57 亿',
                revenueNum: 28557,
                grossMargin: '32%',
                opIncome: '¥75 亿',
                ebitda: '¥85 亿',
                ebitdaMargin: '30%',
                netIncome: '¥60.07 亿',
                eps: '1.78',
                status: 'actual',
            },
            {
                year: '2022',
                revenue: '¥370.44 亿',
                revenueNum: 37044,
                grossMargin: '15%',
                opIncome: '¥40 亿',
                ebitda: '¥55 亿',
                ebitdaMargin: '15%',
                netIncome: '¥30.96 亿',
                eps: '0.92',
                status: 'actual',
            },
            {
                year: '2023',
                revenue: '¥407.40 亿',
                revenueNum: 40740,
                grossMargin: '18%',
                opIncome: '¥60 亿',
                ebitda: '¥80 亿',
                ebitdaMargin: '20%',
                netIncome: '¥48.02 亿',
                eps: '1.42',
                status: 'actual',
            },
            {
                year: '2024',
                revenue: '¥456.48 亿',
                revenueNum: 45648,
                grossMargin: '22%',
                opIncome: '¥75 亿',
                ebitda: '¥100 亿',
                ebitdaMargin: '22%',
                netIncome: '¥60.72 亿',
                eps: '1.80',
                status: 'actual',
            },
            {
                year: '2025',
                revenue: '¥460.68 亿',
                revenueNum: 46068,
                grossMargin: '22%',
                opIncome: '¥68 亿',
                ebitda: '¥95 亿',
                ebitdaMargin: '21%',
                netIncome: '¥53.11 亿',
                eps: '1.58',
                status: 'actual',
            },
            {
                year: '2026E',
                revenue: '¥580 亿 (+26%)',
                revenueNum: 58000,
                grossMargin: '24%',
                opIncome: '¥95 亿',
                ebitda: '¥130 亿',
                ebitdaMargin: '22%',
                netIncome: '¥75 亿',
                eps: '2.23',
                status: 'guidance',
            },
            {
                year: '2027E',
                revenue: '¥700 亿 (+21%)',
                revenueNum: 70000,
                grossMargin: '25%',
                opIncome: '¥120 亿',
                ebitda: '¥160 亿',
                ebitdaMargin: '23%',
                netIncome: '¥95 亿',
                eps: '2.82',
                status: 'estimate',
            },
        ],

        marginEvolution: [
            { year: '2021', gross: 32, ebitda: 30, operating: 26, net: 21, status: 'actual' },
            { year: '2022', gross: 15, ebitda: 15, operating: 11, net: 8.4, status: 'actual' },
            { year: '2023', gross: 18, ebitda: 20, operating: 15, net: 11.8, status: 'actual' },
            { year: '2024', gross: 22, ebitda: 22, operating: 16, net: 13.3, status: 'actual' },
            { year: '2025', gross: 22, ebitda: 21, operating: 15, net: 11.5, status: 'actual' },
            { year: '2026E', gross: 24, ebitda: 22, operating: 16, net: 12.9, status: 'guidance' },
            { year: '2027E', gross: 25, ebitda: 23, operating: 17, net: 13.6, status: 'estimate' },
        ],

        milestones: [
            { year: '2011', milestone: '深交所创业板上市', hit: true },
            { year: '2013', milestone: 'PDH 一期 45 万吨投产', hit: true },
            { year: '2021-05', milestone: '连云港 C2 一阶段乙烷裂解 125 万吨投产', hit: true },
            { year: '2022-08', milestone: 'C2 二阶段开车 · 合计 250 万吨', hit: true },
            { year: '2024', milestone: '营收 456 亿 / 归母 60.72 亿历史新高', hit: true },
            { year: '2026 Q1', milestone: 'α-烯烃园一阶段投产 (PE 90 + α-烯烃 20)', hit: false, note: '关键里程碑' },
            { year: '2026 Q4', milestone: 'α-烯烃园二阶段建成 (POE 60 万吨)', hit: false, note: 'POE 工业化关键' },
            { year: '2027', milestone: '高端聚烯烃营收破 ¥150 亿', hit: false, note: '二曲线验证' },
            { year: '2028-2030', milestone: 'ROE 维持 18%+ · 估值切换至"高端平台"溢价', hit: false },
        ],

        unitEconomics: [
            { metric: '2025 总营收', value: '¥460.68 亿', source: '2025 年报' },
            { metric: 'EPS (2025)', value: '1.58 元', source: '2025 年报 (推算)' },
            { metric: '2024 加权 ROE', value: '21.87%', source: '2024 年报' },
            { metric: '2025 毛利率', value: '22.31%', source: '2025 年报' },
            { metric: '连云港 C2 产能', value: '250 万吨/年乙烷裂解', source: '一+二阶段' },
            { metric: '丙烯酸国内市占', value: '20.59% (84 万吨/年)', source: '中国产业研究院' },
            { metric: 'SAP 产能', value: '15 万吨/年 (全球前 5)', source: '行业研报' },
            { metric: '2025 OCF', value: '¥69.86 亿 (推算 2024 数据)', source: '2024 年报' },
        ],

        fcfPath:
            '2024-2025 OCF ¥70-100 亿 / CapEx ¥80-150 亿 → FCF 短期持平到微负。**关键拐点**：2027 后 α-烯烃园全部投产 + 连云港联合装置爬产，CapEx 从 ¥150 亿/年 降至 ¥80 亿/年，FCF 跳升至 ¥150-200 亿/年。叠加 ROE 维持 18%+，公司将进入"重资产投入期 → 现金奶牛期"切换。',

        keyRisks: [
            'POE 价格战导致 2027-2028 毛利率从 25% 跌到 15%，归母腰斩',
            '美国乙烷断供 6 月+ 触发巨额减值 + 信用评级下调',
            '原油剧烈下行 (低油价) 关闭气头-油头价差，C2 板块利润压缩',
            'SAP 全球价格战 (日本触媒 / 巴斯夫扩产) 压缩 C3 板块毛利率',
        ],
    },

    competitiveLandscape: {
        summary:
            '中国 C2/C3 化工龙头格局：①**万华化学** = MDI 全球第一 + POE 已规模化（直接对手）；②**卫星化学** = 气头路线 + 全球 SAP 龙头 + α-烯烃在建（差异化）；③**恒力 / 荣盛 / 东方盛虹** = 大炼化集团（不同赛道）；④**陶氏 / LyondellBasell** = 全球聚烯烃龙头（国际对照）。**结构性变化**：①Covestro 私有化 → 万华受益；②美国页岩气长期富余 → 卫星气头壁垒可持续；③国内高端聚烯烃国产替代提速。**真正的 10x 对手**是 "中国版陶氏 / LyondellBasell"——气头 + 高端聚烯烃 + 全球化的三位一体。',

        competitors: [
            {
                name: '卫星化学 (自身)',
                type: 'specialist',
                ticker: 'SZ:002648',
                revenue2026E: '¥580 亿',
                aiRevenue: '¥58B',
                gpuFleet: '连云港 250 万吨乙烷裂解 + 14+4 VLEC',
                backlog: 'α-烯烃园 266 亿 + 连云港联合 592 亿',
                ebitdaMargin: '~22%',
                marketCap: '¥977 亿',
                nvidiaLevel: 4,
                threat: 'low',
                strength: '气头路线全球第一梯队 · ROE 21.87% · SAP 全球前 5 · 资产负债率 51.74%',
                weakness: 'POE 落后万华 18-24 月 · 美国乙烷国别风险 · 50% 集中控股',
            },
            {
                name: '万华化学 (POE 直接对手)',
                type: 'hyperscaler',
                ticker: 'SH:600309',
                revenue2026E: '¥2,300 亿',
                aiRevenue: '¥230B',
                gpuFleet: 'MDI 380→450 万吨 · 全球四基地',
                backlog: '福建二期 + 蓬莱基地 + LFP',
                ebitdaMargin: '~15%',
                marketCap: '¥2,801 亿',
                nvidiaLevel: 5,
                threat: 'high',
                strength: 'MDI 全球第一 33.8% · POE 60 万吨 (领先卫星 18-24 月) · 海外 47%',
                weakness: 'ROE 14.29% (低于卫星) · 资产负债率 64.7% · 中国地产 β',
            },
            {
                name: '恒力石化',
                type: 'hyperscaler',
                ticker: 'SH:600346',
                revenue2026E: '¥2,300 亿',
                aiRevenue: '¥230B',
                gpuFleet: '炼化一体化 + PTA + 烯烃',
                backlog: '大连大型炼化 + 聚酯',
                ebitdaMargin: '~10%',
                marketCap: '~¥1,200 亿',
                nvidiaLevel: 3,
                threat: 'low',
                strength: '炼化一体化规模 + PTA 龙头',
                weakness: 'ROE 8% · 周期低位 · 无高端材料布局',
            },
            {
                name: '荣盛石化',
                type: 'hyperscaler',
                ticker: 'SZ:002493',
                revenue2026E: '¥3,000+ 亿',
                aiRevenue: '¥300B',
                gpuFleet: '浙石化 4000 万吨炼化',
                backlog: '舟山一体化 + 化工新材料',
                ebitdaMargin: '~9%',
                marketCap: '~¥1,000 亿',
                nvidiaLevel: 3,
                threat: 'low',
                strength: '浙石化 4000 万吨规模 · 沙特阿美战投',
                weakness: 'ROE 5% · 周期底部 · 高负债',
            },
            {
                name: '东方盛虹',
                type: 'specialist',
                ticker: 'SZ:000301',
                revenue2026E: '¥1,500+ 亿',
                aiRevenue: '¥150B',
                gpuFleet: '盛虹炼化 1600 万吨 + EVA 光伏材料',
                backlog: '高端材料延伸',
                ebitdaMargin: '~8%',
                marketCap: '~¥600 亿',
                nvidiaLevel: 3,
                threat: 'low',
                strength: 'EVA 光伏材料龙头',
                weakness: '炼化负担大 · 周期底部',
            },
            {
                name: '陶氏 (Dow)',
                type: 'hyperscaler',
                ticker: 'NYSE:DOW',
                revenue2026E: '$45B',
                aiRevenue: '$45B',
                gpuFleet: '全球聚烯烃龙头',
                backlog: 'POE 全球第一 + 硅材料',
                ebitdaMargin: '~12%',
                marketCap: '~$28B',
                nvidiaLevel: 5,
                threat: 'medium',
                strength: '北美天然气优势 · 全球 POE 龙头 · 客户网络深',
                weakness: '增长慢 · 估值 PE 10-12x',
            },
            {
                name: 'LyondellBasell',
                type: 'hyperscaler',
                ticker: 'NYSE:LYB',
                revenue2026E: '$40B',
                aiRevenue: '$40B',
                gpuFleet: '全球聚烯烃 + 烯烃龙头',
                backlog: '高端聚烯烃 + 循环经济',
                ebitdaMargin: '~10%',
                marketCap: '~$30B',
                nvidiaLevel: 5,
                threat: 'medium',
                strength: 'PP / PE 全球前列 · 北美天然气 · 现金流强',
                weakness: '增长慢 · 中国市场份额下降',
            },
            {
                name: 'LG 化学',
                type: 'hyperscaler',
                ticker: 'KRX:051910',
                revenue2026E: 'KRW 50T',
                aiRevenue: '$36B',
                gpuFleet: 'POE 全球第三 + 电池材料',
                backlog: 'POE 50 万吨 + 锂电正极',
                ebitdaMargin: '~9%',
                marketCap: '~$20B',
                nvidiaLevel: 4,
                threat: 'medium',
                strength: 'POE 全球第三 (被万华超越) · 电池材料绑定 LG 能源',
                weakness: '增长慢 · 韩国市场依赖',
            },
        ],

        positioning: [
            { dimension: '气头路线产能', nebius: '250 万吨 (全球前 5)', industryAvg: '50-100 万吨', leader: '卫星 (自己)', nebiusStrong: true },
            { dimension: '2024 ROE', nebius: '21.87%', industryAvg: '8-15%', leader: '卫星', nebiusStrong: true },
            { dimension: '资产负债率', nebius: '51.74%', industryAvg: '60-70%', leader: '卫星', nebiusStrong: true },
            { dimension: 'C3 (丙烯酸) 国内份额', nebius: '20.59% 第一', industryAvg: '5-10%', leader: '卫星', nebiusStrong: true },
            { dimension: 'POE 已投产产能', nebius: '中试 500-600 吨', industryAvg: '0', leader: '陶氏 / 万华', nebiusStrong: false },
            { dimension: 'VLEC 船队', nebius: '14+4 艘 (全球最大)', industryAvg: '0-5 艘', leader: '卫星', nebiusStrong: true },
            { dimension: '海外营收占比', nebius: '~10%', industryAvg: '20-30%', leader: 'LyondellBasell 60%', nebiusStrong: false },
            { dimension: '估值 (PE TTM)', nebius: '18.4x', industryAvg: '10-20x', leader: '陶氏 10x', nebiusStrong: false },
            { dimension: '估值 (PB)', nebius: '1.9x', industryAvg: '1.0-3.0x', leader: '陶氏 1.0x', nebiusStrong: false },
            { dimension: '市值', nebius: '¥977 亿', industryAvg: '¥600-2,000 亿', leader: '万华 ¥2,801 亿', nebiusStrong: false },
        ],

        marketShare2026: [
            { name: '万华化学', pct: 18 },
            { name: '恒力石化', pct: 14 },
            { name: '荣盛石化', pct: 13 },
            { name: '东方盛虹', pct: 9 },
            { name: '卫星化学', pct: 7 },
            { name: '陶氏 (中国市场)', pct: 6 },
            { name: 'LyondellBasell (中国市场)', pct: 5 },
            { name: '其他 (中石化 / 中石油 / 等)', pct: 28 },
        ],

        winLoss: [
            {
                scenario: '中国 C3 市场 (丙烯酸 / SAP)',
                winners: '卫星化学 (绝对龙头 20.59%)',
                losers: '泰兴盛科 / 中石油 / 其他',
                reasoning: '卫星 84 万吨丙烯酸 vs 第二名 48 万吨，规模 + 一体化成本压倒',
            },
            {
                scenario: '中国 C2 气头路线',
                winners: '卫星化学 (国内独家)',
                losers: '石脑油路线厂商',
                reasoning: '14 艘 VLEC + ORBIT 50% 是国内唯一的"美国乙烷套利模型"',
            },
            {
                scenario: '中国 POE 市场 (光伏胶膜)',
                winners: '万华化学 (60 万吨已投 + 蓬莱二期)',
                losers: '卫星 (落后 18-24 月)',
                reasoning: '万华 2024-06 投 20 万吨 + 2025 末 40 万吨；卫星 2026 底才工业化',
            },
            {
                scenario: '中国高端聚烯烃 (UHMWPE/mPE/PAO)',
                winners: '陶氏 / LyondellBasell / LG 化学 (现有)',
                losers: '中国厂商 (后来者)',
                reasoning: '客户认证 + 工艺壁垒 1-2 年，国际巨头领先 5-10 年',
            },
            {
                scenario: '全球 SAP 高端市场',
                winners: '日本触媒 / 巴斯夫 / 卫星',
                losers: '其他厂商',
                reasoning: '卫星 SAP 15 万吨全球前 5，与日本触媒 / 巴斯夫 / 赢创并列',
            },
            {
                scenario: '全球乙烷出口物流',
                winners: 'Energy Transfer + 卫星 ORBIT 50%',
                losers: '其他厂商',
                reasoning: 'ORBIT 是美国主要乙烷出口码头之一 + 长协 17.5 万桶/日',
            },
            {
                scenario: '中国炼化一体化',
                winners: '恒力 / 荣盛 / 东方盛虹',
                losers: '卫星 (不是主战场)',
                reasoning: '炼化是不同赛道，卫星专注气头 + 高端材料',
            },
            {
                scenario: 'MDI / 异氰酸酯',
                winners: '万华化学 (全球第一 33.8%)',
                losers: '卫星 (无 MDI 业务)',
                reasoning: '万华 MDI 是绝对垄断地位，卫星无相关业务',
            },
        ],

        structuralTrend:
            '未来 3 年行业结构性变化：①**美国页岩气长期富余** (EIA 预测 2026 产量 300 万桶/日) 给卫星气头路线提供长期成本优势；②**中美关税摩擦常态化** 但 2025 BIS 演练后管控触发概率下降，乙烷已纳入"双向依赖"；③**POE 国产化提速** (万华 60 + 卫星 60 + 茂名等)，2027 年可能从紧平衡转过剩，价格战风险显著；④**高端聚烯烃国产替代** 是 5-10 年级机会 (TAM ¥1,000+ 亿)，卫星 + 万华是双龙头；⑤**碳关税 (CBAM)** 改变全球化工流通格局，海外本地化生产成为长期议题。**关键命题**：卫星能否在"气头守 + α-烯烃攻 + 海外拓"的三战线同时赢下，决定它是停在"中国差异化化工龙头" (¥1,500 亿) 还是切换到"中国版陶氏" (¥3,000+ 亿)。',

        tam: {
            narrative:
                '全球聚烯烃市场 2025 ~$300B；中国市场约 1/3 即 ~¥7,000 亿。卫星 C2 + C3 + 新材料合计 2025 营收 ¥460 亿，全球聚烯烃份额 ~1.5%；2030 目标 ¥800 亿对应份额 ~2.3%。叠加 SAP (全球 ¥600 亿) + α-烯烃 + POE，公司 2030 总营收路径 ¥800-1,000 亿是合理（CAGR ~12%），按 PE 16-18x 对应 ¥1,500-2,000 亿市值。但要实现需要：①α-烯烃园 IRR 兑现；②POE 抢回与万华的差距；③美国乙烷供应稳定。',
            points: [
                { year: '2021', totalTam: 280, neocloudTam: 60, selfRevenue: 40, status: 'actual' },
                { year: '2024', totalTam: 290, neocloudTam: 70, selfRevenue: 64, status: 'actual' },
                { year: '2025', totalTam: 295, neocloudTam: 75, selfRevenue: 64, status: 'actual' },
                { year: '2026', totalTam: 300, neocloudTam: 80, selfRevenue: 80, status: 'estimate' },
                { year: '2028', totalTam: 320, neocloudTam: 95, selfRevenue: 100, status: 'estimate' },
                { year: '2030', totalTam: 350, neocloudTam: 115, selfRevenue: 120, status: 'estimate' },
                { year: '2035', totalTam: 420, neocloudTam: 150, selfRevenue: 180, status: 'estimate' },
            ],
            keyNumbers: [
                { label: '全球聚烯烃市场 (2025)', value: '$300B', sub: 'PE/PP/POE/EVA 等', cls: 'cyan' },
                { label: '中国聚烯烃 TAM', value: '¥7,000 亿', sub: '~1/3 全球', cls: 'purple' },
                { label: '卫星 2025 营收 (聚烯烃 + C3)', value: '$64B', sub: '美元口径', cls: 'green' },
                { label: '卫星 全球份额 (2025)', value: '~1.5%', sub: '差异化龙头', cls: 'green' },
                { label: 'POE 中国 TAM (2027)', value: '¥250 亿', sub: '光伏胶膜驱动', cls: 'purple' },
                { label: 'SAP 全球 TAM (2025)', value: '¥600 亿', sub: '卫生护理', cls: 'cyan' },
                { label: '10x 路径所需', value: '¥1,500 亿营收 + ROE 22%', sub: '2030-2032', cls: 'red' },
                { label: 'α-烯烃高端 TAM', value: '¥1,000+ 亿', sub: '国产替代核心', cls: 'cyan' },
            ],
            sourcesNote:
                '数据来源：中国产业研究院 + 卓创资讯 + 公司年报 + 国海 / 太平洋 / 国信研报。2028-2035 推演基于"美国页岩气长期富余 + 高端聚烯烃国产替代 + 卫星 α-烯烃路线兑现"。卫星营收单位统一为亿元 (¥)。',
        },

        radar: {
            peer1Name: '万华化学',
            peer2Name: '陶氏 (Dow)',
            dimensions: [
                { dim: '产能规模', self: 7, peer1: 10, peer2: 10 },
                { dim: 'ROE / 盈利质量', self: 10, peer1: 7, peer2: 6 },
                { dim: '气头路线优势', self: 10, peer1: 4, peer2: 8 },
                { dim: '高端聚烯烃布局', self: 7, peer1: 9, peer2: 10 },
                { dim: '资本配置', self: 9, peer1: 9, peer2: 7 },
                { dim: '海外业务', self: 4, peer1: 7, peer2: 10 },
                { dim: '增长性', self: 8, peer1: 9, peer2: 4 },
                { dim: '国别风险敞口 (反向)', self: 4, peer1: 7, peer2: 9 },
            ],
            note: '1-10 分主观评分。卫星在"ROE / 盈利质量、气头路线优势、增长性"三维度领先；产能规模 + 高端聚烯烃布局 + 海外业务 落后万华 / 陶氏。**国别风险敞口**反向打分（高 = 风险低）：卫星 4 分反映美国乙烷依赖；万华 7 分反映欧洲 BC 公司 + 中国产能多元；陶氏 9 分反映美国本土生产。',
        },
    },

    valuation: {
        metrics: [
            { metric: 'PE (TTM 2025)', value: '18.4x', benchmark: '化工龙头 10-20x · 接近上限', read: 'fair' },
            { metric: 'Forward PE (2026E EPS 2.23)', value: '13.0x', benchmark: '历史中枢 12-15x', read: 'fair' },
            { metric: 'Forward PE (2027E EPS 2.82)', value: '10.3x', benchmark: '陶氏 10x · LYB 8x', read: 'cheap' },
            { metric: 'PB', value: '~1.9x', benchmark: '化工成长股 1.5-3x · 万华 3.0x', read: 'fair' },
            { metric: 'EV/EBITDA (2025)', value: '~12x', benchmark: '化工龙头 8-12x', read: 'fair' },
            { metric: '股息率 (2024)', value: '~1.7%', benchmark: 'A 股化工 1-3%', read: 'fair' },
            { metric: 'PEG (2026E +41% 净利)', value: '~0.32', benchmark: '<1 视为便宜', read: 'cheap' },
        ],
        sotp: [
            { item: 'C3 主业 (2026E 营收 ¥330 亿)', valuation: '¥600-800 亿', method: '15-18x 2026E 净利 ¥40 亿', note: '丙烯酸国内第一 + SAP 全球前 5' },
            { item: 'C2 主业 (连云港 250 万吨)', valuation: '¥500-700 亿', method: '12-15x 2026E 净利 ¥40 亿 (含国别风险折价)', note: '气头路线壁垒 - 美国乙烷折价' },
            { item: 'α-烯烃 + POE (高增长期权)', valuation: '¥350-600 亿', method: '20-25x 2027E 净利 ¥20 亿', note: '60 万吨 POE 二期 + UHMWPE/mPE/PAO' },
            { item: 'VLEC 物流资产', valuation: '¥80-150 亿', method: '14+4 艘 × 资产价值 + 长协价值', note: '物流壁垒 + 长协' },
            { item: '回购成本基准托底', valuation: '¥575-635 亿', method: '回购价区 17.10-18.90 × 33.69 亿股', note: '管理层信心底' },
            { item: '现金净额 + 投资组合', valuation: '¥100-150 亿', method: '账面值 - 短期负债', note: '资产负债率 51.74% 健康' },
        ],
        sotpTotal: '¥1,630-2,400 亿',
        sotpPerShare: '对应合理区间 ¥48-71 (当前 ¥29.00 位于区间下沿 -39% 至 -59%)',
    },

    recommendation: {
        rating: '持有 / 关注 (差异化化工成长，国别风险显著)',
        ratingCls: 'neutral',
        timeHorizon: '3-5 年（10 年视角下的中期节奏）',
        positionSize: '2-4% 组合权重 (核心持仓上限 5%)',
        addingZone: '¥22-26 (回到 PB 1.5x + 中美关税恐慌底)',
        stopLoss: 'BIS 再次将乙烷列入许可 / 连云港装置利用率连续 2 季 <70% / α-烯烃园延期 6 月+ / 安全事故 → 重新评估',
        thesis:
            '当前 ¥29.00 / 市值 ¥977 亿，**5Y 期望 1.30x (CAGR 5.4% 不含分红)、10Y 期望 2.15x (CAGR 7.95%)**。看多核心：①**ROE 21.87% 化工 A 股最高之一** + Q1\'26 +34.97% 业绩拐点；②**14+4 VLEC + ORBIT 50% 全球独家成本套利**；③**C3 全球 SAP 龙头 + 国内丙烯酸第一**；④**α-烯烃园 2026 投产 + POE 60 万吨二期**；⑤**资产负债率 51.74% 健康** 优于万华。看空核心：①**美国乙烷国别风险**是最大单点折价；②**POE 落后万华 18-24 月**；③估值 PE 18.4x 已经定价 α-烯烃投产；④CapEx 周期高位 1,000+ 亿在建；⑤2025 净利 -12.54% 周期已现疲态。**这不是 10x 股**，是"差异化周期成长 + 美国乙烷国别折价"的中期持有标的。',
        keyAssumptions: [
            '2026 Q1 α-烯烃园一阶段如期投产 (PE 90 + α-烯烃 20)',
            '2026 全年营收 ≥¥580 亿 / 归母 ≥¥75 亿 (隐含 +41%)',
            '美国乙烷供应稳定，BIS 不再启动管控',
            'POE 二期 2026 Q4 建成，2027 H2 满产爬坡',
            '高端聚烯烃 (UHMWPE/mPE/PAO) 2027 营收占比破 10%',
            '2027 ROE 维持 ≥18%',
        ],
        sizingFormula: {
            method: 'Kelly 公式 (保守版 1/4 Kelly · 国别风险尾部折价)',
            formula: 'f* = (期望回报率 − 无风险利率) / 方差 × 0.25',
            inputs: [
                { label: '10Y 期望回报率 (含分红)', value: '~10% CAGR' },
                { label: '无风险利率 (10Y 国债)', value: '2.5%' },
                { label: '情景标准差 (10Y)', value: '~¥1,500 亿 (~150% E[Mcap])' },
                { label: '完整 Kelly', value: '~5%' },
                { label: '1/4 Kelly (国别风险折价)', value: '~2-3%' },
            ],
            computedSize: '2-4% 组合权重',
            reasoning:
                '10Y 情景标准差 ¥1,500 亿占期望值 ~150%，**远高于万华 (~85%)**，主要因为美国乙烷断供尾部风险（7% 概率但毁灭性影响）。Kelly 应在 1/4 而非 1/2，**仓位上限 5%**。**分层建仓**：基础 2%（Q1\'26 拐点 + ROE 21.87%）+ α-烯烃园 2026 Q1 投产 +1%（一阶段验证）+ POE 二期工业化 +1%（二曲线兑现）+ 中美关税常态化无升级 +1%（国别风险解除）= 最高 5%。**特别注意**：卫星是"高 alpha + 高 tail risk"组合，不适合作为核心持仓；与万华形成"分散对冲 + 同主题不同壁垒"的组合是更优选择。',
        },
    },

    keyPersonRisks: [
        {
            name: '杨卫东 (创始人 + 副董事长 + 浙江卫星控股 GM)',
            role: '战略 · 资本配置 · 文化塑造',
            departProb: '中 (~20% / 5 年，年龄 58 岁)',
            departImpact: '极高 —— 股价短期 -30%，战略连续性最大变量',
            mitigation: '杨亚珍 + 专业团队 (宋志强 / 李大伟) 可短期代理 · 50.4% 控股稳定',
            criticality: 'critical',
        },
        {
            name: '杨亚珍 (董事长 + 实控人)',
            role: '治理 · 资本市场关系',
            departProb: '低 (~10% / 5 年)',
            departImpact: '中 —— 公司形象 + 战略协同',
            mitigation: '与杨卫东共治 + 专业管理团队',
            criticality: 'high',
        },
        {
            name: '宋志强 (副总裁 + 连云港基地)',
            role: 'C2 + α-烯烃园项目执行',
            departProb: '中 (~15% / 5 年)',
            departImpact: '高 —— 关键工程交付',
            mitigation: '工程团队建制成熟 · 多位副总分管',
            criticality: 'high',
        },
        {
            name: 'POE / α-烯烃研发团队',
            role: '高端聚烯烃技术突破',
            departProb: '低 (~10% / 5 年集体性)',
            departImpact: '极高 —— 自主路线核心',
            mitigation: '研发激励 + 专利保护 + 工艺 know-how 已固化',
            criticality: 'critical',
        },
    ],

    cashFlow: {
        narrative:
            '卫星化学是**"差异化化工 × 高 ROE × CapEx 周期高位"模型**。2024 OCF ¥69.86 亿但 CapEx ¥80-150 亿吞噬现金，FCF 短期紧张。**关键拐点**：2027 后 α-烯烃园全部投产 + 连云港联合装置爬产，CapEx 大幅放缓到 ¥80 亿/年，FCF 跳升至 ¥150-200 亿/年。**特别注意**：2025 资产负债率从 64% 降至 51.74% 反映管理层主动去杠杆 + 经营性现金流改善。',
        rows: [
            { year: '2021', ocf: 4500, icf: -8000, fcf: 4000, freeCashFlow: -3500, status: 'actual' },
            { year: '2022', ocf: 5500, icf: -12000, fcf: 7000, freeCashFlow: -6500, status: 'actual' },
            { year: '2023', ocf: 6800, icf: -10000, fcf: 4000, freeCashFlow: -3200, status: 'actual' },
            { year: '2024', ocf: 6986, icf: -9000, fcf: 3000, freeCashFlow: -2014, status: 'actual' },
            { year: '2025', ocf: 8500, icf: -11000, fcf: 2500, freeCashFlow: -2500, status: 'actual' },
            { year: '2026E', ocf: 11000, icf: -13000, fcf: 2000, freeCashFlow: -2000, status: 'estimate' },
            { year: '2027E', ocf: 14000, icf: -10000, fcf: 0, freeCashFlow: 4000, status: 'estimate' },
            { year: '2028E', ocf: 17000, icf: -7000, fcf: -2000, freeCashFlow: 10000, status: 'estimate' },
        ],
        conversionNote:
            'Cash Conversion Ratio = OCF / Net Income。2024 约 1.15x (¥69.86 亿 / 60.72 亿)，反映折旧 + 应收账款管理良好。2027 后 CapEx 见顶后 FCF Conversion 会跳升至 1.5x+。注：表格数字单位为百万元。',
        keyRisks: [
            'POE 价格战导致 OCF 从 ¥130 亿/年降至 ¥80 亿/年，FCF 加深为负',
            '美国乙烷断供 6 月+ 触发巨额减值 + 经营现金流断裂',
            'CapEx 长期 >¥150 亿/年会让资产负债率重回 60%+',
            '原油低位运行使 C2 板块利润压缩 30%+',
        ],
    },

    historicalValuation: {
        narrative:
            '卫星化学 2011 创业板上市，有 15 年交易历史。**PB 区间 1.0-5x · PE 区间 8-50x**，反映气头化工成长股估值大幅波动。**当前 PB ~1.9x 处于过去 10 年的 25-30% 分位**（介于历史中位与底部之间）。PE TTM 18.4x 处于历史中枢偏上，反映 2025 净利下滑 + α-烯烃投产预期定价。',
        history: [
            { period: '2018-Q4', evSales: 1.5, note: '业务转型期 PB 1.5x · PE 12x' },
            { period: '2019-Q4', evSales: 1.8, note: 'PB 2.0x · PE 18x' },
            { period: '2020-Q4 (C2 准备期)', evSales: 2.5, note: 'PB 3.5x · PE 28x' },
            { period: '2021-Q4 (C2 投产 + 巅峰)', evSales: 3.5, note: '股价 ¥45 高 · PB 4.5x · PE 12x · ROE 30%+' },
            { period: '2022-Q4', evSales: 1.8, note: 'PB 2.5x · PE 18x' },
            { period: '2023-Q4', evSales: 1.5, note: 'PB 2.0x · PE 16x' },
            { period: '2024-Q4', evSales: 1.6, note: 'PB 2.2x · PE 13x' },
            { period: '2025-Q2 (BIS 危机底)', evSales: 1.0, note: '股价 ¥17 低 · PB 1.5x · PE 11x' },
            { period: '2025-Q4', evSales: 1.4, note: '股价 ¥22 · PB 1.7x · PE 14x' },
            { period: '2026-Q2 (当前)', evSales: 2.1, note: '股价 ¥29 · PB 1.9x · PE 18.4x' },
        ],
        currentPercentile: 'PB 30% (10Y) · PE 65% (5Y)',
        verdict: 'fair',
    },

    downsideMetrics: {
        narrative:
            '只看 7.95% CAGR 期望是 research theater。基于 4 档情景，**10Y 情景标准差约 ¥1,500 亿**（~150% 期望值，**显著高于万华 ~85%**）反映**美国乙烷国别风险**的非线性尾部分布。**5Y 内亏损 30%+ 概率约 35%**——主要由"中美关税升级 + POE 价格战"双重情景驱动。**最大回撤估计 -40-60%**，但 2025-Q2 BIS 危机已经测试过 -45% 极限（股价从 28 元跌至 17 元 -39%）。',
        scenarioStdDev: 1500,
        sharpeLike: 0.75,
        probLoss30Pct5Y: 35,
        maxDrawdownEstimate: '-40% 到 -60%（参考 2025-Q2 BIS 危机 -39%；下次预计 -45-55%）',
        downsideToUpsideRatio: '下行 1 vs 上行 4 (单次下跌 ¥400 亿，单次上冲 ¥1,800 亿+)',
    },

    sensitivity: {
        narrative: '哪个变量对 10Y 期望市值最敏感？按单变量 ±1σ 扰动排序 ——',
        variables: [
            { variable: '美国乙烷供应 (稳定 vs BIS 管控)', downImpact: -800, upImpact: 600, description: '决定 C2 板块 50% 利润 · 国别风险尾部' },
            { variable: '乙烷-乙烯价差 (¥1k vs ¥3k/吨)', downImpact: -600, upImpact: 800, description: '气头路线 alpha 核心' },
            { variable: 'POE 工业化时间 (2026 Q4 vs 2028)', downImpact: -400, upImpact: 600, description: '二曲线兑现速度' },
            { variable: 'POE 全球价格 (¥10k vs ¥20k/吨)', downImpact: -350, upImpact: 500, description: '光伏需求 + 价格战' },
            { variable: 'SAP 全球价格', downImpact: -200, upImpact: 300, description: 'C3 板块稳定贡献' },
            { variable: 'ROE (15% vs 22%)', downImpact: -300, upImpact: 400, description: '估值切换前提' },
            { variable: '海外营收占比 (10% vs 25%)', downImpact: -150, upImpact: 350, description: '全球化路径' },
        ],
        takeaway:
            '**最敏感三变量：美国乙烷供应、乙烷-乙烯价差、POE 工业化进度**。每季度追踪这三项。**美国乙烷供应是单点最大变量** —— 2025 BIS 演练已证明其非线性影响。乙烷-乙烯价差是"先行指标"——任何连续 2 季度 <¥1,500/吨 的下滑都意味着气头路线 alpha 消失。',
    },

    bearPlaybook: {
        scenario: '"悲观：中美关税升级 + POE 价格战"（28% 概率）的完整 ruin 路径',
        steps: [
            {
                when: '2026 Q4 - 2027 Q1',
                event: '中美关税进一步升级到 100%+，乙烷或被报复加征关税',
                signal: 'USTR 公告对华关税升级；中国对美乙烷反制关税预案出台',
            },
            {
                when: '2027 Q2',
                event: 'BIS 再次将乙烷列入许可清单 / 出口限制',
                signal: 'BIS 公告；公司应急方案启动',
            },
            {
                when: '2027 H2',
                event: 'POE 国产化转过剩 (万华 60 + 卫星 60 + 茂名 40 + 其他)，价格战爆发',
                signal: 'POE 国内售价 ¥18k → ¥10k；卫星 POE 满产但毛利率 <8%',
            },
            {
                when: '2028 Q1',
                event: 'C2 板块利润大幅下滑 (装置利用率跌至 70%) + α-烯烃园 IRR <8%',
                signal: '中报 C2 板块亏损或微利；α-烯烃 PE 出货价跌破成本',
            },
            {
                when: '2028 H2',
                event: 'ROE 跌破 8% + 资产负债率 60%+ + 信用评级下调',
                signal: '中诚信 / 联合评级下调；财务费用同比 +30%',
            },
            {
                when: '2029-2030',
                event: '股价稳定在 ¥18-22 / 市值 ¥600-750 亿 / 回到回购成本附近',
                signal: 'PE 12-15x · PB 1.2x · 周期成长股估值压缩',
            },
        ],
        exitTrigger:
            '任一步骤在时间表前 1 个季度提前发生 → **减仓 50%**。连续 2 条发生 → **清仓观望**。特别关注：①BIS 公告、②POE 价格、③乙烷-乙烯价差。',
    },

    capitalAllocation: {
        narrative:
            '卫星化学的资本配置是 A 股化工成长股中**最优秀的之一**：杨卫东 20 年从 50 亿做到 977 亿（19x），ROE 21.87% 远超同行；2025 主动去杠杆 (资产负债率 64% → 51.74%) + 4 亿元回购 (价区 17.10-18.90，已被股价翻倍验证) + 35.7% 分红率。**最强项**：再投资能力 + 资本市场敏感性；**最弱项**：海外并购布局相对万华更弱（无类似 BC 公司的标志性海外资产）。',
        scores: [
            { dimension: 'ROIIC', label: '增量资本回报率', score: 5, detail: '历史 ROIIC 25-40% (周期均值)；2021 C2 一阶段 IRR 30%+；2025 ROE 21.87% 是化工 A 股最高之一', evidence: '历年 ROE + 项目 IRR' },
            { dimension: 'Buyback', label: '回购节奏', score: 4, detail: '2025-04-27 启动 4 亿元回购 (价上限 29.50 元) + 已回购 1207 万股 (2.18 亿)，价区 17.10-18.90 已被翻倍验证', evidence: '2025-04-27 / 2025-08-04 公告' },
            { dimension: 'Dividend', label: '股息政策', score: 4, detail: '2024 分红率 35.70% (¥16.78 亿) · 高于万华 30% · 杨卫东家族对现金回报有诉求', evidence: '历年分红公告' },
            { dimension: 'M&A', label: '并购命中率', score: 3, detail: '历史上极少海外并购，主要靠内生扩张；ORBIT 50% 股权是少有的海外资本部署案例', evidence: 'ORBIT + 公司历史' },
        ],
        overallGrade: 'A',
        historicalROIIC: '~25-40% (周期均值 · 化工成长股最高之一)',
    },

    gapAnalysis: {
        narrative:
            '卫星化学 2026 是"管理层指引保守 + 卖方共识中等 + Q1\'26 实绩超预期"的典型案例。Q1\'26 +34.97% 已经显著高于公司年初指引，市场仍在消化拐点信息。共识 2026 净利 ¥75 亿 (+41%)，本分析略乐观至 ¥78 亿。',
        rows: [
            { metric: '2026 营收增速', guidance: '+15% (年初保守)', consensus: '+20%', selfAssumption: '+26%', gap: '+6pp 乐观', risk: 'medium', note: 'Q1 +2.82% 偏低但归母 +35%' },
            { metric: '2026 归母净利', guidance: '未明确指引', consensus: '¥75 亿 (+41%)', selfAssumption: '¥78 亿 (+47%)', gap: '+3pp 乐观', risk: 'medium' },
            { metric: '乙烷-乙烯价差', guidance: '"温和扩大"', consensus: '¥2k/吨', selfAssumption: '¥2-2.5k/吨', gap: '保守', risk: 'low' },
            { metric: 'α-烯烃园一阶段投产', guidance: '2026 Q1', consensus: '2026 Q1', selfAssumption: '2026 Q1', gap: '一致', risk: 'low' },
            { metric: 'POE 工业化时间', guidance: '2026 Q4', consensus: '2027 H1', selfAssumption: '2026 Q4', gap: '+1Q 乐观', risk: 'high', note: '与万华节奏对比' },
            { metric: '2027 高端聚烯烃营收占比', guidance: '未指引', consensus: '8%', selfAssumption: '12%', gap: '+4pp 乐观', risk: 'medium' },
        ],
        takeaway:
            '**最关键 Gap：Q1\'26 归母 +34.97% vs 共识 2026 +41%**。Q1 单季业绩已经接近共识全年增速，意味着 Q2-Q4 只需保持 +20% 即可达共识；**"管理层先发保守 + 共识滞后上修"** 经典套利结构。若 Q2-Q3 持续 +30%，共识会被推高至 ¥85 亿净利 (+60%)，触发 +20% 上行；若 Q2-Q3 回落到 +15%，共识下修至 ¥65 亿，触发 -15% 回调。',
    },

    benchmarkComparison: {
        narrative:
            '卫星化学 10Y 期望 CAGR 7.95% (不含分红) / 10% (含分红) vs 被动 60/40 组合 7.8% / 沪深 300 ~7%。超额 ~2-3pp，**仅 marginal justify 2-4% 仓位**。相对万华化学 (10Y CAGR 9.1%) 略低，但 ROE 和差异化壁垒不同。',
        alternatives: [
            { name: '沪深 300 (HS300)', ticker: '510300', expectedReturn5Y: 6, expectedReturn10Y: 7, note: 'A 股宽基' },
            { name: '万华化学 (SH:600309)', ticker: '600309', expectedReturn5Y: 5.7, expectedReturn10Y: 9.1, note: '化工同业 + POE 直接对手' },
            { name: 'A 股化工 ETF (515030)', expectedReturn5Y: 5, expectedReturn10Y: 7, note: '化工行业指数' },
            { name: '60/40 (沪深300 + 国债)', expectedReturn5Y: 6, expectedReturn10Y: 7.5, note: '稳健均衡' },
            { name: '10Y 国债', ticker: '019xxx', expectedReturn5Y: 2.5, expectedReturn10Y: 2.8, note: '无风险' },
            { name: '陶氏 (NYSE:DOW)', ticker: 'DOW', expectedReturn5Y: 5, expectedReturn10Y: 7, note: '全球聚烯烃对照' },
            { name: '宁德时代 (SZ:300750)', ticker: '300750', expectedReturn5Y: 8, expectedReturn10Y: 12, note: '新能源材料对照' },
        ],
        selfReturn5Y: 5.4,
        selfReturn10Y: 7.95,
        excessReturn5Y: -0.6,
        excessReturn10Y: 0.45,
        justifiesPosition: 'marginal',
        takeaway:
            '**5Y 超额 -0.6pp / 10Y 超额 0.45pp**——边际不显著，仅 marginal justify 2-4% 仓位。相对沪深 300 / 化工 ETF 都有微弱超额，但 5Y 周期内大概率跑输被动指数（α-烯烃投产 + POE 兑现需要时间）。**特别考虑**：卫星与万华虽然同为化工，但**因子完全不同** —— 卫星是"气头 + 美国乙烷国别风险"；万华是"MDI 全球第一 + 中国地产 β"。**最佳搭配**：万华 + 卫星各 3% 形成"中国化工双龙头" 组合；如果只能选一家，万华 (10Y CAGR 9.1%) 略优于卫星 (7.95%)。',
    },

    trackRecord: {
        narrative:
            '本分析锚定 2026-04-29。以下 6 条可验证命题，特别关注 α-烯烃园投产 + 美国乙烷供应 + POE 工业化 三大先行指标。',
        assumptions: [
            { assumption: '2026 Q1 α-烯烃园一阶段如期投产 (PE 90 + α-烯烃 20 万吨)', setAt: '2026-04-29', targetDate: '2026-09-30', targetValue: '一阶段投产', verdict: 'pending', note: '基础假设' },
            { assumption: '2026 全年营收 ≥¥580 亿 / 归母 ≥¥75 亿', setAt: '2026-04-29', targetDate: '2027-04-30', targetValue: '营收 ≥¥580 亿', verdict: 'pending', note: 'Q1 已 +34.97%' },
            { assumption: '2026 全年美国乙烷供应稳定 (BIS 不再启动管控)', setAt: '2026-04-29', targetDate: '2027-04-30', targetValue: '供应稳定', verdict: 'pending', note: '国别风险关键' },
            { assumption: '2026 Q4 α-烯烃园二阶段建成 (含 60 万吨 POE)', setAt: '2026-04-29', targetDate: '2027-03-31', targetValue: '二阶段建成', verdict: 'pending', note: 'POE 工业化关键' },
            { assumption: '2027 全年 ROE 维持 ≥18%', setAt: '2026-04-29', targetDate: '2028-04-30', targetValue: '≥18%', verdict: 'pending', note: '盈利质量' },
            { assumption: '2027 高端聚烯烃营收占比突破 10%', setAt: '2026-04-29', targetDate: '2028-04-30', targetValue: '≥10%', verdict: 'pending', note: '二曲线验证' },
        ],
        hitRate: 'N/A (全部 pending)',
    },

    correlation: {
        narrative:
            '卫星化学是**"中国制造 × 美国乙烷套利 × POE 期权 × 国别风险"四维敞口**：涨跌 40% 由全球聚烯烃周期决定、25% 由美国乙烷价格决定、20% 由中美关系决定、15% 由公司 alpha (POE 工业化) 决定。如果组合中已持有万华 / 化工 ETF，加卫星的**边际多元化中等** (因子部分重叠)。真正的 hedge 是**反美国乙烷依赖资产** (国债 / 黄金 / 中国电池产业链)。',
        rows: [
            { asset: '万华化学 (SH:600309)', beta: 0.85, correlation: 0.65, hedgeValue: 'low', note: 'POE 直接对手 + 化工龙头' },
            { asset: '陶氏 (NYSE:DOW)', beta: 0.7, correlation: 0.55, hedgeValue: 'medium', note: '全球聚烯烃对照' },
            { asset: 'LyondellBasell (NYSE:LYB)', beta: 0.75, correlation: 0.60, hedgeValue: 'medium', note: '北美天然气路线对照' },
            { asset: 'A 股化工 ETF (515030)', beta: 0.9, correlation: 0.75, hedgeValue: 'low', note: '高度同质' },
            { asset: '宁德时代 (SZ:300750)', beta: 0.5, correlation: 0.30, hedgeValue: 'medium', note: '电池产业链 + 不同因子' },
            { asset: '茅台 (SH:600519)', beta: 0.3, correlation: 0.20, hedgeValue: 'high', note: '消费白马 + 完全不同因子' },
            { asset: '10Y 国债', beta: -0.5, correlation: -0.40, hedgeValue: 'high', note: '降息受益 + 周期对冲' },
            { asset: '黄金 (518880)', beta: -0.3, correlation: -0.25, hedgeValue: 'high', note: '中美关系 + 国别风险对冲' },
        ],
        suggestedHedge:
            '如果卫星占组合 2-4%，建议搭配：①**反向美国乙烷敞口**：8-10% 国债 + 5% 黄金 ETF (中美关系恶化时同时受益)；②**不要同时持有**：卫星 + 万华 + 化工 ETF 三者加总超过 10% 是重大集中度风险；③**对标新能源 + 消费白马**：5-8% 茅台 + 3% 宁德时代 形成"周期 + 成长 + 防御"组合。**最佳组合**：卫星 3% + 万华 3% + 宁德 3% + 茅台 6% + 国债 8% + 黄金 3%（化工双龙头 + 新能源 + 消费白马 + 防御对冲六维分散）。',
    },

    dataSources: {
        narrative: '本报告数据 anchor 日期 2026-04-29。核心数据来自卫星化学 2024/2025 年报、2026 Q1 季报、深交所披露、巨潮资讯、东方财富、太平洋/国海/国信研报。情景概率与 10Y 期望为本分析主观推演。',
        accessedAt: '2026-04-29',
        sources: [
            { label: '卫星化学 2024 年报 (东方财富)', url: 'https://www.stcn.com/article/detail/1606209.html', category: 'primary', publishedAt: '2025-03' },
            { label: '2025 年报 - 营收 460.68 亿 (新浪财经)', url: 'https://finance.sina.com.cn/wm/2026-03-26/doc-inhshxnu0274672.shtml', category: 'secondary', publishedAt: '2026-03-26' },
            { label: '2026 Q1 季报 +34.97% 归母 (新浪财经)', url: 'https://finance.sina.com.cn/stock/aigc/stockfs/2026-04-13/doc-inhukeeu5545479.shtml', category: 'secondary', publishedAt: '2026-04' },
            { label: '2026 Q1 详细分析 - 境外 +45% (证券时报)', url: 'https://www.stcn.com/article/detail/3745838.html', category: 'secondary' },
            { label: '股价 29.00 元 (东方财富)', url: 'https://caifuhao.eastmoney.com/news/20260428193430652460680', category: 'data', publishedAt: '2026-04-28' },
            { label: '市值首破千亿 (澎湃)', url: 'https://m.thepaper.cn/newsDetail_forward_32960706', category: 'secondary', publishedAt: '2026-04-13' },
            { label: '太平洋证券深度报告 (东方财富)', url: 'https://pdf.dfcfw.com/pdf/H3_AP202508281735945383_1.pdf', category: 'research' },
            { label: '国海证券强烈推荐报告', url: 'https://aigc.idigital.com.cn/djyanbao/...20250826.pdf', category: 'research' },
            { label: '国信证券 优于大市', url: 'https://pdf.dfcfw.com/pdf/H3_AP202510261769487554_1.pdf', category: 'research' },
            { label: 'BIS 撤销乙烷许可 (新浪财经)', url: 'https://finance.sina.com.cn/roll/2025-07-04/doc-infehuep3090530.shtml', category: 'secondary', publishedAt: '2025-07-04' },
            { label: 'α-烯烃产业园 (新浪财经)', url: 'https://finance.sina.com.cn/roll/2025-08-04/doc-infiwnvi1323620.shtml', category: 'secondary' },
            { label: 'POE 中试获批 (ABPV)', url: 'https://www.abpv360.com/a/21760', category: 'secondary' },
            { label: '14 艘 VLEC 船队 (NBD)', url: 'https://www.nbd.com.cn/articles/2025-10-14/4089678.html', category: 'secondary' },
            { label: '回购公告 1207 万股', url: 'https://finance.sina.com.cn/stock/aigc/zjchg/2025-08-04/doc-infivmit0143753.shtml', category: 'primary', publishedAt: '2025-08-04' },
            { label: '丙烯酸国内市占 20.59% (新浪财经)', url: 'https://finance.sina.com.cn/roll/2025-01-16/doc-inefczya7402067.shtml', category: 'secondary' },
            { label: '美国乙烷供需 (财富号)', url: 'https://finance.sina.com.cn/roll/2026-02-02/doc-inhkkqup1016789.shtml', category: 'secondary' },
            { label: '2025 资产负债率 51.74% (证券时报)', url: 'https://www.stcn.com/article/detail/3408643.html', category: 'secondary' },
            { label: '卫星化学官网 STL Chem', url: 'https://www.stl-chem.com/', category: 'primary' },
            { label: 'F10 企业概况 (东方财富)', url: 'https://emweb.eastmoney.com/f10_v2/OperationsRequired.aspx?code=SZ002648', category: 'data' },
        ],
    },
}
