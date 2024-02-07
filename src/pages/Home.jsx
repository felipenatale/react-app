import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { client } from '../lib/createClient';

//declaração export possibilita usar esse compomente em outros arquivos
export const Home = () => {

    const [categories, setCategories] = useState([]); // retorna um array
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // pedir para objeto cliente buscar os dados do contentful - 5 posts e categorias
        client.getEntries({
            content_type: 'blogCategory'
        }).then(function (entries) {
            console.log(entries.items);
            setCategories(entries.items);
        });

        client.getEntries({
            content_type: 'blogPage',
            limit: 5,
            order: '-sys.createdAt'
        }).then(function (entries) {
            console.log(entries.items);
            setPosts(entries.items);
        });
    }, []); // array vazio indica onload do componente; 

    return (
        // ciclo de vida de um componente
        // react fagment <></>
        <>
            <Layout>
                <div className="container">
                    <div className="row">
                        <main className="col-md-8">
                            <h1 className="my-3">Últimos posts</h1>

                            {posts.map(post => (
                                <div className="card mb-3" key={post.sys.id}>
                                    <div className="card-body">
                                        <h5 className="card-title">{post.fields.postTitle}</h5>
                                        <p className="card-text">{post.fields.postDescription}</p>
                                    </div>
                                </div>
                            ))}

                            <a href="#" className='btn btn-primary'>Ver todos os posts</a>
                        </main>

                        <aside className="col-md-4">
                            <h2>Categorias</h2>
                            <ul>
                                {categories.map(categorie => (
                                    <li key={categorie.sys.id}>{categorie.fields.categoryTitle}</li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                </div>
            </Layout>
        </>
    )
}

// export default Home; Essa declaração faz com que a {} não precise ser declarada na main.jsx para esse componente