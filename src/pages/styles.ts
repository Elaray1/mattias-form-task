import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  main: {
    minHeight: '100vh',
    width: '50vw',
    margin: 'auto',
    flexDirection: 'column',
  },
  buttons: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
}));

export default useStyles;
