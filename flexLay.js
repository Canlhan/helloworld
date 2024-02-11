import React from 'react';
import {StyleSheet, View,Button, Alert,Text,TouchableHighlight} from 'react-native';

const FlexLay = ({navigation}) => {

    
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
          width:200,
         
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} />
      <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('direct', {name: 'Jane'})
      }
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    label:'rtl'
  },
});

export default FlexLay;