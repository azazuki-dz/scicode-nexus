// @ts-nocheck

/**
 * Waves, Sound & Light Formulas (เธเธดเธชเธดเธเธชเน: เธเธฅเธทเนเธ เนเธชเธ เน€เธชเธตเธขเธ) - เธก.4 - เธก.6
 */

export const WAVES_LIGHT_FORMULAS = [
  {
    id: 'wave_period_frequency',
    name: 'Period & Frequency (T = 1/f)',
    nameTh: 'เธเธฒเธเนเธฅเธฐเธเธงเธฒเธกเธ–เธตเนเธเธฅเธทเนเธ (T = 1/f)',
    category: 'waves',
    categoryTh: 'เธเธฅเธทเนเธเนเธฅเธฐเนเธชเธ',
    icon: 'activity',
    grade: 'เธก.4',
    latex: 'T = \\frac{1}{f}',
    description: 'เธเธฒเธ (T) เนเธฅเธฐเธเธงเธฒเธกเธ–เธตเน (f) เธเธญเธเธเธฅเธทเนเธเนเธเธเธฃเธเธฅเธฑเธเธเธฑเธ เน€เธเนเธ เธเธฅเธทเนเธเธเธงเธฒเธกเธ–เธตเน 2 Hz เธกเธตเธเธฒเธ 0.5 เธงเธดเธเธฒเธ—เธต',
    variables: [
      { id: 'T', symbol: 'T', name: 'Period', nameTh: 'เธเธฒเธ (T)', unit: 's', defaultValue: 0.5, min: 0.0000001, max: 1e9, step: 0.01 },
      { id: 'f', symbol: 'f', name: 'Frequency', nameTh: 'เธเธงเธฒเธกเธ–เธตเน (f)', unit: 'Hz', defaultValue: 2, min: 0.0000001, max: 1e12, step: 0.1 }
    ],
    solveTargets: ['T', 'f'],
    calculate: (inputs, target = 'T') => {
      let { T, f } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'T') {
        result = 1 / f;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฒเธ', latex: 'T = \\frac{1}{f}', explanation: `f = ${f} Hz` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `T = \\frac{1}{${f}}`, explanation: 'เธเธฒเธเน€เธเนเธเธชเนเธงเธเธเธฅเธฑเธเธเธญเธเธเธงเธฒเธกเธ–เธตเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `T = ${result.toFixed(4)} \\ \\text{s}`, explanation: `เธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธงเธดเธเธฒเธ—เธต` }
        ];
      } else if (target === 'f') {
        result = 1 / T;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธ–เธตเน', latex: 'f = \\frac{1}{T}', explanation: `T = ${T} s` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `f = ${result.toFixed(4)} \\ \\text{Hz}`, explanation: `เธเธงเธฒเธกเธ–เธตเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เน€เธฎเธดเธฃเธ•เธเน` }
        ];
      }

      return { result, unit: target === 'T' ? 's' : 'Hz', steps };
    }
  },

  {
    id: 'sound_intensity_db',
    name: 'Sound Level (dB)',
    nameTh: 'เธฃเธฐเธ”เธฑเธเน€เธชเธตเธขเธ (เน€เธ”เธเธดเน€เธเธฅ)',
    category: 'waves',
    categoryTh: 'เธเธฅเธทเนเธเนเธฅเธฐเนเธชเธ',
    icon: 'volume-2',
    grade: 'เธก.4-5',
    latex: '\\beta = 10 \\log_{10} \\frac{I}{I_0}',
    description: 'เธฃเธฐเธ”เธฑเธเธเธงเธฒเธกเน€เธเนเธกเน€เธชเธตเธขเธเนเธเน€เธ”เธเธดเน€เธเธฅ = 10ยทlogโโ€(เธเธงเธฒเธกเน€เธเนเธก/เธเธงเธฒเธกเน€เธเนเธกเธญเนเธฒเธเธญเธดเธ) เนเธ”เธข Iโ€ = 10โปยนยฒ W/mยฒ (เน€เธเธ“เธ‘เนเธเธฒเธฃเนเธ”เนเธขเธดเธ)',
    variables: [
      { id: 'beta', symbol: '\\beta', name: 'Sound Level', nameTh: 'เธฃเธฐเธ”เธฑเธเน€เธชเธตเธขเธ (ฮฒ)', unit: 'dB', defaultValue: 100, min: 0, max: 300, step: 0.1 },
      { id: 'I', symbol: 'I', name: 'Intensity', nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเน€เธชเธตเธขเธ (I)', unit: 'W/mยฒ', defaultValue: 0.01, min: 1e-15, max: 1e6, step: 0 },
      { id: 'I0', symbol: 'I_0', name: 'Reference Intensity', nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธญเนเธฒเธเธญเธดเธ (Iโ€)', unit: 'W/mยฒ', defaultValue: 1e-12, min: 1e-15, max: 1, step: 0 }
    ],
    solveTargets: ['beta', 'I', 'I0'],
    calculate: (inputs, target = 'beta') => {
      let { beta, I, I0 } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'beta') {
        if (I0 <= 0) throw new Error('Iโ€ เธ•เนเธญเธเน€เธเนเธเธเธงเธ');
        result = 10 * Math.log10(I / I0);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธฃเธฐเธ”เธฑเธเน€เธชเธตเธขเธ', latex: '\\beta = 10 \\log_{10} \\frac{I}{I_0}', explanation: `I = ${I.toExponential(2)} W/mยฒ, Iโ€ = ${I0.toExponential(1)} W/mยฒ` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\beta = 10 \\log_{10} \\left(\\frac{${I.toExponential(2)}}{${I0.toExponential(1)}}\\right) = 10 \\times ${Math.log10(I / I0).toFixed(3)}`, explanation: `logโโ€(I/Iโ€) = ${Math.log10(I / I0).toFixed(3)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\beta = ${result.toFixed(2)} \\ \\text{dB}`, explanation: `เธฃเธฐเธ”เธฑเธเน€เธชเธตเธขเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เน€เธ”เธเธดเน€เธเธฅ` }
        ];
      } else if (target === 'I') {
        result = I0 * Math.pow(10, beta / 10);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเน€เธเนเธก', latex: 'I = I_0 \\cdot 10^{\\beta/10}', explanation: `ฮฒ = ${beta} dB, Iโ€ = ${I0.toExponential(1)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `I = ${result.toExponential(3)} \\ \\text{W/m}^2`, explanation: `เธเธงเธฒเธกเน€เธเนเธกเน€เธชเธตเธขเธเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} W/mยฒ` }
        ];
      } else if (target === 'I0') {
        result = I / Math.pow(10, beta / 10);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเน€เธเนเธกเธญเนเธฒเธเธญเธดเธ', latex: 'I_0 = \\frac{I}{10^{\\beta/10}}', explanation: `I = ${I.toExponential(2)}, ฮฒ = ${beta} dB` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `I_0 = ${result.toExponential(3)} \\ \\text{W/m}^2`, explanation: `เธเธงเธฒเธกเน€เธเนเธกเธญเนเธฒเธเธญเธดเธเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} W/mยฒ` }
        ];
      }

      return { result, unit: target === 'beta' ? 'dB' : 'W/mยฒ', steps };
    }
  },

  {
    id: 'beat_frequency',
    name: 'Beat Frequency (f_b = |fโ โ’ fโ|)',
    nameTh: 'เธเธงเธฒเธกเธ–เธตเนเธเธตเธ• (f_beat = |fโ โ’ fโ|)',
    category: 'waves',
    categoryTh: 'เธเธฅเธทเนเธเนเธฅเธฐเนเธชเธ',
    icon: 'repeat',
    grade: 'เธก.4-5',
    latex: 'f_{beat} = |f_1 - f_2|',
    description: 'เธเธฅเธทเนเธเน€เธชเธตเธขเธเธชเธญเธเธเธฅเธทเนเธเธเธงเธฒเธกเธ–เธตเนเนเธเธฅเนเธเธฑเธเธเนเธญเธเธเธฑเธเน€เธเธดเธ”เธเธฒเธฃเธเธตเธ• = เธเธฅเธ•เนเธฒเธเธเธงเธฒเธกเธ–เธตเนเธชเธฑเธกเธเธนเธฃเธ“เน เน€เธเนเธ 256 Hz เธเธฑเธ 258 Hz เน€เธเธดเธ”เธเธตเธ• 2 เธเธฃเธฑเนเธ/เธงเธดเธเธฒเธ—เธต',
    variables: [
      { id: 'fbeat', symbol: 'f_{beat}', name: 'Beat Frequency', nameTh: 'เธเธงเธฒเธกเธ–เธตเนเธเธตเธ•', unit: 'Hz', defaultValue: 2, min: 0, max: 1e6, step: 0.1 },
      { id: 'f1', symbol: 'f_1', name: 'Frequency 1', nameTh: 'เธเธงเธฒเธกเธ–เธตเนเธ—เธตเน 1 (fโ)', unit: 'Hz', defaultValue: 258, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'f2', symbol: 'f_2', name: 'Frequency 2', nameTh: 'เธเธงเธฒเธกเธ–เธตเนเธ—เธตเน 2 (fโ)', unit: 'Hz', defaultValue: 256, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['fbeat', 'f1', 'f2'],
    calculate: (inputs, target = 'fbeat') => {
      let { fbeat, f1, f2 } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'fbeat') {
        result = Math.abs(f1 - f2);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธ–เธตเนเธเธตเธ•', latex: 'f_{beat} = |f_1 - f_2|', explanation: `fโ = ${f1} Hz, fโ = ${f2} Hz` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `f_{beat} = |${f1} - ${f2}|`, explanation: 'เธเนเธฒเธชเธฑเธกเธเธนเธฃเธ“เนเธเธญเธเธเธฅเธ•เนเธฒเธเธเธงเธฒเธกเธ–เธตเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `f_{beat} = ${result.toFixed(2)} \\ \\text{Hz}`, explanation: `เนเธ”เนเธขเธดเธเธเธตเธ• ${result.toFixed(2)} เธเธฃเธฑเนเธเธ•เนเธญเธงเธดเธเธฒเธ—เธต` }
        ];
      } else if (target === 'f1') {
        const candidates = [f2 + fbeat, f2 - fbeat];
        result = candidates[0];
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธ–เธตเนเธ—เธตเน 1', latex: 'f_1 = f_2 \\pm f_{beat}', explanation: `fโ = ${f2}, f_beat = ${fbeat}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `f_1 = ${candidates[1].toFixed(2)} \\ \\text{Hz} \\; \\text{เธซเธฃเธทเธญ} \\; ${candidates[0].toFixed(2)} \\ \\text{Hz}`, explanation: 'เธกเธตเนเธ”เนเธชเธญเธเธเนเธฒเธเธถเนเธเธเธฑเธเธงเนเธฒเธชเธนเธเธซเธฃเธทเธญเธ•เนเธณเธเธงเนเธฒ fโ' }
        ];
      } else if (target === 'f2') {
        const candidates = [f1 + fbeat, f1 - fbeat];
        result = candidates[0];
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธ–เธตเนเธ—เธตเน 2', latex: 'f_2 = f_1 \\pm f_{beat}', explanation: `fโ = ${f1}, f_beat = ${fbeat}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `f_2 = ${candidates[1].toFixed(2)} \\ \\text{Hz} \\; \\text{เธซเธฃเธทเธญ} \\; ${candidates[0].toFixed(2)} \\ \\text{Hz}`, explanation: 'เธกเธตเนเธ”เนเธชเธญเธเธเนเธฒเธเธถเนเธเธเธฑเธเธงเนเธฒเธชเธนเธเธซเธฃเธทเธญเธ•เนเธณเธเธงเนเธฒ fโ' }
        ];
      }

      return { result, unit: target === 'fbeat' ? 'Hz' : '', steps };
    }
  },

  {
    id: 'thin_lens',
    name: 'Thin Lens Equation (1/f = 1/v + 1/u)',
    nameTh: 'เธชเธกเธเธฒเธฃเน€เธฅเธเธชเนเธเธฒเธ (1/f = 1/v + 1/u)',
    category: 'waves',
    categoryTh: 'เธเธฅเธทเนเธเนเธฅเธฐเนเธชเธ',
    icon: 'circle-dot',
    grade: 'เธก.4',
    latex: '\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}',
    description: 'เธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเนเธ—เธฒเธเธขเธฒเธงเนเธเธเธฑเธช เธฃเธฐเธขเธฐเธ เธฒเธ เนเธฅเธฐเธฃเธฐเธขเธฐเธงเธฑเธ•เธ–เธธเธเธญเธเน€เธฅเธเธชเน/เธเธฃเธฐเธเธเน€เธเธฒเนเธเนเธ (f=เนเธเธเธฑเธช, v=เธฃเธฐเธขเธฐเธ เธฒเธ, u=เธฃเธฐเธขเธฐเธงเธฑเธ•เธ–เธธ)',
    variables: [
      { id: 'f', symbol: 'f', name: 'Focal Length', nameTh: 'เธ—เธฒเธเนเธเธเธฑเธช (f)', unit: 'cm', defaultValue: 10, min: 0.0001, max: 1e6, step: 0.1 },
      { id: 'v', symbol: 'v', name: 'Image Distance', nameTh: 'เธฃเธฐเธขเธฐเธ เธฒเธ (v)', unit: 'cm', defaultValue: 20, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'u', symbol: 'u', name: 'Object Distance', nameTh: 'เธฃเธฐเธขเธฐเธงเธฑเธ•เธ–เธธ (u)', unit: 'cm', defaultValue: 20, min: 0.0001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['f', 'v', 'u'],
    calculate: (inputs, target = 'f') => {
      let { f, v, u } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'f') {
        const sum = 1 / v + 1 / u;
        if (sum === 0) throw new Error('1/v + 1/u = 0 เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เธซเธฒ f เนเธ”เน');
        result = 1 / sum;
        steps = [
          { title: 'เธชเธกเธเธฒเธฃเน€เธฅเธเธชเนเธเธฒเธ', latex: '\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}', explanation: `v = ${v}, u = ${u}` },
          { title: 'เธเธณเธเธงเธ“เธชเนเธงเธเธเธฅเธฑเธ', latex: `\\frac{1}{f} = \\frac{1}{${v}} + \\frac{1}{${u}} = ${(1 / v + 1 / u).toFixed(4)}`, explanation: 'เธฃเธงเธกเน€เธจเธฉเธชเนเธงเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `f = ${result.toFixed(2)} \\ \\text{cm}`, explanation: `เธ—เธฒเธเนเธเธเธฑเธชเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เน€เธเธเธ•เธดเน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'v') {
        const oneOver = 1 / f - 1 / u;
        if (oneOver === 0) throw new Error('1/f โ’ 1/u = 0 เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เธซเธฒ v เนเธ”เน');
        result = 1 / oneOver;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฐเธขเธฐเธ เธฒเธ', latex: '\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}', explanation: `f = ${f}, u = ${u}` },
          { title: 'เธเธณเธเธงเธ“เธชเนเธงเธเธเธฅเธฑเธ', latex: `\\frac{1}{v} = ${(1 / f).toFixed(4)} - ${(1 / u).toFixed(4)} = ${oneOver.toFixed(4)}`, explanation: 'เธฅเธเน€เธจเธฉเธชเนเธงเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `v = ${result.toFixed(2)} \\ \\text{cm}`, explanation: `เธฃเธฐเธขเธฐเธ เธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เน€เธเธเธ•เธดเน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'u') {
        const oneOver = 1 / f - 1 / v;
        if (oneOver === 0) throw new Error('1/f โ’ 1/v = 0 เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เธซเธฒ u เนเธ”เน');
        result = 1 / oneOver;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฐเธขเธฐเธงเธฑเธ•เธ–เธธ', latex: '\\frac{1}{u} = \\frac{1}{f} - \\frac{1}{v}', explanation: `f = ${f}, v = ${v}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `u = ${result.toFixed(2)} \\ \\text{cm}`, explanation: `เธฃเธฐเธขเธฐเธงเธฑเธ•เธ–เธธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เน€เธเธเธ•เธดเน€เธกเธ•เธฃ` }
        ];
      }

      return { result, unit: 'cm', steps };
    }
  },

  {
    id: 'magnification',
    name: 'Magnification (m = v/u)',
    nameTh: 'เธเธณเธฅเธฑเธเธเธขเธฒเธข (m = v/u)',
    category: 'waves',
    categoryTh: 'เธเธฅเธทเนเธเนเธฅเธฐเนเธชเธ',
    icon: 'zoom-in',
    grade: 'เธก.4',
    latex: 'm = \\frac{v}{u} = \\frac{h_i}{h_o}',
    description: 'เธเธณเธฅเธฑเธเธเธขเธฒเธข = เธฃเธฐเธขเธฐเธ เธฒเธ รท เธฃเธฐเธขเธฐเธงเธฑเธ•เธ–เธธ = เธเธงเธฒเธกเธชเธนเธเธ เธฒเธ รท เธเธงเธฒเธกเธชเธนเธเธงเธฑเธ•เธ–เธธ เน€เธเนเธเธฅเธเน€เธกเธทเนเธญเธ เธฒเธเธซเธฑเธงเธเธฅเธฑเธ เน€เธเนเธ เธชเนเธฅเธ”เนเธเธฒเธขเธ เธฒเธ',
    variables: [
      { id: 'm', symbol: 'm', name: 'Magnification', nameTh: 'เธเธณเธฅเธฑเธเธเธขเธฒเธข (m)', unit: '', defaultValue: 2, min: -1000, max: 1000, step: 0.01 },
      { id: 'v', symbol: 'v', name: 'Image Distance', nameTh: 'เธฃเธฐเธขเธฐเธ เธฒเธ (v)', unit: 'cm', defaultValue: 40, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'u', symbol: 'u', name: 'Object Distance', nameTh: 'เธฃเธฐเธขเธฐเธงเธฑเธ•เธ–เธธ (u)', unit: 'cm', defaultValue: 20, min: 0.0001, max: 1e6, step: 0.1 },
      { id: 'hi', symbol: 'h_i', name: 'Image Height', nameTh: 'เธเธงเธฒเธกเธชเธนเธเธ เธฒเธ (hแตข)', unit: 'cm', defaultValue: 10, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'ho', symbol: 'h_o', name: 'Object Height', nameTh: 'เธเธงเธฒเธกเธชเธนเธเธงเธฑเธ•เธ–เธธ (hโ’)', unit: 'cm', defaultValue: 5, min: 0.0001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['m', 'v', 'u', 'hi', 'ho'],
    calculate: (inputs, target = 'm') => {
      let { m, v, u, hi, ho } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'm') {
        result = v / u;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธณเธฅเธฑเธเธเธขเธฒเธข', latex: 'm = \\frac{v}{u}', explanation: `v = ${v} cm, u = ${u} cm` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `m = \\frac{${v}}{${u}}`, explanation: 'เธฃเธฐเธขเธฐเธ เธฒเธเธซเธฒเธฃเธฃเธฐเธขเธฐเธงเธฑเธ•เธ–เธธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `m = ${result.toFixed(2)}`, explanation: result < 0 ? `เธเธขเธฒเธข ${Math.abs(result).toFixed(2)} เน€เธ—เนเธฒ เนเธฅเธฐเธ เธฒเธเธซเธฑเธงเธเธฅเธฑเธ` : `เธเธขเธฒเธข ${result.toFixed(2)} เน€เธ—เนเธฒ` }
        ];
      } else if (target === 'v') {
        result = m * u;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฐเธขเธฐเธ เธฒเธ', latex: 'v = m \\cdot u', explanation: `m = ${m}, u = ${u}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `v = ${result.toFixed(2)} \\ \\text{cm}`, explanation: `เธฃเธฐเธขเธฐเธ เธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เน€เธเธเธ•เธดเน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'u') {
        if (m === 0) throw new Error('m เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = v / m;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฐเธขเธฐเธงเธฑเธ•เธ–เธธ', latex: 'u = \\frac{v}{m}', explanation: 'เธฃเธฐเธขเธฐเธ เธฒเธเธซเธฒเธฃเธเธณเธฅเธฑเธเธเธขเธฒเธข' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `u = ${result.toFixed(2)} \\ \\text{cm}`, explanation: `เธฃเธฐเธขเธฐเธงเธฑเธ•เธ–เธธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เน€เธเธเธ•เธดเน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'hi') {
        result = m * ho;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธชเธนเธเธ เธฒเธ', latex: 'h_i = m \\cdot h_o', explanation: `m = ${m}, hโ’ = ${ho} cm` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `h_i = ${result.toFixed(2)} \\ \\text{cm}`, explanation: `เธเธงเธฒเธกเธชเธนเธเธ เธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เน€เธเธเธ•เธดเน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'ho') {
        if (m === 0) throw new Error('m เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = hi / m;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธชเธนเธเธงเธฑเธ•เธ–เธธ', latex: 'h_o = \\frac{h_i}{m}', explanation: 'เธเธงเธฒเธกเธชเธนเธเธ เธฒเธเธซเธฒเธฃเธเธณเธฅเธฑเธเธเธขเธฒเธข' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `h_o = ${result.toFixed(2)} \\ \\text{cm}`, explanation: `เธเธงเธฒเธกเธชเธนเธเธงเธฑเธ•เธ–เธธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เน€เธเธเธ•เธดเน€เธกเธ•เธฃ` }
        ];
      }

      return { result, unit: target === 'm' ? '' : 'cm', steps };
    }
  },

  {
    id: 'refraction_index',
    name: 'Index of Refraction (n = c/v)',
    nameTh: 'เธ”เธฑเธเธเธตเธซเธฑเธเน€เธซ (n = c/v)',
    category: 'waves',
    categoryTh: 'เธเธฅเธทเนเธเนเธฅเธฐเนเธชเธ',
    icon: 'eye',
    grade: 'เธก.5',
    latex: 'n = \\frac{c}{v}',
    description: 'เธ”เธฑเธเธเธตเธซเธฑเธเน€เธซเธเธญเธเธ•เธฑเธงเธเธฅเธฒเธ = เธเธงเธฒเธกเน€เธฃเนเธงเนเธชเธเนเธเธชเธธเธเธเธฒเธเธฒเธจ รท เธเธงเธฒเธกเน€เธฃเนเธงเนเธชเธเนเธเธ•เธฑเธงเธเธฅเธฒเธ เน€เธเนเธ เธเนเธณ n=1.33, เนเธเนเธง n=1.5',
    variables: [
      { id: 'n', symbol: 'n', name: 'Index of Refraction', nameTh: 'เธ”เธฑเธเธเธตเธซเธฑเธเน€เธซ (n)', unit: '', defaultValue: 1.333, min: 1, max: 5, step: 0.001 },
      { id: 'c', symbol: 'c', name: 'Speed of Light (vacuum)', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเนเธชเธเนเธเธชเธธเธเธเธฒเธเธฒเธจ (c)', unit: 'm/s', defaultValue: 3e8, min: 1e6, max: 1e10, step: 0 },
      { id: 'v', symbol: 'v', name: 'Speed in Medium', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเนเธชเธเนเธเธ•เธฑเธงเธเธฅเธฒเธ (v)', unit: 'm/s', defaultValue: 2.25e8, min: 1e6, max: 1e10, step: 0 }
    ],
    solveTargets: ['n', 'v'],
    calculate: (inputs, target = 'n') => {
      let { n, c, v } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'n') {
        result = c / v;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธ”เธฑเธเธเธตเธซเธฑเธเน€เธซ', latex: 'n = \\frac{c}{v}', explanation: `c = ${c.toExponential(2)}, v = ${v.toExponential(2)} m/s` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `n = \\frac{${c.toExponential(2)}}{${v.toExponential(2)}}`, explanation: 'เธเธงเธฒเธกเน€เธฃเนเธงเนเธเธชเธธเธเธเธฒเธเธฒเธจเธซเธฒเธฃเธเธงเธฒเธกเน€เธฃเนเธงเนเธเธ•เธฑเธงเธเธฅเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n = ${result.toFixed(4)}`, explanation: `เธ”เธฑเธเธเธตเธซเธฑเธเน€เธซเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'v') {
        if (n === 0) throw new Error('n เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = c / n;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเน€เธฃเนเธงเนเธเธ•เธฑเธงเธเธฅเธฒเธ', latex: 'v = \\frac{c}{n}', explanation: `c = ${c.toExponential(2)}, n = ${n}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `v = ${result.toExponential(3)} \\ \\text{m/s}`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธงเนเธชเธเนเธเธ•เธฑเธงเธเธฅเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} m/s` }
        ];
      }

      return { result, unit: target === 'n' ? '' : 'm/s', steps };
    }
  },

  {
    id: 'snells_law',
    name: "Snell's Law (nโsinฮธโ = nโsinฮธโ)",
    nameTh: 'เธเธเธเธญเธเธชเน€เธเธฅเธฅเน (nโsinฮธโ = nโsinฮธโ)',
    category: 'waves',
    categoryTh: 'เธเธฅเธทเนเธเนเธฅเธฐเนเธชเธ',
    icon: 'eye',
    grade: 'เธก.5',
    latex: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2',
    description: 'เธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเนเธเธญเธเธกเธธเธกเธซเธฑเธเน€เธซเน€เธกเธทเนเธญเนเธชเธเน€เธ”เธดเธเธ—เธฒเธเธเนเธฒเธกเธ•เธฑเธงเธเธฅเธฒเธ เน€เธเนเธ เนเธชเธเธเธฒเธเธญเธฒเธเธฒเธจ (n=1) เน€เธเนเธฒเธเนเธณ (n=1.33) เธ—เธตเนเธกเธธเธก 45ยฐ',
    variables: [
      { id: 'n1', symbol: 'n_1', name: 'Index 1', nameTh: 'เธ”เธฑเธเธเธตเธซเธฑเธเน€เธซเธ•เธฑเธงเธเธฅเธฒเธเธ—เธตเน 1', unit: '', defaultValue: 1, min: 0.0001, max: 5, step: 0.01 },
      { id: 'theta1', symbol: '\\theta_1', name: 'Angle 1 (ยฐ)', nameTh: 'เธกเธธเธกเนเธเธ•เธฑเธงเธเธฅเธฒเธเธ—เธตเน 1', unit: 'ยฐ', defaultValue: 45, min: 0, max: 90, step: 1 },
      { id: 'n2', symbol: 'n_2', name: 'Index 2', nameTh: 'เธ”เธฑเธเธเธตเธซเธฑเธเน€เธซเธ•เธฑเธงเธเธฅเธฒเธเธ—เธตเน 2', unit: '', defaultValue: 1.333, min: 0.0001, max: 5, step: 0.01 },
      { id: 'theta2', symbol: '\\theta_2', name: 'Angle 2 (ยฐ)', nameTh: 'เธกเธธเธกเนเธเธ•เธฑเธงเธเธฅเธฒเธเธ—เธตเน 2', unit: 'ยฐ', defaultValue: 32, min: 0, max: 90, step: 1 }
    ],
    solveTargets: ['theta2', 'theta1'],
    calculate: (inputs, target = 'theta2') => {
      let { n1, theta1, n2, theta2 } = inputs;
      const r1 = theta1 * Math.PI / 180;
      const r2 = theta2 * Math.PI / 180;
      let steps = [];
      let result = 0;

      if (target === 'theta2') {
        const x = (n1 * Math.sin(r1)) / n2;
        if (Math.abs(x) > 1) throw new Error('เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เน€เธเธดเธ”เธเธฒเธฃเธซเธฑเธเน€เธซเนเธ”เน (sinฮธโ เน€เธเธดเธ 1 โ’ เน€เธเธดเธ”เธเธฒเธฃเธชเธฐเธ—เนเธญเธเธเธฅเธฑเธเธซเธกเธ”)');
        result = Math.asin(x) * 180 / Math.PI;
        steps = [
          { title: "เธเธเธเธญเธเธชเน€เธเธฅเธฅเน", latex: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2', explanation: `nโ = ${n1}, ฮธโ = ${theta1}ยฐ, nโ = ${n2}` },
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธธเธกเธซเธฑเธเน€เธซ', latex: `\\sin\\theta_2 = \\frac{${n1} \\sin(${theta1}ยฐ)}{${n2}} = ${x.toFixed(4)}`, explanation: `sin(${theta1}ยฐ) = ${Math.sin(r1).toFixed(4)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\theta_2 = ${result.toFixed(2)}ยฐ`, explanation: `เธกเธธเธกเธซเธฑเธเน€เธซเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธญเธเธจเธฒ` }
        ];
      } else if (target === 'theta1') {
        const x = (n2 * Math.sin(r2)) / n1;
        if (Math.abs(x) > 1) throw new Error('sinฮธโ เน€เธเธดเธ 1 เธเนเธญเธกเธนเธฅเนเธกเนเธชเธญเธ”เธเธฅเนเธญเธ');
        result = Math.asin(x) * 180 / Math.PI;
        steps = [
          { title: "เธเธเธเธญเธเธชเน€เธเธฅเธฅเน", latex: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2', explanation: `ฮธโ = ${theta2}ยฐ, nโ = ${n1}, nโ = ${n2}` },
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธธเธกเธ•เธเธเธฃเธฐเธ—เธ', latex: `\\sin\\theta_1 = \\frac{${n2} \\sin(${theta2}ยฐ)}{${n1}} = ${x.toFixed(4)}`, explanation: `sin(${theta2}ยฐ) = ${Math.sin(r2).toFixed(4)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\theta_1 = ${result.toFixed(2)}ยฐ`, explanation: `เธกเธธเธกเธ•เธเธเธฃเธฐเธ—เธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธญเธเธจเธฒ` }
        ];
      }

      return { result, unit: 'ยฐ', steps };
    }
  },

  {
    id: 'critical_angle',
    name: 'Critical Angle (sinฮธc = nโ/nโ)',
    nameTh: 'เธกเธธเธกเธงเธดเธเธคเธ• (sinฮธc = nโ/nโ)',
    category: 'waves',
    categoryTh: 'เธเธฅเธทเนเธเนเธฅเธฐเนเธชเธ',
    icon: 'eye',
    grade: 'เธก.5',
    latex: '\\sin\\theta_c = \\frac{n_2}{n_1}',
    description: 'เธกเธธเธกเธ•เธเธเธฃเธฐเธ—เธเธ—เธตเนเธ—เธณเนเธซเนเน€เธเธดเธ”เธเธฒเธฃเธชเธฐเธ—เนเธญเธเธเธฅเธฑเธเธซเธกเธ” เนเธเนเนเธเนเธขเนเธเนเธงเธเธณเนเธชเธ เน€เธเนเธ เนเธเนเธง n=1.5 เนเธเธญเธฒเธเธฒเธจ n=1 โ’ ฮธc โ 41.8ยฐ',
    variables: [
      { id: 'thetaC', symbol: '\\theta_c', name: 'Critical Angle', nameTh: 'เธกเธธเธกเธงเธดเธเธคเธ• (ฮธc)', unit: 'ยฐ', defaultValue: 41.8, min: 0, max: 90, step: 0.1 },
      { id: 'n1', symbol: 'n_1', name: 'Index (denser)', nameTh: 'เธ”เธฑเธเธเธตเธซเธฑเธเน€เธซเธ•เธฑเธงเธเธฅเธฒเธเธซเธเธฒเนเธเนเธ (nโ)', unit: '', defaultValue: 1.5, min: 0.0001, max: 5, step: 0.01 },
      { id: 'n2', symbol: 'n_2', name: 'Index (rarer)', nameTh: 'เธ”เธฑเธเธเธตเธซเธฑเธเน€เธซเธ•เธฑเธงเธเธฅเธฒเธเน€เธเธฒ (nโ)', unit: '', defaultValue: 1, min: 0.0001, max: 5, step: 0.01 }
    ],
    solveTargets: ['thetaC', 'n1', 'n2'],
    calculate: (inputs, target = 'thetaC') => {
      let { thetaC, n1, n2 } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'thetaC') {
        const x = n2 / n1;
        if (x > 1) throw new Error('nโ/nโ เน€เธเธดเธ 1: เธ•เธฑเธงเธเธฅเธฒเธเธ—เธตเน 2 เธ•เนเธญเธเน€เธเธฒเธเธงเนเธฒ เธเธถเธเนเธกเนเน€เธเธดเธ”เธกเธธเธกเธงเธดเธเธคเธ•');
        result = Math.asin(x) * 180 / Math.PI;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธกเธธเธกเธงเธดเธเธคเธ•', latex: '\\sin\\theta_c = \\frac{n_2}{n_1}', explanation: `nโ = ${n1}, nโ = ${n2}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\sin\\theta_c = \\frac{${n2}}{${n1}} = ${x.toFixed(4)}`, explanation: 'เธซเธฒเธญเธฒเธฃเนเธเนเธเธเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\theta_c = ${result.toFixed(2)}ยฐ`, explanation: `เธกเธธเธกเธงเธดเธเธคเธ•เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธญเธเธจเธฒ` }
        ];
      } else if (target === 'n1') {
        if (thetaC === 90) throw new Error('ฮธc = 90ยฐ เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เธซเธฒ nโ เนเธ”เน');
        result = n2 / Math.sin(thetaC * Math.PI / 180);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธ”เธฑเธเธเธตเธ•เธฑเธงเธเธฅเธฒเธเธซเธเธฒเนเธเนเธ', latex: 'n_1 = \\frac{n_2}{\\sin\\theta_c}', explanation: `nโ = ${n2}, ฮธc = ${thetaC}ยฐ` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n_1 = ${result.toFixed(4)}`, explanation: `เธ”เธฑเธเธเธตเธซเธฑเธเน€เธซเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'n2') {
        result = n1 * Math.sin(thetaC * Math.PI / 180);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธ”เธฑเธเธเธตเธ•เธฑเธงเธเธฅเธฒเธเน€เธเธฒ', latex: 'n_2 = n_1 \\sin\\theta_c', explanation: `nโ = ${n1}, ฮธc = ${thetaC}ยฐ` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n_2 = ${result.toFixed(4)}`, explanation: `เธ”เธฑเธเธเธตเธซเธฑเธเน€เธซเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: target === 'thetaC' ? 'ยฐ' : '', steps };
    }
  },

  {
    id: 'diffraction_grating',
    name: 'Diffraction Grating (dยทsinฮธ = mฮป)',
    nameTh: 'เน€เธเธฃเธ•เธ•เธดเธเน€เธฅเธตเนเธขเธงเน€เธเธ (dยทsinฮธ = mฮป)',
    category: 'waves',
    categoryTh: 'เธเธฅเธทเนเธเนเธฅเธฐเนเธชเธ',
    icon: 'grid',
    grade: 'เธก.6',
    latex: 'd \\sin\\theta = m \\lambda',
    description: 'เธ•เธณเนเธซเธเนเธเนเธ–เธเธชเธงเนเธฒเธ (m) เธเธญเธเนเธชเธเธเนเธฒเธเน€เธเธฃเธ•เธ•เธดเธ เนเธเนเธซเธฒเนเธขเธเธชเธตเธชเน€เธเธเธ•เธฃเธฑเธก เธ•เนเธญเธเนเธเนเธซเธเนเธงเธขเน€เธ”เธตเธขเธงเธเธฑเธเธฃเธฐเธซเธงเนเธฒเธ d เนเธฅเธฐ ฮป',
    variables: [
      { id: 'd', symbol: 'd', name: 'Slit Spacing', nameTh: 'เธฃเธฐเธขเธฐเธซเนเธฒเธเธเนเธญเธ (d)', unit: 'm', defaultValue: 2e-5, min: 1e-9, max: 1, step: 0 },
      { id: 'theta', symbol: '\\theta', name: 'Angle (ยฐ)', nameTh: 'เธกเธธเธกเธชเน€เธเธเธ•เธฃเธฑเธก (ฮธ)', unit: 'ยฐ', defaultValue: 3.3, min: 0, max: 90, step: 0.1 },
      { id: 'm', symbol: 'm', name: 'Order', nameTh: 'เธญเธฑเธเธ”เธฑเธเนเธ–เธ (m)', unit: '', defaultValue: 1, min: 0, max: 100, step: 1 },
      { id: 'lambda', symbol: '\\lambda', name: 'Wavelength', nameTh: 'เธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธ (ฮป)', unit: 'm', defaultValue: 5e-7, min: 1e-12, max: 1, step: 0 }
    ],
    solveTargets: ['lambda', 'd', 'theta'],
    calculate: (inputs, target = 'lambda') => {
      let { d, theta, m, lambda } = inputs;
      const rad = theta * Math.PI / 180;
      let steps = [];
      let result = 0;

      if (target === 'lambda') {
        result = (d * Math.sin(rad)) / m;
        steps = [
          { title: 'เธชเธนเธ•เธฃเน€เธเธฃเธ•เธ•เธดเธ', latex: 'd \\sin\\theta = m \\lambda', explanation: `d = ${d.toExponential(2)} m, ฮธ = ${theta}ยฐ, m = ${m}` },
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธ', latex: `\\lambda = \\frac{${d.toExponential(2)} \\times \\sin(${theta}ยฐ)}{${m}}`, explanation: `sin(${theta}ยฐ) = ${Math.sin(rad).toFixed(4)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\lambda = ${result.toExponential(3)} \\ \\text{m} \\; (${(result * 1e9).toFixed(1)} \\ \\text{nm})`, explanation: `เธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธเน€เธ—เนเธฒเธเธฑเธ ${(result * 1e9).toFixed(1)} เธเธฒเนเธเน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'd') {
        const denom = Math.sin(rad);
        if (denom === 0) throw new Error('sinฮธ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0 (เธกเธธเธกเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0ยฐ)');
        result = (m * lambda) / denom;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฐเธขเธฐเธซเนเธฒเธเธเนเธญเธ', latex: 'd = \\frac{m\\lambda}{\\sin\\theta}', explanation: `m = ${m}, ฮป = ${lambda.toExponential(2)}, ฮธ = ${theta}ยฐ` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `d = ${result.toExponential(3)} \\ \\text{m}`, explanation: `เธฃเธฐเธขเธฐเธซเนเธฒเธเธเนเธญเธเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} เน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'theta') {
        const x = (m * lambda) / d;
        if (Math.abs(x) > 1) throw new Error('(mฮป)/d เน€เธเธดเธ 1 เนเธกเนเธกเธตเนเธ–เธเธเธฑเนเธเน€เธเธดเธ”เธเธถเนเธ');
        result = Math.asin(x) * 180 / Math.PI;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธธเธก', latex: '\\sin\\theta = \\frac{m\\lambda}{d}', explanation: `m = ${m}, ฮป = ${lambda.toExponential(2)}, d = ${d.toExponential(2)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\theta = ${result.toFixed(2)}ยฐ`, explanation: `เธกเธธเธกเธชเน€เธเธเธ•เธฃเธฑเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธญเธเธจเธฒ` }
        ];
      }

      return { result, unit: target === 'd' ? 'm' : target === 'lambda' ? 'm' : 'ยฐ', steps };
    }
  },

  {
    id: 'doppler_effect',
    name: 'Doppler Effect (Approaching Source)',
    nameTh: 'เธเธฃเธฒเธเธเธเธฒเธฃเธ“เนเธ”เธญเธเน€เธเธฅเธญเธฃเน (เนเธซเธฅเนเธเน€เธเนเธฒเนเธเธฅเน)',
    category: 'waves',
    categoryTh: 'เธเธฅเธทเนเธเนเธฅเธฐเนเธชเธ',
    icon: 'volume-2',
    grade: 'เธก.6',
    latex: 'f\' = f \\cdot \\frac{v}{v - v_s}',
    description: 'เธเธงเธฒเธกเธ–เธตเนเธ—เธตเนเธเธนเนเธเธฑเธเนเธ”เนเธขเธดเธเน€เธกเธทเนเธญเนเธซเธฅเนเธเธเธณเน€เธเธดเธ”เน€เธเธฅเธทเนเธญเธเธ—เธตเนเน€เธเนเธฒเธซเธฒ f\' = fยทv/(vโ’vs) เน€เธเนเธ f=500 Hz, v=340 m/s, vs=20 m/s เนเธ”เน 531.25 Hz',
    variables: [
      { id: 'f', symbol: 'f', name: 'Source Frequency', nameTh: 'เธเธงเธฒเธกเธ–เธตเนเธ•เนเธเธเธณเน€เธเธดเธ” (f)', unit: 'Hz', defaultValue: 500, min: 0.0001, max: 1e10, step: 1 },
      { id: 'v', symbol: 'v', name: 'Wave Speed', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเธเธฅเธทเนเธ (v)', unit: 'm/s', defaultValue: 340, min: 0.0001, max: 1e8, step: 1 },
      { id: 'vs', symbol: 'v_s', name: 'Source Speed', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเนเธซเธฅเนเธเธเธณเน€เธเธดเธ” (vs)', unit: 'm/s', defaultValue: 20, min: 0, max: 1e8, step: 1 },
      { id: 'fobs', symbol: 'f\'', name: 'Observed Frequency', nameTh: 'เธเธงเธฒเธกเธ–เธตเนเธ—เธตเนเนเธ”เนเธขเธดเธ (f\')', unit: 'Hz', defaultValue: 531.25, min: 0.0001, max: 1e10, step: 1 }
    ],
    solveTargets: ['fobs', 'f', 'v', 'vs'],
    calculate: (inputs, target = 'fobs') => {
      const { f, v, vs, fobs } = inputs;
      let result, steps;
      if (target === 'fobs') {
        if (v === vs) { throw new Error('vs เธ•เนเธญเธเธเนเธญเธขเธเธงเนเธฒ v (เธซเนเธฒเธกเน€เธ—เนเธฒเธเธฑเธเธเธงเธฒเธกเน€เธฃเนเธงเธเธฅเธทเนเธ)'); }
        result = (f * v) / (v - vs);
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'f\' = f \\cdot \\frac{v}{v - v_s}', explanation: `f = ${f} Hz, v = ${v} m/s, vs = ${vs} m/s` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `f' = ${f} \\times \\frac{${v}}{${v} - ${vs}}`, explanation: 'เธเธงเธฒเธกเธ–เธตเนเน€เธเธดเนเธกเธเธถเนเธเน€เธเธฃเธฒเธฐเนเธซเธฅเนเธเน€เธเนเธฒเธซเธฒเธเธนเนเธเธฑเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `f' = ${result.toFixed(3)} \\ \\text{Hz}`, explanation: `เธเธงเธฒเธกเธ–เธตเนเธ—เธตเนเนเธ”เนเธขเธดเธเน€เธเธดเนเธกเน€เธเนเธ ${result.toFixed(3)} Hz` }
        ];
      } else if (target === 'f') {
        if (v === vs) { throw new Error('vs เธ•เนเธญเธเธเนเธญเธขเธเธงเนเธฒ v'); }
        result = (fobs * (v - vs)) / v;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ f', latex: 'f = \\frac{f\'(v - v_s)}{v}', explanation: `f' = ${fobs}, v = ${v}, vs = ${vs}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `f = \\frac{${fobs} \\times (${v} - ${vs})}{${v}} = ${result.toFixed(3)} \\ \\text{Hz}`, explanation: `เธเธงเธฒเธกเธ–เธตเนเธ•เนเธเธเธณเน€เธเธดเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} Hz` }
        ];
      } else if (target === 'v') {
        if (fobs === f) { throw new Error('f\' เธ•เนเธญเธเนเธกเนเน€เธ—เนเธฒเธเธฑเธ f เธเธถเธเธเธฐเธซเธฒ v เนเธ”เน'); }
        result = (fobs * vs) / (fobs - f);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ v', latex: 'v = \\frac{f\'\\,v_s}{f\' - f}', explanation: `f' = ${fobs}, f = ${f}, vs = ${vs}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `v = \\frac{${fobs} \\times ${vs}}{${fobs} - ${f}} = ${result.toFixed(3)} \\ \\text{m/s}`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธงเธเธฅเธทเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} m/s` }
        ];
      } else {
        if (f === 0) throw new Error('เธเธงเธฒเธกเธ–เธตเน f เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        if (fobs === 0) throw new Error('f\' เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = v - (f * v) / fobs;
        if (result <= 0) throw new Error('เธเนเธญเธกเธนเธฅเนเธกเนเธชเธญเธ”เธเธฅเนเธญเธ (เนเธ”เน vs โค 0)');
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ vs', latex: 'v_s = v - \\frac{f \\cdot v}{f\'}', explanation: `f = ${f}, v = ${v}, f' = ${fobs}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `v_s = ${v} - \\frac{${f} \\times ${v}}{${fobs}} = ${result.toFixed(3)} \\ \\text{m/s}`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธงเนเธซเธฅเนเธเธเธณเน€เธเธดเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} m/s` }
        ];
      }
      return { result, unit: target === 'f' || target === 'fobs' ? 'Hz' : 'm/s', steps };
    }
  }
];