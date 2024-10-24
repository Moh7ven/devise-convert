import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  SelectFlatList,
} from "@/components/ui/select";
import { ChevronDownIcon } from "@/components/ui/icon";
import { CurrencyItem } from "@/utils/types/CurrencyItem";

export default function SelectDeviseFromTo({
  placeholder,
  currencies,
  deviseTo,
}: SelectDeviseProps) {
  // console.log("Currencies: ", currencies);

  const [deviseCollected, setDeviseCollected] = useState<object>({});

  function handleSelect(value: string) {
    deviseTo(value);
  }

  return (
    <View>
      <Select onValueChange={(value) => handleSelect(value)}>
        <SelectTrigger variant="rounded" size="md" className="w-[120px]">
          <SelectInput
            placeholder={placeholder}
            className="w-[90px] overflow-hidden text-ellipsis whitespace-nowrap"
          />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent maxHeight={400}>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectFlatList
              data={currencies}
              onPress={handleSelect}
              keyExtractor={(item: CurrencyItem, _): string => item.value}
              renderItem={({ item }) => (
                <SelectItem
                  key={item.value}
                  label={item.value + " - " + item.label}
                  value={item.value}
                />
              )}
            />
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
}

interface SelectDeviseProps {
  placeholder: string;
  currencies: CurrencyItem[];
  snapPoints?: number[];
  maxHeight?: number;
  deviseTo: (value: string) => void;
}
