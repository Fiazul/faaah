# FAAAAAAAAAAAAH! Sound

A VS Code extension that plays a "FAAAH!" sound whenever something breaks.

## Features

- **Debug Failures**: Plays sound when a debug session ends with a non-zero exit code.
- **Task Failures**: Plays sound when a VS Code Task (build, run, etc.) fails.
- **Terminal Failures**: Plays sound when a command in the integrated terminal (like `python script.py`) fails.
- **Success Sounds**: Plays a pleasant success sound when tasks or terminal commands succeed.

## Requirements

The extension requires one of the following to be installed on your system to play sounds:
- **Linux**: `ffplay` (part of ffmpeg) or `aplay`.
- **macOS**: `afplay` (pre-installed).
- **Windows**: PowerShell (pre-installed).

## Usage

Just install and work as usual! The extension will automatically listen for failures.

---
**Happy coding (without the FAAAHs)!**
