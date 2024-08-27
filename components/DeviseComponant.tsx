import React, { useEffect, useState } from "react";
import { View, Text } from "./Themed";
import { Input, InputField } from "@/components/ui/input";
import OutputDevise from "./OutputDevise";
import { TextInput } from "react-native";
import { getAllCurrencies } from "@/utils/controllers/GetAllCurrencies";
import { CurrencyItem } from "@/utils/types/CurrencyItem";

export default function DeviseComponant() {
  const [currencies, setCurrencies] = useState<CurrencyItem[]>([]);
  useEffect(() => {
    async function fetchData() {
      const result = await getAllCurrencies();
      return result;
    }
    fetchData();
  }),
    [];
  return (
    <View>
      <Input
        variant="outline"
        size="lg"
        className="w-[90%] h-[120px] border-gray-200 caret-transparent focus:border-orange-400"
      >
        <InputField
          type="text"
          placeholder="Enter your devise..."
          className="placeholder-italic text-3xl text-orange-400"
          keyboardType="numeric"
        />
      </Input>
      <View className="w-[90%] mg-t-5">
        <Text className="text-4xl font-bold">=</Text>
      </View>
      <OutputDevise />
    </View>
  );
}
