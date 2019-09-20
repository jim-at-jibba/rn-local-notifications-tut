import * as React from 'react';
import { Snackbar } from 'react-native-paper';
import { AlertContext } from '../globalState';
import { colors } from '../constants';

const SnackBar = () => {
  const { alertState, dispatchAlert } = React.useContext(AlertContext);
  const [alertSyle, setAlertStyle] = React.useState({
    backgroundColor: colors.info
  });

  React.useEffect(() => {
    switch (alertState.alertType) {
      case 'info':
        setAlertStyle({
          backgroundColor: colors.success
        });
        break;
      case 'error':
        setAlertStyle({
          backgroundColor: colors.error
        });
        break;
      case 'success':
        setAlertStyle({
          backgroundColor: colors.success
        });
        break;
      default:
        setAlertStyle({
          backgroundColor: colors.info
        });
    }
  }, [alertState]);

  const closeMe = () => {
    dispatchAlert({ type: 'close' });
  };

  return (
    <>
      {typeof alertState.open === 'boolean' && (
        <Snackbar
          style={alertSyle}
          visible={alertState.open}
          onDismiss={() => closeMe()}
          action={{
            label: 'Undo',
            onPress: () => {
              console.log('Snackbar closed');
              // Do something
            }
          }}
        >
          {alertState.message}
        </Snackbar>
      )}
    </>
  );
};

export default SnackBar;
