import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // For barcode
import IconFA from 'react-native-vector-icons/FontAwesome'; // For eye
import laptop1 from '../images/laptop1.jpg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QRCode from 'react-native-qrcode-svg';
import {RNCamera} from 'react-native-camera'

const DetailScreen = ({ navigation }) => {
  const [print, changePrint] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState('');
  const [selectedItem, setSelectedItem] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const Details = [
    {
      Uuid: 'SampleUUID12345',
      ItemName: 'Sample Item',
      PostingDate: '2024-11-19',
      Quantity: '10',
      AssetValue: '$500',
      BusTransType: 'Transaction A',
      CompanyCode: 'C001',
      AssetType: 'Type A',
      BusUnit: 'Unit A',
      Currency: 'USD',
      TradPartner: 'Partner A',
      BaseUnitCode: 'Unit001',
      image: laptop1,
    },
    {
      Uuid: 'SampleUUID67890',
      ItemName: 'Another Item',
      PostingDate: '2024-11-20',
      Quantity: '5',
      AssetValue: '$300',
      BusTransType: 'Transaction B',
      CompanyCode: 'C002',
      AssetType: 'Type B',
      BusUnit: 'Unit B',
      Currency: 'EUR',
      TradPartner: 'Partner B',
      BaseUnitCode: 'Unit002',
      image: laptop1,
    },
  ];

  const [uuid, setUuid] = useState('');
  const username = 'BPINST';
  const qrRef = useRef(null);
  const password = 'Welcome1';
  const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

  const handlePrint = (Uuid) => {
    setUuid(Uuid);
    changePrint(true);
    setIsScanning(false);
    setModalVisible(true);
  };

  const handleScanning = () => {
    setIsScanning(!isScanning);
    changePrint(false);
  };

  const handleScan = (e) => {
    setScanResult(e.data); // Use scanned QR code data
    setIsScanning(false);
  };

  const handleError = (err) => {
    console.error(err); // Log any errors during scanning
  };

  const handleView = (item) => {
    setSelectedItem(item);
    navigation.navigate('ViewScreen',{ selectedItem: item });
  };

  const handleNewAsset = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../images/BAS-logo-1.jpg')}
          style={styles.image}
        />
        </View>
        <View style={isScanning ? styles.scannerWrapper : null}>
        {isScanning && (
                <QRCodeScanner
                  onRead={handleScan}
                  reactivate={true}
                  reactivateTimeout={500}
                  topContent={<Text>Scanning...</Text>}
                  containerStyle={styles.scannerContainer}
                  cameraStyle={styles.cameraStyle}
                />
              )}
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsScanning(!isScanning)} // Toggle scanning state
          >
            <Text style={styles.buttonText}>
              {isScanning ? 'Stop Scanning' : 'Start Scanning'}
            </Text>
          </TouchableOpacity>
          <View style={styles.spacer} />
          <TouchableOpacity style={styles.button} onPress={handleNewAsset}>
            <Text style={styles.buttonText}>Add Asset</Text>
          </TouchableOpacity>
        </View>


      {/* Display List of Details */}
      <FlatList
        data={Details}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.row,
              scanResult === item.Uuid ? styles.activeRow : null,
            ]}
          >
            <Image
              source={item.image}
              style={styles.itemImage}
              resizeMode="contain"
            />
            <Text style={{ color: 'black', marginRight: 2 }}>
              {item.ItemName}
            </Text>
            <Text style={{ color: 'black', marginLeft: 20 }}>
              {item.AssetValue}
            </Text>

            {/* Action Buttons */}
            <TouchableOpacity onPress={() => handlePrint(item.Uuid)}>
              <Icon
                name="barcode-scan"
                size={30}
                color="black"
                style={{ marginRight: 25, marginLeft: 60 }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleView(item)}>
              <IconFA name="eye" size={30} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Modal for QR Code */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <QRCode value={uuid} size={180} style={styles.qrCode} />
            <View style={styles.buttonContainer}>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  container: { flex: 1, backgroundColor: '#ffffff', overflow:"scroll"},
  header: { alignItems: 'center', marginBottom: 0 },
  image: { width: 100, height: 70, marginRight: 250 },
  text: { color: 'black' },
  button: {
    marginLeft: 10,
    backgroundColor: '#df1e26',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 160,
  },
  buttonContainer: {
    marginTop: 20, // Adds space above the button
  },
  spacer: {
    width: 5, // Adds space between the buttons
  },
  buttonText: { color: '#fff', fontSize: 16, flexDirection: 'row', marginLeft: 20 },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  activeRow: { backgroundColor: '#e0f7fa' },
  itemImage: { width: 50, height: 50, marginRight: 10 },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  scannerContainer: {
    flex: 1,
  },
  cameraStyle: {
      height: '60%',
      width: '100%',
    },
  scannerWrapper: {
   width: '100%',
   height: 300, // Adjust as needed
   marginBottom: 20,
  }
});

export default DetailScreen;
