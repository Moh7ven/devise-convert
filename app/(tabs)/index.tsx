import React, { useEffect, useState } from "react";
import {
  HStack,
  Box,
  RepeatIcon,
  VStack,
  Button,
  ButtonText,
  Pressable,
} from "@gluestack-ui/themed";
import { Icon, HelpCircleIcon, CloseIcon } from "@/components/ui/icon";

import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import SelectDeviseFrom from "@/components/SelectDeviseFrom";
import SelectDeviseTo from "@/components/SelectDeviseTo";
import DeviseComponant from "@/components/DeviseComponant";
import { getAllCurrencies } from "@/utils/controllers/GetAllCurrencies";
import { CurrencyItem } from "@/utils/types/CurrencyItem";
import {
  useToast,
  Toast,
  ToastTitle,
  ToastDescription,
} from "@/components/ui/toast";

export default function TabOneScreen() {
  const [currencyArray, setCurrencyArray] = useState<CurrencyItem[]>([]);
  const [deviseFromValue, setDeviseFromValue] = useState<string>("");
  const [deviseToValue, setDeviseToValue] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const toast = useToast();
  const [toastId, setToastId] = React.useState(0);

  const handleToast = () => {
    if (!toast.isActive(toastId)) {
      showNewToast();
    }
  };
  const showNewToast = () => {
    const newId = Math.random();
    setToastId(newId);
    toast.show({
      id: newId,
      placement: "top",
      duration: 3000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast
            action="error"
            variant="outline"
            nativeID={uniqueToastId}
            className="p-4 gap-6 border-error-500 w-full shadow-hard-5 max-w-[443px] flex-row justify-between"
          >
            <HStack space="md">
              <Icon as={HelpCircleIcon} className="stroke-error-500 mt-0.5" />
              <VStack space="xs">
                <ToastTitle className="font-semibold text-error-500">
                  Error!
                </ToastTitle>
                <ToastDescription size="sm">
                  Something went wrong.
                </ToastDescription>
              </VStack>
            </HStack>
            {/* <HStack className="min-[450px]:gap-3 gap-1">
              <Button variant="link" size="sm" className="px-3.5 self-center">
                <ButtonText>Retry</ButtonText>
              </Button>
              <Pressable onPress={() => toast.close(id)}>
                <Icon as={CloseIcon} />
              </Pressable>
            </HStack> */}
          </Toast>
        );
      },
    });
  };

  useEffect(() => {
    async function fetchData() {
      const result = await getAllCurrencies();
      if (result && result.length === 0) {
        handleToast();
      } else {
        setCurrencyArray(
          result &&
            Object.keys(result).map((key) => ({
              value: key,
              label: result[key],
            }))
        );
      }
    }

    fetchData();
  }, []);

  const convertCurrencies = async () => {
    if (deviseFromValue && deviseToValue) {
    }
  };

  const deviseFrom = (value: string) => {
    console.log("Devise from: ", value);
    setDeviseFromValue(value);
  };

  const deviseTo = (value: string) => {
    console.log("Devise to: ", value);
    setDeviseToValue(value);
  };

  const amountValue = (value: number) => {
    console.log("Amount: ", value);
    setAmount(value);
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
      <DeviseComponant amountValue={amountValue} />
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
