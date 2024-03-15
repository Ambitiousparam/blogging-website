
import { Styles } from "./homepage-styles";
 
export const blogpagestyles :Styles={
    container:{
        display:"flex",
        flexDirection:"column",
        height:"100%",
        padding:3,
    },
    profileheader:{
        display:"flex",
        flexDirection:"column",
        padding:1,
    },
    headertext:{
        fontFamily:"Work sans",
        marginLeft:"7px"
         
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
        

    },
    commentbox:{
        padding:2,
        display:"flex",
        alignItems:"center",
        gap:2,
        fontWeight:"500",
        fontSize:"20px"
    },
    commentinputcontainer: {
        padding: 2,
        width: "100%",  
        height: "20%",
        fontFamily: "Work sans"
    },
    
    commentinputlayout:{
        display:"flex",
        gap:2,
        alignItems:"center"
    },
    textField:{
        width:"100%",
        borderRadius:"20px"
    },
    comments:{
        display:"flex",
        flexDirection:"column",

    },
    commentitem:{
        display:"flex",
        padding:1,
        gap :1,
        borderBottom:"1px solid black",
        height:"50px",
        margin:1,
        alignItems:"", 


    },
    commenttext:{
        margin:2,
        fontWeight:"600",
        fontFamily:"Arvo",
        fontSize:"16px",
    }
}