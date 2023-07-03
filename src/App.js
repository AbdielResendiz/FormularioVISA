import {  ScrollView, FormControl, Input, 
  Text, Image, Stack, Box, Button, View, Divider, Checkbox, NativeBaseProvider
} from "native-base";
import React, {useEffect, useState} from "react";
import Titulo from "./components/titulo";
import { PDFViewer, Page, Text as TextPDF, View as ViewPDF, Document, StyleSheet } from '@react-pdf/renderer';


function App() {
  const [state, setState] = useState(5);
  // nueva true, renovacion false
  const [ nueva, setNueva] = useState(true);

  //variables
  //1.
   const [ nombre, setNombre] = useState("");
   const [ paterno, setPaterno] = useState("");
   const [ materno,setMaterno] = useState("");
  // //2-5
   const [ sexo, setSexo] = useState(Boolean);

   //0=soltero, 1=casado, 2=divorciado, 3=viudo, 4=union libre
   const [ estadoCivil, setEstadoCivil] = useState(0);
   
   const [ nacionalidad, setNacionalidad] = useState("");
   const [ otraNacion, setOtraNacion] = useState(Boolean);
   const [ otraNacionalidad, setOtraNacionalidad] = useState("");
   const [ pareja, setPareja ] = useState({nombre: "", fNacimiento:"", lugarNac:"", inicioM:"" , finM:""})
   const [ fechaViaje, setFechaViaje ] = useState ("");
   const [ direccionHospedaje, setDireccionHospedaje ] = useState("");
   const [ gastosViaje, setGastosViaje ] = useState({nombre:"", tel:"", direccion:"", email:""});
   const [ ultimaEntrada, setUltimaEntrada ] =useState("");
   const [ diasUltima, setDiasUltima ] = useState("");
   const [ direccion, setDireccion ] = useState({calle:"", numero:"", colonia:"", })
   const [ viajaSolo, setViajaSolo ] = useState(Boolean);
   const [ acompanantes, setAcompanantes ] = useState("");
   const [ visaAnterior, setVisaAnterior ] = useState(Boolean);
   const [ tieneParientes, setTieneParientes ] = useState(Boolean);
   const [ esEstudiante, setEsEstudiante ] = useState(Boolean);



   //IMAGENES

  //pasaporte
  const [ pasaporteIMG, setPasaporteIMG ] = useState([]); 
  const [ pasaporteURL, setPasaporteURL ] = useState([]); 
  useEffect(() => {
    if (pasaporteIMG.length < 1 ) return;
    const newPassUrls = [];
    pasaporteIMG.forEach(image=> newPassUrls.push(URL.createObjectURL(image)));
    setPasaporteURL(newPassUrls);
    console.log("pasaporte: ", pasaporteIMG);
  }, [pasaporteIMG]);

  function onPassChange(e) {
    setPasaporteIMG([...e.target.files])
  }

    //VISA frontal
    const [ visa1, setVisa1] = useState([]); 
    const [ visa1URL, setVisa1URL ] = useState([]); 
    useEffect(() => {
      if (visa1.length < 1 ) return;
      const newVisaUrls = [];
      visa1.forEach(image=> newVisaUrls.push(URL.createObjectURL(image)));
      setVisa1URL(newVisaUrls);
      console.log("visa1 front: ", visa1);
    }, [visa1]);

    function onVisa1Change(e) {
      setVisa1([...e.target.files])
    }

    //VISA trasera
    const [ visa2, setVisa2] = useState([]); 
    const [ visa2URL, setVisa2URL ] = useState([]); 
    useEffect(() => {
      if (visa2.length < 1 ) return;
      const newVisa2Urls = [];
      visa2.forEach(image=> newVisa2Urls.push(URL.createObjectURL(image)));
      setVisa2URL(newVisa2Urls);
      console.log("visa2 front: ", visa2);
    }, [visa2]);

    function onVisa2Change(e) {
      setVisa2([...e.target.files])
    }

    //fin IMAGENES


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
  
  const handleFirst= (state, value)=>{
    setNueva(value);
    setState(state);

  }

useEffect(() => {
console.log("sexo", sexo);

}, [sexo]);

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

const handleParejaChange = (name, value) => {
  setPareja({ ...pareja, [name]: value });
};

const handleGastosChange = (name, value) => {
  setGastosViaje({ ...gastosViaje, [name]: value });
};

//PDF INICIA

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <ViewPDF style={styles.section}>
        <TextPDF>Section #1</TextPDF>
      </ViewPDF>
      <ViewPDF style={styles.section}>
        <TextPDF>Section #2</TextPDF>
      </ViewPDF>
    </Page>
  </Document>
);

