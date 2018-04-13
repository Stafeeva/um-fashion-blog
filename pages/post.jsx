import Layout from '../components/MyLayout'

export default (props) => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <p>Luxury must be comfortable, otherwise it is not luxury. Age is something only in your head or a stereotype. Age means nothing when you are passionate about something. Fashion should be fun. It shouldn't be labelled intellectual. Comfort is very important to me. I think people live better in big houses and in big clothes. It's sometimes said that I'm rebellious and I do things to push people's buttons, but I just like the challenge.</p>
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
        `}</style>
  </Layout>
)
