# markdown-cli-renderer

[![Build Status](https://img.shields.io/travis/malcp/markdown-cli-renderer/master.svg?style=flat)](https://travis-ci.org/malcp/markdown-cli-renderer)
[![NPM version](https://img.shields.io/npm/v/markdown-cli-renderer.svg?style=flat)](https://www.npmjs.org/package/markdown-cli-renderer)

> Markdown to html conversion tool.

Simple conversion tool that just works. It supports PlantUML, math typesetting and mermaid. Graphics are embedded into the HTML so only one file is generated.

This tool relies on [@shd101wyy/mume](https://github.com/shd101wyy/mume).

## Install

```bash
sudo npm install markdown-cli-renderer -g
```

## Uninstall

```bash
sudo npm uninstall markdown-cli-renderer -g
```

## Usage

```bash
markdown-cli-renderer <origin file path> <destination file path>
```

## Bugs

When you find issues, please report them:

* web: [https://github.com/malcp/markdown-cli-renderer/issues](https://github.com/malcp/markdown-cli-renderer/issues)

Be sure to include all of the output from the command that didn't work as expected.

## Install from source

### Build and install

```bash
npm install && npm run build && sudo npm install -g
```
