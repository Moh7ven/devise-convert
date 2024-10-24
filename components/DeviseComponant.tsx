import React, { useEffect, useState } from "react";
import { View, Text } from "./Themed";
import { Input, InputField } from "@/components/ui/input";
import OutputDevise from "./OutputDevise";

export default function DeviseComponant({ amountValue }: number) {
  const handleAmount = (value: number) => {
    amountValue(value);
  };
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
          onChangeText={(value) => handleAmount(Number(value))}
        />
      </Input>
      <View className="w-[90%] mg-t-5">
        <Text className="text-4xl font-bold">=</Text>
      </View>
      <OutputDevise />
    </View>
  );
}
