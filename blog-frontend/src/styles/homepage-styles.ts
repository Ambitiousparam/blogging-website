import { SxProps } from "@mui/material";
export type Styles = {
    [key:string]: SxProps;
}
 export const homepageStyles: Styles = { 
    container:{
        display:"flex",
        flexDirection:"column",
        gap:10,
    },
    wrapper:{
        display:"flex",
        justifyContent:"center",
        gap:4,
        alignItems:"center",
        padding:6
    }, 
    text:{
        fontFamily: "Work Sans",
        fontSize:{lg:50, md:40, sm:35, xs:20},
        textShadow:"12px 10px 8px #ccc",
    },
    image: {
        boxShadow:"10px 10px 25px #000",
        borderRadius:20, 
    },
    footercontainer:{
        bgcolor:"#404040",
       display:"flex",
       alignItems:"center",
       gap:20,
       height:"20vh",
       justifyContent:"center",
       padding:0,
    },
    footerbtns:{
        borderRadius:10,
        bgcolor:"blueviolet",
        width:200,
        ":hover":{
            bgcolor: "#bd63fa",
        },
    },
    footertext:{
        fontFamily:"Work Sans",
        fontWeight:"500",
        fontSize:20,
        color:"white",
    },
   
    
};
