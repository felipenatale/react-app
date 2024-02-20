import React, { useState, useEffect } from 'react';
import { client } from "../lib/createClient";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout"

export const Pagination = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(2);
  const [postLength, setPostLength] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await client.getEntries({
        content_type: 'blogPage',
        limit: pageSize,
        skip: (page - 1) * pageSize,
      });
      setItems(response.items);
    };
    fetchItems();
    client
      .getEntries({
        content_type: 'blogCategory',
      })
      .then(function (entries) {
        setCategories(entries.items);
      });
    const postLength = client
      .getEntries({
        content_type: 'blogPage',
      })
      .then(function (entries) {
        setPostLength(entries.items.length);
      });
  }, [page, pageSize]);

  const nextPage = () => {
    if (page < postLength/page + 2) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (

    <Layout>
      <div className="container">
        <div className="row">
          <main className="col-md-8">
            <h1 className="my-3">Todos os posts</h1>

            {items.map(post => (
              <div className="card mb-3" key={post.sys.id}>
                <div className="card-body">
                  <h5 className="card-title">{post.fields.postTitle}</h5>
                  <p className="card-text">{post.fields.postDescription}</p>
                  <Link to={`/post/${post.fields.slug}`} className="card-link">
                    Ver post
                  </Link>
                </div>
              </div>
            ))}
            <div>
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li className="page-item" onClick={prevPage} href="#"><a className="page-link" >Página Anterior</a></li>
                  <li className="page-item" onClick={nextPage} ><a className="page-link" >Próxima Página</a></li>
                </ul>
              </nav>
            </div>

            <div style={{ marginTop: 2 + '%' }}>
              <a href="/" className='btn btn-primary'>Voltar para home</a>
            </div>
          </main>

          <aside className="col-md-4">
            <h2>Categorias</h2>
            <ul>
              {categories.map(category => (
                <li key={category.sys.id}>
                  {category.fields.categoryTitle}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </Layout>
  );
};
