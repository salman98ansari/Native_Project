import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

import {data} from '../constants/JSONData';
import PaymentStatusCard from '../components/PaymentStatusCard';
import BankDetails from '../components/BankDetails';

const {width} = Dimensions.get('window');

const DetailsScreen = ({navigation}) => {
  const Month_Data = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <View style={styles.container}>
      {/* Bank Details Components */}
      <BankDetails data={data} />

      <View style={styles.legendcontainer}>
        <Text style={styles.legendtext}>Payment History</Text>
      </View>
      <PaymentStatusCard data={data} Month_Data={Month_Data} />

      <View style={styles.bottomcontainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.bottombutton}>
          <Text style={styles.ButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F0F0F5'},

  //New
  legendcontainer: {
    marginHorizontal: wp('3%'),
    marginTop: hp('2%'),
  },

  legendtext: {
    fontWeight: '700',
    fontSize: 15,
    color: '#000',
  },

  bottomcontainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  bottombutton: {
    backgroundColor: '#44226E',
    padding: 12,
    borderRadius: 22,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  ButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
