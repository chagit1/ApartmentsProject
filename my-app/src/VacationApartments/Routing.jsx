import { Route, Routes } from "react-router-dom"
import { SignIn} from "./SignIn"

import { AllApartments, CardApartments, FilterApartments } from "./apartment/CardApartments"
import { TheApartment } from "./apartment/TheApartment"
import { AllMyApartments } from "./publisher/MyApartment"
import AddApartmentForm, { AddCategory, AddCity } from "./publisher/AddApartment"
import { UpdateApartment } from "./publisher/UpdateApartment"
import RegisterPublisher from "./RegisterPublisher"
import { RegisterClient } from "./RegisterClient"
import { Home } from "./Home"

export const Routing = () => {
    return <>
        <Routes>
            <Route path={'/'} element={<Home></Home>}></Route>
            <Route path={'Home'} element={<Home></Home>}></Route>
            <Route path={'RegisterClient'} element={<RegisterClient></RegisterClient>}></Route>
            <Route path={'RegisterPublisher'} element={<RegisterPublisher></RegisterPublisher>}></Route>
            <Route path={'SignIn'} element={<SignIn></SignIn>}></Route>
            <Route path={'AllApartments'} element={<AllApartments></AllApartments>}></Route>
            <Route path={'FilterApartments'} element={<FilterApartments></FilterApartments>}></Route>
            <Route path={'MyApartments'} element={<AllMyApartments></AllMyApartments>}></Route>
            <Route path={'TheApartment/:_id'} element={<TheApartment></TheApartment>}></Route>
            <Route path={'AddApartment'} element={<AddApartmentForm></AddApartmentForm>}></Route>
            <Route path={'AddCategory'} element={<AddCategory></AddCategory>}></Route>
            <Route path={'AddCity'} element={<AddCity></AddCity>}></Route>
            <Route path={'UpdateApartment/:_id'} element={<UpdateApartment></UpdateApartment>}></Route>
            {/* <Route path={'AllRecipe/:name'} element={<AllRecipe></AllRecipe>}></Route>
            <Route path={'TheRecipe/:id/:name/:image/:idUser/:level/:categoryId/:notice'} element={<TheRecipe></TheRecipe>}>
                <Route path={'AddResponse/:id'} element={<AddResponse></AddResponse>}></Route>
                <Route path={'Response/:id'} element={<Response></Response>}></Route>
            </Route>
            <Route path={'AllRecipePerLevel/:name'} element={<AllRecipePerLevel></AllRecipePerLevel>}></Route>
            <Route path={'CurrentUser'} element={<CurrentUser></CurrentUser>}>
                <Route path={'AddRecipe'} element={<AddRecipe></AddRecipe>}></Route>
                <Route path={'MyRecipe'} element={<MyRecipe></MyRecipe>}></Route>
            </Route>
            <Route path={'AddCategory'} element={<AddCategory></AddCategory>}>
                <Route path={'AddCategorinsert'} element={<AddCategorinsert></AddCategorinsert>}></Route>
                <Route path={'AddLevel'} element={<AddLevel></AddLevel>}></Route>
            </Route> */}
        </Routes>
    </>
}