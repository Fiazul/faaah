const vscode = require('vscode');
const path = require('path');
const { execSync } = require('child_process');

function playSound(filePath) {
  const p = JSON.stringify(filePath);
  try {
    if (process.platform === 'win32') execSync(`powershell -c (New-Object Media.SoundPlayer ${p}).PlaySync()`);
    else if (process.platform === 'darwin') execSync(`afplay ${p}`);
    else execSync(`ffplay -nodisp -autoexit ${p} 2>/dev/null || aplay ${p}`);
  } catch {}
}

function activate(context) {
  const successSound = path.join(context.extensionPath, 'succcess.flac');
  const faahSound = path.join(context.extensionPath, 'faah.flac');

  vscode.tasks.onDidStartTask(() => {
    playSound(successSound);
  });

  vscode.tasks.onDidEndTask(e => {
    if (e.execution.task.name.toLowerCase().includes('build') ||
        e.execution.task.name.toLowerCase().includes('run')) {
      // task ended normally - optional extra sound
    }
  });

  vscode.debug.onDidStartDebugSession(() => {
    playSound(successSound);
  });

  vscode.debug.onDidTerminateDebugSession(() => {
    // fires on both crash and normal stop
  });

  // Listen for debug output to detect crashes
  vscode.debug.onDidReceiveDebugSessionCustomEvent(e => {
    if (e.event === 'exited' && e.body?.exitCode !== 0) {
      playSound(faahSound);
    }
  });

  // Terminal exit detection via task process end
  vscode.tasks.onDidEndTaskProcess(e => {
    if (e.exitCode === 0) playSound(successSound);
    else playSound(faahSound);
  });

  // Track manual terminal commands
  vscode.window.onDidEndTerminalShellExecution?.(e => {
    if (e.exitCode === 0) playSound(successSound);
    else playSound(faahSound);
  });
}

function deactivate() {}
module.exports = { activate, deactivate };