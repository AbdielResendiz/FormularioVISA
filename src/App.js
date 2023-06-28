import {  ScrollView, FormControl, Input,
  Text, Image, Stack, Box, Button, Icon, View, Divider, Checkbox, NativeBaseProvider
} from "native-base";
import React, {useEffect, useState} from "react";
import Titulo from "./components/titulo";
import { FaCloudUploadAlt } from "react-icons/fa";

function App() {
  const [state, setState] = useState(3);
  // nueva true, renovacion false
  const [ nueva, setNueva] = useState(true);

  //variables
  //1.
   const [ nombre, setNombre] = useState("");
   const [ paterno, setPaterno] = useState("");
   const [ materno,setMaterno] = useState("");
  // //2-5
   const [ sexo, setSexo] = useState(true);

   //0=soltero, 1=casado, 2=divorciado, 3=viudo, 4=union libre
   const [ estadoCivil, setEstadoCivil] = useState(0);
   
   const [ nacionalidad, setNacionalidad] = useState("");
   const [ otraNacion, setOtraNacion] = useState(Boolean);
   const [ otraNacionalidad, setOtraNacionalidad] = useState("");

 useEffect(() => {
console.log("paterno", paterno);

 }, [paterno]);
 

  useEffect(() => {
    console.log("nueva? ", nueva);
    
  }, [nueva]);

  const BotonVolver= ()=>{
    return(
    <Button mx={"15%"} onPress={()=>setState(state-1)}>
      Volver
    </Button>
  )}

  const BotonNext= ()=>{
    return(
    <Button mx={"15%"} onPress={()=>setState(state+1)}>
      Continuar
    </Button>
  )}

  const FooterBotons=()=>{
    return(
      <Stack direction={"column"} space={5} my={5}>
          <BotonNext/>
          <BotonVolver/>
      </Stack>
    )
  }

  // const FormInput=(props)=>{
  //   let {titulo, input, ayuda} =props;
  //   <Stack >
  //     <FormControl>
  //         <FormControl.Label>{titulo}</FormControl.Label>
  //           <Input />
  //     </FormControl>
  //     <Text> hola</Text>
  //   </Stack>

  // }
  
  const handleFirst= (state, value)=>{
    setNueva(value);
    setState(state);

  }



const SwitchRender = ()=>{
  switch (state) {



      case 5:
        return(
          <View mx={"10%"}>
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

              
              <FooterBotons/>
          </View>
        );

        case 6:
          return(
            <Stack mx={"10%"} space={4}>
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
                <FormControl.Label>CORREO ELECTRÓNICO:</FormControl.Label>
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

              
              <FooterBotons/>
            </Stack>
          )
  

          case 7:
            return(
              <Stack mx={"10%"}>
                <FormControl bg={"#"} >
                <FormControl.Label>DOMICILIO DONDE SE HOSPEDARÁ EN USA:</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl bg={"#"}>
                <FormControl.Label>NOMBRE DE SUS PADRES COMPLETO Y FECHAS DE NACIMIENTO:</FormControl.Label>
                <Input />
              </FormControl>



              <FormControl bg={"#"}>
                <FormControl.Label>TIENE ALGUN PARIENTE DIRECTO COMO HIJOS O HERMANOS VIVIENDO EN USA?</FormControl.Label>
                <Input />
              </FormControl>



              
              <FooterBotons/>
              </Stack>
            )

        case 8:
          return(
            <Stack mx={"10%"}>
              <FormControl bg={"#"}>
                <FormControl.Label>Trabajo actual:</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl bg={"#"}>
                <FormControl.Label>Soy estudiante:</FormControl.Label>
                <Input />
              </FormControl>


              <FormControl bg={"#"}>
                <FormControl.Label>Trabajo anterior:</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl >
                <FormControl.Label>PAISES QUE HA VIAJADO EN LOS ULTIMOS 5 AÑOS:</FormControl.Label>
                <Input />
              </FormControl>


              <FormControl >
                <FormControl.Label>¿IDIOMAS QUE HABLA A PARTE DEL ESTAÑOL? :</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl >
                <FormControl.Label>¿EN SU ESTANCIA EN USA , HA TENIDO ALGUN PROBLEMA? SI? NO? EXPLIQUE.:</FormControl.Label>
                <Input />
              </FormControl>

              <FormControl >
                <FormControl.Label>¿HA SIDO DEPORTADO , SALIDA VOLUNTARIA? NO? SI? EXPLIQUE:</FormControl.Label>
                <Input />
              </FormControl>
              <FooterBotons/>
            </Stack>
          )
    default:
      return(
        <>
        <Text>Hola</Text>
        <Button onPress={()=>setState(0)}>Volver</Button>
        </>
      )
   
  }
}

useEffect(() => {
console.log("sexo", sexo);

}, [sexo]);


const handleSexoChange = (value) => {
  setSexo(value);
};
const handleNacionChange = (value) => {
  setOtraNacion(value);
};

const Ayuda=(props)=>{
  let {titulo, text} = props;
  return(
       <Stack direction={"row"} w="40%"  mx={4}>
       <Divider orientation="vertical" h={16} thickness={2}  bg="muted.500" mx={2}/>
       
       <Stack direction={"column"} bg="muted.300" borderRadius={20}  w="100%" pl={4} py={2}>
            <Stack direction={"row"} w={"100%"}>
              <Text bold color={"warning.800"} >Ayuda: </Text>
              <Text >{titulo}</Text>
            </Stack>
            <Divider thickness={2} w="90%" bg="muted.600"/>

          <Text fontSize="xs" >{text}</Text>
        </Stack>
        </Stack>
  );
}



  return (
    <NativeBaseProvider>
    <ScrollView alignSelf={"center"} flex={1}>
      <Stack direction={"row"} alignItems={"center"} alignSelf={"center"}>
        <Image
          source={{
            uri:"http://tramitevisaamericanaqueretaro.com/images/LOGO-NUEVO.png"
          }}
          alt="Alternate Text"
          size="xl"
        />
        <Text fontSize={"2xl"} >Formulário para tramitar VISA americana ( {state} ) </Text>
        
      </Stack>
      {/* Valor inicial, bienvenida */}
      {state===0 ?
      (
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
        <Button onPress={()=>handleFirst(2, true)}  my={5}>
          Primera vez
        </Button>
        <Button onPress={()=>handleFirst(1, false)}  my={5}>
          Renovación
        </Button>

        </Stack>

      </Box>    
      ) : null}

        {/* Renovacion visa */}
      {state===1 ? (
        <>
          <Titulo texto={"Renovación de VISA"}/>
          <Stack mt={3} mb={10}>
           
            
          <Button  onPress={()=>{alert("En proceso. . .")}}
          size={"lg"} leftIcon={<Icon as={FaCloudUploadAlt}  size="xl"  color={"#ffffff"}/>}>
            Subir 
          </Button>


          </Stack>

          <Button onPress={()=>handleFirst(2, false)}  my={5}>
            Continuar
          </Button>

          <BotonVolver/>
          </>
      ) : null}

      {state===2 ?(
        <View px={"10%"}>
            <Titulo texto={nueva ? "Tramita tu VISA por primera vez" : "Renovación de VISA"}/>
            <Stack space={3}>
              <FormControl>
                <FormControl.Label>APELLIDO PATERNO:</FormControl.Label>
                <Input  placeholder="Apellido paterno" 
                     
                     value={paterno}
                     onChangeText={(e)=>{setPaterno(e)}}

                />
              </FormControl>

              <FormControl>
                <FormControl.Label>APELLIDO MATERNO:</FormControl.Label>
                <Input placeholder="Apellido materno" 
                     maxLength={20}
                     value={materno}
                     onChangeText={(e)=>{setMaterno(e)}}/>
              </FormControl>

              <FormControl>
                <FormControl.Label>NOMBRES:</FormControl.Label>
                <Input placeholder="Nombres" 
                     
                     value={nombre}
                     onChangeText={(e)=>{setNombre(e)}} />
              </FormControl>

              <FormControl mb={4} >
                <FormControl.Label>SEXO:</FormControl.Label>
                
                  <Checkbox  isChecked={sexo} value={sexo}
        onChange={() => handleSexoChange(true)} my={2}>
                    Masculino
                  </Checkbox>
                  <Checkbox  isChecked={!sexo}  value={!sexo}
        onChange={() => handleSexoChange(false)}my={2}>
                    Femenino
                  </Checkbox>
             
              </FormControl>




            </Stack>
            <BotonNext/>


            <Button my={4} mx={"15%"} onPress={()=>setState(0)}>Volver</Button>
          </View>
      ) : null}

      {state===3 ? (
        <Stack px={"10%"} direction={"column"} space={3}>

          <FormControl>
            <FormControl.Label>NACIONALIDAD:</FormControl.Label>
            <Input placeholder="Nacionalidad" 
                     
                     value={nacionalidad}
                     onChangeText={(e)=>{setNacionalidad(e)}} />
          </FormControl>


          <FormControl>
            <FormControl.Label>¿TIENE OTRA NACIONALIDAD A PARTE DE LA ARRIBA MENCIONADA?</FormControl.Label>
              <Checkbox  isChecked={otraNacion} value={otraNacion}
              onChange={() => handleNacionChange(true)} my={2}>
                    SI
              </Checkbox>

              <Checkbox  isChecked={!otraNacion}  value={!otraNacion}
              onChange={() => handleNacionChange(false)}my={2}>
                    NO
            </Checkbox>
            {otraNacion ? (
            <>
            <FormControl.Label>¿Cuál es tu otra nacionalidad?</FormControl.Label>
              <Input placeholder="Nacionalidad" 
        
              value={nacionalidad}
              onChangeText={(e)=>{setNacionalidad(e)}} />
              </>
            ) : null}
          </FormControl>

          <FormControl bg={"#"}>
            <FormControl.Label>ESTADO CIVIL:</FormControl.Label>
            <Stack space={2}>
              <Checkbox  isChecked={ estadoCivil===0 ? true : false } 
                value={estadoCivil} onChange={() => setEstadoCivil(0)} >
                Soltero
              </Checkbox>
              <Checkbox  isChecked={ estadoCivil===1 ? true : false } 
                value={estadoCivil} onChange={() => setEstadoCivil(1)} >
                Casado
              </Checkbox>
              <Checkbox  isChecked={ estadoCivil===2 ? true : false } 
                value={estadoCivil} onChange={() => setEstadoCivil(2)} >
                Divorciado
              </Checkbox>
              <Checkbox  isChecked={ estadoCivil===3 ? true : false } 
                value={estadoCivil} onChange={() => setEstadoCivil(3)} >
                Viudo
              </Checkbox>
              <Checkbox  isChecked={ estadoCivil===4 ? true : false } 
                value={estadoCivil} onChange={() => setEstadoCivil(4)} >
                Union libre
              </Checkbox>
            </Stack>
          </FormControl>

          { estadoCivil >0 ? (
       <Stack direction={"row"} >
        <FormControl w={"60%"} mr={4}>
          <Divider/>
            <FormControl.Label>Datos de la pareja</FormControl.Label>

            <FormControl.Label>NOMBRE COMPLETO:</FormControl.Label>
            <Input />

           
            <FormControl.Label>FECHA DE NACIMIENTO:</FormControl.Label>
            <Input />
            <FormControl.Label>LUGAR DE NACIMIENTO:</FormControl.Label>
            <Input />
            <FormControl.Label>NOMBRE COMPLETO:</FormControl.Label>
            <Input />

            { estadoCivil ===2 ? (
              <>
                <FormControl.Label>FECHA DE INICIO LEGAL DEL MATRIMONIO:</FormControl.Label>
                <Input />
                <FormControl.Label>FECHA DE TERMINO LEGAL DEL MATRIMONIO:</FormControl.Label>
                <Input />
              </>
            ) : null}
            



        </FormControl>

       <>
       <Divider orientation="vertical" h={16} thickness={2} mx={2} />
       
       <Stack w="40%">
            <Stack direction={"row"}>
              <Text bold>Ayuda:</Text>
              <Text>Estado civil</Text>
            </Stack>
            <Divider thickness={2}/>

          <Text>Introduzca datos de su esposa, ex-esposa ó pareja según sea el caso.</Text>
        </Stack>
        </>

     </Stack>
          ) : null}






      
          <FooterBotons/>


          </Stack>
      ) : null}


      { state === 4 ? (
        <View px={"10%"}>
          <Stack direction={"row"}>
            <FormControl w="60%">
              <FormControl.Label>FECHA TENTATIVA DE VIAJE: </FormControl.Label>
              <Input />
            </FormControl>
            <Ayuda titulo="Fecha de viaje" text="NO DEBE DEJAR ESTE ESPACIO EN BLANCO"/>
          </Stack>

          <Stack direction={"row"} mt={3}>
            <FormControl w="60%">
              <FormControl.Label>DIRECCION DONDE SE HOSPEDARÁ EN USA </FormControl.Label>
              <Input />
            </FormControl>
            <Ayuda titulo="Información de hospedaje" text="DIRECCIÓN  DE TU HOSPEDAJE EN CASO DE VISITAR A ALGÚN FAMILIAR O AMIGO O
                SIMPLEMENTE AGREGUE “HOTEL, Y LA CIUDAD Y ESTADO QUE VISITARÁ”  " />
          </Stack>

          <FormControl>
            <FormControl.Label>¿QUIEN CUBRIRÁ LOS GASTOS DE SU VIAJE? NOMBRE DE LA PERSONA, TELÉFONO , DIRECCIÓN ,
            E-MAIL . Recuerde que únicamente de padres a hijos y de hijos a padres se pueden cubrir los
            gastos de viaje o entre esposos. No abuelos o novios o tios.</FormControl.Label>
            <Input />
          </FormControl>

          <FormControl>
            <FormControl.Label>¿USTED VIAJARÁ SÓLO? SI? NO? EN CASO DE ALGUIEN VIAJE CON USTED , FAVOR DE AGREGAR ,
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
            <FormControl.Label>¿USTED HA TENIDO VISA ANTERIORMENTE? </FormControl.Label>
            <Stack direction={"row"} justifyContent={"space-between"} px={10}>
              <Checkbox value="one" my={2}>
                Si
              </Checkbox>
              <Checkbox value="one" my={2}>
                No
              </Checkbox>

            </Stack>

          </FormControl>

          
          <FooterBotons/>

             
          </View>
      ) : null}



      
     

  
     
 
      
      

      
      
    </ScrollView>
    </NativeBaseProvider>
  );
}



export default App;

