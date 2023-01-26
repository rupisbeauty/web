import type { SchemaField, Template } from 'tinacms';

import { heroBlock } from '../blocks';

export const pages: { fields: SchemaField[] } = {
  fields: [
    {
      type: 'rich-text',
      name: 'body',
      label: 'body',
      isBody: true,
      ui: {},
      templates: [
        heroBlock,
        {
          label: 'Section Title',
          name: 'sectionTitle',
          ui: {
            defaultItem: {
              title: 'This is a Section Title',
            },
          },
          fields: [
            {
              type: 'string',
              label: 'Section Title',
              name: 'title',
            },
          ],
        },
        {
          label: 'About Section',
          name: 'about',
          ui: {
            defaultItem: {
              title: 'About',
              heading: 'Your Neighborhood Beauty Experts',
              subheading: 'This is a subheading',
              caption: 'This is a caption',
              description: 'This a a full description',
              showLicenses: false,
            },
          },
          fields: [
            {
              type: 'string',
              label: 'Title',
              name: 'title',
            },
            {
              type: 'string',
              label: 'Heading',
              name: 'heading',
            },
            {
              type: 'string',
              label: 'Subheading',
              name: 'subheading',
            },
            {
              type: 'string',
              label: 'Caption',
              name: 'caption',
            },
            {
              type: 'string',
              label: 'Description',
              name: 'description',
              ui: {
                component: 'textarea',
              },
            },
            {
              type: 'boolean',
              label: 'Show Licenses?',
              name: 'licenses',
            },
          ],
        },
      ] as Template[],
    },
    {
      type: 'string',
      label: 'Page Title (SEO, Search results) 50-70 chars.',
      name: 'title',
      isTitle: true,
      required: true,
      ui: {
        validate: (value) => {
          if (value.length > 70)
            return `-${Number(value.length) - 70} chars remaining / 70`;
        },
      },
    },
    {
      type: 'string',
      label: 'Description (Seo, Search results) 150-160 chars.',
      name: 'description',
      required: true,
      ui: {
        component: 'textarea',
        validate: (value) => {
          if (value.length > 160)
            return `-${Number(value.length) - 160} chars remaining / 160`;
        },
      },
    },
    {
      type: 'string',
      label: 'backgroundColor',
      name: 'backgroundColor',
      ui: {
        component: 'color',
      },
    },
    {
      type: 'string',
      label: 'color',
      name: 'color',
      ui: {
        component: 'color',
      },
    },
    {
      type: 'boolean',
      name: 'showHeader',
      label: 'Show Header?',
    },
    {
      type: 'boolean',
      name: 'showFooter',
      label: 'Show Footer',
    },
    {
      type: 'boolean',
      name: 'showCta',
      label: 'Show Email Signup CTA?',
    },
    {
      type: 'boolean',
      name: 'showReviews',
      label: 'Show Reviews Footer Title?',
    },
  ],
};
