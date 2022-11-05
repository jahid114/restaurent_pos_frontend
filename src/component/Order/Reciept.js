import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f3f5f9',
    color: 'black',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth - 250, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// Create Document Component
function BasicDocument() {
  const { state } = useLocation();
  const { items, totalPrice, date } = state;
  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size='A6' style={styles.page}>
          <View style={styles.section}>
            <Text style={{ fontSize: '17px', textAlign: 'center' }}>Receipt</Text>

            <Text style={{ fontSize: '12px', textAlign: 'right' }}>{date}</Text>
          </View>
          <View style={styles.section}>
            <Text style={{ marginBottom: '10px', fontSize: '17px' }}>Ordered Items & Prices: </Text>
            {items.map((item, indx) => (
              <Text style={{ fontSize: '12px', margin: '4px' }}>
                {indx + 1}. {item?.item?.name} x {item.quantity} = {item?.item?.price} x {item.quantity}
              </Text>
            ))}
          </View>
          <View style={styles.section}>
            <Text>Total: {totalPrice} TK</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
