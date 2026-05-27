# Ubie Icons

Icons List：https://vitals.ubie.life/elements/icons/

## Installation

```
npm install @ubie/ubie-icons
```

## Development

This repository uses [pnpm](https://pnpm.io/) for package management.

```bash
pnpm install
pnpm run build
pnpm run storybook
```

## Usage

```js
import { Twitter } from '@ubie/ubie-icons';

export const TwitterButton = () => (
  <button type="button">
    <Twitter />
    Twitter
  </button>
);
```

`currentColor` is set for the icon's path, so you can change the color using CSS.

## License

This icon set is licensed under the [MIT License](https://github.com/ubie-oss/ubie-icons/blob/main/LICENSE).
