import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.n0t.space',
  integrations: [
    starlight({
      title: 'PHLIPPED docs',
      description: 'Physical Layered Intrusion Prevention, Protection & Evaluation Defense',
      social: {
        github: 'https://github.com/phlipped',
      },
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Introduction', slug: 'start/introduction' },
            { label: 'Scope', slug: 'start/scope' },
            { label: 'Architecture', slug: 'start/architecture' },
          ],
        },
        {
          label: 'Threat Catalog',
          autogenerate: { directory: 'catalog' },
        },
        {
          label: 'Assessment',
          autogenerate: { directory: 'assessment' },
        },
        {
          label: 'Detection',
          autogenerate: { directory: 'detection' },
        },
        {
          label: 'Hardening',
          autogenerate: { directory: 'hardening' },
        },
        {
          label: 'Framework mappings',
          autogenerate: { directory: 'mappings' },
        },
      ],
    }),
  ],
});
