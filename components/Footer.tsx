import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        {/* Ícones sociais */}
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
        </div>

        {/* Crédits finais */}
        <div className="mb-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            <strong>MobzNews</strong> © Todos os direitos reservados. Desenvolvido por{' '}
            <Link
              href="https://pincode.dev.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Pincode
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
