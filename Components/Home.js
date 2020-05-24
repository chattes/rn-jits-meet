import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'souravpublic3',
    };
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          style={{
            height: 40,
            width: 300,
            margin: 5,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={(text) => this.setState({value: text})}
          value={this.state.value}
          placeholder="Enter Meeting Id"
        />
        <Button
          title="JOIN"
          onPress={() => {
            this.props.navigation.navigate('Meet', {link: this.state.value});
          }}
        />
      </View>
    );
  }
}

export default Home;
