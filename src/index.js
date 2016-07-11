/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 */

// import 'font-awesome/css/font-awesome.css';

if (process.env.BROWSER) {
  require('font-awesome/css/font-awesome.css');
}

import Icon from './Icon';
import IconStack from './IconStack';

export {
  Icon as default,
  Icon,
  IconStack
};
