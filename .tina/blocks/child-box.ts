import type { Template } from 'tinacms';
import { templates } from '.';

import { fields } from '../fields';
import { mapSettingsToTinaComponents } from '../utils/chakra';
import { boxBlock } from './box';
import { dividerBlock } from './divider';
import { defaults } from './_defaults';

const settings = mapSettingsToTinaComponents();

export const childBoxBlock: Template = {
  label: 'Box',
  name: 'childBox',
  ui: {
    defaultItem: defaults.box,
    itemProps: (item) => ({
      key: item.title,
      label: item.title,
    }),
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true,
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
      templates: [dividerBlock],
    },
    {
      type: 'string',
      name: 'poly',
      label: 'Box Variants',
      options: [
        { label: 'box', value: 'box' },
        { label: 'stack', value: 'stack' },
        { label: 'card', value: 'card' },
        { label: 'hidden', value: 'hidden' },
        // @TOOD: add grid support
      ],
    },
    {
      type: 'object',
      name: 'settings',
      label: 'Settings',
      fields: [
        ...(fields.box as Template['fields']),
        ...(fields.spacing as Template['fields']),
        ...(fields?.flex as Template['fields']),
        ...(fields.decorative as Template['fields']),
        ...(fields.typography as Template['fields']),
      ],
    },
  ],
};