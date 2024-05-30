import Layout from '../components/layout/Layout'
import { useAuth } from '../context/auth'
const Home = () => {
    const[auth,setAuth]=useAuth();
    const { user } = auth;
    const { name, email } = user || {};
    return (
        <Layout title={"Best Offers"}>
            <div className='register'>
            <h1>Welcome to Sai_TechInfo</h1>
            <h1>User Name:{name}</h1> 
             <h1>Email:{email}</h1>
            <pre>{JSON.stringify(auth,null,4 )}</pre>
            </div>
           
        </Layout>
    )
}

export default Home
