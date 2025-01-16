import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width} = Dimensions.get('window');

import GraphCard from '../components/GraphCard';
import ScoreDetailCard from '../components/ScoreDetailCard';

const MainScreen = ({navigation}) => {
  const ScoreImapctingData = [
    {
      id: 0,
      title: 'Payments',
      subtitle: 'Timely Payments',
      remark: 'Excellent',
      navigateTo: 'DetailsScreen',
      remarkIcon: require('../assets/images/green.png'),
    },
    {
      id: 1,
      title: 'Limits',
      subtitle: 'Credit Limit Used',
      remark: 'Excellent',
      remarkIcon: require('../assets/images/green.png'),
    },
    {
      id: 2,
      title: 'Age',
      subtitle: 'Age of Accounts',
      remark: 'Excellent',
      remarkIcon: require('../assets/images/green.png'),
    },
    {
      id: 3,
      title: 'Accounts',
      subtitle: 'Active Accounts',
      remark: 'Excellent',
      remarkIcon: require('../assets/images/green.png'),
    },
    {
      id: 4,
      title: 'Enquiries',
      subtitle: 'Total Enquiries',
      remark: 'Low',
      remarkIcon: require('../assets/images/red.png'),
    },
    {
      id: 5,
      title: 'Profile',
      subtitle: 'Derogatory Marks',
      remark: 'Low',
      remarkIcon: require('../assets/images/red.png'),
    },
  ];

  return (
    <View style={styles.container}>
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
          <GraphCard />
        </View>

        {/* Score Impact Container  */}
        <View style={[styles.legendcontainer, {padding: '1%'}]}>
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
});
