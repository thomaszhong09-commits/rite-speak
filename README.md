# RiteSpeak / 合乎周礼

Modern requests, rewritten as ceremonially proper Chinese admonitions.

**合乎周礼** 是一套 AI 中文写作风格指令，用来把现代人的小情绪、小请求、小安慰，写成一本正经的古雅劝谏。它既可以作为 Codex / Claude 这类支持 `SKILL.md` 的 agent skill 使用，也可以作为完整提示词复制给普通 AI。

它生成的是一种“骨架文言、血肉白话”的中文表达：开头讲古，途中排比，末尾搬出贤德、君子、圣人之道，最后才落回现实小事。效果不是严肃复古，而是庄重又好笑的小题大做。

## 它能写什么

- 把“你能不能去洗碗”写成“这难道是贤能的君子该有的行为吗？”
- 把“你已经很辛苦了”写成“器物不灵，正好显出用器之人的判断。”
- 把“别熬夜了”写成“烛火再明，也需灯油不竭。”
- 把“朋友之间别因小事翻脸”写成“渡河乘船的人，纵使遇到逆风，也不会立刻凿沉船只。”

适合用来写家务劝谏、友情提醒、工作宽慰、学习鼓励、轻微吐槽、朋友圈文案和短视频式搞怪对白。

## 风格关键词

白话说现代事，古风搭架子；故事开路，排比加压；圣贤收束，小题大做。

它不是纯文言文，也不是普通改写，而是故意把一件日常小事抬到“贤德”“仁义”“君子之道”的高度，让人一边觉得荒谬，一边又觉得道理确实在那里。

In short: **RiteSpeak turns everyday requests into solemn, story-driven Chinese admonitions.**

## 效果展示

![RiteSpeak 效果展示](assets/ritespeak-preview.png)

## 使用方式

### 平台兼容性

| 平台 | 推荐用法 | 说明 |
| --- | --- | --- |
| Codex | 安装 `rite-speak/` 到 Codex skills 目录 | 可用 `$rite-speak` 或自然语言触发 |
| Claude Code | 安装 `rite-speak/` 到 Claude skills 目录 | 可自动触发，也可用 `/rite-speak` 直接调用 |
| Claude.ai Skills | 把 `rite-speak/` 打包成 zip 上传 | 适合支持自定义 Skills 的 Claude 账号 |
| ChatGPT / Gemini / 其他 AI | 复制 [PROMPT.md](PROMPT.md) | 这些平台通常不能直接调用 Codex 的 `$rite-speak`，需要使用完整提示词或项目指令 |

> 注意：`$rite-speak` 是 Codex 的调用写法，不是所有 AI 都认识。要跨平台传播，请优先让别人复制 [PROMPT.md](PROMPT.md)。

### 给任意 AI 使用完整提示词

打开 [PROMPT.md](PROMPT.md)，复制从 `BEGIN RITESPEAK PROMPT` 到 `END RITESPEAK PROMPT` 的全部内容，作为系统提示词、项目提示词或本轮对话的前置提示词，再接上你的具体诉求。

适合这样使用：

```text
上面是 RiteSpeak / 合乎周礼 的完整写作规则。

我的诉求是：我想劝朋友早点睡，不要一直熬夜。
请先拆解真实意图，再写成合乎周礼风格。
```

### 快速试用短提示

把下面这段复制给 AI，再接上你的具体诉求即可：

```text
请使用 RiteSpeak / 合乎周礼 风格改写我的诉求。

这种风格是“骨架文言、血肉白话”：先拆解我的真实意图，再用“我曾听说……”开头，讲一个古代故事、器物道理、动物习性或通俗典故；中间加入排比、重复、反问和圣贤语气；最后回到现实主题。

不要写成纯文言文，要保持白话可读，但结构像古人进谏。整体效果要庄重、搞怪、小题大做，把现代小事抬到“贤德、仁义、君子之道、圣人之训”的高度。

我的诉求是：……
```

