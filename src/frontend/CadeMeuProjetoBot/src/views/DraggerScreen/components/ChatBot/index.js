import React from 'react';
import { View } from 'react-native';
import Bot from 'react-native-chatbot';

class ChaBot extends React.Component {
  render() {
    const { visible } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Bot
            steps={[
              {
                id: '1',
                message: 'What is your name?',
                trigger: '2',
              },
              {
                id: '2',
                user: true,
                trigger: '3',
              },
              {
                id: '3',
                message: 'Hi {previousValue}, nice to meet you!',
                end: true,
              },
            ]}
          />
      </View>
    );
  }
}

export default ChaBot;
