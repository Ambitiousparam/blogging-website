import { Styles } from "./homepage-styles"


export const authstyles: Styles ={
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        margin:"auto",
    },
    logotitle:{
        display:"flex",
        gap:1,
        alignItems:"center",
        justifyContent:"center",
        mt:1,
        mb:1,
    },
    logotext:{
        fontFamily:"Work Sans",
        fontSize:"25px",
        textAlign:"center",
    },
    formcontainer:{
        height:"100%",
        border:"1px solid #ccc",
        borderRadius:5,
        padding:6,
        boxShadow:"5px 5px 10px #000",
        mt:3,
        mb:10,
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        

    },
    form :{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        gap:10,
        padding:4,
        alignItems:"center",
        
    },
    submitbtn:{
        display:"flex",
        flexDirection:"column",
        fontFamily:"work Sans",
        width:"200px",
        mt:1,
        mb:1,
        borderRadius:10,
        bgcolor:"#273238",
        ":hover":{
            color:"white",
            bgcolor:"orangered",
            boxshadow:"10px 10px 20px #ccc",
        }
    },
    switchbtn:{
        background:"transparent",
        color:"#273238",
        ":hover":{
            textDecoration:"underline",
            textUnderlineOffset:"5px",

        }
    }

};