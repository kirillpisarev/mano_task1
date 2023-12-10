import React, {useState} from 'react';
import {View, StyleSheet, LayoutRectangle} from 'react-native';
import {useAppRoute} from '../../navigation';
import {useImageGesture} from './hooks/useImageGesture';
import Animated from 'react-native-reanimated';
import {GestureDetector} from 'react-native-gesture-handler';

export const ImageView = () => {
  const {
    params: {imageUrl},
  } = useAppRoute<'ImageView'>();

  const [containerLayout, setContainerLayout] =
    useState<LayoutRectangle | null>(null);

  const {gesture, animatedGestureStyle} = useImageGesture(
    containerLayout?.width ?? 0,
    containerLayout?.height ?? 0,
  );

  return (
    <View
      style={styles.container}
      onLayout={({nativeEvent}) => setContainerLayout(nativeEvent.layout)}>
      <Animated.Image
        source={{uri: imageUrl}}
        style={[styles.image, animatedGestureStyle]}
      />
      <GestureDetector gesture={gesture}>
        <View style={StyleSheet.absoluteFill} />
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    position: 'absolute',
  },
});
