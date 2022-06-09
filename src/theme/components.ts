/* eslint-disable @typescript-eslint/no-explicit-any */
const sizes = {
  lg: {
    px: 6,
    py: 3,
    _text: {
      fontSize: 'lg',
    },
  },
  md: {
    px: 5,
    py: 3,
    _text: {
      fontSize: 'md',
    },
  },
  sm: {
    px: 4,
    py: 3,
    _text: {
      fontSize: 'sm',
    },
  },
  xs: {
    px: 2,
    py: 1,
    _text: {
      fontSize: 'xs',
    },
  },
};

const Button = {
  //NATIVE BASE DARK MODE THEME
  // baseStyle: (props: any) => {
  //   return {
  //     color: themeTools.mode('red.300', 'blue.300')(props),
  //   };
  // },
  defaultProps: {
    rounded: 'xl',
    fontFamily: 'mono',
    fontWeight: 700,
    variant: 'solid',
    size: 'sm',
    fontSize: 'xl',
  },
  sizes,
  variants: {
    solid: (props: any) => {
      return {
        _text: {
          // color: 'white',
          fontFamily: props.fontFamily,
          fontWeight: props.fontWeight,
        },
        ...props,
      };
    },
    outline: (props: any) => {
      return {
        _text: {
          fontFamily: props.fontFamily,
          fontWeight: props.fontWeight,
        },
        _pressed: {
          borderColor: 'leaves.100',
          bg: 'leaves.100',
        },
        ...props,
      };
    },
    lime: (props: any) => {
      return {
        bg: 'gray.200',
        _text: {
          color: 'lime.100',
          fontFamily: props.fontFamily,
          fontWeight: props.fontWeight,
        },
        ...props,
      };
    },
    white: (props: any) => {
      return {
        bg: 'surface.100',
        _text: {
          color: 'white.100',
          fontWeight: props.fontWeight,
          fontFamily: props.fontFamily,
        },
        ...props,
      };
    },
    outlineLime: (props: any) => {
      return {
        borderWidth: '1',
        borderColor: 'current.100',
        // bg: 'white.100',
        _text: {
          color: 'current.100',
          fontWeight: props.fontWeight,
          fontFamily: props.fontFamily,
        },
        ...props,
      };
    },
    outlineGray: (props: any) => {
      return {
        borderWidth: '1',
        borderColor: 'gray.100',
        bg: 'white.100',
        _text: {
          color: 'gray.100',
          fontWeight: props.fontWeight,
          fontFamily: props.fontFamily,
        },
        ...props,
      };
    },
    whiteManta: (props: any) => {
      return {
        bg: 'white.100',
        _text: {
          color: 'manta.100',
          fontWeight: props.fontWeight,
          fontFamily: props.fontFamily,
        },
        _pressed: {
          bg: 'gray.300',
        },
        ...props,
      };
    },
    grayManta: (props: any) => {
      return {
        bg: 'gray.300',
        _text: {
          color: 'manta.100',
          fontWeight: props.fontWeight,
          fontFamily: props.fontFamily,
        },
        _pressed: {
          bg: 'white.100',
        },
        ...props,
      };
    },
    outlineMantaGray: (props: any) => {
      return {
        bg: 'white.100',
        borderWidth: '1',
        borderColor: 'manta.100',
        _text: {
          color: 'gray.100',
          fontWeight: props.fontWeight,
          fontFamily: props.fontFamily,
        },
        _pressed: {
          bg: 'white.100',
        },
        ...props,
      };
    },
    outlineTransparent: (props: any) => {
      return {
        bg: 'transparent',
        borderWidth: '1',
        borderColor: 'leaves.100',
        _text: {
          color: 'leaves.100',
          fontWeight: props.fontWeight,
          fontFamily: props.fontFamily,
        },
        _pressed: {
          bg: 'transparent',
        },
        ...props,
      };
    },
    delete: (props: any) => {
      return {
        bg: 'corals.100',
        borderWidth: '1',
        borderColor: 'corals.100',
        _text: {
          color: 'white.100',
          fontWeight: props.fontWeight,
          fontFamily: props.fontFamily,
        },
        _pressed: {
          bg: 'corals.100',
        },
        ...props,
      };
    },
    stone: (props: any) => {
      return {
        bg: 'stone.100',
        _text: {
          fontWeight: props.fontWeight,
          fontFamily: props.fontFamily,
        },
        ...props,
      };
    },
  },
};

const Progress = {
  defaultProps: {
    variant: 'default',
    colorScheme: 'warning',
  },
  variants: {
    default: (props: any) => {
      return {
        bg: 'ripple.100',
        _filledTrack: {
          bg: 'stone.100',
          borderRadius: 30,
        },
        ...props,
      };
    },
    stone: (props: any) => {
      return {
        bg: 'ripple.100',
        _filledTrack: {
          bg: 'stone.100',
          borderRadius: 30,
        },
        ...props,
      };
    },
    palm: (props: any) => {
      return {
        bg: 'ripple.100',
        _filledTrack: {
          bg: 'palm.100',
          borderRadius: 30,
        },
        ...props,
      };
    },
    manta: (props: any) => {
      return {
        bg: 'ripple.100',
        _filledTrack: {
          bg: 'manta.100',
          borderRadius: 30,
        },
        ...props,
      };
    },
    current: (props: any) => {
      return {
        bg: 'ripple.100',
        _filledTrack: {
          bg: 'current.100',
          borderRadius: 30,
        },
        ...props,
      };
    },
    surface: (props: any) => {
      return {
        bg: 'ripple.100',
        _filledTrack: {
          bg: 'surface.100',
          borderRadius: 30,
        },
        ...props,
      };
    },
    surfaceYellow: (props: any) => {
      return {
        bg: 'yellow.100',
        _filledTrack: {
          bg: 'surface.100',
          borderRadius: 30,
        },
        ...props,
      };
    },
  },
};

const Select = {
  baseStyle: {},
  defaultProps: {
    fontFamily: 'mono',
    fontWeight: 400,
    fontSize: 'sm',
    color: 'manta.100',
    variant: 'outline',
    borderColor: 'manta.100',
    borderRadius: 8,
  },
  variants: {},
};

const Input = {
  baseStyle: {},
  defaultProps: {
    fontFamily: 'mono',
    fontSize: 'sm',
    color: 'manta.100',
    fontWeight: 500,
  },
  variants: {},
};

const Slider = {
  baseStyle: {},
  defaultProps: {},
  variants: {
    ripple: (props: any) => {
      return {
        color: 'seaflor.100',
        bg: 'ripple.100',
        ...props,
      };
    },
  },
};

const SliderThumb = {
  baseStyle: {},
  defaultProps: {},
  variants: {
    seaflor: (props: any) => {
      return {
        bg: 'seaflor.100',
        ...props,
      };
    },
  },
};

const Switch = {
  baseStyle: {},
  defaultProps: {},
  variants: {
    current: (props: any) => {
      return {
        // bg: 'seaflor.100',
        // _invalid: {
        //   borderWidth: 1,
        //   borderRadius: 16,
        //   borderColor: 'danger.600',
        // },
        offTrackColor: 'gray.200',
        offThumbColor: 'current.100',
        onTrackColor: 'ripple.100',
        // onThumbColor: 'current.100',
        ...props,
      };
    },
  },
};

const components = {
  Button,
  Progress,
  Select,
  Input,
  Slider,
  SliderThumb,
  Switch,
};

export default components;
