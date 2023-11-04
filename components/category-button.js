import { Box, Heading } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";

// ini komponen yang hasilnya di tampilkan di UI
const CategoryButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={props.onPress}>
      <Box
        bgColor={props.isActive ? "$yellow400" : "$white"}
        px={"$4"}
        py={"$1"}
        mr={"$4"}
        ml={props.isFirst ? "$4" : "0"}
        borderRadius={"$full"}
      >
        <Heading color="$black" fontSize={"$sm"}>
          {camelToFlat(props.title)}
        </Heading>
      </Box>
    </TouchableOpacity>
  );
};

// ini fungsi, kareana melakukan sebuah opreasi, terdapat transformasi bentuk data dan tidak ditampilkan di UI
const camelToFlat = (camel) => {
  // Teks dalam camelCase menjadi tekas dengan spasi antar kata-kata
  const camelCase = camel.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ");
  let result = "";
  camelCase.forEach( //untuk iterasi
    (word) =>
      (result = result + word.charAt(0).toUpperCase() + word.slice(1) + " ")
  );
  return result;
};

export default CategoryButton;
