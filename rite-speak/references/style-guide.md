# RiteSpeak Long-Form Style Guide

Use this reference whenever the user wants RiteSpeak / 合乎周礼 text longer
than one short paragraph, or complains that the output lacks examples, stories,
Confucian flavor, analogy, or concentrated argument.

## Non-Negotiable Effect

The output is not ordinary classical-flavored Chinese. By default it is a
paired output: **白话译文** plus **文言正文**. Both versions must share one
meaning, one story order, one moral argument, and one final landing point. The
白话译文 is the readable translation of the 文言正文, not a separate draft.

It is a playful "loyal-minister admonition" that treats a small modern matter
as a question of 贤德、仁义、礼法、君子之道. The reader should feel: "This
person is clearly talking about a tiny practical thing, but has invited birds,
doors, furnaces, old rulers, craftsmen, sages, and historians to testify."

The style must be "骨架文言、血肉白话":

- 白话译文: mostly readable modern Chinese.
- 文言正文: classical-style Chinese with 文言 vocabulary, compact syntax, and
  old-style admonition turns.
- Ancient-feeling structure and moral posture.
- Humor from 小题大做, not from jokes.
- Reasoning by story, analogy, repetition, reversal, and solemn ending.

## Output Modes

Default output:

```text
**白话译文**
[Readable modern Chinese with classical admonition structure.]

**文言正文**
[Classical-style Chinese carrying the same content.]
```

Single-output exceptions:

- If the user explicitly asks for only 白话, 通俗版, 现代白话, or 文言白话,
  output only **白话译文**.
- If the user explicitly asks for only 文言, 纯文言, 古文, 古雅正文, or 文言文,
  output only **文言正文**.

For paired output, draft one canonical argument first. Then render both
versions from that argument. Keep paragraph count, images, allusions,
parallelism, request/praise/warning, and conclusion aligned. Do not add a
different joke, image, or moral claim to only one version.

## Long-Form Integration Algorithm

Before drafting, create an internal "文意骨架":

1. Reality: what actually happened?
2. Intention: praise, comfort, request, warning, apology, satire, or
   self-justification?
3. Must-integrate points: pick 3-6 real points from the user's messy input.
4. Governing thesis: one sentence that all paragraphs must prove.
5. Story engine: animal/object/tool/historical anecdote that can carry the
   thesis.
6. Moral vocabulary: choose 3-5 terms such as 贤、仁、义、礼、德、忠、恕、
   君子、圣人.
7. Final landing: what should the listener feel or do?
8. Output mode: paired by default, or single register if explicitly requested.

For long form, do not write separate paragraphs for every user detail. Fuse
details into one moral argument. Each paragraph should either:

- advance the opening story,
- thicken the analogy,
- bring in a second story or allusion,
- map the analogy back to reality,
- or conclude with ritual-moral pressure.

## Required Long-Form Shape

For 3+ paragraphs, use this shape:

1. Distant opening story.
   Start with "我曾听说..." or "我听说古时候...". Do not begin with the modern
   topic. Use a plain image or story.

2. Suppression and reversal.
   Use at least three suppressive comparisons before the turn:
   "论锐利比不上..., 论坚固比不上..., 论声势更远不如..."
   Then turn with "可是/但是..." and show the hidden virtue.

3. Story/allusion proof.
   Add a familiar historical or folk-style story. Explain it plainly:
   "这不是在说X，而是在说Y."

4. Reality mapping.
   Bring in the actual modern situation with ceremonial distance:
   "如今您..." / "如今我见您..." / "如今那会答话的机巧之器..."
   Map each important user point into the analogy.

5. Confucian moral pressure.
   Name the virtue at stake: 贤、仁、义、礼、忠于实情、宽厚、担当.
   Use rhetorical question or solemn worry.

6. Real ending.
   The last line must land on the user's true intention, not the opening story.

