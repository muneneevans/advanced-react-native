import React from 'react';
import { View, Animated } from 'react-native';

export default function Deck({ data, renderCard }) {
    const renderCards = () => {
        return data.map(item => renderCard(item))
    }
    return (
        <Animated.View >
            {renderCards()}
        </Animated.View>
    );
}
