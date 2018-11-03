import { trim } from 'lodash';

export default {
  isEmpty: value => !trim(value),
};
