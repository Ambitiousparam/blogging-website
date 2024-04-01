  
import { Styles } from "./homepage-styles";
export const headerstyles:Styles={
    appBar:{
        position:"sticky",
        bgcolor:"#404040" ,
    },
    tabContainer:{
        width:"100%",
        display:"flex",
        marginRight:"auto",
        justifyContent:"flex-end",
        alignItems:"center",
        fontSize:{lg:15,md:13,sm:10,xs:10}
    },
    authbtn:{
        ml:2,
        bgcolor:"#d27e20",
        color:"white",
        width:90,
        borderRadius:20,
        ":hover":{
          bgcolor:"#ff9400",
        }
    },
    addLink:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:1,
        position:"absolute",
        right:"40%",
        width:"300px",
        padding:"5px",
        ":hover":{
            bgcolor:"rgba(0,0,0,0.5)",
            borderRadius:10,
            cursor:"pointer",
        },
    },
};