import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Button } from '@rneui/themed';

export default function TinderCard(item) {
    
    return (
        <Card
            title={item.text}
            image={{ uri: item.uri }}
            key={item.id}

        >
            <Image source={{ uri: item.uri }} style={{ width:"100%", height:200, resizeMode: "cover" }} />
            <Text style={{ marginBottom: 10 }}>
                {item.text}
            </Text>
            <Text style={{ marginBottom: 10 }}>
                I can customize the Card further.
            </Text>
            <Button
                icon={{ name: 'code' }}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
        </Card>
    );
}

const styles = StyleSheet.create({

});
