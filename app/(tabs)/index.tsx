import React from "react";
import { HStack, Box, RepeatIcon } from "@gluestack-ui/themed";
import { Icon } from "@/components/ui/icon";

import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import SelectDevise from "@/components/SelectDevise";
import DeviseComponant from "@/components/DeviseComponant";
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <HStack
        space="md"
        reversed={false}
        className="w-[90%] flex-row align-center justify-around"
      >
        <SelectDevise placeholder="You are" />
        <Box className="h-[40px] w-[40px] border-2 border-orange-400 rounded-md flex items-center justify-center">
          <Icon as={RepeatIcon} className="text-orange-400" />
        </Box>
        <SelectDevise placeholder="You need" />
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
