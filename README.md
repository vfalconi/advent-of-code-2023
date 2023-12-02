# advent-of-code-2023

[Source material](https://adventofcode.com/2023)

Show solutions:

```bash
npm run-script solve
```

## Notes

### Folder structure

- `src/day-[n]/index.js`
- `src/day-[n]/input.txt`
- `src/day-[n]/sample-1.txt`
- `src/day-[n]/sample-2.txt`
- `src/day-[n]/step-1.js`
- `src/day-[n]/step-2.js`

`sample-1.txt` and `sample-2.txt` can be the same file.

Any function used by step-1 and/or step-2 should be in their own folder structure in a given day. Nothing fancy.

### Solutions Setup

`Puzzle.steps` should be an array of functions that each accept only the given puzzle input.

`Puzzle.solve()` will run each function in `Puzzle.steps` over either `Puzzle.input` (default) or its corresponding `Puzzle.sample`.

### Input Parser

If a puzzle input needs special parsing, set `Puzzle.parser` to a function that runs on each line of a puzzle's input.
