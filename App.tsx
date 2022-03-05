import { Button, StyleSheet, View, Text } from "react-native";
import * as Linking from "expo-linking";

export default function App() {
  return (
    <View style={styles.container}>
      <SubTitle text="direct linking" />
      <StyledButton
        text="open location (Ghent) in Rodi"
        url="rodi://openCoordinate/?lat=51.0543422&lon=3.7174243"
      />

      <SubTitle text="linking with website fallback" />
      <StyledButton
        text="open location (Ghent) in Rodi"
        url="https://rodi.app/open?lat=51.0543422&lon=3.7174243"
      />
    </View>
  );
}

const StyledButton = ({ text, url }: { text: string; url: string }) => {
  return (
    <View
      style={{
        marginVertical: 12,
      }}
    >
      <Button
        title={text}
        onPress={() => {
          Linking.openURL(url);
        }}
      />
    </View>
  );
};

const SubTitle = ({ text }: { text: string }) => {
  return <Text style={{ fontSize: 24, marginTop: 48 }}>{text}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
