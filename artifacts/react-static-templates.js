

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/aliavci/Documents/Codebase/defnesanat-client/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('../src/pages/404.tsx'), universalOptions)
      t_0.template = '../src/pages/404.tsx'
      
const t_1 = universal(import('../src/pages/blog.tsx'), universalOptions)
      t_1.template = '../src/pages/blog.tsx'
      
const t_2 = universal(import('../src/pages/duyurular.tsx'), universalOptions)
      t_2.template = '../src/pages/duyurular.tsx'
      
const t_3 = universal(import('../src/pages/etkinlikler.tsx'), universalOptions)
      t_3.template = '../src/pages/etkinlikler.tsx'
      
const t_4 = universal(import('../src/pages/hakkimizda.tsx'), universalOptions)
      t_4.template = '../src/pages/hakkimizda.tsx'
      
const t_5 = universal(import('../src/pages/index.tsx'), universalOptions)
      t_5.template = '../src/pages/index.tsx'
      
const t_6 = universal(import('../src/pages/kitaplar.tsx'), universalOptions)
      t_6.template = '../src/pages/kitaplar.tsx'
      
const t_7 = universal(import('../src/pages/yazilar.tsx'), universalOptions)
      t_7.template = '../src/pages/yazilar.tsx'
      
const t_8 = universal(import('../src/containers/Post'), universalOptions)
      t_8.template = '../src/containers/Post'
      

// Template Map
export default {
  '../src/pages/404.tsx': t_0,
'../src/pages/blog.tsx': t_1,
'../src/pages/duyurular.tsx': t_2,
'../src/pages/etkinlikler.tsx': t_3,
'../src/pages/hakkimizda.tsx': t_4,
'../src/pages/index.tsx': t_5,
'../src/pages/kitaplar.tsx': t_6,
'../src/pages/yazilar.tsx': t_7,
'../src/containers/Post': t_8
}
// Not Found Template
export const notFoundTemplate = "../src/pages/404.tsx"

