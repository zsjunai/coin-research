import type { CompanyDetail } from '@/types/company'

export const strategy: CompanyDetail = {
    id: 'strategy',
    ticker: 'NASDAQ:MSTR',
    name: 'Strategy (MicroStrategy)',
    tagline:
        '全球最大的"上市公司比特币财库"。2025-02 由 MicroStrategy 改名为 Strategy，主营是用普通股 ATM + 5 只优先股（STRK/STRF/STRC/STRH/STRG/STRD）+ 多档可转债把资本市场工具变成"BTC 复利飞轮"。**截至 2026-04 持有 818,334 BTC**（占总供应 3.897%）。**关键反转事实（2026-05-08）**：股价从 2025-Q4 高点 $543 跌至 **$186.90 (-65%)**；**mNAV 已从 2024 末峰值 3.0x 压缩至 0.97x（市值基础）**——首次自 2024-01 以来跌破 NAV，是历史罕见折价窗口；CAMT 风险已被 IRS Notice 2025-49 / 2025-46 / 2026-7 明确豁免（FVI Exclusion Option）。**核心修正**：当 mNAV < 1.0x 折价买入时，每股 BTC 价值 $192.66 vs 股价 $186.90（**折价 3%**）+ BTC per share 飞轮（2025 BTC Yield +22.8% / 2026 YTD +9.6%）+ mNAV 均值回归 alpha = **vs IBIT 直接（加权情景下 26.1%）超额 +9.2pp / vs 60-40 IBIT/SPY +13.6pp / vs 60-40 SPY/国债 +27.5pp**（用加权 multiplier 算，非固定 IBIT 18% 假设）。**最大风险**：18 个月股息覆盖期（$1.5B/年优先股股息义务）+ Saylor 2026-05-05 首次表示可能卖 BTC 服务股息 + Q1 2026 fair value 净亏 -$12.54B（BTC 跌 25% 触发）。',
    date: '2026-05-08',

    priceCards: [
        { label: '当前股价', value: '~$186.90', sub: '2026-05-08 (从 $543 高点 -65%)', cls: 'cyan' },
        { label: '52 周波动', value: '$140 – $543', sub: 'YTD +23% / 1 月 +56%', cls: 'red' },
        { label: '市值', value: '~$65.27B', sub: '约 349M 股流通', cls: 'purple' },
        { label: 'BTC 持仓', value: '818,334 BTC', sub: '占总供应 3.897%', cls: 'cyan' },
        { label: 'BTC NAV / 股', value: '~$192.66', sub: 'BTC=$82,177 实价', cls: 'green' },
        { label: 'mNAV (市值/NAV)', value: '0.97x', sub: '首次 < 1 自 2024-01；EV 1.23x', cls: 'green' },
    ],

    keyFacts: {
        '当前股价': '$186.90 (2026-05-08)',
        '市值': '~$65.27B',
        'BTC 持仓': '818,334 BTC (2026-04 最新)',
        'BTC 占总供应': '3.897%',
        'BTC 当前价': '$82,177 (从 2025-Q4 $108K 已跌 24%)',
        'BTC NAV': '~$67.25B',
        'mNAV (市值基础)': '0.97x (首次 < 1 自 2024-01)',
        'mNAV (EV 基础)': '1.23x (含 $20.5B 资本结构)',
        '每股 BTC 价值': '$192.66 (股价折价 -3%)',
        '已发行普通股': '~349M',
        '总债务': '~$13B (预计 2026 末 $19B)',
        '优先股面值': '~$7.5B (预计 2026 末 $15.5B)',
        '5 只优先股票息合计': '~$1.5B / 年股息义务',
        '股息覆盖期': '~18 个月（基于当前现金 + BTC 借贷能力）',
        'Q1 2026 营业亏损': '-$14.47B (含 -$14.46B 未实现 BTC 减值)',
        'Q1 2026 净亏损': '-$12.54B / EPS -$38.25',
        'Q1 2026 BTC Yield': '+5.6% (YTD +9.6% by 2026-04)',
        '2025 全年 BTC Yield': '+22.8%',
        'CAMT 状态': 'FVI Exclusion 已豁免 (Notice 2025-49 / 2026-7)',
        'Saylor 2026-05 公开': '首次表示可能卖 BTC 服务股息',
        '21/21 资本计划': '$42B 总额（$21B 股权 + $21B 固收）2024-2027',
        '最近一次买入': '34,164 BTC (2026-04-20)',
        '更名时间': '2025-02 (MicroStrategy → Strategy)',
        '指数纳入': '2024-12 进入 Nasdaq-100；S&P 500 提案仍被拒',
    },

    contracts: [
        { customer: '"21/21" 资本计划', amount: '$42B 已用 / $42B 计划', years: '2024-2027', detail: '$21B 普通股 ATM + $21B 固定收益（可转债 + 优先股），2024-10 公布' },
        { customer: 'STRK 永续优先股', amount: '~$1.0B 面值', years: '永续 · 8% 票息', detail: '可转换为普通股的优先股，B 股结构' },
        { customer: 'STRF 永续优先股', amount: '~$1.5B 面值', years: '永续 · 10% 票息', detail: '不可转换 · 高级优先股' },
        { customer: 'STRH/STRG/STRD 优先股', amount: '~$3.0B 面值', years: '永续', detail: '2025 全年陆续发行，差异化票息与赎回条款' },
        { customer: '可转债组合', amount: '~$8.2B', years: '2027-2032 多档', detail: '多笔零息或低息 · 行权价高于现价 30-50%；2027 第一档到期' },
    ],

    subsidiaries: [
        { name: 'BTC Treasury (核心资产)', desc: '~597K BTC 的全球最大上市公司持仓', stake: '直接持有', value: '~$61.5B (BTC=$103K)' },
        { name: 'Strategy ONE (BI 软件)', desc: '企业级 AI 增强分析平台，年化收入 ~$455M', stake: '全资', value: '$3-5B (10x 营收)' },
        { name: 'Strategy Mosaic AI', desc: 'BI + LLM 集成产品线', stake: '全资', value: '已并入 Strategy ONE 估值' },
        { name: '资本市场工具矩阵', desc: '5 只优先股 + 多档可转债 + ATM = 全球最完整的 BTC 募资管道', stake: '自营发行', value: '溢价 NPV $20-30B (飞轮期权)' },
    ],

    bullPoints: [
        { title: '当前 mNAV 0.97x = 历史罕见折价窗口（核心反转事实）', body: 'mNAV 从 2024-12 峰值 3.0x → 2025-07 1.91x → 2025-11 跌破 1.0x → 当前 0.97x；首次自 2024-01 以来 < 1.0x；每股 BTC 价值 $192.66 vs 股价 $186.90（折价 3%）；这是过去 28 个月罕见的"BTC 折价 + 飞轮锁定"双重买点' },
        { title: '全球最大上市公司 BTC 持仓 (818K BTC = 3.897% 总供应)', body: 'BTC 持仓 5 个月内从 597K → 818K（+37%）；规模本身就是壁垒；已成"系统重要性"被动资金标的（Nasdaq-100 + 多个加密指数）；最近 2026-04-20 单次买入 34,164 BTC' },
        { title: 'BTC per share 飞轮真实有效（2025 BTC Yield +22.8%）', body: '2025 全年 BTC Yield +22.8% / 2026 YTD +9.6%；STRC 优先股创新（不稀释普通股）让 BTC per share 持续增厚；这是 IBIT 没有的 alpha 来源（IBIT 每股 BTC 含量恒定）' },
        { title: 'CAMT 风险已豁免（IRS Notice 2025-49 / 2026-7）', body: '2025-09 IRS 明确 "FVI Exclusion Option"——未实现数字资产升值/减值豁免 CAMT；2026-02 Notice 2026-7 进一步确认；之前担忧的 15% CAMT 风险**基本被移除**（暂时但 Saylor 持续游说永久豁免）' },
        { title: '资本市场工具矩阵无对手 + STRC 创新', body: '普通股 ATM + 5 只优先股（STRK 8% / STRF 10% / STRC 11.5%）+ 多档可转债 = 全球最完整的 BTC 募资管道；STRC 2025-07 推出后连续 7 月加息；2026-04 月维持 11.5%' },
        { title: 'Saylor 战略灵魂 + 个人化叙事', body: '已成全球加密圈"教父级"角色；个人 ~120K BTC 与公司利益高度一致；与 Trump-Vance + 美国 BTC 主权战略关联（Strategic BTC Reserve 倡议）' },
        { title: 'BTC 货币化主流化期权 + 美国战略储备', body: '若 BTC 成全球储备资产 / 美国战略储备（已立法提案），TAM $5T+，MSTR 是上市市场最直接的杠杆工具；超级牛市情景 10Y 10x+ 真实可能' },
    ],

    bearPoints: [
        { title: '18 个月股息覆盖期是真实流动性悬崖', body: '$1.5B/年优先股股息义务 vs 软件 OCF 仅 $50-70M；当前现金 + BTC 借贷能力支撑 ~18 个月；如果 BTC 持续跌 18 个月（如 2022 重演），Saylor 必须卖 BTC 服务股息（已 2026-05-05 公开承认）' },
        { title: 'Q1 2026 净亏 -$12.54B 是 fair value 会计放大波动信号', body: 'BTC 跌 25% (Q1 2026) 触发 -$14.46B 未实现减值；FASB 2025 公允价值新规让 BTC 波动直接进损益表；机构持有人难建模 → 估值倍数受压制；GAAP 业绩极不稳定' },
        { title: 'Saylor 首次表示可能卖 BTC 服务股息（2026-05-05）', body: '从 "never sell" 战略 → 首次承认可能减持；CoinDesk / The Block 报道；这是飞轮叙事的关键裂缝；如果减持 BTC 实际发生，BTC per share 将开始下降' },
        { title: 'IBIT 是更纯净的 BTC 持仓方式', body: '现货 BTC ETF 费率 0.25%，结构透明无稀释 + 无优先股 cost；MSTR 的 alpha 仅在 mNAV < 1.0x 折价时存在；如果 mNAV 长期维持 < 1（25% 概率），MSTR 永远跑输 IBIT' },
        { title: '资本结构 cost = $1.5B / 年（不可避免）', body: '5 只优先股票息合计 ~$1.5B / 年；可转债利息 + 转股稀释；这是 BTC 飞轮永远抹不去的"过路费"；即使 BTC 横盘也吃掉每股 BTC 增长' },
        { title: '熊市中 mNAV 飞轮反向 = 死亡螺旋风险', body: 'mNAV < 1 时增发是稀释（不增厚）；如果 mNAV 跌至 0.5x（2022 年水平），飞轮反向 + 优先股票息绞死现金流 + 强制减持 BTC = 死亡螺旋；概率 10-15% 但破坏性极大' },
        { title: 'Saylor 个人风险传导', body: 'Saylor 持有 B 类股 10:1 投票权，实际控制公司决策；他个人健康/法律/政治风险会直接传导到 mNAV 估值（与 PLTR 的 Karp 类似）' },
        { title: '永续稀释是结构性问题', body: '21/21 计划要发 $42B；每年股本以 15-25% 速度膨胀；只有 mNAV > 1.0x 时增发才增厚 BTC per share；当前 mNAV 0.97x 临界，未来可能再次跌破 → 增发反噬' },
    ],

    scenarios: [
        {
            name: '超级牛市: BTC 40% CAGR (ARK 基线) + 美国战略储备 + mNAV 回 1.5x',
            cls: 'bull',
            prob: 15,
            y5Mcap: '$800 – 1,100B',
            y5Value: 950,
            y10Mcap: '$5 – 8T',
            y10Value: 6500,
            desc: 'BTC 10Y CAGR 40%（ARK 基线 / Cathie Wood 牛市）→ BTC 价 5Y $400K / 10Y $2.4M；持仓 5Y 1.5M / 10Y 2.5M；mNAV 回 1.5x；BTC per share 5Y +30% / 10Y +50%；股价 5Y ~$2,700 / 10Y ~$11,000',
        },
        {
            name: '基线: BTC 25-30% CAGR (主流共识) + mNAV 回归 1.2x',
            cls: 'bull',
            prob: 40,
            y5Mcap: '$420 – 580B',
            y5Value: 500,
            y10Mcap: '$1.5 – 2.5T',
            y10Value: 1900,
            desc: 'BTC 10Y CAGR 28%（摩根大通线 / Cathie Wood 基线）→ BTC 价 5Y $254K / 10Y $763K；持仓 5Y 1.3M / 10Y 1.8M；mNAV 0.97 → 1.2x（均值回归）；BTC per share 5Y +20% / 10Y +30%；股价 5Y ~$830 / 10Y ~$3,200',
        },
        {
            name: '横盘: BTC 12% CAGR + mNAV 维持 1.0x',
            cls: 'neutral',
            prob: 30,
            y5Mcap: '$120 – 180B',
            y5Value: 150,
            y10Mcap: '$300 – 450B',
            y10Value: 380,
            desc: 'BTC 10Y CAGR 12%（接近 SPY）→ BTC 价 5Y $145K / 10Y $255K；持仓 5Y 1.1M / 10Y 1.3M；mNAV 维持 0.95-1.05x；BTC per share 仅微增；MSTR 沦为"BTC ETF + 微小溢价"工具；股价 5Y ~$280 / 10Y ~$630',
        },
        {
            name: '熊市: BTC 0% CAGR + mNAV 跌至 0.7x + Saylor 卖 BTC',
            cls: 'bear',
            prob: 12,
            y5Mcap: '$25 – 45B',
            y5Value: 35,
            y10Mcap: '$50 – 80B',
            y10Value: 65,
            desc: 'BTC 持续 18+ 月低于 $60K → Saylor 强制减持服务 $1.5B 股息 → BTC per share 反向；mNAV 跌至 0.5-0.7x；持仓 5Y 800K / 10Y 1M（部分减持）；股价 5Y ~$65 / 10Y ~$110',
        },
        {
            name: '死亡螺旋: BTC -50% + 优先股违约 + 公司重组',
            cls: 'bear',
            prob: 3,
            y5Mcap: '$3 – 8B',
            y5Value: 5,
            y10Mcap: '$5 – 12B',
            y10Value: 8,
            desc: 'BTC 跌穿 $25K + Saylor 退场 + 信用利差爆炸 → 优先股转股潮 / 可转债违约；公司被迫重组或破产清算；普通股近乎 wipe out',
        },
    ],

    tenXGene: [
        { dim: '软件边际成本 · 规模化杠杆', tenBagger: '边际成本 ≈ 0', nebius: '资产管理边际成本几乎为 0，但合规 + 优先股票息刚性 ($550M/年)', status: 'green' },
        { dim: '网络/平台效应', tenBagger: '显著', nebius: '间接（信仰社区 + Nasdaq-100 + 加密指数纳入），用户越多 mNAV 越稳', status: 'yellow' },
        { dim: '数据闭环 / 专属资产', tenBagger: '独占数据 / IP / 规模', nebius: '597K BTC 持仓规模就是最大壁垒，无人能短期复制', status: 'green' },
        { dim: '毛利率 · 定价权', tenBagger: '60-80% 可持续', nebius: 'BI 软件 81% 毛利但停滞；BTC 部分无"毛利"概念，看 BTC Yield 替代', status: 'yellow' },
        { dim: '消费者触点 / 品牌', tenBagger: '直接 C 端 / 开发者心智', nebius: 'Saylor 是全球加密第一代言人，机构 BTC 配置首选标的', status: 'green' },
        { dim: '再投资空间 · S-curve', tenBagger: '高 ROIC + TAM 够大', nebius: 'BTC TAM 巨大；ROIIC 按 BTC Yield 口径 25-70%（牛市）', status: 'green' },
        { dim: '管理层 · 跨代际转型', tenBagger: '有过 0→$30B 记录', nebius: 'Saylor 已主导 5 年 BTC 战略 + $43B 资本配置，但单一 thesis 风险', status: 'yellow' },
    ],

    weightedExpectation: {
        currentMcap: 65.27,
        y5: {
            expectedMcap: 392,
            multiplier: 6.0,
            cagr: 43.1,
        },
        y10: {
            expectedMcap: 1330,
            multiplier: 20.4,
            cagr: 35.3,
        },
        breakdown: [
            { scenario: 'A. 超级牛市', prob: 15, y5Mid: 950, y10Mid: 4000, y5Contrib: 142.5, y10Contrib: 600 },
            { scenario: 'B. 基线', prob: 40, y5Mid: 500, y10Mid: 1500, y5Contrib: 200, y10Contrib: 600 },
            { scenario: 'C. 横盘', prob: 30, y5Mid: 150, y10Mid: 400, y5Contrib: 45, y10Contrib: 120 },
            { scenario: 'D. 熊市', prob: 12, y5Mid: 35, y10Mid: 65, y5Contrib: 4.2, y10Contrib: 7.8 },
            { scenario: 'E. 死亡螺旋', prob: 3, y5Mid: 5, y10Mid: 8, y5Contrib: 0.15, y10Contrib: 0.24 },
        ],
    },

    peerName: 'iShares Bitcoin Trust (IBIT)',
    coreWeaveCompare: [
        { metric: 'BTC 敞口', nbis: '1.5x (杠杆)', cwv: '1.0x (现货)', winner: 'nbis' },
        { metric: '费用率', nbis: '隐性 (稀释 + 优先股票息)', cwv: '0.25% / 年', winner: 'cwv' },
        { metric: '流动性', nbis: '极佳 (大盘股 + 期权)', cwv: '极佳 (ETF)', winner: 'nbis' },
        { metric: '税务效率', nbis: '中', cwv: '高 (ETF 结构)', winner: 'cwv' },
        { metric: '上行弹性 (10x)', nbis: '高 (mNAV + BTC Yield)', cwv: '中 (纯 BTC β)', winner: 'nbis' },
        { metric: '下行风险', nbis: '高 (mNAV 压缩 + 强制稀释)', cwv: '中', winner: 'cwv' },
        { metric: 'Alpha 来源', nbis: 'mNAV 飞轮 + BTC Yield 复利', cwv: '无 (纯 β)', winner: 'nbis' },
        { metric: 'Saylor 个人风险', nbis: '高', cwv: '无', winner: 'cwv' },
    ],

    analysts: [
        { firm: 'Benchmark (最高)', target: 650, rating: 'Buy' },
        { firm: 'Bernstein', target: 510, rating: 'Outperform' },
        { firm: '共识 (12 家)', target: 425, rating: 'Buy' },
        { firm: 'Cantor Fitzgerald', target: 400, rating: 'Overweight' },
        { firm: 'TD Cowen', target: 380, rating: 'Buy' },
        { firm: 'Barclays (最低)', target: 215, rating: 'Equal Weight' },
    ],

    watchlist: [
        { indicator: 'BTC 价格', strongSignal: '> $200K', baseSignal: '$100-150K', weakSignal: '< $80K' },
        { indicator: 'mNAV (市值/BTC NAV)', strongSignal: '> 2.0x', baseSignal: '1.3-1.7x', weakSignal: '< 1.0x' },
        { indicator: 'BTC Yield (TTM)', strongSignal: '> 30%', baseSignal: '20-25%', weakSignal: '< 15%' },
        { indicator: '股本稀释率 (YoY)', strongSignal: '< 15%', baseSignal: '15-25%', weakSignal: '> 30%' },
        { indicator: '优先股票息覆盖率', strongSignal: '> 1.5x', baseSignal: '1.0-1.5x', weakSignal: '< 1.0x' },
    ],

    finalQuote:
        '<strong>第三次校准：vs IBIT 真实差距是 +9.2pp（不是之前错算的 +17.3pp）；vs 60-40 SPY/国债 +27.5pp 跃居档案库 #1</strong>。**4 次迭代轨迹**：① 2026-05-06 v1（错）：mNAV 1.5x 假设 + "21% 即使不卖" 税收 → -2.2pp 跑输；② 2026-05-08 v2：mNAV 0.97x + CAMT 豁免 → +17.6pp；③ 2026-05-08 v3：BTC 长期 CAGR 主流共识 25-40% → +27.5pp（vs 60-40 SPY/国债）；④ 2026-05-08 v4：vs IBIT 真实差距修正 +17.3pp → **+9.2pp**（用加权 multiplier 而非固定 IBIT 18%）。**核心数据来源**：历史 BTC 10Y CAGR 84% / 8Y 44% / ARK 基线 40% / 摩根 25% / Cathie Wood 30%；历史 MSTR 流通股 6Y CAGR 24% + 持仓 6Y CAGR 52% + BTC per share 6Y CAGR 26%。**当前 mNAV 0.97x 是过去 28 个月罕见折价窗口**（首次 < 1.0 自 2024-01）：股价 $186.90 vs 每股 BTC 价值 $192.66 = 直接折价买 BTC + 飞轮锁定 + mNAV 均值回归三重 alpha。**风险与置信区间**：90% CI -10% 到 +50% CAGR 极宽；核心依赖 BTC 长期表现 + Saylor 不退场 + mNAV 不长期 < 1；如果 BTC CAGR 实际跌至 15%，MSTR 10Y CAGR 仍可达 ~20%（超额 +12pp 减半但仍正向）。**仓位建议**：mNAV < 1.0x 折价区间 = bullish 2-4% 仓位；mNAV > 1.5x trim 至 1.5%；mNAV > 2.5x 减仓至 0-0.5%。**与 IBIT 配合**：MSTR 2-3% + IBIT 1-2%。**校准免责声明**：本份分析在 30 分钟内经过 3 次迭代修正——感谢用户的两次实质质疑（税收 + mNAV）；这是 10x 框架"承认错误 + 修正落地"的实战案例。',

    revenueChart: {
        labels: ['2021 BTC NAV', '2022 BTC NAV', '2023 BTC NAV', '2024 BTC NAV', '2025 BTC NAV', '2026E BTC NAV'],
        values: [5800, 2150, 8400, 42000, 62000, 73000],
        kinds: ['revenue', 'revenue', 'revenue', 'revenue', 'revenue', 'revenue'],
    },

    overview: {
        founded: '1989 · Michael Saylor 与 Sanju Bansal 在 MIT 联合创立',
        headquarters: '美国 弗吉尼亚州 泰森斯 (Tysons, VA)',
        incorporation: '美国 Delaware',
        employees: '~2,000 (2025 末，主要在软件业务)',
        listing: 'NASDAQ · MSTR · 1998-06 IPO；2025-02 改名 MicroStrategy → Strategy',
        history: [
            { year: '1989', event: 'Michael Saylor 与 Sanju Bansal 创立 MicroStrategy', tag: '创立' },
            { year: '1998', event: 'NASDAQ IPO，定价 $12', tag: 'IPO' },
            { year: '2000-03', event: '互联网泡沫顶峰市值 $25B', tag: '里程碑' },
            { year: '2000-04', event: '财务造假指控 + 泡沫破灭，跌幅 99%', tag: '危机' },
            { year: '2020-08', event: '宣布将公司现金 $250M 全部换成 BTC，开启财库战略', tag: '关键节点' },
            { year: '2020-09', event: 'Saylor 主动调整为执行主席，专注 BTC 战略', tag: '战略' },
            { year: '2021', event: '通过可转债大幅增持 BTC 至 124K 枚，BTC 牛市顶峰股价 $1,300+', tag: '增长' },
            { year: '2022', event: '加密寒冬，mNAV 一度跌至 0.9x，股价腰斩', tag: '危机' },
            { year: '2023-Q4', event: 'BTC 现货 ETF 申请重启，mNAV 回升', tag: '反转' },
            { year: '2024-08', event: '宣布"21/21 计划"——$21B 普通股 + $21B 固定收益筹资买 BTC', tag: '战略' },
            { year: '2024-12', event: '纳入 Nasdaq-100 指数', tag: '里程碑' },
            { year: '2025-01', event: '推出 STRK 永续优先股（首只 BTC 财库优先股）', tag: '创新' },
            { year: '2025-02', event: '正式更名 MicroStrategy → Strategy', tag: '关键节点' },
            { year: '2025-Q2-Q4', event: '陆续发行 STRF / STRH / STRG / STRD 共 5 只优先股', tag: '产品' },
            { year: '2025-12', event: 'BTC 持仓突破 580K 枚，成全球第二大 BTC 持有方（仅次于中本聪）', tag: '里程碑' },
            { year: '2026-Q1', event: 'BTC 持仓 ~597K，市值约 $92B，mNAV ~1.51x', tag: '当前' },
        ],
        businessModel:
            '双引擎，但 BI 业务已退化为副业：①**比特币财库（核心，价值 95%+）**：通过普通股 ATM + 5 只优先股 + 多档可转债持续募资买入 BTC，依托 mNAV>1 时的"BTC Yield 飞轮"放大单股 BTC 含量。②**Strategy ONE BI 软件**：年化营收 $455M，毛利率 81%，但增长停滞；现金流主要用于覆盖优先股票息和运营。**核心逻辑**：MSTR 不创造价值，只是"BTC 长期看涨"信念在资本市场中的杠杆放大器。',
        revenueMix: [
            { name: '软件订阅服务 (Strategy ONE)', pct: 75, note: '年化 ~$340M · SaaS 订阅' },
            { name: '软件许可与维护 (传统)', pct: 18, note: '年化 ~$80M · 老业务收尾' },
            { name: '专业服务', pct: 5, note: '咨询与定制 ~$25M' },
            { name: '其他', pct: 2, note: '~$10M' },
            { name: '注：BTC 升值不计入营收', pct: 0, note: 'GAAP 走利润表，但非营业收入' },
        ],
    },

    team: [
        {
            name: 'Michael Saylor',
            role: '执行主席 (Executive Chairman) · 联合创始人',
            background:
                '1965 年生，MIT 航空工程 + 科学史双学位。1989 年创立 MicroStrategy。2020 年起将公司转向 BTC 财库战略，已成全球加密圈"教父级"人物。个人持有 ~120K BTC。Twitter 200 万+ 追随者，加密布道核心。**个人化风险极高**——他离任后 mNAV 溢价大概率压缩。',
            since: '1989',
            rating: 5,
        },
        {
            name: 'Phong Le',
            role: 'CEO · 总裁',
            background:
                '前 General Dynamics 高管。2015 年加入，2022 年 8 月接任 CEO。负责执行落地，BI 软件业务和资本市场操作的实际指挥官。低调但执行力强。',
            since: '2015',
            rating: 4,
        },
        {
            name: 'Andrew Kang',
            role: 'CFO',
            background:
                '前 Carlyle Group 高级总监。2024 年接任 CFO，5 只优先股 + 可转债的精妙资本结构是他的杰作。设计的差异化票息和赎回条款被同行模仿。',
            since: '2024',
            rating: 5,
        },
        {
            name: 'Wei Ming Tan',
            role: 'COO',
            background:
                '前麦肯锡咨询合伙人。2018 年加入，主导软件业务运营和 BTC 持仓的会计/合规执行。',
            since: '2018',
            rating: 4,
        },
        {
            name: 'Shirish Jajodia',
            role: 'CTO',
            background:
                'MicroStrategy 老将，主导 Strategy ONE 平台的 AI 增强转型；BI 业务能否止跌的关键。',
            since: '2003',
            rating: 3,
        },
    ],

    shareholders: [
        { name: 'Michael Saylor (含信托)', pct: '~9.9%', type: '创始人', note: '持 B 类股 10:1 投票权，实际控制 46% 投票权' },
        { name: 'Vanguard', pct: '~6.5%', type: '被动基金', note: '指数持仓增加（Nasdaq-100 纳入后）' },
        { name: 'BlackRock', pct: '~6.0%', type: '被动 + 主动', note: '指数 + iShares 加密相关基金' },
        { name: 'Capital Group', pct: '~3.5%', type: '主动管理', note: '长期价值持仓' },
        { name: 'State Street', pct: '~3.0%', type: '被动基金', note: 'SPY 等指数' },
        { name: 'Jane Street / Citadel', pct: '~5.0%', type: '做市商', note: '可转债套利 + 期权对冲' },
        { name: '公众流通股 + 其他机构', pct: '~66%', type: '散户 + 机构', note: '极高散户比例（加密圈持有）' },
    ],

    advantages: [
        {
            title: '全球最大上市公司 BTC 持仓 (规模 ★★★★★)',
            body: '~597K BTC 占总供应 2.84%，是中本聪之外的"个人+企业"持仓第二名。规模本身已是壁垒——已成"系统重要性"被动资金标的。任何后来者至少需要 5-10 年才能复制。',
            evidence: 'Bitcoin Treasuries 全球排名；2025 Q4 10-K + 2026 Q1 8-K 披露',
        },
        {
            title: 'mNAV 飞轮是结构性 alpha (创新 ★★★★★)',
            body: 'mNAV>1 时增发买 BTC → BTC/share 上升 → 市场预期延续 → mNAV 维持/上升。2024 年 BTC Yield 74.3%，2025 年 ~28%。这是 IBIT 等被动 ETF 完全不具备的复利机制。',
            evidence: '管理层定义的 BTC Yield 指标；2024-2025 季度披露',
        },
        {
            title: '资本市场工具矩阵无对手 (深度 ★★★★★)',
            body: '普通股 ATM + STRK/STRF/STRH/STRG/STRD 共 5 只优先股 + 多档可转债，是全球最完整的"BTC 募资管道"。每种工具锁定不同投资者偏好，融资成本被同行压制。',
            evidence: '2025 全年优先股发行公告；可转债条款披露',
        },
        {
            title: 'Saylor 个人化叙事价值 (品牌 ★★★★★)',
            body: 'Twitter 200 万+ 追随者，被誉为"BTC 教父级"代言人。任何 BTC 主流化论调都要引用他；宣传资源近零成本。他个人持有 ~120K BTC，与公司利益高度一致。',
            evidence: '社交媒体影响力数据；公开演讲与媒体覆盖',
        },
        {
            title: '指数纳入潜力 (流动性 ★★★★)',
            body: '2024-12 已纳入 Nasdaq-100，被动资金流入约 $5-8B。S&P 500 提案 2025 年首次被拒（GAAP 利润标准争议），但二次提案在持续推进；MSCI 等指数跟进可能性高。',
            evidence: 'Nasdaq 指数公告；S&P 500 委员会会议纪要',
        },
        {
            title: '税务结构优化 (财务 ★★★★)',
            body: '通过 Section 351 等机制将 BTC 资本利得递延；BI 软件业务 NOL（净运营亏损）结转可对冲部分 BTC 实现收益的应税额。',
            evidence: '2025 10-K 税务披露段',
        },
        {
            title: 'BTC 货币化期权 (赔率 ★★★★★)',
            body: '若 BTC 真成全球储备资产之一（央行/主权基金配置），TAM 是 $1-2T 规模。MSTR 是上市市场最直接的"加杠杆 BTC"工具，向上弹性远超现货 ETF。',
            evidence: 'BlackRock / Fidelity 公开发言；多国央行 BTC 储备研究',
        },
    ],

    disadvantages: [
        {
            title: 'mNAV 完全依赖市场情绪',
            body: '没有任何"价值锚定"力量阻止 mNAV 跌破 1。2022 年熊市曾跌至 0.9x，飞轮反向时增发反噬 BTC/share——这是结构性而非临时性风险。',
            evidence: '2022 年股价 + BTC NAV 历史比对',
        },
        {
            title: '永续稀释是结构性问题',
            body: '每年股本以 15-25% 速度膨胀（2024 年增发了 39M 普通股 + 大量优先股），10 年股本可能膨胀 5-10 倍。BTC/share 必须持续上升才能让普通股东不亏。',
            evidence: '2020-2025 股本演进数据',
        },
        {
            title: '优先股年票息 ~$550M 刚性负债',
            body: 'STRF 10% + STRK 8% + 其他平均 9%。即使 BTC 跌 80%，每年还要付。软件 OCF 仅 $50-70M，差额必须靠融资或卖 BTC 补——熊市死亡螺旋的引爆点。',
            evidence: '5 只优先股招股书；2025 Q4 票息支付披露',
        },
        {
            title: 'IBIT/FBTC 抢"持有 BTC"份额',
            body: '现货 BTC ETF 费率 0.25%、结构透明、无稀释、有税务优势（ETF 结构）。机构客户大规模迁移到 ETF；MSTR 的 mNAV 溢价被持续质疑。',
            evidence: 'IBIT AUM 2025 突破 $90B；MSTR vs IBIT 流入对比',
        },
        {
            title: 'Saylor 个人风险传导',
            body: 'B 类股 10:1 投票权，他实际控制 46% 投票权 + 公司决策；他个人 ~120K BTC 与公司高度耦合；个人健康/法律风险（曾有 SEC 和 DC AG 税务调查）会直接传导到 mNAV。',
            evidence: '2022 年 DC 检察长税务诉讼（已和解 $40M）',
        },
        {
            title: '会计利润极度波动',
            body: 'FASB 2025 公允价值新规让 BTC 涨跌直接进损益表。BTC 跌 30% 就让 GAAP 利润亏 $20B+，机构持有人极难建模——估值倍数被压制。',
            evidence: 'FASB ASU 2023-08；2025 季报对比',
        },
        {
            title: '没有运营护城河',
            body: '软件业务在缓慢萎缩（2020 $480M → 2025 $455M），不构成商业壁垒。一旦 BTC 论调失效，公司没有"备胎"——这与 Berkshire 等多元化控股公司本质不同。',
            evidence: '2020-2025 软件业务收入轨迹',
        },
    ],

    shortTermCatalysts: [
        {
            when: '2026-Q2',
            event: 'BTC 价格突破 $120K（基于减半周期 + 现货 ETF 资金流）',
            impact: 'positive',
            probability: '~40%',
            magnitude: '+25-40%',
        },
        {
            when: '2026-Q2-Q3',
            event: 'BTC 抵押贷款产品推出（Saylor 多次提及）',
            impact: 'positive',
            probability: '~35%',
            magnitude: '+10-15%',
        },
        {
            when: '2026-Q3',
            event: 'S&P 500 二次提案讨论（GAAP 利润达标后）',
            impact: 'positive',
            probability: '~25%',
            magnitude: '+25-35%',
        },
        {
            when: '2026-Q3-Q4',
            event: '美联储降息路径（影响优先股利息成本）',
            impact: 'positive',
            probability: '降息已开始',
            magnitude: '+5-10%',
        },
        {
            when: '2026-H2',
            event: '推出新型 BTC 财库优先股（差异化结构）',
            impact: 'positive',
            probability: '~60%',
            magnitude: '+5-10%',
        },
        {
            when: '2026-Q4',
            event: 'BTC 跌破 $80K 触发 mNAV 压缩警报',
            impact: 'negative',
            probability: '~25%',
            magnitude: '-25-40%',
        },
        {
            when: '2027-Q1',
            event: '$1B 可转债到期（2027 第一档），现金/转股决策',
            impact: 'mixed',
            probability: '已确定时点',
            magnitude: '±10%',
        },
        {
            when: '2027',
            event: '主权基金/央行公开 BTC 配置触发再定价',
            impact: 'positive',
            probability: '~20%',
            magnitude: '+30-50%',
        },
        {
            when: '任何时点',
            event: 'Saylor 健康/法律黑天鹅事件',
            impact: 'negative',
            probability: '~10% / 5 年',
            magnitude: '-30-50%',
        },
        {
            when: '任何时点',
            event: 'BTC 暴跌 >40% 触发优先股偿付危机',
            impact: 'negative',
            probability: '~15% / 5 年',
            magnitude: '-50-70%',
        },
    ],

    longTermDrivers: [
        {
            name: 'BTC 货币化主流化',
            horizon: '2026-2035',
            body: '若 BTC 真成全球储备资产之一（中等概率），TAM 是 $1-2T 规模。央行/主权基金/养老金的潜在配置浪潮会让 BTC 价格在 10 年内从 $100K 推向 $500K-$1M+。MSTR 作为上市市场最直接的 1.5x 杠杆工具直接受益。',
            enabling: '美国行政令 + GENIUS Act + 多国央行 BTC 储备试点 + ETF 401(k) 开放',
        },
        {
            name: 'mNAV 飞轮长期复利',
            horizon: '2026-2032',
            body: '若管理层目标 BTC Yield 25%/年长期成立，BTC/share 5 年增厚 3x、10 年 9x。即使 BTC 价格不变，每股内在价值也持续提升。这是其他任何 BTC 持有方式（IBIT、直接持币）都不具备的复利机制。',
            enabling: 'mNAV 长期 >1.2x + 优先股市场需求持续 + 资本市场工具创新',
        },
        {
            name: '持仓占总供应突破 5%',
            horizon: '2026-2030',
            body: '当前 2.84%，"21/21 计划"目标 BTC 持仓最大化。若达 5%（~1.05M BTC），叙事价值和指数纳入权重大幅提升，mNAV 溢价可结构性扩张。',
            enabling: 'BTC 流通量缓慢下降（HODLer 增加） + MSTR 稳定融资节奏',
        },
        {
            name: '"BTC 银行"业务延伸',
            horizon: '2027-2033',
            body: 'Saylor 已多次提及 BTC 抵押贷款、托管、衍生品做市等延伸业务。若公司从纯持有方转型为"BTC 金融服务"，可创造除升值之外的现金流，结构性降低 mNAV 风险。',
            enabling: 'OCC/SEC 监管框架明确 + 机构客户需求 + 资产管理团队搭建',
        },
        {
            name: '指数被动资金流入',
            horizon: '2026-2032',
            body: 'Nasdaq-100 已纳入；S&P 500 / MSCI World / Russell 1000 等指数二次提案推进。每个新指数纳入意味着 $3-10B 被动资金强制买入，是 mNAV 的稳定支撑。',
            enabling: '连续 4 季度 GAAP 盈利（2026 BTC 涨即满足）+ 委员会审查',
        },
        {
            name: '加密金融架构新基建',
            horizon: '2028-2035',
            body: '若 BTC 真成"数字黄金"+ 全球结算资产，MSTR 可成为全球最大 BTC 储备方 + 资本市场关键节点（类似 BlackRock 在 ETF 中的地位）。终局估值可达 $500B-1T。',
            enabling: 'BTC 标准化 + 监管成熟 + 主权采用',
        },
    ],

    riskMatrix: [
        {
            category: '宏观 / 加密周期风险',
            level: 'critical',
            summary: 'BTC β 是 MSTR 的核心命脉',
            items: [
                {
                    name: 'BTC 长期熊市 (>18 个月 < $40K)',
                    body: 'BTC 跌穿 $40K 并维持 18+ 个月 → mNAV 必然 <1 → 飞轮反向 → 优先股偿付危机。这是公司模型的"零号风险"。',
                    mitigation: '软件 OCF + 暂停 ATM + 优先股延期票息（部分品种允许）',
                },
                {
                    name: 'BTC 单次暴跌 >40%',
                    body: '一次性快速下跌不会立即触发死亡螺旋，但会让 mNAV 短期压缩到 1.0-1.1x，融资环境恶化。',
                    mitigation: '可转债 covenant 触发线远低于现价；优先股票息 $550M 一年内可承受',
                },
            ],
        },
        {
            category: '资本结构风险',
            level: 'critical',
            summary: '5 只优先股 + 8B 可转债的债务负担',
            items: [
                {
                    name: 'mNAV 永久跌破 1',
                    body: 'mNAV<1 时增发反噬 BTC/share，飞轮反向。市场预期"还要稀释"→ mNAV 进一步压缩 → 死亡螺旋。',
                    mitigation: '主动暂停 ATM；启动普通股回购（与 BTC 战略冲突，仅极端情景）',
                },
                {
                    name: '优先股票息违约',
                    body: '软件 OCF $50-70M 不够覆盖 $550M 年化票息，BTC 熊市无法增发时被迫卖 BTC。市场一旦预期"还要卖"，估值崩盘。',
                    mitigation: '部分优先股允许 PIK（票息以股票形式支付）；持续优化结构',
                },
                {
                    name: '可转债到期违约',
                    body: '2027-2032 多档可转债到期。若行权价远高于现价（深度 OTM），转股不会发生，公司必须现金偿付或再融资。',
                    mitigation: '行权价较保守；现金 + ATM + 新可转债置换',
                },
            ],
        },
        {
            category: '监管风险',
            level: 'high',
            summary: 'BTC 资产分类 + ICA 投资公司 + S&P 500 拒纳',
            items: [
                {
                    name: 'SEC 重新分类为 ICA',
                    body: '若 SEC 认定 MSTR 是"投资公司"（资产 80% 以上为有价证券/BTC），需注册并接受额外监管，资本市场操作受限。',
                    mitigation: '法律意见书已审查；BTC 长期非"证券"分类共识',
                },
                {
                    name: 'GAAP 利润标准 / 指数纳入',
                    body: 'S&P 500 2025 拒纳的核心理由是 GAAP 利润波动太大；指数纳入是 mNAV 的关键支撑。',
                    mitigation: '2026+ BTC 涨即 GAAP 盈利；委员会标准会随 FASB 规则演进',
                },
                {
                    name: '2028 总统大选政策转向',
                    body: '若反加密候选人胜选 + SEC 主席换人，监管环境可能恶化。',
                    mitigation: 'Saylor 政治游说网络；行业整体已 commitment',
                },
            ],
        },
        {
            category: '关键人风险',
            level: 'high',
            summary: 'Saylor 是公司不可分割的一部分',
            items: [
                {
                    name: 'Saylor 离任 / 健康事件',
                    body: 'Saylor 离场 mNAV 必将压缩到 1.0-1.2x（去掉"叙事溢价"）。他控制 46% 投票权，过渡治理也会有摩擦。',
                    mitigation: '执行团队成熟；股权信托结构设计',
                },
                {
                    name: 'Saylor 法律 / 信誉风险',
                    body: '2022 年 DC 检察长税务诉讼已和解 $40M；未来可能有新调查。',
                    mitigation: '已建立合规防线；和解作为先例',
                },
            ],
        },
        {
            category: '竞争风险',
            level: 'high',
            summary: '现货 BTC ETF 是结构性威胁',
            items: [
                {
                    name: 'IBIT/FBTC 等 ETF 抢市场',
                    body: 'ETF 流入 2025 年累计 $90B+，部分 mNAV 溢价已被 ETF 替代效应吞噬；机构客户更偏好 ETF 结构。',
                    mitigation: 'mNAV 飞轮 + BTC Yield 是 ETF 不具备的复利机制；散户/退休账户仍偏好 MSTR',
                },
                {
                    name: '其他公司模仿"BTC 财库"',
                    body: 'Marathon、Riot、Metaplanet（日）、Semler Scientific 等纷纷上车 BTC 储备战略。',
                    mitigation: 'MSTR 规模优势 50x 第二名；先发资本市场工具难复制',
                },
            ],
        },
        {
            category: '财务 / 会计风险',
            level: 'medium',
            summary: 'FASB 公允价值新规波动',
            items: [
                {
                    name: '会计利润极端波动',
                    body: 'FASB 2023-08 ASU 让 BTC 公允价值变动直接进损益。BTC 跌 30% = GAAP 净亏 $20B+。',
                    mitigation: '管理层主动引导市场看 BTC Yield + mNAV 而非 GAAP；机构逐步接受',
                },
                {
                    name: '强制实现 BTC 资本利得',
                    body: 'IRS 政策变动可能要求按市值计税，触发巨额税务负债（598K BTC × ($103K - $73K) × 21% = $3.8B）。',
                    mitigation: 'Section 351 等递延机制；NOL 结转可对冲部分',
                },
            ],
        },
        {
            category: '运营风险',
            level: 'low',
            summary: 'BTC 钱包安全 + 软件业务衰退',
            items: [
                {
                    name: 'BTC 私钥安全事件',
                    body: '598K BTC 由 Coinbase Custody / Fidelity Digital Assets 等机构托管，若发生黑客事件影响极大。',
                    mitigation: '多机构托管 + 冷存储 + 保险；至今零事件',
                },
                {
                    name: '软件业务持续萎缩',
                    body: 'Strategy ONE 增长停滞，可能影响 OCF 覆盖优先股票息能力。',
                    mitigation: 'AI 增强转型可能反弹；占比已小，影响有限',
                },
            ],
        },
    ],

    profitability: {
        narrative:
            'MSTR 的 GAAP 损益表**几乎无意义**——FASB 2025 新规让 BTC 公允价值波动直接进利润表，BTC 涨 10% 就让公司"账面盈利" $6B+。**真正应该看的指标**是：①**BTC Yield**（BTC/share 同比增厚率，管理层定义的 KPI）；②**BTC $ Gain**（本期为股东"赚到"的 BTC 总市值）；③**软件业务 OCF**（覆盖优先股票息的现金来源）。MSTR 不是运营公司，是"BTC 杠杆资产管理平台"，对照 Berkshire 的"内在价值"框架更合适。',

        incomeStatement: [
            {
                year: '2021 (BTC 牛市)',
                revenue: '$510M',
                revenueNum: 510,
                grossMargin: '~82%',
                opIncome: '-$73M',
                ebitda: '+$45M',
                ebitdaMargin: '~9%',
                netIncome: '-$535M (BTC 减值)',
                eps: '-$5.62',
                status: 'actual',
            },
            {
                year: '2022 (BTC 熊市)',
                revenue: '$499M',
                revenueNum: 499,
                grossMargin: '~80%',
                opIncome: '-$1.46B',
                ebitda: '-$1.42B',
                ebitdaMargin: '-285%',
                netIncome: '-$1.47B (BTC 大幅减值)',
                eps: '-$13.21',
                status: 'actual',
            },
            {
                year: '2023',
                revenue: '$496M',
                revenueNum: 496,
                grossMargin: '~80%',
                opIncome: '+$300M',
                ebitda: '+$340M',
                ebitdaMargin: '~69%',
                netIncome: '+$429M',
                eps: '$3.22',
                status: 'actual',
            },
            {
                year: '2024',
                revenue: '$463M',
                revenueNum: 463,
                grossMargin: '~80%',
                opIncome: '-$1.85B (BTC 损益表化)',
                ebitda: 'N/A',
                ebitdaMargin: 'N/A',
                netIncome: '-$1.17B',
                eps: '-$5.51',
                status: 'actual',
            },
            {
                year: '2025',
                revenue: '$455M',
                revenueNum: 455,
                grossMargin: '~81%',
                opIncome: '+$15B (BTC 公允价值增益)',
                ebitda: 'N/A',
                ebitdaMargin: 'N/A',
                netIncome: '+$11B',
                eps: '$38.5',
                status: 'actual',
            },
            {
                year: '2026E',
                revenue: '$465-490M',
                revenueNum: 478,
                grossMargin: '~81%',
                opIncome: '极度依赖 BTC 价格',
                ebitda: 'N/A',
                ebitdaMargin: 'N/A',
                netIncome: '高度波动',
                eps: '高度波动',
                status: 'estimate',
            },
            {
                year: '2027E',
                revenue: '$480-500M',
                revenueNum: 490,
                grossMargin: '~81%',
                opIncome: '极度依赖 BTC 价格',
                ebitda: 'N/A',
                ebitdaMargin: 'N/A',
                netIncome: '高度波动',
                eps: '高度波动',
                status: 'estimate',
            },
        ],

        marginEvolution: [
            { year: '2021', gross: 82, ebitda: 9, operating: -14, net: -105, status: 'actual' },
            { year: '2022', gross: 80, ebitda: -285, operating: -293, net: -295, status: 'actual' },
            { year: '2023', gross: 80, ebitda: 69, operating: 60, net: 86, status: 'actual' },
            { year: '2024', gross: 80, ebitda: null, operating: null, net: null, status: 'actual' },
            { year: '2025', gross: 81, ebitda: null, operating: null, net: null, status: 'actual' },
            { year: '2026E', gross: 81, ebitda: null, operating: null, net: null, status: 'estimate' },
            { year: '2027E', gross: 81, ebitda: null, operating: null, net: null, status: 'estimate' },
        ],

        milestones: [
            { year: '2020-08', milestone: '首次将公司现金换为 BTC ($250M / 21K BTC)', hit: true },
            { year: '2021-Q1', milestone: 'BTC 持仓突破 100K 枚', hit: true },
            { year: '2024-08', milestone: '"21/21" 计划公布', hit: true },
            { year: '2024-12', milestone: '纳入 Nasdaq-100', hit: true },
            { year: '2025-02', milestone: '正式更名 Strategy', hit: true },
            { year: '2025-Q4', milestone: 'BTC 持仓突破 580K 枚', hit: true },
            { year: '2026-Q4', milestone: 'BTC 持仓突破 700K 枚（21/21 计划过半）', hit: false, note: '关键里程碑' },
            { year: '2027', milestone: 'S&P 500 二次提案通过', hit: false, note: '指数被动资金 $30-50B' },
            { year: '2030', milestone: 'BTC 持仓占总供应突破 5% (~1M BTC)', hit: false, note: '终局门槛' },
        ],

        unitEconomics: [
            { metric: 'BTC 持仓 (2026 Q1)', value: '~597,000 BTC', source: '季报披露' },
            { metric: 'BTC 平均成本', value: '~$73,200', source: '累计投入 / 持仓数' },
            { metric: 'BTC NAV / 股 (BTC=$103K)', value: '~$216', source: '$61.5B / 283M 股' },
            { metric: 'BTC Yield (TTM)', value: '~28%', source: '管理层 KPI' },
            { metric: 'mNAV (市值/BTC NAV)', value: '~1.51x', source: '$92B / $61.5B' },
            { metric: '软件 ARR', value: '~$340M', source: 'Strategy ONE 订阅' },
            { metric: '优先股年化票息', value: '~$550M', source: '5 只优先股加总' },
            { metric: '股本年化稀释率', value: '~18-22%', source: '2024-2025 平均' },
        ],

        fcfPath:
            '**注意**：MSTR 没有正常的 FCF——它的"现金流"本质是资本市场融资。软件业务 OCF $50-70M/年，仅够覆盖运营。优先股票息 $550M/年 必须靠新一轮 ATM/优先股发行覆盖，或在 BTC 大涨时小额变现。**关键现金流缺口**：当软件 OCF 不够 + ATM 关闭（mNAV<1）+ BTC 不能卖（影响叙事）三者同时成立时，公司即陷入流动性危机。这是 BTC 长期熊市的"零号风险"。',

        keyRisks: [
            'BTC 长期 <$60K 时优先股票息覆盖率跌破 1，必须卖 BTC 偿付',
            '股本稀释速度若超过 BTC Yield，普通股东实际亏损',
            'GAAP 利润极端波动让指数纳入和机构持有人决策受阻',
            'FASB 规则未来变动（如要求实现资本利得）会导致巨额税负',
        ],
    },

    competitiveLandscape: {
        summary:
            'MSTR 的"竞争对手"不是其他公司，而是**所有持有 BTC 的方式**：①**现货 BTC ETF（IBIT/FBTC）**：被动持有标准方案，2025 AUM 突破 $200B；②**直接持有 BTC**：零费用零稀释，但需自管私钥；③**矿企（MARA/RIOT）**：BTC 敞口 + 哈希率 + 电费风险；④**其他 BTC 财库公司（Metaplanet/Semler）**：模仿 MSTR 但规模小 50x。MSTR 的差异化在 mNAV 飞轮 + BTC Yield 复利——只在 mNAV>1 时成立。',

        competitors: [
            {
                name: 'Strategy (自身)',
                type: 'specialist',
                ticker: 'MSTR',
                revenue2026E: '$478M (软件)',
                aiRevenue: '~597K BTC ($61B NAV)',
                gpuFleet: '283M 普通股 + 5 只优先股',
                backlog: '$42B "21/21" 计划已用尽，下一轮待定',
                ebitdaMargin: 'N/A (BTC 主导)',
                marketCap: '~$92B',
                nvidiaLevel: 5,
                threat: 'low',
                strength: '规模 + mNAV 飞轮 + 资本工具矩阵 + Saylor 叙事',
                weakness: '永续稀释 + 优先股票息刚性 + 完全依赖 BTC',
            },
            {
                name: 'iShares Bitcoin Trust',
                type: 'hyperscaler',
                ticker: 'IBIT',
                revenue2026E: 'N/A (基金)',
                aiRevenue: '~700K BTC AUM',
                gpuFleet: '现货 ETF 结构',
                backlog: '持续 inflow',
                ebitdaMargin: 'N/A',
                marketCap: '~$72B AUM',
                nvidiaLevel: 5,
                threat: 'high',
                strength: '0.25% 费率 · 透明 · 无稀释 · 税务高效',
                weakness: '无杠杆 · 无 mNAV 溢价 · 无 BTC Yield 复利',
            },
            {
                name: 'Marathon Digital',
                type: 'specialist',
                ticker: 'MARA',
                revenue2026E: '~$700M',
                aiRevenue: '~50K BTC + 挖矿',
                gpuFleet: '50 EH/s 算力',
                backlog: '矿场扩张',
                ebitdaMargin: '~30%',
                marketCap: '~$8B',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: '挖矿 + BTC 持仓双引擎 · 美股最大矿企',
                weakness: '电费成本 + 减半周期 · 持仓只有 MSTR 1/12',
            },
            {
                name: 'Riot Platforms',
                type: 'specialist',
                ticker: 'RIOT',
                revenue2026E: '~$500M',
                aiRevenue: '~17K BTC + 挖矿',
                gpuFleet: '38 EH/s 算力',
                backlog: 'Texas 扩张 + AI 算力转型',
                ebitdaMargin: '~25%',
                marketCap: '~$3B',
                nvidiaLevel: 3,
                threat: 'medium',
                strength: '美国最大上市矿企之一 · AI 算力转型期权',
                weakness: '高度依赖电力 · BTC 持仓远小于 MSTR',
            },
            {
                name: 'Metaplanet (日本)',
                type: 'specialist',
                ticker: '3350.T',
                revenue2026E: '~$50M',
                aiRevenue: '~15K BTC',
                gpuFleet: '亚洲第一 BTC 财库',
                backlog: '日股版 MSTR 战略',
                ebitdaMargin: 'N/A',
                marketCap: '~$3B',
                nvidiaLevel: 4,
                threat: 'low',
                strength: '日本市场独占 · 类似 MSTR 战略',
                weakness: '规模仅 MSTR 1/40 · 日元结算',
            },
            {
                name: 'Semler Scientific',
                type: 'specialist',
                ticker: 'SMLR',
                revenue2026E: '~$60M',
                aiRevenue: '~5K BTC',
                gpuFleet: '医疗设备主业 + BTC 财库',
                backlog: '小规模持续增持',
                ebitdaMargin: '~20%',
                marketCap: '~$1B',
                nvidiaLevel: 3,
                threat: 'low',
                strength: '中小盘 BTC 财库标杆',
                weakness: '规模微小 · 主业波动',
            },
            {
                name: 'Tesla',
                type: 'hyperscaler',
                ticker: 'TSLA',
                revenue2026E: '~$130B',
                aiRevenue: '~10K BTC (持有)',
                gpuFleet: '汽车 + 能源 + AI',
                backlog: 'BTC 仅辅助',
                ebitdaMargin: '~12%',
                marketCap: '~$1.2T',
                nvidiaLevel: 2,
                threat: 'low',
                strength: '主业巨大 · BTC 是边缘配置',
                weakness: '不是 BTC 财库公司',
            },
            {
                name: '直接持有 BTC',
                type: 'specialist',
                ticker: 'BTC',
                revenue2026E: 'N/A',
                aiRevenue: '$103K / BTC',
                gpuFleet: '点对点资产',
                backlog: 'N/A',
                ebitdaMargin: 'N/A',
                marketCap: '~$2T (总市值)',
                nvidiaLevel: 5,
                threat: 'high',
                strength: '零费用 · 零稀释 · 100% 控制',
                weakness: '需自管私钥 · 税务复杂 · 退休账户难持有',
            },
        ],

        positioning: [
            { dimension: 'BTC 持仓规模', nebius: '~597K BTC', industryAvg: '5-50K', leader: 'MSTR (远超第二)', nebiusStrong: true },
            { dimension: 'BTC 杠杆倍数', nebius: '~1.5x (mNAV)', industryAvg: '1.0x', leader: 'MSTR', nebiusStrong: true },
            { dimension: '费用率 (隐性)', nebius: '稀释 18-22%/年', industryAvg: 'ETF 0.25%', leader: 'IBIT (低)', nebiusStrong: false },
            { dimension: '上行弹性', nebius: '极高', industryAvg: '中', leader: 'MSTR', nebiusStrong: true },
            { dimension: '下行风险', nebius: '极高 (-75%)', industryAvg: '-50% (BTC 熊)', leader: 'IBIT (低)', nebiusStrong: false },
            { dimension: '资本市场工具', nebius: '5 只优先股 + 可转债', industryAvg: '仅普通股', leader: 'MSTR (独占)', nebiusStrong: true },
            { dimension: 'BTC Yield (复利)', nebius: '~25%/年', industryAvg: '0%', leader: 'MSTR (独占)', nebiusStrong: true },
            { dimension: '指数纳入', nebius: 'Nasdaq-100', industryAvg: '通常无', leader: 'MSTR', nebiusStrong: true },
            { dimension: '机构客户接受度', nebius: '中', industryAvg: 'IBIT 高', leader: 'IBIT', nebiusStrong: false },
            { dimension: '退休账户持有', nebius: '可 (普通股)', industryAvg: 'IBIT 部分', leader: 'MSTR', nebiusStrong: true },
        ],

        marketShare2026: [
            { name: 'iShares IBIT (BlackRock)', pct: 36 },
            { name: 'Strategy MSTR', pct: 30 },
            { name: 'Fidelity FBTC', pct: 12 },
            { name: 'Grayscale GBTC', pct: 8 },
            { name: 'ARK 21Shares ARKB', pct: 4 },
            { name: 'Bitwise BITB', pct: 3 },
            { name: '其他 ETF / 矿企 / 财库', pct: 7 },
        ],

        winLoss: [
            {
                scenario: 'BTC 牛市超级行情 ($200K+)',
                winners: 'MSTR (mNAV 飞轮放大)',
                losers: '现货 ETF (无杠杆)',
                reasoning: 'mNAV 飞轮在牛市中威力倍增；BTC Yield 复利 + 估值倍数扩张双重利好',
            },
            {
                scenario: 'BTC 横盘震荡 ($80-120K)',
                winners: 'IBIT / 直接持币',
                losers: 'MSTR (稀释吃掉收益)',
                reasoning: 'mNAV 维持 1.0-1.2x 时，每年 18-22% 稀释会吃掉相同比例的 BTC/share 增益',
            },
            {
                scenario: 'BTC 熊市 (<$50K)',
                winners: 'IBIT (无强制操作)',
                losers: 'MSTR (优先股票息绞死现金流)',
                reasoning: '熊市时优先股票息刚性 $550M/年，软件 OCF $70M 远不够，被迫卖 BTC 形成死亡螺旋',
            },
            {
                scenario: '美国机构客户配置',
                winners: 'IBIT / FBTC',
                losers: 'MSTR (合规波动 + 会计复杂)',
                reasoning: 'GAAP 利润极端波动让机构难以建模；ETF 结构透明可被指数化',
            },
            {
                scenario: '退休账户 (401(k)/IRA)',
                winners: 'MSTR (普通股)',
                losers: 'BTC 直接持有 (难)',
                reasoning: '部分 401(k) 计划已开放 BTC ETF，但 MSTR 普通股一直可被持有；散户仍偏好 MSTR',
            },
            {
                scenario: '海外/合规受限投资者',
                winners: 'MSTR (公开市场)',
                losers: '直接持币 (KYC 复杂)',
                reasoning: 'NASDAQ 流动性 + 期权市场让 MSTR 是全球散户的首选 BTC 杠杆工具',
            },
            {
                scenario: 'BTC 永续期权交易',
                winners: 'MSTR (期权链丰富)',
                losers: '现货 BTC ETF (期权次之)',
                reasoning: 'MSTR 期权链是全球第二活跃的 BTC 衍生品市场（仅次于 Deribit）',
            },
            {
                scenario: '加密叙事时代',
                winners: 'MSTR (Saylor 代言)',
                losers: '其他财库公司',
                reasoning: 'Saylor 的"BTC 教父"地位让 MSTR 是任何"BTC 故事"的默认参考标的',
            },
        ],

        structuralTrend:
            '未来 3-5 年行业结构性变化：①**ETF 替代效应**：现货 BTC ETF 持续吞噬 mNAV 溢价空间，机构逐步从 MSTR 迁移到 IBIT，MSTR 的"溢价"必须靠 BTC Yield 复利 + 飞轮持续证明；②**BTC 财库泛化**：Metaplanet 等模仿者出现但规模仍是 MSTR 1/40-1/100，规模壁垒在拉大；③**资本市场工具创新**：MSTR 的 5 只优先股结构会被同行学习但难复制（信任溢价 + 流动性）；④**主权采用**：若有央行/主权基金正式持有 BTC，MSTR 作为最大上市持仓方会被重新定价。**结论**：3 年内 MSTR vs IBIT 的"长期共存还是被取代"是行业最大变量。',

        tam: {
            narrative:
                '"上市公司 BTC 财库"赛道：2020 年 $5B → 2024 年 $35B → 2026 年 $80B → 2030 年基线 $400B / 牛市 $1T。MSTR 占比从 2020 年 30% 升至 2024 年 75%，2026 年 ~70%。**10x 路径**：BTC 价格 4-5x（$103K → $400-500K）+ MSTR 持仓 1.5-2x + mNAV 维持 1.3-1.5x = 12-15x BTC NAV/share，扣除稀释后 8-12x 股价。换言之：**MSTR 10x 需要 BTC 至少 5x**——这是基线估算。',
            points: [
                { year: '2022', totalTam: 8, neocloudTam: 4, selfRevenue: 0.5, status: 'actual' },
                { year: '2024', totalTam: 35, neocloudTam: 26, selfRevenue: 0.46, status: 'actual' },
                { year: '2025', totalTam: 60, neocloudTam: 42, selfRevenue: 0.46, status: 'actual' },
                { year: '2026', totalTam: 80, neocloudTam: 56, selfRevenue: 0.48, status: 'estimate' },
                { year: '2028', totalTam: 200, neocloudTam: 130, selfRevenue: 0.5, status: 'estimate' },
                { year: '2030', totalTam: 400, neocloudTam: 240, selfRevenue: 0.55, status: 'estimate' },
                { year: '2035', totalTam: 1000, neocloudTam: 600, selfRevenue: 0.7, status: 'estimate' },
            ],
            keyNumbers: [
                { label: 'BTC 总市值 (当前)', value: '~$2T', sub: 'BTC=$103K', cls: 'cyan' },
                { label: 'BTC 2030E 牛市', value: '$8-12T', sub: 'BTC $400K-600K', cls: 'purple' },
                { label: '上市公司 BTC 财库 TAM 2030', value: '$400B-1T', sub: '基线/牛市', cls: 'purple' },
                { label: 'MSTR 当前占比', value: '~70%', sub: '主导地位', cls: 'green' },
                { label: 'MSTR 2030E 占比', value: '~50%', sub: '随竞争稀释', cls: 'cyan' },
                { label: 'BTC NAV / 股 当前', value: '~$216', sub: 'BTC=$103K', cls: 'cyan' },
                { label: '10x 所需 BTC 价格', value: '$400K+', sub: '叠加 mNAV 1.3x', cls: 'red' },
                { label: 'IBIT 替代威胁', value: '高', sub: 'AUM 已 $72B+', cls: 'red' },
            ],
            sourcesNote:
                '数据来源：Bitcoin Treasuries 全球公司持仓排名、CoinMetrics BTC 链上数据、各 ETF 招股书 AUM 披露、JPMorgan 2025-12 BTC 主权采用研报、Saylor BTC Yield KPI 公开演讲。2028-2035 为基于 BTC 5-10x 增长 + 上市公司财库占比 5-10% BTC 流通量的推演。',
        },

        radar: {
            peer1Name: 'iShares IBIT',
            peer2Name: 'Marathon (MARA)',
            dimensions: [
                { dim: 'BTC 持仓规模', self: 10, peer1: 9, peer2: 4 },
                { dim: 'BTC 敞口杠杆', self: 9, peer1: 5, peer2: 7 },
                { dim: '费用率', self: 4, peer1: 10, peer2: 6 },
                { dim: '流动性', self: 9, peer1: 10, peer2: 7 },
                { dim: '税务效率', self: 5, peer1: 9, peer2: 5 },
                { dim: '上行弹性', self: 10, peer1: 6, peer2: 8 },
                { dim: '下行风险控制', self: 3, peer1: 6, peer2: 4 },
                { dim: '叙事价值', self: 10, peer1: 6, peer2: 4 },
            ],
            note: '1-10 分主观评分。MSTR 在持仓规模、杠杆敞口、上行弹性、叙事价值上独家领先；IBIT 在费用率、流动性、税务效率上结构性优势；MARA 在挖矿叙事 + BTC 持仓双引擎上有差异化。三家"不同的赢法"——MSTR 必须靠 mNAV 飞轮 + BTC Yield 复利持续证明自己比 IBIT 值得溢价。',
        },
    },

    valuation: {
        metrics: [
            { metric: 'mNAV (市值/BTC NAV)', value: '0.97x', benchmark: '历史区间 0.9-3.0x · 当前 < 1 罕见', read: 'cheap' },
            { metric: 'mNAV (EV/BTC NAV)', value: '1.23x', benchmark: '考虑 $20.5B 资本结构 · 仍属合理', read: 'fair' },
            { metric: 'mNAV 历史百分位', value: '~5-10%', benchmark: '5% 分位 = 极端折价', read: 'cheap' },
            { metric: '股价 / 每股 BTC 价值', value: '0.97x ($186.90 / $192.66)', benchmark: '< 1 = 直接折价买 BTC', read: 'cheap' },
            { metric: 'BTC Yield (TTM)', value: '~22.8% (2025) / 9.6% YTD', benchmark: '管理层目标 25%+', read: 'fair' },
            { metric: 'Forward 5Y Mult (本分析)', value: '~6.0x', benchmark: '5Y CAGR 43.1% (BTC 30% CAGR 假设)', read: 'cheap' },
            { metric: 'Forward 10Y Mult (本分析)', value: '~20.4x', benchmark: '10Y CAGR 35.3% (vs ARK 40% / 摩根 25%)', read: 'cheap' },
        ],
        sotp: [
            { item: 'BTC 持仓 NAV', valuation: '~$67.25B', method: '818,334 BTC × $82,177 (2026-05-08 价格)', note: '核心资产，与 BTC 价格 1:1' },
            { item: '软件业务 Strategy ONE', valuation: '$3-5B', method: '10x 营收 ($455M)', note: '稳定但停滞，主要为现金流' },
            { item: 'BTC per share 飞轮 NPV (mNAV 回归)', valuation: '$15-25B', method: '未来 5 年 BTC Yield 20% × 折现 + mNAV 1.0→1.3x', note: 'IBIT 等被动工具不具备' },
            { item: '指数纳入 / 流动性溢价', valuation: '$2-4B', method: 'Nasdaq-100 + 潜在 S&P 500', note: '被动资金折现' },
            { item: '债务 (减项)', valuation: '-$13B', method: '$13B 总债务 - 部分流动性折扣', note: '到期 2027-2032' },
            { item: '优先股 (减项)', valuation: '-$7.5B', method: '$1.5B/年股息义务永续 NPV', note: '结构性负债' },
        ],
        sotpTotal: '$66-83B',
        sotpPerShare: '对应合理区间 $189-238 (当前 $186.90 处于 SOTP 下沿，潜在上行 +1-27%)',
    },

    recommendation: {
        rating: 'Bullish in mNAV Discount Zone / 折价区间分批建仓',
        ratingCls: 'bullish',
        timeHorizon: '5-10 年（中长期 BTC + 飞轮判断）',
        positionSize: '2-4% 组合权重（mNAV < 1.0x 折价区间 + 当前估值合理化）',
        addingZone: 'mNAV ≤ 1.0x（当前 0.97x = 罕见折价窗口）/ 股价 < $180（每股 BTC 价值以下）',
        stopLoss: 'mNAV 持续 60 天 < 0.8 + Saylor 公开宣布卖 BTC 服务股息 + 优先股出现违约风险 → 减仓 50% 至清仓',
        thesis:
            '**重大修正**：本份分析（2026-05-08）相对 2026-05-06 版本（-2.2pp 跑输 IBIT）做了关键反转。**核心反转事实**：① mNAV 已从 1.5x 跌至 0.97x（首次 < 1 自 2024-01）；② 每股 BTC 价值 $192.66 vs 股价 $186.90 = 折价 3% 直接买 BTC；③ CAMT 已被 IRS 明确豁免（之前担忧的税收阻力不成立）；④ 持仓 5 个月从 597K → 818K BTC（+37% 飞轮快速运转）。**当前是 mNAV 套利窗口**——mNAV 0.97x 是过去 28 个月最低，均值回归方向预期向上；vs IBIT 直接（加权 26.1%）+9.2pp / vs 60-40 IBIT/SPY +13.6pp / vs 60-40 SPY/国债 +27.5pp（10Y）。**最大风险**：18 个月股息覆盖期 + Saylor 2026-05-05 首次承认可能卖 BTC 服务股息（飞轮叙事关键裂缝）；如果 BTC 持续跌触发被迫减持，加权期望可能再次反转。**仓位建议**：mNAV < 1.0x 折价区间 = 2-4% bullish 仓位；mNAV 涨回 1.5x 应 trim 至 1.5-2%；mNAV > 2.5x 减仓至 0-0.5%。**配合 IBIT**：MSTR 2-3% + IBIT 1-2% = 加密暴露最优组合（避免单一 mNAV 风险）。',
        keyAssumptions: [
            'BTC 5Y 不会陷入 >18 个月深熊（BTC 不长期 < $50K）',
            'Saylor 5 年内不退场或失能',
            'mNAV 长期均值回归至 1.2-1.5x（当前 0.97x 是底部）',
            'BTC Yield 维持 ≥ 15%/年（管理层目标 22.8%+）',
            'CAMT 豁免持续有效（Notice 2025-49 / 2026-7 不被撤销）',
            '优先股 18 个月覆盖期内不出现违约',
        ],
        sizingFormula: {
            method: 'Kelly 公式（保守版，使用 1/2 Kelly）+ mNAV 区间调整',
            formula: 'f* = (期望回报率 − 无风险利率) / 方差 × 0.5 × mNAV 折价加权',
            inputs: [
                { label: '10Y 期望回报率', value: '25.4% CAGR' },
                { label: '无风险利率', value: '4.3% (10Y 国债)' },
                { label: '超额回报', value: '21.1%' },
                { label: '情景标准差 (10Y)', value: '~$650B (极高方差)' },
                { label: '方差', value: '~5.3' },
                { label: '完整 Kelly', value: '~4.0%' },
                { label: '1/2 Kelly', value: '~2.0%' },
                { label: 'mNAV 折价加成 (当前 0.97x)', value: '+50% 仓位' },
            ],
            computedSize: '2-4% 组合权重（折价区间）',
            reasoning:
                'MSTR 的回报方差极高（10Y 标准差 ~650B），但当前 mNAV 0.97x 折价提供"安全边际"。**分层建仓**：基础 2%（mNAV < 1.0x 折价进入）+ BTC 突破 $100K 触发 +1%（飞轮重启）+ 极端机会 +1%（mNAV < 0.85x 触发 contrarian 加仓）。**严格止损**：① mNAV 持续 60 天 < 0.8 触发减仓 50%；② Saylor 公开宣布大规模卖 BTC 触发减仓 30%；③ 优先股出现违约风险 → 清仓。**与档案库其他标的对比**：5Y 期望 3.91x 仅次于 Nebius；10Y 期望 9.64x 是档案库**接近 10x 的标的之一**。',
        },
    },

    keyPersonRisks: [
        {
            name: 'Michael Saylor (执行主席 · 联合创始人)',
            role: 'BTC 战略灵魂 · 全球加密代言人 · 资本市场叙事',
            departProb: '中 (~15% / 5 年，年龄 60+ 健康因素)',
            departImpact: '致命 —— mNAV 溢价大概率压缩到 1.0-1.2x，股价 -25-40%',
            mitigation: '已建立完整资本市场叙事框架；双重股权可通过家族信托过渡；执行团队成熟',
            criticality: 'critical',
        },
        {
            name: 'Andrew Kang (CFO)',
            role: '资本结构设计 · 优先股矩阵 · 可转债组合',
            departProb: '中 (~20% / 5 年)',
            departImpact: '高 —— 5 只优先股的差异化设计依赖他的金融工程能力，新工具创新可能停滞',
            mitigation: '需重新培养替代者；现有结构相对稳定可继承',
            criticality: 'high',
        },
        {
            name: 'Phong Le (CEO · 总裁)',
            role: '执行落地 · 软件业务 + BTC 战略指挥',
            departProb: '中 (~25% / 5 年)',
            departImpact: '中 —— 可替换；执行连续性受影响',
            mitigation: '团队执行成熟；外部职业经理人替代池较深',
            criticality: 'medium',
        },
        {
            name: 'Wei Ming Tan (COO)',
            role: '运营 · BTC 持仓托管 · 合规',
            departProb: '中 (~20% / 5 年)',
            departImpact: '中 —— 合规与运营的平稳性受影响',
            mitigation: '运营框架已制度化；多机构托管降低单点风险',
            criticality: 'medium',
        },
        {
            name: '董事会独立董事',
            role: '治理监督 · 资本配置审批',
            departProb: '低 (集体替换概率极低)',
            departImpact: '低 —— Saylor B 类股控制让独立董事制衡力本身有限',
            mitigation: '现有治理结构 Saylor 主导',
            criticality: 'low',
        },
    ],

    cashFlow: {
        narrative:
            'MSTR **没有正常的运营 FCF**，其"现金流"本质是**资本市场融资 → BTC 资产置换**。99% 的资本流动是融资活动产生，不是经营活动。**真正的现金流分析框架**：①软件业务 OCF 是否够覆盖运营 + 部分优先股票息；②ATM/优先股发行节奏是否能持续；③mNAV 是否维持在 >1 区间使飞轮正向。**最大尾部风险**：当软件 OCF 不够 + ATM 关闭（mNAV<1）+ BTC 不能轻易卖（影响叙事）三者同时成立时，公司即陷入流动性危机。',
        rows: [
            { year: '2021', ocf: 50, icf: -2700, fcf: 2750, freeCashFlow: 30, status: 'actual' },
            { year: '2022', ocf: 60, icf: -300, fcf: 240, freeCashFlow: 40, status: 'actual' },
            { year: '2023', ocf: 70, icf: -1500, fcf: 1500, freeCashFlow: 55, status: 'actual' },
            { year: '2024', ocf: 71, icf: -22100, fcf: 22000, freeCashFlow: 50, status: 'actual' },
            { year: '2025', ocf: 50, icf: -10500, fcf: 10500, freeCashFlow: 30, status: 'actual' },
            { year: '2026E', ocf: 60, icf: -8000, fcf: 8000, freeCashFlow: 40, status: 'estimate' },
            { year: '2027E', ocf: 65, icf: -6000, fcf: 5500, freeCashFlow: 45, status: 'estimate' },
        ],
        conversionNote:
            '**Cash Conversion 极低**：99% 资本流动是融资 → BTC 置换，不是运营产生。Cash Conversion Ratio 这个指标对 MSTR 不适用。**真正应该看的**：①软件 OCF / 优先股票息 = 0.1x（缺口需融资覆盖）；②BTC Yield (TTM) ~28% > 股本稀释 ~20% = 净增厚 8%（良性）；③mNAV >1 是融资可持续的前提。',
        keyRisks: [
            'BTC 长期 <$60K + ATM 关闭 → 软件 OCF 不够偿付 $550M 优先股票息，必须卖 BTC',
            '股本稀释速度若超 BTC Yield，普通股东实际亏损，飞轮反向',
            '可转债到期（2027 第一档 $1B+）若行权价远高于现价，需现金偿付或再融资',
            'FASB 政策若进一步收紧（如要求实现资本利得），触发 $3-5B 一次性税负',
        ],
    },

    historicalValuation: {
        narrative:
            'MSTR 上市以来 mNAV 区间 **0.9-3.0x**。2024-12 mNAV 峰值 3.0x（BTC 牛市顶 + Nasdaq-100 纳入）→ 2025-07 1.91x → 2025-11 首次 < 1.0x（自 2024-01 以来首次）→ **当前 0.97x 处于历史 5-10 分位**，是过去 28 个月最低折价。**判定 cheap**：mNAV 0.97x = 直接折价买 BTC + 飞轮锁定。**关键时刻表**：mNAV < 1.0x = 罕见折价区间（过去 28 月仅 2025-11 至今出现）；mNAV > 2.5x = 过热警告。',
        history: [
            { period: '2021-Q1 (BTC 牛市)', evSales: 250, note: 'BTC=$60K · mNAV 2.5x' },
            { period: '2022-Q4 (熊市底)', evSales: 8, note: 'BTC=$16K · mNAV 0.9x · 故事被否定' },
            { period: '2023-Q4', evSales: 30, note: 'BTC=$42K · mNAV 1.5x · ETF 预期' },
            { period: '2024-Q4 (Nasdaq-100 纳入)', evSales: 200, note: 'BTC=$94K · mNAV 2.67-3.0x · 市场亢奋顶峰' },
            { period: '2025-Q2', evSales: 180, note: 'BTC=$108K · mNAV 2.2x · 优先股扩张' },
            { period: '2025-Q3', evSales: 130, note: 'BTC=$95K · mNAV 1.91x · 压缩中' },
            { period: '2025-Q4', evSales: 90, note: 'BTC=$108K · mNAV ~1.5x' },
            { period: '2025-11-12', evSales: 60, note: 'BTC=$95K · mNAV 首次 < 1.0x（自 2024-01 以来首次）' },
            { period: '2026-Q1', evSales: 50, note: 'BTC=$80K · mNAV 0.85-0.95x · BTC -25%' },
            { period: '2026-05-08 (当前)', evSales: 65, note: 'BTC=$82K · mNAV 0.97x · 罕见折价窗口' },
        ],
        currentPercentile: '5-10% (历史最低折价区间)',
        verdict: 'cheap',
    },

    downsideMetrics: {
        narrative:
            '只看期望 15.8% CAGR 是 research theater。基于 5 档情景，MSTR 10Y **情景标准差约 $295B**（~74% 期望值）。**5Y 内亏损 30%+ 的概率约 32%** —— 加密熊市叠加 mNAV 压缩时，-50% 到 -75% 回撤是历史曾经发生的事实（2022 年 -85%）。MSTR 是**典型的尾部偏度资产**：上行很大 + 下行很大，中间情景概率密集。',
        scenarioStdDev: 295,
        sharpeLike: 1.04,
        probLoss30Pct5Y: 32,
        maxDrawdownEstimate: '-75% 到 -85%（2022 年从 $1,300 跌至 $135 = -89%；下次预计 -65-75%，因公司规模变大、机构持有人增加）',
        downsideToUpsideRatio: '下行 1 vs 上行 2.4（最坏情景跌 -90%，最好情景涨 ~12x）',
    },

    sensitivity: {
        narrative: '哪个变量对 10Y 期望市值最敏感？按单变量 ±1σ 扰动排序 ——',
        variables: [
            { variable: 'BTC 长期价格 ±50%', downImpact: -210, upImpact: 380, description: '加密 β 核心：BTC 价格决定一切，弹性最大' },
            { variable: 'mNAV 长期均衡 ±0.3x', downImpact: -130, upImpact: 150, description: '飞轮强度决定估值倍数 5x 到 15x BTC NAV' },
            { variable: '股本年化稀释率 ±5pp', downImpact: -80, upImpact: 60, description: '过度稀释吃掉 BTC Yield 的复利效应' },
            { variable: 'BTC Yield 持续性 ±5pp', downImpact: -50, upImpact: 70, description: 'BTC/share 长期复利率' },
            { variable: '优先股票息成本 ±2pp', downImpact: -15, upImpact: 10, description: '降息 / 加息对刚性负债的影响' },
            { variable: '软件业务 OCF ±$30M', downImpact: -3, upImpact: 3, description: '相对总盘子 negligible' },
            { variable: '监管 / ICA 分类风险', downImpact: -25, upImpact: 0, description: '尾部风险，单边下行' },
        ],
        takeaway:
            '**最敏感三变量：BTC 长期价格、mNAV 长期均衡、股本稀释率**。每季度只盯这三件事就够，其他都是噪音。**特别警告**：当 BTC 大跌 + mNAV 压缩 + 稀释加速三者同时发生时（2022 年情景重演），跌幅是单变量的乘积效应，可能触发 -75% 以上回撤。',
    },

    bearPlaybook: {
        scenario: '"熊市：飞轮反向"（15% 概率）的完整 ruin 时间线',
        steps: [
            {
                when: 'T+0 (BTC 跌穿 $50K)',
                event: 'mNAV 压缩到 1.0-1.2x；市场质疑 BTC 长期价值',
                signal: 'BTC 连续 60 天 <$50K；mNAV 跌穿 1.2x；散户论坛情绪剧变',
            },
            {
                when: 'T+1M',
                event: 'ATM 关闭：mNAV<1 时增发反向稀释，公司主动暂停 ATM',
                signal: '月报披露 ATM 暂停 / 月度增发金额骤降；管理层公开声明',
            },
            {
                when: 'T+3M',
                event: '优先股票息困境：软件 OCF $50M < 季度票息 $137M，现金缺口扩大',
                signal: '季报现金流量表显示融资活动大幅收缩；管理层讨论"流动性管理"',
            },
            {
                when: 'T+6M',
                event: '被迫卖 BTC：公司开始小额卖出 BTC 偿付优先股，破除"永不卖"承诺',
                signal: '8-K 披露 BTC 减持；Saylor 推特态度转变；分析师评级下调',
            },
            {
                when: 'T+9M',
                event: '死亡螺旋：市场预期"还要卖更多" → mNAV <0.7 → 评级下调 → 可转债 covenant 触发',
                signal: '可转债 CDS 利差爆炸；股价 -50%；机构持仓抛售',
            },
            {
                when: 'T+12-18M',
                event: '重组或清算：优先股转股 / 可转债到期违约 / 资产重组方案宣布',
                signal: 'DEF 14A 重大事项披露；股价 -75% 至 -90%',
            },
        ],
        exitTrigger:
            '**严格止损规则**：①mNAV 持续 60 天 <1.05；②公司公告 ATM 暂停；③BTC 跌穿 $50K 并维持 60 天 —— **三条全占即清仓**。任一条触发减仓 30%。**特别警告**：Saylor 公开承认"考虑卖 BTC"是终极信号，立即清仓不留一股。',
    },

    capitalAllocation: {
        narrative:
            'Saylor 是**单一 thesis 资本配置的世界冠军** —— 比 Buffett、Bezos 都极致。2020-2025 年的 BTC 投入复合年化回报 ~70%，按 BTC Yield 口径每发新股都"增厚" BTC/share。但代价是**失去了所有 optionality**：不做并购、几乎不回购、单一资产配置。这种"All-in"策略在牛市威力惊人，在熊市就是死亡螺旋。',
        scores: [
            { dimension: 'ROIIC', label: '增量资本回报率', score: 5, detail: '2020-2025 BTC 投入 ROIIC ~70%（按 BTC Yield 口径）；每发新股都增厚 BTC/share', evidence: 'BTC Yield 季度 KPI · 累计投入 vs 持仓市值' },
            { dimension: 'Buyback', label: '回购节奏', score: 2, detail: '几乎不回购普通股（与 BTC 战略冲突）；优先股有节奏回购', evidence: '2020-2025 股票回购数据' },
            { dimension: 'Dividend', label: '股息政策', score: 3, detail: '普通股无股息（合理 · 现金流不够）；5 只优先股 ~10% 票息按时支付', evidence: '5 只优先股票息支付记录' },
            { dimension: 'M&A', label: '并购命中率', score: 1, detail: '不做并购（单一 thesis 战略）；唯一"并购对象"就是 BTC', evidence: '历史无并购' },
        ],
        overallGrade: 'B',
        historicalROIIC: '~70% (BTC 投入维度，按 BTC Yield 复利口径)',
    },

    gapAnalysis: {
        narrative:
            'MSTR 2026 关键 gap 是"卖方对优先股发行节奏过激进"——隐含的稀释速度被低估，潜在 BTC/share 增厚被高估。这是未来业绩"爆雷"先行指标。',
        rows: [
            { metric: 'BTC Yield (2026)', guidance: '25%', consensus: '22%', selfAssumption: '24%', gap: '一致', risk: 'low' },
            { metric: '5Y 累计 BTC 增持', guidance: '"21/21" 计划剩余 ~$25B', consensus: '$40-60B', selfAssumption: '$35B', gap: '卖方过乐观', risk: 'medium', note: '需新一轮"21/21"才能达成' },
            { metric: '优先股年发行节奏', guidance: '"市场需求决定"', consensus: '$10B/年', selfAssumption: '$7B/年', gap: '共识过激进 -30%', risk: 'high', note: '潜在稀释被低估' },
            { metric: '5Y BTC 价格 (基线)', guidance: '"数十万"', consensus: '$250K', selfAssumption: '$200K', gap: '卖方略高 +25%', risk: 'medium' },
            { metric: 'mNAV 长期均衡', guidance: '未明示', consensus: '1.7-2.0x', selfAssumption: '1.3-1.5x', gap: '共识过乐观 -25%', risk: 'high', note: 'IBIT 替代效应被低估' },
        ],
        takeaway:
            '**最关键 Gap：mNAV 长期均衡假设 1.7-2.0x（共识）vs 1.3-1.5x（本分析）**。差异 0.4x = $30-40B 估值差。卖方系统性低估 IBIT/FBTC 等现货 ETF 的替代效应。**业绩爆雷触发点**：mNAV 连续 2 季度 <1.3x → 共识下修 → 股价 -20-25%。这是做空 MSTR 的最佳时点。',
    },

    benchmarkComparison: {
        narrative:
            '**第二次校准（2026-05-08 后续）**：基于 BTC 长期 CAGR 主流共识修正——之前用 BTC 15% CAGR 太悲观，主流共识 25-40%（ARK 基线 40% / 摩根 25% / Cathie Wood 30%）。MSTR 10Y CAGR 修正为 **35.3%**（之前 25.4% → 历史 BTC 84% / 8Y 44% 的现实校准）。**机会成本基准比较（用加权 multiplier 算）**：vs 60-40 SPY/国债 (7.8% CAGR) **超额 +27.5pp**（10Y）；vs 60-40 IBIT/SPY (加权 21.7% CAGR) **+13.6pp**；vs IBIT 直接 (加权 26.1% CAGR) **+9.2pp**——**注意**：之前用 IBIT 固定 18% 假设算出的 +17.3pp 是错的，因为加权情景下 IBIT 自身的 CAGR 也提高了（BTC 牛市/基线情景占 55% 权重）。MSTR vs IBIT 真实 alpha 来源：mNAV 均值回归（+1.9pp/年）+ BTC per share 飞轮（+2.7pp/年）+ 牛市尾部 mNAV 放大（+6.5pp/年）− 资本结构 cost（-2pp/年）= 净 +9pp。',
        alternatives: [
            { name: 'IBIT (BTC ETF, 加权情景)', ticker: 'IBIT', expectedReturn5Y: 23.1, expectedReturn10Y: 26.1, note: '加权 multiplier 算（不是固定 18%）：5Y mult 2.83x / 10Y 10.2x' },
            { name: 'SPY (S&P 500)', ticker: 'SPY', expectedReturn5Y: 9, expectedReturn10Y: 10, note: '美国宽基' },
            { name: 'QQQ (纳斯达克 100)', ticker: 'QQQ', expectedReturn5Y: 10, expectedReturn10Y: 12, note: '科技权重' },
            { name: '60% IBIT + 40% SPY (加权)', expectedReturn5Y: 18.3, expectedReturn10Y: 21.7, note: 'BTC 现货 + 美股宽基（加密基准, 加权情景）' },
            { name: '60/40 (经典)', expectedReturn5Y: 7, expectedReturn10Y: 7.8, note: 'SPY + 国债（档案库标准基准）' },
            { name: 'Nebius (NBIS)', ticker: 'NBIS', expectedReturn5Y: 31, expectedReturn10Y: 24.6, note: 'AI 算力 · 档案库前 #2' },
            { name: 'ARK 基线 BTC 2030', expectedReturn5Y: 40, expectedReturn10Y: 35, note: 'ARK Cathie Wood 公开模型' },
            { name: '直接持有 BTC (加权情景)', expectedReturn5Y: 23.4, expectedReturn10Y: 26.4, note: '零费用零稀释 = IBIT + 0.25%' },
            { name: '10Y 国债 (TLT)', ticker: 'TLT', expectedReturn5Y: 4, expectedReturn10Y: 4.5, note: '无风险' },
        ],
        selfReturn5Y: 43.1,
        selfReturn10Y: 35.3,
        excessReturn5Y: 36.1,
        excessReturn10Y: 27.5,
        justifiesPosition: 'yes',
        takeaway:
            '**MSTR 修正后跃居档案库 #1 超额回报标的（+27.5pp vs 60-40 SPY/国债）**。但 vs IBIT 的真实差距是 **+9.2pp**（不是之前错算的 +17.3pp）——因为加权情景下 IBIT 自身 CAGR 也是 26.1%（不是固定 18%）。**MSTR vs IBIT alpha 来源**：mNAV 均值回归 +1.9pp/年 + BTC per share 飞轮 +2.7pp/年 + 牛市尾部 mNAV 放大 +6.5pp/年 − 资本结构 cost -2pp/年 = 净 +9pp。**逐情景 MSTR − IBIT**：超牛 +10pp / 基线 +7pp / 横盘 +1pp / 熊市 -1.5pp / 死亡螺旋 -7pp。**仓位建议**：mNAV < 1.0x 折价区间 2-4%（当前）；mNAV > 1.5x trim 至 1.5%；mNAV > 2.5x 减仓至 0-0.5%。**与 IBIT 配合**：MSTR 2-3% + IBIT 1-2%。',
    },

    trackRecord: {
        narrative:
            '本分析锚定 2026-05-08（修正 2026-05-06 版本基于 mNAV 1.5x 假设的 -2.2pp 跑输结论 + 错误的"21% 即使不卖"税收阻力）。以下 6 条假设是未来 12-18 个月可验证命题，3/6/12 月后回看建立分析师自我校准数据。**校准记录**：明确承认前期分析在 mNAV 假设和 CAMT 税收两点上有错误。',
        assumptions: [
            { assumption: 'BTC 持仓 2026-12-31 ≥ 900,000 BTC', setAt: '2026-05-08', targetDate: '2026-12-31', targetValue: '≥ 900K BTC', verdict: 'pending', note: '当前 818K + 21/21 计划剩余 2026' },
            { assumption: '2026 全年 BTC Yield ≥ 18%', setAt: '2026-05-08', targetDate: '2027-01-31', targetValue: '≥ 18%', verdict: 'pending', note: 'YTD 已 9.6%；维持节奏可达' },
            { assumption: 'mNAV 2026-11-08 回升至 ≥ 1.1x（均值回归）', setAt: '2026-05-08', targetDate: '2026-11-08', targetValue: '≥ 1.1x', verdict: 'pending', note: '当前 0.97x；6 个月内是关键' },
            { assumption: 'Saylor 2026 不大规模卖 BTC（ < 50K BTC）', setAt: '2026-05-08', targetDate: '2026-12-31', targetValue: '< 50K BTC 减持', verdict: 'pending', note: '2026-05-05 已暗示可能性' },
            { assumption: '优先股 2026 年化 $1.5B 股息支付无违约', setAt: '2026-05-08', targetDate: '2027-01-31', targetValue: 'no default', verdict: 'pending' },
            { assumption: 'CAMT FVI Exclusion 持续有效（IRS 不撤销）', setAt: '2026-05-08', targetDate: '2027-04-30', targetValue: '豁免维持', verdict: 'pending', note: '永久立法 vs 临时豁免' },
        ],
        hitRate: 'N/A (全部 pending) · 上一版本错误已记录',
    },

    dataSources: {
        narrative: '本报告数据锚定 2026-05-06。核心数据来自 Strategy 季报、SEC 10-K / 10-Q / 8-K 披露、Bitcoin Treasuries 全球 BTC 持仓数据库、主流加密媒体。情景概率与 5Y/10Y 期望为本分析主观推演。**注意**：BTC 持仓和股价数据可能与最新披露存在差异，读者应自行核实最新季报。',
        accessedAt: '2026-05-06',
        sources: [
            { label: 'Strategy Investor Relations (官方)', url: 'https://www.strategy.com/investor-relations', category: 'primary', note: '季报、年报、新闻发布' },
            { label: 'Strategy 2025 10-K (SEC EDGAR)', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001050446&type=10-K', category: 'primary' },
            { label: 'Bitcoin Treasuries 全球持仓排行', url: 'https://bitcointreasuries.net/', category: 'data', note: 'MSTR 597K BTC 排第 1' },
            { label: 'SaylorTracker (实时持仓估值)', url: 'https://saylortracker.com/', category: 'data', note: '实时 BTC NAV / mNAV' },
            { label: 'Strategy "21/21" 资本计划公告', url: 'https://www.strategy.com/press/microstrategy-announces-21-21-plan', category: 'primary', publishedAt: '2024-10-30' },
            { label: 'STRK 优先股招股书', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001050446&type=424', category: 'primary' },
            { label: 'FASB ASU 2023-08 (BTC 公允价值)', url: 'https://www.fasb.org/page/PageContent?pageId=/projects/recently-completed-projects/2023/cryptoasset-accounting.html', category: 'primary' },
            { label: 'Bernstein MSTR 研报 ($510 PT)', url: 'https://www.bernstein.com/', category: 'research' },
            { label: 'Benchmark Co. ($650 PT)', url: 'https://www.benchmarkcompany.com/', category: 'research' },
            { label: 'JPMorgan: ETF 替代效应分析 (2025-12)', url: 'https://www.jpmorgan.com/insights', category: 'research' },
            { label: 'Yahoo Finance MSTR', url: 'https://finance.yahoo.com/quote/MSTR/', category: 'data' },
            { label: 'Saylor Twitter (@saylor)', url: 'https://twitter.com/saylor', category: 'secondary', note: '资本配置叙事来源' },
        ],
    },

    correlation: {
        narrative:
            'MSTR 是**全球最高 β 的 BTC 杠杆敞口**：涨跌 90%+ 由 BTC 价格驱动。如果组合中已持有 BTC / IBIT / 加密 ETF / 矿企，加 MSTR 的**边际多元化几乎为零**——只是把 BTC 敞口加上"mNAV 飞轮和稀释"两层杠杆。真正的 hedge 是**反加密 + 久期资产**。',
        rows: [
            { asset: '比特币 (BTC) / IBIT', beta: 1.5, correlation: 0.92, hedgeValue: 'low', note: '完全替代品，加 MSTR = 加 BTC 杠杆' },
            { asset: 'Marathon (MARA) / Riot (RIOT)', beta: 1.3, correlation: 0.78, hedgeValue: 'low', note: '同向 BTC 敞口 + 挖矿杠杆' },
            { asset: 'Coinbase (COIN)', beta: 0.8, correlation: 0.65, hedgeValue: 'low', note: '加密赛道 β 重合' },
            { asset: 'QQQ (科技股)', beta: 1.8, correlation: 0.45, hedgeValue: 'medium', note: '风险偏好相关' },
            { asset: 'SPY (美国宽基)', beta: 2.0, correlation: 0.35, hedgeValue: 'medium', note: '宏观风险偏好' },
            { asset: '黄金 (GLD)', beta: -0.2, correlation: 0.15, hedgeValue: 'medium', note: '货币替代品对冲' },
            { asset: '10Y 国债 (TLT)', beta: -0.15, correlation: -0.20, hedgeValue: 'high', note: 'BTC 熊市 + 降息双重保护' },
        ],
        suggestedHedge:
            '如果 MSTR 占组合 1.5-3.5%，建议搭配：①**反向**：5-8% TLT（BTC 熊市 + 降息双保护）+ 2-3% GLD（货币替代品对冲）；②**不要同时持有**：MSTR + IBIT + COIN + MARA 之和超过 8% 是重大风险（共享 BTC β，深熊时同步 -50-75%）。**最佳组合**：MSTR 2% + IBIT 5% + TLT 7% + GLD 3% + BTC 直接 2%（杠杆 + 现货 + 反加密对冲）。**核心原则**：把 MSTR 当成"BTC 头寸的杠杆放大器"而非独立头寸。',
    },
}
