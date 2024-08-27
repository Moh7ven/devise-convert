import React from "react";
import { View, Text } from "./Themed";
import { Input, InputField } from "@/components/ui/input";
import { TextInput } from "react-native";

export default function OutputDevise() {
  return (
    <View className="w-full mg-t-5">
      <Input
        variant="outline"
        size="lg"
        className="w-[90%] h-[120px] border-gray-200 caret-transparent bg-orange-400   "
      >
        <InputField
          type="text"
          placeholder="Your converted devise..."
          className="placeholder-italic text-3xl pointer-events-none color-white font-bold "
          value="$0.00"
          keyboardType="numeric"
        />
      </Input>
    </View>
  );
}


