import type { CompanyDetail } from '@/types/company'

export const popmart: CompanyDetail = {
    id: 'popmart',
    ticker: 'HK:09992',
    name: '泡泡玛特 (Pop Mart International Group)',
    tagline:
        '中国潮玩（Art Toy）龙头。2025 年凭 LABUBU 引爆全球爆红，营收 371 亿元 +185%、海外占比从 32% 飙至 44%。核心争议：LABUBU 单一 IP 依赖 vs 全球 IP 运营平台的升级路径能否兑现？单爆款 vs 真迪士尼。',
    date: '2026-04-20',

    priceCards: [
        { label: '当前股价', value: 'HK$151.50', sub: '2026-04-20 收盘', cls: 'cyan' },
        { label: '52 周波动', value: 'HK$70 – HK$300', sub: '业绩后回调', cls: 'purple' },
        { label: '市值', value: '~HK$198B', sub: '~US$25B (7.8 汇率)', cls: 'purple' },
        { label: '分析师共识 PT', value: 'HK$351', sub: '24 家 · Strong Buy', cls: 'cyan' },
        { label: '2025 营收', value: 'RMB 371.2 亿', sub: '+184.7% YoY', cls: 'green' },
        { label: '海外营收占比', value: '43.8%', sub: 'vs 2024 的 31.8%', cls: 'green' },
    ],

    keyFacts: {
        '2025 营收': 'RMB 371.2 亿 (+184.7% YoY)',
        '2025 经调整净利': 'RMB 130.8 亿 (+284.5% YoY)',
        '中国市场': 'RMB 208.5 亿 (+134.6%)',
        '亚太市场': 'RMB 80.1 亿 (+157.6%)',
        '美洲市场': 'RMB 68.1 亿 (+748.4%)',
        '欧洲市场': 'RMB 14.5 亿 (+506.3%)',
        'THE MONSTERS (含 LABUBU)': 'RMB 141.6 亿 (+365.7% · 占 38.1%)',
        'LABUBU 销量': '>1 亿只 (2025)',
        'SKULLPANDA': 'RMB 35.4 亿',
        'CRYBABY': 'RMB 29.3 亿',
        'MOLLY': 'RMB 29.0 亿',
        '2026 增速指引': '~20% (大幅放缓)',
    },

    contracts: [
        { customer: 'Sony Pictures (LABUBU 电影)', amount: '未披露', years: '长期合作', detail: '2025 年官宣，Labubu 首部电影开发中，IP 影视化里程碑' },
        { customer: 'Disney / 环球 / 华纳 IP 授权', amount: '未披露', years: '长期', detail: '多个全球 IP 合作（DIMOO 等原创 IP + 外部授权 IP 双轨）' },
        { customer: '伦敦欧洲总部 + 美洲扩张', amount: '自营投入', years: '2025-2030', detail: '伦敦总部支持欧洲线下扩张；北美 2025 年门店 50+ 家' },
        { customer: '韩国 / 日本 / 东南亚代理', amount: '未披露', years: '长期', detail: '亚太市场通过直营 + 代理双轨覆盖' },
    ],

    subsidiaries: [
        { name: 'POP MART International', desc: '海外业务运营主体', stake: '全资', value: '2025 海外营收 RMB 162.7 亿 · 隐含估值 HK$80B+' },
        { name: 'THE MONSTERS IP 组合', desc: '含 LABUBU · TYCOCO · ZIMOMO 等', stake: '全资 IP', value: '2025 贡献 RMB 141.6 亿，单一 IP 组合估值 HK$30-50B' },
        { name: 'POP LAND 主题乐园 (北京)', desc: '线下潮玩主题公园', stake: '全资', value: '品牌价值延伸 · 未独立估值' },
        { name: '葩趣 App (PDX)', desc: '潮玩社区 + 二手交易', stake: '全资', value: '用户生态入口 · 未货币化' },
        { name: '玩家工作室 (Artist Studio)', desc: 'Kasing Lung · molly 签约艺术家矩阵', stake: '长期合作', value: 'IP 孵化核心' },
    ],

    bullPoints: [
        { title: 'LABUBU 全球爆红 · 单 IP 百亿', body: '2025 年 THE MONSTERS 家族收入 RMB 141.6 亿（+365.7%），LABUBU 销量破 1 亿只，成为全球潮玩史上单年份最成功的 IP 之一' },
        { title: '海外占比跃升至 44%', body: '2024 海外占比 31.8% → 2025 43.8%；美洲 +748%、欧洲 +506%，从"中国品牌"转变为"全球潮玩公司"的关键拐点' },
        { title: '高毛利 + 极高运营杠杆', body: '2025 经调整净利率 35% (130.8/371.2)，比 2024 年（20%）再提升 15pp；线上毛利率更高，规模效应显著' },
        { title: '多 IP 矩阵分散风险', body: 'SKULLPANDA 35 亿 · CRYBABY 29 亿 · MOLLY 29 亿 · DIMOO 28 亿 · 星星人 21 亿，6+ IP 过百亿级，不是纯 LABUBU 一家公司' },
        { title: 'Sony Pictures 电影合作 + 主题乐园', body: 'LABUBU 首部电影开发中；北京 POP LAND 已开业。IP 从商品向"迪士尼式综合娱乐生态"延伸' },
        { title: '现金流极强 · 资产负债表干净', body: '2025 经营性现金流 >RMB 120 亿，几乎零长期债务，派息 + 回购能力强' },
    ],

    bearPoints: [
        { title: 'LABUBU 单一依赖 (38% 营收)', body: 'THE MONSTERS 占 38.1% 营收，一旦 LABUBU 潮流过去，短期收入可能腰斩；2026 增速指引从 +185% 骤降到 +20% 已经在兑现担忧' },
        { title: '潮玩赛道周期性强', body: '历史潮玩品牌（Beanie Babies / Tamagotchi / Webkinz）都曾爆红后急速衰退；IP 寿命 3-7 年是行业规律' },
        { title: '山寨与灰色市场冲击', body: 'LABUBU 爆红后二手市场炒作 + 仿制品泛滥，长期稀释品牌价值；社交媒体已出现"LABUBU 审美疲劳"' },
        { title: '海外扩张成本刚性上升', body: '美欧直营门店 + 合规 + 税费 + IP 法律保护支出刚性；海外净利率可能低于中国 5-10pp' },
        { title: '中概股地缘风险', body: '港股 + 中国运营实体；若中美关系突变 / TikTok 级政策波及 / 美国消费者抵制 → 直接冲击美洲业务' },
        { title: '股价高波动 · 定价完美执行', body: 'IPO HK$38 → 高点 HK$300 → 业绩后 -22% → 当前 HK$151，年内波动 330%。任何增速不达预期都会触发 20%+ 回撤' },
    ],

    scenarios: [
        {
            name: '乐观: 全球 IP 巨头（潮玩界迪士尼）',
            cls: 'bull',
            prob: 15,
            y5Mcap: 'HK$500 – 900B',
            y5Value: 700,
            y10Mcap: 'HK$1.5 – 3T',
            y10Value: 2000,
            desc: 'LABUBU 电影商业成功 · 海外占比 >60% · 6+ IP 都突破 50 亿级 · 主题乐园扩展全球 · 2030 营收 RMB 1500 亿 · 按 15x EV/Rev 对应 HK$2T+',
        },
        {
            name: '中性: 中国潮玩龙头 + 海外第二梯队',
            cls: 'neutral',
            prob: 50,
            y5Mcap: 'HK$220 – 400B',
            y5Value: 310,
            y10Mcap: 'HK$500 – 900B',
            y10Value: 700,
            desc: 'LABUBU 热度延续 2-3 年 · 其他 IP 接续 · 海外占比稳在 50% · 2030 营收 RMB 700-900 亿 · EBITDA margin 30%',
        },
        {
            name: '悲观: LABUBU 退潮 · 接续 IP 不及预期',
            cls: 'bear',
            prob: 28,
            y5Mcap: 'HK$80 – 150B',
            y5Value: 115,
            y10Mcap: 'HK$100 – 250B',
            y10Value: 175,
            desc: 'LABUBU 2027-2028 热度过去 · 其他 IP 未达到 LABUBU 级别 · 海外门店亏损 · 2030 营收 RMB 400-500 亿 · 估值压缩至 8-10x P/E',
        },
        {
            name: '尾部: 产品过时 + 仿制品 + 合规',
            cls: 'bear',
            prob: 7,
            y5Mcap: 'HK$40 – 80B',
            y5Value: 60,
            y10Mcap: 'HK$50 – 100B',
            y10Value: 75,
            desc: '潮玩赛道结构性衰退 · 中美冲突影响美洲业务 · 仿制品泛滥 · 未披露合规问题暴露',
        },
    ],

    tenXGene: [
        { dim: '软件边际成本 · 规模化杠杆', tenBagger: '边际成本 ≈ 0', nebius: '实物商品边际成本刚性，但 IP 授权 + 电影授权接近零', status: 'yellow' },
        { dim: '网络/平台效应', tenBagger: '显著', nebius: '葩趣社区 + 门店体验有弱网络效应，但本质是单品买卖', status: 'red' },
        { dim: '数据闭环 / 专属资产', tenBagger: '独占数据 / IP / 规模', nebius: '核心 IP 自主所有，迪士尼模式最强的闭环资产', status: 'green' },
        { dim: '毛利率 · 定价权', tenBagger: '60-80% 可持续', nebius: '毛利率 65%+ · 爆款 IP 有强定价权（LABUBU 被炒到 10x 发行价）', status: 'green' },
        { dim: '消费者触点 / 品牌', tenBagger: '直接 C 端 / 开发者心智', nebius: '全球 Z 世代品牌心智 · 实体门店 500+ 全球覆盖', status: 'green' },
        { dim: '再投资空间 · S-curve', tenBagger: '高 ROIC + TAM 够大', nebius: '全球潮玩 + IP 授权 + 电影 TAM 巨大，但 IP 生命周期有限', status: 'yellow' },
        { dim: '管理层 · 跨代际转型', tenBagger: '有过 0→$30B 记录', nebius: '王宁 10+ 年将公司从 1 家店做到 RMB 371 亿 · 已在运作第二代 IP 组合', status: 'green' },
    ],

    weightedExpectation: {
        currentMcap: 198,
        y5: {
            expectedMcap: 296,
            multiplier: 1.50,
            cagr: 8.4,
        },
        y10: {
            expectedMcap: 704,
            multiplier: 3.56,
            cagr: 13.5,
        },
        breakdown: [
            { scenario: 'A. 全球 IP 巨头', prob: 15, y5Mid: 700, y10Mid: 2000, y5Contrib: 105, y10Contrib: 300 },
            { scenario: 'B. 龙头 + 海外二梯队', prob: 50, y5Mid: 310, y10Mid: 700, y5Contrib: 155, y10Contrib: 350 },
            { scenario: 'C. LABUBU 退潮', prob: 28, y5Mid: 115, y10Mid: 175, y5Contrib: 32, y10Contrib: 49 },
            { scenario: 'D. 尾部', prob: 7, y5Mid: 60, y10Mid: 75, y5Contrib: 4, y10Contrib: 5 },
        ],
    },

    peerName: '名创优品 / 9896',
    coreWeaveCompare: [
        { metric: '2025 营收', nbis: 'RMB 371 亿', cwv: 'RMB 190 亿 (估)', winner: 'nbis' },
        { metric: '营收增速', nbis: '+185%', cwv: '~+25%', winner: 'nbis' },
        { metric: '毛利率', nbis: '~66%', cwv: '~44%', winner: 'nbis' },
        { metric: '净利率', nbis: '35% (经调整)', cwv: '~14%', winner: 'nbis' },
        { metric: 'IP 自主性', nbis: '核心 IP 全部自主 + 艺术家合作', cwv: '大量外部 IP 授权 + Chiikawa 等', winner: 'nbis' },
        { metric: '全球门店', nbis: '~600+ (含海外 200+)', cwv: '7000+ (全球最大零售网)', winner: 'cwv' },
        { metric: '海外营收占比', nbis: '44%', cwv: '~40%', winner: 'nbis' },
        { metric: '市值', nbis: 'HK$198B', cwv: '~HK$50B', winner: 'nbis' },
        { metric: '品牌壁垒', nbis: '潮玩第一心智', cwv: '平价杂货心智', winner: 'nbis' },
    ],

    analysts: [
        { firm: '最高目标 (HSBC / Jefferies)', target: 472, rating: 'Buy' },
        { firm: '共识 (24 家)', target: 351, rating: 'Strong Buy' },
        { firm: 'Morgan Stanley', target: 330, rating: 'Overweight' },
        { firm: 'Goldman Sachs', target: 310, rating: 'Buy' },
        { firm: 'UBS', target: 280, rating: 'Neutral' },
        { firm: '最低 (Macquarie)', target: 225, rating: 'Neutral' },
    ],

    watchlist: [
        { indicator: 'LABUBU 季度销量', strongSignal: '> 3000 万只/季', baseSignal: '1500-2500 万/季', weakSignal: '< 1000 万/季下滑' },
        { indicator: '第二梯队 IP 突破', strongSignal: '≥2 个 IP 破 50 亿', baseSignal: 'CRYBABY/SKULLPANDA 持平', weakSignal: '无新 IP 破 20 亿' },
        { indicator: '海外营收占比', strongSignal: '> 60%', baseSignal: '45-55%', weakSignal: '< 40% 停滞' },
        { indicator: '全球门店数', strongSignal: '> 1500 家', baseSignal: '800-1200 家', weakSignal: '< 700 家' },
        { indicator: '毛利率', strongSignal: '> 70%', baseSignal: '63-68%', weakSignal: '< 60% 压缩' },
    ],

    finalQuote:
        '泡泡玛特的核心问题是：LABUBU 是"一个爆款"还是"一代 IP"？——前者是 2-3 年的周期性故事（当前 $198B 市值合理），后者是"潮玩界迪士尼"的 10 倍路径（$2T 市值）。<strong>2026-2027 年的 CRYBABY / SKULLPANDA / 星星人能否接续到百亿级 IP</strong>，决定答案。当前 HK$151 相对共识 PT HK$351 的上行空间 131%，但财报后 -22% 说明市场对"单 IP 依赖"的定价已经开始压缩——回调到 HK$130 以下是更理想的建仓位置。',

    revenueChart: {
        labels: ['2022 营收', '2023 营收', '2024 营收', '2025 营收', '2026E 营收'],
        values: [4620, 6310, 13040, 37120, 44500],
        kinds: ['revenue', 'revenue', 'revenue', 'revenue', 'revenue'],
    },

    overview: {
        founded: '2010 · 王宁在北京创立（中关村欧美汇购物中心首店）',
        headquarters: '中国 · 北京',
        incorporation: '开曼群岛（香港上市主体）· 中国大陆实际经营',
        employees: '~12,000+ (2025 末，含全球零售员工)',
        listing: '港交所 · 09992 · 2020-12-11 IPO',
        history: [
            { year: '2010', event: '王宁于北京创立第一家"泡泡玛特"杂货店', tag: '创立' },
            { year: '2014', event: '开始与艺术家合作推出盲盒潮玩（MOLLY 系列）', tag: '转型' },
            { year: '2016', event: '与 Kenny Wong 签订独家合作 · MOLLY 盲盒成为爆款', tag: '里程碑' },
            { year: '2019', event: '泡泡玛特商城 + 葩趣 App 上线 · 全渠道数字化', tag: '产品' },
            { year: '2020-12', event: '港交所 IPO 定价 HK$38.5 · 首日 +79%', tag: 'IPO' },
            { year: '2022', event: '国内潮玩降温 · 股价从高点跌至 HK$10 以下', tag: '危机' },
            { year: '2023', event: '推出 LABUBU (THE MONSTERS 系列) · 海外战略启动', tag: '产品' },
            { year: '2024', event: 'LABUBU 在东南亚 / 美国爆红 · Lisa (BLACKPINK) 公开喜爱推广', tag: '里程碑' },
            { year: '2025-02', event: '美国 50+ 门店 + 欧洲扩张 · LABUBU 成全球现象级 IP', tag: '全球化' },
            { year: '2025-06', event: '伦敦欧洲总部启用', tag: '全球化' },
            { year: '2025-12', event: 'Sony Pictures 宣布开发 LABUBU 首部电影', tag: '里程碑' },
            { year: '2026-03-25', event: '2025 年报：营收 RMB 371 亿 +185% · 净利 +285%', tag: '业绩' },
            { year: '2026-03-25', event: '管理层指引 2026 增速 ~20% · 股价单日 -22.5%', tag: '危机' },
            { year: '2026-04-20', event: '股价 HK$151.50 · 市值 HK$198B', tag: '当前' },
        ],
        businessModel:
            '**艺术家 IP × 盲盒零售 × 全球门店**三位一体的"潮玩生态"：①**IP 源**：签约或自孵化艺术家（Kasing Lung 的 LABUBU · Kenny Wong 的 MOLLY · SKULLPANDA 原创），公司拥有商品化权益；②**盲盒销售**：59-79 元价格带的盲盒 + 高价珍稀款 + 限定款三层产品结构；③**渠道**：线下旗舰店（全球 600+）+ 线下 Robo Shop 无人机（4000+ 台）+ 泡泡玛特商城 App + Tmall/抖音 + 海外官网 / 亚马逊 / TikTok Shop；④**IP 延伸**：主题乐园 / 电影 / 授权商品。**核心差异化**：不是"玩具公司"而是**"IP 运营 + 收藏品平台"**。',
        revenueMix: [
            { name: '中国内地', pct: 56, note: '2025 RMB 208 亿 (+134%)' },
            { name: '亚太 (日韩 / 东南亚)', pct: 22, note: '2025 RMB 80 亿 (+157%)' },
            { name: '美洲', pct: 18, note: '2025 RMB 68 亿 (+748%)' },
            { name: '欧洲', pct: 4, note: '2025 RMB 14.5 亿 (+506%)' },
        ],
    },

    team: [
        {
            name: '王宁',
            role: '创始人 · 董事长 · CEO',
            background:
                '1987 年生于河南新乡，郑州大学广告学本科。2010 年在北京开第一家泡泡玛特杂货店，2014 年转型盲盒潮玩。累计 15+ 年执掌，从一家小店做到港股 HK$200B 市值的"潮玩第一股"。个人风格低调务实，强调"我们不是玩具公司，是 IP 公司"。',
            since: '2010',
            rating: 5,
        },
        {
            name: '司德',
            role: 'COO · 联合创始人',
            background:
                '与王宁共同创业。主导早期零售渠道建设与供应链搭建。目前负责中国区运营。',
            rating: 4,
        },
        {
            name: '文德一',
            role: '总裁 · 海外业务负责人',
            background:
                '韩国籍，Frasers Group 出身。2018 年加入泡泡玛特，主导从零搭建海外业务。2023-2025 海外从 31.8% 升至 44% 占比是他的战果。LABUBU 在北美的爆红路径由他直接操盘。',
            since: '2018',
            rating: 5,
        },
        {
            name: 'Kasing Lung (龙家升)',
            role: '签约艺术家 · LABUBU 创作者',
            background:
                '香港出生、比利时长大的插画艺术家，绘本出身。THE MONSTERS 系列（含 LABUBU · ZIMOMO · TYCOCO）版权归其所有但商品化权由泡泡玛特独家运营。与泡泡玛特绑定是公司最关键的创作者关系。',
            rating: 5,
        },
        {
            name: 'Kenny Wong (王信明)',
            role: '签约艺术家 · MOLLY 创作者',
            background:
                '香港艺术家，2016 年与泡泡玛特签订独家合作。MOLLY 是公司早期爆款基础，2025 年仍贡献 RMB 29 亿。',
            rating: 4,
        },
    ],

    shareholders: [
        { name: '王宁家族信托', pct: '~49%', type: '创始人', note: '港股同股不同权结构，投票权占绝对优势' },
        { name: '红杉中国', pct: '~6%', type: '早期 VC', note: '2018 C 轮投资' },
        { name: '高榕资本', pct: '~4%', type: '早期 VC', note: 'B 轮领投' },
        { name: '摩根士丹利 / 高盛亚洲', pct: '~5-7%', type: '机构', note: '港股通 + 基金' },
        { name: 'BlackRock', pct: '~2-3%', type: '被动 + 主动', note: '纳入 MSCI 后进入' },
        { name: '公众流通股 + 南下资金', pct: '~30%', type: '散户 + 港股通', note: '港股通持股约 12%' },
    ],

    advantages: [
        {
            title: 'LABUBU 全球爆红 · 现象级 IP (独特性 ★★★★★)',
            body: '2023 推出 → 2024 东南亚火 → 2025 北美+欧洲爆 → 全球现象级。LABUBU 2025 销量破 1 亿只，THE MONSTERS 家族收入 RMB 141.6 亿（+365.7%），是潮玩史上最成功的单 IP 之一。Lisa 等明星自发推广，social-proof 效应强。',
            evidence: '2025 年报；Google Trends LABUBU 搜索量；Lisa 公开持 LABUBU 照片全球刷屏',
        },
        {
            title: '海外占比 31.8% → 43.8% 跃升 (规模 ★★★★★)',
            body: '2025 海外营收 RMB 162.7 亿（+291.9%），美洲 +748% / 欧洲 +506% / 亚太 +157%。从"中国潮玩"真正转向"全球潮玩公司"的拐点。',
            evidence: '2025 年报分地区数据；北美门店 50+ · 欧洲扩张 · Sony 合作',
        },
        {
            title: 'IP 矩阵多元 · 6+ 超 20 亿级 IP (护城河 ★★★★)',
            body: 'THE MONSTERS 141.6 亿 + SKULLPANDA 35 亿 + CRYBABY 29 亿 + MOLLY 29 亿 + DIMOO 28 亿 + 星星人 21 亿 = 6 个 20 亿+ IP。不是纯"LABUBU 公司"，IP 组合化对冲单一依赖风险。',
            evidence: '2025 年报 IP 收入明细',
        },
        {
            title: '高毛利 + 极强现金流生成 (韧性 ★★★★★)',
            body: '2025 经调整净利率 35% · 毛利率 ~66%（盲盒低边际成本 + IP 定价权双重）。现金流极充沛，资产负债表几乎零长期债务。',
            evidence: '2025 财报；派息 + 回购记录',
        },
        {
            title: 'POP LAND 主题乐园 + Sony 电影 (迪士尼路径 ★★★★)',
            body: '北京 POP LAND 已开业；Sony Pictures 2025-12 宣布 LABUBU 首部电影。从"商品 → 影视 → 乐园 → IP 综合娱乐"的迪士尼级路径开始铺设。',
            evidence: '官方公告；Sony Pictures 新闻稿',
        },
        {
            title: '创始人王宁 + 文德一 Duo (治理 ★★★★)',
            body: '王宁 15 年长期主义 + 同股不同权确保战略连贯；文德一作为海外业务 CEO 级人物，从 0 搭建海外团队，2025 战果突出。',
            evidence: 'DEF 14A；Frasers Group → 泡泡玛特履历',
        },
        {
            title: '葩趣 App + 1700 万会员数据 (数据壁垒 ★★★)',
            body: '葩趣是潮玩社区 + 二手交易平台，形成用户行为数据闭环。1700 万注册会员 · 200 万+ 月活，对新 IP 孵化方向有独特数据洞察。',
            evidence: '2024/2025 年报会员数据',
        },
    ],

    disadvantages: [
        {
            title: 'LABUBU 单一依赖（38% 营收）',
            body: 'THE MONSTERS 占 38.1% 营收 · 2026 增速指引从 +185% 降至 +20%，市场已经定价"LABUBU 热度 peak"。一旦 LABUBU 在 2027-2028 退潮，公司短期收入可能回归 200 亿以下。',
            evidence: '2025 年报 IP 收入结构；2026-03-25 业绩会管理层指引',
        },
        {
            title: '潮玩赛道历史魔咒 (周期性)',
            body: 'Beanie Babies（1990s）· Tamagotchi（2000s）· Webkinz（2010s）都是"爆红 3-5 年后骤冷"。潮玩 IP 寿命的行业规律是 3-7 年，超长寿命 IP（像 Hello Kitty）罕见。',
            evidence: '潮玩品牌历史；Hasbro / Mattel 历代业绩',
        },
        {
            title: '仿制品与灰色市场侵蚀品牌',
            body: 'LABUBU 爆红后义乌 / 东南亚仿制品泛滥；社交媒体开始出现"LABUBU 审美疲劳"和"炒作泡沫"讨论。品牌护城河是基于稀缺感，仿制+抢购 脆弱化。',
            evidence: '社媒搜索；海关打假报道；小红书 LABUBU 讨论量变化',
        },
        {
            title: '海外净利率低于国内 5-10pp',
            body: '美欧直营门店租金 + 合规 + 税费 + IP 法律保护刚性支出，叠加运输和本地化成本。海外业务净利率 25-28% vs 国内 38-40%，规模扩张但利润摊薄。',
            evidence: '2025 年报分部数据推算',
        },
        {
            title: '中概股 + 美洲业务地缘风险',
            body: '港股上市 + 中国运营主体 + 美洲业务爆发的三重组合，地缘波动敏感度极高。若中美关系突变或出现类似 TikTok 级政策风险，美洲 18% 营收可能一夜受影响。',
            evidence: '历史中概股制裁案例；2024-2026 美国对华消费品关税加征',
        },
        {
            title: '估值历史波动极大',
            body: 'IPO HK$38.5 → 2022 低 HK$10 → 2025 高 HK$300 → 当前 HK$151，5 年内波动 30x。港股流动性 + 单一 IP 故事使估值倍数极不稳定。',
            evidence: '港交所 9992 历史价格',
        },
        {
            title: 'IP 孵化能力未被完全验证',
            body: 'LABUBU 是 Kasing Lung 作品（外部 IP 合作），公司自孵化的 SKULLPANDA / DIMOO 规模仍明显小于 LABUBU。"下一个 LABUBU"能否出现是根本性不确定。',
            evidence: 'IP 收入结构；新 IP 发布节奏',
        },
    ],

    shortTermCatalysts: [
        {
            when: '2026 Q2 (2026-08)',
            event: '2026 中期业绩 · 验证管理层 +20% 指引',
            impact: 'mixed',
            probability: '已确认',
            magnitude: '±15-25%',
        },
        {
            when: '2026 H2',
            event: 'CRYBABY / SKULLPANDA 2026 新系列 · 能否接续爆款势能',
            impact: 'mixed',
            probability: '已规划发布',
            magnitude: '±10-15%',
        },
        {
            when: '2026 Q4',
            event: 'LABUBU 电影预告片 (Sony Pictures)',
            impact: 'positive',
            probability: '~70%',
            magnitude: '+10-15%',
        },
        {
            when: '2026-2027',
            event: '北美门店扩张至 150+ · 欧洲扩张至 80+',
            impact: 'positive',
            probability: '~80%',
            magnitude: '+8-12%',
        },
        {
            when: '2027',
            event: 'LABUBU 电影上映 · 票房验证 IP 影视化能力',
            impact: 'mixed',
            probability: '~60% 如期上映',
            magnitude: '±25-40%',
        },
        {
            when: '2027',
            event: '第二座 POP LAND (上海 / 海外)',
            impact: 'positive',
            probability: '~50%',
            magnitude: '+10%',
        },
        {
            when: '任何时点',
            event: 'LABUBU 相关仿制品 / 安全事故 / IP 纠纷',
            impact: 'negative',
            probability: '~20% / 年',
            magnitude: '-15-30%',
        },
        {
            when: '任何时点',
            event: '中美关系恶化 / 美国消费品关税加征 / 抵制潮',
            impact: 'negative',
            probability: '~15% / 年',
            magnitude: '-20-35%',
        },
        {
            when: '任何时点',
            event: '美股 / 港股深度调整（系统性风险）',
            impact: 'negative',
            probability: '~15% / 2 年',
            magnitude: '-25-40%',
        },
    ],

    longTermDrivers: [
        {
            name: '全球潮玩市场 TAM 翻倍',
            horizon: '2026-2032',
            body: '全球收藏玩具（Art Toy / Collectible Toy）TAM 2025 ~$25B，预计 2030 $50-70B（CAGR 15-20%）。泡泡玛特当前全球市占 ~15-20%，若吃下 25-30% 对应 RMB 1500 亿营收，是当前的 4x。',
            enabling: 'Z 世代全球化消费文化 + 社交媒体传播 + IP 授权生态成熟',
        },
        {
            name: 'LABUBU IP 影视 + 乐园延伸（迪士尼路径）',
            horizon: '2026-2033',
            body: 'Sony Pictures LABUBU 电影若商业成功（票房 $200M+），IP 生命周期可延长 5-10 年，带动商品销售长尾。迪士尼模式验证：单 IP 生命周期从 3 年扩展到 30 年是可能的。',
            enabling: 'Sony 制作能力 + IP 审美全球化兼容性 + 主题乐园延伸',
        },
        {
            name: '新 IP 孵化 + 第二代爆款',
            horizon: '2026-2030',
            body: 'SKULLPANDA 已到 35 亿 · CRYBABY 29 亿 · 星星人 21 亿，下一个百亿级 IP 候选正在蓄势。泡泡玛特的核心能力是 IP 孵化 + 分销，只要孵化命中率 >15-20%，公司就能持续增长。',
            enabling: '葩趣社区数据 + 艺术家签约矩阵 + 成熟分销网络',
        },
        {
            name: '海外门店 + 跨境电商继续渗透',
            horizon: '2026-2030',
            body: '北美当前 50 家门店，目标 2030 年 300+ 家；欧洲当前 20+ 家，目标 150+。海外营收占比从 44% → 70%+ 是合理路径。',
            enabling: '伦敦欧洲总部 · 美国团队成熟 · TikTok Shop 等新渠道',
        },
        {
            name: '平台化：艺术家签约 + 商品化运营',
            horizon: '2027-2033',
            body: '泡泡玛特可能成为"全球艺术家 IP 的商品化平台"：任何艺术家有粉丝基础，泡泡玛特提供盲盒化 + 全球分销。类似于"IP 领域的 Spotify"。',
            enabling: '艺术家签约能力 · 全球零售网络 · 数据洞察',
        },
        {
            name: 'AI 内容生态 + 数字藏品 / NFT 可能性',
            horizon: '2027-2033',
            body: 'LABUBU 等 IP 的数字形态：AR 滤镜 / 数字藏品 / AI 内容生成 / 虚拟主题乐园。2023 年 NFT 泡沫已过，但真 IP 的数字化有真实价值。',
            enabling: 'AR/VR 技术普及 · IP 数字化平台成熟',
        },
    ],

    riskMatrix: [
        {
            category: 'IP / 商业模式风险',
            level: 'critical',
            summary: 'LABUBU 热度周期是最大单点',
            items: [
                {
                    name: 'LABUBU 审美疲劳 / 退潮',
                    body: '一旦 LABUBU 全球热度下滑，THE MONSTERS 占 38% 营收将受冲击。历史潮玩品牌的退潮通常是"断崖式"而非渐进式。',
                    mitigation: '多 IP 矩阵（6+ 过 20 亿 IP）+ Sony 电影延长 IP 生命周期 + 海外市场错峰（美洲进入时间晚于中国）',
                },
                {
                    name: '新 IP 孵化失败',
                    body: '若 2026-2028 年没有新 IP 达到 50 亿+ 级别，长期增长动能缺失。',
                    mitigation: 'CRYBABY / SKULLPANDA 已达 30 亿级；艺术家签约矩阵持续投入',
                },
                {
                    name: '仿制品泛滥削弱品牌',
                    body: '义乌 / 东南亚仿制品已相当普遍，长期侵蚀品牌溢价。',
                    mitigation: '全球 IP 法律保护 + 官方溯源系统 + 稀缺款设计',
                },
            ],
        },
        {
            category: '地缘 / 监管风险',
            level: 'high',
            summary: '中概股 + 美洲业务双重暴露',
            items: [
                {
                    name: '中美贸易 / 关税',
                    body: '2024-2026 美国对华消费品关税已加征。若下届政府进一步加码，美洲 18% 营收可能受损。',
                    mitigation: '本地化生产考虑（越南 / 墨西哥）· 价格传导能力',
                },
                {
                    name: '美国消费者抵制潮',
                    body: '若出现 TikTok 级中国品牌抵制事件，美洲业务可能一夜缩水 20%+。',
                    mitigation: '品牌去中国化表述 · 本地门店化',
                },
                {
                    name: '港股监管环境',
                    body: '港股通额度 · 南下资金流动性变化 · 上市规则更改都会影响股价短期表现。',
                    mitigation: '分红 + 回购维持股东回报 · 港股头部流动性',
                },
            ],
        },
        {
            category: '宏观 / 消费风险',
            level: 'medium',
            summary: '可选消费 β',
            items: [
                {
                    name: '中国消费疲软',
                    body: '潮玩是典型可选消费，经济下行或消费降级时首当其冲。',
                    mitigation: '盲盒低客单价（59-79 元）抗性强；海外多元化',
                },
                {
                    name: '全球通胀 + 可支配收入压力',
                    body: '欧美通胀与就业压力可能使 Z 世代减少潮玩消费。',
                    mitigation: '价格弹性存在 · 爆款稀缺性维系高定价',
                },
            ],
        },
        {
            category: '运营 / 供应链风险',
            level: 'medium',
            summary: '全球零售运营复杂度上升',
            items: [
                {
                    name: '海外门店管理',
                    body: '欧美门店租金、员工管理、合规开支刚性，且不同市场文化差异大。',
                    mitigation: '文德一海外团队 2018 起持续搭建 · 2025 美洲 +748% 已证明执行力',
                },
                {
                    name: '供应链集中度',
                    body: '主要生产在中国（东莞 / 广东）· 海外快速扩张时物流 + 本地化生产压力大。',
                    mitigation: '多供应商 + 越南试点',
                },
                {
                    name: '产品安全 / 召回',
                    body: '儿童与青少年玩具在欧美合规严格（CE / CPSC / EN71），任何召回事件对品牌打击严重。',
                    mitigation: '质检体系 · 设计阶段合规评估',
                },
            ],
        },
        {
            category: '财务 / 估值风险',
            level: 'medium',
            summary: '高增速定价回归',
            items: [
                {
                    name: '2026 增速指引 +20% 远低于 2025 +185%',
                    body: '市场已经开始对"增长放缓"定价；若 2026 实际增速 <15%，估值倍数会进一步压缩。',
                    mitigation: '经调整净利增速可能仍 >30%（利润率上升）· 海外持续放量',
                },
                {
                    name: '回购 / 分红能力',
                    body: '现金充沛但若股价长期低迷，回购决策需果断。',
                    mitigation: '资产负债表几乎零长期债务',
                },
            ],
        },
        {
            category: '治理 / 法律风险',
            level: 'low',
            summary: '同股不同权 + IP 合作依赖',
            items: [
                {
                    name: '王宁 49% 控制权',
                    body: '同股不同权结构，独立董事制衡力弱。',
                    mitigation: '港股合规框架 · 王宁长期主义已证明',
                },
                {
                    name: 'Kasing Lung 艺术家关系',
                    body: 'LABUBU 版权归艺术家，商品化权归公司。若关系生变或合约到期续约不利，影响 THE MONSTERS 未来。',
                    mitigation: '长期合作 + 深度利益绑定 · 分红比例设计',
                },
            ],
        },
        {
            category: 'ESG / 声誉风险',
            level: 'low',
            summary: '盲盒赌博化质疑',
            items: [
                {
                    name: '盲盒 "赌博化" 争议',
                    body: '中国 2022 年曾出台"未成年人盲盒销售限制"；欧美各地对盲盒销售合规性在持续审查。',
                    mitigation: '已在中国调整销售规则 · 海外合规团队跟进',
                },
                {
                    name: '过度消费 / 青少年沉迷',
                    body: '盲盒"隐藏款"机制被批评为鼓励过度消费。',
                    mitigation: '积极公益倡导 · 用户沉迷控制',
                },
            ],
        },
    ],

    profitability: {
        narrative:
            '泡泡玛特是**"典型的高毛利 × 高运营杠杆"消费品公司**：2025 毛利率 ~66% · 经调整净利率 35%。**核心拐点**：2020-2022 年曾因国内潮玩降温利润承压，2023-2025 年凭 LABUBU 海外爆款实现利润率跃升。**关键观察**：海外毛利率是否能稳定在 60%+（vs 国内 68%+），决定长期稳态盈利能力。',

        incomeStatement: [
            {
                year: '2022',
                revenue: 'RMB 46.2 亿',
                revenueNum: 462,
                grossMargin: '58%',
                opIncome: 'RMB 5 亿',
                ebitda: 'RMB 8 亿',
                ebitdaMargin: '17%',
                netIncome: 'RMB 4.76 亿',
                eps: '0.34',
                status: 'actual',
            },
            {
                year: '2023',
                revenue: 'RMB 63.1 亿',
                revenueNum: 631,
                grossMargin: '62%',
                opIncome: 'RMB 12 亿',
                ebitda: 'RMB 14 亿',
                ebitdaMargin: '22%',
                netIncome: 'RMB 10.82 亿',
                eps: '0.80',
                status: 'actual',
            },
            {
                year: '2024',
                revenue: 'RMB 130.4 亿',
                revenueNum: 1304,
                grossMargin: '65%',
                opIncome: 'RMB 30 亿',
                ebitda: 'RMB 33 亿',
                ebitdaMargin: '25%',
                netIncome: 'RMB 31.1 亿',
                eps: '2.30',
                status: 'actual',
            },
            {
                year: '2025',
                revenue: 'RMB 371.2 亿',
                revenueNum: 3712,
                grossMargin: '66%',
                opIncome: 'RMB 135 亿',
                ebitda: 'RMB 142 亿',
                ebitdaMargin: '38%',
                netIncome: 'RMB 130.8 亿 (经调整)',
                eps: '9.50',
                status: 'actual',
            },
            {
                year: '2026E',
                revenue: 'RMB 445 亿 (+20%)',
                revenueNum: 4450,
                grossMargin: '67%',
                opIncome: 'RMB 170 亿',
                ebitda: 'RMB 180 亿',
                ebitdaMargin: '40%',
                netIncome: 'RMB 160 亿',
                eps: '11.5',
                status: 'guidance',
            },
            {
                year: '2027E',
                revenue: 'RMB 540 亿 (+21%)',
                revenueNum: 5400,
                grossMargin: '67%',
                opIncome: 'RMB 210 亿',
                ebitda: 'RMB 220 亿',
                ebitdaMargin: '41%',
                netIncome: 'RMB 195 亿',
                eps: '14.0',
                status: 'estimate',
            },
        ],

        marginEvolution: [
            { year: '2022', gross: 58, ebitda: 17, operating: 11, net: 10, status: 'actual' },
            { year: '2023', gross: 62, ebitda: 22, operating: 19, net: 17, status: 'actual' },
            { year: '2024', gross: 65, ebitda: 25, operating: 23, net: 24, status: 'actual' },
            { year: '2025', gross: 66, ebitda: 38, operating: 36, net: 35, status: 'actual' },
            { year: '2026E', gross: 67, ebitda: 40, operating: 38, net: 36, status: 'guidance' },
            { year: '2027E', gross: 67, ebitda: 41, operating: 39, net: 36, status: 'estimate' },
        ],

        milestones: [
            { year: '2020-12', milestone: '港交所 IPO', hit: true },
            { year: '2023', milestone: '推出 LABUBU', hit: true },
            { year: '2024', milestone: '海外营收占比突破 30%', hit: true },
            { year: '2025', milestone: '海外营收占比 >40% · 年营收破 300 亿', hit: true },
            { year: '2025-12', milestone: 'Sony LABUBU 电影合作官宣', hit: true },
            { year: '2026', milestone: '海外营收占比 >50%', hit: false, note: '关键目标' },
            { year: '2027', milestone: 'LABUBU 电影上映', hit: false },
            { year: '2028-2030', milestone: '新 IP 达到百亿级', hit: false, note: '决定长期持续性' },
        ],

        unitEconomics: [
            { metric: '2025 总营收', value: 'RMB 371.2 亿', source: '年报' },
            { metric: '经调整净利率', value: '35%', source: '年报' },
            { metric: '毛利率', value: '~66%', source: '年报' },
            { metric: '全球门店数', value: '~600+ (海外 200+)', source: '年报 + 公司披露' },
            { metric: 'LABUBU 销量 (2025)', value: '>1 亿只', source: '年报' },
            { metric: 'LABUBU 单只均价', value: '~RMB 140', source: '141.6 亿 / 1 亿只' },
            { metric: '葩趣 MAU', value: '200 万+', source: '年报' },
            { metric: '门店坪效', value: 'RMB 3-5 万/月/㎡', source: '估算' },
        ],

        fcfPath:
            '2025 OCF 约 RMB 120 亿 · FCF RMB 100 亿+（低 CapEx）。2026-2028 预计 FCF 稳定在 RMB 120-180 亿/年。**轻资产模型**：无生产工厂（代工）· 库存周转 90 天。现金流主要用于：①海外门店扩张；②IP 孵化 + 艺术家签约；③潜在并购（海外潮玩 / 授权 IP）；④分红 + 回购。',

        keyRisks: [
            'LABUBU 退潮可直接冲击 38% 营收 · 现金流从 RMB 120 亿 → RMB 60-80 亿',
            '海外门店扩张 + 仿制品诉讼 + 品牌营销支出 可能推高 CapEx 1.5-2 倍',
            '若美国对华消费品关税加征 10-20%，海外净利率可能压缩 3-5pp',
            '库存积压风险：潮玩单品生命周期短，若预判失误会导致 10-20% 库存减值',
        ],
    },

    competitiveLandscape: {
        summary:
            '全球潮玩（Art Toy）赛道正从"收藏品小众市场"升级为"全球 Z 世代 IP 消费主流"。泡泡玛特已占据中国心智 TOP 1 + 全球市占 ~15-20%，核心优势是**艺术家 IP 矩阵 + 盲盒零售机制 + 全球门店网络**。主要对手分三类：①**中国同行**（52TOYS · TOPTOY · 寻宝魂等，规模小 5-10x）；②**全球潮玩 / 收藏品**（日本 Medicom / Bearbrick · 美国 Funko）；③**大零售 + 授权 IP 巨头**（Hasbro / Mattel / 迪士尼自营商品）。真正的"10 倍对手"是迪士尼式的"全球 IP 生态平台"——泡泡玛特正在沿这条路径走。',

        competitors: [
            {
                name: '泡泡玛特 (自身)',
                type: 'specialist',
                ticker: 'HK:09992',
                revenue2026E: 'RMB 445 亿',
                aiRevenue: 'RMB 4.45B (综合)',
                gpuFleet: '600+ 全球门店 · 1 亿 LABUBU/年',
                backlog: 'Sony 电影 + POP LAND + 新 IP 储备',
                ebitdaMargin: '~40%',
                marketCap: 'HK$198B',
                nvidiaLevel: 5,
                threat: 'low',
                strength: '艺术家 IP 矩阵 · 海外 +292% · LABUBU 现象级 · 66% 毛利',
                weakness: 'LABUBU 单 IP 38% 营收 · 中概股 · 仿制品',
            },
            {
                name: '名创优品 (MINISO)',
                type: 'hyperscaler',
                ticker: 'HK:9896 / NYSE:MNSO',
                revenue2026E: 'RMB 190 亿',
                aiRevenue: 'RMB 1.9B',
                gpuFleet: '7000+ 全球门店',
                backlog: 'Chiikawa · 迪士尼授权',
                ebitdaMargin: '~25%',
                marketCap: '~HK$50B',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: '门店网络最大 · 授权 IP 执行力 · 全球 100+ 国家',
                weakness: '平均客单价低 · IP 自有性弱 · 毛利率 44%',
            },
            {
                name: '52TOYS',
                type: 'specialist',
                ticker: '未上市',
                revenue2026E: 'RMB 20-30 亿',
                aiRevenue: 'RMB 0.25B',
                gpuFleet: '中国 50+ 店',
                backlog: '日本动漫 IP 授权',
                ebitdaMargin: '~15%',
                marketCap: '~RMB 30 亿 (估)',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: '国内第二潮玩品牌 · 日漫 IP 合作深',
                weakness: '规模远小于泡泡玛特 · 海外几乎无',
            },
            {
                name: 'Funko',
                type: 'specialist',
                ticker: 'NASDAQ:FNKO',
                revenue2026E: '~$1.1B',
                aiRevenue: '~$1.1B',
                gpuFleet: '北美主导',
                backlog: '漫威 / 星球大战 / NBA 授权',
                ebitdaMargin: '~10%',
                marketCap: '~$500M',
                nvidiaLevel: 2,
                threat: 'low',
                strength: 'Pop! 系列品牌识别度 · 美国授权 IP 网络',
                weakness: '营收下滑 · 市值缩水 90% (2021→2026) · 库存管理差',
            },
            {
                name: 'Medicom (Bearbrick)',
                type: 'specialist',
                ticker: '未上市',
                revenue2026E: '~RMB 30 亿 (估)',
                aiRevenue: '~RMB 0.3B',
                gpuFleet: '日本主导',
                backlog: '收藏级 IP 联名',
                ebitdaMargin: '~20%',
                marketCap: 'N/A',
                nvidiaLevel: 3,
                threat: 'low',
                strength: 'BE@RBRICK 高端收藏品牌 30 年',
                weakness: '规模小 · 无盲盒渠道 · 零售能力弱',
            },
            {
                name: 'Sanrio (Hello Kitty)',
                type: 'hyperscaler',
                ticker: 'TSE:8136',
                revenue2026E: '~JPY 1200 亿 (RMB 60 亿)',
                aiRevenue: '~RMB 0.6B',
                gpuFleet: '全球授权',
                backlog: 'Hello Kitty 50 年 · Cinnamoroll · Kuromi',
                ebitdaMargin: '~40%',
                marketCap: '~JPY 2T (~HK$100B)',
                nvidiaLevel: 5,
                threat: 'medium',
                strength: 'IP 寿命 50 年 · 授权轻资产模式 · 全球认知',
                weakness: 'IP 老化 · 盲盒渠道缺失 · 增速慢',
            },
            {
                name: 'Hasbro',
                type: 'hyperscaler',
                ticker: 'NASDAQ:HAS',
                revenue2026E: '~$4.5B',
                aiRevenue: '~$4.5B',
                gpuFleet: '传统玩具巨头',
                backlog: 'Transformers · G.I. Joe · Magic / D&D',
                ebitdaMargin: '~15%',
                marketCap: '~$10B',
                nvidiaLevel: 2,
                threat: 'low',
                strength: '全球玩具第二 · IP 库深厚',
                weakness: '传统玩具衰退 · 高负债 · 低毛利',
            },
            {
                name: '迪士尼自营商品',
                type: 'hyperscaler',
                ticker: 'NYSE:DIS',
                revenue2026E: '~$20B+ (消费品部分)',
                aiRevenue: '~$20B',
                gpuFleet: '全球乐园 + 线上 + 授权',
                backlog: '全球第一 IP 库',
                ebitdaMargin: '~25%',
                marketCap: '~$180B',
                nvidiaLevel: 5,
                threat: 'medium',
                strength: '全球 IP 生态最强 · 电影 + 乐园 + 商品闭环',
                weakness: '潮玩非主营 · Z 世代吸引力弱于新 IP',
            },
        ],

        positioning: [
            { dimension: '2025 营收', nebius: 'RMB 371 亿', industryAvg: 'RMB 50-200 亿', leader: '迪士尼消费品 $20B', nebiusStrong: true },
            { dimension: '营收增速', nebius: '+185%', industryAvg: '+10-30%', leader: '泡泡玛特', nebiusStrong: true },
            { dimension: '毛利率', nebius: '66%', industryAvg: '30-50%', leader: '泡泡玛特', nebiusStrong: true },
            { dimension: '全球门店', nebius: '600+', industryAvg: '100-1000', leader: '名创优品 7000', nebiusStrong: false },
            { dimension: 'IP 自主性', nebius: '核心 IP 全部自主签约', industryAvg: '外部授权为主', leader: '迪士尼 / 泡泡玛特', nebiusStrong: true },
            { dimension: '海外占比', nebius: '44%', industryAvg: '20-40%', leader: 'Medicom 60%', nebiusStrong: true },
            { dimension: 'Z 世代心智', nebius: '全球 TOP 1 (潮玩)', industryAvg: '中等', leader: '泡泡玛特', nebiusStrong: true },
            { dimension: '影视化能力', nebius: 'Sony 合作启动', industryAvg: '无', leader: '迪士尼', nebiusStrong: false },
            { dimension: '单 IP 依赖度', nebius: '38% (高)', industryAvg: '20-50%', leader: '迪士尼 (最分散)', nebiusStrong: false },
            { dimension: '市值', nebius: 'HK$198B', industryAvg: 'HK$30-100B', leader: '迪士尼', nebiusStrong: true },
        ],

        marketShare2026: [
            { name: '泡泡玛特', pct: 18 },
            { name: '迪士尼消费品 (相关部分)', pct: 22 },
            { name: 'Sanrio', pct: 8 },
            { name: 'Funko', pct: 5 },
            { name: '名创优品 (潮玩部分)', pct: 5 },
            { name: 'Medicom / Bearbrick', pct: 3 },
            { name: '52TOYS / TOPTOY', pct: 4 },
            { name: '其他 (Hasbro 潮玩 / 授权 IP / 长尾)', pct: 35 },
        ],

        winLoss: [
            {
                scenario: '中国潮玩零售',
                winners: '泡泡玛特 (独占)',
                losers: '名创优品 / 52TOYS / 其他',
                reasoning: '泡泡玛特 2025 中国 208 亿 vs 第二名 52TOYS 约 20 亿，10x 规模差距',
            },
            {
                scenario: '北美 / 欧洲潮玩',
                winners: '泡泡玛特 (后来居上)',
                losers: 'Funko / 传统授权品牌',
                reasoning: 'LABUBU 北美爆红 · Funko 市值缩水 90% · 泡泡玛特抢占 Z 世代心智',
            },
            {
                scenario: '东南亚 / 韩国日本',
                winners: '泡泡玛特 (主导)',
                losers: '本地品牌',
                reasoning: '亚太市场 80 亿 +157% · 泡泡玛特已建立品牌心智',
            },
            {
                scenario: '高端收藏 (1000+ RMB)',
                winners: 'Medicom (Bearbrick) · 迪士尼限量',
                losers: '泡泡玛特 (中端为主)',
                reasoning: '泡泡玛特核心价位 59-299 元，高端收藏细分非核心战场',
            },
            {
                scenario: '影视 IP 开发',
                winners: '迪士尼 · Sanrio',
                losers: '泡泡玛特 (初期)',
                reasoning: '泡泡玛特首部电影 Sony 合作 2027 验证，之前无影视经验',
            },
            {
                scenario: 'Z 世代新 IP 创造',
                winners: '泡泡玛特',
                losers: '传统玩具巨头',
                reasoning: '泡泡玛特艺术家签约 + 盲盒机制使新 IP 孵化速度远超 Hasbro / Mattel',
            },
            {
                scenario: '主题乐园 / 沉浸式体验',
                winners: '迪士尼 · Universal',
                losers: '泡泡玛特 (POP LAND 刚起步)',
                reasoning: '主题乐园是重资产长周期生意，泡泡玛特首个 POP LAND 2023 才开业',
            },
            {
                scenario: '全球授权 IP 矩阵',
                winners: '迪士尼 · Sanrio',
                losers: '泡泡玛特 (以自有 IP 为主)',
                reasoning: '迪士尼和 Sanrio 以授权为主，收入规模大；泡泡玛特自有 IP 深但授权收入占比小',
            },
        ],

        structuralTrend:
            '未来 3 年行业结构性变化：①**潮玩全球化**——中国、东南亚、美欧 Z 世代消费文化趋同，泡泡玛特先发优势转化为结构性领先；②**IP 生命周期延伸**——从"商品"向"电影 + 乐园 + 数字化"延伸（迪士尼化），决定 10 年终局；③**盲盒商业模式被监管**——中国 2022 限制未成年盲盒销售，欧美类似法规可能跟进；④**仿制品 + 社交审美疲劳**——LABUBU 级现象级 IP 的生命周期是 3-7 年 vs 持续 30+ 年的 Hello Kitty，差别取决于影视化成败。2028 年前泡泡玛特必须：①让 CRYBABY / SKULLPANDA 等第二梯队 IP 突破 50 亿级；②LABUBU 电影商业成功；③海外占比突破 60%。三者兼得才能走上迪士尼路径。',

        tam: {
            narrative:
                '全球潮玩 + 收藏玩具 TAM 2025 ~$25B · 2030E $50-70B (CAGR 15-20%)。泡泡玛特当前全球市占 ~15-18%，若继续保持 +30% CAGR（已远低于 2025 +185%），2030 年市占 35%+ 对应营收 RMB 1000 亿+。叠加 IP 影视化 + 主题乐园 + 数字化，2035 年营收 RMB 2000 亿+ 不算激进——对应 HK$2T 市值是可能的。',
            points: [
                { year: '2022', totalTam: 180, neocloudTam: 60, selfRevenue: 0.462, status: 'actual' },
                { year: '2024', totalTam: 220, neocloudTam: 80, selfRevenue: 1.304, status: 'actual' },
                { year: '2025', totalTam: 250, neocloudTam: 100, selfRevenue: 3.712, status: 'actual' },
                { year: '2026', totalTam: 280, neocloudTam: 120, selfRevenue: 4.45, status: 'estimate' },
                { year: '2028', totalTam: 400, neocloudTam: 180, selfRevenue: 8, status: 'estimate' },
                { year: '2030', totalTam: 600, neocloudTam: 280, selfRevenue: 15, status: 'estimate' },
                { year: '2035', totalTam: 1200, neocloudTam: 600, selfRevenue: 35, status: 'estimate' },
            ],
            keyNumbers: [
                { label: '全球玩具 + 潮玩 TAM (2025)', value: '$250B', sub: '全品类', cls: 'cyan' },
                { label: '潮玩 / 收藏品子赛道', value: '$100B', sub: '2025', cls: 'purple' },
                { label: '2030E 子赛道', value: '$280B', sub: '~3x 增长', cls: 'purple' },
                { label: '泡泡玛特市占 (2025)', value: '~18%', sub: '潮玩子赛道', cls: 'green' },
                { label: '2030E 目标市占', value: '25-35%', sub: '需第二代 IP 支撑', cls: 'green' },
                { label: '10x 所需', value: 'RMB 1500 亿营收', sub: '2030-2032', cls: 'red' },
                { label: '海外占比 (2025)', value: '44%', sub: '+12pp vs 2024', cls: 'green' },
                { label: '潮玩子赛道 CAGR', value: '~20%', sub: '2025-2030', cls: 'purple' },
            ],
            sourcesNote:
                '数据来源：Euromonitor 全球玩具市场 + Frost & Sullivan 潮玩赛道 + 公司年报。2028-2035 为基于"Z 世代消费文化全球趋同 + 泡泡玛特持续领先"的推演。',
        },

        radar: {
            peer1Name: '名创优品 (MINISO)',
            peer2Name: 'Funko',
            dimensions: [
                { dim: '营收规模', self: 9, peer1: 7, peer2: 5 },
                { dim: '营收增速', self: 10, peer1: 5, peer2: 3 },
                { dim: '毛利率', self: 10, peer1: 6, peer2: 5 },
                { dim: 'IP 自主性', self: 9, peer1: 3, peer2: 4 },
                { dim: '海外化', self: 8, peer1: 9, peer2: 5 },
                { dim: 'Z 世代心智', self: 10, peer1: 6, peer2: 7 },
                { dim: 'IP 矩阵深度', self: 8, peer1: 5, peer2: 8 },
                { dim: '影视化能力', self: 4, peer1: 2, peer2: 3 },
            ],
            note: '1-10 分主观评分。泡泡玛特在营收增速、毛利率、IP 自主性、Z 世代心智几乎全面领先，形状尖锐；唯一短板是影视化能力（迪士尼和 Sanrio 仍是标杆）。Sony LABUBU 电影若成功，2027 年后这一维度将显著提升。',
        },
    },

    valuation: {
        metrics: [
            { metric: 'EV/Sales (TTM)', value: '~5x', benchmark: '消费品行业 3-6x', read: 'fair' },
            { metric: 'Forward P/E (2026E)', value: '~13x', benchmark: '中国消费白马 15-25x · MINISO ~20x', read: 'cheap' },
            { metric: 'Forward P/E (2027E)', value: '~11x', benchmark: 'Sanrio ~22x · 迪士尼 ~18x', read: 'cheap' },
            { metric: 'PEG (2026E 20% 增速)', value: '~0.65', benchmark: '< 1 视为便宜', read: 'cheap' },
            { metric: 'P/B', value: '~8x', benchmark: '消费白马 5-10x', read: 'fair' },
            { metric: '股息率', value: '~2.5%', benchmark: '港股消费股 1-3%', read: 'fair' },
        ],
        sotp: [
            { item: '中国主业 (2026E)', valuation: 'HK$85-105B', method: '12x 2026E 中国净利 RMB 80 亿 × 汇率', note: '成熟业务' },
            { item: '海外业务 (高增长)', valuation: 'HK$70-95B', method: '20x 2026E 海外净利 RMB 40 亿', note: '海外 +291% 增速溢价' },
            { item: 'LABUBU IP 价值', valuation: 'HK$30-50B', method: 'DCF：THE MONSTERS 未来 5 年现金流折现', note: 'LABUBU 电影后可能重估' },
            { item: 'POP LAND + 影视 + 数字化期权', valuation: 'HK$10-25B', method: '早期期权，类比迪士尼早期乐园价值', note: 'Sony 电影触发' },
            { item: '现金净额 (RMB 120+ 亿)', valuation: 'HK$13-15B', method: '现金 - 短期负债', note: '干净资产负债表' },
        ],
        sotpTotal: 'HK$208-290B',
        sotpPerShare: '对应合理区间 HK$158-220 (当前 HK$151 位于区间下沿)',
    },

    recommendation: {
        rating: '持有 · 回调加仓',
        ratingCls: 'neutral',
        timeHorizon: '3-5 年（10 年视角下的中期节奏）',
        positionSize: '4-6% 组合权重上限 · 中国消费 IP 敞口',
        addingZone: 'HK$120-140 (SOTP 下沿 + 财报后低点支撑)',
        stopLoss: 'LABUBU 季度销量连续 2 季度 <1500 万只 / CRYBABY 等第二梯队 IP 停滞 / 中美消费品关税大幅加征 → 重新评估',
        thesis:
            '当前 HK$151 相对分析师共识 PT HK$351 上行空间 131%，估值不贵（Forward P/E 13x · PEG 0.65）。看多核心在 **LABUBU 现象级 IP + 海外 +292% + 迪士尼路径刚铺开**；看空核心在 **LABUBU 单一依赖 + 2026 增速骤降到 20% + 潮玩赛道周期性魔咒**。适合作为**"全球 IP 消费品"敞口**（替代 MINISO / 名创优品），同时与 Sanrio / 迪士尼搭配组合。但要接受："要么 LABUBU 电影 2027 爆款、公司走上迪士尼路径；要么 LABUBU 2028 退潮、估值压缩到 HK$80-100"的二元分化风险。',
        keyAssumptions: [
            '2026-2027 LABUBU 销量至少维持 8000 万-1 亿只/年',
            'CRYBABY / SKULLPANDA 等第二梯队 2027 年至少一个破 50 亿',
            '2027 年 LABUBU 电影上映且票房 >$150M',
            '海外占比 2027 年 >55%',
            '中美消费品关税不大幅加征（+10%+ 会触发重新评估）',
        ],
        sizingFormula: {
            method: 'Kelly 公式（保守版，使用 1/2 Kelly）',
            formula: 'f* = (期望回报率 − 无风险利率) / 方差 × 0.5',
            inputs: [
                { label: '10Y 期望回报率', value: '13.5% CAGR' },
                { label: '无风险利率', value: '4.0% (港币)' },
                { label: '情景标准差 (10Y)', value: 'HK$598B (~85% of E[Mcap])' },
                { label: '完整 Kelly', value: '~8%' },
                { label: '1/2 Kelly (保守)', value: '~4%' },
            ],
            computedSize: '4-6% 组合权重',
            reasoning:
                '10Y 情景标准差占期望值 ~85%，在已覆盖的几家公司中属中等（低于 Coinbase/Circle/Robinhood 的 95-110%）——主要因泡泡玛特的下行保护来自 RMB 120+ 亿现金流 + 多 IP 矩阵。但"单 IP 依赖"的尾部风险不可量化，仍应取 1/2 Kelly 保守仓位。**分层建仓**：基础 4%（当前估值 + 共识 Strong Buy）+ CRYBABY / 星星人突破 50 亿触发 +1%（第二梯队验证）+ LABUBU 电影上映票房 >$150M +1%（迪士尼路径确认）= 最高 6%。',
        },
    },

    keyPersonRisks: [
        {
            name: '王宁 (创始人 · 董事长 · CEO)',
            role: '战略 · IP 方向 · 文化塑造',
            departProb: '低 (~3% / 5 年)',
            departImpact: '极高 —— 股价短期 -30%，战略连续性断裂',
            mitigation: '15 年长期执掌 · 同股不同权确保控制 · 司德 (COO) 可短期代理',
            criticality: 'critical',
        },
        {
            name: 'Kasing Lung (LABUBU 创作者)',
            role: 'THE MONSTERS IP 源头',
            departProb: '中 (~10% / 5 年)',
            departImpact: '极高 —— 若合作关系生变，LABUBU 新品开发停滞',
            mitigation: '长期独家合作合约 · 深度利益绑定 · 泡泡玛特商品化权完整',
            criticality: 'critical',
        },
        {
            name: '文德一 (总裁 · 海外业务负责人)',
            role: '海外战略 · 北美 / 欧洲执行',
            departProb: '中 (~15% / 5 年)',
            departImpact: '高 —— 海外扩张节奏受影响',
            mitigation: '2018 起搭建海外团队已成建制 · 替代者可从 LVMH / Nike 等全球消费品挖角',
            criticality: 'high',
        },
        {
            name: '司德 (COO · 联合创始人)',
            role: '国内运营 · 供应链',
            departProb: '低 (~8% / 5 年)',
            departImpact: '中 —— 国内运营节奏放缓',
            mitigation: '与王宁共同创业 · 深度利益绑定',
            criticality: 'medium',
        },
    ],

    cashFlow: {
        narrative:
            '泡泡玛特是**"典型的高毛利消费品现金奶牛"**：2025 OCF 约 RMB 120 亿 · FCF RMB 100 亿+。**轻资产模型**：无自有工厂（代工）· 库存周转 90 天 · CapEx 主要在门店扩张 + IP 研发。**关键观察**：海外门店扩张的 payback 周期是否 <18 个月（中国店一般 12 个月回本，海外 18-24 个月属正常）。',
        rows: [
            { year: '2022', ocf: 850, icf: -400, fcf: -50, freeCashFlow: 450, status: 'actual' },
            { year: '2023', ocf: 1500, icf: -600, fcf: -100, freeCashFlow: 900, status: 'actual' },
            { year: '2024', ocf: 4000, icf: -1500, fcf: -500, freeCashFlow: 2500, status: 'actual' },
            { year: '2025', ocf: 12000, icf: -3000, fcf: -2000, freeCashFlow: 9000, status: 'actual' },
            { year: '2026E', ocf: 15000, icf: -4000, fcf: -3000, freeCashFlow: 11000, status: 'estimate' },
            { year: '2027E', ocf: 18000, icf: -5000, fcf: -3500, freeCashFlow: 13000, status: 'estimate' },
            { year: '2028E', ocf: 22000, icf: -6000, fcf: -4000, freeCashFlow: 16000, status: 'estimate' },
        ],
        conversionNote:
            'Cash Conversion Ratio = OCF / Net Income。2025 约 0.92x (RMB 120 亿 / 130.8 亿)，略低于 1x 是因为库存扩张和应收增加。2026+ 预期稳定在 0.95-1.05x。注：RMB 单位 (百万元)。',
        keyRisks: [
            'LABUBU 退潮时 OCF 可能从 RMB 120 亿急降至 60-80 亿（2022 国内降温先例）',
            '海外门店大规模扩张期 CapEx 占 OCF 30%，若扩张速度过快会压缩 FCF',
            '库存减值：潮玩单品生命周期短，预判失误会导致 10-20% 库存减值',
            '中美关税变化可能直接影响海外业务现金回流（人民币升值 / 贬值都有影响）',
        ],
    },

    historicalValuation: {
        narrative:
            '泡泡玛特 2020-12 港股 IPO，有 5 年交易历史。**EV/Sales 区间 2-15x**，反映潮玩周期性。当前 ~5x 2026E 处于上市以来 **40% 分位**（偏便宜）。对标：Sanrio ~7x · 迪士尼 ~3x · Funko ~0.5x。潮玩赛道的历史估值波动极大，当前位置已反映 2026 增速放缓预期。',
        history: [
            { period: '2020-Q4 (IPO)', evSales: 15, note: 'IPO 狂热 HK$78' },
            { period: '2022-Q2 (国内降温)', evSales: 3, note: 'HK$12 低点' },
            { period: '2022-Q4', evSales: 2, note: 'HK$10 历史低' },
            { period: '2023-Q4 (LABUBU 启动)', evSales: 4, note: '海外复苏' },
            { period: '2024-Q4', evSales: 8, note: 'HK$80+' },
            { period: '2025-Q4 (高点)', evSales: 13, note: 'HK$300 历史高' },
            { period: '2026-Q1 (业绩后)', evSales: 6, note: '业绩 miss 回调 -22%' },
            { period: '2026-Q2 (当前)', evSales: 5, note: 'HK$151 当前' },
        ],
        currentPercentile: '40%',
        verdict: 'fair',
    },

    downsideMetrics: {
        narrative:
            '只看期望 13.5% CAGR 是 research theater。基于 4 档情景，泡泡玛特 10Y **情景标准差约 HK$598B**（~85% 期望值）。**5Y 内亏损 30%+ 的概率约 35%**——LABUBU 退潮 + 中美冲突 + 消费降级三重黑天鹅不是小概率事件。但 RMB 120+ 亿现金流 + 49% 王宁控股稳定性 + 多 IP 矩阵提供了下行保护。',
        scenarioStdDev: 598,
        sharpeLike: 0.85,
        probLoss30Pct5Y: 35,
        maxDrawdownEstimate: '-40% 到 -70%（2022 年曾从 HK$107 跌至 HK$10 = -91%，下次预计 -50-60%）',
        downsideToUpsideRatio: '下行 1 vs 上行 8（单次下跌 HK$40B，单次上冲 HK$350B+）',
    },

    sensitivity: {
        narrative: '哪个变量对 10Y 期望市值最敏感？按单变量 ±1σ 扰动排序 ——',
        variables: [
            { variable: 'LABUBU 年销量 5000 万 vs 1.5 亿', downImpact: -200, upImpact: 250, description: '核心爆款的存续 · 38% 营收所在' },
            { variable: '第二梯队 IP 突破 50 亿级', downImpact: -150, upImpact: 300, description: 'CRYBABY / SKULLPANDA / 星星人' },
            { variable: '海外占比 2030 35% vs 65%', downImpact: -120, upImpact: 220, description: '全球化路径' },
            { variable: 'LABUBU 电影票房 <$50M vs >$300M', downImpact: -80, upImpact: 180, description: '迪士尼路径验证' },
            { variable: '毛利率 ±5pp', downImpact: -70, upImpact: 80, description: '海外净利率 + 仿制品影响' },
            { variable: '中美消费品关税变化', downImpact: -100, upImpact: 20, description: '美洲 18% 营收暴露' },
            { variable: '潮玩赛道 CAGR 15% vs 25%', downImpact: -60, upImpact: 120, description: 'TAM 整体速度' },
        ],
        takeaway:
            '**最敏感三变量：LABUBU 销量、第二梯队 IP 突破、海外占比演进**。每季度追踪这三项。尤其 LABUBU 季度销量是"先行指标"——任何连续 2 季度 <1500 万的下滑都意味着热度退潮开始。',
    },

    bearPlaybook: {
        scenario: '"悲观：LABUBU 退潮 · 接续 IP 不及预期"（28% 概率）的完整 ruin 路径',
        steps: [
            {
                when: '2026 Q4 - 2027 Q1',
                event: 'LABUBU 社交热度明显下降 · 小红书 "LABUBU 审美疲劳" 讨论增加',
                signal: 'Google Trends LABUBU 连续 3 月负增长；TikTok #LABUBU 视频参与度 -40%',
            },
            {
                when: '2027 Q1 - Q2',
                event: 'LABUBU 季度销量跌破 1500 万只',
                signal: '2027 中报 THE MONSTERS 营收 YoY -20%',
            },
            {
                when: '2027 Q3 - Q4',
                event: 'LABUBU 电影票房低于预期 ($100M 以下)，IP 影视化失败',
                signal: '首周末北美票房 <$30M；Rotten Tomatoes 评分 <60%',
            },
            {
                when: '2028 Q1',
                event: 'CRYBABY / 星星人等接续 IP 未达到 LABUBU 级别',
                signal: '第二梯队 IP 营收合计 < RMB 100 亿',
            },
            {
                when: '2028 H2',
                event: '海外门店部分开始关店 · 库存减值',
                signal: '北美门店数净关店 · 库存减值 RMB 10-20 亿',
            },
            {
                when: '2029-2030',
                event: '股价稳定在 HK$80-100 · 公司沦为"中国潮玩龙头但增长乏力"',
                signal: '营收增速 <15% · Forward P/E 压缩至 8-10x',
            },
        ],
        exitTrigger:
            '任一步骤在时间表前 1 个季度提前发生 → **减仓 50%**。连续 2 条发生 → **清仓观望**。特别关注：LABUBU 季度销量 + 社交热度两项"先行指标"。',
    },

    capitalAllocation: {
        narrative:
            '泡泡玛特的资本配置是已覆盖 6 家中**最好的之一**：轻资产 + 高毛利 + 2.5% 股息 + 高 ROIIC。王宁长期主义 + 不做无聊并购，把现金还给股东（派息）或再投入 IP 孵化。这是"消费品现金奶牛"的经典资本配置模板。',
        scores: [
            { dimension: 'ROIIC', label: '增量资本回报率', score: 5, detail: '消费品轻资产模型 · 毛利 66% · 净利率 35% · ROIIC 估算 30%+', evidence: '2025 年报' },
            { dimension: 'Buyback', label: '回购节奏', score: 3, detail: '业绩会表达过回购意愿但尚未大规模执行；港股流动性约束', evidence: '2025 Q4 业绩会' },
            { dimension: 'Dividend', label: '股息政策', score: 4, detail: '2.5% 股息率 · 港股消费股中位偏上 · 可预期稳步提升', evidence: '2025 年分红公告' },
            { dimension: 'M&A', label: '并购命中率', score: 3, detail: '历史上极少并购；主要靠内生 IP 孵化（MOLLY/LABUBU/SKULLPANDA）。未来 Sony 合作算弱并购', evidence: '公司历史' },
        ],
        overallGrade: 'A',
        historicalROIIC: '~25-35% (消费品稳态 · 业内最高)',
    },

    gapAnalysis: {
        narrative:
            '泡泡玛特 2026 是"管理层主动降预期"经典案例。2025 +185% 不可能复制，管理层给出 +20% 保守指引，卖方共识仍维持 +30%。gap 5-10pp 是业绩后股价 -22% 的直接原因。真实增速落在 +25% 附近概率最高。',
        rows: [
            { metric: '2026 营收增速', guidance: '+20% (保守)', consensus: '+30%', selfAssumption: '+25%', gap: '-5-10pp', risk: 'high', note: '已兑现为 -22% 股价' },
            { metric: '2026 LABUBU 销量', guidance: '未指引', consensus: '1.2-1.5 亿只', selfAssumption: '1 亿只 (保守)', gap: '-20%', risk: 'high', note: '单品依赖' },
            { metric: '2026 海外占比', guidance: '">50%"', consensus: '52%', selfAssumption: '55%', gap: '+3pp 乐观', risk: 'medium' },
            { metric: '2026 经调整净利率', guidance: '">35%"', consensus: '36%', selfAssumption: '36%', gap: '基本一致', risk: 'low' },
            { metric: 'CRYBABY / SKULLPANDA 破 50 亿', guidance: '未指引', consensus: '~40% 概率', selfAssumption: '50%', gap: '乐观 10pp', risk: 'medium' },
        ],
        takeaway:
            '**最关键 Gap：2026 增速 +20% vs +30%**。这是"管理层先发保守 + 卖方滞后下修"的经典套利机会。若 Q1-Q2 2026 真实增速 ≥+25%，共识会反而上修，可能触发 +15% 反弹；若 <+20%，卖方进一步下修触发 -20% 二次回调。',
    },

    benchmarkComparison: {
        narrative:
            '泡泡玛特 10Y 期望 CAGR 13.5% vs 被动 60/40 组合 7.8%——超额 5.7pp，**justify 4-6% 仓位**。相对港股恒生指数（CAGR ~7%）超额 6.5pp，作为港股核心持仓值得。',
        alternatives: [
            { name: 'SPY (S&P 500)', ticker: 'SPY', expectedReturn5Y: 9, expectedReturn10Y: 10, note: '美国宽基' },
            { name: '恒生指数 (HSI)', expectedReturn5Y: 6, expectedReturn10Y: 7, note: '港股宽基' },
            { name: '60/40', expectedReturn5Y: 7, expectedReturn10Y: 8, note: '经典稳健' },
            { name: '10Y 国债 (TLT)', ticker: 'TLT', expectedReturn5Y: 4, expectedReturn10Y: 4.5, note: '无风险' },
            { name: 'KWEB (中概科技 ETF)', expectedReturn5Y: 8, expectedReturn10Y: 10, note: '中国科技对照' },
            { name: '迪士尼 (DIS)', ticker: 'DIS', expectedReturn5Y: 7, expectedReturn10Y: 8, note: '全球 IP 生态对照' },
        ],
        selfReturn5Y: 8.4,
        selfReturn10Y: 13.5,
        excessReturn5Y: 1.4,
        excessReturn10Y: 5.7,
        justifiesPosition: 'yes',
        takeaway:
            '**超额 5.7pp justify 4-6% 仓位**。相对恒生指数和中概股都有清晰超额。特别适合"港股敞口 + 消费 IP"双重需求——如果你已持 KWEB 或腾讯 3-5%，泡泡玛特的边际多元化依然有（IP 消费 vs 平台互联网，不同驱动因子）。',
    },

    trackRecord: {
        narrative:
            '本分析锚定 2026-04-20。以下 6 条可验证命题，特别关注 LABUBU 季度销量趋势。',
        assumptions: [
            { assumption: '2026 营收增速 ≥+20% (管理层指引下限)', setAt: '2026-04-20', targetDate: '2027-03-31', targetValue: '≥+20%', verdict: 'pending' },
            { assumption: 'LABUBU 2026 销量 ≥8000 万', setAt: '2026-04-20', targetDate: '2027-03-31', targetValue: '≥8000 万', verdict: 'pending', note: '2025 过 1 亿，允许回落' },
            { assumption: '2026 海外营收占比 ≥50%', setAt: '2026-04-20', targetDate: '2027-03-31', targetValue: '≥50%', verdict: 'pending' },
            { assumption: 'Sony LABUBU 电影 2027 年内上映', setAt: '2026-04-20', targetDate: '2027-12-31', targetValue: 'released', verdict: 'pending', note: 'IP 影视化关键验证' },
            { assumption: 'CRYBABY 或 SKULLPANDA 2026 年破 50 亿', setAt: '2026-04-20', targetDate: '2027-03-31', targetValue: '≥50 亿', verdict: 'pending', note: '第二梯队 IP 突破' },
            { assumption: '经调整净利率 2026 保持 ≥33%', setAt: '2026-04-20', targetDate: '2027-03-31', targetValue: '≥33%', verdict: 'pending' },
        ],
        hitRate: 'N/A (全部 pending)',
    },

    correlation: {
        narrative:
            '泡泡玛特是**中国消费 + 全球 IP β 的复合敞口**：涨跌 50% 由中国消费决定、30% 由全球 Z 世代情绪决定、20% 由 LABUBU 故事本身。如果组合中已持有名创优品 / 腾讯 / 中国消费白马，加泡泡玛特的**边际多元化有限**。真正的 hedge 是**反周期 + 非中国资产**。',
        rows: [
            { asset: '名创优品 (MINISO)', beta: 0.9, correlation: 0.70, hedgeValue: 'low', note: '同赛道中国消费品 · 竞争 + 协同' },
            { asset: '腾讯 (HK:00700)', beta: 0.8, correlation: 0.60, hedgeValue: 'medium', note: '港股消费互联网 β' },
            { asset: 'Sanrio (TSE:8136)', beta: 0.5, correlation: 0.55, hedgeValue: 'medium', note: '全球 IP 消费对标' },
            { asset: '迪士尼 (DIS)', beta: 0.4, correlation: 0.40, hedgeValue: 'medium', note: 'IP 生态巨头；相关但非同市场' },
            { asset: '茅台 (SH:600519)', beta: 0.3, correlation: 0.30, hedgeValue: 'medium', note: '中国消费白马但品类完全不同' },
            { asset: '美股成长股 (QQQ)', beta: 0.7, correlation: 0.40, hedgeValue: 'medium', note: '全球成长股情绪共振' },
            { asset: '10Y 国债 (TLT)', beta: -0.3, correlation: -0.35, hedgeValue: 'high', note: '降息受益 · 中国消费也受益于低利率' },
            { asset: '黄金 (GLD)', beta: -0.2, correlation: -0.15, hedgeValue: 'medium', note: '宏观对冲 · 中美冲突时同时上涨' },
        ],
        suggestedHedge:
            '如果泡泡玛特占组合 4-6%，建议搭配：①**反向**：5-7% TLT + 3-5% GLD（降息受益 + 地缘对冲）；②**不要同时持有**：泡泡玛特 + 名创优品 + 中国消费 ETF 三者加总超过 12% 是重大集中度风险；③**对标非中国全球 IP**：可搭配 Sanrio 2-3% 或 迪士尼 3-5%，同赛道不同市场分散。**最佳组合**：泡泡玛特 5% + Sanrio 2% + 迪士尼 3% + TLT 6% + GLD 2%（全球 IP 消费分散 + 宏观对冲）。',
    },
}
