import { Styles } from "./homepage-styles";
 
export const blogpagestyles :Styles={
    container:{
        display:"flex",
        flexDirection:"column",
        height:"100%",
        padding:2,
    },
    profileheader:{
        display:"flex",
        flexDirection:"column",
        padding:1,
    },
    headertext:{
        fontFamily:"Work sans"
         
    },
    profileheaderitems:{
        display:"flex",
        alignItems:"center",
        padding:1,
        gap:2,


    },
    blogtitle:{
        fontSize:"30px",
        textAlign:"center",
        fontFamily:"Work sans",
        fontWeight:"700",
        textShadow:"2px 2px 12px #ccc",



    },
    blogcontent:{
        textShadow:"1px 1px 6px #ccc",
        padding:5,
        fontSize:"20px",
        textAlign:"justify",
        fontFamily:"Work sans",
        

    }
}