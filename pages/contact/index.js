import Link from "next/link";
import { useRouter } from "next/router";

const text = {
  "en-US": {
    title: "Contact",
    desc: 'This is the contact page'
  },
  "pt-BR": {
    title: "Contato",
    desc: "Essa é a página de contato"
  }
};

export default function Contact(props) {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { title, content } = text[locale];
  return (
    <div>
      <main>
        <div>
          <div
            style={{
              padding: "4px",
              marginRight: "4px",
            }}
          >
            <span>Current Language: </span>
            <span
              style={{
                borderRadius: "3px",
                backgroundColor: "blue",
                color: "white",
                padding: "2px",
              }}
            >
              {locale}
            </span>
          </div>
          <Link
            activeClassName={locale === "pt-BR"}
            href={asPath}
            locale="pt-BR"
          >
            pt-BR
          </Link>

          <Link
            activeClassName={locale === "en-US"}
            href={asPath}
            locale="en-US"
          >
            en-US
          </Link>
        </div>

        <div >
          <div >
            <h3>{title}</h3>
          </div>

        </div>
      </main>
    </div>
  );
}