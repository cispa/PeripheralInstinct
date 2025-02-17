# HOWTO

`pip install pygame`

1. Create a macro that contains the following sequence with minimal delay between keypresses: `baaaa` (1*`b` + 4*`a`)
2. `python3 measure.py`
3. Press the macro button until the counter in the terminal reaches `1000` (it exits automatically)
4. Move the generated `results.csv` to `results/` and adjust the name

- `stats.py`: calculates statistics
- `plot.py`: plots the current `results.csv`