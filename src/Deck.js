import React from 'react';
import { View, Animated, PanResponder, Dimensions } from 'react-native';

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

    const getCardStyle = () => {
        const width = Dimensions.get('window').width
        const rotate = position.x.interpolate({
            inputRange: [-width * 4.5 , 0, width * 4.5],
            outputRange: ['-120deg', '0deg', '120deg']
        })
        return {
            ...position.getLayout(),
            transform: [{ rotate }]
        }
    }

    const renderCards = () => {
        return data.map((item, index) => {
            return (
                <Animated.View
                    style={getCardStyle()}
                    {...panResponder.panHandlers} key={item.id}>
                    {renderCard(item)}
                </Animated.View>)
            // if (index === 0) {
            // }
            // else {
            //     return renderCard(item)
            // }
        })
    }

    return (
        <View >
            {renderCards()}
        </View>
    );
}
