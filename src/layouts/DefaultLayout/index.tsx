import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
      <Header />
      <Outlet />
    </div>
  )
}
