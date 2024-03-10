import React from 'react'
import { ScrollView } from 'react-native'
import HeaderMain from "../../components/HeaderMain"
import BannerControl from "../../components/BannerControl"
import MainCategories from "../../components/MainCategories"
function index () {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <HeaderMain />
      <BannerControl />
      <MainCategories />
    </ScrollView>
  )
}


export default index