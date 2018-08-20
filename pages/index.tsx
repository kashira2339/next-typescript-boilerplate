import Link from 'next/link'

export default () =>
  <div>
    Index. {' '}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
