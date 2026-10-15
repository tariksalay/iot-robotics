# IoT and Cognitive Robotics Experiments: project walkthrough

[Overview](../README.md) · [Code reference](CODE_REFERENCE.md) · [Development guide](DEVELOPMENT.md)

## Each exercise has its own runtime

The repository mixes Arduino sketches, Python scripts, Node-RED JSON, and historical cloud/conversational artifacts. Choose an exercise, then inspect its source, hardware, and documentation together. There is no repository-wide deployment command.

| Area | Contents |
| --- | --- |
| [ICP-1](../ICP-1), [ICP-2](../ICP-2), [ICP-3](../ICP-3), [ICP-4](../ICP-4) | Device/sketch work; ICP-3 has barometer, dust, light, temperature, and UV source |
| [ICP-5](../ICP-5) | Flow export containing weather, email, and Twitter node types |
| [ICP-6](../ICP-6) | Change, file/HTTP, range, switch, and report-by-exception flow examples |
| [ICP-7](../ICP-7) | Custom Node-RED runtime JavaScript, editor HTML, and package metadata |
| [LAB1](../LAB1) | Combined sensor/display sketch material |
| [MOD2-ICP1](../MOD2-ICP1) through [MOD2-ICP7](../MOD2-ICP7) | Later integrations, with different source types and requirements |
| [MOD2-ICP2](../MOD2-ICP2) | Legacy Flask/audio/ML copy, separate from the standalone audio repository |
| [MOD2-ICP3](../MOD2-ICP3) | Preview-first Python 3 Twitter/Twython exercise |
| [MOD2-ICP4](../MOD2-ICP4), [MOD2-ICP5](../MOD2-ICP5) | Robot-motion sketches and PiCamera scripts |
| [PROJECT](../PROJECT) | Original course-project materials |
| [tests](../tests) | Software-only checks |

Some `.txt` files contain Arduino code; others contain JSON exports. Inspect the contents before copying into an Arduino sketch or importing into Node-RED. Existing images and videos are historical documentation rather than evidence of a fresh hardware run.

## Node-RED objects

A custom node includes an editor definition (`.html`), runtime handler (`.js`), and package mapping (`package.json`). Node-RED constructs an instance from configuration. Its input handler receives `msg`, checks/transforms `msg.payload`, and sends the message onward or reports an error.

| Runtime | Input | Behavior |
| --- | --- | --- |
| [CtoF.js](../ICP-7/Source%20Code/CtoF/CtoF.js) | Finite number or nonempty numeric string | Registers `CtoF` and sends `C * 9/5 + 32` |
| [lower-case.js](../ICP-7/Source%20Code/lower/lower-case.js) | String | Sends a lowercase payload; reports invalid types |
| [lowcase copy](../ICP-7/lowcase/lower-case.js) | String | Preserved duplicate exercise with the same validation |

The tests use an event-emitter-backed stand-in for registration and capture sends/errors. They do not install the package into a live Node-RED workspace.

## Sketch, camera, and service objects

Arduino `setup()` initializes an exercise; `loop()` repeats its work. Sketch-specific helpers include `updatebeat`, `interruptSetup`, `updateTemp`, and robot commands `Forward`, `Reverse`, `LeftTurn`, and `RightTurn`. The reference identifies the actual files and declared libraries rather than suggesting one universal wiring setup.

Both camera scripts expose `capture(output, count, delay, preview)`: create a folder, open a legacy `PiCamera` with a context manager, optionally show preview, capture numbered images, and close the resource. This still requires the older `picamera` stack and is not a Picamera2 migration.

The Twitter script’s `main(argv)` prints a preview by default. Only `--send` imports Twython, reads four `TWITTER_*` variables, and submits text. Its current service/account-tier compatibility is unverified; validation sends nothing.

## Inspect integrations before use

The ICP-5 export includes email and Twitter output node types. Importing historical flows may require vendor packages, endpoints, and credentials, and can activate outbound actions. The local tests do not execute those integrations. The [wiki](https://github.com/tariksalay/iot-robotics/wiki) provides historical course context.

The duplicate ML source in MOD2-ICP2 retains legacy assumptions. Changes in the standalone [audio project](https://github.com/tariksalay/deep-learning-audio-specification-app) do not automatically update that copy. Hardware validation, live services, and those legacy scripts remain outside the checked software paths.
