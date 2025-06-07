import { Layout } from '../components/layout';

export const Home = () => {
    return (
       <Layout>
                <h1 className="text-3xl font-bold ml-6 justify-center">Welcome to My Portfolio</h1>
                <p className="text-lg mb-8 mt-4">I'm Chilzia Macamo, nice to see you here!</p>
                <>
                     <h2 className="text-2xl font-semibold mb-2"></h2>
                     <p className="mb-4">I am a passionate developer with experience in building web applications.</p>
                </>
       </Layout>
    );
}