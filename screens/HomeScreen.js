import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Alert,
    Pressable,
    Image,
    TextInput,
    ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import { useNavigation } from "@react-navigation/native";
import FancyTagline from "../components/FancyTagline";
import FilterBuyRentCommercial from "../components/FilterBuyRent";
import NeedAssistanceCard from "../components/NeedAssistanceCard";
import ListPropertyCard from "../components/ListPropertyCard";
import LastSearchPropertyList from "../components/LastSearchPropertyList";
import WhyOwnerflatsView from "../components/WhyOwnerFlatsView";
import NewProjects from "../components/NewProjects";
import firestore from "@react-native-firebase/firestore";


const HomeScreen = () => {
    const lastSearchedCity = 'Bangalore';
    const navigation = useNavigation();
    const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
        "we are loading your location"
    );
    const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);
    useEffect(() => {
        checkIfLocationEnabled();
        getCurrentLocation();
    }, []);
    useEffect(()=> {
        getDatabase();
    })
    const getDatabase = async () => {
        console.log("Hello");
        try {
            const data = await firestore().collection("testing").get();
            console.log(data);
        }
        catch (e) {
            console.log(e);
        }
    }
    const checkIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        if (!enabled) {
            Alert.alert(
                "Location services not enabled",
                "Please enable the location services",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                ],
                { cancelable: false }
            );
        } else {
            setlocationServicesEnabled(enabled);
        }
    };
    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
            Alert.alert(
                "Permission denied",
                "allow the app to use the location services",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                ],
                { cancelable: false }
            );
        }

        const { coords } = await Location.getCurrentPositionAsync();
        if (coords) {
            const { latitude, longitude } = coords;

            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            });

            // console.log(response)

            for (let item of response) {
                let address = `${item.name} ${item.city} ${item.postalCode}`;
                setdisplayCurrentAddress(address);
            }
        }
    };
    return (
        <>
            <ScrollView
                style={{ backgroundColor: "#F0F0F0", flex: 1, marginTop: 50 }}
            >
                {/* Location and Profile */}
                <View
                    style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
                >
                    <MaterialIcons name="location-on" size={30} color="#fd5c63" />
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
                        <Text>{displayCurrentAddress}</Text>
                    </View>

                    <Pressable onPress={() => navigation.navigate("Profile")} style={{ marginLeft: "auto", marginRight: 7 }}>
                        <Image
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                            source={{
                                uri: "https://lh3.googleusercontent.com/ogw/AAEL6sh_yqHq38z35QMy5Fnb8ZIxicdxCIVM9PeBD2j-=s64-c-mo",
                            }}
                        />
                    </Pressable>
                </View>

                {/* Owner Flats Tagline */}
                <FancyTagline />

                {/* Buy / Rent Filter */}
                <FilterBuyRentCommercial />

                {/* Search Bar */}
                <View
                    style={{
                        padding: 10,
                        margin: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderWidth: 0.8,
                        borderColor: "#C0C0C0",
                        borderRadius: 7,
                    }}
                >
                    <TextInput placeholder="Search for Properties here" />
                    <Feather name="search" size={24} color="#fd5c63" />
                </View>

                {/* List Property Card and Button */}
                <ListPropertyCard />
                
                {/* Last Search Based */}
                <LastSearchPropertyList lastSearchedCity={lastSearchedCity} />

                {/* Why Ownerflats ? */}
                <WhyOwnerflatsView />

                {/* New Projects Card */}
                <NewProjects city="Bangalore" />

                 {/* New Projects Carousel
                 <Carousel /> */}

                {/* Bottom Assistence Card  */}
                <NeedAssistanceCard />
            </ScrollView>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
});
