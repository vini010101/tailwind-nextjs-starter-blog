import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium text-purple-500 uppercase hover:text-blue-600 dark:hover:text-blue-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
