import { Styles } from "./homepage-styles";

const colors =[
    "#ee1d25",
    "#faa31a",
    "#97C83B",
    "#0085cc",
    "#e8ac1c",
    "#4981b3",
    "#00a895",
    "#ee008c",
    "#ce521d",
    "#9cb46f",
    "#9a869e",
    "#2dacbf",
    "#bcd634",
  ];
export function randombgcolor(){
    return colors[Math.floor(Math.random()*colors.length)];
  }
export const blogStyles:Styles={
    container:{
        display:"flex",
        justifyContent:"center",
        gap:10,
        flexWrap:"wrap",
        mt:5,
        mb:5,
    },
    card:{
        display:"flex",
        borderRadius:"20px",
        width: "calc(25% - 20px)",
        flexDirection:"column",
        height: "70vh",
        transition:"transform 1s",
        ":hover":{
            transform:"scale (1.02)",
            boxShadow:"10px 10px 20px #ccc",
        }
    },
        cardheader:{
            fontFamily:"Work Sans",
            fontSize:"72px",
            height:"auto",
            padding: 1,
            mb:1,
            ":hover":{
            cursor:"pointer"
            }
            
        },
        cardcontent:{
            width:"100%",
            height:"100%",
            fontSize:"20px",
            fontWeight:"500",
        },
        title:{
            fontWeight:"600",
            m:1,
            fontSize:{lg:32,md:28,sm:22,xs:18},
            color:"white",
            textTransform:"uppercase",
            fontFamily:"arvo",
            textShadow:"2px 7px 20px #000",
            ":hover":{
                textDecoration:"underline",
                textUnderlineOffset:"5px"
            }
        },
        contentText:{
            padding:2,
            fontfamily:"work sans",
            fontSize:"20px",
            fontWeight:"500",
        }, 
        author:{
            display:"flex",
            alignItems:"Center",
            gap:1,
            fontWeight:"bold",
            fontFamily:"work sans",
            padding:1,
            color:"white",
        },
        pagenotfound:{
            width:"100%",
            height:"100%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            margin:"auto",  


        }
}