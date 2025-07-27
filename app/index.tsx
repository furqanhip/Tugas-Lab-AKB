import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1 }}>
      <Text style={{ fontSize: 50, marginBottom: 10 }}>Daftar 10 Ikon:</Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        <AntDesign name="stepforward" size={100} color="Red" />
        <AntDesign name="stepbackward" size={100} color="Red" />
        <Entypo name="infinity" size={100} color="Red" />
        <Entypo name="aircraft" size={100} color="Red" />
        <EvilIcons name="bell" size={100} color="Red" />
        <EvilIcons name="calendar" size={100} color="Red" />
        <Feather name="activity" size={100} color="Red" />
        <Feather name="airplay" size={100} color="Red" />
        <FontAwesome name="heart" size={100} color="Red" />
        <FontAwesome name="star" size={100} color="Red" />
      </View>
    </ScrollView>
  );
}