import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../style/colors';
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { Product } from '../../models';
import * as actions from "../../redux/Actions/cartAction";

type ProductItemType = {
    item: Product;
    addItemToCart: (a: Product) => void;
}

const { height, width } = Dimensions.get('window');

function Index({ item, addItemToCart }: ProductItemType) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("ProductDetails", { product:item })}
            style={{ width: width * 0.30, height: height * 0.33, marginLeft: 10, marginBottom: 15, marginTop: 10 }}
        >
            <View>
                <Image
                    style={{ width: width * 0.30, height: width * 0.30, borderWidth: 0.2, borderRadius: 7 }}
                    source={{ uri: item.image }}
                />
            </View>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
                <Text style={{ textDecorationLine: "line-through", color: colors.lightBlack, fontWeight: "bold", fontSize: 16 }}>
                    {"\u20BA"}{item.fiyat}
                </Text>
                <Text style={{ fontSize: 17, color: colors.mor, fontWeight: "bold" }}>
                    {"\u20BA"}{item.fiyatIndirimli}
                </Text>
            </View>
            <View>
                <Text style={{ fontWeight: "bold", marginTop: 8 }}>
                    {item.name}
                </Text>
                <Text style={{ color: colors.lightBlack, marginTop: 7, fontWeight: "bold" }}>{item.miktar}</Text>
            </View>
            <TouchableOpacity onPress={() => { addItemToCart(item) }}
                style={{
                    height: width * 0.10, width: width * 0.10, alignItems: "center", justifyContent: "center",
                    backgroundColor: "white", borderRadius: 8, position: "absolute", right: -10, top: -8,
                    shadowRadius: 3.8, shadowOpacity: 0.2
                }}
            >
                <Icon
                    name="plus" size={20} color={colors.mor}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product: Product) =>
            dispatch(actions.addToCart({ quantity: 1, product }))
    };
}

export default connect(null, mapDispatchToProps)(Index);
