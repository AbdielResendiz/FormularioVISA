import {  ScrollView, FormControl, Input,
  Text, Image, Stack, Box, Button, Icon, Pressable, View, Divider
} from "native-base";
import React, {useEffect, useState} from "react";
import Titulo from "./components/titulo";
import { FaCloudUploadAlt } from "react-icons/fa";

function App() {
  const [state, setState] = useState(0);
  // nueva true, renovacion false
  const [ nueva, setNueva] = useState(true);

  //variables
  const [ nombre, setNombre] = useState("");
  // const [ paterno, setPaterno] = useState("");
  // const [ ,set] = useState("");
  // const [ ,set] = useState("");
  // const [ ,set] = useState("");
  // const [ ,set] = useState("");


  useEffect(() => {
    console.log("nueva? ", nueva);
    
  }, [nueva]);

  const BotonVolver= ()=>{
    return(
    <Button onPress={()=>setState(state-1)}>
      Volver
    </Button>
  )}
  
  

const SwitchRender = ()=>{
  switch (state) {
    //inicio, pregunta si es renovacion o nueva visa
    case 0: 
      return(
      <Box>
        <Text mx={"10%"} px={4} borderWidth={1} borderRadius={10} p={6} color={"white"}  fontSize={"lg"} shadow={6} bg={"#0A3161:alpha.100"}>
        Estimado cliente, favor de llenar éste cuestionario contestando con la verdad y sea específico en
        sus respuestas , ya que la SOLICITUD DE VISA es el punto más importante del proceso de visado ,
        de ello depende la negación o la obtención de su visa, cualquier pregunta , no dude en contactar a
        su asesora de ventas. 
        </Text>

        <Text alignSelf={"center"} mt={5} bold fontSize={"lg"} color={"#ff3333"}>AVISO:</Text>
        <Text mx={"10%"} px={4} borderWidth={1} borderRadius={10} p={6}  shadow={6} mt={2} color={"white"} bold fontSize={"lg"}  bg={"#B31942:alpha.100"} >
        No deje espacios en blanco ya que para nosotros será que “no cuenta con el dato” y así llenaremos
        su solicitud.<br/> Tómese su tiempo , lea cuidadosamente las preguntas y no mienta u omita
        información relevante. 
        </Text>

        <Text alignSelf={"center"} bold my={2} mt={10}>¿Es la primera vez que tramitas tu VISA?</Text>
        <Stack direction={"row"} space={10} alignSelf={"center"} >
        <Button onPress={()=>setState(2)}  my={5}>
          Primera vez
        </Button>
        <Button onPress={()=>setState(1)}  my={5}>
          Renovación
        </Button>

        </Stack>

      </Box>
      )
      

      case 1: 
        return(
          <>
          <Titulo texto={"Renovación de VISA"}/>
          <Stack>
           
            
          <Button  size={"lg"} leftIcon={<Icon as={FaCloudUploadAlt}  size="xl"  color={"#ffffff"}/>}>
            Subir 
          </Button>


          </Stack>
          <BotonVolver/>
          </>
        )
      // formulario
      case 2: 
        return(
          <View px={"10%"}>
            <Titulo texto={"Tramitar VISA por primera vez"}/>
            <Stack space={3}>
              <FormControl>
                <FormControl.Label>APELLIDO PATERNO</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>APELLIDO MATERNO</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>NOMBRES</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>SEXO</FormControl.Label>
                
              </FormControl>

              <FormControl>
                <FormControl.Label>ESTADO CIVIL</FormControl.Label>
                
              </FormControl>

              <FormControl>
                <FormControl.Label>NACIONALIDAD</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>TIENE OTRA NACIONALIDAD A PARTE DE LA ARRIBA MENCIONADA?</FormControl.Label>
                
              </FormControl>
              <Divider/>

              <FormControl>
                <FormControl.Label>FECHA TENTATIVA DE VIAJE, NO DEBE DEJAR ESTE ESPACIO EN BLANCO </FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>DIRECCION DONDE SE HOSPEDARÁ EN USA (en caso de visitar a algún familiar o amigo) O
                  SIMPLEMENTE AGREGUE “HOTEL, Y LA CIUDAD Y ESTADO QUE VISITARÁ”</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>QUIEN CUBRIRÁ LOS GASTOS DE SU VIAJE? NOMBRE DE LA PERSONA, TELÉFONO , DIRECCIÓN ,
                E-MAIL . Recuerde que únicamente de padres a hijos y de hijos a padres se pueden cubrir los
                gastos de viaje o entre esposos. No abuelos o novios o tios.</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>USTED VIAJARÁ SÓLO? SI? NO? EN CASO DE ALGUIEN VIAJE CON USTED , FAVOR DE AGREGAR ,
NOMBRES COMPLETOS. </FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>FECHA DE SU ULTIMA ENTRADA A USA? DD/MM/AAAA En caso de no recordarlo, agregue una
fecha tentativa o busque en los sellos de entrada en sus pasaportes.</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>Y por cuantos días ingresó?</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>USTED HA TENIDO VISA ANTERIORMENTE? SI? NO? </FormControl.Label>
                <Input />
              </FormControl>

              
              <Divider/>

              <FormControl>
                <FormControl.Label>DIRECCIÓN COMPLETA</FormControl.Label>
               
              </FormControl>
              <FormControl>
                <FormControl.Label>CALLE</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>NÚMERO</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>COLONIA</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>CÓDIGO POSTAL</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>ESTADO</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>CIUDAD</FormControl.Label>
                <Input />
              </FormControl>

              <Divider/>

              <FormControl>
                <FormControl.Label>TELEFONOS DE CASA, CELULAR Y TRABAJO</FormControl.Label>
                <Text>CASA:</Text>
                <Input />
                <Text>CELULAR:</Text>
                <Input />
                <Text>TRABAJO:</Text>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>CORREO ELECTRÓNICO</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>¿TIENES REDES SOCIALES?</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>-¿COMO APARECES EN FACEBOOK? </FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>¿COMO APARECES EN INSTAGRAM? </FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label></FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label></FormControl.Label>
                <Input />
              </FormControl>
            </Stack>


            <Button onPress={()=>setState(0)}>Volver</Button>
          </View>
        )


      case 3: 
      return(
        <>
          <BotonVolver/>
        </>
      )


      case 4: 
        return(
          <>
            <BotonVolver/>
          </>
        )


      case 5: 
      return(
        <>
          <BotonVolver/>
        </>
      )
      
      case 9:
        return(
          <Box>
            <Text>Hola MUNDO, vista default</Text>
            <Button onPress={()=>setState(0)}>Volver</Button>
          </Box>
        );
  
    default:
      return(
        <>
        <Text>Hola</Text>
        <Button onPress={()=>setState(0)}>Volver</Button>
        </>
      )
      break;
  }
}


  return (
    <ScrollView alignSelf={"center"} flex={1}>
      <Stack direction={"row"} alignItems={"center"} alignSelf={"center"}>
        <Image
          source={{
            uri:"http://tramitevisaamericanaqueretaro.com/images/LOGO-NUEVO.png"
          }}
          alt="Alternate Text"
          size="xl"
        />
        <Text fontSize={"2xl"} >Formulário para tramitar VISA americana</Text>
      </Stack>

      
      <SwitchRender/>

  
     
 
      
      

      
      
    </ScrollView>
  );
}



export default App;
