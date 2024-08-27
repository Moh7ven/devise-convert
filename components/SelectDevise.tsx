import React from "react";
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
} from "@/components/ui/select";
import { ChevronDownIcon } from "@/components/ui/icon";

export default function SelectDevise({
  placeholder,
  ...props
}: SelectDeviseProps) {
  return (
    <View>
      <Select>
        <SelectTrigger variant="rounded" size="md">
          <SelectInput placeholder={placeholder} />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="UX Research" value="ux" />
            <SelectItem label="Web Development" value="web" />
            <SelectItem
              label="Cross Platform Development Process"
              value="Cross Platform Development Process"
            />
            <SelectItem label="UI Designing" value="ui" isDisabled={true} />
            <SelectItem label="Backend Development" value="backend" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
}

type SelectDeviseProps = {
  placeholder: string;
};
