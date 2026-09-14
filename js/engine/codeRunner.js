/**
 * SciCode Nexus - Sandboxed Code Runner
 * Executes student code safely with simulated console output and test case evaluation.
 */

export class CodeRunner {
  constructor(consoleOutputElement) {
    this.outputElem = consoleOutputElement;
    this.logs = [];
  }

  clearConsole() {
    this.logs = [];
    if (this.outputElem) {
      this.outputElem.innerHTML = '<span class="text-slate-500 font-mono text-xs">// Terminal Output Ready...</span>';
    }
  }

  appendLog(type, ...args) {
    const formatted = args.map(a => {
      if (typeof a === 'object') {
        try { return JSON.stringify(a, null, 2); } catch (e) { return String(a); }
      }
      return String(a);
    }).join(' ');

    this.logs.push({ type, text: formatted });
    this.renderLogs();
  }

  renderLogs() {
    if (!this.outputElem) return;
    this.outputElem.innerHTML = this.logs.map(log => {
      const color = log.type === 'error' ? 'text-rose-400' :
                    log.type === 'warn' ? 'text-amber-400' :
                    log.type === 'test-pass' ? 'text-emerald-400 font-semibold' :
                    log.type === 'test-fail' ? 'text-rose-400 font-semibold' :
                    'text-cyan-300';
      const icon = log.type === 'test-pass' ? '✓ ' :
                   log.type === 'test-fail' ? '✗ ' :
                   log.type === 'error' ? '✕ ' : '> ';
      return `<div class="font-mono text-xs py-0.5 leading-relaxed flex items-start gap-1 ${color}">
        <span class="opacity-60 select-none">${icon}</span>
        <pre class="whitespace-pre-wrap break-all flex-1">${this.escapeHtml(log.text)}</pre>
      </div>`;
    }).join('');
    this.outputElem.scrollTop = this.outputElem.scrollHeight;
  }

  escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /**
   * Run raw user JavaScript code and capture console.log
   */
  runCode(codeString) {
    this.clearConsole();

    // Create intercepted console
    const fakeConsole = {
      log: (...args) => this.appendLog('log', ...args),
      warn: (...args) => this.appendLog('warn', ...args),
      error: (...args) => this.appendLog('error', ...args),
      info: (...args) => this.appendLog('info', ...args)
    };

    try {
      // Wrap in Function with isolated console
      const runFn = new Function('console', `"use strict";\n${codeString}`);
      const startTime = performance.now();
      const returnedVal = runFn(fakeConsole);
      const duration = (performance.now() - startTime).toFixed(2);

      if (returnedVal !== undefined) {
        this.appendLog('log', `Return value: ${JSON.stringify(returnedVal)}`);
      }
      this.appendLog('info', `Executed successfully in ${duration}ms`);
      return { success: true, duration };
    } catch (err) {
      this.appendLog('error', `${err.name}: ${err.message}`);
      return { success: false, error: err.message };
    }
  }

  /**
   * Run unit tests against the user function
   */
  runLessonTests(codeString, lesson) {
    this.clearConsole();
    this.appendLog('info', `Running test suite for: ${lesson.title}...`);

    try {
      // Evaluate user code in isolated scope
      const evalWrapper = new Function(`
        "use strict";
        ${codeString}
        const fns = {};
        try { if (typeof calculateRange === 'function') fns.fn = calculateRange; } catch(e){}
        try { if (typeof solveQuadratic === 'function') fns.fn = solveQuadratic; } catch(e){}
        try { if (typeof simulateDropTime === 'function') fns.fn = simulateDropTime; } catch(e){}
        try { if (typeof dotProduct === 'function') fns.fn = dotProduct; } catch(e){}
        return fns.fn;
      `);

      const userFn = evalWrapper();
      if (!userFn || typeof userFn !== 'function') {
        throw new Error('ไม่พบฟังก์ชันที่ระบุในคำสั่ง กรุณาตรวจสอบชื่อฟังก์ชัน');
      }

      const results = lesson.validate(userFn);
      let passCount = 0;

      results.forEach(test => {
        if (test.passed) {
          passCount++;
          this.appendLog('test-pass', `PASS: ${test.name}`);
        } else {
          this.appendLog('test-fail', `FAIL: ${test.name} (Output: ${test.output}, Expected: ${test.expected})`);
        }
      });

      if (passCount === results.length) {
        this.appendLog('test-pass', `🎉 ยินดีด้วย! ผ่านการทดสอบทั้งหมด ${passCount}/${results.length} ข้อ`);
        return { allPassed: true, passCount, total: results.length };
      } else {
        this.appendLog('warn', `ผ่าน ${passCount}/${results.length} ข้อ ลองตรวจสอบตรรกะและสูตรอีกครั้ง`);
        return { allPassed: false, passCount, total: results.length };
      }
    } catch (err) {
      this.appendLog('error', `ข้อผิดพลาด: ${err.message}`);
      return { allPassed: false, error: err.message };
    }
  }
}
