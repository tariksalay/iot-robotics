from contextlib import redirect_stdout
import io
from pathlib import Path
import runpy
import unittest
from unittest.mock import patch


class TwitterPreviewTests(unittest.TestCase):
    def test_preview_needs_no_credentials_or_twython(self):
        path = Path(__file__).resolve().parents[1] / 'MOD2-ICP3/SourceCode/twitterTest.txt'
        module = runpy.run_path(str(path))
        output = io.StringIO()
        with patch.dict('os.environ', {}, clear=True), redirect_stdout(output):
            module['main'](['--text', 'Synthetic local preview'])
        self.assertEqual(output.getvalue(), 'Preview only: Synthetic local preview\n')


if __name__ == '__main__':
    unittest.main()