For paired output, both versions should follow this same shape. The 文言正文 may
be shorter and more compact, but it must not skip the story, reversal,
allusion, moral pressure, or final landing that appear in the 白话译文.

## Device Quotas

For a serious RiteSpeak output, include:

- One distant story or analogy, developed for more than one sentence.
- One "比不上...比不上...但是..." or equivalent reversal.
- One developed parallel passage about old-world imagery, stories, or allusions.
- One developed parallel passage about the real modern situation.
- At least one parallel passage in long form should use medium or long clauses,
  not only short beats.
- One rhetorical question: "器物尚且如此，何况是人呢？" or similar.
- One allusion or story explanation: "这不是在说X，而是在说Y."
- One explicit virtue: 贤、德、仁、义、礼、君子、圣人, etc.
- One solemn closer.

For very short outputs, keep at least: distant opening, reversal, reality
landing, solemn closer.

## Story Engines

Do not use fixed lists as limits. Use ordinary premodern materials the reader
can picture. Good story engines include:

- Household objects: lamps, oil, doors, hinges, wells, stoves, bowls, carts,
  ropes, locks, windows.
- Tools: ploughs, axes, chisels, looms, needles, bows, swords, boats, oars.
- Nature: old trees, weak birds, migrating geese, rain, frost, rivers, fields,
  seeds, roots.
- Work scenes: a craftsman mending tools, a cook saving a soup, a farmer
  replanting after flood, a clerk correcting bamboo slips.
- Public life: a ruler listening to remonstrance, a historian recording errors,
  a general repairing carts before battle, a messenger walking through rain.

Every image must carry a job:

- AI making errors -> faulty tool, miscopied bamboo slips, crooked compass,
  stubborn ox, leaking bucket.
- Rework -> sharpening, patching, correcting slips, retying rope, oiling hinge.
- Fatigue -> lamp oil running low, horse needing fodder, bowstring needing rest.
- Confidence in completion -> boat crossing despite wind, seed sprouting after
  frost, craftsman finishing a vessel after repeated firing.
- Praise -> virtue revealed by pressure, not by easy success.

## Allusion Rules

Use allusions only when they are common or immediately explained. The point is
not to show learning; it is to make the "史官进谏" performance feel large.

Good use:

"当年勾践卧薪尝胆，并不是说苦头本身值得夸耀，而是说人在困顿之中仍肯收拾山河，这才叫不失其志。"

Bad use:

"昔有某典某章..." without explanation.

Allusions may be replaced by invented old-world anecdotes if a real allusion
would distract. Invented anecdotes should still sound plain and practical:

"我听说古时候有个管仓的小吏，竹简被雨打湿，账目一夜之间乱成麻线..."

## Confucian Flavor

Do not merely sprinkle words like "贤" and "圣人". Make them do reasoning.

Useful moral mappings:

- Seeing someone tired and still working -> 仁者不弃事，贤者能守成.
- Correcting repeated errors -> 忠于实情, 不欺事, 不欺人.
- Comforting someone -> 恕道: knowing another person's burden.
- Praising confidence -> 志: not pretending the road is short, but believing it
  can be walked to the end.
- Asking for help -> 礼: each person keeping their role so the household/order
  does not tilt.
- Warning against harshness -> 仁义失, 人心散.

Useful sentence shapes:

- "圣人所贵的，不是从不遇到乱事，而是乱事临前仍不失其序。"
- "君子之贤，不在器物顺手之时才显；正在器物拂逆、人心疲惫之时显。"
- "所谓仁，并不是说一句好听的话便算完，而是看见旁人劳神，心里能生出体恤。"
- "所谓忠，并不是把难听的话藏起来，而是不肯让事情在眼前坏下去。"

## Classical Register

Use this section when producing **文言正文**.

The 文言正文 should feel like a compact admonition, memorial, or old-style moral
note. Use classical turns such as:

