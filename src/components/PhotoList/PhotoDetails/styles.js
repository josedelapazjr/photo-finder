import {isWidthUp} from '@material-ui/core/withWidth';

export default {
  root: {
    display: 'flex',
    justifyContent: 'start',
    marginTop: 10
  },
  detail: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
    fontSize: 14,
  },
  label: {
    marginLeft: 4
  },
  dialogContent: ({width}) => {
    const isMobile = !isWidthUp('sm', width);
    return{
      padding: isMobile ? 0 : null,
    }
  }
};
