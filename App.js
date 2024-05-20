import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Button,
  Flex,
  AspectRatio,
  Checkbox,
  Input,
  Link,
  Radio,
  Select,
  Center,
  CheckIcon,
  Slider,
  VStack,
  HStack,
  Switch,
  TextArea,
  Badge,
  Divider,
  AlertDialog,
  Modal,
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
// import { Icon } from "native-base";

export default function App() {
  const [service, setService] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const onClose = () => setIsOpen(false);
  return (
    <NativeBaseProvider>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>up to date</Text>
        <StatusBar style="auto" />
      </View> */}
      <Box
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        p={5}
        gap={3}
      >
        Hello World
        <Button
          variant="outline"
          colorScheme="success"
          onLongPress={() => alert("long press")}
        >
          Button
        </Button>
        <Button variant="ghost" colorScheme="success">
          Success
        </Button>
        <Button borderRadius="full" colorScheme="success">
          Success
        </Button>
        <Button
          leftIcon={<Icon name="cog-outline" size={24} color="white" />}
          colorScheme="danger"
        >
          Settings
        </Button>
        <Button isLoading>Button</Button>
        <Button.Group
          isAttached
          colorScheme="blue"
          mx={{
            base: "auto",
            md: 0,
          }}
          size="sm"
        >
          <Button>Edit</Button>
          <Button variant="outline">Save</Button>
        </Button.Group>
        <Flex direction="row" h={50}>
          <Box bg="primary.500" flex={7}>
            Box 1 (70%)
          </Box>
          <Box bg="secondary.500" flex={3}>
            Box 2 (30%)
          </Box>
        </Flex>
        <HStack space={4}>
          <TextArea
            h={20}
            placeholder="Text Area Placeholder"
            w="75%"
            maxW="150"
          />

          <TextArea
            h={20}
            placeholder="Text Area Placeholder"
            w="75%"
            maxW="150"
          />
        </HStack>
        <Box alignItems="center">
          <VStack>
            <Badge // bg="red.400"
              colorScheme="danger"
              rounded="full"
              mb={-4}
              mr={-4}
              zIndex={1}
              variant="solid"
              alignSelf="flex-end"
              _text={{
                fontSize: 12,
              }}
            >
              2
            </Badge>
            <Button
              mx={{
                base: "auto",
                md: 0,
              }}
              p="2"
              bg="cyan.500"
              _text={{
                fontSize: 14,
              }}
            >
              Notifications
            </Button>
          </VStack>

          <Center>
            <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
              Delete Customer
            </Button>
            <AlertDialog
              leastDestructiveRef={cancelRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <AlertDialog.Content>
                <AlertDialog.CloseButton />
                <AlertDialog.Header>Delete Customer</AlertDialog.Header>
                <AlertDialog.Body>
                  This will remove all data relating to Alex. This action cannot
                  be reversed. Deleted data can not be recovered.
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button.Group space={2}>
                    <Button
                      variant="unstyled"
                      colorScheme="coolGray"
                      onPress={onClose}
                      ref={cancelRef}
                    >
                      Cancel
                    </Button>
                    <Button colorScheme="danger" onPress={onClose}>
                      Delete
                    </Button>
                  </Button.Group>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog>
          </Center>

          <Center>
            <Button onPress={() => setShowModal(true)}>Button</Button>
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              size="lg"
            >
              <Modal.Content maxWidth="350">
                <Modal.CloseButton />
                <Modal.Header>Order</Modal.Header>
                <Modal.Body>
                  <VStack space={3}>
                    <HStack alignItems="center" justifyContent="space-between">
                      <Text fontWeight="medium">Sub Total</Text>
                      <Text color="blueGray.400">$298.77</Text>
                    </HStack>
                    <HStack alignItems="center" justifyContent="space-between">
                      <Text fontWeight="medium">Tax</Text>
                      <Text color="blueGray.400">$38.84</Text>
                    </HStack>
                    <HStack alignItems="center" justifyContent="space-between">
                      <Text fontWeight="medium">Total Amount</Text>
                      <Text color="green.500">$337.61</Text>
                    </HStack>
                  </VStack>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    flex="1"
                    onPress={() => {
                      setShowModal2(true);
                    }}
                  >
                    Continue
                  </Button>
                </Modal.Footer>
              </Modal.Content>
            </Modal>

            <Modal
              isOpen={showModal2}
              onClose={() => setShowModal2(false)}
              size="lg"
            >
              <Modal.Content maxWidth="350">
                <Modal.CloseButton />
                <Modal.Header>Select Address</Modal.Header>
                <Modal.Body>
                  <Radio.Group defaultValue="address1" name="address" size="sm">
                    <VStack space={3}>
                      <Radio
                        alignItems="flex-start"
                        _text={{
                          mt: "-1",
                          ml: "2",
                          fontSize: "sm",
                        }}
                        value="address1"
                      >
                        4140 Parker Rd. Allentown, New Mexico 31134
                      </Radio>
                      <Radio
                        alignItems="flex-start"
                        _text={{
                          mt: "-1",
                          ml: "2",
                          fontSize: "sm",
                        }}
                        value="address2"
                      >
                        6391 Elign St. Celina, Delaware 10299
                      </Radio>
                    </VStack>
                  </Radio.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    flex="1"
                    onPress={() => {
                      setShowModal3(true);
                    }}
                  >
                    Continue
                  </Button>
                </Modal.Footer>
              </Modal.Content>
            </Modal>

            <Modal
              isOpen={showModal3}
              size="lg"
              onClose={() => setShowModal3(false)}
            >
              <Modal.Content maxWidth="350">
                <Modal.CloseButton />
                <Modal.Header>Payment Options</Modal.Header>
                <Modal.Body>
                  <Radio.Group name="payment" size="sm">
                    <VStack space={3}>
                      <Radio
                        alignItems="flex-start"
                        _text={{
                          mt: "-1",
                          ml: "2",
                          fontSize: "sm",
                        }}
                        value="payment1"
                      >
                        Cash on delivery
                      </Radio>
                      <Radio
                        alignItems="flex-start"
                        _text={{
                          mt: "-1",
                          ml: "2",
                          fontSize: "sm",
                        }}
                        value="payment2"
                      >
                        Credit/ Debit/ ATM Card
                      </Radio>
                      <Radio
                        alignItems="flex-start"
                        _text={{
                          mt: "-1",
                          ml: "2",
                          fontSize: "sm",
                        }}
                        value="payment3"
                      >
                        UPI
                      </Radio>
                    </VStack>
                  </Radio.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    flex="1"
                    onPress={() => {
                      setShowModal(false);
                      setShowModal2(false);
                      setShowModal3(false);
                    }}
                  >
                    Checkout
                  </Button>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </Center>
        </Box>
        <Box alignItems="center">
          <Flex direction="row" h="58" p="4">
            <Text>Simple</Text>
            <Divider
              bg="emerald.500"
              thickness="2"
              mx="2"
              orientation="vertical"
            />
            <Text>Easy</Text>
            <Divider
              bg="indigo.500"
              thickness="2"
              mx="2"
              orientation="vertical"
            />
            <Text>Beautiful</Text>
          </Flex>
        </Box>
        <Box alignItems="center" w="100%">
          <VStack w="3/4" maxW="300" space={4}>
            <Slider defaultValue={70} colorScheme="orange">
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
            <Slider defaultValue={70} colorScheme="emerald">
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
            <Slider defaultValue={70} colorScheme="indigo">
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </VStack>
        </Box>
        <Center>
          <VStack space={4} alignItems="center">
            <Switch defaultIsChecked colorScheme="primary" />
            <Switch defaultIsChecked colorScheme="secondary" />
            <Switch defaultIsChecked colorScheme="emerald" />
          </VStack>
          <Box maxW="300">
            <Select
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
          </Box>
        </Center>
        <Link
          isExternal
          _text={{
            color: "blue.400",
          }}
          mt={-0.5}
          _web={{
            mb: -2,
          }}
          href="https://nativebase.io"
        >
          Click here to open documentation.
        </Link>
        <AspectRatio
          ratio={{
            base: 3 / 4,
            md: 9 / 10,
          }}
          height={{
            base: 200,
            md: 400,
          }}
        >
          <Image
            resizeMode="cover"
            source={{
              uri: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            }}
            alt="Picture of a Flower"
          />
        </AspectRatio>
        <Radio.Group
          defaultValue="2"
          name="exampleGroup"
          accessibilityLabel="select prize"
        >
          <Radio value="1" my={1} isDisabled>
            First
          </Radio>
          <Radio value="2" my={1}>
            Second
          </Radio>
          <Radio value="3" my={1}>
            Third
          </Radio>
        </Radio.Group>
        <Checkbox value="test" defaultIsChecked />
        <Checkbox isInvalid value="invalid">
          Software Development
        </Checkbox>
        <Input variant="rounded" placeholder="Round" />
        <Input
          w={{
            base: "75%",
            md: "25%",
          }}
          InputLeftElement={
            <Icon name="person" size={25} ml="2" color="muted.400" />
          }
          placeholder="Name"
        />
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
