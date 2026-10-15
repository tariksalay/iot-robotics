# Code and artifact reference

[Overview](../README.md) · [Walkthrough](PROJECT_GUIDE.md) · [Development guide](DEVELOPMENT.md)

This reference describes the files on this branch. Function names are navigation aids; the walkthrough explains how their inputs, state, and outputs fit together.

## Choose a runtime before opening a file

This archive contains several independent systems. An Arduino sketch, Node-RED flow, Raspberry Pi Python script, and legacy Flask exercise do not share one installation procedure. Source sometimes uses `.txt`; identify the contents before choosing an editor or importing it.

## Sensor and robotics sketches

| Source | Defined helpers | Interpretation |
| --- | --- | --- |
| [ICP-1/Source/ICP-1.txt](../ICP-1/Source/ICP-1.txt) | `setup`, `loop` | Hardware-oriented sketch; inspect pins, libraries, units, timing, and wiring in source. |
| [ICP-2/SourceCode.txt](../ICP-2/SourceCode.txt) | `setup`, `loop`, `updatebeat`, `connectWiFi`, `interruptSetup` | Hardware-oriented sketch; inspect pins, libraries, units, timing, and wiring in source. |
| [ICP-3/Source Code/Barometer.txt](../ICP-3/Source%20Code/Barometer.txt) | `setup`, `loop` | Hardware-oriented sketch; inspect pins, libraries, units, timing, and wiring in source. |
| [ICP-3/Source Code/Dust.txt](../ICP-3/Source%20Code/Dust.txt) | `setup`, `loop` | Hardware-oriented sketch; inspect pins, libraries, units, timing, and wiring in source. |
| [ICP-3/Source Code/Light.txt](../ICP-3/Source%20Code/Light.txt) | `setup`, `loop` | Hardware-oriented sketch; inspect pins, libraries, units, timing, and wiring in source. |
| [ICP-3/Source Code/Temperature.txt](../ICP-3/Source%20Code/Temperature.txt) | `setup`, `loop` | Hardware-oriented sketch; inspect pins, libraries, units, timing, and wiring in source. |
| [ICP-3/Source Code/UV.txt](../ICP-3/Source%20Code/UV.txt) | `setup`, `loop` | Hardware-oriented sketch; inspect pins, libraries, units, timing, and wiring in source. |
| [ICP-4/Source Code/ICP_4.txt.txt](../ICP-4/Source%20Code/ICP_4.txt.txt) | `setup`, `loop` | Hardware-oriented sketch; inspect pins, libraries, units, timing, and wiring in source. |
| [LAB1/SourceCode/Code.txt](../LAB1/SourceCode/Code.txt) | `setup`, `loop`, `updateTemp`, `connectWiFi` | Hardware-oriented sketch; inspect pins, libraries, units, timing, and wiring in source. |
| [MOD2-ICP4/Source code/sourceCode.txt](../MOD2-ICP4/Source%20code/sourceCode.txt) | `setup`, `loop`, `bluetooth`, `Forward`, `Reverse`, `LeftTurn`, `RightTurn` | Hardware-oriented sketch; inspect pins, libraries, units, timing, and wiring in source. |
| [MOD2-ICP5/Source Code/Arduino.ino](../MOD2-ICP5/Source%20Code/Arduino.ino) | `setup`, `loop`, `bluetooth`, `Forward`, `Reverse`, `LeftTurn`, `RightTurn` | Hardware-oriented sketch; inspect pins, libraries, units, timing, and wiring in source. |
| [MOD2-ICP5/Source Code/sourceCode.txt](../MOD2-ICP5/Source%20Code/sourceCode.txt) | `setup`, `loop`, `bluetooth`, `Forward`, `Reverse`, `LeftTurn`, `RightTurn` | Hardware-oriented sketch; inspect pins, libraries, units, timing, and wiring in source. |

