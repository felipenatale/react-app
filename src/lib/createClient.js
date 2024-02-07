import * as contentful from 'contentful';

import { spaceID, accessToken} from '../constant';

export const client = contentful.createClient({
    space: spaceID,
    accessToken: accessToken
});