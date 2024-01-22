  
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


};