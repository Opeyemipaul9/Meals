import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet} from 'react-native';

export const MapScreen = () => {
  <>
    <MapView provider={PROVIDER_GOOGLE} style={styles.maps} />
  </>;
};

const styles = StyleSheet.create({
  maps: {
    ...StyleSheet.absoluteFillObject,
  },
});
