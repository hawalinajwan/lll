


const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small className="about" style={{ display: 'block', marginTop: '8rem' }}>
      <ul>
        <li>
          <a href="https://instagr.am/hawalinajwan_" target="_blank" className='fabrands instagram' ></a>
        </li>
        <li>
          <a href="https://open.spotify.com/user/fnskc5zkcs6mtf4s2wxw0a88o?si=0a00086fafbd4a23"
            target="_blank" className='fabrands spotify'></a>
        </li>
        <li>
          <a href="https://discord.com/users/644892716953632768" target="_blank"
            className="fabrands discord"></a>
        </li>
        <li>
          <a href="https://github.com/hawalinajwan" target="_blank" className='fabrands github'></a>
        </li>
      </ul>


      2021 © Hawali Najwan
      <a href="https://saweria.co/hawalinajwan" target="_blank" rel="noopener noreferrer">
        <span className="heart">🤍</span>
      </a>
      <style jsx>{`

        .heart {
          animation: pulse 2s infinite;
          font-size: 125% ;
        }
        span {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
