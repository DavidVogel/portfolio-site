/**
* Creating a sidebar enables you to:
- create an ordered group of docs
- render a sidebar for each doc of that group
- provide next/previous navigation

The sidebars can be generated from the filesystem, or explicitly defined here.

Create as many sidebars as you want.
*/
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'About',
    {
      type: 'category',
      collapsible: true,
      label: `Vital Software Synthesizer`,
      items: [
        'Vital/Overview',
        {
          type: 'category',
          label: `Vital User Guide`,
          collapsible: true,
          items: [
            'Vital/UserGuide/Intro',
            'Vital/UserGuide/Global-Controls-and-Header-Bar',
            'Vital/UserGuide/Modulation',
            'Vital/UserGuide/Oscillators-and-Sampler',
            'Vital/UserGuide/Wavetable-Editor',
            'Vital/UserGuide/Filters',
            'Vital/UserGuide/Envelopes-and-LFOs',
            'Vital/UserGuide/Effects',
            'Vital/UserGuide/Advanced',
          ],
        },
        'Vital/Vital-Code-Docs',
      ],
    },
    {
      type: 'link',
      label: 'Music Theory API',
      href: '/api',
    },
    {
      type: 'category',
      label: `My Music`,
      collapsible: true,
      items: [
        'My-Pieces/Main',
        'My-Pieces/Twelve/Twelve',
      ],
    },
  ],
};

export default sidebars;
