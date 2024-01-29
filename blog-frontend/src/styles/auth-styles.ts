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
        fontSize:"30px",
    },
    formcontainer:{
        border:"1px solid #ccc",
        borderRadius:5,
        padding:5,
        boxShadow:"5px 5px 10px #000"
    },
    form :{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        gap:10,
        padding:4,
        alignItems:"center",
    }

};