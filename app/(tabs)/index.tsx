import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { PRODUCTS } from '@/assets/products'
import { CATEGORIES } from '@/assets/categories'
import ProductListItem from '@/components/product-list-item'
import { ListHeader } from '@/components/list-header'

const Home = () => {
  return (
    <FlatList
      data={PRODUCTS}
      renderItem={({ item }) => <ProductListItem product={item} />}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      ListHeaderComponent={<ListHeader categories={CATEGORIES} />}
      columnWrapperStyle={styles.flatListColumn}
      contentContainerStyle={styles.flatListContent}
      style={{ paddingHorizontal: 10, paddingVertical: 5 }}
    />
  )
}

export default Home

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: 'space-between',
  },
})
