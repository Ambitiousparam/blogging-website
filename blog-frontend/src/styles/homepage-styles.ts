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
       gap:"30px",
       height:"20vh",
       justifyContent:"center",
       padding:0,
    },
    footerbtns:{
        borderRadius:10,
        bgcolor:"blueviolet",
        width:"15%",
        ":hover":{
            bgcolor: "#bd63fa",
        },
        fontSize:{lg:12,md:12,sm:8,xs:8},
        maxwidth:"200px"
    },
    footertext:{
        fontFamily:"Work Sans",
        fontWeight:"500",
        color:"white",
        fontSize:{lg:20,md:15,sm:12,xs:10} , 
    },
   
    
};
