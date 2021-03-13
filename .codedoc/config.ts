
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/codedoc-demo'            // --> your github pages namespace. remove if you are using a custom domain.
  },
  page: {
    title: {
      base: 'Codedoc Demo'                // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'dzeyelid',                   // --> your github username (where your repo is hosted)
      repo: 'codedoc-demo',               // --> your github repo name
    }
  },
});
