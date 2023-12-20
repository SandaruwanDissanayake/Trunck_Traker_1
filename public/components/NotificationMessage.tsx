import React, {useEffect, useRef} from 'react';
import {Animated, Text, View} from 'react-native';

interface MessageProps {
  message: String;
}

const Message: React.FC<MessageProps> = props => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(4000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  return (
    <Animated.View
      style={{
        zIndex: 1000,
        position: 'absolute',
        width: '90%',
        opacity,
        margin: 10,
        marginLeft: 17,
        marginBottom: 5,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
      }}>
      <View>
        <Text style={{color: 'red'}}>{props.message}</Text>
      </View>
    </Animated.View>
  );
};
interface notificationMessage {
  message: String;
}
const NotificationMessage: React.FC<notificationMessage> = props => {
  if (5 < 10) {
    return <Message message={props.message} />;
  } else {
    return <Message message={props.message} />;
  }
};
export default NotificationMessage;
