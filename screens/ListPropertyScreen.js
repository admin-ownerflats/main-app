import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ListingPage from "../components/ListingPage";

const ListPropertyScreen = () => {
    return (
        <>
            <ScrollView
                style={{ backgroundColor: "#F0F0F0", flex: 1, marginTop: 50 }}
            >
                <ListingPage />
            </ScrollView>
        </>
    )
};

export default ListPropertyScreen;

const styles = StyleSheet.create({});