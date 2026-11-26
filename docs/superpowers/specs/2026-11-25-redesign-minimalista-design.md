# Redesign minimalista — Rio21 BJJ (Odivelas)

## Intenção
Refazer todo o site da Rio21 numa versão minimalista e elegante, focada só na academia de Odivelas, com o objetivo principal de levar visitantes a marcar a **aula experimental gratuita**.

## Objetivos
- Design novo em todas as secções (nada do visual antigo é reaproveitado).
- Tipografia: Impact nos títulos (maiúsculas, peso 400, sem negrito sintético); Source Sans 3 variável no texto.
- Paleta: preto, branco, cinzas `#BABABA` `#E2E2E1` `#757575` e amarelo `#F9E04C` (tom dos cartazes Rio21, escolhido pelo utilizador).
- PT (por defeito, em `/`) e EN (em `/en`), com hreflang recíproco.
- Modo claro e escuro: segue o sistema, botão para alternar, escolha guardada, sem "flash".
- Ênfase forte na aula experimental gratuita (bloco próprio + CTA repetido + barra fixa no telemóvel).

## Não-objetivos
- Galeria (removida com as fotos `gallery/`, `instagram/`, `instagram-official/`, `poles/`).
- Qualquer referência a outras unidades (Vila Franca de Xira: horários, Instagram, filiais, SEO, FAQ).
- Formulário de contacto (não tinha backend); testemunhos sem fonte; secção Benefícios; secção Instagram.

## Restrições (da pesquisa UI/UX)
- Impact não existe em Android/iOS e não pode ser alojado sem licença Monotype → pilha `Impact, Anton` (Anton via `next/font`, OFL, só descarrega quando Impact falta).
- Amarelo sobre branco tem contraste 1,4:1 → no modo claro o amarelo é só **fundo** com texto preto (14,7:1). No escuro pode ser texto.
- `#757575` só como texto secundário sobre branco (4,6:1); no escuro usar `#BABABA`. `#BABABA`/`#E2E2E1` são superfícies e linhas no claro.
- Alvos de toque ≥ 44px, `:focus-visible` não-amarelo no claro, `prefers-reduced-motion` respeitado.

## Abordagens consideradas
- **A) Rotas por idioma (escolhida):** `/` PT e `/en` EN, dois root layouts via route groups (`<html lang>` correto), dicionários tipados. Ambas as línguas indexadas.
- B) Toggle só no cliente: mais simples, mas o EN fica invisível para o Google.
- C) CMS / biblioteca i18n pesada: exagero para uma página.

## Estrutura da página
1. Cabeçalho fixo: logótipo (máscara CSS → muda de cor com o tema), navegação, PT/EN, tema, CTA amarelo "Aula grátis".
2. Hero: título Impact gigante, foto real a preto e branco, CTA WhatsApp + "Ver horário", factos curtos.
3. Aula experimental gratuita: faixa amarela, 3 passos, o que trazer, CTA.
4. Sobre: manifesto curto, valores, foto.
5. Aulas: lista numerada tipográfica (sem cartazes com texto embutido).
6. Equipa: fundadores (graduação) + professores e instrutores em lista.
7. Horário: separadores por dia no telemóvel (abre no dia de hoje), grelha no desktop, aulas para iniciantes assinaladas.
8. FAQ: `<details>` nativo + JSON-LD FAQPage.
9. Contacto: WhatsApp, Instagram, email, mapa de Odivelas, CTA final.
10. Rodapé. Barra CTA fixa no telemóvel após o hero.

## Decisões do builder (minhas)
- Fotos com texto embutido (cartazes) deixam de ser usadas; restantes em tratamento P&B.
- Departamentos (administrativo/merch) saem da secção Equipa.
- Tailwind 3 `darkMode: "selector"` + tokens CSS em `:root` / `.dark`.
- Hosting sem `output: export` (otimização de imagem do Next mantida).

## Revisão 1 — mais leve e suave (2026-11-25)
Feedback do utilizador: "achei o site pesado, queria algo clean, minimalista e suave, com algumas animações"; amarelo no tom dos cartazes Rio21.
- Amarelo passa a `#F9E04C` (amostrado do cartaz do seminário).
- Títulos Impact mais pequenos (secções `clamp(2.25rem, 4.4vw, 3.75rem)`), hero em duas colunas.
- Cantos arredondados, botões em pílula, cartões em cinza muito claro (`--surface`), quase sem linhas pretas.
- Aula grátis: cartão amarelo arredondado dentro da grelha (em vez de faixa a toda a largura).
- Aulas em mosaico de cartões com 2 fotos; Equipa e valores em "pílulas"; FAQ em cartões; rodapé claro (deixa de ser preto).
- Animações: entrada do hero, elementos a aparecer ao fazer scroll, fotos P&B → cor no hover, FAQ a abrir suavemente, cabeçalho transparente que ganha fundo ao fazer scroll. Tudo desligado com "reduzir movimento".
