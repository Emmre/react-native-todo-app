import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class MyButton extends React.Component {

    render() {

        return (
            <View>
                <TouchableOpacity>
                    <Text>
                            {this.props.text}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    } 
}