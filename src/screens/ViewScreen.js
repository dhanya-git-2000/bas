import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import image from '../images/BAS-logo-1.jpg'


const ViewScreen = ({ navigation,route }) => {

    const { selectedItem} = route.params;
    const handlePreviousPage=()=>{
       navigation.goBack();
    }


    return (

     <ScrollView style={styles.container}>
           <View style={styles.header}>
             <View style={styles.buttonGroup}>
               <TouchableOpacity style={styles.button} onPress={handlePreviousPage}>
                 <Text style={styles.buttonText}>Back</Text>
               </TouchableOpacity>
             </View>
           </View>

           {/* Product Details */}
           <View style={styles.detailsWrapper}>
             <View style={styles.productDescription}>
               <Text style={styles.productTitle}>{selectedItem.ItemName}</Text>
               <Image
                                             source={selectedItem.image}
                                             style={styles.itemImage}
                                             resizeMode="contain"
                                           />
               <Text style={styles.productDescriptionText}>
                 The DELL INSPIRON 5584-N1268-SLR 15.6" FHD Laptop is a powerful and versatile laptop designed for both work and entertainment. Equipped with a 15.6-inch Full HD display, it delivers crisp visuals and a vibrant viewing experience, perfect for productivity tasks, media consumption, and gaming. Its Intel Core i5 processor ensures smooth performance, handling everyday applications and multitasking with ease.
               </Text>
             </View>

             <View style={styles.row}>

               <View style={styles.detailsContainer}>
                 {[
                   { label: "UUID", value: selectedItem.Uuid },
                   { label: "Item Name", value: selectedItem.ItemName },
                   { label: "Posting Date", value: selectedItem.PostingDate },
                   { label: "Quantity", value: selectedItem.Quantity },
                   { label: "Asset Value", value: selectedItem.AssetValue },
                   { label: "Business Transaction Type", value: selectedItem.BusTransType },
                   { label: "Company Code", value: selectedItem.CompanyCode },
                   { label: "Asset Type", value: selectedItem.AssetType },
                   { label: "Business Unit", value: selectedItem.BusUnit },
                   { label: "Currency", value: selectedItem.Currency },
                   { label: "Trading Partner", value: selectedItem.TradPartner },
                   { label: "Base Unit Code", value: selectedItem.BaseUnitCode },
                 ].map(({ label, value }, index) => (
                   <View key={index} style={styles.detailRow}>
                     <Text style={styles.detailLabel}>{label}:</Text>
                     <Text style={styles.detailValue}>{value}</Text>
                   </View>
                 ))}
               </View>
             </View>
           </View>
         </ScrollView>
       );
     };

     const styles = StyleSheet.create({
       container: {
         flex: 1,
         backgroundColor: 'white',
       },
       header: {
         flexDirection: 'row',
         alignItems: 'center',
         padding: 16,
         backgroundColor: 'white',
       },
       image: {
         width: 100,
         height: 100,
       },
       buttonGroup: {
         marginLeft: 'auto',
       },
       button: {
         backgroundColor: '#df1e26',
         padding: 10,
         borderRadius: 5,
       },
       buttonText: {
         color: 'white',
         fontSize: 16,
       },
       detailsWrapper: {
         padding: 16,
       },
       productDescription: {
         marginBottom: 16,
       },
       productTitle: {
         fontSize: 24,
         fontWeight: 'bold',
         marginBottom: 8,
       },
       productDescriptionText: {
         fontSize: 16,
         color: 'black',
       },
       row: {
         flexDirection: 'row',
         alignItems: 'flex-start',
         marginTop: 16,
       },
       imageContainer: {
         width: 150,
         marginRight: 16,
         textAlign: 'center',
       },
       itemImage: {
         width: 150,
         height: 150,
         marginLeft:80


       },
       detailsContainer: {
         flex: 1,
         flexDirection: 'row',
         flexWrap: 'wrap',
         justifyContent: 'space-between',
       },
       detailRow: {
         width: '45%',
         marginBottom: 12,
       },
       detailLabel: {
         fontWeight: 'bold',
         fontSize: 15,
         color:"black"
       },
       detailValue: {
         fontSize: 15,
         marginTop: 4,
          color:"black"
       },
     });
export default ViewScreen