import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import routes from './Routes/Routes.tsx'
import {RouterProvider} from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>
  </ChakraProvider>
)