//PDFfin

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

        <Stack mx="10%" mt={5} px={4} py={3} shadow={6} bg="muted.200" borderRadius={10}>
          <Text bold alignSelf={"center"} fontSize={"lg"} py={2}>Favor de llenar con tus datos personales</Text>

          <FormControl.Label>FOTO DE TU PASAPORTE:</FormControl.Label>

          <input type="file" multiple accept="image/*" onChange={onPassChange}/>
          { pasaporteURL.map(imageSrc=> 
          <img style={{width:"50%", height:"auto", alignSelf:"center", marginTop:10, }} 
          src={imageSrc} alt={imageSrc} /> 
          ) }


          <FormControl mt={4}>
            <FormControl.Label>Whatsapp:</FormControl.Label>
            <Input  placeholder="Whatsapp" 
                  value={paterno}
                  // onChangeText={(e)=>{setPaterno(e)}}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>TELÉFONO FIJO:</FormControl.Label>
            <Input  placeholder="Whatsapp" 
                  value={paterno}
                  // onChangeText={(e)=>{setPaterno(e)}}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>CORREO ELECTRÓNICO PERSONAL:</FormControl.Label>
            <Input  placeholder="Whatsapp" 
                  value={paterno}
                  // onChangeText={(e)=>{setPaterno(e)}}
            />
          </FormControl>

        </Stack>

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

          <Text bold fontSize={"lg"} alignSelf={"center"}>Favor de subir foto de su VISA</Text>

          <Stack mt={3} mb={10} mx="10%">
            <Text bold fontSize={"lg"} alignSelf={"center"} color="muted.700">Foto FRONTAL de su VISA</Text>
            <input type="file" multiple accept="image/*" onChange={onVisa1Change} style={{alignSelf:"center"}}/>
            { visa1URL.map(imageSrc=> 
            <img style={{width:"50%", height:"auto", alignSelf:"center", marginTop:10, }} 
            src={imageSrc} alt={imageSrc} /> ) }
          </Stack>

          <Stack mt={3} mb={10} mx="10%">
            <Text bold fontSize={"lg"} alignSelf={"center"} color="muted.700">Foto TRASERA de su VISA</Text>
            <input type="file" multiple accept="image/*" onChange={onVisa2Change} style={{alignSelf:"center"}}/>
            { visa2URL.map(imageSrc=> 
            <img style={{width:"50%", height:"auto", alignSelf:"center", marginTop:10, }} 
            src={imageSrc} alt={imageSrc} /> ) }
          </Stack>

          <Button onPress={()=>handleFirst(2, false)} mx="15%" my={5}>
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
        onChange={() => setSexo(true)} my={2}>
                    Masculino
                  </Checkbox>
                  <Checkbox  isChecked={!sexo}  value={!sexo}
        onChange={() => setSexo(false)}my={2}>
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
              <Input placeholder=" otra nacionalidad" 
        
              value={otraNacionalidad}
              onChangeText={(e)=>{setOtraNacionalidad(e)}} />
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
            <Input
            placeholder="Nombre"
            value={pareja.nombre}
            onChangeText={(value) => handleParejaChange('nombre', value)}
          />

           
            <FormControl.Label>FECHA DE NACIMIENTO:</FormControl.Label>
            <Input             placeholder="Fecha de nacimiento"
            value={pareja.fNacimiento}
            onChangeText={(value) => handleParejaChange('fNacimiento', value)}/>
            <FormControl.Label>LUGAR DE NACIMIENTO:</FormControl.Label>
            <Input             placeholder="Lugar de nacimiento"
            value={pareja.lugarNac}
            onChangeText={(value) => handleParejaChange('lugarNac', value)}/>


            { estadoCivil ===2 ? (
              <>
                <FormControl.Label>FECHA DE INICIO LEGAL DEL MATRIMONIO:</FormControl.Label>
                <Input  placeholder="Fecha de inicio legal del matrimonio"
                 value={pareja.inicioM}
                 onChangeText={(value) => handleParejaChange('inicioM', value)} />
                <FormControl.Label>FECHA DE TERMINO LEGAL DEL MATRIMONIO:</FormControl.Label>
                <Input  placeholder="Fecha de inicio legal del matrimonio"
                 value={pareja.finM}
                 onChangeText={(value) => handleParejaChange('finM', value)} />
              </>
            ) : null}
            



        </FormControl>

       <>
       <Divider orientation="vertical" bg="muted.600" h={40} thickness={2} mx={2} />
       
       <Stack w="40%" bg="muted.300" borderRadius={20} pl={4} py={2}>
            <Stack direction={"row"}>
              <Text bold color={"warning.800"} >Ayuda: </Text>
              <Text>Estado civil</Text>
            </Stack>
            <Divider thickness={2} w="90%" bg="muted.600"/>

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
              <Input placeholder="Fecha tentativa de viaje" 
                     
                     value={fechaViaje}
                     onChangeText={(e)=>{setFechaViaje(e)}}/>
            </FormControl>
            <Ayuda titulo="Fecha de viaje" text="NO DEBE DEJAR ESTE ESPACIO EN BLANCO"/>
          </Stack>

          <Stack direction={"row"} mt={3}>
            <FormControl w="60%">
              <FormControl.Label>DIRECCION DONDE SE HOSPEDARÁ EN USA </FormControl.Label>
              <Input placeholder="Dirección de hospedaje" 
                     
                     value={direccionHospedaje}
                     onChangeText={(e)=>{setDireccionHospedaje(e)}}/>
            </FormControl>
            <Ayuda titulo="Información de hospedaje" text="DIRECCIÓN  DE TU HOSPEDAJE EN CASO DE VISITAR A ALGÚN FAMILIAR O AMIGO O
                SIMPLEMENTE AGREGUE “HOTEL, Y LA CIUDAD Y ESTADO QUE VISITARÁ”  " />
          </Stack>

          <Stack direction={"row"} my={3}>
          <FormControl w="60%">
            <FormControl.Label>¿QUIEN CUBRIRÁ LOS GASTOS DE SU VIAJE?</FormControl.Label>
            <FormControl.Label> NOMBRE COMPLETO: </FormControl.Label>
            <Input             placeholder="Nombre"
            value={gastosViaje.nombre}
            onChangeText={(value) => handleGastosChange('nombre', value)}/>
            <FormControl.Label>TELÉFONO: </FormControl.Label>
            <Input            placeholder="Teléfono"
            value={gastosViaje.tel}
            onChangeText={(value) => handleGastosChange('tel', value)} />
            <FormControl.Label>DIRECCIÓN: </FormControl.Label>
            <Input             placeholder="Dirección"
            value={gastosViaje.direccion}
            onChangeText={(value) => handleGastosChange('direccion', value)}/>
            <FormControl.Label>E-MAIL: </FormControl.Label>
            <Input             placeholder="E-mail"
            value={gastosViaje.email}
            onChangeText={(value) => handleGastosChange('email', value)}/>
          </FormControl>
          <Ayuda titulo="Gastos de viaje" text="Recuerde que únicamente de padres a hijos y de hijos a padres se pueden cubrir los
            gastos de viaje o entre esposos. No abuelos o novios o tios."/>
          </Stack>


          <Stack direction={"row"} >
            <FormControl w="60%">
              <FormControl.Label>¿USTED VIAJARÁ SÓLO?   </FormControl.Label>
                <Checkbox  isChecked={viajaSolo} value={otraNacion}
                onChange={() => setViajaSolo(true)} my={2}>
                      SI
                </Checkbox>

                <Checkbox  isChecked={!viajaSolo}  value={!otraNacion}
                onChange={() => setViajaSolo(false)}my={2}>
                      NO
              </Checkbox>
              {!viajaSolo ? (
              <>
              <FormControl.Label>NOMBRES COMPLETOS: </FormControl.Label>
                <Input placeholder="NOMBRES DE ACOMPAÑANTES" 
          
                value={acompanantes}
                onChangeText={(e)=>{setAcompanantes(e)}} />
                </>
              ) : null}
            </FormControl>
            <Ayuda titulo="Acompañantes" text="EN CASO DE ALGUIEN VIAJE CON USTED , FAVOR DE AGREGAR , NOMBRES COMPLETOS."/>
          </Stack> 

          <Stack direction={"row"} my={3} > 
            <FormControl w="60%">
              <FormControl.Label>FECHA DE SU ULTIMA ENTRADA A USA? DD/MM/AAAA </FormControl.Label>
              <Input  placeholder="FECHA DE SU ULTIMA ENTRADA A USA? DD/MM/AAAA" 
          
          value={ultimaEntrada}
          onChangeText={(e)=>{setUltimaEntrada(e)}} />
            </FormControl>
            <Ayuda tittulo="Ultima entrada a USA" text="En caso de no recordarlo, agregue una
                fecha tentativa o busque en los sellos de entrada en sus pasaportes." />
          </Stack>

          <FormControl  w="60%">
            <FormControl.Label>¿Y por cuantos días ingresó?</FormControl.Label>
            <Input  placeholder="Dias que ingresó" 
          
          value={diasUltima}
          onChangeText={(e)=>{setDiasUltima(e)}} />
          </FormControl>

          <FormControl>
            <FormControl.Label>¿USTED HA TENIDO VISA ANTERIORMENTE? </FormControl.Label>
            
              <Checkbox isChecked={visaAnterior} value={visaAnterior} my={2}
              onChange={()=>setVisaAnterior(true)}>
                Si
              </Checkbox>
              <Checkbox isChecked={!visaAnterior} value={!visaAnterior} my={2}
              onChange={()=>setVisaAnterior(false)}>
                No
              </Checkbox>

            

          </FormControl>

          
          <FooterBotons/>

             
          </View>
      ) : null}

      { state === 5 ? (
        <View mx={"10%"}>
            <FormControl>
                <FormControl.Label>INGRESA TU DIRECCIÓN COMPLETA</FormControl.Label>
               
              </FormControl>
              <FormControl>
                <FormControl.Label>CALLE: </FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>NÚMERO: </FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>COLONIA: </FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>CÓDIGO POSTAL: </FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>ESTADO: </FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>CIUDAD: </FormControl.Label>
                <Input />
              </FormControl>

              <Divider/>

              
              <FooterBotons/>
          </View>
      ) : null}

      { state === 6 ? (
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

            <FormControl w="60%">
              <FormControl.Label>¿TIENES REDES SOCIALES? </FormControl.Label>
                <Checkbox  isChecked={viajaSolo} value={viajaSolo}
                onChange={() => setViajaSolo(true)} my={2}>
                      SI
                </Checkbox>

                <Checkbox  isChecked={!viajaSolo}  value={!viajaSolo}
                onChange={() => setViajaSolo(false)}my={2}>
                      NO
              </Checkbox>
              {viajaSolo ? (
              <>
            <FormControl>
              <FormControl.Label>¿COMO APARECES EN FACEBOOK? </FormControl.Label>
              <Input />
            </FormControl>

            <FormControl>
              <FormControl.Label>¿COMO APARECES EN INSTAGRAM? </FormControl.Label>
              <Input />
            </FormControl>
            </>
              ) : null}
            </FormControl>



            
            <FooterBotons/>
          </Stack>
      ) : null}

      { state === 7 ? (
      <Stack mx={"10%"}>
        <FormControl bg={"#"} >
          <FormControl.Label >DOMICILIO DONDE SE HOSPEDARÁ EN USA:</FormControl.Label>
          <Input />
        </FormControl>
        <Divider mt={2}/>

        <FormControl bg={"#"} my={2}>
          <FormControl.Label my={2}>NOMBRE DE SUS PADRES COMPLETO Y FECHAS DE NACIMIENTO:</FormControl.Label>
          <Input />
        </FormControl>

        <FormControl bg={"#"} my={2}>
          <FormControl.Label my={2}>NOMBRE DE SU PADRE:</FormControl.Label>
          <Input />
        </FormControl>

        <FormControl bg={"#"} my={2}>
          <FormControl.Label my={2}>FECHA DE NACIMIENTO DE SU PADRE:</FormControl.Label>
          <Input />
        </FormControl>

        <FormControl bg={"#"} my={2}>
          <FormControl.Label my={2}>NOMBRE DE SU MADRE:</FormControl.Label>
          <Input />
        </FormControl>

        <FormControl bg={"#"} my={2}>
          <FormControl.Label my={2}>FECHA DE NACIMIENTO DE SU MADRE:</FormControl.Label>
          <Input />
        </FormControl>



        <Divider/>



 

        <FormControl >
              <FormControl.Label>¿TIENE ALGUN PARIENTE DIRECTO COMO HIJOS O HERMANOS VIVIENDO EN USA? </FormControl.Label>
                <Checkbox  isChecked={tieneParientes} value={tieneParientes}
                onChange={() => setTieneParientes(true)} my={2}>
                      SI
                </Checkbox>

                <Checkbox  isChecked={!tieneParientes}  value={!tieneParientes}
                onChange={() => setTieneParientes(false)}my={2}>
                      NO
              </Checkbox>
              {tieneParientes ? (
              <>
            <FormControl>
              <FormControl.Label>NOMBRE COMPLETO: </FormControl.Label>
              <Input />
            </FormControl>

            <FormControl>
              <FormControl.Label>PARENTESCO CON USTED </FormControl.Label>
              <Input />
            </FormControl>
            <Stack direction={"row"} my={3}>
            <FormControl w="60%">
              <FormControl.Label>ESTATUS LEGAL </FormControl.Label>
              <Input />
            </FormControl>
            <Ayuda tittulo="Estatus legal" text="EL ESTATUS LEGAL (CIUDADANO AMERICANO, RESIDENTE PERMANENTE, VISA DE TRABAJO O NO LO SE)" />

            </Stack>
            </>
              ) : null}
          </FormControl>



        
        <FooterBotons/>
      </Stack>
      ) : null }


      { state === 8 ? (
        <Stack mx={"10%"}>
          <FormControl.Label>INFORMACIÓN LABORAL</FormControl.Label>
          <Divider/>
          <FormControl.Label>TRABAJO ACTUAL</FormControl.Label>
          <FormControl bg={"#"}>
            <FormControl.Label>NOMBRE DE LA EMPRESA: </FormControl.Label>
            <Input />
          </FormControl>

          <FormControl bg={"#"}>
            <FormControl.Label>DIRECCIÓN COMPLETA DE LA EMPRESA: </FormControl.Label>
            <Input />
          </FormControl>

          <FormControl bg={"#"}>
            <FormControl.Label>TELÉFONO DE LA EMPRESA: </FormControl.Label>
            <Input />
          </FormControl>

          <FormControl bg={"#"}>
            <FormControl.Label>SUELDO MENSUAL BRUTO: </FormControl.Label>
            <Input />
          </FormControl>

          <FormControl bg={"#"}>
            <FormControl.Label>¿CUÁL ES SU CARGO? </FormControl.Label>
            <Input />
          </FormControl>

          <FormControl >
              <FormControl.Label>¿ERES ESTUDIANTE? </FormControl.Label>
                <Checkbox  isChecked={esEstudiante} value={esEstudiante}
                onChange={() => setEsEstudiante(true)} my={2}>
                      SI
                </Checkbox>

                <Checkbox  isChecked={!esEstudiante}  value={!esEstudiante}
                onChange={() => setEsEstudiante(false)}my={2}>
                      NO
              </Checkbox>
              {esEstudiante ? (
              <>
              <FormControl>
                <FormControl.Label>NOMBRE DE LA ESCUELA: </FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>DIRECCIÓN DE LA ESCUELA: </FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>FECHA DE INGRESO: </FormControl.Label>
                <Input />
              </FormControl>

              <FormControl>
                <FormControl.Label>GRADO ACTUAL QUE ESTA CURSANDO</FormControl.Label>
                <Input />
              </FormControl>

            </>

              ) : null}

          </FormControl>


          <FormControl bg={"#"}>
            <FormControl.Label>Trabajo anterior:</FormControl.Label>
            <Input />
          </FormControl>

          
          <FooterBotons/>
        </Stack>
      ) : null }

      { state === 9 ? (
         <>
         <FormControl >
            <FormControl.Label>PAISES QUE HA VIAJADO EN LOS ULTIMOS 5 AÑOS:</FormControl.Label>
            <Input />
          </FormControl>


          <FormControl >
            <FormControl.Label>¿IDIOMAS QUE HABLA A PARTE DEL ESPAÑOL? :</FormControl.Label>
            <Input />
          </FormControl>

          <FormControl >
            <FormControl.Label>¿EN SU ESTANCIA EN USA , HA TENIDO ALGUN PROBLEMA? ¿SI? ¿NO? EXPLIQUE:</FormControl.Label>
            <Input />
          </FormControl>

          <FormControl >
            <FormControl.Label>¿HA SIDO DEPORTADO , SALIDA VOLUNTARIA? ¿SI? ¿NO? EXPLIQUE:</FormControl.Label>
            <Input />
          </FormControl>
          <Button mx="15%" my={6} onPress={()=>{alert("en construcción")}}>
            Verificar información
          </Button>
          <BotonVolver/>
         </>
      ) : null}



      
    </ScrollView>

    {state === 10 ? (
      
      <PDFViewer height={1200} width={"90%"} style={{alignSelf:"center"}}>
              <MyDocument />
      </PDFViewer>
    
    
  ) : null }


    </NativeBaseProvider>
  );
}



export default App;
