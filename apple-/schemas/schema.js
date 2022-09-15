// First, we must import the schema creator
// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';
// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them

// We import object and document schemas
import blockContent from './blockContent';
import category from './category';
import localeBlockContent from './locale/BlockContent';
import localeString from './locale/String';
import localeText from './locale/Text';
import product from './product';
import productVariant from './productVariant';
import vendor from './vendor';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    vendor,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
  ]),
});
