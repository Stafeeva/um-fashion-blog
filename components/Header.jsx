import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <style jsx>{`
      a {
        text-decoration: none;
        font-family: "Avenir";
        font-size: 20px;
        padding-right: 10px;
      }
    `}</style>
  </div>
)

export default Header
