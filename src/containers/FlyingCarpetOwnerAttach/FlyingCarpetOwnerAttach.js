/*
 * This is the flyingcarpet owner scene where the user can view their flyingcarpet details or attach a new flyingcarpet.
 * @flow
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { Camera, Permissions } from 'expo';
import { Actions } from 'react-native-router-flux';
import styles from './FlyingCarpetOwnerAttach-styles';
import parseQRCodeData from '../../utils/parseQRCodeData';
import * as flyingCarpetOwnerActions from '../../actions/flyingCarpetOwner';
import * as appInfoActions from '../../actions/appInfo';

type Props = {
  newFlyingCarpetAttached: boolean,
  setNewFlyingCarpetAttached: boolean => {},
  haveCameraPermission: boolean,
  setHaveCameraPermission: boolean => {},
  flyingCarpetToken: string,
  setFlyingCarpetToken: string => {},
  flyingCarpetAddress: string,
  setFlyingCarpetAddress: string => {}
};

class FlyingCarpetOwnerAttach extends React.Component<Props> {
  async componentWillMount(): Promise<void> {
    const { setHaveCameraPermission, setNewFlyingCarpetAttached } = this.props;

    // Ensure that the newFlyingCarpetAttached is reset since the dialog is just opening
    setNewFlyingCarpetAttached(false);

    // Request access to the camera if it is not already granted
    const { status: string } = await Permissions.askAsync(Permissions.CAMERA);
    setHaveCameraPermission(status === 'granted');
  }
  handleBarCodeRead = (scannedObj: {data: string}): void => {
    const { setFlyingCarpetToken, setFlyingCarpetAddress, newFlyingCarpetAttached, setNewFlyingCarpetAttached } = this.props;

    if (newFlyingCarpetAttached)
      return; // If flyingCarpet has been successfully set since the scene has been open, we don't allow another to be attached.
              // NOTE: This is to prevent the success message from showing twice when a flyingCarpet is successfully attached.

    if (typeof scannedObj.data !== 'string')
      return alert('There was an error reading the encoding of the QR code!');

    // Get the address and token from the QR code data (if it was formatted correctly)
    const qrCodeData = parseQRCodeData(scannedObj.data, 'flyingcarpet');
    if (!qrCodeData) { // Check if there was an error (meaning the data wasn't formatted correctly)
      return alert('There was an error reading the encoding of the QR code!');
    }

    // Save the token and address values (from the QR code) to redux reducer and mark the flyingCarpet as attached
    setFlyingCarpetToken(qrCodeData.token);
    setFlyingCarpetAddress(qrCodeData.address);
    setNewFlyingCarpetAttached(true);

    // Now we tell the user that it was successfully attached and navigate them back to the details page
    alert('The Flyingcarpet was successfully attached!');
    Actions.pop();
  }
  render(): React.Node {
    const { haveCameraPermission } = this.props;

    return (
      <View style={styles.container}>
        {(!haveCameraPermission) &&
          <View style={styles.detailsWrap}>
            <Text style={styles.instructionText}>To attach a flyingCarpet, please enable camera permissions in settings.</Text>
          </View>
        }
        {haveCameraPermission &&
          <View style={styles.cameraWrap}>
            <View style={styles.cameraInstructions}>
              <Text style={styles.cameraInstructionText}>Scan FlyingCarpet QR code...</Text>
            </View>
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

export default connect(
  state => ({
    newFlyingCarpetAttached: state.flyingCarpetOwner.newFlyingCarpetAttached,
    haveCameraPermission: state.appInfo.haveCameraPermission,
    flyingCarpetToken: state.flyingCarpetOwner.flyingCarpetToken,
    flyingCarpetAddress: state.flyingCarpetOwner.flyingCarpetAddress
  }),
  dispatch => ({
    setNewFlyingCarpetAttached: bindActionCreators(flyingCarpetOwnerActions.setNewFlyingCarpetAttached, dispatch),
    setHaveCameraPermission: bindActionCreators(appInfoActions.setHaveCameraPermission, dispatch),
    setFlyingCarpetToken: bindActionCreators(flyingCarpetOwnerActions.setFlyingCarpetToken, dispatch),
    setFlyingCarpetAddress: bindActionCreators(flyingCarpetOwnerActions.setFlyingCarpetAddress, dispatch)
  })
)(FlyingCarpetOwnerAttach);
