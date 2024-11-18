import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import { TabsProvider, Tabs, TabScreen } from 'react-native-paper-tabs';
import ShoppingList from '@components/ShoppingList'
import Online from './Online'
import Stores from './Stores'

const ShoppingListTab = () => {
  return (
    <>
    </>
    // <TabsProvider defaultIndex={0}>
    //   <Tabs style={{}}>
    //     <TabScreen label="Shopping Cart">
    //       <View style={styles.content}>
    //         {/* <ShoppingList/> */}
    //       </View>
    //     </TabScreen>
        
    //     <TabScreen label="Online">
    //       <View style={styles.content}>
    //         <Text>Explore online shopping options.</Text>
    //         <Online/>
    //       </View>
    //     </TabScreen>
        
    //     <TabScreen label="In Stores">
    //       <View style={styles.content}>
    //         <Text>Find nearby stores.</Text>
    //         <Stores/>
    //       </View>
    //     </TabScreen>
    //   </Tabs>
    // </TabsProvider>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShoppingListTab;
