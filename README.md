# IoT and Cognitive Robotics Experiments

**Arduino · Raspberry Pi · Sensors · Node-RED · Python**

A historical collection of hardware, messaging, automation, and conversational-interface exercises. Source snippets, flow exports, wiring references, images, and recordings are grouped by exercise rather than assembled into one supported platform.

## What this project demonstrates

- Connecting device code, local scripts, and flow-based integrations.
- Tracing Node-RED messages and validating their payloads.
- Separating hardware requirements from local software checks.

## Start here

| Read | Use it for |
| --- | --- |
| [Project walkthrough](docs/PROJECT_GUIDE.md) | Purpose, workflow, repository map, and a concrete example |
| [Code and artifact reference](docs/CODE_REFERENCE.md) | Important files, functions, classes, and their responsibilities |
| [Development guide](docs/DEVELOPMENT.md) | Setup, configuration, commands, tests, and remaining limitations |

## Explore locally

Local checks require Python and Node.js 22 or later:

```sh
node --test tests/nodes.test.js
python -m unittest discover -s tests -v
python MOD2-ICP3/SourceCode/twitterTest.txt --text "Local coursework preview"
```

These commands do not start hardware, import live flows, or send a tweet.

## Validation and scope

Three Node.js tests pass for conversion/lowercase handlers and one Python test passes for the Twitter preview. Physical hardware, live Node-RED flows, the duplicate legacy ML app, and external APIs were not exercised.



---

[GitHub profile](https://github.com/tariksalay) · [Portfolio](https://tariksalay.github.io/) · [Earlier README](README_HISTORY.md)

The earlier README is preserved as historical context; the guides above describe this branch's implementation.
