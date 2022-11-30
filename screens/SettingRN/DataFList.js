import {Switch} from 'react-native-gesture-handler';
import {icons} from '../../constaints';

// export default [
// {
//         name:'language',
//         icons:icons.world,
//         text:'English',
//         //iconNext:icons.next
//     },
//     {
//         name:'Environment',
//         icons:icons.cloud,
//         text:'Production',
//        // iconNext:icons.next,
//     },
//     {
//         name:'Phone number',
//         icons:icons.phone,

//        // iconNext:icons.next,
//     },
//     {
//         name:'Email',
//         icons:icons.email,

//        // iconNext:icons.next,
//     },
//     {
//         name:'Sign Out',
//         icons:icons.logout

//        // iconNext:icons.next,
//     },
//     {
//         name:'Lock app',
//         icons:icons.lockapp

//         //iconNext:icons.next,
//     },
//     {
//         name:'Change Pass',
//         icons:icons.lock

//         //iconNext:icons.next,
//     },
//     {
//         name:'Touch iD',
//         icons:icons.fingerprint

//         //iconNext:icons.next,
//     },
//     {
//         name:'Setting',
//         icons:icons.settings

//         //iconNext:icons.next,
//     },
//     {
//         name:'Notification',
//         icons:icons.notification

//         //iconNext:,
//     },
//     {
//         name:'Soud',
//         icons:icons.sound

//         //iconNext:
//     },
//     {
//         name:'Bluetooth',
//         icons:icons.bluetooth

//         //iconNext:
//     },
//     {
//         name:'Facebook',
//         icons:icons.facebook

//     },
//     {
//         name:'fine',
//         icons:icons.fire

//     },

// ]

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
