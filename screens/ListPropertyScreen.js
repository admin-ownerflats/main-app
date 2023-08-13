import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import PropertyListingForm from "../components/PropertyListingForm";

const ListPropertyScreen = () => {
    return (
        <>
            <ScrollView
                style={{ backgroundColor: "#F0F0F0", flex: 1, marginTop: 50 }}
            >
                <PropertyListingForm />
            </ScrollView>
        </>
    )
};

export default ListPropertyScreen;

const styles = StyleSheet.create({});