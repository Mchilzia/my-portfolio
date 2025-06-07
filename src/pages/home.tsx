import { Layout } from '../components/layout';

export const Home = () => {
    return (
       <Layout>
           <main>
                <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg mb-6">This is a showcase of my work and skills.</p>
                <>
                     <h2 className="text-2xl font-semibold mb-2">About Me</h2>
                     <p className="mb-4">I am a passionate developer with experience in building web applications.</p>
                </>
                <section>
                     <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                     <p className="mb-4">Check out some of my projects on GitHub.</p>
                </section>

           </main>
       </Layout>
    );
}