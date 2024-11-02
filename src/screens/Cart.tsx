import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useCartContext } from "../contexts/CartContext";
import CartCard from "../components/CartCard";

const Cart = () => {
  const { cart, getCart } = useCartContext();

  useEffect(() => {
    getCart(); // Carrega o carrinho ao montar o componente
  }, []);

  console.log("Itens no carrinho:", cart);

  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        cart.map(item => (
          <CartCard key={item.product.id} item={item} />
        ))
      ) : (
        <Text style={styles.emptyText}>Carrinho vazio</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#666",
  },
});
