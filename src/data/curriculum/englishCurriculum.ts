// @ts-nocheck

/**
 * SciCode Nexus - English Language Curriculum (เธก.1 - เธก.6)
 * Grammar, 12 Tenses, If-Clauses, Subject-Verb Agreement, Passive Voice, Error Identification & Reading Hacks
 */

export const ENGLISH_CURRICULUM = [
  // ==================== เธก.1-เธก.3: 12 Tenses & Passive Voice ====================
  {
    id: 'eng-m1-m3-tenses-passive',
    grade: 'm1',
    gradeLabel: 'เธก.1-เธก.3',
    subject: 'english',
    subjectLabel: 'เธ เธฒเธฉเธฒเธญเธฑเธเธเธคเธฉ',
    title: 'The 12 English Tenses & Passive Voice Transformations',
    chapter: 'English Grammar Foundation เธก.เธ•เนเธ - เธก.เธเธฅเธฒเธข',
    summary: 'เนเธเธฃเธเธชเธฃเนเธฒเธเนเธฅเธฐเนเธเนเธเน€เธงเธฅเธฒเธเธญเธ 12 Tenses (Simple, Continuous, Perfect, Perfect Continuous), เธเธฒเธฃเธงเธดเน€เธเธฃเธฒเธฐเธซเน Time Markers, เนเธฅเธฐเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเธเธฃเธฐเนเธขเธเธเธฒเธ Active Voice เน€เธเนเธ Passive Voice เน€เธเธทเนเธญเน€เธเนเธเธเธนเนเธ–เธนเธเธเธฃเธฐเธ—เธณ',
    keyConcepts: [
      'Simple Tenses: เน€เธเนเธเธเนเธญเน€เธ—เนเธเธเธฃเธดเธ เธเธดเธชเธฑเธข เธเธดเธเธงเธฑเธ•เธฃ เธซเธฃเธทเธญเน€เธซเธ•เธธเธเธฒเธฃเธ“เนเธ—เธตเนเธเธเนเธเนเธฅเนเธง (V1, V2, will + V.inf)',
      'Continuous Tenses: เธเธณเธฅเธฑเธเธเธฃเธฐเธ—เธณเธญเธขเธนเน เธ“ เธเธธเธ”เน€เธงเธฅเธฒเธเธฑเนเธ (Be + V-ing)',
      'Perfect Tenses: เน€เธเธดเธ”เธเนเธญเธเนเธฅเธฐเธชเนเธเธเธฅเน€เธเธทเนเธญเธกเนเธขเธเธกเธฒเธ–เธถเธเธญเธตเธเน€เธงเธฅเธฒเธซเธเธถเนเธ (Have/Has/Had + V3)',
      'Perfect Continuous: เน€เธเธดเธ”เธเธถเนเธเธ•เนเธญเน€เธเธทเนเธญเธเธกเธฒเธญเธขเนเธฒเธเธขเธฒเธงเธเธฒเธเนเธฅเธฐเธขเธฑเธเธ”เธณเน€เธเธดเธเธญเธขเธนเน (Have/Has/Had + been + V-ing)',
      'Passive Voice เนเธเธฃเธเธชเธฃเนเธฒเธเธซเธฅเธฑเธ: Subject + Verb to BE + V3 (Past Participle) เน€เธชเธกเธญ!'
    ],
    formulas: [
      { name: 'เธ•เธฒเธฃเธฒเธ 12 Tenses Framework', latex: '\\text{Past} \\, [V_2] \\quad | \\quad \\text{Present} \\, [V_1 / V_s] \\quad | \\quad \\text{Future} \\, [\\text{will} + V_{\\text{inf}}]' },
      { name: 'เธชเธนเธ•เธฃ Passive Voice เธชเธฒเธเธฅ', latex: '\\text{Active: } S + V + O \\implies \\text{Passive: } O + [\\text{Be} + V_3] + (\\text{by } S)' }
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
      '๐’ก Time Markers เธเธญเธ Tense เธ—เธฑเธเธ—เธต:',
      '   - Since / For / Already / Yet / Just / So far -> Present Perfect (have/has + V3)',
      '   - Yesterday / Last week / Ago / In 1999 -> Past Simple (V2)',
      '   - At this time yesterday / While / As -> Past Continuous (was/were + V-ing)',
      '๐’ก เธชเธฑเธเน€เธเธ• Passive Voice: เธซเธฒเธเธเธฃเธฐเธเธฒเธเน€เธเนเธ "เธชเธดเนเธเธเธญเธเธ—เธตเนเนเธกเนเธกเธตเธเธตเธงเธดเธ•" เน€เธเนเธ เธฃเธ–เธขเธเธ•เน เธชเธฐเธเธฒเธ เธเธ”เธซเธกเธฒเธข เธ•เธถเธ เธเธฃเธดเธขเธฒเธกเธฑเธเธเธฐเธ•เนเธญเธเน€เธเนเธ Passive Voice (Be + V3) เน€เธเธฃเธฒเธฐเธชเธดเนเธเธเธญเธเธ—เธณเธเธฃเธดเธขเธฒเน€เธญเธเนเธกเนเนเธ”เน!'
    ]
  },

  // ==================== เธก.4-เธก.6: If-Clauses, Subject-Verb Agreement & Error Identification ====================
  {
    id: 'eng-m4-m6-conditionals-error',
    grade: 'm4',
    gradeLabel: 'เธก.4-เธก.6',
    subject: 'english',
    subjectLabel: 'เธ เธฒเธฉเธฒเธญเธฑเธเธเธคเธฉ',
    title: 'Conditional Sentences (If-Clauses), Subject-Verb Agreement & Error Detection',
    chapter: 'Advanced English Grammar (TGAT1 & A-Level เธ เธฒเธฉเธฒเธญเธฑเธเธเธคเธฉ)',
    summary: 'เธชเธกเธเธฒเธฃเน€เธเธทเนเธญเธเนเธ 4 เนเธเธ (Type 0, 1, 2, 3), เธเธ Subject-Verb Agreement เธเธฃเธฒเธเน€เธเธตเธขเธ, เนเธฅเธฐ 5 เธเธฑเนเธเธ•เธญเธเธเธฑเธเธเธเธเนเธญเธชเธญเธ Error Identification เนเธฅเธฐ Sentence Completion',
    keyConcepts: [
      'Type 0 (เธเธงเธฒเธกเธเธฃเธดเธเธ—เธฒเธเธงเธดเธ—เธขเธฒเธจเธฒเธชเธ•เธฃเน): If + Present Simple, Present Simple',
      'Type 1 (เน€เธเนเธเนเธเนเธ”เนเนเธเธญเธเธฒเธเธ•): If + Present Simple, will + V.inf',
      'Type 2 (เธชเธกเธกเธ•เธดเธชเธดเนเธเธ—เธตเนเนเธกเนเธเธฃเธดเธเนเธเธเธฑเธเธเธธเธเธฑเธ): If + Past Simple (were/V2), would + V.inf',
      'Type 3 (เน€เธชเธตเธขเธ”เธฒเธขเธญเธ”เธตเธ•เธ—เธตเนเนเธเนเนเธเนเธกเนเนเธ”เน): If + Past Perfect (had + V3), would have + V3',
      'Subject-Verb Agreement เธเธเน€เธซเธฅเนเธ:',
      '   - One of the + Plural Noun + "Singular Verb" (เน€เธเนเธ One of the students is...)',
      '   - Either...or / Neither...nor: เธเธฃเธดเธขเธฒเธเธฑเธเธ•เธฒเธก "เธเธฃเธฐเธเธฒเธเธ•เธฑเธงเธ—เธตเนเธญเธขเธนเนเนเธเธฅเนเธเธฃเธดเธขเธฒเธ—เธตเนเธชเธธเธ”"',
      '   - Along with, Together with, As well as: เธเธฃเธดเธขเธฒเธเธฑเธเธ•เธฒเธก "เธเธฃเธฐเธเธฒเธเธ•เธฑเธงเธซเธเนเธฒเธชเธธเธ”"'
    ],
    formulas: [
      { name: 'เธชเธนเธ•เธฃเธเธณ If-Clause 4 เนเธเธ', latex: '\\text{Type 1: If } V_1, \\text{will } V_{\\text{inf}} \\quad | \\quad \\text{Type 2: If } V_2, \\text{would } V_{\\text{inf}} \\quad | \\quad \\text{Type 3: If had } V_3, \\text{would have } V_3' },
      { name: 'Inversion (เธเธฒเธฃเธฅเธฐ If)', latex: '\\text{If I had known} \\iff \\text{Had I known...} \\quad | \\quad \\text{If I were you} \\iff \\text{Were I you...}' }
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
      '๐’ก เธ—เธฃเธดเธเน€เธเธฅเธเธเธณ If-Clause เนเธซเนเธเธถเนเธเนเธ: "If 1 will เธเธนเนเธเธฑเธเธเนเธญเธ 1 / If 2 would เธเธนเนเธเธฑเธเธเนเธญเธ 2 / If 3 would have V3 เธเธนเนเธเธฑเธ had V3!" เธ—เนเธญเธเธฃเธญเธเน€เธ”เธตเธขเธงเธ—เธณเธเนเธญเธชเธญเธเนเธ”เนเธ—เธฑเนเธเธเธตเธงเธดเธ•!',
      '๐’ก เน€เธเนเธเธฅเธดเธชเธ•เน 5 เธชเน€เธ•เนเธเธเธฃเธฒเธ Error Identification: 1) เธซเธฒ Verb เนเธ—เนเธเธญเธเธเธฃเธฐเนเธขเธ -> 2) เน€เธเนเธเธงเนเธฒเธเธฃเธฐเธเธฒเธเน€เธญเธเธเธเธเน/เธเธซเธนเธเธเธเน -> 3) เน€เธเนเธ Active/Passive Voice -> 4) เน€เธเนเธ Tense เนเธฅเธฐเธเธนเนเธเธณเน€เธเธทเนเธญเธก -> 5) เน€เธเนเธ Part of Speech (เน€เธเนเธ Adjective เธเธขเธฒเธข Noun, Adverb เธเธขเธฒเธข Verb)'
    ]
  }
];
