# GitHub Actions / CI
- Always use the latest stable major version of GitHub Actions.
- Never use `@latest`.
- Use ubuntu-latest as runner.
- Enable pnpm caching when possible.
- Install dependencies using `pnpm install`.
- CI must fail if build or tests fail.