import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const ScoreDetailCard = ({ScoreImapctingData}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {ScoreImapctingData?.map((item, id) => {
        return (
          <TouchableOpacity
            onPress={() => {
              if (item?.navigateTo) {
                navigation.navigate(item?.navigateTo);
              }
            }}
            key={id}
            style={[styles.boxUIcontainer, styles.whiteBackground]}>
            <View style={styles.boxContent}>
              {/* Title */}
              <View style={styles.titleContainer}>
                <Text allowFontScaling={false} style={styles.title}>
                  {item.title}
                </Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={25}
                  color={'#5D5C5D'}
                />
              </View>

              {/* Subtitle View */}
              <View>
                <Text allowFontScaling={false} style={styles.subtitle}>
                  {item.subtitle}
                </Text>

                {/* Remark View */}
                <View style={styles.remarkContainer}>
                  <Image
                    source={item?.remarkIcon}
                    style={styles.remarkIcon}
                    resizeMode="contain"
                  />
                  <Text allowFontScaling={false} style={styles.remark}>
                    {item?.remark}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ScoreDetailCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  boxUIcontainer: {
    width: '49%',
    height: hp('13%'),
    marginTop: hp('1%'),
    padding: wp('3%'),
    borderRadius: 16,
    elevation: 2, // For Android Shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: {width: 0, height: 3}, // For iOS shadow
    shadowOpacity: 0.2, // For iOS shadow
    shadowRadius: 2, // For iOS shadow
  },
  whiteBackground: {
    backgroundColor: '#fff',
  },
  boxContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    color: '#3D3D3D',
  },
  subtitle: {
    fontSize: 11,
    marginBottom: hp('0.5%'),
    color: '#7A7A7A',
  },
  remarkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  remarkIcon: {
    width: wp('5%'),
    height: hp('3%'),
    marginRight: wp('1%'),
  },
  remark: {
    fontSize: 12,
    color: '#2D2D2D',
  },
});
