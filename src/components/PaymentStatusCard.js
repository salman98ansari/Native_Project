import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

const PaymentStatusCard = ({data, Month_Data}) => {
  var ontime = require('../assets/images/Ontime.png');
  var delayed = require('../assets/images/Delayed.png');
  var notavailable = require('../assets/images/Notavailable.png');

  return (
    <View style={styles.maincardcontainer}>
      <View style={styles.summaryrow}>
        <Text allowFontScaling={false} style={styles.summarytext}>
          Summary
        </Text>
        <LinearGradient
          style={styles.linearg}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#FFFFFF', '#FFF3D7']}>
          <Text
            allowFontScaling={false}
            style={{fontSize: width * 0.03, color: '#888'}}>
            Last Updated: {data?.payment_history?.last_updated_on}
          </Text>
        </LinearGradient>
      </View>

      <View style={styles.MonthView}>
        {Month_Data?.map((month, monthIndex) => (
          <Text
            allowFontScaling={false}
            key={monthIndex}
            style={styles.MonthText}>
            {month}
          </Text>
        ))}
      </View>

      <View style={{marginTop: 15}}>
        {data?.payment_history?.payment_summary?.map((yearData, index) => {
          return (
            <View key={index} style={styles.yearContainer}>
              <Text allowFontScaling={false} style={styles.yearTitle}>
                {yearData.year || '     '}
              </Text>
              <View style={styles.monthContainer}>
                {yearData.summary.map((status, index) => {
                  return (
                    <View key={index} style={styles.statusCircleContainer}>
                      <Image
                        style={
                          status === 'NA'
                            ? [styles.statusCircle, styles.smallCircle]
                            : styles.statusCircle
                        }
                        source={
                          status === 'PAID'
                            ? ontime
                            : status === 'DELAYED'
                            ? delayed
                            : notavailable
                        }
                      />
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>

      <View style={styles.DashedLine} />

      <View style={styles.RemarkContainer}>
        <View style={styles.statusLegendItem}>
          <Image style={styles.statusCircle} source={notavailable} />
          <Text allowFontScaling={false} style={styles.legendText}>
            Not Available
          </Text>
        </View>
        <View style={styles.statusLegendItem}>
          <Image style={styles.statusCircle} source={ontime} />
          <Text allowFontScaling={false} style={styles.legendText}>
            On Time Payment
          </Text>
        </View>
        <View style={styles.statusLegendItem}>
          <Image style={styles.statusCircle} source={delayed} />
          <Text allowFontScaling={false} style={styles.legendText}>
            Delayed
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentStatusCard;

const styles = StyleSheet.create({
  maincardcontainer: {
    backgroundColor: '#fff',
    padding: width * 0.04,
    borderRadius: 8,
    marginHorizontal: wp('2%'),
    marginTop: hp('2%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  summaryrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  summarytext: {
    color: '#4C4C4C',
    fontSize: width * 0.03,
    fontWeight: 'bold',
  },
  linearg: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  MonthView: {
    marginLeft: width * 0.125,
    flexDirection: 'row',
    marginTop: 20,
  },
  MonthText: {
    fontSize: width * 0.024,
    fontWeight: 'bold',
    marginHorizontal: width * 0.0083,
    color: '#666666',
  },
  yearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },

  yearTitle: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginRight: width * 0.026,
    minWidth: width * 0.1,
  },
  monthContainer: {
    flexDirection: 'row',
  },
  statusCircleContainer: {
    width: width * 0.035,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.012,
  },
  statusCircle: {
    width: width * 0.04,
    height: width * 0.04,
    borderRadius: width * 0.02,
  },
  smallCircle: {
    width: width * 0.02,
    height: width * 0.02,
  },
  DashedLine: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#D9D9D9',
    marginTop: 20,
  },
  RemarkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  statusLegendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendText: {
    fontSize: width * 0.03,
    marginLeft: 5,
    color: '#666666',
  },
});
