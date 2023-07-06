import {  ScrollView, FormControl, Input, 
  Text, Image, Stack, Box, Button, View, Divider, Checkbox, NativeBaseProvider
} from "native-base";
import React, {useEffect, useState} from "react";
import Titulo from "./components/titulo";
import { PDFViewer, Page, Image as ImagePDF,Text as TextPDF, View as ViewPDF, Document, StyleSheet } from '@react-pdf/renderer';
import funEstadoCivil from "./components/funEstadoCivil";
function App() {
  const [state, setState] = useState(10);
  // nueva true, renovacion fals
  const [ nueva, setNueva] = useState(true);

  //variables

  //0.
  const [ wa, setWa ] = useState("");
  const [ telefono1, setTelefono1 ] = useState("");
  const [ correo1, setCorreo1 ] = useState("");

  //1.
   const [ nombre, setNombre] = useState("");
   const [ paterno, setPaterno] = useState("");
   const [ materno,setMaterno] = useState("");
  // //2-5
   const [ sexo, setSexo] = useState(Boolean);

   //0=soltero, 1=casado, 2=divorciado, 3=viudo, 4=union libre
   const [ estadoCivil, setEstadoCivil] = useState(3);
   
   const [ nacionalidad, setNacionalidad] = useState("");
   const [ otraNacion, setOtraNacion] = useState(Boolean);
   const [ otraNacionalidad, setOtraNacionalidad] = useState("Argentino");
   const [ pareja, setPareja ] = useState({nombre: "", fNacimiento:"", lugarNac:"", inicioM:"" , finM:"", lugarDef:""})
   const [ comparteCasa, setComparteCasa ] = useState(true);
   const [ fechaViaje, setFechaViaje ] = useState ("");
   const [ direccionHospedaje, setDireccionHospedaje ] = useState("");
   const [ gastosViaje, setGastosViaje ] = useState({nombre:"", tel:"", direccion:"", email:""});
   const [ ultimaEntrada, setUltimaEntrada ] =useState("");
   const [ diasUltima, setDiasUltima ] = useState("");
   const [ direccion, setDireccion ] = useState({calle:"", numero:"", colonia:"", cp:"", estado:"" , ciudad:""})
   const [ viajaSolo, setViajaSolo ] = useState(false);
   const [ acompanantes, setAcompanantes ] = useState("");
   const [ visaAnterior, setVisaAnterior ] = useState(Boolean);
   const [ visaNegada, setVisaNegada ] = useState(true)
   const [ contacto, setContacto ] = useState({casa:"", celular:"", trabajo:"", email:"", redes:true, fb:"", instagram:""})
   const [ tieneParientes, setTieneParientes ] = useState(Boolean);
   const [ esEstudiante, setEsEstudiante ] = useState(Boolean);
   const [ padres, setPadres ] = useState({padre:"", fnPadre:"", madre:"", fnMadre:""})


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
const handleDireccionChange = (name, value) => {
  setDireccion({ ...direccion, [name]: value });
};

const handleContactoChange = (name, value) => {
  setContacto({ ...contacto, [name]: value });
};

const handlePadresChange = (name, value) => {
  setPadres({ ...padres, [name]: value });
};

//PDF INICIA

// Create styles
const styles = StyleSheet.create({
  page: {
  //  flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    marginTop: 10,
   
    
  },
  sec:{
    padding:10,
    borderWidth:1,
    borderRadius:10,
    marginTop:10,
    marginHorizontal:15,
    shadow:10
  },
  mid:{
    width: "50%"
  },
  row:{
    flexDirection:"row", 
    justifyContent:"space-between" ,
    paddingRight:10
  },
  image: {
    width: 50,
    height: 50,
  },
});


//switch Datos pareja




// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <ViewPDF style={{marginTop:10, paddingTop:10, alignSelf:"center"}}>

        <TextPDF > Formulário para tramitar VISA americana</TextPDF>
      </ViewPDF>

      <ViewPDF style={styles.section}>

        {/* datos generales */}
        <ViewPDF style={styles.sec}>
          <TextPDF> Nombre: {nombre + " " + paterno + " " + materno} </TextPDF>

          <ViewPDF style={{flexDirection:"row", justifyContent:"space-beetwen", marginTop:10}}>
            <TextPDF style={styles.mid}> Whatsapp: 443564356{wa} </TextPDF>
            <TextPDF>Teléfono fijo: {telefono1} </TextPDF>
          </ViewPDF>
          
          <TextPDF> Correo electrónico personal: {correo1}</TextPDF>
          <TextPDF> Sexo: {sexo ? "Masculino" : "Femenino"} </TextPDF>
          <TextPDF> Nacionalidad: {nacionalidad }</TextPDF>
          <ViewPDF style={{flexDirection:"row", justifyContent:"space-beetwen", marginTop:10}}>
            <TextPDF style={styles.mid}> ¿Tiene otra nacionalidad? {otraNacion ? "Sí" : "No"} </TextPDF>
          {
            otraNacion ? 
            <TextPDF> 2da nacionalidad: {otraNacionalidad}</TextPDF> :
            null
          }
          </ViewPDF>
          <TextPDF>Estado civil: {funEstadoCivil(estadoCivil)} </TextPDF>
        </ViewPDF>
        {/* DATOS DE PAREJA */}
        <ViewPDF style={styles.sec}>
          {estadoCivil>0 ? 
          <>
        
          <TextPDF style={{marginTop:6}}>DATOS DE LA PAREJA:</TextPDF>
          <TextPDF>
            Nombre: {pareja.nombre}
          </TextPDF>
          <TextPDF>
            Fecha de nacimiento: {pareja.fNacimiento}
          </TextPDF>
          <TextPDF>
            Lugar de nacimiento: {pareja.lugarNac}
          </TextPDF>
          </>
          : null}

          { estadoCivil === 1 ? (
              <TextPDF>¿Viven juntos?: {comparteCasa ? "Si" : "No"}</TextPDF>
          ) : null}

          { estadoCivil === 2 ? (
              <>
              <TextPDF>Fecha de inicio legal del matrimonio: {pareja.inicioM}</TextPDF>
              <TextPDF>Fecha de termino legal del matrimonio: {pareja.finM} </TextPDF>
              </>
          ) : null}

          { estadoCivil === 3 ? (
              <>
              <TextPDF>Fecha de defunción: {pareja.finM} </TextPDF>
              <TextPDF>Lugar de defunción: {pareja.lugarDef} </TextPDF>
              </>
          ) : null}
        </ViewPDF>


        {/* FECHA de viaje, hospedaje */}
         <ViewPDF style={styles.sec}>
          <TextPDF>Fecha tentativa de viaje: {fechaViaje} </TextPDF>
          <TextPDF> Dirección de hospedaje: {direccionHospedaje}</TextPDF>
          <TextPDF>¿Quién cubrira los gastos de hospedaje? </TextPDF>
          <TextPDF> Nombre: {gastosViaje.nombre}</TextPDF>
          <TextPDF> Teléfono: { gastosViaje.tel}</TextPDF>
          <TextPDF> Dirección: {gastosViaje.direccion}</TextPDF>
          <TextPDF> E-mail: {gastosViaje.email}</TextPDF>
          <TextPDF> ¿Viaja solo? {viajaSolo ? "Si" : "No"}</TextPDF>
            { !viajaSolo ? (
              <TextPDF> Nombres de los acompañantes: {acompanantes}</TextPDF>
            ) : null}

            <TextPDF>Fecha de su ultima entrada a USA?: {ultimaEntrada} </TextPDF>
            <TextPDF>¿Por cuántos días ingresó?: {diasUltima}</TextPDF>
            <TextPDF >¿Ha tenido VISA antes? {visaAnterior ? "Si" : "No"}</TextPDF>
            <TextPDF>¿Le han negado la VISA antes? {visaNegada ? "Si" : "No"} </TextPDF>
         </ViewPDF>


        {/* DIRECCIón personal */}
         <ViewPDF style={styles.sec}>
          <TextPDF>DIRECCIÓN PERSONAL</TextPDF>
         <ViewPDF style={styles.row}>
              <TextPDF>Calle: {direccion.calle} </TextPDF>
              <TextPDF>Número: {direccion.numero} </TextPDF>
            </ViewPDF>

            <ViewPDF style={styles.row}>
              <TextPDF>Colonia: {direccion.colonia} </TextPDF>
              <TextPDF>Código postal: {direccion.cp} </TextPDF>
            </ViewPDF>

            <ViewPDF style={styles.row}>
              <TextPDF>Estado: {direccion.estado}</TextPDF>
              <TextPDF>Ciudad: {direccion.ciudad} </TextPDF>
            </ViewPDF>

         </ViewPDF>
 
   
      </ViewPDF>

    </Page>
    
 {/* SEGUNDA PAGINA */}
    
    <Page size="A4" style={styles.page}>
      <ViewPDF style={styles.section}>
        <ViewPDF style={styles.sec}>
          <TextPDF style>TELÉFONOS DE CONTACTO</TextPDF>
          <TextPDF>Casa: {contacto.casa}</TextPDF>
          <TextPDF>Celular: {contacto.celular} </TextPDF>
          <TextPDF>Trabajo: {contacto.trabajo} </TextPDF>
          <TextPDF>E-mail: {contacto.email} </TextPDF>
        </ViewPDF>
        { contacto.redes === true ? (
        <ViewPDF style={styles.sec}>
        <TextPDF>REDES SOCIALES</TextPDF>
          <TextPDF>Facebook: {contacto.fb} </TextPDF>
          <TextPDF>Instagram: {contacto.instagram}</TextPDF>
        </ViewPDF>
        ) : null }

        <ViewPDF style={styles.sec}>
          <TextPDF>Información de los padres</TextPDF>
          <TextPDF> Nombre del padre: {padres.padre}</TextPDF>
          <TextPDF> Fecha de nacimiento del padre: {padres.fnPadre}</TextPDF>
          <TextPDF> Nombre de la madre: {padres.madre}</TextPDF>
          <TextPDF> Fecha de nacimiento del padre: {padres.fnMadre}</TextPDF>
        </ViewPDF>

        <ViewPDF style={styles.sec}>
          <TextPDF> ¿Tiene algún pariente directo como hijos o hermanos viviendo en USA? {tieneParientes ? "Sí" : "No"}</TextPDF>
        </ViewPDF>


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
                  value={wa}
                  onChangeText={(e)=>{setWa(e)}}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Teléfono fijo:</FormControl.Label>
            <Input  placeholder="Teléfono fijo" 
                  value={telefono1}
                  onChangeText={(e)=>{setTelefono1(e)}}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Correo electrónico personal:</FormControl.Label>
            <Input  placeholder="Correo electrónico personal" 
                  value={correo1}
                  onChangeText={(e)=>{setCorreo1(e)}}
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
                <FormControl.Label>Apellido paterno:</FormControl.Label>
                <Input  placeholder="Apellido paterno" 
                     
                     value={paterno}
                     onChangeText={(e)=>{setPaterno(e)}}

                />
              </FormControl>

              <FormControl>
                <FormControl.Label>Apellido materno:</FormControl.Label>
                <Input placeholder="Apellido materno" 
                     maxLength={20}
                     value={materno}
                     onChangeText={(e)=>{setMaterno(e)}}/>
              </FormControl>

              <FormControl>
                <FormControl.Label>Nombres:</FormControl.Label>
                <Input placeholder="Nombres" 
                     
                     value={nombre}
                     onChangeText={(e)=>{setNombre(e)}} />
              </FormControl>

              <FormControl mb={4} >
                <FormControl.Label>Sexo:</FormControl.Label>
                
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
            <FormControl.Label>Nacionalidad:</FormControl.Label>
            <Input placeholder="Nacionalidad" 
                     
                     value={nacionalidad}
                     onChangeText={(e)=>{setNacionalidad(e)}} />
          </FormControl>


          <FormControl>
            <FormControl.Label>¿Tiene otra nacionalidad a parte de la arriba mencionada?</FormControl.Label>
              <Checkbox  isChecked={otraNacion} value={otraNacion}
              onChange={() => handleNacionChange(true)} my={2}>
                    Si
              </Checkbox>

              <Checkbox  isChecked={!otraNacion}  value={!otraNacion}
              onChange={() => handleNacionChange(false)}my={2}>
                    No
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
            <FormControl.Label>Estado civil:</FormControl.Label>
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

            <FormControl.Label>Nombre completo:</FormControl.Label>
            <Input
            placeholder="Nombre"
            value={pareja.nombre}
            onChangeText={(value) => handleParejaChange('nombre', value)}
          />

           
            <FormControl.Label>Fecha de nacimiento:</FormControl.Label>
            <Input             placeholder="Fecha de nacimiento"
            value={pareja.fNacimiento}
            onChangeText={(value) => handleParejaChange('fNacimiento', value)}/>
            <FormControl.Label>Lugar de nacimiento:</FormControl.Label>
            <Input             placeholder="Lugar de nacimiento"
            value={pareja.lugarNac}
            onChangeText={(value) => handleParejaChange('lugarNac', value)}/>
            
            { estadoCivil === 1 ? (
              <>
              <FormControl.Label>¿Viven en el mismo domicilio?</FormControl.Label>
              <Checkbox  isChecked={comparteCasa} value={comparteCasa}
              onChange={() => setComparteCasa(true)} my={2}>
                    Si
              </Checkbox>

              <Checkbox  isChecked={!comparteCasa}  value={!comparteCasa}
              onChange={() => setComparteCasa(false)}my={2}>
                    No
            </Checkbox>
              </>
            ) : null}


            { estadoCivil ===2 ? (
              <>
                <FormControl.Label>Fecha de inicio legal del matrimonio:</FormControl.Label>
                <Input  placeholder="Fecha de inicio legal del matrimonio"
                 value={pareja.inicioM}
                 onChangeText={(value) => handleParejaChange('inicioM', value)} />
                <FormControl.Label>Fecha de termino legal del matrimonio:</FormControl.Label>
                <Input  placeholder="Fecha de termino legal del matrimonio"
                 value={pareja.finM}
                 onChangeText={(value) => handleParejaChange('finM', value)} />
              </>
            ) : null}

            { estadoCivil === 3 ? (
              <>
              <FormControl.Label>Fecha de defunción: </FormControl.Label>
              <Input placeholder="Fecha de defunción" value={pareja.finM}  
              onChangeText={(value) => handleParejaChange('finM', value)}/>
              <FormControl.Label>Lugar de defunción: </FormControl.Label>
              <Input placeholder="Fecha de defunción" value={pareja.lugarDef} 
              onChangeText={(value) => handleParejaChange('lugarDef', value)}/>
              
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
              <FormControl.Label>Fecha tentativa de viaje: </FormControl.Label>
              <Input placeholder="Fecha tentativa de viaje" 
                     
                     value={fechaViaje}
                     onChangeText={(e)=>{setFechaViaje(e)}}/>
            </FormControl>
            <Ayuda titulo="Fecha de viaje" text="No debe dejar este espacio en blanco"/>
          </Stack>

          <Stack direction={"row"} mt={3}>
            <FormControl w="60%">
              <FormControl.Label>Dirección donde se hospedará en USA:  </FormControl.Label>
              <Input placeholder="Dirección de hospedaje" 
                     
                     value={direccionHospedaje}
                     onChangeText={(e)=>{setDireccionHospedaje(e)}}/>
            </FormControl>
            <Ayuda titulo="Información de hospedaje" text="Dirección  de tu hospedaje en caso de visitar a algún familiar o amigo o
                simplemente agregue “hotel, y la ciudad y estado que visitará” " />
          </Stack>

          <Stack direction={"row"} my={3}>
          <FormControl w="60%">
            <FormControl.Label>¿Quién cubrirá los gastos de su viaje?</FormControl.Label>
            <FormControl.Label> Nombre completo: </FormControl.Label>
            <Input             placeholder="Nombre"
            value={gastosViaje.nombre}
            onChangeText={(value) => handleGastosChange('nombre', value)}/>
            <FormControl.Label>Teléfono: </FormControl.Label>
            <Input            placeholder="Teléfono"
            value={gastosViaje.tel}
            onChangeText={(value) => handleGastosChange('tel', value)} />
            <FormControl.Label>Dirección: </FormControl.Label>
            <Input             placeholder="Dirección"
            value={gastosViaje.direccion}
            onChangeText={(value) => handleGastosChange('direccion', value)}/>
            <FormControl.Label>E-mail: </FormControl.Label>
            <Input             placeholder="E-mail"
            value={gastosViaje.email}
            onChangeText={(value) => handleGastosChange('email', value)}/>
          </FormControl>
          <Ayuda titulo="Gastos de viaje" text="Recuerde que únicamente de padres a hijos y de hijos a padres se pueden cubrir los
            gastos de viaje o entre esposos. No abuelos o novios o tios."/>
          </Stack>


          <Stack direction={"row"} >
            <FormControl w="60%">
              <FormControl.Label>¿Usted viajara solo?   </FormControl.Label>
                <Checkbox  isChecked={viajaSolo} value={otraNacion}
                onChange={() => setViajaSolo(true)} my={2}>
                      Si
                </Checkbox>

                <Checkbox  isChecked={!viajaSolo}  value={!otraNacion}
                onChange={() => setViajaSolo(false)}my={2}>
                      No
              </Checkbox>
              {!viajaSolo ? (
              <>
              <FormControl.Label>Nombres completos : </FormControl.Label>
                <Input placeholder="Nombres completos de los acompañantes" 
          
                value={acompanantes}
                onChangeText={(e)=>{setAcompanantes(e)}} />
                </>
              ) : null}
            </FormControl>
            <Ayuda titulo="Acompañantes" text="En caso de alguien viaje con usted , favor de agregar , nombres completos."/>
          </Stack> 

          <Stack direction={"row"} my={3} > 
            <FormControl w="60%">
              <FormControl.Label>Fecha de su ultima entrada a USA? DD/MM/AAAA </FormControl.Label>
              <Input  placeholder="Fecha de su ultima entrada a USA? DD/MM/AAAA" 
          
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
            <FormControl.Label>¿Usted ha tenido VISA anteriormente? </FormControl.Label>
              <Checkbox isChecked={visaAnterior} value={visaAnterior} my={2}
              onChange={()=>setVisaAnterior(true)}>
                Si
              </Checkbox>
              <Checkbox isChecked={!visaAnterior} value={!visaAnterior} my={2}
              onChange={()=>setVisaAnterior(false)}>
                No
              </Checkbox>
          </FormControl>

          <FormControl>
            <FormControl.Label>¿Le han negado la  VISA anteriormente? </FormControl.Label>
              <Checkbox isChecked={visaNegada} value={visaNegada} my={2}
              onChange={()=>setVisaNegada(true)}>
                Si
              </Checkbox>
              <Checkbox isChecked={!visaNegada} value={!visaNegada} my={2}
              onChange={()=>setVisaNegada(false)}>
                No
              </Checkbox>
          </FormControl>
          
          <FooterBotons/>

             
          </View>
      ) : null}

      { state === 5 ? (
        <View mx={"10%"}>
            <FormControl>
                <FormControl.Label>Ingresa tu dirección completa</FormControl.Label>
               
              </FormControl>
              <FormControl>
                <FormControl.Label>Calle: </FormControl.Label>
                <Input             placeholder="Calle"
                  value={direccion.calle}
                   onChangeText={(value) => handleDireccionChange('calle', value)}/>
              </FormControl>

              <FormControl>
                <FormControl.Label>Número: </FormControl.Label>
                <Input             placeholder="Número"
                  value={direccion.numero}
                   onChangeText={(value) => handleDireccionChange('numero', value)}/>
              </FormControl>

              <FormControl>
                <FormControl.Label>Colonia: </FormControl.Label>
                <Input             placeholder="Colonia"
                  value={direccion.colonia}
                   onChangeText={(value) => handleDireccionChange('colonia', value)}/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Código postal: </FormControl.Label>
                <Input             placeholder="Código postal"
                  value={direccion.cp}
                   onChangeText={(value) => handleDireccionChange('cp', value)}/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Estado: </FormControl.Label>
                <Input             placeholder="Estado"
                  value={direccion.estado}
                   onChangeText={(value) => handleDireccionChange('estado', value)}/> 
              </FormControl>

              <FormControl>
                <FormControl.Label>Ciudad: </FormControl.Label>
                <Input             placeholder="Ciudad"
                  value={direccion.ciudad}
                   onChangeText={(value) => handleDireccionChange('ciudad', value)}/>
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
              <Input  placeholder="Teléfono fijo"
                  value={contacto.casa}
                   onChangeText={(value) => handleContactoChange('casa', value)}/>
              <Text>CELULAR:</Text>
              <Input  placeholder="Teléfono móvil"
                  value={contacto.celular}
                   onChangeText={(value) => handleContactoChange('celular', value)}/>
              <Text>TRABAJO:</Text>
              <Input   placeholder="Teléfono laboral"
                  value={contacto.trabajo}
                   onChangeText={(value) => handleContactoChange('trabajo', value)}/>
            </FormControl>

            <FormControl>
              <FormControl.Label>CORREO ELECTRÓNICO:</FormControl.Label>
              <Input   placeholder="Correo electrónico"
                  value={contacto.email}
                   onChangeText={(value) => handleContactoChange('email', value)}/>
            </FormControl>

            <FormControl w="60%">
              <FormControl.Label>¿TIENES REDES SOCIALES? </FormControl.Label>
                <Checkbox  isChecked={contacto.redes} value={contacto.redes}
                onChange={() => setContacto.redes(true)} my={2}>
                      SI
                </Checkbox>

                <Checkbox  isChecked={!contacto.redes} value={!contacto.redes}
                onChange={() => setContacto.redes(false)} my={2}>
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
        <Titulo texto="Información sobre sus padres"/>

        <FormControl bg={"#"} my={2}>
          <FormControl.Label my={2}>Nombre de su padre: </FormControl.Label>
          <Input placeholder="Nombre de su padre: "
                  value={padres.padre}
                   onChangeText={(value) => handlePadresChange('padre', value)}/>
        </FormControl>

        <FormControl bg={"#"} my={2}>
          <FormControl.Label my={2}>Fecha de nacimiento de su padre:</FormControl.Label>
          <Input placeholder="Fecha de nacimiento de su padre:"
                  value={padres.fnPadre}
                   onChangeText={(value) => handlePadresChange('fnPadre', value)}/>
        </FormControl>

        <FormControl bg={"#"} my={2}>
          <FormControl.Label my={2}>Nombre de su madre: </FormControl.Label>
          <Input placeholder="Nombre de su madre: "
                  value={padres.madre}
                   onChangeText={(value) => handlePadresChange('madre', value)}/>
        </FormControl>

        <FormControl bg={"#"} my={2}>
          <FormControl.Label my={2}>Fecha de nacimiento de su madre:</FormControl.Label>
          <Input placeholder="Fecha de nacimiento de su madre:"
                  value={padres.fnMadre}
                   onChangeText={(value) => handlePadresChange('fnMadre', value)}/>
        </FormControl>



        <Divider/>



 

        <FormControl >
              <FormControl.Label>¿Tiene algún pariente directo como hijos o hermanos viviendo en USA? </FormControl.Label>
                <Checkbox  isChecked={tieneParientes} value={tieneParientes}
                onChange={() => setTieneParientes(true)} my={2}>
                      Sí
                </Checkbox>

                <Checkbox  isChecked={!tieneParientes}  value={!tieneParientes}
                onChange={() => setTieneParientes(false)}my={2}>
                      No
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
          <Button mx="15%" my={6} onPress={()=>setState(10)}>
            Verificar información
          </Button>
          <BotonVolver/>
         </>
      ) : null}



      
    </ScrollView>

    {state === 10 ? (
      <>
      <PDFViewer height={1200} width={"90%"} style={{alignSelf:"center"}}>
              <MyDocument />
      </PDFViewer>
      <Button mx="15%" my={6} onPress={()=>setState(9)}>
        Volver
      </Button>
      </>
    
  ) : null }


    </NativeBaseProvider>
  );
}



export default App;
