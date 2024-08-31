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

export default function SelectDevise({
  placeholder,
  currencies,
}: SelectDeviseProps) {
  console.log("Currencies: ", currencies);

  function handleSelect() {
    console.log("Select");
  }

  return (
    <View>
      <Select>
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
              keyExtractor={(item: CurrencyItem, _): string => item.value}
              renderItem={({ item }) => (
                <SelectItem
                  key={item.value}
                  label={item.value + " - " + item.label}
                  value={item.value}
                  onPress={handleSelect}
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
}
