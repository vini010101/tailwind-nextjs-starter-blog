import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from 'app/seo'
import type { Authors } from 'contentlayer/generated'

export const metadata = genPageMetadata({ title: 'Sobre a Mobznews' })

export default function Page() {
  const mainContent: Omit<Authors, '_id' | '_raw' | 'body'> = {
    name: 'Mobznews',
    avatar: '/static/images/logo.png',
    occupation: 'Portal de Notícias de Tecnologia',
    company: 'Mobznews',
    type: 'Authors',
    readingTime: '1 min',
    slug: 'mobznews',
    path: '/about',
    filePath: 'content/authors/mobznews.mdx',
    toc: [],
  }

  const bodyContent = `
    <p>A <strong>Mobznews</strong> é um portal de notícias voltado para o universo da tecnologia, inovação e desenvolvimento de software.</p>
    <p>Nossa missão é informar, inspirar e conectar profissionais da área com conteúdos relevantes, análises técnicas e cobertura de tendências.</p>
    <p>Se você deseja entrar em contato conosco para parcerias, sugestões ou qualquer outra questão, utilize um dos canais abaixo:</p>
    <ul>
    </ul>
  `

  return (
    <AuthorLayout content={mainContent}>
      <div className="prose prose-neutral dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </AuthorLayout>
  )
}
