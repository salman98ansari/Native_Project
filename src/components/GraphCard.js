import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  VictoryAxis,
  VictoryChart,
  VictoryContainer,
  VictoryLine,
  VictoryScatter,
  VictoryTooltip,
} from 'victory-native';

const {width} = Dimensions.get('window');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GraphCard = ({lineGraphData}) => {
  const lastNonNullIndex = lineGraphData?.reduce(
    (lastIndex, current, index) => (current.y !== null ? index : lastIndex),
    -1,
  );
  const [activeIndex, setActiveIndex] = useState(lastNonNullIndex);

  return (
    <View style={styles.maincontainer}>
      <View style={styles.chartconatiner}>
        <VictoryChart
          style={{}}
          height={hp('25%')}
          domain={{y: [650, 850]}} // Add some padding around min and max
          domainPadding={{x: 25}}
          padding={{top: 30, bottom: 40, left: 50, right: 50}}>
          {/* X-Axis */}
          <VictoryAxis
            style={{
              axis: {stroke: 'none'},
              grid: {stroke: '#d3c3ff', strokeLinejoin: '4'},
            }}
          />

          {/* Y-Axis */}
          <VictoryAxis
            dependentAxis
            style={{
              axis: {stroke: 'none'},
            }}
          />

          {/* Line Chart */}
          <VictoryLine
            data={lineGraphData}
            style={{
              data: {stroke: '#6A34AC', strokeWidth: 2},
            }}
          />

          {/* Scatter Points */}
          <VictoryScatter
            data={lineGraphData}
            size={5}
            style={{data: {fill: '#6A34AC'}}}
            labels={({datum, index}) => {
              return index === activeIndex ? `${datum?.y}` : '';
            }}
            labelComponent={
              <VictoryTooltip
                flyoutStyle={{
                  fill: '#6A34AC',
                  stroke: 'none',
                }}
                style={{fill: '#FFFFFF', fontSize: 10}}
                active={({index}) => index === activeIndex}
              />
            }
          />
        </VictoryChart>
      </View>
      <View style={styles.bottomcontainer}>
        <View style={styles.IconContainer}>
          <MaterialCommunityIcons
            name="arrow-down-circle"
            size={20}
            color={'red'}
          />
          <Text allowFontScaling={false} style={styles.icontext}>
            Next Update : 05 May 2023
          </Text>
        </View>
        <View>
          <Image
            source={require('../assets/images/CRIF.png')}
            style={styles.imagestyle}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default GraphCard;

const styles = StyleSheet.create({
  maincontainer: {
    width: '100%',
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 10,
    padding: '3%',
    justifyContent: 'space-around',
  },
  chartconatiner: {
    borderRadius: 15,
    marginVertical: hp('1%'),
    backgroundColor: '#FCF9FF',
  },
  bottomcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  IconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icontext: {
    fontSize: 12,
    marginLeft: wp('1%'),
    color: '#000',
  },
  imagestyle: {
    width: wp('20%'),
    height: hp('5%'),
  },
});
