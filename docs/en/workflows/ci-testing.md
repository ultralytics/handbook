---
description: Ultralytics CI/CD workflow covering GitHub Actions, automated tests, code coverage with Codecov, and quality checks for YOLO11 development.
keywords: Ultralytics, CI/CD, continuous integration, testing, GitHub Actions, pytest, Codecov, code quality, YOLO11, Docker
---

# CI/Testing Workflow 🧪

Continuous Integration (CI) is essential for maintaining high-quality code by catching issues early. This guide covers CI testing and quality checks for [Ultralytics](https://www.ultralytics.com/) projects.

## CI Actions 🔄

All PRs must pass automated CI checks before merging. Our CI pipeline includes:

### [CI Tests](https://github.com/ultralytics/ultralytics/actions/workflows/ci.yml)

Primary CI test running unit tests, linting checks, and comprehensive tests.

### [Docker Deployment](https://github.com/ultralytics/ultralytics/actions/workflows/docker.yml)

Validates deployment using Docker, ensuring Dockerfile and related scripts work correctly.

### [Broken Links](https://github.com/ultralytics/ultralytics/actions/workflows/links.yml)

Scans codebase for broken or dead links in markdown and HTML files.

### [CodeQL Analysis](https://github.com/ultralytics/ultralytics/actions/workflows/codeql.yaml)

GitHub's semantic analysis tool for finding potential security vulnerabilities and maintaining code quality.

### [PyPI Publishing](https://github.com/ultralytics/ultralytics/actions/workflows/publish.yml)

Validates project can be packaged and published to PyPI without errors.

## Platform Testing 🖥️

Tests run on multiple environments:

- **OS**: Ubuntu, Windows, macOS
- **Python**: 3.8, 3.9, 3.10, 3.11, 3.12

## Code Coverage 📊

We use [Codecov](https://about.codecov.io/) to measure and visualize code coverage, providing insights into how well tests exercise the codebase.

### Coverage Integration

Codecov integration provides:

- Detailed coverage insights
- Coverage comparisons between commits
- Visual overlays on code showing covered lines
- Coverage percentage for the `ultralytics` package

View full coverage details at [codecov.io/github/ultralytics/ultralytics](https://app.codecov.io/github/ultralytics/ultralytics).

### Understanding Coverage

Code coverage shows what percentage of code is executed during tests. High coverage indicates well-tested code but doesn't guarantee absence of bugs. Coverage helps identify untested areas that might be prone to errors.

## Running Tests Locally 🖥️

### Install Development Dependencies

```bash
pip install -e ".[dev]"
```

### Run All Tests

```bash
pytest tests/
```

### Run Specific Tests

```bash
# Single file
pytest tests/test_engine.py

# Single test function
pytest tests/test_engine.py::test_train

# Tests matching pattern
pytest -k "export"

# Slow tests only
pytest -m slow
```

### Run with Coverage

```bash
pytest --cov=ultralytics tests/
```

### Parallel Testing

```bash
# Install pytest-xdist
pip install pytest-xdist

# Run tests in parallel
pytest -n auto
```

## Writing Tests ✍️

### Test Structure

```python
from pathlib import Path

from ultralytics import YOLO


def test_model_export():
    """Test ONNX model export."""
    model = YOLO("yolo11n.pt")
    model.export(format="onnx")
    assert Path("yolo11n.onnx").exists()
```

### Best Practices

- **Descriptive names**: `test_export_onnx_format()` not `test_1()`
- **Single assertion**: Test one thing per function
- **Fast tests**: Use small models/datasets
- **Fixtures**: Use pytest fixtures for setup/teardown
- **Markers**: `@pytest.mark.slow` for long-running tests

### Test Organization

```
tests/
├── test_engine.py      # Training, validation, prediction
├── test_nn.py          # Model architecture
├── test_data.py        # Dataset handling
├── test_utils.py       # Utility functions
└── test_exports.py     # Export formats
```

### Test Markers

```python
import pytest


@pytest.mark.slow
def test_full_training():
    """Test full training run (slow)."""
    model = YOLO("yolo11n.pt")
    model.train(data="coco128.yaml", epochs=1)
```

## Code Quality Checks 🎯

### Formatting with Ruff

```bash
# Check formatting
ruff check ultralytics/

# Auto-fix issues
ruff check --fix ultralytics/

# Format code
ruff format ultralytics/
```

Learn more about code standards in our [development workflow](development.md).

### Type Checking

```bash
# Run mypy (where configured)
mypy ultralytics/
```

### Docstring Formatting

```bash
# Install the Python package
pip install ultralytics-actions
```

```bash
# Format docstrings in the working directory
ultralytics-actions-format-python-docstrings .
```

## CI Troubleshooting 🔧

### Tests Pass Locally But Fail in CI

Common causes:

- **Platform-specific issues**: Test on target OS
- **Python version differences**: Check version compatibility
- **Missing dependencies**: Verify CI config
- **Timing/concurrency issues**: Add retries or increase timeouts

### Slow CI Runs

Solutions:

- Use `@pytest.mark.slow` for expensive tests
- Mock external dependencies
- Reduce test dataset sizes
- Parallelize with `pytest-xdist`

### Flaky Tests

Fixes:

- Add retries for network-dependent tests
- Increase timeouts for slow operations
- Fix race conditions in async code
- Use deterministic random seeds

## Performance Benchmarks 📈

CI tracks key metrics:

- Inference speed (FPS)
- Memory usage
- Model size
- Export times

Significant regressions block merging. If metrics change:

1. Verify change is expected
2. Document reason in PR
3. Get approval from maintainers

## CI Status 📋

Check CI status for all Ultralytics repositories at [docs.ultralytics.com/help/CI](https://docs.ultralytics.com/help/CI/).

### Main Repository Badges

![CI](https://github.com/ultralytics/ultralytics/actions/workflows/ci.yml/badge.svg)
![Docker](https://github.com/ultralytics/ultralytics/actions/workflows/docker.yml/badge.svg)
![Links](https://github.com/ultralytics/ultralytics/actions/workflows/links.yml/badge.svg)
![PyPI](https://github.com/ultralytics/ultralytics/actions/workflows/publish.yml/badge.svg)
![codecov](https://codecov.io/gh/ultralytics/ultralytics/branch/main/graph/badge.svg?token=HHW7IIVFVY)

## Skipping CI Checks ⚠️

Add `[skip ci]` to commit message to skip CI (use sparingly):

```bash
git commit -m "Update README [skip ci]"
```

Only for:

- Documentation-only changes
- Non-code file updates
- Emergency hotfixes (with approval)

## Resources 📚

- [Official CI Guide](https://docs.ultralytics.com/help/CI/) - Complete CI documentation
- [Development Workflow](development.md) - PR process and code standards
- [GitHub Actions Docs](https://docs.github.com/en/actions) - CI configuration
- [pytest Documentation](https://docs.pytest.org/en/stable/) - Testing framework
- [Codecov](https://app.codecov.io/github/ultralytics/ultralytics) - Coverage reports
