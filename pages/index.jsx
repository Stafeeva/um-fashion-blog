import Layout from '../components/MyLayout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/posts/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
    <style jsx>{`
      a {
        text-decoration: none;
        font-family: "Avenir";
        font-size: 20px;
      }

      li {
        list-style: none;
        padding: 0 0 10px 0;
      }
    `}</style>
  </li>
)

export default () => (
  <Layout>
    <h1>Welcome to UM Fashion Blog</h1>
    <p>Fashion is about dressing according to what's fashionable. Style is more about being yourself. There is always an emotional element to anything that you make. I always say: To be well dressed you must be well naked. I do not have one theme for each season, I just try to make beautiful clothes all year round. I do not have one theme for each season, I just try to make beautiful clothes all year round.</p>
    <ul>
      <PostLink id="ums-best" title="UM's best" />
      <PostLink id="product-team" title="Product Team's Fashion Corner" />
      <PostLink id="party" title="Party Looks" />
    </ul>
    <style jsx>{`
        p {
          font-family: "Avenir";
          font-size: 18px;
        }

        h1 {
          font-family: "Chalkduster";
          font-weight: normal;
          font-size: 40px;
          margin-top: 40px;
        }

        ul {
          padding: 20px 0;
        }
      `}</style>
  </Layout>
)
