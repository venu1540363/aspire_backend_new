import type { Schema, Attribute } from '@strapi/strapi';

export interface DetailedBlogsComponent extends Schema.Component {
  collectionName: 'components_detailed_blogs_components';
  info: {
    displayName: 'Component';
  };
  attributes: {
    blog: Attribute.Media;
    para1SubHeading: Attribute.String;
    para1Des: Attribute.Text;
  };
}

export interface TextDynamic extends Schema.Component {
  collectionName: 'components_text_dynamics';
  info: {
    displayName: 'dynamic';
  };
  attributes: {
    ead: Attribute.Component<'text.fdv'>;
  };
}

export interface TextFdv extends Schema.Component {
  collectionName: 'components_text_fdvs';
  info: {
    displayName: 'fdv';
  };
  attributes: {};
}

export interface TextTestt extends Schema.Component {
  collectionName: 'components_text_testts';
  info: {
    displayName: 'testt';
  };
  attributes: {
    media: Attribute.Media;
    mvnn: Attribute.String;
    mobil3: Attribute.BigInteger;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'detailed-blogs.component': DetailedBlogsComponent;
      'text.dynamic': TextDynamic;
      'text.fdv': TextFdv;
      'text.testt': TextTestt;
    }
  }
}
