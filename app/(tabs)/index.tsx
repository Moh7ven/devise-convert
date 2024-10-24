import React, { useEffect, useState } from "react";
import { HStack, Box, RepeatIcon, set } from "@gluestack-ui/themed";
import { Icon } from "@/components/ui/icon";

import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import SelectDeviseFrom from "@/components/SelectDeviseFrom";
import SelectDeviseTo from "@/components/SelectDeviseTo";
import DeviseComponant from "@/components/DeviseComponant";
import { getAllCurrencies } from "@/utils/controllers/GetAllCurrencies";
import { CurrencyItem } from "@/utils/types/CurrencyItem";
export default function TabOneScreen() {
  const [currencyArray, setCurrencyArray] = useState<CurrencyItem[]>([]);
  const [deviseFromValue, setDeviseFromValue] = useState<string>("");
  const [deviseToValue, setDeviseToValue] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const result = await getAllCurrencies();
      setCurrencyArray(
        result &&
          Object.keys(result).map((key) => ({
            value: key,
            label: result[key],
          }))
      );
    }

    fetchData();
  }, []);

  const deviseFrom = (value: string) => {
    console.log("Devise from: ", value);
    setDeviseFromValue(value);
  };

  const deviseTo = (value: string) => {
    console.log("Devise to: ", value);
    setDeviseToValue(value);
  };

  return (
    <View style={styles.container}>
      <HStack
        space="md"
        reversed={false}
        className="w-[90%] flex-row align-center justify-around"
      >
        <SelectDeviseFrom
          placeholder="You are"
          currencies={currencyArray}
          deviseFrom={deviseFrom}
        />
        <Box className="h-[40px] w-[40px] border-2 border-orange-400 rounded-md flex items-center justify-center">
          <Icon as={RepeatIcon} className="text-orange-400" />
        </Box>
        <SelectDeviseTo
          placeholder="You need"
          currencies={currencyArray}
          deviseTo={deviseTo}
        />
      </HStack>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <DeviseComponant />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  hstak: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
