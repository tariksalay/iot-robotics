# Development and validation

Original exercise directories, wiring documentation, and recordings remain in place. Editor state, bytecode, and OS thumbnail files are removed from the tracked tree. Python-camera examples now create a portable output folder and close the camera reliably.

Node tests require Node.js 22 or later and no npm dependencies:

```sh
node --test tests/nodes.test.js
```

The Celsius-to-Fahrenheit node now registers as `CtoF`, matching its editor definition, and transforms `msg.payload` using `C * 9/5 + 32`. Lowercase nodes reject nonstring input rather than throwing in the flow.

The two camera examples support `--output`, `--count`, `--delay`, and optional `--preview`. They still use legacy `picamera` and require a compatible Raspberry Pi camera stack. They have not been tested on physical hardware and are not claimed to support Picamera2. Arduino sketches require their specific boards/sensors; Node-RED flows may require local node packages and credentials. The duplicate historical ML application under MOD2-ICP2 remains legacy coursework; the separate audio-classification repository contains the maintained modernization proposal.

Do not install every exercise into one global environment or import old Node-RED flows into a live automation workspace without inspecting their endpoints. Hardware behavior is outside the Node unit-test coverage.

The Twitter/Twython exercise is now Python 3 and previews text by default. Use `--send` only when you intend to post, with Twython installed and the four `TWITTER_*` environment variables configured. No live posting or account access is performed by validation. Run `python -m unittest discover -s tests -v` to check preview behavior. Current API account/tier compatibility is unverified.
