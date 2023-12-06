import React from 'react';

import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

function DashboardScreen() {
  const ui = (
    <>
      <ScrollView>
        <View style={style.main}>
          <View style={style.view1}>
            <View style={style.view2}>
              <View style={style.view3}>
                <Text style={style.text1}>Hello, Salidu</Text>
              </View>
              <View style={style.view4}>
                <Image
                  style={style.img}
                  source={require('../assest/OIG.jpeg')}
                />
              </View>
            </View>
          </View>

          <View style={style.view5}>
            <View style={style.view6}>
              <View style={style.view7}>
                <View style={style.view9}>
                  <Text style={style.locationNumber}>
                    6°29'18.7"N 80°12'48.9"E
                  </Text>
                  <Text style={style.address}>Kurupita Rd, </Text>
                  <Text style={style.address}>Polgampita.</Text>
                </View>
              </View>
              <View style={style.view8}>
                <Image
                  style={style.eleImg}
                  source={require('../assest/1ELE1.png')}
                />
              </View>
            </View>
          </View>
          <View style={style.view10}>
            <View style={style.view11}>
              <View style={style.view12}>
                <Image source={require('../assest/Shape.png')} />
              </View>
              <View style={style.view13}>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 18,
                    fontWeight: '400',
                    color: '#054E2F',
                  }}>
                  No elephants within 100m radius. Trunk Tracker assures your
                  safety.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
  return ui;
}

const style = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
  },
  view1: {
    width: '100%',
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view3: {
    flex: 1,
    height: '50%',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text1: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: '#000000',
  },
  img: {
    width: 46,
    height: 46,
    borderRadius: 50,
  },
  view5: {
    width: '90%',
    height: 181,
    borderRadius: 10,
    backgroundColor: '#146956',
    alignItems: 'center',
  },
  view6: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  view7: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view8: {
    flex: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eleImg: {
    width: '85%',
    height: '100%',
  },
  view9: {
    width: '80%',
    height: '80%',
  },
  locationNumber: {
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 18,
    color: '#EDEDED',
  },
  address: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    color: '#EDEDED',
  },
  view10: {
    width: '90%',
    height: 51,
    backgroundColor: '#439b5c',
    borderRadius: 6,
    marginTop: 10,
    alignItems: 'center',
  },
  view11: {
    width: '95%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  view12: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view13: {
    width: '90%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DashboardScreen;
