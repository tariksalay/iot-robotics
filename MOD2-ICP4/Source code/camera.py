"""Capture images with the legacy PiCamera API; requires Raspberry Pi hardware."""
import argparse
from pathlib import Path
from time import sleep


def capture(output, count=5, delay=2.0, preview=False):
    if count < 1 or delay < 0:
        raise ValueError('count must be positive and delay nonnegative')
    from picamera import PiCamera
    output = Path(output)
    output.mkdir(parents=True, exist_ok=True)
    with PiCamera() as camera:
        if preview:
            camera.start_preview()
        try:
            for index in range(count):
                sleep(delay)
                camera.capture(str(output / f'image{index}.jpg'))
        finally:
            if preview:
                camera.stop_preview()


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', type=Path, default=Path('pictures'))
    parser.add_argument('--count', type=int, default=5)
    parser.add_argument('--delay', type=float, default=2.0)
    parser.add_argument('--preview', action='store_true')
    args = parser.parse_args()
    capture(args.output, args.count, args.delay, args.preview)
