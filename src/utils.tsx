import Pokemon from './Models/Types/Pokemon';

const core = (lvl: number, base: number, ev: number, iv: number) => {
  return ((2 * base + iv + ev / 4) * lvl) / 100;
};

export function calculateHp(lvl: number, base: number, ev: number, iv: number) {
  const min = Math.round(core(lvl, base, 0, 0) + lvl + 10);
  const max = Math.round(core(lvl, base, 255, 31) + lvl + 10);
  const value = Math.round(core(lvl, base, ev, iv) + lvl + 10);

  return {min, max, value};
}

export function calculateStats(
  lvl: number,
  base: number,
  ev: number,
  iv: number,
  nature: number,
) {
  const min = Math.round((core(lvl, base, 0, 0) + 5) * nature);
  const max = Math.round((core(lvl, base, 255, 31) + 5) * nature);
  const value = Math.round((core(lvl, base, ev, iv) + 5) * nature);

  return {min, max, value};
}
