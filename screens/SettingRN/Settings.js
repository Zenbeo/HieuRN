import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Switch,
  SafeAreaView,
  Dimensions,
} from 'react-native';
// import {colors,images, icons, fontSize} from '../constaints';
import UIHearder from '../../Button/UIHearder';
import {colors} from '../../constaints/colors';
import {fontSize, icons} from '../../constaints';
// import { Ionicons } from '@expo/vector-icons';// icon 

function Settings(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [IsEnabledPassword, setIsEnabledPassword] = useState(false);
  const toggleSwitchPassword = () =>
    setIsEnabledPassword(previousStatePass => !previousStatePass);
  const [isFinger, setIsFinger] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        
      }}>
      
        <UIHearder
          style={{
            alignSelf: 'center',
            lineHeight: 45,
            color: colors.black1,
          }}
          title={'Setting UI'}
        />
        <ScrollView   >
          
        <View
            style={{
              height: 40,
              backgroundColor: colors.grey,
            }}>
            <Text
              style={{
                color: colors.alert,
                fontSize: fontSize.h3,
                marginLeft: 8,
                marginTop: 12,
              }}>
              Common
            </Text>
          </View>

          {/* Dòng 1 */}
          <View
            style={{
              flexDirection: 'column',
              height: 80,
              backgroundColor: 'white',
              paddingLeft: 2,
            }}>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
                {/* <Ionicons name='word' size={24} colors={black1}/> */}
              <Image
                source={icons.world}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h2,
                  height: fontSize.h2,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 10,
                }}>
                Language
              </Text>

              <View style={{flex: 1}} />
              <Text
                style={{
                  fontSize: 15,
                  color: colors.inactive,
                }}>
                English
              </Text>
              <Image
                style={{height: 30, width: 30, tintColor: colors.inactive}}
                source={icons.next}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.cloud}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h0,
                  height: fontSize.h0,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 5,
                }}>
                Environmet
              </Text>
              <View style={{flex: 1}} />

              <Text
                style={{
                  fontSize: 15,
                  color: colors.inactive,
                }}>
                Production
              </Text>
              <Image
                style={{height: 30, width: 30, tintColor: colors.inactive}}
                source={icons.next}
              />
            </View>
          </View>

          {/* Tiêu đề 2 */}
          <View
            style={{
              height: 40,
              backgroundColor: colors.grey,
            }}>
            <Text
              style={{
                color: colors.alert,
                fontSize: fontSize.h3,
                marginLeft: 8,
                marginTop: 15,
              }}>
              Account
            </Text>
          </View>

          {/* Dòng 2 */}
          <View
            style={{
              flexDirection: 'column',
              height: 120,
              backgroundColor: 'white',

              paddingLeft: 5,
            }}>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.phone}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h2,
                  height: fontSize.h2,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 10,
                }}>
                Phone number
              </Text>
              <View style={{flex: 1}} />
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: colors.inactive,
                  marginEnd: 2,
                }}
                source={icons.next}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.email}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h2,
                  height: fontSize.h2,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 10,
                }}>
                Email
              </Text>
              <View style={{flex: 1}} />
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: colors.inactive,
                  marginEnd: 2,
                }}
                source={icons.next}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.logout}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h1,
                  height: fontSize.h1,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 5,
                }}>
                Sign out
              </Text>
              <View style={{flex: 1}} />
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: colors.inactive,
                  marginEnd: 2,
                }}
                source={icons.next}
              />
            </View>

            {/* Tiêu đề 3 */}
          </View>
          <View
            style={{
              height: 40,
              backgroundColor: colors.grey,
            }}>
            <Text
              style={{
                color: colors.alert,
                fontSize: fontSize.h3,
                marginLeft: 8,
                marginTop: 15,
              }}>
              Security
            </Text>
          </View>

          {/* Dòng 3 */}
          <View
            style={{
              flexDirection: 'column',
              height: 160,
              backgroundColor: 'white',

              paddingLeft: 5,
            }}>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.lockapp}
                style={{
                  marginStart: 5,
                  marginEnd: 5,
                  width: 25,
                  height: 25,
                  tintColor: 'black',
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 5,
                }}>
                Lock app in background
              </Text>
              <View style={{flex: 1}} />
              <Switch
                style={{
                  marginEnd: 2,
                }}
                trackColor={{false: colors.inactive, true: colors.Orgent}}
                thumbColor={isEnabled ? colors.Orgent : 'white'}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.email}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h2,
                  height: fontSize.h2,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 5,
                }}>
                Email
              </Text>
              <View style={{flex: 1}} />
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: colors.inactive,
                  marginEnd: 5,
                }}
                source={icons.next}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.lock}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h1,
                  height: fontSize.h1,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 5,
                }}>
                Change Password
              </Text>
              <View style={{flex: 1}} />
              <Switch
                style={{
                  marginEnd: 2,
                }}
                trackColor={{false: colors.inactive, true: colors.Orgent}} //màu trong track
                thumbColor={IsEnabledPassword ? colors.Orgent : 'white'} //màu nút
                onValueChange={toggleSwitchPassword} //khi gạt
                value={IsEnabledPassword} // giá trị lưu
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.fingerprint}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h1,
                  height: fontSize.h1,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 5,
                }}>
                Touch ID
              </Text>
              <View style={{flex: 1}} />
              <Switch
                style={{
                  marginEnd: 2,
                }}
                trackColor={{false: colors.inactive, true: colors.Orgent}} //màu trong track
                thumbColor={isFinger ? colors.Orgent : 'white'} //màu nút
                onValueChange={() => {
                  setIsFinger(!isFinger);
                }} //khi gạt
                value={isFinger} // giá trị lưu
              />
            </View>
          </View>

          {/* Tiêu đề 4 */}
          <View
            style={{
              height: 40,
              backgroundColor: colors.grey,
            }}>
            <Text
              style={{
                color: colors.alert,
                fontSize: fontSize.h3,
                marginLeft: 8,
                marginTop: 15,
              }}>
              Setting
            </Text>
          </View>

          {/* Dòng 4 */}
          <View
            style={{
              flexDirection: 'column',
              height: 160,
              backgroundColor: 'white',
              paddingLeft: 5,
            }}>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
                <Image
                  source={icons.settings}
                  style={{
                    marginStart: 10,
                    marginEnd: 5,
                    width: fontSize.h1,
                    height: fontSize.h1,
                  }}
                />
                <Text
                  style={{
                    color: colors.black1,
                    fontSize: fontSize.h5,
                    marginHorizontal:5
                  }}>
                  Setting
                </Text>
                <View style={{flex: 1}} />
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: colors.inactive,
                    marginEnd: 2,
                  }}
                  source={icons.next}
                />
              </View>
              <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.notification}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h2,
                  height: fontSize.h2,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 10,
                }}>
                Notification
              </Text>
              <View style={{flex: 1}} />
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: colors.inactive,
                  marginEnd: 2,
                }}
                source={icons.next}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.sound}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h2,
                  height: fontSize.h2,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 10,
                }}>
                Sound
              </Text>
              <View style={{flex: 1}} />
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: colors.inactive,
                  marginEnd: 2,
                }}
                source={icons.next}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.bluetooth}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h1,
                  height: fontSize.h1,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 5,
                }}>
                Bluetooth
              </Text>
              <View style={{flex: 1}} />
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: colors.inactive,
                  marginEnd: 2,
                }}
                source={icons.next}
              />
            </View>
            
            {/* Tiêu đề 3 */}
          </View>
          <View
            style={{
              height: 40,
              backgroundColor: colors.grey,
            }}>
            <Text
              style={{
                color: colors.alert,
                fontSize: fontSize.h3,
                marginLeft: 8,
                marginTop: 15,
              }}>
              Secutiry 4444
            </Text>
          </View>
          
           <View
            style={{
              flexDirection: 'column',
              // height: 160,
              backgroundColor: 'white',

              paddingLeft: 5,
            }}>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              
                <Image
                  source={icons.settings}
                  style={{
                    marginStart: 10,
                    marginEnd: 5,
                    width: fontSize.h1,
                    height: fontSize.h1,
                  }}
                />
                <Text
                  style={{
                    color: colors.black1,
                    fontSize: fontSize.h5,
                    marginHorizontal: 5,
                  }}>
                  Setting
                </Text>
                <View style={{flex: 1}} />
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: colors.inactive,
                    marginEnd: 2,
                  }}
                  source={icons.next}
                />
              </View>
              
              <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.notification}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h2,
                  height: fontSize.h2,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 10,
                }}>
                Notification
              </Text>
              <View style={{flex: 1}} />
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: colors.inactive,
                  marginEnd: 2,
                }}
                source={icons.next}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.sound}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h2,
                  height: fontSize.h2,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 10,
                }}>
                Sound
              </Text>
              <View style={{flex: 1}} />
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: colors.inactive,
                  marginEnd: 2,
                }}
                source={icons.next}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.bluetooth}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h1,
                  height: fontSize.h1,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 5,
                }}>
                Bluetooth
              </Text>
              <View style={{flex: 1}} />
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: colors.inactive,
                  marginEnd: 2,
                }}
                source={icons.next}
              />
            </View>
            
            {/* Tiêu đề 5 */}
            <View
            style={{
              height: 40,
              backgroundColor: colors.grey,
            }}>
            <Text
              style={{
                color: colors.alert,
                fontSize: fontSize.h3,
                marginLeft: 8,
                marginTop: 15,
              }}>
              Setting33332
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              height: 160,
              backgroundColor: 'white',
              paddingLeft: 5,
            }}>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
                <Image
                  source={icons.settings}
                  style={{
                    marginStart: 10,
                    marginEnd: 5,
                    width: fontSize.h1,
                    height: fontSize.h1,
                  }}
                />
                <Text
                  style={{
                    color: colors.black1,
                    fontSize: fontSize.h5,
                    marginHorizontal:5
                  }}>
                  Setting
                </Text>
                <View style={{flex: 1}} />
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: colors.inactive,
                    marginEnd: 2,
                  }}
                  source={icons.next}
                />
              </View>
              <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.notification}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h2,
                  height: fontSize.h2,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 10,
                }}>
                Notification
              </Text>
              <View style={{flex: 1}} />
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: colors.inactive,
                  marginEnd: 2,
                }}
                source={icons.next}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.sound}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h2,
                  height: fontSize.h2,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 10,
                }}>
                Sound
              </Text>
              <View style={{flex: 1}} />
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: colors.inactive,
                  marginEnd: 2,
                }}
                source={icons.next}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={icons.bluetooth}
                style={{
                  marginStart: 10,
                  marginEnd: 5,
                  width: fontSize.h1,
                  height: fontSize.h1,
                }}
              />
              <Text
                style={{
                  color: colors.black1,
                  fontSize: fontSize.h5,
                  marginHorizontal: 5,
                }}>
                Bluetooth
              </Text>
              <View style={{flex: 1}} />
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: colors.inactive,
                  marginEnd: 2,
                }}
                source={icons.next}
              />
            </View>
            
            {/* Tiêu đề 3 */}
          </View>
          </View>
        </ScrollView>
      </View>
   
  );
}
export default Settings;
