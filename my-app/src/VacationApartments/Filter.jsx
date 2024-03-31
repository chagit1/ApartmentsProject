
import  { useEffect, useState } from 'react';
import { PanelMenu } from 'primereact/panelmenu';
import { PanelMenuItem } from 'primereact/panelmenu';
import { GetAllCategory } from './category/api';
import { forEachChild } from 'typescript';
import { GetByCityId } from './apartment/api';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { CardApartments } from './apartment/CardApartments';
import { useNavigate } from 'react-router-dom';



// export const Filters = () => {
    
//     const [list, setList] = useState();
// let nav = useNavigate();
// const byCity = (event) => {
//     debugger
//     console.log(event);
//     // useEffect(() => {
//         GetByCityId(event)
//           .then(x => {
//             const theList = x.data.apartment;
//             setList(x.data.apartment);
//             // nav(`/FilterApartments/${theList}`)
//           })
//           .catch(err => {
//             // nav('/signIn');
//             console.log(err);
//           });
//     //   }, []);
    
// }
//     const [listCategory, setListCategory] = useState([])
// //    let nav = useNavigate()
// //  event.preventDefault();
//   useEffect(() => {
//     debugger
//     GetAllCategory()
//       .then(x => {
//         // debugger
//         setListCategory(x.data.categories)
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }, [])
//   console.log(listCategory);

//     const items = [
//         {
//             label: 'Catgory',
//             icon: 'pi pi-file',
//             items: [
//             ]
//         },
//         {
//             label: 'City',
//             icon: 'pi pi-image',
//             items: [
//                 {
//                     label: 'Tel Aviv',
//                     id:'65c959634f04896b3bc95148',
//                     icon: 'pi pi-image',
//                     command: () => byCity('65c959634f04896b3bc95148')                     

//                 },
//                 {
//                     label: 'jerusalem',
//                     id:'65c971cdbe2318954aeecb39',
//                     icon: 'pi pi-image',
//                     command: () => byCity('65c971cdbe2318954aeecb39')                     
//                 }
//             ]
//         },
//         {
//             label: 'Price',
//             icon: 'pi pi-image',
//             items: [
//                 {
//                     label: 'Logos',
//                     icon: 'pi pi-image'
//                 }
//             ]
//         },
//         {
//             label: 'Num of bad',
//             icon: 'pi pi-image',
//             items: [
//                 {
//                     label: 'Logos',
//                     icon: 'pi pi-image'
//                 }
//             ]
//         },
//         {
//             label: 'publisher',
//             icon: 'pi pi-image',
//             items: [
//                 {
//                     label: 'Logos',
//                     icon: 'pi pi-image'
//                 }
//             ]
//         }
//     ]

//     let categoryItem = items.find(item => item.label == 'Catgory');
//     debugger
//     if (categoryItem) {
//         // עובר על כל השמות במערך 'names'
//         for (let name of listCategory) {
//             // מוסיף אובייקט חדש למערך 'items' של האובייקט 'Category'
//             categoryItem.items.push({
//                 label: name.nameCategory,
//                 icon: 'pi pi-image'
//             });
//           }
//       }
  
//     return <>
//         <div className="card flex justify-content-center">
//             <PanelMenu model={items} className="w-full md:w-20rem" />
//         </div>
//         {/* {list?.map((u) => <Grid xs={4} ><CardApartments data={u}></CardApartments></Grid>)} */}
//         <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2} columns={16}>
//         {list?.map((u) => <Grid xs={4} ><CardApartments data={u}></CardApartments></Grid>)}
//       </Grid>
//     </Box>
//     </>
// }


















// export const Filters = () => {
//     const [listCategory, setListCategory] = useState([]);
  
//     useEffect(() => {
//       GetAllCategory()
//         .then(x => {
//           setListCategory(x.data.categories);
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }, []);
  
//     const items = [
//       {
//         label: 'Category',
//         icon: 'pi pi-file',
//         items: [],
//       },
//       {
//         label: 'City',
//         icon: 'pi pi-image',
//         items: [
//           {
//             label: 'Logos',
//             icon: 'pi pi-image',
//           },
//         ],
//       },
//     ];
  
//     return (
//       <>
//         <div className="card flex justify-content-center">
//           <PanelMenu
//             model={items}
//             className="w-full md:w-20rem"
//           >
//             {listCategory.map(category => (
//               <PanelMenu key={category._id} label={category.nameCategory} />
//             ))}
//           </PanelMenu>
//         </div>
//       </>
//     );
//   };
  

  // export const Filters = () => {
//     const [listCategory, setListCategory] = useState([]);
    
//     useEffect(() => {
//         GetAllCategory()
//             .then(x => {
//                 setListCategory(x.data.categories);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }, []);

//     const [items, setItems] = useState([
//         {
//             label: 'Category',
//             icon: 'pi pi-file',
//             items: []
//         },
//         {
//             label: 'City',
//             icon: 'pi pi-image',
//             items: [
//                 {
//                     label: 'Logos',
//                     icon: 'pi pi-image'
//                 }
//             ]
//         }
//     ]);

//     useEffect(() => {
//         if (listCategory.length > 0) {
//             setItems(prevItems => {
//                 const updatedItems = [...prevItems];
//                 const categoryItem = updatedItems.find(item => item.label === 'Category');
                
//                 if (categoryItem) {
//                     listCategory.forEach(name => {
//                         categoryItem.items.push({
//                             label: name,
//                             icon: 'pi pi-image'
//                         });
//                     });
//                 }

//                 return updatedItems;
//             });
//         }
//     }, [listCategory]);

//     return (
//         <div className="card flex justify-content-center">
//             <PanelMenu model={items} className="w-full md:w-20rem" />
//         </div>
//     );
// }
