import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import categoriesGetir from '../../../assets/categoriesGetir'
import { Categories } from '../../models'
import { colors } from '../../style/colors'

const { height, width } = Dimensions.get("window")
type CategoryBoxProps = {
    item: Categories,
    active: Categories | null,
}

const CategoryBox = ({ item, active } :  CategoryBoxProps) => {
    const isActive = active && item.name === active.name;
    return (
        <View style={[
            { flexDirection: "row", alignItems: "center", paddingHorizontal: 9 },
            isActive && { borderBottomColor:"#FFF078", borderBottomWidth:4 }
        ]}>
            <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
                {item.name}
            </Text>
        </View>
    )
}

export default function index({category}:{category:Categories}) {
    const [categories, setCategories] = useState<Categories[]>(categoriesGetir)
    

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            bounces={true}
            horizontal={true}
            style={{ backgroundColor: "#7849f7", width: "100%", height: height * 0.065 }}
        >
            {categories.map((item) => (
                <CategoryBox key={item.id} item={item} active={category} />
            ))}
        </ScrollView>
    )
}
