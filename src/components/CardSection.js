import React from 'react';
import {View} from 'react-native';
import Card from "./Card";

const CardSection = (props) =>{
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
  containerStyle: {
      backgroundColor: '#FFF',
      borderBottomWidth: 1,
      borderColor: '#DDD',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      padding: 5,
      position: 'relative'
  }
};

export default CardSection;