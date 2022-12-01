import {Switch} from 'react-native-gesture-handler';
import {icons} from '../../constaints';

export const dataItem = [{
  common: [
    {name: 'language', icons: icons.world, text: 'English'},
    {name: 'Environment', icons: icons.cloud, text: 'Production'},
  ],
  Account: [
    {name: 'Phone number', icons: icons.phone, text: 'English'},
    {name: 'Email', icons: icons.email, text: 'Production'},
  ],
  Secutiry: [
    {name: 'touch id', icons: icons.fingerprint},
    {name: 'sign out', icons: icons.logout},
    {name: 'lock app', icons: icons.lockapp},
  ],
  Settings: [
    {name: 'settings', icons: icons.settings, },
    {name: 'nitìication', icons: icons.notification},
  ],
  Note: [
    {name: 'language', icons: icons.world, text: 'English'},
    {name: 'Environment', icons: icons.cloud, text: 'Production'},
  ],
}];
