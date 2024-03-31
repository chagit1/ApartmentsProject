import { useSelector } from "react-redux"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import '../css/TheRecipe.css'

// קומפוננטה המציגה את המכון בצורה מלאה 
export const TheRecipe = () => {
     let tRecipe = useParams()
     let productPerRecipe = useSelector(x => x.productPerRefcipe)

     const listLevel = useSelector(x => x.levels)
     const listidUser = useSelector(x => x.users)
     const { id, name, image, instraction, idUser, level, categoryId, notice } = tRecipe
     //הצגת הרמה
     let idRecipeFerLevel = listLevel.filter(i => i.id == level)
     //הצגת שם העורך 
     let idRecipeFeridUser = listidUser.filter(i => i.id == idUser)
     //הצגת הרכיבים שמופיאים במתכון 
     let productFerIdRecipe = productPerRecipe.filter(x => x.idRecipe == id)

     // פונקציה המציגה את כל הרכיבים הקיימים במתכון 
     const ProductFunc = (productPerRefcipes) => {
          const listproducts = useSelector(x => x.products)
          let filetrIdRecipe = listproducts.filter(x => x.id == productPerRefcipes.idProduct)
          console.log(filetrIdRecipe)
          return (
               filetrIdRecipe.map((x, index) => <> <h3 key={index}>{productPerRefcipes.count} {x.name}</h3></>)
          )
     }
     //פונקציה המנתבת לצפייה בתגובות המתכון 
     let nav = useNavigate()
     const sow = () => {
          nav(`Response/${id}`)
     }
//פונקציה המנתבת להוספת תגובה למתכון 
     const add = () => {
          debugger
          nav(`AddResponse/${id}`)
     }
     return <>

          <div className="displayRecipe">
               <h2> {name}</h2>
               <img src={`${process.env.PUBLIC_URL}/image/${image}`} width={'200px'} height={'auto'}></img>
               <h2>הוראות הכנה</h2>
               <h3>{instraction}</h3>
               <h2>רכיבים</h2>
               {productFerIdRecipe.map((x) => ProductFunc(x))}
               <h2>דרגת קושי</h2>
               {idRecipeFerLevel.map((u, index) => <h3 key={index}>{u.name}</h3>)}
               <h2>שם העורך</h2>
               {idRecipeFeridUser.map((u, index) => <h3 key={index}>{u.name} </h3>)}
          </div>
          <Box sx={{ '& > :not(style)': { m: 0 } }}>
               <Fab aria-label="add" variant="extended" onClick={() => add()}>
                    <AddIcon sx={{ mr: 1 }} />הוספת תגובה</Fab>
               <Fab aria-label="add" variant="extended" onClick={() => sow()}>
                    <EditIcon sx={{ mr: 1 }} /> הצגת תגובות</Fab>
          </Box>
          <Outlet></Outlet>
     </>
}