- "吾闻..."
- "昔者..."
- "夫..."
- "然..."
- "今君..."
- "是故..."
- "由是观之..."
- "非...也，乃...也。"
- "岂...哉？"
- "可不思乎？"

Classical register rules:

- Compress modern explanation; do not translate every colloquial word literally.
- Keep the same content as the 白话译文, but use fewer, stronger clauses.
- Prefer classical words: 君, 吾, 事, 器, 德, 仁, 义, 礼, 贤, 圣人, 是故, 何也.
- Avoid modern abstractions such as 效率、压力、情绪价值、执行力 unless the user
  explicitly requires them.
- For modern objects, use a classical gloss first: AI -> 能言之机 / 机巧之器;
  phone -> 掌中之屏 / 掌中机; project -> 案牍之事 / 所任之事.
- Preserve the comic contrast. The 文言正文 should still be about a tiny modern
  matter raised to ritual-moral seriousness.

Paired-output alignment check:

- Same paragraph count where practical.
- Same opening image.
- Same suppression/reversal.
- Same allusion or story proof.
- Same modern landing.
- Same final intention.

## Parallelism and Reversal Patterns

Use these as flexible patterns, not templates to copy exactly.

Parallelism is a broad铺排 method, not a single short sentence shape. It can
line up objects, allusions, stories, scenes, emotional states, consequences,
actions, or moral claims. For long-form output, at least one parallel passage
should use medium or long clauses where each clause contains a situation plus
an action/result. Avoid treating "它错一处，您便查一处" as the default answer.

### Suppression/reversal

"论[能力一]，它比不上[强物一]；论[能力二]，它比不上[强物二]；论[能力三]，它更远不如[强物三]。可是当[关键处境]来的时候，[弱物/小物]偏偏能[真实本事]。为什么？就因为[德性/道理]."

### Object铺排

"再坚固的城门，风雨久了也要重油门轴；再锋利的宝剑，斩伐多了也要回炉淬火；再善走的车马，远行久了也要卸轭喂草。"

"漏刻里的水少了，要添水才不误时辰；圭表上的刻度暗了，要擦净才见分明；日晷上的针影偏了，要校正才知早晚。"

### Allusion铺排

"苏秦刺股，不是叫人夜夜不眠；勾践尝胆，不是叫人只会受苦；张良拾履，也不是叫人逢事低头，而是说人要知道何时自励、何时忍耐、何时守约。"

"华元因一碗羊汤失了车夫之心，胡亥因不听近臣而众叛亲离，英布因轻慢旧部而孤立无援，这些都不是在说小事能立刻毁人，而是在说礼义一松，人心便会慢慢散去。"

### Mini-story铺排

"管仓的小吏要重编被雨打湿的竹简，渡河的船夫要调正被逆风推偏的船桨，守门的老卒要清开被泥水堵住的门道，三者说的都不是器物本身，而是临事不乱。"

### State铺排

"心里急的时候不乱言，手上忙的时候不弃事，旁人催的时候不失礼。"

"困倦来时知道止息，烦乱来时知道收心，事情逼近时知道守住条理。"

### Action铺排

"它错一处，您便查一处；它漏一段，您便补一段；它乱一次，您便理一次。"

"该重看的地方重看，该改正的地方改正，该从头来的地方从头来。"

"不因第一遍不成便弃事，不因第二遍生错便灰心，不因第三遍返工便怨天。"

Use these short action patterns sparingly. They are useful near the reality
mapping, but they should not be the only parallelism in a long output.

### Moral progression铺排

"这不是惜一时的安逸，而是惜长久的精神；不是避眼前的小劳，而是守将来的大事；不是把道理说得沉重，而是不愿让人心在琐碎处先乱。"

### Moral pressure

"器物尚且要人扶正，何况一件关乎交付的事呢？"

"竹简乱了尚可重编，灯油尽了尚可再添，车辙偏了尚可再校，人的心力难道就不该被看见吗？"

