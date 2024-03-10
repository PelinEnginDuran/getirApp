import React, { useState } from 'react'
import CategoriesItem from "../../components/CategoriesItem"
import { StyleSheet, View } from 'react-native'
import { Categories } from "../../models"
import categoriesGetir from '../../../assets/categoriesGetir'




const index = () => {
  const [categories, setCategories] = useState<Categories[]>(categoriesGetir)
  return (
    <View>
      <View style={styles.listContainer}>
        {
          categories.map((item) => (
            <CategoriesItem key={item.id} item={item} />
          ))
        }
      </View>

    </View>
  )
}
const styles=StyleSheet.create({
  listContainer:{
    flex:1,
    flexDirection:"row",
    alignItems:"flex-start",
    flexWrap:"wrap"

    

  }
})

export default index