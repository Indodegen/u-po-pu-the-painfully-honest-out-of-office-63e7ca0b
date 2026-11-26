# The Painfully Honest Out-of-Office

[![make.fun](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/Indodegen/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/Indodegen/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

A single brutally honest but still polite out-of-office auto-reply, entered in the
[make.fun bounty "The Painfully Honest Out-of-Office"](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b).

## Entry

> Thanks for your email. I'm away and your message is number 47 in a queue I will not be reading today.

101 characters, one sentence, no trailing newline.

## Run

```sh
node main.ts
```

`main.ts` reads `entry.txt`, validates it (1–200 characters, single line, no
control characters, not whitespace only), and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), verifying the
output byte-for-byte against the shipped `entry.txt`.

## Referral

Built with make.fun — https://make.fun/r/nh8nx71y
