/**
 * SciCode Nexus - English Language Curriculum (ม.1 - ม.6)
 * Grammar, 12 Tenses, If-Clauses, Subject-Verb Agreement, Passive Voice, Error Identification & Reading Hacks
 */

export const ENGLISH_CURRICULUM = [
  // ==================== ม.1-ม.3: 12 Tenses & Passive Voice ====================
  {
    id: 'eng-m1-m3-tenses-passive',
    grade: 'm1',
    gradeLabel: 'ม.1-ม.3',
    subject: 'english',
    subjectLabel: 'ภาษาอังกฤษ',
    title: 'The 12 English Tenses & Passive Voice Transformations',
    chapter: 'English Grammar Foundation ม.ต้น - ม.ปลาย',
    summary: 'โครงสร้างและแก่นเวลาของ 12 Tenses (Simple, Continuous, Perfect, Perfect Continuous), การวิเคราะห์ Time Markers, และการเปลี่ยนประโยคจาก Active Voice เป็น Passive Voice เพื่อเน้นผู้ถูกกระทำ',
    keyConcepts: [
      'Simple Tenses: เน้นข้อเท็จจริง นิสัย กิจวัตร หรือเหตุการณ์ที่จบไปแล้ว (V1, V2, will + V.inf)',
      'Continuous Tenses: กำลังกระทำอยู่ ณ จุดเวลานั้น (Be + V-ing)',
      'Perfect Tenses: เกิดก่อนและส่งผลเชื่อมโยงมาถึงอีกเวลาหนึ่ง (Have/Has/Had + V3)',
      'Perfect Continuous: เกิดขึ้นต่อเนื่องมาอย่างยาวนานและยังดำเนินอยู่ (Have/Has/Had + been + V-ing)',
      'Passive Voice โครงสร้างหลัก: Subject + Verb to BE + V3 (Past Participle) เสมอ!'
    ],
    formulas: [
      { name: 'ตาราง 12 Tenses Framework', latex: '\\text{Past} \\, [V_2] \\quad | \\quad \\text{Present} \\, [V_1 / V_s] \\quad | \\quad \\text{Future} \\, [\\text{will} + V_{\\text{inf}}]' },
      { name: 'สูตร Passive Voice สากล', latex: '\\text{Active: } S + V + O \\implies \\text{Passive: } O + [\\text{Be} + V_3] + (\\text{by } S)' }
    ],
    workedExample: {
      problem: 'Change this sentence into Passive Voice: "The engineers have constructed a new high-speed bridge across the river."',
      steps: [
        { step: 1, text: 'Identify Subject, Verb, and Object: Subject = "The engineers", Verb = "have constructed" (Present Perfect), Object = "a new high-speed bridge"' },
        { step: 2, text: 'Move Object to the Subject position: "A new high-speed bridge"' },
        { step: 3, text: 'Formulate Passive for Present Perfect (has/have + been + V3): Since the new subject is singular, use "has been constructed"', latex: '\\text{has been constructed}' },
        { step: 4, text: 'Add the prepositional phrase and agent: "across the river (by the engineers)"' }
      ],
      answer: 'A new high-speed bridge has been constructed across the river (by the engineers).'
    },
    examHacks: [
      '💡 Time Markers บอก Tense ทันที:',
      '   - Since / For / Already / Yet / Just / So far -> Present Perfect (have/has + V3)',
      '   - Yesterday / Last week / Ago / In 1999 -> Past Simple (V2)',
      '   - At this time yesterday / While / As -> Past Continuous (was/were + V-ing)',
      '💡 สังเกต Passive Voice: หากประธานเป็น "สิ่งของที่ไม่มีชีวิต" เช่น รถยนต์ สะพาน จดหมาย ตึก กริยามักจะต้องเป็น Passive Voice (Be + V3) เพราะสิ่งของทำกริยาเองไม่ได้!'
    ]
  },

  // ==================== ม.4-ม.6: If-Clauses, Subject-Verb Agreement & Error Identification ====================
  {
    id: 'eng-m4-m6-conditionals-error',
    grade: 'm4',
    gradeLabel: 'ม.4-ม.6',
    subject: 'english',
    subjectLabel: 'ภาษาอังกฤษ',
    title: 'Conditional Sentences (If-Clauses), Subject-Verb Agreement & Error Detection',
    chapter: 'Advanced English Grammar (TGAT1 & A-Level ภาษาอังกฤษ)',
    summary: 'สมการเงื่อนไข 4 แบบ (Type 0, 1, 2, 3), กฎ Subject-Verb Agreement ปราบเซียน, และ 5 ขั้นตอนฟันธงข้อสอบ Error Identification และ Sentence Completion',
    keyConcepts: [
      'Type 0 (ความจริงทางวิทยาศาสตร์): If + Present Simple, Present Simple',
      'Type 1 (เป็นไปได้ในอนาคต): If + Present Simple, will + V.inf',
      'Type 2 (สมมติสิ่งที่ไม่จริงในปัจจุบัน): If + Past Simple (were/V2), would + V.inf',
      'Type 3 (เสียดายอดีตที่แก้ไขไม่ได้): If + Past Perfect (had + V3), would have + V3',
      'Subject-Verb Agreement กฎเหล็ก:',
      '   - One of the + Plural Noun + "Singular Verb" (เช่น One of the students is...)',
      '   - Either...or / Neither...nor: กริยาผันตาม "ประธานตัวที่อยู่ใกล้กริยาที่สุด"',
      '   - Along with, Together with, As well as: กริยาผันตาม "ประธานตัวหน้าสุด"'
    ],
    formulas: [
      { name: 'สูตรจำ If-Clause 4 แบบ', latex: '\\text{Type 1: If } V_1, \\text{will } V_{\\text{inf}} \\quad | \\quad \\text{Type 2: If } V_2, \\text{would } V_{\\text{inf}} \\quad | \\quad \\text{Type 3: If had } V_3, \\text{would have } V_3' },
      { name: 'Inversion (การละ If)', latex: '\\text{If I had known} \\iff \\text{Had I known...} \\quad | \\quad \\text{If I were you} \\iff \\text{Were I you...}' }
    ],
    workedExample: {
      problem: 'Find the error in this sentence: "Neither the manager nor the employees (A)[is] (B)[aware] of the new policy (C)[announced] by the board (D)[yesterday]."',
      steps: [
        { step: 1, text: 'Check the subject structure: The sentence uses "Neither...nor..." structure' },
        { step: 2, text: 'Apply Subject-Verb Agreement rule: When using "Neither A nor B", the verb must agree with B (the noun closer to the verb)' },
        { step: 3, text: 'Analyze B: "the employees" is plural plural noun' },
        { step: 4, text: 'Analyze the verb (A): "is" is singular, which clashes with plural "employees". It must be corrected to "are"' }
      ],
      answer: 'The error is (A) [is] -> Change to [are]'
    },
    examHacks: [
      '💡 ทริกเพลงจำ If-Clause ให้ขึ้นใจ: "If 1 will คู่กับช่อง 1 / If 2 would คู่กับช่อง 2 / If 3 would have V3 คู่กับ had V3!" ท่องรอบเดียวทำข้อสอบได้ทั้งชีวิต!',
      '💡 เช็คลิสต์ 5 สเต็ปปราบ Error Identification: 1) หา Verb แท้ของประโยค -> 2) เช็คว่าประธานเอกพจน์/พหูพจน์ -> 3) เช็ค Active/Passive Voice -> 4) เช็ค Tense และคู่คำเชื่อม -> 5) เช็ค Part of Speech (เช่น Adjective ขยาย Noun, Adverb ขยาย Verb)'
    ]
  }
];
