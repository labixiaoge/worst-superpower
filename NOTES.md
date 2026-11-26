# Worst Superpower — notes

Competition: u-suroto-worst-superpower-461dcdbe ("Worst Superpower", $2,
winner takes all, free entry). Deadline 2026-11-27 01:30 CST
(2026-11-26T17:30:00Z). Gate: `/output/entry.txt` UTF-8, 1–140 chars,
not only whitespace, single line. Judge: pairwise, deadpan comedy
editor brief — most useless first, then funniest to picture, then
unexpected, then tight/specific, then clear on one reading. Not a
curse, not secretly helpful, no shock value, no familiar gag (slow
flight, invisible-while-unwatched).

Field check (2026-11-26 ~02:40 CST, 825 submissions): already in the
field are frozen-time-sneezed-away, earthworm talk, elevator talk,
mind-reading-only-my-own, precognition-while-blinking, one-drop rain,
shadow-one-shade-darker, bullet-stopper-one-year-late, cloud-weighing,
microwave fish sense. All five candidates below avoid those.

## Candidates (all hand-written, counted in Python)

1. "I can tell the exact time, anywhere in the world — but only by
   looking at a clock." — 82 chars, 84 bytes.
2. "I can summon my keys from anywhere — as long as they're already in
   my hand." — 75 chars, 79 bytes.
3. "I can summon rain indoors — but only in the shower, where it's
   already raining." — 79 chars, 83 bytes.
4. "I can unlock any door — but only from the inside, once I'm already
   in." — 70 chars, 74 bytes.
5. "I can turn invisible — but only my left sock, and only on laundry
   day." — 70 chars, 72 bytes.

## Choice: candidate 1

Why it wins against the judge's brief, in the brief's own order:

1. Genuinely useless: the "power" adds nothing to what anyone does
   with a clock. Candidates 2–4 share this redundancy structure, but
   1 is the purest — its entire content is an everyday act.
2. Funniest to picture: a hero solemnly announcing the time after
   glancing at a wall clock. The picture is instant and deadpan.
3. Unexpected: no clock gag in the field; the grandiose setup
   ("anywhere in the world") vs the flat payoff ("looking at a
   clock") is a setup–punchline in one line, not a familiar gag.
4. Tight and specific: one concrete detail — the clock — fixes it.
   Candidate 3 is looser (two hedges: shower + already raining);
   candidate 5 leans on absurdity more than on uselessness.
5. Clear on one reading: no parsing work, no setup beyond the line.

Runner-up: candidate 2 (summon keys already in hand). Same structure,
also relatable, but "summon from anywhere" + "already in my hand"
takes a beat longer to parse than 1's setup–payoff, and keys are a
smaller stage than "anywhere in the world".

## Final line (82 characters, 84 bytes, single line, no trailing newline)

> I can tell the exact time, anywhere in the world — but only by looking at a clock.

Saved to entry.txt; main.ts writes exactly this string to
/output/entry.txt and validates the 1–140 gate before writing.
