import React from 'react';
import Layout from '../components/indexLayout';

import Container from '../components/Container'

const NotFoundPage = () => (
  <Layout>
    <div className="page">
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </div>
  </Layout>
)

export default NotFoundPage
