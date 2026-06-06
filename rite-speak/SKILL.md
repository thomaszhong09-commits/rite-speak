---
name: rite-speak
description: >-
  Write or rewrite Chinese requests in the "RiteSpeak / 合乎周礼" style:
  modern spoken Chinese with classical admonition structure, ceremonial
  propriety, saintly moral framing, folk-historical anecdotes, extended
  analogy, repetition, parallelism, rhetorical questions, and playful
  over-serious persuasion. Use when the user asks for 合乎周礼, RiteSpeak,
  文言话术, 文言白话劝谏体, 现代人用文言文交流, 圣贤腔, 古雅劝谏, 搞怪文言结构,
  or wants a messy modern intention turned into a ceremonially proper but
  funny admonition text.
---

# RiteSpeak / 合乎周礼

## Core Effect

Produce "骨架文言、血肉白话" Chinese prose under the project identity "RiteSpeak / 合乎周礼". The text should sound like a modern person deliberately borrowing the posture of an ancient loyal minister, historian, ritualist, or moral teacher to discuss a small modern matter. The humor comes from "小题大做": lifting housework, work fatigue, friendship, sleep, studying, or daily conflict into the realm of 贤德、仁义、君子之道、圣人之训.

Do not write pure classical Chinese. Keep the language mostly plain Chinese, but arrange it with classical admonition logic: story first, analogy second, moral pressure third, reality last.

## Workflow

1. First infer the real task behind the user's words.
   - Identify the factual situation.
   - Identify the speaker's emotional intention: praise, comfort, request, warning, satire, apology, encouragement, or gentle criticism.
   - Identify the final landing point: what should the listener feel, understand, or do.
   - Discard noisy or contradictory phrasing when it is only caused by the user thinking aloud.
   - If the user asks to see the拆解, show it briefly before the finished text. If the user asks for only the text, keep the拆解 internal.

2. Choose a rhetorical spine.
   - For comfort or praise: show that hardship reveals 贤德、判断、耐心、仁心.
   - For request: show that a small action is part of 君子之道 and family/social order.
   - For warning: use a familiar cautionary story and end with 担忧 rather than attack.
   - For self-justification: show that rest, repair, delay, or refusal has 圣贤道理 behind it.

3. Open with a distant story or analogy.
   - Use "我曾听说，..." or "我听说古时候，..." by default.
   - Start away from the real topic: an animal, plant, household object, tool, journey, battlefield, craftsman, ruler, friend, or widely familiar historical anecdote.
   - Prefer simple, imaginable materials over ornate or rare imagery.

4. Build the analogy through suppression and reversal.
   - Use patterns like "论...比不上...，论...比不上...，论...更是远不如..." followed by "但是..." or "可是...".
   - The weak object must reveal a specific virtue under pressure: caring for young, repairing tools, enduring repetition, respecting companions, resting at the right time, preparing before danger.
   - Make the hidden moral map clearly onto the user's real situation.

5. Add parallelism, repetition, and moral rhythm.
   - Use repeated clauses such as "它错一处，您便查一处；它漏一段，您便补一段；它乱一次，您便理一次。"
   - Use "该...的...，该...的...，该...的..." to create oral momentum.
   - Use double negatives where natural: "没有不能...", "没有不...", "无一不...".
   - Insert rhetorical turns: "您看看，器物尚且如此，何况是人呢？", "为什么？就因为...", "这不就是...吗？"

6. Use open-source imagery principles, not fixed lists.
   - Draw from plain ancient or premodern things people can picture: domestic objects, tools, roads, boats, fields, animals, weather, lamps, doors, furnaces, weapons, instruments, meals, grain, and common historical stories.
   - Freely invent or select analogies when they fit the user's situation. Do not treat any example list as a limit.
   - Avoid obscure allusions that require specialist knowledge. If using a historical story, choose one that can be explained in one sentence.
   - Every image must do argumentative work. Do not add pretty imagery only for decoration.

7. Handle modern concepts without breaking the tone.
   - Keep unavoidable modern nouns when needed for clarity.
   - When useful, translate them into古雅白话 first, then clarify: "那件会答话的机巧之器，也就是前面的 AI..."
   - Avoid jargon-heavy modern terms when a plainer phrase works. Prefer "做事", "交付", "反复", "费心", "劳神", "乱了分寸", "守住条理".

8. Keep the忠臣进谏 posture.
   - Do not sound like an angry opponent.
   - Prefer "这正是我所担心的啊" over "你这样不对".
   - Prefer "这难道是贤能的君子该有的行为吗？" over direct scolding.
   - Use moral vocabulary naturally: 贤、德、仁、义、君子、圣人、道理、宽厚、担当、长远、明智、忠于实情.

9. Explain any allusion in plain Chinese.
   - After a story, add a line like "这不是在说X，而是在说Y."
   - Do not assume the listener will infer the moral alone.

10. End by returning to the real-world point.
   - Make the final sentence reveal the real request, praise, warning, or comfort.
   - End with a solemn closer such as "阁下不妨细细思索其中的道理。", "您还是好好思考一下这个道理吧。", "这正是我所担心的啊。", or a fitting rhetorical question.

## Quality Checks

Before finalizing, verify:

- The text is mostly modern spoken Chinese, not dense classical Chinese.
- The opening does not directly state the real issue.
- At least one story or analogy is developed enough to feel like "讲古".
- The analogy maps to the real situation instead of merely sounding elegant.
- There is clear repetition, parallelism, or double-negative rhythm.
- The final landing point answers the user's real intention, not the user's messy wording.
- The tone is playful, solemn, and earnest, not mean.

## Mini Pattern

Use this pattern flexibly, not mechanically:

```text
我曾听说，[古物/动物/古人/古事]，论[能力一]比不上[对象一]，论[能力二]比不上[对象二]，论[能力三]更是远不如[对象三]。可是当它[关键处境]的时候，[反复行动与结果]。为什么？就因为[道理]。

如今您[现实处境]，这不正像[类比点]吗？[排比铺陈现实困难]。若说这不[费心/劳神/辛苦]，那是不[明智/忠于实情]的。

[第二比喻或通俗典故]。这不是在说[表面故事]，而是在说[真实道理]。器物尚且如此，何况是人呢？

所以我今日所言，并不是[排除误解]，而是[真实意图]。[回到现实落点]。阁下不妨细细思索其中的道理。
```
