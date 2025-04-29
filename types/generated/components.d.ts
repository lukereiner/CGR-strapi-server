import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentGroupGroup extends Struct.ComponentSchema {
  collectionName: 'components_component_group_groups';
  info: {
    description: '';
    displayName: 'group';
    icon: 'user';
  };
  attributes: {
    dateInfo: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component-group.group': ComponentGroupGroup;
    }
  }
}
