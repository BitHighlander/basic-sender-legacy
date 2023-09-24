import React, { useEffect, useState } from "react";
import {
  Button,
  useDisclosure,
  Modal,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Text,
  Switch,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  usePioneer,
  AssetSelect,
  BlockchainSelect,
  WalletSelect,
  // @ts-ignore
} from "pioneer-react";
import { BASIC_ASSETS } from "./components/coins";

const Home = () => {
  const { state } = usePioneer();
  const { app, status } = state;
  const [address, setAddress] = useState("");
  const [modalType, setModalType] = useState("");
  const [advancedMode, setAdvancedMode] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [assetsWithDetails, setAssetsWithDetails] = useState([]);

  useEffect(() => {
    setAddress(app?.pubkeyContext.master || app?.pubkeyContext.pubkey);
  }, [app?.pubkeyContext]);

  const openModal = (type: any) => {
    setModalType(type);
    onOpen();
  };

  const onStart = async () => {
    try {
      const assetsWithPubkey = await Promise.all(
        BASIC_ASSETS.map(async (asset: any) => {
          const pubkey = await app.pubkeys.find(
            (pubkey: any) => pubkey.symbol === asset.symbol
          );
          if (pubkey) {
            asset.address = pubkey.master || pubkey.pubkey;
            asset.pubkey = pubkey.pubkey;
          }
          const balance = await app.balances.find(
            (balance: any) => balance.symbol === asset.symbol
          );
          if (balance) {
            asset.balance = balance ? balance.balance : 0;
          }
          return asset;
        })
      );
      setAssetsWithDetails(assetsWithPubkey);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    onStart();
  }, [status, app, app?.pubkeys, app?.balances]);

  return (
    <div style={{ overflow: "auto", maxHeight: "80vh" }}>
      <Stack spacing="4">
        <Switch
          isChecked={advancedMode}
          onChange={() => setAdvancedMode(!advancedMode)}
          colorScheme="teal"
          size="sm" // Smaller switch
        >
          Advanced Mode
        </Switch>
      </Stack>
      <Stack spacing="4">
        {assetsWithDetails.map((asset: any) => {
          return (
            <div>
              <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                <GridItem colSpan={2} h="10">
                  <img
                    src={asset?.icon}
                    alt={asset?.symbol}
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }} // Round avatars
                  />
                  <Text>{asset?.name}</Text>
                </GridItem>
                <GridItem colStart={4} colEnd={6} h="10">
                  <Text fontSize="sm">
                    Balance: {asset?.balance} {asset?.symbol}
                  </Text>
                  <Text fontSize="sm">Balance in USD: </Text>
                  <Button size="sm" onClick={() => openModal("send")}>
                    Send
                  </Button>
                  <Button size="sm" onClick={() => openModal("receive")}>
                    Receive
                  </Button>
                </GridItem>
                <GridItem colStart={4} colEnd={6} h="10">
                  {advancedMode && (
                    <Tabs variant="soft-rounded" colorScheme="teal" size="sm">
                      <TabList>
                        <Tab>Basic</Tab>
                        <Tab>Paths</Tab>
                        <Tab>Nodes</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>{/* Basic Tab Content */}</TabPanel>
                        <TabPanel>
                          <Table>
                            <Button size="sm">Add Custom Path</Button>
                          </Table>
                        </TabPanel>
                        <TabPanel>
                          <Table>
                            <Button size="sm">Add Custom Node</Button>
                          </Table>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  )}
                </GridItem>
              </Grid>
            </div>
          );
        })}
      </Stack>
    </div>
  );
};

export default Home;
