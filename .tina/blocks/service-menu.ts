import { Template } from 'tinacms';

import { fields } from '../fields';
import { defaults } from './_defaults';

export const serviceMenuBlock: Template = {
  label: 'Service Menu',
  name: 'serviceMenu',
  ui: {
    defaultItem: defaults.serviceMenu,
    previewSrc: '/blocks/preview-service-menu.webp',
  },
  fields: fields.services as Template['fields'],
};
