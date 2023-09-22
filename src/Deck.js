import React from 'react';
import { View, Animated, PanResponder } from 'react-native';

export default function Deck({ data, renderCard }) {


    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            // position.setValue({ x: gesture.dx, y: gesture.dy });
            // debugger
            position.setValue({ x: gesture.dx, y: gesture.dy })
        },
        onPanResponderRelease: () => { },
    });

    const renderCards = () => {
        return data.map((item, index) => {
            if (index === 0) {
                return (
                    <Animated.View style={position.getLayout()} {...panResponder.panHandlers} key={item.id}>
                        {renderCard(item)}
                    </Animated.View>)
            }
            else {
                return renderCard(item)
            }
        })
    }

    return (
        <View >
            {renderCards()}
        </View>
    );
}