`setup` initializes the board and attached devices; `loop` repeatedly samples inputs or issues commands. Other helpers above belong to their local sketch. Similarly named helpers in different folders are not a shared firmware API. Library includes identify dependencies; they do not verify that a particular board or sensor is connected safely or configured correctly.

## Node-RED flows

| Export | Node types found in the file |
| --- | --- |
| [ICP-5/Source Code/flows.json](../ICP-5/Source%20Code/flows.json) | `debug`, `e-mail`, `function`, `inject`, `openweathermap`, `tab`, `twitter out`, `twitter-credentials`, `ui_base`, `ui_group` |
| [ICP-6/Source/change_node.txt](../ICP-6/Source/change_node.txt) | `change`, `debug`, `inject`, `tab` |
| [ICP-6/Source/file_output.txt](../ICP-6/Source/file_output.txt) | `file in`, `http in`, `http response`, `tab` |
| [ICP-6/Source/http_output.txt](../ICP-6/Source/http_output.txt) | `http in`, `http response`, `tab`, `template` |
| [ICP-6/Source/random_number_generator.txt](../ICP-6/Source/random_number_generator.txt) | `debug`, `function`, `inject`, `switch`, `tab` |
| [ICP-6/Source/range_node.txt](../ICP-6/Source/range_node.txt) | `debug`, `inject`, `range`, `tab` |
| [ICP-6/Source/rbe.txt](../ICP-6/Source/rbe.txt) | `debug`, `inject`, `rbe`, `tab` |

A flow export is configuration, not a library module. Inspect email/Twitter output nodes and endpoints before deployment, then configure your own accounts locally. Historical exports do not prove current service compatibility.

## Custom nodes and Python entry points

| Source | Component and responsibility |
| --- | --- |
| [ICP-7/Source Code/CtoF/CtoF.js](../ICP-7/Source%20Code/CtoF/CtoF.js) | `CelsiusToFahrenheit`: Convert a finite numeric Celsius payload to Fahrenheit; reject invalid input. |
| [ICP-7/Source Code/lower/lower-case.js](../ICP-7/Source%20Code/lower/lower-case.js) | `LowerCaseNode`: Lowercase string payloads; reject non-string input. |
| [ICP-7/lowcase/lower-case.js](../ICP-7/lowcase/lower-case.js) | `LowerCaseNode`: Lowercase string payloads; reject non-string input. |
| [MOD2-ICP3/SourceCode/twitterTest.txt](../MOD2-ICP3/SourceCode/twitterTest.txt) | `main(argv)`: preview by default; only `--send` loads the Twitter client and requires environment credentials. |
| [MOD2-ICP4/Source code/camera.py](../MOD2-ICP4/Source%20code/camera.py) | `capture`: lazily open the legacy PiCamera API and write a numbered image sequence; optional preview is cleaned up. |
| [MOD2-ICP5/Source Code/camera.py](../MOD2-ICP5/Source%20Code/camera.py) | `capture`: a separate copy of the camera exercise with the same resource-managed interface. |

The custom-node `.html` files define editor configuration/help and their adjacent `package.json` files define Node-RED package metadata. The Python camera examples require compatible Raspberry Pi hardware and the legacy camera stack; importing a module does not prove camera compatibility.

## Legacy audio exercise

The `MOD2-ICP2` folder includes a separate Flask/audio/ML copy (`app.py`, `WebApp/main_page.py`, and `MachineLearning/machinelearning.py`). It was not modernized with the standalone audio repository. Treat its dependencies, upload behavior, model code, and integration assumptions as historical. Do not transfer the standalone repository’s validation claims to this copy.

## Checks

[tests/nodes.test.js](../tests/nodes.test.js) checks the custom nodes with a fake Node-RED runtime; [tests/test_twitter_preview.py](../tests/test_twitter_preview.py) checks the non-sending Python preview path. These four tests do not run physical sensors, robot motors, cameras, external accounts, or deployed Node-RED flows. The development guide describes the isolated checks and configuration limits.
