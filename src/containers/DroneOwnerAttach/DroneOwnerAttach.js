/*
 * This is the drone owner scene where the user can view their drone details or attach a new drone.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { Camera, Permissions } from 'expo';
import { Actions } from 'react-native-router-flux';
import styles from './DroneOwnerAttach-styles';
import parseQRCodeData from '../../utils/parseQRCodeData';
import * as droneOwnerActions from '../../actions/droneOwner';
import * as appInfoActions from '../../actions/appInfo';

class DroneOwnerAttach extends React.Component {
  async componentWillMount() {
    const { setHaveCameraPermission, setNewDroneAttached } = this.props;

    // Ensure that the newDroneAttached is reset since the dialog is just opening
    setNewDroneAttached(false);

    // Request access to the camera if it is not already granted
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setHaveCameraPermission(status === 'granted');
  }
  handleBarCodeRead = scannedObj => {
    const { setDroneToken, setDroneAddress, newDroneAttached, setNewDroneAttached } = this.props;

    if (newDroneAttached)
      return; // If drone has been successfully set since the scene has been open, we don't allow another to be attached.
              // NOTE: This is to prevent the success message from showing twice when a drone is successfully attached.

    if (typeof scannedObj.data !== 'string')
      return alert('There was an error reading the encoding of the QR code!');

    // Get the address and token from the QR code data (if it was formatted correctly)
    const qrCodeData = parseQRCodeData(scannedObj.data, 'drone');
    if (qrCodeData === false) { // Check if there was an error (meaning the data wasn't formatted correctly)
      return alert('There was an error reading the encoding of the QR code!');
    }

    // Save the token and address values (from the QR code) to redux reducer and mark the drone as attached
    setDroneToken(qrCodeData.token);
    setDroneAddress(qrCodeData.address);
    setNewDroneAttached(true);

    // Now we tell the user that it was successfully attached and navigate them back to the details page
    alert('The drone was successfully attached!');
    Actions.pop();
  }
  render() {
    const { haveCameraPermission } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.line}></View>
        {(!haveCameraPermission) &&
          <View style={styles.detailsWrap}>
            <Text style={styles.instructionText}>To attach a drone, please enable camera permissions in settings.</Text>
          </View>
        }
        {haveCameraPermission &&
          <View style={styles.cameraWrap}>
            <Camera
              style={styles.camera}
              onBarCodeRead={this.handleBarCodeRead}
              barCodeTypes={[Camera.Constants.BarCodeType.qr]}
            />
          </View>
        }
      </View>
    );
  }
}

DroneOwnerAttach.propTypes = {
  newDroneAttached: PropTypes.bool.isRequired,
  setNewDroneAttached: PropTypes.func.isRequired,
  haveCameraPermission: PropTypes.bool.isRequired,
  setHaveCameraPermission: PropTypes.func.isRequired,
  droneToken: PropTypes.string.isRequired,
  setDroneToken: PropTypes.func.isRequired,
  droneAddress: PropTypes.string.isRequired,
  setDroneAddress: PropTypes.func.isRequired
};

export default connect(
  state => ({
    newDroneAttached: state.droneOwner.newDroneAttached,
    haveCameraPermission: state.appInfo.haveCameraPermission,
    droneToken: state.droneOwner.droneToken,
    droneAddress: state.droneOwner.droneAddress
  }),
  dispatch => ({
    setNewDroneAttached: bindActionCreators(droneOwnerActions.setNewDroneAttached, dispatch),
    setHaveCameraPermission: bindActionCreators(appInfoActions.setHaveCameraPermission, dispatch),
    setDroneToken: bindActionCreators(droneOwnerActions.setDroneToken, dispatch),
    setDroneAddress: bindActionCreators(droneOwnerActions.setDroneAddress, dispatch)
  })
)(DroneOwnerAttach);
