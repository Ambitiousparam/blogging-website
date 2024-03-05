
import { Styles } from "./homepage-styles";

export const ProfileStyles:Styles={
    container:{
        display:"flex",
        flex:1,
    },
    blogsContainer:{
        display:"flex",
        flex:0.7,
        flexDirection:"column",
        padding:1,
        border:"1px solid #404040",
    },
    CardsContainer:{
        display:"flex",
        gap:5,
        justifyContent:"flex-start",
        alignItems:"center",
        flexWrap:"wrap",
        padding:4,
    },
    text:{
        fontFamily:"Work Sans",
        textAlign:"center",


    },
    ProfileContainer:{
        display:"flex",
        flex:0.3,


    },
    usercontainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        margin:"auto",
        top:"10",
        bottom:"10",
        left:"20",
        right:"20",
        gap:5,
        padding:4,
        position:"fixed"
    },
    avatar:{
        height:"80px",
        width:"80px",
    }
}