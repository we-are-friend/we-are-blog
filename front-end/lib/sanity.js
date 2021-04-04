import sanityClient from '@sanity/client';
import { sanityConfig } from 'src/config';

const options = {
  dataset: sanityConfig.SANITY_DATASET_NAME,
  projectId: sanityConfig.SANITY_PROJECT_ID,
  useCdn: sanityConfig.NODE_ENV === 'production',
  // useCdn === true, gives you fast response, it will get you
  // cached data
  // useCdn === false, give you little bit slower response, but
  // latest data
};

export default sanityClient(options);
