import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const BankDetails = ({data}) => {
  const navigation = useNavigation();

  const progressBarRef = useRef(null);
  const [percentage, setPercentage] = useState(
    data?.payment_percentage ? parseInt(data?.payment_percentage) : 35,
  ); // Initial percentage
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState(0);

  const handlePress = () => {
    if (progressBarRef.current) {
      progressBarRef.current.measure((x, y, width, height, pageX, pageY) => {
        const position = (width * percentage) / 100;
        setTooltipPosition(position);
        setTooltipVisible(!tooltipVisible);
      });
    }
  };
  return (
    <View style={styles.headercontainer}>
      {/* Header */}
      <View style={styles.headerrowConatiner}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialIcons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
        <Text allowFontScaling={false} style={styles.headerTitle}>
          Payment History
        </Text>
      </View>

      {/* Bank Status */}
      <View style={styles.bankStatusContainer}>
        <View style={styles.bankstatusrow}>
          <View style={styles.bankiconcontainer}>
            <MaterialCommunityIcons
              name="bank-outline"
              size={21}
              color="#44226E"
            />
          </View>
          <View style={styles.bankinfocontainer}>
            <View>
              <Text allowFontScaling={false} style={styles.bankname}>
                {data?.bank_name}
              </Text>
              <Text
                allowFontScaling={false}
                style={{color: '#7A7A7A', fontSize: 13}}>
                {data?.type_of_loan}
              </Text>
            </View>
            <View>
              <Text allowFontScaling={false} style={styles.loanstatus}>
                {data?.account_status}
              </Text>
              <Text
                allowFontScaling={false}
                style={{color: '#9E9E9E', textAlign: 'right', fontSize: 13}}>
                Issued on :{' '}
                <Text
                  allowFontScaling={false}
                  style={{color: '#5D5D5D', fontWeight: '500', fontSize: 13}}>
                  {data?.issued_on}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarSection}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text allowFontScaling={false} style={styles.progresstext}>
            You have Paid %
          </Text>
          <Text allowFontScaling={false} style={styles.progresstext}>
            Tenure: {data?.loan_tenure}
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={handlePress}>
          <View ref={progressBarRef} style={styles.progressBarContainer}>
            <View style={[styles.filledProgress, {width: `${percentage}%`}]} />
          </View>
        </TouchableWithoutFeedback>
        {tooltipVisible && (
          <View
            style={[styles.tooltip, {left: Math.max(tooltipPosition - 20, 0)}]}>
            <Text
              allowFontScaling={false}
              style={styles.tooltipText}>{`${Math.round(percentage)}%`}</Text>
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp('1%'),
          }}>
          <Text allowFontScaling={false} style={styles.amounttext}>
            Amount Paid:{' '}
            <Text allowFontScaling={false} style={styles.amountvalue}>
              {data?.amount_paid}
            </Text>
          </Text>
          <Text allowFontScaling={false} style={styles.amounttext}>
            Loan Amount :{' '}
            <Text allowFontScaling={false} style={styles.amountvalue}>
              {data?.total_loan_amount}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BankDetails;

const styles = StyleSheet.create({
  headercontainer: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerrowConatiner: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginVertical: '3%',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#0E0E0E',
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 10,
  },
  bankstatusrow: {flexDirection: 'row', alignItems: 'center', padding: 12},
  bankiconcontainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: '#44226E',
    marginRight: 8,
  },
  bankinfocontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  bankname: {color: '#0E0E0E', fontSize: 15, fontWeight: '500'},
  loanstatus: {
    color: '#00AA6D',
    textAlign: 'right',
    fontWeight: '600',
  },
  progressBarSection: {
    marginHorizontal: wp('5%'),
    marginVertical: hp('2%'),
    marginBottom: hp('2.5%'),
  },
  progresstext: {color: '#9E9E9E', fontSize: 12},
  bankStatusContainer: {
    backgroundColor: '#FCF9FF',
    marginHorizontal: '5%',
    marginVertical: '2%',
    borderRadius: 5,
  },
  progressBarContainer: {
    width: '100%',
    height: 15,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    marginTop: hp('0.5%'),
  },
  filledProgress: {
    height: '100%',
    backgroundColor: '#37A614',
  },
  tooltip: {
    position: 'absolute',
    top: -8,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    zIndex: 5, // Ensures the tooltip is above other elements
    elevation: 5, // Adds shadow on Android for better visibility
  },
  tooltipText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  amounttext: {color: '#9E9E9E', textAlign: 'right', fontSize: 13},
  amountvalue: {color: '#5D5D5D', fontWeight: '500', fontSize: 13},
});
