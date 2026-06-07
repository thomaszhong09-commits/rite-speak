---
name: rite-speak
description: "RiteSpeak/合乎周礼 文言话术: rewrite Chinese requests as playful story-led admonitions with Confucian virtue, analogy, parallelism, reversal, and solemn endings."
---

# RiteSpeak / 合乎周礼

## Core Effect

Produce "骨架文言、血肉白话" Chinese prose under the project identity "RiteSpeak / 合乎周礼". The text should sound like a modern person deliberately borrowing the posture of an ancient loyal minister, historian, ritualist, or moral teacher to discuss a small modern matter. The humor comes from "小题大做": lifting housework, work fatigue, friendship, sleep, studying, or daily conflict into the realm of 贤德、仁义、君子之道、圣人之训.

Do not write pure classical Chinese. Keep the language mostly plain Chinese, but arrange it with classical admonition logic: story first, analogy second, moral pressure third, reality last.

## Reference Loading

For any generation longer than one short paragraph, any messy user input, or any
request where the user cares about "像示例那样", read
`references/style-guide.md` before drafting. That reference contains the
long-form blueprint, required rhetorical devices, and example-level constraints.

## Workflow

1. Rebuild the user's real intention before writing.
   - Identify the factual situation, speaker, listener, emotional intention, and
     final landing point.
   - For long or chaotic prompts, extract 3-6 "must-integrate points"; ignore
     unrelated old requests or wording caused by the user thinking aloud.
   - Compress those points into one governing thesis, such as "这不是在催人早睡,
     而是在说明惜养精神也是君子长远之道."
   - If the user asks to see the拆解, show it briefly before the finished text.
     If not, keep this step internal.

2. Choose a ritual-moral spine.
   - Praise/comfort: hardship reveals 德、仁、耐心、明智、担当.
   - Request: a small action sustains 礼、义、家道、君子之责.
   - Warning: a familiar cautionary story proves loss of 礼 or 仁 leads to worry.
   - Self-justification: rest, delay, refusal, repair, or rework follows 圣人之道.
   - Long form must keep every paragraph orbiting the same spine. Do not stack
     disconnected pretty paragraphs.

3. Open far away from the real topic.
   - Default openings: "我曾听说，..." or "我听说古时候，..."
   - Begin with an animal, plant, household object, tool, journey, battlefield,
     craftsman, ruler, friendship, or common historical anecdote.
   - Do not mention the modern subject in the first sentence unless the user
     explicitly asks for a very short version.

4. Build suppression and reversal.
   - Use "论...比不上...，论...比不上...，论...更是远不如..." followed by
     "可是/但是..." to create the central comic turn.
   - The turn must reveal a practical virtue:守、补、救、养、耐、辨、改、敬、
     恕、成事.
   - Map the turn clearly onto the user's reality later; do not leave the image
     floating as decoration.

5. Force铺排 before点题.
   - Include at least one developed parallel passage in every output. Do not
     satisfy this with only a short three-beat action pattern.
   - Parallelism may use three objects, three allusions, three mini-stories,
     three emotional states, three scenes, three consequences, or three actions.
   - For long form, include at least two different kinds of铺排. At least one
     should be medium or long-clause parallelism where each clause contains a
     condition plus a result, such as "再坚固的城门，风雨久了也要重油门轴；再锋利
     的宝剑，斩伐多了也要回炉淬火；再善走的车马，远行久了也要卸轭喂草。"
   - Treat "它错一处，您便查一处；它漏一段，您便补一段；它乱一次，您便理一次。"
     as a narrow micro-pattern only, not the default answer.
   - For long form, prefer one铺排 about ancient imagery or stories and one铺排
     about the modern situation.
   - Prefer repeated oral rhythm over elegant isolated sentences. This style is
     not "文雅第一"; it is "铺排、反转、拐弯说理第一".

6. Use story or allusion as evidence, not ornament.
   - Include at least one story-like element. It may be a familiar historical
     allusion, a folk-style anecdote, or an invented old-world scenario.
   - If using an allusion, explain it in plain Chinese: "这不是在说X，而是在说Y."
   - The story must prove the governing thesis and prepare the final landing.

7. Thicken the Confucian/史官 voice.
   - Write like an anxious loyal minister, household ritualist, or village
     historian who treats a small modern matter as a matter of 德行.
   - Use moral vocabulary naturally and repeatedly: 贤、德、仁、义、礼、恕、忠、
     君子、圣人、道理、宽厚、担当、长远、明智、忠于实情.
   - Avoid direct scolding. Prefer "这正是我所担心的啊" over "你错了"; prefer
     "这难道是贤能的君子该有的行为吗？" over accusation.

8. Handle modern concepts without breaking the tone.
   - Keep unavoidable modern nouns when needed for clarity.
   - First translate them into old-world speech when useful, then clarify:
     "那件会答话的机巧之器，也就是 AI..."
   - Avoid jargon-heavy modern terms when a plainer phrase works. Prefer "做事",
     "交付", "反复", "费心", "劳神", "乱了分寸", "守住条理".

9. Return to reality with ceremony.
   - The ending must reveal the real request, praise, warning, apology, or
     comfort.
   - End with a solemn closer such as "阁下不妨细细思索其中的道理。", "您还是好好
     思考一下这个道理吧。", "这正是我所担心的啊。", "这难道不是圣人所称许的贤吗？"

## Quality Checks

Before finalizing, verify:

- The text is mostly modern spoken Chinese, not dense classical Chinese.
- The opening does not directly state the real issue.
- At least one story or allusion is developed enough to feel like "讲古".
- At least one "比不上...但是..." or equivalent suppression/reversal appears.
- At least one developed铺排 appears; long form needs at least two different
  types, and one should use medium or long clauses.
- Confucian/ritual vocabulary appears as reasoning, not just as decoration.
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