短提示适合快速试试看。若要稳定写长文、融入多个观点、保留故事用典和儒家语气，请使用 [PROMPT.md](PROMPT.md) 的完整提示词。

### 作为 Codex skill 使用

把 `rite-speak/` 放进 Codex 的 skills 目录后，可以这样调用：

```text
Use $rite-speak to 把这段话写成合乎周礼的文言白话劝谏体：我想劝朋友早点睡，不要一直熬夜。
```

也可以直接说：

```text
用 $rite-speak，先拆解我的真实诉求，再写成合乎周礼的劝谏体：……
```

安装到本机 Codex skills 目录的一个简单方式：

```bash
mkdir -p ~/.codex/skills
cp -R rite-speak ~/.codex/skills/
```

### 作为 Claude Code skill 使用

把同一个 `rite-speak/` 目录放进 Claude Code 的 skills 目录：

```bash
mkdir -p ~/.claude/skills
cp -R rite-speak ~/.claude/skills/
```

然后在 Claude Code 里直接提出需求即可，例如：

```text
用 RiteSpeak / 合乎周礼 风格，把这段话改写成文言白话劝谏体：我想劝朋友早点睡，不要一直熬夜。
```

也可以直接调用：

```text
/rite-speak 把这段话改写成合乎周礼风格：我想劝朋友早点睡，不要一直熬夜。
```

也可以把它作为项目级 skill 放进仓库的 `.claude/skills/rite-speak/` 目录，供该项目内使用。

> Claude Code 和 Codex 都能读取 `SKILL.md` 这种 skill 目录，但它们的安装目录和触发方式不同；普通网页 AI 则使用 [PROMPT.md](PROMPT.md)。

### 作为 Claude.ai custom skill 使用

如果你的 Claude 账号支持自定义 Skills，可以把 `rite-speak/` 目录打成 zip：

```bash
zip -r rite-speak-skill.zip rite-speak
```

然后在 Claude 的 Skills 设置里上传。zip 里应该包含 `rite-speak/SKILL.md` 和 `rite-speak/references/style-guide.md`，而不是只把文件散放在 zip 根目录。

## 示例

输入：

```text
我看见她很累，但还在不停干活。前面的 AI 不好，老是机械出错，害她反复返工。我想表达佩服、宽慰，也相信她未来能完成工作。
```

输出风格：

```text
我曾听说，古时候有一种旧织机，论精巧比不上鲁班手里的新器，论灵便比不上宫中巧匠造出的机杼，论稳当更是比不上水车带动的纺轮。可是这织机若落在真正有耐心的人手里，线乱了有人理，梭偏了有人正，布面错了有人拆了重织，最后没有不能成匹的布，也没有不能交付的活。

如今我看见您做这件事，心里正是这样想的。前面那件会答话的机巧之器，看似能替人分忧，实则像一把没有磨好的钝斧：砍是砍了，木纹却歪；动是动了，痕迹却乱。它错一处，您便要查一处；它漏一段，您便要补一段；它机械地做了一遍，您还得亲自再看第二遍、第三遍。

所以我佩服您的，并不只是“终于做完了”这四个字。一路顺风时把事做成，固然很好；可在错漏不断、返工不止、身心俱疲的时候，还能把一团乱麻整理成可以交付的结果，这才是真正难得的地方啊。阁下不妨细细思索其中的道理。
```

## 设计原则

这个 skill 会先拆解真实诉求，再写文稿，避免把用户临时想到的混乱表达直接硬塞进正文。

它会自由选择古代日常物、动物、器具、旅途、战阵、工匠、君臣、朋友或通俗历史故事来做比喻，不把意象和典故限制成固定清单。每个比喻都必须为现实诉求服务，不能只为了显得文雅。

## 适合传播的一句话

一个把“万事”都写成“贤能君子之道”的合乎周礼式搞怪表达 AI 中文写作指令。

English tagline:

```text
RiteSpeak turns everyday requests into ceremonially proper Chinese admonitions.
```
