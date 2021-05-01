import sanityClient from '@sanity/client';
import { sanityConfig } from 'src/config';

// useCdn === true, gives you fast response, it will get you
// cached data
// useCdn === false, give you little bit slower response, but
// latest data
const options = {
  dataset: sanityConfig.SANITY_DATASET_NAME,
  projectId: sanityConfig.SANITY_PROJECT_ID,
  useCdn: sanityConfig.NODE_ENV === 'production',
};

export default sanityClient(options);
