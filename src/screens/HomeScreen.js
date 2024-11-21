import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Modal, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const HomeScreen = ({ navigation }) => {

        const [itemName, setItemName] = useState('');
        const [postingDate, setPostingDate] = useState('');
        const [quantity, setQuantity] = useState('');
        const [assetValue, setAssetValue] = useState('');
        const [businessTransactionType, setBusinessTransactionType]=useState('');
        const[companyCode,setCompanyCode]=useState('');
        const[assetType,setAssetType]=useState('');
        const[businessUnit,setBusinessUnit]=useState('');
        const[currency, setCurrency]=useState('');
        const[tradingPartner,setTradingPartner]=useState('');
        const[baseUnitCode,setBaseUnitCode]=useState('');
        const [modalVisible, setModalVisible] = useState(false);

        const isFormValid = () => {
            return (
                itemName &&
                postingDate &&
                quantity &&
                assetValue &&
                businessTransactionType &&
                companyCode &&
                assetType &&
                businessUnit &&
                currency &&
                tradingPartner &&
                baseUnitCode
            );
        };



        const handleSubmit = () => {
            const allValues = [itemName, postingDate, quantity, assetValue, businessTransactionType,companyCode,assetType,businessUnit,currency,tradingPartner,baseUnitCode];
            if (isFormValid()) {
                setModalVisible(true);
            }
        };

        const handleQRCodeGenerator = () => {
            const allValues = [itemName, postingDate, quantity, assetValue,businessTransactionType,companyCode,assetType,businessUnit,currency,tradingPartner,baseUnitCode];
        };



return (
     <ScrollView contentContainerStyle={styles.container}>
                     <View style={styles.header}>
                         <TouchableOpacity   style={styles.backButton}>
                             <Text style={styles.buttonText} onPress={() => navigation.navigate('DetailScreen')}>Back</Text>
                         </TouchableOpacity>
                     </View>

                     <View style={styles.formContainer}>
                         <Text style={styles.label}>Item Name</Text>
                         <TextInput
                             style={styles.input}
                             placeholder="Enter Item Name"
                             value={itemName}
                             onChangeText={setItemName}
                         />

                         <Text style={styles.label}>Posting Date</Text>
                         <TextInput
                             style={styles.input}
                             placeholder="Enter Posting Date"
                             value={postingDate}
                             onChangeText={setPostingDate}
                         />

                         <Text style={styles.label}>Quantity</Text>
                         <TextInput
                             style={styles.input}
                             placeholder="Enter Quantity"
                             value={quantity}
                             onChangeText={setQuantity}
                             keyboardType="numeric"
                         />

                         <Text style={styles.label}>Asset Value</Text>
                         <TextInput
                             style={styles.input}
                             placeholder="Enter Asset Value"
                             value={assetValue}
                             onChangeText={setAssetValue}
                             keyboardType="numeric"
                         />
                         <Text style={styles.label}>Business Transaction Type</Text>
                         <TextInput
                              style={styles.input}
                              placeholder="Enter Business Transaction Type"
                              value={businessTransactionType}
                              onChangeText={setBusinessTransactionType}
                              keyboardType="numeric"
                         />
                         <Text style={styles.label}>Company Code</Text>
                         <TextInput
                            style={styles.input}
                            placeholder="Enter Company Code"
                            value={companyCode}
                            onChangeText={setCompanyCode}
                            keyboardType="numeric"
                         />
                         <Text style={styles.label}>Asset Type</Text>
                         <TextInput
                             style={styles.input}
                             placeholder="Enter Asset Type"
                             value={assetType}
                             onChangeText={setAssetType}
                             keyboardType="numeric"
                         />

                         <Text style={styles.label}>Business Unit</Text>
                         <TextInput
                             style={styles.input}
                             placeholder="Enter Business Unit"
                             value={businessUnit}
                             onChangeText={setBusinessUnit}
                             keyboardType="numeric"
                         />

                         <Text style={styles.label}>Currency</Text>
                         <TextInput
                             style={styles.input}
                             placeholder="Enter Currency"
                             value={currency}
                             onChangeText={setCurrency}
                             keyboardType="numeric"
                         />

                         <Text style={styles.label}>Trading Partner</Text>
                         <TextInput
                             style={styles.input}
                             placeholder="Enter Trading Partner"
                             value={tradingPartner}
                             onChangeText={setTradingPartner}
                             keyboardType="numeric"
                         />

                         <Text style={styles.label}>Base Unit Code</Text>
                         <TextInput
                              style={styles.input}
                              placeholder="Enter Base Unit Code"
                              value={baseUnitCode}
                              onChangeText={setBaseUnitCode}
                              keyboardType="numeric"
                         />

                         <Button title="Submit" onPress={handleSubmit} disabled={!isFormValid()} />
                     </View>
                 </ScrollView>
       );

}
const styles = StyleSheet.create({
        container: {  flexGrow: 1, padding: 20, backgroundColor: '#fff'},
        header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
        image: { width: 100, height: 50 },
        backButton: { padding: 10, backgroundColor: '#ddd', borderRadius: 5 },
        buttonText: { color: '#000' },
        formContainer: { marginTop: 20 },
        label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 , color:"black"},
        input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5,color:"black" },
        dropdownContainer: { marginBottom: 15 },
        picker: { height: 50, width: '100%' },
        modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        modalContent: { width: 300, padding: 20, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center' },
        successIcon: { color: 'green', fontSize: 40, marginBottom: 10 },
        successText: { fontSize: 20, fontWeight: 'bold' },
        modalButtons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, width: '100%' }
});
export default HomeScreen;