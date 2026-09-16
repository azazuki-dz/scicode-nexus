import { FORMULAS_DATA, FORMULA_CATEGORIES } from '../js/data/formulas.js';

let failures = 0;
const ids = new Set();
const catIds = new Set(FORMULA_CATEGORIES.map(c => c.id));

for (const f of FORMULAS_DATA) {
  if (ids.has(f.id)) { console.log(`DUPLICATE ID: ${f.id}`); failures++; }
  ids.add(f.id);

  if (!catIds.has(f.category)) { console.log(`UNKNOWN CATEGORY ${f.category} on ${f.id}`); failures++; }
  if (f.variables.length === 0) { console.log(`NO VARIABLES: ${f.id}`); failures++; }

  for (const tgt of f.solveTargets) {
    const inputs = {};
    f.variables.forEach(v => { inputs[v.id] = v.id === tgt ? undefined : v.defaultValue; });
    try {
      const out = f.calculate(inputs, tgt);
      if (!out || typeof out.result !== 'number' || !isFinite(out.result)) {
        console.log(`BAD RESULT ${f.id} target=${tgt}: result=${out && out.result}`);
        failures++;
      } else if (!Array.isArray(out.steps) || out.steps.length === 0) {
        console.log(`NO STEPS ${f.id} target=${tgt}`);
        failures++;
      }
    } catch (e) {
      console.log(`THROW ${f.id} target=${tgt}: ${e.message}`);
      failures++;
    }
  }
}

console.log(`\nTotal formulas: ${FORMULAS_DATA.length}`);
console.log(`Categories: ${FORMULA_CATEGORIES.length}`);
console.log(failures === 0 ? 'ALL OK' : `${failures} failures`);