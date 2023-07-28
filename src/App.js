import {  ScrollView, FormControl, Input, 
  Text, Image, Stack, Box, Button, View, Divider, Checkbox, NativeBaseProvider
} from "native-base";
import React, {useEffect, useState} from "react";
import Titulo from "./components/titulo";
import { PDFViewer, Page, Image as ImagePDF,Text as TextPDF, View as ViewPDF, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import funEstadoCivil from "./components/funEstadoCivil";
function App() {
  const [state, setState] = useState(0);
  // nueva true, renovacion fals
  const [ nueva, setNueva] = useState(true);
  //variables
  //0.
  const [ wa, setWa ] = useState("");
  const [ telefono1, setTelefono1 ] = useState("");
  const [ correo1, setCorreo1 ] = useState("");
  const fechaPDF = new Date();
  const d = fechaPDF.getDay();
  const m = fechaPDF.getMonth();
  const y = fechaPDF.getFullYear();
  //1.
   const [ nombre, setNombre] = useState("");
   const [ paterno, setPaterno] = useState("");
   const [ materno,setMaterno] = useState("");
  // //2-5
   const [ sexo, setSexo] = useState(true);

   //0=soltero, 1=casado, 2=divorciado, 3=viudo, 4=union libre
   const [ estadoCivil, setEstadoCivil] = useState(0);
   const [ nacionalidad, setNacionalidad] = useState("");
   const [ otraNacion, setOtraNacion] = useState(false);
   const [ otraNacionalidad, setOtraNacionalidad] = useState("");
   const [ pareja, setPareja ] = useState({nombre: "", fNacimiento:"", lugarNac:"", inicioM:"" , finM:"", lugarDef:""})
   const [ comparteCasa, setComparteCasa ] = useState(true);
   const [ fechaViaje, setFechaViaje ] = useState ("");
   const [ direccionHospedaje, setDireccionHospedaje ] = useState("");
   const [ gastosViaje, setGastosViaje ] = useState({nombre:"", tel:"", direccion:"", email:"", pagaSolo: true});
   const [ ultimaEntrada, setUltimaEntrada ] =useState("");
   const [ diasUltima, setDiasUltima ] = useState("");
   const [ direccion, setDireccion ] = useState({calle:"", numero:"", colonia:"", cp:"", estado:"" , ciudad:""})
   const [ viajaSolo, setViajaSolo ] = useState(false);
   const [ acompanantes, setAcompanantes ] = useState("");
   const [ visaAnterior, setVisaAnterior ] = useState(Boolean);
   const [ visaNegada, setVisaNegada ] = useState(true)
   const [ fechaVisaNegada, setFechaVisaNegada ] = useState("")
   const [ contacto, setContacto ] = useState({casa:"", celular:"", trabajo:"", email:"", redes:true, fb:"", instagram:""})
   const [ tieneParientes, setTieneParientes ] = useState(true);
   const [ pariente, setPariente ] = useState( {nombre : "", parentesco : "", estatus: ""} );
   const [ esEstudiante, setEsEstudiante ] = useState(true);
   const [ padres, setPadres ] = useState({padre:"", fnPadre:"", madre:"", fnMadre:""})
   const [ trabajo, setTrabajo ] = useState ( { empresa: "", direccion: "", telefono: "", sueldo: "", cargo: "", anterior:""} );
   const [ trabajoAnterior, setTrabajoAnterior ] = useState ( { empresa: "", direccion: "", fechaIngreso: "", fechaSalida: "", cargo: "", exJefe:""} );
   const [ escuela, setEscuela ] = useState( { nombre: "", direccion: "", fecha:"", grado:""} )
   const [ infoAdicional, setInfoAdicional ] = useState ( { paises: "", idiomas: "", problema: false, explicaP:"", deportado:false, explicaD:"" } );
   //IMAGENES

  //pasaporte
  const [ pasaporteIMG, setPasaporteIMG ] = useState([]); 
  const [ pasaporteURL, setPasaporteURL ] = useState([]); 
  useEffect(() => {
    if (pasaporteIMG.length < 1 ) return;
    const newPassUrls = [];
    pasaporteIMG.forEach(image=> newPassUrls.push(URL.createObjectURL(image)));
    setPasaporteURL(newPassUrls);
  }, [pasaporteIMG]);

  useEffect(() => {
    console.log("pasaporteURL: ", pasaporteURL)
  }, [pasaporteURL])

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



  const FooterBotons=()=>{
    return(
      <Stack direction={"column"} space={5} my={5}>
          <Button my={4} mx={"15%"} onPress={()=>handleStates()}>Continuar </Button>
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

const handleParienteChange = (name, value) => {
  setPariente({ ...pariente, [name]: value });
};
const handleTrabajoChange = (name, value) => {
  setTrabajo({ ...trabajo, [name]: value });
};
const handleTrabajoAnteriorChange = (name, value) => {
  setTrabajoAnterior({ ...trabajoAnterior, [name]: value });
};
const handleEscuelaChange = (name, value) => {
  setEscuela({ ...escuela, [name]: value });
};

const handleInfoAdicionalChange = (name, value) => {
  setInfoAdicional({ ...infoAdicional, [name]: value });
};

// VALIDACIONES Y NAVEGACION
const handleStates = (opcion)=>{
  switch (state) {
    case 0:
        // Verificar si algún campo está vacío
        if (pasaporteURL === [] || wa === '' || telefono1 === '' || correo1 ==='') {
          // Mostrar alerta con los campos vacíos
          let camposVacios = [];
          if (pasaporteURL.length === 0) camposVacios.push('Pasaporte');
          if (wa === '') camposVacios.push('WhatsApp');
          if (telefono1 === '') camposVacios.push('Teléfono');
          if (correo1 === '') camposVacios.push('Correo');

          alert(`Los siguientes campos están vacíos: ${camposVacios.join(', ')}`);
        } else {
          // Todos los campos están completos, puedes enviar el formulario o realizar cualquier otra acción aquí
          // ...
          opcion === true ? handleFirst(2, true) : handleFirst(1, false);
        }
      break;

    case 1:
              // Verificar si algún campo está vacío
              if (visa1URL === [] || visa2URL === [] ) {
                // Mostrar alerta con los campos vacíos
                let camposVacios = [];
                if (visa1URL.length === 0) camposVacios.push('Visa frontal');
                if (visa2URL.length === 0) camposVacios.push('Visa posterior');
      
                alert(`Los siguientes campos están vacíos: ${camposVacios.join(', ')}`);
              } else {
                // Todos los campos están completos, puedes enviar el formulario o realizar cualquier otra acción aquí
                // ...
               handleFirst(2, false);
              }
      
      break;
    
    case 2:
        // Verificar si algún campo está vacío
        if (paterno === '' || materno === '' || nombre === '' ) {
        // Mostrar alerta con los campos vacíos
        let camposVacios = [];
        if (paterno === '') camposVacios.push('Apellido paterno');
        if (materno === '') camposVacios.push('Apellido materno');
        if (nombre === '') camposVacios.push('Nombre');

        alert(`Los siguientes campos están vacíos: ${camposVacios.join(', ')}`);
      } else {
        // Todos los campos están completos, puedes enviar el formulario o realizar cualquier otra acción aquí
        // ...
        setState(3);
      }
      
      break;

    case 3:
       switch (true) {
        case (nacionalidad===""):
          alert('El campo Nacionalidad está vacío.')
          
          break;
        case (otraNacion && otraNacionalidad ===""):
         
            alert('El campo Otra Nacionalidad está vacío.')
            
            break;
        case (estadoCivil===1 || estadoCivil===4):
          let camposVacios = [];
          if (pareja.nombre === '') camposVacios.push('Nombre de la pareja');
          if (pareja.fNacimiento === '') camposVacios.push('Fecha de nacimiento de la pareja');
          if (pareja.lugarNac === '') camposVacios.push('Lugar de nacimiento de la pareja');
          if ( pareja.nombre==="" || pareja.fNacimiento==="" || pareja.lugarNac===""  ){
            alert(`Los siguientes campos están vacíos: ${camposVacios.join(', ')}`);}
            else{
              setState(4);
            }
        break;
        case (estadoCivil===2):
          let camposVacios2 = [];
          if (pareja.nombre === '') camposVacios2.push('Nombre de la pareja');
          if (pareja.fNacimiento === '') camposVacios2.push('Fecha de nacimiento de la pareja');
          if (pareja.lugarNac === '') camposVacios2.push('Lugar de nacimiento de la pareja');
          if (pareja.inicioM === '') camposVacios2.push('Fecha de inicio de matrimonio');
          if (pareja.finM === '') camposVacios2.push('Fecha de termino legal de matrimonio');
          if ( pareja.nombre==="" || pareja.fNacimiento==="" || pareja.lugarNac==="" || pareja.inicioM ==="" || pareja.finM=== ""  ){
            alert(`Los siguientes campos están vacíos: ${camposVacios2.join(', ')}`);}
            else{
              setState(4);
            }
        break;
        case (estadoCivil===3):
          let camposVacios3 = [];
          if (pareja.nombre === '') camposVacios3.push('Nombre de la pareja');
          if (pareja.fNacimiento === '') camposVacios3.push('Fecha de nacimiento de la pareja');
          if (pareja.lugarNac === '') camposVacios3.push('Lugar de nacimiento de la pareja');
          if (pareja.lugarDef === '') camposVacios3.push('Lugar de defunción');
          if (pareja.finM === '') camposVacios3.push('Fecha de defunción');
          if ( pareja.nombre==="" || pareja.fNacimiento==="" || pareja.lugarNac==="" || pareja.lugarDef ==="" || pareja.finM=== ""  ){
            alert(`Los siguientes campos están vacíos: ${camposVacios3.join(', ')}`);}
            else{
              setState(4);
            }
        break;
       
        default:
          setState(4);
          break;
       }
      break;

    case 4:
       switch (true) {
        case (fechaViaje===""):
          alert("El campo fecha de viaje está vacío.");
          break;
        case (direccionHospedaje===""):
          alert("El campo dirección de hospedaje está vacío.");
          break;

          case (gastosViaje.pagaSolo===false):
            let camposVacios3 = [];
            if (gastosViaje.nombre === '') camposVacios3.push('Nombre de la pareja');
            if (gastosViaje.tel === '') camposVacios3.push('Fecha de nacimiento de la pareja');
            if (gastosViaje.direccion === '') camposVacios3.push('Lugar de nacimiento de la pareja');
            if (gastosViaje.email === '') camposVacios3.push('Lugar de defunción');
            if ( gastosViaje.nombre ==="" || gastosViaje.tel ==="" || gastosViaje.direccion==="" || gastosViaje.email ==="" ){
              alert(`Los siguientes campos están vacíos: ${camposVacios3.join(', ')}`);}
              else{
                setState(5);
              }
          break;

          case (viajaSolo && acompanantes === ""):
           alert("El campo de Nombres completos de los acompañantes está vacío")
          break;

          case (ultimaEntrada === ""):
            alert("El campo de Fecha de su última entrada está vacío")
           break;

          case (diasUltima === ""):
          alert("El campo Días que ingresó está vacío")
          break;

        default:
          alert("Default uwu");
          break;
       }

      break;
      
    case 5:
      // Verificar si algún campo está vacío
      if (direccion.calle === '' || direccion.numero === '' || direccion.colonia === '' || direccion.cp === '' || direccion.estado === '' || direccion.ciudad === '' ) {
        // Mostrar alerta con los campos vacíos
        let camposVacios = [];
        if (direccion.calle === '') camposVacios.push('Calle');
        if (direccion.numero === '') camposVacios.push('Número');
        if (direccion.colonia === '') camposVacios.push('Colonia');
        if (direccion.cp === '') camposVacios.push('Código Postal');
        if (direccion.estado === '') camposVacios.push('Estado');
        if (direccion.ciudad === '') camposVacios.push('Ciudad');

        alert(`Los siguientes campos están vacíos: ${camposVacios.join(', ')}`);
      } else {
        // Todos los campos están completos, puedes enviar el formulario o realizar cualquier otra acción aquí
        // ...
        setState(6);
      }
      break;
      
    case 6:
      // Verificar si algún campo está vacío
      if ( contacto.casa === '' || contacto.celular === '' ||contacto.trabajo === '' || contacto.email === '' ) {
        // Mostrar alerta con los campos vacíos
        let camposVacios = [];
        if (contacto.casa === '') camposVacios.push('Casa');
        if (contacto.celular === '') camposVacios.push('Celular');
        if (contacto.trabajo === '') camposVacios.push('Trabajo');
        if (contacto.email === '') camposVacios.push('Email');
        if (contacto.redes === true){
          if (contacto.fb === '') camposVacios.push('Facebook');
          if (contacto.instagram === '') camposVacios.push('Instagram');
        }


        alert(`Los siguientes campos están vacíos: ${camposVacios.join(', ')}`);
      } else {
        // Todos los campos están completos, puedes enviar el formulario o realizar cualquier otra acción aquí
        // ...
        setState(7);
      }
      break;

    case 7:
      // Verificar si algún campo está vacío
      if ( padres.padre === '' || padres.fnPadre === '' || padres.madre === '' || padres.fnMadre === ''  ) {
        // Mostrar alerta con los campos vacíos
        let camposVacios = [];
        if (padres.padre === '') camposVacios.push('Padre');
        if (padres.fnPadre === '') camposVacios.push('Fecha de nacimiento del Padre');
        if (padres.madre === '') camposVacios.push('Madre');
        if (padres.fnMadre === '') camposVacios.push('Fecha de nacimiento de la Madre');
        if ( tieneParientes ){
          if (pariente.nombre === '') camposVacios.push('Nombre del Pariente');
          if (pariente.parentesco === '') camposVacios.push('Parentesco');
          if (pariente.estatus === '') camposVacios.push('Estatus del Pariente');
        }


        alert(`Los siguientes campos están vacíos: ${camposVacios.join(', ')}`);
      } else {
        // Todos los campos están completos, puedes enviar el formulario o realizar cualquier otra acción aquí
        // ...
     
          setState(8);
        
      }
      break;

    case 8:
      if ( trabajo.empresa === '' || trabajo.direccion === '' || trabajo.telefono === '' || trabajo.sueldo === '' || trabajo.cargo === '' ||  
         (esEstudiante && escuela.nombre === '' ) || trabajoAnterior.empresa ==="" ||
         trabajoAnterior.direccion ==="" || trabajoAnterior.fechaIngreso ==="" || trabajoAnterior.fechaSalida ==="" ||
          trabajoAnterior.exJefe ==="" || trabajoAnterior.cargo ==="" ) {
        // Mostrar alerta con los campos vacíos
        let camposVacios = [];
        if (trabajo.empresa === '') camposVacios.push('Empresa');
        if (trabajo.direccion === '') camposVacios.push('Dirección de Trabajo');
        if (trabajo.telefono === '') camposVacios.push('Teléfono de Trabajo');
        if (trabajo.sueldo === '') camposVacios.push('Sueldo');
        if (trabajo.cargo === '') camposVacios.push('Cargo');
        if (esEstudiante && escuela.nombre === '') camposVacios.push('Nombre de la Escuela');
        if (esEstudiante && escuela.direccion === '') camposVacios.push('Dirección de la Escuela');
        if (esEstudiante && escuela.fecha === '') camposVacios.push('Fecha de la Escuela');
        if (esEstudiante && escuela.grado === '') camposVacios.push('Grado de la Escuela');
        if (trabajoAnterior.empresa === '') camposVacios.push('Nombre de empresa del trabajo anterior');
        if (trabajoAnterior.direccion === '') camposVacios.push('Dirección de empresa del trabajo anterior');
        if (trabajoAnterior.fechaIngreso === '') camposVacios.push('Fecha de ingreso del trabajo anterior');
        if (trabajoAnterior.fechaSalida === '') camposVacios.push('Fecha de salida del trabajo anterior');
        if (trabajoAnterior.cargo === '') camposVacios.push('Cargo del trabajo anterior');
        if (trabajoAnterior.exJefe === '') camposVacios.push('Ex jefe del trabajo anterior');

        alert(`Los siguientes campos están vacíos: ${camposVacios.join(', ')}`);
      } else {
        // Todos los campos están completos, puedes enviar el formulario o realizar cualquier otra acción aquí
        // ...

          setState(9);
        
      
      }
      break;

    case 9:
      if ( infoAdicional.paises === ''|| infoAdicional.idiomas === ''|| infoAdicional.explicaP === ''|| infoAdicional.explicaD === ''   ) {
        // Mostrar alerta con los campos vacíos
        let camposVacios = [];
        if (infoAdicional.paises === '') camposVacios.push('Países');
        if (infoAdicional.idiomas === '') camposVacios.push('Idiomas');
        if (infoAdicional.explicaP === '') camposVacios.push('Problema en su estancia');
        if (infoAdicional.explicaD === '') camposVacios.push('Deportado');
        

        alert(`Los siguientes campos están vacíos: ${camposVacios.join(', ')}`);
      } else {
        // Todos los campos están completos, puedes enviar el formulario o realizar cualquier otra acción aquí
        // ...

          setState(10);
        
      
      }
      break;


  
    default:
      break;
  }
}

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
    justifyContent:"space-between",
 
  },
  image: {
    width: 400,
    height: "auto",
    alignSelf: "center"
  },
  titulo:{
    fontWeight: "bold",
    alignSelf: "center"
  }
});

// Create Document Component
const MyDocument = () => (
  <Document title={ paterno + " " + materno + " " + nombre + " " + d + "/" + m + "/" + y}>
    <Page size="A4" style={styles.page}>
      <ViewPDF style={{marginTop:10, paddingTop:10, alignSelf:"center"}}>

        <TextPDF > Formulário para { nueva ? "tramitar" : "renovar"} VISA americana</TextPDF>
      </ViewPDF>

      <ViewPDF style={styles.section}>

        {/* datos generales */}
        <ViewPDF style={styles.sec}>
          <TextPDF> Nombre: {nombre + " " + paterno + " " + materno} </TextPDF>

          <ViewPDF style={{flexDirection:"row", justifyContent:"space-beetwen", marginTop:10}}>
            <TextPDF style={styles.mid}> Whatsapp: {wa} </TextPDF>
            <TextPDF>Teléfono fijo: {telefono1} </TextPDF>
          </ViewPDF>
          
          <TextPDF> Correo electrónico personal: {correo1}</TextPDF>
          <TextPDF> Sexo: {sexo ? "Masculino" : "Femenino"} </TextPDF>
          <TextPDF> Nacionalidad: {nacionalidad }</TextPDF>
          <ViewPDF style={{flexDirection:"row", justifyContent:"space-beetwen"}}>
            <TextPDF style={styles.mid}> ¿Tiene otra nacionalidad? {otraNacion ? "Sí" : "No"} </TextPDF>
          {
            otraNacion ? 
            <TextPDF> 2da nacionalidad: {otraNacionalidad}</TextPDF> :
            null
          }
          </ViewPDF>
          <TextPDF>Estado civil: {funEstadoCivil(estadoCivil)} </TextPDF>
        </ViewPDF>
          {/* PASAPORTE */}
          <ViewPDF style={styles.sec}>
            <TextPDF>Pasaporte</TextPDF> 
            <ImagePDF src={pasaporteURL[0]} style={styles.image} />
          </ViewPDF>

                  {/* DIRECCIón personal */}
         <ViewPDF style={styles.sec}>
          <TextPDF>DIRECCIÓN PERSONAL</TextPDF>
         <ViewPDF style={{flexDirection:"row", justifyContent:"space-beetwen"}}>
              <TextPDF style={styles.mid}>Calle: {direccion.calle} </TextPDF>
              <TextPDF>Número: {direccion.numero} </TextPDF>
            </ViewPDF>

            <ViewPDF style={{flexDirection:"row", justifyContent:"space-beetwen"}}>
              <TextPDF style={styles.mid}>Colonia: {direccion.colonia} </TextPDF>
              <TextPDF>Código postal: {direccion.cp} </TextPDF>
            </ViewPDF>

            <ViewPDF style={{flexDirection:"row", justifyContent:"space-beetwen"}}>
              <TextPDF style={styles.mid}>Estado: {direccion.estado}</TextPDF>
              <TextPDF>Ciudad: {direccion.ciudad} </TextPDF>
            </ViewPDF>

         </ViewPDF>

                 {/* Telefonos de contacto y redes */}
        <ViewPDF style={styles.sec}>
          <TextPDF style={styles.titulo}>TELÉFONOS DE CONTACTO</TextPDF>
          <TextPDF>Casa: {contacto.casa}</TextPDF>
          <TextPDF>Celular: {contacto.celular} </TextPDF>
          <TextPDF>Trabajo: {contacto.trabajo} </TextPDF>
          <TextPDF>E-mail: {contacto.email} </TextPDF>
        </ViewPDF>
   
      </ViewPDF>

    </Page>
    
 {/* SEGUNDA PAGINA */}
 <Page>
  <ViewPDF  style={styles.section}>
  { contacto.redes === true ? (
        <ViewPDF style={styles.sec}>
        <TextPDF>REDES SOCIALES</TextPDF>
          <TextPDF>Facebook: {contacto.fb} </TextPDF>
          <TextPDF>Instagram: {contacto.instagram}</TextPDF>
        </ViewPDF>
        ) : null }

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


        {/* info sobre padres */}
        <ViewPDF style={styles.sec}>
          <TextPDF style={styles.titulo}>Información de los padres</TextPDF>
          <TextPDF> Nombre del padre: {padres.padre}</TextPDF>
          <TextPDF> Fecha de nacimiento del padre: {padres.fnPadre}</TextPDF>
          <TextPDF> Nombre de la madre: {padres.madre}</TextPDF>
          <TextPDF> Fecha de nacimiento del padre: {padres.fnMadre}</TextPDF>
        </ViewPDF>
          {/* Info pariente */}
        <ViewPDF style={styles.sec}>
          <TextPDF> ¿Tiene algún pariente directo viviendo en USA? {tieneParientes ? "Sí" : "No"}</TextPDF>
          { tieneParientes ? (
            <>
            <TextPDF> Nombre: {pariente.nombre}</TextPDF>
            <TextPDF> Parentesco: { pariente.parentesco} </TextPDF>
            <TextPDF> Estatus legal: {pariente.estatus } </TextPDF>
            </>
          ) : null}
        </ViewPDF>

  </ViewPDF>
 </Page>
    
    <Page size="A4" style={styles.page}>
      <ViewPDF style={styles.section}>



        {/* info laboral  */}
        <ViewPDF style={styles.sec}>
          <TextPDF style={styles.titulo}>Información laboral</TextPDF>
          <TextPDF>Nombre de la empresa: {trabajo.empresa}</TextPDF>   
          <TextPDF>Dirección de la empresa: {trabajo.direccion}</TextPDF> 
          <TextPDF>Teléfono de la empresa: {trabajo.telefono}</TextPDF> 
          <TextPDF>Sueldo mensual bruto: {trabajo.sueldo}</TextPDF> 
          <TextPDF>Cargo: {trabajo.cargo}</TextPDF>      
          <TextPDF>Trabajo anterior: {trabajo.anterior} </TextPDF>    
        </ViewPDF>

        {/* info laboral  */}
        { esEstudiante ? (
          <ViewPDF style={styles.sec}>
            <TextPDF style={styles.titulo}>Información academica</TextPDF>
            <TextPDF>Nombre de la escuela: {escuela.nombre}</TextPDF>   
            <TextPDF>Dirección de la escuela: {escuela.direccion }</TextPDF> 
            <TextPDF>Fecha de ingreso: {escuela.fecha}</TextPDF> 
            <TextPDF>Grado actual que esta cursando:{escuela.grado} </TextPDF> 
          
          </ViewPDF>

        ) : null}

        {/* info laboral  */}

        <ViewPDF style={styles.sec}>
            <TextPDF>Paises que ha viajado en los ultimos 5 años: {infoAdicional.paises} </TextPDF>   
            <TextPDF>¿Qué idiomas habla a parte del español? {infoAdicional.idiomas} </TextPDF> 
            <TextPDF>¿En su estancia en usa , ha tenido algun problema? {infoAdicional.problema ? ("Sí," + infoAdicional.explicaP) :  "No"}</TextPDF> 
            <TextPDF>¿Ha sido deportado , salida voluntaria? {infoAdicional.deportado ? ("Sí, " + infoAdicional.explicaD) : "No"}</TextPDF> 
            
      
          </ViewPDF>

          {/* info laboral  */}
         
          { nueva===false ? (
             <ViewPDF style={styles.sec}>
              <TextPDF>VISA: </TextPDF> 
              <ViewPDF style={{flexDirection:"row"}}>
                <ImagePDF src={visa1URL[0]} />
                <ImagePDF src={visa2URL[0]} />
              </ViewPDF>
      
            </ViewPDF>
          ) : null}

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
       
        {/* <Button onPress={()=>handleFirst(2, true)}  my={5}>
          Primera vez
        </Button> */}
        <Button onPress={()=>handleStates(true)}  my={5}>
          Primera vez
        </Button>
        <Button onPress={()=>handleStates(false)}  my={5}>
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
           
            <Button my={4} mx={"15%"} onPress={()=>handleStates()}>Continuar </Button>

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

      {/* Fecha de viaje, gastos */}
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
            <Checkbox  isChecked={gastosViaje.pagaSolo} value={gastosViaje.pagaSolo}
                onChange={() => handleGastosChange('pagaSolo', true)} my={2}>
                      Yo mismo
                </Checkbox>

                <Checkbox   isChecked={!gastosViaje.pagaSolo} value={!gastosViaje.pagaSolo}
                onChange={() => handleGastosChange('pagaSolo', false)} my={2}>
                      Alguien cubrira mis gastos
              </Checkbox>
              { !gastosViaje.pagaSolo ? (
                <>
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
                </>
              ) : null}
          
          </FormControl>
          <Ayuda titulo="Gastos de viaje" text="Recuerde que únicamente de padres a hijos y de hijos a padres se pueden cubrir los
            gastos de viaje o entre esposos. No abuelos o novios o tios."/>
          </Stack>


          <Stack direction={"row"} >
            <FormControl w="60%">
              <FormControl.Label>¿Usted viajara solo?   </FormControl.Label>
                <Checkbox  isChecked={viajaSolo} value={viajaSolo}
                onChange={() => setViajaSolo(true)} my={2}>
                      Si
                </Checkbox>

                <Checkbox  isChecked={!viajaSolo}  value={!viajaSolo}
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
              {visaNegada ? (
                          <FormControl>
                <FormControl.Label>Fecha en que se negó la VISA:</FormControl.Label>
                <Input  placeholder="Fecha en que se negó la VISA" 
              
              value={fechaVisaNegada}
              onChangeText={(e)=>{setFechaVisaNegada(e)}} />
              </FormControl>
              ): null}
          </FormControl>
          
          <FooterBotons/>

             
          </View>
      ) : null}
      {/* direccion completa */}
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
              <FormControl.Label>Teléfonos de casa, celular y trabajo</FormControl.Label>
              <Text>Casa:</Text>
              <Input  placeholder="Teléfono fijo"
                  value={contacto.casa}
                   onChangeText={(value) => handleContactoChange('casa', value)}/>
              <Text>Celular:</Text>
              <Input  placeholder="Teléfono móvil"
                  value={contacto.celular}
                   onChangeText={(value) => handleContactoChange('celular', value)}/>
              <Text>Trabajo:</Text>
              <Input   placeholder="Teléfono laboral"
                  value={contacto.trabajo}
                   onChangeText={(value) => handleContactoChange('trabajo', value)}/>
            </FormControl>

            <FormControl>
              <FormControl.Label>Correo electrónico:</FormControl.Label>
              <Input   placeholder="Correo electrónico"
                  value={contacto.email}
                   onChangeText={(value) => handleContactoChange('email', value)}/>
            </FormControl>

            <FormControl w="60%">
              <FormControl.Label>¿Tienes redes sociales?</FormControl.Label>
                <Checkbox  isChecked={contacto.redes} value={contacto.redes}
                onChange={() => handleContactoChange('redes', true)} my={2}>
                      Sí
                </Checkbox>

                <Checkbox  isChecked={!contacto.redes} value={!contacto.redes}
                onChange={() => handleContactoChange('redes', false)} my={2}>
                      No
              </Checkbox>
              {contacto.redes ? (
              <>
            <FormControl>
              <FormControl.Label>¿Cómo apareces en facebook?  </FormControl.Label>
              <Input placeholder="Facebook"
                  value={contacto.fb}
                   onChangeText={(value) => handleContactoChange('fb', value)}/>
            </FormControl>

            <FormControl>
              <FormControl.Label>¿Cómo apareces en instagram?  </FormControl.Label>
              <Input placeholder="Instagram"
                  value={contacto.instagram}
                   onChangeText={(value) => handleContactoChange('instagram', value)}/>
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
              <FormControl.Label>Nombre completo: </FormControl.Label>
              <Input  placeholder="Nombre completo"
                  value={pariente.nombre}
                   onChangeText={(value) => handleParienteChange('nombre', value)}/>
            </FormControl>

            <FormControl>
              <FormControl.Label>Parentesco con usted: </FormControl.Label>
              <Input  placeholder="Parentesco con usted"
                  value={pariente.parentesco}
                   onChangeText={(value) => handleParienteChange('parentesco', value)}/>
            </FormControl>
            <Stack direction={"row"} my={3}>
            <FormControl w="60%">
              <FormControl.Label>Estatus legal: </FormControl.Label>
              <Input  placeholder="Estatus legal:"
                  value={pariente.estatus}
                   onChangeText={(value) => handleParienteChange('estatus', value)}/>
            </FormControl>
            <Ayuda tittulo="Estatus legal" text="El estatus legal (ciudadano americano, residente permanente, visa de trabajo o no lo sé)" />

            </Stack>
            </>
              ) : null}
          </FormControl>
        
        <FooterBotons/>
      </Stack>
      ) : null }

      { state === 8 ? (
        <Stack mx={"10%"}>
          <FormControl.Label>Información laboral</FormControl.Label>
          <Divider/>
          <FormControl.Label>Trabajo actual: </FormControl.Label>
          <FormControl bg={"#"}>
            <FormControl.Label>Nombre de la empresa: </FormControl.Label>
            <Input  placeholder="Nombre de la empresa"
                  value={trabajo.empresa}
                   onChangeText={(value) => handleTrabajoChange('empresa', value)}/>
          </FormControl>

          <FormControl bg={"#"}>
            <FormControl.Label>Dirección de la empresa: </FormControl.Label>
            <Input placeholder="Dirección de la empresa"
                  value={trabajo.direccion}
                   onChangeText={(value) => handleTrabajoChange('direccion', value)}/>
          </FormControl>

          <FormControl bg={"#"}>
            <FormControl.Label>Teléfono de la empresa: </FormControl.Label>
            <Input placeholder="Teléfono de la empresa:"
                  value={trabajo.telefono}
                   onChangeText={(value) => handleTrabajoChange('telefono', value)}/>
          </FormControl>

          <FormControl bg={"#"}>
            <FormControl.Label>Sueldo mensual bruto: </FormControl.Label>
            <Input placeholder="Sueldo mensual bruto"
                  value={trabajo.sueldo}
                   onChangeText={(value) => handleTrabajoChange('sueldo', value)}/>
          </FormControl>

          <FormControl bg={"#"}>
            <FormControl.Label>¿Cuál es su cargo? </FormControl.Label>
            <Input placeholder="¿Cuál es su cargo? "
                  value={trabajo.cargo}
                   onChangeText={(value) => handleTrabajoChange('cargo', value)}/>
          </FormControl>
          <Divider/>


          <FormControl bg={"#"}>
            <FormControl.Label>Trabajo anterior</FormControl.Label>

            <FormControl.Label>Nombre de la empresa:</FormControl.Label>
            <Input placeholder="Nombre de la empresa"
                  value={trabajoAnterior.empresa}
                   onChangeText={(value) => handleTrabajoAnteriorChange('empresa', value)}/>

            <FormControl.Label>Dirección de la empresa:</FormControl.Label>
            <Input placeholder="Dirección de la empresa"
                  value={trabajoAnterior.direccion}
                   onChangeText={(value) => handleTrabajoAnteriorChange('direccion', value)}/>

            <FormControl.Label>Fecha de ingreso a la empresa:</FormControl.Label>
            <Input placeholder="Fecha de ingreso a la empresa"
                  value={trabajoAnterior.fechaIngreso}
                   onChangeText={(value) => handleTrabajoAnteriorChange('fechaIngreso', value)}/>

            <FormControl.Label>Fecha de salida de la empresa:</FormControl.Label>
            <Input placeholder="Fecha de salida de la empresa"
                  value={trabajoAnterior.fechaSalida}
                   onChangeText={(value) => handleTrabajoAnteriorChange('fechaSalida', value)}/>

            <FormControl.Label>Nombre de su ex jefe directo:</FormControl.Label>
            <Input placeholder="Nombre de su ex jefe directo"
                  value={trabajoAnterior.exJefe}
                   onChangeText={(value) => handleTrabajoAnteriorChange('exJefe', value)}/>

            <FormControl.Label>Cargo:</FormControl.Label>
            <Input placeholder="Cargo"
                  value={trabajoAnterior.cargo}
                   onChangeText={(value) => handleTrabajoAnteriorChange('cargo', value)}/>


          </FormControl>





          <FormControl >
              <FormControl.Label>¿Eres estudiante? </FormControl.Label>
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
                <FormControl.Label>Nombre de la escuela: </FormControl.Label>
                <Input placeholder="Nombre de la escuela"
                  value={escuela.nombre}
                   onChangeText={(value) => handleEscuelaChange('nombre', value)}/>
              </FormControl>

              <FormControl>
                <FormControl.Label>Dirección de la escuela: </FormControl.Label>
                <Input placeholder="Dirección de la escuela"
                  value={escuela.direccion}
                   onChangeText={(value) => handleEscuelaChange('direccion', value)}/>
              </FormControl>

              <FormControl>
                <FormControl.Label>Fecha de ingreso: </FormControl.Label>
                <Input placeholder="Fecha de ingreso"
                  value={escuela.fecha}
                   onChangeText={(value) => handleEscuelaChange('fecha', value)}/>
              </FormControl>

              <FormControl>
                <FormControl.Label>Grado actual que esta cursando:</FormControl.Label>
                <Input placeholder="Grado actual que esta cursando"
                  value={escuela.grado}
                   onChangeText={(value) => handleEscuelaChange('grado', value)}/>
              </FormControl>

            </>

              ) : null}

          </FormControl>


 

          
          <FooterBotons/>
        </Stack>
      ) : null }

      { state === 9 ? (
         <>
         <FormControl >
            <FormControl.Label>Paises que ha viajado en los ultimos 5 años:</FormControl.Label>
            <Input placeholder="Paises que ha viajado en los ultimos 5 años"
                  value={infoAdicional.paises}
                   onChangeText={(value) => handleInfoAdicionalChange('paises', value)}/>
          </FormControl>


          <FormControl >
            <FormControl.Label>¿Qué idiomas habla a parte del español? :</FormControl.Label>
            <Input placeholder="Idiomas"
                  value={infoAdicional.idiomas}
                   onChangeText={(value) => handleInfoAdicionalChange('idiomas', value)}/>
          </FormControl>

          <FormControl >
            <FormControl.Label>¿En su estancia en usa , ha tenido algun problema? ¿si? ¿no? Explique:</FormControl.Label>
            <Input placeholder="¿En su estancia en usa , ha tenido algun problema?"
                  value={infoAdicional.explicaP}
                   onChangeText={(value) => handleInfoAdicionalChange('explicaP', value)}/>
          </FormControl>

          <FormControl >
            <FormControl.Label>¿Ha sido deportado , salida voluntaria? ¿si? ¿no? Explique:</FormControl.Label>
            <Input placeholder="¿Ha sido deportado , salida voluntaria?"
                  value={infoAdicional.explicaD}
                   onChangeText={(value) => handleInfoAdicionalChange('explicaD', value)}/>
          </FormControl>
          <FooterBotons/>
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
      <Button mx="15%" my={6} onPress={()=>setState(11)}>
        Continuar
      </Button>
      
      </>
    
  ) : null }

    {state === 11 ? (
      <div>
        <PDFDownloadLink document={<MyDocument />} fileName='TramiteVisa.pdf'>
          {({ blob, url, loading, error }) =>
            loading ? 'Cargando documento...' : 'Descarga tu formulario en PDF'
          }
        </PDFDownloadLink>
      </div>

    ) : null}


    </NativeBaseProvider>
  );
}



export default App;