"这不就是古人所谓临事不乱、反复不怠的贤吗？"

## Tone: Loyal Minister, Not Lecturer

The speaker is not scolding from above. The speaker is solemnly worried,
admiring, or gently remonstrating.

Prefer:

- "这正是我所敬佩的地方。"
- "这正是我所不忍的啊。"
- "我说这话，并不是要把辛苦说得轻巧，而是不愿让您的劳神无人知晓。"
- "阁下不妨细细思索其中的道理。"

Avoid:

- Direct modern evaluation: "你真的很棒，效率很高。"
- Generic encouragement: "相信你一定能成功。"
- Purely elegant description without argument.
- Dense classical Chinese that sounds like translation homework.

## Example: Sleep Reminder

User intent: "I want to persuade a friend to sleep earlier and stop staying up
late, but I want the tone to be playful and ceremonially over-serious instead
of preachy."

Possible RiteSpeak output:

**白话译文**

我曾听说，古时候行远路的人，论脚力比不上日行千里的骏马，论方向比不上识途的老仆，论胆气更远不如披甲临阵的将军。可是他们若想平安到达远方，夜里没有不歇脚的，水囊没有不添满的，灯油没有不省着用的。为什么？就因为路再长，也要靠一夜一夜把精神养回来。

如今您说自己还不困，还要再看一会儿、再刷一会儿、再撑一会儿，这话听着豪迈，细想却像拿空灯盏照夜路。烛火再明，油尽了也要发暗；弓弦再劲，绷久了也要松脱；良马再健，跑久了也要喂草。该歇的时候不歇，该养的时候不养，该收灯的时候偏要添火，这难道是长久成事的办法吗？器物尚且如此，何况是人呢？

当年苏秦刺股苦读，是为了鞭策倦怠，并非教人夜夜不眠；张良五更赴约，也不是说夜半本该乱耗精神，而是说该醒的时候醒，该养的时候养。这不是在说古人多么能熬，而是在说君子用身，如同用器，贵在知时、知止、知长远。

所以我今日所言，并不是要扫您的兴，也不是要夺您的夜间清欢。只是早睡并非怯懦，乃是为明日蓄德；合眼并非偷懒，正是为长久成事。若让一时精神耗尽，明日又拿什么治理天下，至少治理自己的早饭呢？阁下不妨细细思索其中的道理。

**文言正文**

吾闻古之远行者，足力不及千里之马，识途不及老仆，胆气又不及披甲之将。然欲安至远方，则夜无不息，囊无不盈，膏无不惜。何也？路虽长，必以夜夜养其神也。

今君曰未困，且更观、更刷、更撑，此言似豪，细思则如持空盏以照夜。烛虽明，膏尽则暗；弦虽劲，久张则弛；马虽良，久驰则饥。器犹如此，而况人乎？

昔苏秦刺股，所以警惰，非教人彻夜不眠也；张良五更赴约，亦非谓夜半当耗精神也，乃谓当醒则醒，当养则养。圣人所贵者，非夜半强支，乃知进退、识劳养也。

是故吾言，非扫君兴也，非夺夜乐也。早寝非怯，乃蓄明日之德；闭目非惰，乃图久远之成。若一时耗神，明日何以治天下，且何以治己之朝食乎？愿君熟思其理。

## Final Self-Check

Before answering, ask:

1. Did I first integrate the user's real intention into one thesis?
2. Did I choose the correct output mode, paired by default unless single-register
   output was explicitly requested?
3. If paired, do 白话译文 and 文言正文 carry the same content and order?
4. Is there a distant story before the modern point?
5. Is there suppression/reversal?
6. Are there at least two visible铺排 rhythms in long form, with at least one
   medium or long-clause passage?
7. Is the Confucian language doing argument work?
8. Did I explain the story/allusion in plain Chinese in the 白话译文?
9. Does the ending return to the user's actual emotional purpose?
