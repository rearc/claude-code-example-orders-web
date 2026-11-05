# claude-code-example-orders-web

A small web client for [orders-api](https://github.com/rearc/claude-code-example-orders-api),
set up as a **self-contained Claude Code agent**. Part of the
[claude-code-example-team-setup](https://github.com/rearc/claude-code-example-team-setup) example.

| File | What it gives Claude |
|---|---|
| `CLAUDE.md` | What this repo is, how to run it, its conventions |
| `.claude/rules/components.md` | A path-scoped rule: applies when Claude works in `src/components/` |
| `.claude/skills/add-api-call/` | The procedure for calling a new orders-api endpoint |
| `.claude/settings.json` | Permissions, and the plugin this repo turns on: `team-standards` |

This repo turns on only the shared plugin. It has no hook it needs everywhere, so it needs no
plugin of its own.

## Run
```
node --test
```

## Plugins (once per machine)
```
claude plugin marketplace add rearc/claude-code-example-marketplace --scope project
claude plugin install team-standards@example-team-tools --scope project
```
