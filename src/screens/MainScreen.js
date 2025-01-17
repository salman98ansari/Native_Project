import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width} = Dimensions.get('window');

import {ScoreImapctingData, lineGraphData} from '../constants/MainScreenData'; //Import Data from File
import GraphCard from '../components/GraphCard';
import ScoreDetailCard from '../components/ScoreDetailCard';

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headercontainers}>
        <View style={styles.headerrowConatiner}>
          <Text allowFontScaling={false} style={styles.headerTitle}>
            Credit Report
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={{padding: wp('2%')}}>
        {/* Graph Container */}
        <View style={styles.legendcontainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Your Credit Report</Text>
          </View>
          {/* Components Graph Box */}
          <GraphCard lineGraphData={lineGraphData} />
        </View>

        {/* Score Impact Container  */}
        <View
          style={[
            styles.legendcontainer,
            {padding: '1%', marginBottom: hp('1%')},
          ]}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>What is impacting your score</Text>
          </View>
          {/* Box UI Container */}
          <ScoreDetailCard ScoreImapctingData={ScoreImapctingData} />
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F5',
  },
  legendcontainer: {
    flex: 1,
    padding: '1%',
  },
  headerContainer: {
    marginVertical: hp('1%'),
  },
  headerText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '700',
  },

  headercontainers: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
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
  },
});
