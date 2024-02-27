import {Products} from '../products'


function Home({user}) {
  
  return (
    <>
    <div className='text-center mt-3'>
    <h1 >Welcome to our E-commerce Website!</h1>
    <p>Explore our wide range of products and find exactly what you're looking for.</p>
    </div>
    <Products user={user}/>
    
    </>
  )
}

export default Home