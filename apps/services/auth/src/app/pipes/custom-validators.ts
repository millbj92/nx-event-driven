import * as BaseJoi from 'joi';

interface ExtendedStringSchema extends BaseJoi.StringSchema {
  specialChar(): this;
  camelCase(): this;
}

interface ExtendedJoi extends BaseJoi.Root {
  string(): ExtendedStringSchema;
}

export const customJoi: ExtendedJoi = BaseJoi.extend((joi) => ({
  base: joi.string(),
  type: typeof String,
  messages: {
    'string.specialChar': 'Must have at least one special character',
    'string.camelCase': 'Must have at least one camel case',
  },
  rules: {
    specialChar: {
      validate(params, value, state, options) {
        // eslint-disable-next-line no-useless-escape
        if (new RegExp(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/).test(value)) {
          return value;
        }
        return this.createError(
          'string.specialChar',
          { v: value },
          state,
          options
        );
      },
    },
    camelCase: {
      validate(params, value: string, state, options) {
        if (new RegExp(/(?=.*[a-z])(?=.*[A-Z])/).test(value)) {
          return value;
        }
        return this.createError(
          'string.camelCase',
          { v: value },
          state,
          options
        );
      },
    },
  },
}));