/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardStyleInterpolators } from '@react-navigation/stack';

const forFade = ({ current }: any) => ({
  cardStyle: {
    opacity: current.progress.interpolate({
      inputRange: [0, 0.5, 0.9, 1],
      outputRange: [0, 0.25, 0.7, 1],
    }),
  },
});

const horizontal = ({ current, layouts }: any) => ({
  cardStyle: {
    transform: [
      {
        translateX: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [layouts.screen.width, 0],
        }),
      },
    ],
  },
});

export const animation = {
  forFade,
  horizontal,
  bottomToUp: CardStyleInterpolators.forRevealFromBottomAndroid,
};
