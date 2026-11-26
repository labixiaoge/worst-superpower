# Worst Superpower — build status

- Competition: u-suroto-worst-superpower-461dcdbe
- Prize: $2, 1st place only (winner takes all). Entry fee: none (free).
- Deadline: entries close 2026-11-26T17:30:00Z = 2026-11-27 01:30 CST.
- Field at build time: 825 submissions already; 3 blind rounds, next
  round cutoff 2026-11-26T01:30:26Z.
- Status: BUILT, NOT submitted. Submission, repo creation, and
  bundle/transcripts are the main chat's job.

## Entry line (82 characters, 84 bytes, single line, no trailing newline)

> I can tell the exact time, anywhere in the world — but only by looking at a clock.

Why this line: the grand setup ("anywhere in the world") collapses
into an act anyone does every day — the power adds nothing at all.
Deadpan, specific (the clock), and useless in exactly the way the
judge's brief asks for. Candidates and full rationale in NOTES.md.

## Verification (2026-11-26 ~02:44 CST, run locally)

- `node main.ts` writes the line to `/output/entry.txt` — confirmed
  (default path, and with `MAKEFUN_OUTPUT_DIR` to two temp dirs)
- Character count: 82 (gate 1–140) — pass
- Single line, not only whitespace, UTF-8, no trailing newline — pass
- Deterministic: two runs produce byte-identical output — pass
  (sha256 0d6483b5af1230bb…, both runs; matches entry.txt)
- `makefun check --worktree` (kit CLI): 4 passed, 1 failed, 14
  skipped, 5 checked at submission — passes: competition_open,
  snapshot, license_osi (MIT), entrypoint (main.ts at root selects
  node22, accepted). The 1 fail is transcripts_present (no bundle
  uploaded yet — submit-time step, main chat's job). The 5 "at
  submission" items are repo_public, repo_owner, repo_created_after_
  open, commit_in_repo, duplicate_snapshot — all need the GitHub repo,
  which is the main chat's job.
- No money spent, no keypair/account created, no GitHub repo created,
  no submission made.

## Notes for submission (main chat)

- NOT submitted. Repo creation, bundle/transcripts (bundle with
  --no-family; build session started after the opening, so it is
  in-window), and submission are the main chat's job.
- Kit: fetched 2026-11-26 02:39 CST from
  https://make.fun/c/u-suroto-worst-superpower-461dcdbe/kit, unpacked
  to ~/workspace/makefun/u-suroto-worst-superpower-461dcdbe-kit/
  (kit.json verified: 8 files). Same kit CLI version used for check.
- Suggested repo name: worst-superpower (owner labixiaoge); README
  badges and referral footer (ref=xiaoge-labi) already written to
  the readme_template. .makefun/owner.json already present with the
  account's payout wallet (same wallet as prior submissions).
- Files: main.ts, package.json, README.md, LICENSE (MIT), entry.txt,
  NOTES.md, STATUS.md (this file),
  requirements-u-suroto-worst-superpower.json,
  competition-u-suroto-worst-superpower.json.
