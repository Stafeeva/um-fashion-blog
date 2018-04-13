import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 40,
  borderRadius: 6,
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
