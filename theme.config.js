const YEAR = new Date().getFullYear()
import { SpeedInsights } from "@vercel/speed-insights/next"

export default {
  footer: (
    <small className="about" style={{ display: 'block', marginTop: '8rem' }}>
    <ul>
      <li>
        <a href="https://instagr.am/hawalinajwan_" target="_blank" className='fabrands instagram'></a>
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
    
      <time>{YEAR}</time> © hawalinajwan.
      <a href="/feed.xml">hub</a>
      <style jsx>{`
        a {
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
