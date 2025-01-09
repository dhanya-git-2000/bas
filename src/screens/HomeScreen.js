import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Modal, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {Fields} from '../assets/Files.js';


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
        const [dropdownValues, setDropdownValues] = useState(Fields.map(() => ""));

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


        const handleDropdownChange = (index, value) => {
            const updatedValues = [...dropdownValues];
            updatedValues[index] = value;
            setDropdownValues(updatedValues);
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
                             placeholderTextColor="black"
                         />

                         <Text style={styles.label}>Posting Date</Text>
                         <TextInput
                             style={styles.input}
                             placeholder="Enter Posting Date"
                             value={postingDate}
                             onChangeText={setPostingDate}
                             placeholderTextColor="black"
                         />

                         <Text style={styles.label}>Quantity</Text>
                         <TextInput
                             style={styles.input}
                             placeholder="Enter Quantity"
                             value={quantity}
                             onChangeText={setQuantity}
                             keyboardType="numeric"
                             placeholderTextColor="black"
                         />

                         <Text style={styles.label}>Asset Value</Text>
                         <TextInput
                             style={styles.input}
                             placeholder="Enter Asset Value"
                             value={assetValue}
                             onChangeText={setAssetValue}
                             keyboardType="numeric"
                             placeholderTextColor="black"
                         />
                        {Fields.map((field, index) => {
                                if (index % 2 === 0) {
                                  return (
                                    <View style={styles.row} key={index}>
                                      <Text style={styles.label}>
                                        {field.fieldItems}
                                      </Text>
                                      <View style={styles.inputContainer}>
                                        <Picker
                                          selectedValue={dropdownValues[index]}
                                          onValueChange={(value) => handleDropdownChange(index, value)}
                                          style={styles.picker}
                                        >
                                          <Picker.Item label="Select an option" value="" />
                                          {field.dropdown.map((option, subIndex) => (
                                            <Picker.Item key={subIndex} label={option.fieldItems.toString()} value={option.fieldItems} />
                                          ))}
                                        </Picker>
                                      </View>
                                      {index + 1 < Fields.length && (
                                        <>
                                          <Text style={styles.label}>
                                            {Fields[index + 1].fieldItems}
                                          </Text>
                                          <View style={styles.inputContainer}>
                                            <Picker
                                              selectedValue={dropdownValues[index + 1]}
                                              onValueChange={(value) => handleDropdownChange(index + 1, value)}
                                              style={styles.picker}
                                            >
                                              <Picker.Item label="Select an option" value="" />
                                              {Fields[index + 1].dropdown.map((option, subIndex) => (
                                                <Picker.Item key={subIndex} label={option.fieldItems.toString()} value={option.fieldItems} />
                                              ))}
                                            </Picker>
                                          </View>
                                        </>
                                      )}
                                    </View>
                                  );
                                }
                                return null;
                              })}
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
        input: { borderWidth: 1,fontSize:15, borderColor: '#ccc', paddingLeft: 10, marginBottom: 15, borderRadius: 5,color:"black" },
        modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        modalContent: { width: 300, padding: 20, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center' },
        successIcon: { color: 'green', fontSize: 40, marginBottom: 10 },
        successText: { fontSize: 20, fontWeight: 'bold' },
        modalButtons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, width: '100%' },
        inputContainer: {width: '100%',borderWidth: 1, borderColor: '#ccc', marginBottom: 15, borderRadius: 5},
        picker: {color:"black"},
});
export default HomeScreen;