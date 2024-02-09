import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function MapScreenNotification() {
  const data = {
    warning: false,
  };

  return (
    <>
      {data.warning ? (
        <View style={styles.warningnotificationBox}>
          <View style={styles.iconBox}>
            <Image source={require('../assest/error_warning_icon.png')} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.warningText}>
              Elephant detected 100m away! Please proceed with caution.
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.notWarningNotificationBox}>
          <View style={styles.iconBox}>
            <Image source={require('../assest/Shape.png')} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.notwarningText}>
              No elephants within 100m radius. Trunk Tracker assures your
              safety.
            </Text>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  notWarningNotificationBox: {
    width: 343,
    height: 51,
    borderRadius: 6,
    backgroundColor: '#439b5c',
    opacity: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  notwarningText: {
    color: '#054E2F',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
  },
  warningText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
  },
  iconBox: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    width: '90%',
    height: '100%',
    justifyContent: 'center',
    color: '#5E0505',
  },
  warningnotificationBox: {
    width: 343,
    height: 51,
    borderRadius: 6,
    backgroundColor: '#a54242',
    opacity: 10,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default MapScreenNotification;
