// import pdfBackground from '.././public/image/Aparement/Green Photo New Houses Just Listed Postcard (2).png'; // Import your PDF file
// import pdfBackground from '../../public/image/Aparement/Green Photo New Houses Just Listed Postcard (2).png'

export const Home = () => {
    // const imageUrl = "../../public/image/Apartmenr/Green Photo New Houses Just Listed Postcard (2)."
    return <>
        <img src={`${process.env.PUBLIC_URL}/image/Apartment/home.jpg`} width={'350px'} height={'auto'}></img>
        {/* 
    <div
    
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/image/Aparement/Green Photo New Houses Just Listed Postcard (2).png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh', // Adjust height as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* Your component content here */}
    </>
}