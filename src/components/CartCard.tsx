// src/components/CartCard.tsx
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Importa o ícone Material Icons
import { ICartItem } from "../types/Product";
import { useCartContext } from "../contexts/CartContext";

interface CartCardProps {
  item: ICartItem;
}

const CartCard: React.FC<CartCardProps> = ({ item }) => {
  const { addProduct, removeProduct } = useCartContext();

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.product.title}</Text>
        <Text>Preço: ${item.product.price}</Text>
        <Text>Quantidade: {item.quantity}</Text>
      </View>
      <View style={styles.iconContainer}>
        {/* Botão para adicionar quantidade */}
        <TouchableOpacity onPress={() => addProduct(item.product)}>
          <Icon name="add" size={24} color="#000" />
        </TouchableOpacity>
        
        {/* Botão para remover quantidade */}
        <TouchableOpacity onPress={() => removeProduct(item.product.id)}>
          <Icon name="remove" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});