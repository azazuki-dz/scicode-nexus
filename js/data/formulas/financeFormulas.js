/**
 * Finance Formulas (การเงิน) - ม.3 - ม.6
 * รวมกับ compound_interest เดิมใน formulas.js
 */

export const FINANCE_FORMULAS = [
  {
    id: 'simple_interest',
    name: 'Simple Interest',
    nameTh: 'ดอกเบี้ยแบบง่าย',
    category: 'finance',
    categoryTh: 'การเงิน',
    icon: 'wallet',
    grade: 'ม.3',
    latex: 'I = P \\cdot r \\cdot t',
    description: 'ดอกเบี้ยแบบง่าย = เงินต้น × อัตราดอกเบี้ยต่อปี × ระยะเวลา (ปี) เช่น ฝาก 1,000 บาท อัตรา 5% ต่อปี เป็นเวลา 3 ปี',
    variables: [
      { id: 'I', symbol: 'I', name: 'Interest', nameTh: 'ดอกเบี้ย (บาท)', unit: 'บาท', defaultValue: 150, min: 0, max: 1e15, step: 1 },
      { id: 'P', symbol: 'P', name: 'Principal', nameTh: 'เงินต้น (บาท)', unit: 'บาท', defaultValue: 1000, min: 0, max: 1e15, step: 1 },
      { id: 'r', symbol: 'r', name: 'Annual Rate', nameTh: 'อัตราดอกเบี้ยต่อปี (ทศนิยม เช่น 0.05 = 5%)', unit: '', defaultValue: 0.05, min: 0, max: 1, step: 0.01 },
      { id: 't', symbol: 't', name: 'Time (years)', nameTh: 'ระยะเวลา (ปี)', unit: 'ปี', defaultValue: 3, min: 0, max: 1000, step: 0.5 }
    ],
    solveTargets: ['I', 'P', 'r', 't'],
    calculate: (inputs, target = 'I') => {
      let { I, P, r, t } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'I') {
        result = P * r * t;
        steps = [
          { title: 'สูตรดอกเบี้ยแบบง่าย', latex: 'I = P \\cdot r \\cdot t', explanation: `P = ${P}, r = ${r} (${(r * 100).toFixed(2)}%), t = ${t} ปี` },
          { title: 'แทนค่า', latex: `I = ${P} \\times ${r} \\times ${t}`, explanation: 'คูณเงินต้น อัตรา และเวลา' },
          { title: 'ผลลัพธ์', latex: `I = ${result.toFixed(2)} \\ \\text{บาท}`, explanation: `ดอกเบี้ย ${result.toFixed(2)} บาท (ยอดรวม ${(P + result).toFixed(2)} บาท)` }
        ];
      } else if (target === 'P') {
        if (r === 0 || t === 0) throw new Error('r และ t ต้องไม่เป็น 0');
        result = I / (r * t);
        steps = [
          { title: 'จัดรูปหาเงินต้น', latex: 'P = \\frac{I}{r \\cdot t}', explanation: 'ดอกเบี้ยหารผลคูณของ r·t' },
          { title: 'ผลลัพธ์', latex: `P = ${result.toFixed(2)} \\ \\text{บาท}`, explanation: `เงินต้นเท่ากับ ${result.toFixed(2)} บาท` }
        ];
      } else if (target === 'r') {
        if (P === 0 || t === 0) throw new Error('P และ t ต้องไม่เป็น 0');
        result = I / (P * t);
        steps = [
          { title: 'จัดรูปหาอัตราดอกเบี้ย', latex: 'r = \\frac{I}{P \\cdot t}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(4)} \\; (${(result * 100).toFixed(2)}\\% )`, explanation: `อัตราดอกเบี้ย ${(result * 100).toFixed(2)}% ต่อปี` }
        ];
      } else if (target === 't') {
        if (P === 0 || r === 0) throw new Error('P และ r ต้องไม่เป็น 0');
        result = I / (P * r);
        steps = [
          { title: 'จัดรูปหาระยะเวลา', latex: 't = \\frac{I}{P \\cdot r}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `t = ${result.toFixed(2)} \\ \\text{ปี}`, explanation: `ใช้เวลา ${result.toFixed(2)} ปี` }
        ];
      }

      return { result, resultDisplay: `${result.toFixed(2)}`, unit: target === 'I' || target === 'P' ? 'บาท' : '', steps };
    }
  },

  {
    id: 'annuity_fv',
    name: 'Future Value of Annuity',
    nameTh: 'มูลค่าอนาคตของเงินรายงวด',
    category: 'finance',
    categoryTh: 'การเงิน',
    icon: 'wallet',
    grade: 'ม.5-6',
    latex: 'FV = PMT \\cdot \\frac{(1+r)^n - 1}{r}',
    description: 'มูลค่าในอนาคตของเงินที่ฝากเป็นงวดสม่ำเสมอ เช่น ฝากสิ้นปี 5,000 บาททุกปี อัตรา 6% เป็นเวลา 10 ปี',
    variables: [
      { id: 'FV', symbol: 'FV', name: 'Future Value', nameTh: 'มูลค่าอนาคต (บาท)', unit: 'บาท', defaultValue: 65904, min: 0, max: 1e18, step: 1 },
      { id: 'PMT', symbol: 'PMT', name: 'Payment per Period', nameTh: 'เงินที่จ่ายต่องวด (บาท)', unit: 'บาท', defaultValue: 5000, min: 0, max: 1e12, step: 1 },
      { id: 'r', symbol: 'r', name: 'Rate per Period', nameTh: 'อัตราดอกเบี้ยต่องวด (ทศนิยม)', unit: '', defaultValue: 0.06, min: 0.0000001, max: 1, step: 0.01 },
      { id: 'n', symbol: 'n', name: 'Number of Periods', nameTh: 'จำนวนงวด', unit: 'งวด', defaultValue: 10, min: 1, max: 1000, step: 1 }
    ],
    solveTargets: ['FV', 'PMT'],
    calculate: (inputs, target = 'FV') => {
      let { FV, PMT, r, n } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'FV') {
        result = PMT * (Math.pow(1 + r, n) - 1) / r;
        steps = [
          { title: 'สูตรมูลค่าอนาคตของเงินรายงวด', latex: 'FV = PMT \\cdot \\frac{(1+r)^n - 1}{r}', explanation: `PMT = ${PMT}, r = ${r}, n = ${n}` },
          { title: 'คำนวณตัวคูณ', latex: `(1+${r})^{${n}} = ${Math.pow(1 + r, n).toFixed(4)}`, explanation: 'การทบต้น n งวด' },
          { title: 'ผลลัพธ์', latex: `FV = ${result.toFixed(2)} \\ \\text{บาท}`, explanation: `มูลค่าอนาคตเท่ากับ ${result.toFixed(2)} บาท` }
        ];
      } else if (target === 'PMT') {
        const factor = (Math.pow(1 + r, n) - 1) / r;
        result = FV / factor;
        steps = [
          { title: 'จัดรูปหาเงินต่องวด', latex: 'PMT = \\frac{FV \\cdot r}{(1+r)^n - 1}', explanation: `FV = ${FV}, r = ${r}, n = ${n}` },
          { title: 'ผลลัพธ์', latex: `PMT = ${result.toFixed(2)} \\ \\text{บาท/งวด}`, explanation: `ต้องฝากงวดละ ${result.toFixed(2)} บาท` }
        ];
      }

      return { result, unit: target === 'FV' || target === 'PMT' ? 'บาท' : '', steps };
    }
  },

  {
    id: 'annuity_pv',
    name: 'Present Value of Annuity',
    nameTh: 'มูลค่าปัจจุบันของเงินรายงวด',
    category: 'finance',
    categoryTh: 'การเงิน',
    icon: 'wallet',
    grade: 'ม.5-6',
    latex: 'PV = PMT \\cdot \\frac{1 - (1+r)^{-n}}{r}',
    description: 'เงินก้อนที่ต้องมีวันนี้เพื่อจ่ายเป็นงวดรายเดือนที่แน่นอน เช่น ต้องการรับ 2,000 บาททุกเดือน 24 เดือน อัตรา 1% ต่อเดือน',
    variables: [
      { id: 'PV', symbol: 'PV', name: 'Present Value', nameTh: 'มูลค่าปัจจุบัน (บาท)', unit: 'บาท', defaultValue: 42490, min: 0, max: 1e15, step: 1 },
      { id: 'PMT', symbol: 'PMT', name: 'Payment per Period', nameTh: 'เงินที่ได้รับต่องวด (บาท)', unit: 'บาท', defaultValue: 2000, min: 0, max: 1e12, step: 1 },
      { id: 'r', symbol: 'r', name: 'Rate per Period', nameTh: 'อัตราดอกเบี้ยต่องวด (ทศนิยม)', unit: '', defaultValue: 0.01, min: 0.0000001, max: 1, step: 0.001 },
      { id: 'n', symbol: 'n', name: 'Number of Periods', nameTh: 'จำนวนงวด', unit: 'งวด', defaultValue: 24, min: 1, max: 1200, step: 1 }
    ],
    solveTargets: ['PV', 'PMT'],
    calculate: (inputs, target = 'PV') => {
      let { PV, PMT, r, n } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'PV') {
        result = PMT * (1 - Math.pow(1 + r, -n)) / r;
        steps = [
          { title: 'สูตรมูลค่าปัจจุบันของเงินรายงวด', latex: 'PV = PMT \\cdot \\frac{1 - (1+r)^{-n}}{r}', explanation: `PMT = ${PMT}, r = ${r}, n = ${n}` },
          { title: 'คำนวณตัวคูณ', latex: `(1+${r})^{-${n}} = ${Math.pow(1 + r, -n).toFixed(6)}`, explanation: 'คิดลดย้อนกลับ n งวด' },
          { title: 'ผลลัพธ์', latex: `PV = ${result.toFixed(2)} \\ \\text{บาท}`, explanation: `ต้องมีเงิน ${result.toFixed(2)} บาทวันนี้` }
        ];
      } else if (target === 'PMT') {
        const factor = (1 - Math.pow(1 + r, -n)) / r;
        result = PV / factor;
        steps = [
          { title: 'จัดรูปหาเงินต่องวด', latex: 'PMT = \\frac{PV \\cdot r}{1 - (1+r)^{-n}}', explanation: `PV = ${PV}, r = ${r}, n = ${n}` },
          { title: 'ผลลัพธ์', latex: `PMT = ${result.toFixed(2)} \\ \\text{บาท/งวด}`, explanation: `รับเงินงวดละ ${result.toFixed(2)} บาท` }
        ];
      }

      return { result, unit: target === 'PV' || target === 'PMT' ? 'บาท' : '', steps };
    }
  },

  {
    id: 'loan_payment',
    name: 'Loan Payment (Amortization)',
    nameTh: 'ค่างวดผ่อนชำระ',
    category: 'finance',
    categoryTh: 'การเงิน',
    icon: 'banknote',
    grade: 'ม.5-6',
    latex: 'PMT = \\frac{PV \\cdot r}{1 - (1+r)^{-n}}',
    description: 'ค่างวดรายเดือนของสินเชื่อผ่อนชำระ เช่น กู้ 1,000,000 บาท อัตรา 5% ต่อปี ผ่อน 30 ปี (n = 360 เดือน)',
    variables: [
      { id: 'PMT', symbol: 'PMT', name: 'Monthly Payment', nameTh: 'ค่างวดต่อเดือน (บาท)', unit: 'บาท/เดือน', defaultValue: 5368, min: 0, max: 1e9, step: 1 },
      { id: 'PV', symbol: 'PV', name: 'Loan Amount', nameTh: 'ยอดกู้ (บาท)', unit: 'บาท', defaultValue: 1000000, min: 1, max: 1e15, step: 1 },
      { id: 'rAnnual', symbol: 'r_{annual}', name: 'Annual Rate', nameTh: 'อัตราดอกเบี้ยต่อปี (%)', unit: '%', defaultValue: 5, min: 0.0000001, max: 100, step: 0.1 },
      { id: 'years', symbol: 't', name: 'Term (years)', nameTh: 'ระยะเวลากู้ (ปี)', unit: 'ปี', defaultValue: 30, min: 1, max: 100, step: 1 }
    ],
    solveTargets: ['PMT'],
    calculate: (inputs) => {
      let { PV, rAnnual, years } = inputs;
      const r = rAnnual / 100 / 12;
      const n = years * 12;
      const result = n > 0 ? PV * r / (1 - Math.pow(1 + r, -n)) : PV * r;
      const steps = [
        { title: 'แปลงอัตราดอกเบี้ยเป็นต่องวด', latex: `r = \\frac{${rAnnual}}{100 \\times 12} = ${r.toFixed(6)}`, explanation: 'อัตรารายปีหารเป็นรายเดือน' },
        { title: 'คำนวณจำนวนงวด', latex: `n = ${years} \\times 12 = ${n}`, explanation: 'แปลงปีเป็นเดือน' },
        { title: 'สูตรค่างวด', latex: 'PMT = \\frac{PV \\cdot r}{1 - (1+r)^{-n}}', explanation: `PV = ${PV}, r = ${r.toFixed(6)}, n = ${n}` },
        { title: 'ผลลัพธ์', latex: `PMT = ${result.toFixed(2)} \\ \\text{บาท/เดือน}`, explanation: `ต้องผ่อนเดือนละ ${result.toFixed(2)} บาท (จ่ายรวม ${n} งวด = ${(result * n).toLocaleString()} บาท)` }
      ];
      return { result, unit: 'บาท/เดือน', steps };
    }
  },

  {
    id: 'discount',
    name: 'Discount & Sale Price',
    nameTh: 'ส่วนลดและราคาขาย',
    category: 'finance',
    categoryTh: 'การเงิน',
    icon: 'tag',
    grade: 'ม.2-4',
    latex: '\\text{ราคาลด} = ราคา \\times \\frac{d}{100}, \\ \\text{จ่าย} = ราคา - ส่วนลด',
    description: 'ส่วนลด = ราคาเต็ม × อัตราส่วนลด และราคาที่ต้องจ่าย = ราคาเต็ม − ส่วนลด เช่น เสื้อ 800 บาท ลด 25%',
    variables: [
      { id: 'price', symbol: 'P', name: 'Original Price', nameTh: 'ราคาเต็ม (บาท)', unit: 'บาท', defaultValue: 800, min: 0, max: 1e12, step: 1 },
      { id: 'discountPct', symbol: 'd\\%', name: 'Discount %', nameTh: 'อัตราส่วนลด (%)', unit: '%', defaultValue: 25, min: 0, max: 100, step: 1 },
      { id: 'salePrice', symbol: 'P_{sale}', name: 'Sale Price', nameTh: 'ราคาที่ต้องจ่าย (บาท)', unit: 'บาท', defaultValue: 600, min: 0, max: 1e12, step: 1 }
    ],
    solveTargets: ['salePrice', 'discountPct'],
    calculate: (inputs, target = 'salePrice') => {
      let { price, discountPct, salePrice } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'salePrice') {
        const disc = price * discountPct / 100;
        result = price - disc;
        steps = [
          { title: 'คำนวณส่วนลด', latex: `\\text{ส่วนลด} = ${price} \\times \\frac{${discountPct}}{100} = ${disc.toFixed(2)}`, explanation: 'ราคาเต็มคูณอัตราส่วนลด' },
          { title: 'หักส่วนลด', latex: `P_{sale} = ${price} - ${disc.toFixed(2)}`, explanation: 'ราคาเต็มลบส่วนลด' },
          { title: 'ผลลัพธ์', latex: `P_{sale} = ${result.toFixed(2)} \\ \\text{บาท}`, explanation: `ต้องจ่าย ${result.toFixed(2)} บาท (ประหยัด ${disc.toFixed(2)} บาท)` }
        ];
      } else if (target === 'discountPct') {
        if (price === 0) throw new Error('ราคาเต็มต้องไม่เป็น 0');
        result = ((price - salePrice) / price) * 100;
        steps = [
          { title: 'คำนวณอัตราส่วนลด', latex: `d\\% = \\frac{P - P_{sale}}{P} \\times 100`, explanation: `ส่วนลด ${(price - salePrice).toFixed(2)} บาทจากราคาเต็ม ${price}` },
          { title: 'แทนค่า', latex: `d\\% = \\frac{${price} - ${salePrice}}{${price}} \\times 100`, explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `d\\% = ${result.toFixed(2)}\\% `, explanation: `อัตราส่วนลดเท่ากับ ${result.toFixed(2)}%` }
        ];
      }

      return { result, unit: target === 'discountPct' ? '%' : 'บาท', steps };
    }
  },

  {
    id: 'vat',
    name: 'VAT (Thai 7% / Custom)',
    nameTh: 'ภาษีมูลค่าเพิ่ม (VAT)',
    category: 'finance',
    categoryTh: 'การเงิน',
    icon: 'receipt',
    grade: 'ม.4-6',
    latex: '\\text{VAT} = P \\times \\frac{v}{100}, \\ \\text{รวม} = P + \\text{VAT}',
    description: 'VAT = ราคาไม่รวมภาษี × อัตรา (ไทย 7%) ราคารวมภาษี = ราคา + VAT เช่น ซื้อของ 500 บาท + VAT 7%',
    variables: [
      { id: 'priceNoVat', symbol: 'P', name: 'Price (excl. VAT)', nameTh: 'ราคาก่อนภาษี (บาท)', unit: 'บาท', defaultValue: 500, min: 0, max: 1e12, step: 1 },
      { id: 'vatRate', symbol: 'v\\%', name: 'VAT Rate', nameTh: 'อัตรา VAT (%)', unit: '%', defaultValue: 7, min: 0, max: 100, step: 0.5 },
      { id: 'priceVat', symbol: 'P_{vat}', name: 'Price (incl. VAT)', nameTh: 'ราคารวม VAT (บาท)', unit: 'บาท', defaultValue: 535, min: 0, max: 1e12, step: 1 }
    ],
    solveTargets: ['priceVat', 'vatRate'],
    calculate: (inputs, target = 'priceVat') => {
      let { priceNoVat, vatRate, priceVat } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'priceVat') {
        const vat = priceNoVat * vatRate / 100;
        result = priceNoVat + vat;
        steps = [
          { title: 'คำนวณ VAT', latex: `VAT = ${priceNoVat} \\times \\frac{${vatRate}}{100} = ${vat.toFixed(2)} \\ \\text{บาท}`, explanation: 'ราคาก่อนภาษีคูณอัตรา' },
          { title: 'บวก VAT เข้ากับราคา', latex: `P_{vat} = ${priceNoVat} + ${vat.toFixed(2)}`, explanation: 'ราคาก่อนบวกภาษีบวก VAT' },
          { title: 'ผลลัพธ์', latex: `P_{vat} = ${result.toFixed(2)} \\ \\text{บาท}`, explanation: `ราคารวม VAT เท่ากับ ${result.toFixed(2)} บาท` }
        ];
      } else if (target === 'vatRate') {
        if (priceNoVat === 0) throw new Error('ราคาก่อนภาษีต้องไม่เป็น 0');
        result = ((priceVat - priceNoVat) / priceNoVat) * 100;
        steps = [
          { title: 'คำนวณอัตรา VAT', latex: `v\\% = \\frac{P_{vat} - P}{P} \\times 100`, explanation: `ภาษีที่จ่าย = ${(priceVat - priceNoVat).toFixed(2)} บาท` },
          { title: 'แทนค่า', latex: `v\\% = \\frac{${priceVat} - ${priceNoVat}}{${priceNoVat}} \\times 100`, explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `v\\% = ${result.toFixed(2)}\\% `, explanation: `อัตรา VAT เท่ากับ ${result.toFixed(2)}%` }
        ];
      }

      return { result, unit: target === 'vatRate' ? '%' : 'บาท', steps };
    }
  },

  {
    id: 'currency_exchange',
    name: 'Currency Exchange',
    nameTh: 'การแลกเปลี่ยนเงินตรา',
    category: 'finance',
    categoryTh: 'การเงิน',
    icon: 'repeat',
    grade: 'ม.3-6',
    latex: '\\text{ได้} = \\frac{\\text{เงินบาท}}{\\text{อัตรา}}',
    description: 'จำนวนเงินตราต่างประเทศที่ได้ = เงินบาท ÷ อัตราแลกเปลี่ยน เช่น 15,000 บาท อัตรา 35 บาท/ดอลลาร์ ได้ประมาณ 428.57 USD',
    variables: [
      { id: 'thb', symbol: 'THB', name: 'Amount in THB', nameTh: 'เงินบาท (บาท)', unit: 'บาท', defaultValue: 15000, min: 0, max: 1e15, step: 1 },
      { id: 'rate', symbol: 'rate', name: 'Rate (THB per 1 unit)', nameTh: 'อัตราแลกเปลี่ยน (บาทต่อหน่วย)', unit: 'บาท/หน่วย', defaultValue: 35, min: 0.000001, max: 1e9, step: 0.01 },
      { id: 'foreign', symbol: 'foreign', name: 'Amount in Foreign', nameTh: 'เงินตราต่างประเทศที่ได้', unit: 'หน่วย', defaultValue: 428.57, min: 0, max: 1e15, step: 0.01 }
    ],
    solveTargets: ['foreign', 'rate', 'thb'],
    calculate: (inputs, target = 'foreign') => {
      let { thb, rate, foreign } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'foreign') {
        result = thb / rate;
        steps = [
          { title: 'สูตรการแลกเปลี่ยน', latex: '\\text{ได้} = \\frac{THB}{rate}', explanation: 'เงินบาทหารอัตราแลกเปลี่ยน' },
          { title: 'แทนค่า', latex: `\\text{ได้} = \\frac{${thb}}{${rate}}`, explanation: 'อัตรา ${rate} บาทต่อหน่วย' },
          { title: 'ผลลัพธ์', latex: `= ${result.toFixed(2)} \\ \\text{หน่วย}`, explanation: `แลกได้ ${result.toFixed(2)} หน่วยเงินตรา` }
        ];
      } else if (target === 'rate') {
        if (foreign === 0) throw new Error('เงินตราต่างประเทศต้องไม่เป็น 0');
        result = thb / foreign;
        steps = [
          { title: 'คำนวณอัตราแลกเปลี่ยน', latex: 'rate = \\frac{THB}{foreign}', explanation: 'บาทหารหน่วยเงินตรา' },
          { title: 'ผลลัพธ์', latex: `rate = ${result.toFixed(4)} \\ \\text{บาท/หน่วย}`, explanation: `อัตราแลกเปลี่ยนเท่ากับ ${result.toFixed(4)} บาทต่อหน่วย` }
        ];
      } else if (target === 'thb') {
        result = foreign * rate;
        steps = [
          { title: 'คำนวณเงินบาท', latex: 'THB = foreign \\times rate', explanation: 'หน่วยเงินตราคูณอัตรา' },
          { title: 'ผลลัพธ์', latex: `THB = ${result.toFixed(2)} \\ \\text{บาท}`, explanation: `ใช้เงิน ${result.toFixed(2)} บาท` }
        ];
      }

      return { result, unit: target === 'rate' ? 'บาท/หน่วย' : target === 'thb' ? 'บาท' : 'หน่วย', steps };
    }
  }
];