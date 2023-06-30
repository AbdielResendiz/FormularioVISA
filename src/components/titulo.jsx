import { Text } from "native-base";
const Titulo =(props)=>{
    const {texto} = props;
    return(
        <Text bold fontSize={"xl"} alignSelf={"center"} my={3}>
            {texto}
        </Text>
    )
}
export default  Titulo;