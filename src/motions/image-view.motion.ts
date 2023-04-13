export const imageViewMotions = {
  wrapper: {
    none: {
      filter: 'blur(15px)',
    },
    loaded: {
      filter: 'blur(0)',
      transition: {
        duration: 0.3,
      },
    },
  },

  image: {
    none: {
      opacity: 0,
    },
    loaded: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  },
};
