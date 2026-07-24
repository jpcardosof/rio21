# Rio21 BJJ Website

Website moderno e responsivo para a Rio21 Lisboa (Odivelas), criado com Next.js, TypeScript e Tailwind CSS. O site é focado na sede de Odivelas e apresenta a filial de Vila Franca de Xira na secção "As nossas filiais". O objetivo principal é gerar marcações de aula experimental gratuita.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Dados centralizados em `siteConfig.ts`
- Imagens locais em `public/images/`

## Como instalar

```bash
npm install
```

## Como correr localmente

```bash
npm run dev
```

Depois abre o endereço indicado pelo terminal, normalmente `http://localhost:3000`.

## Como adicionar ao GitHub

Abre um terminal nesta pasta do projeto e corre:

```bash
git init
git add .
git commit -m "Initial Rio21 BJJ website"
git branch -M main
git remote add origin https://github.com/TEU-USER/TEU-REPO.git
git push -u origin main
```

Em alternativa, no GitHub Desktop: `File > Add local repository`, escolhe esta pasta e depois usa `Publish repository`.

## Como editar dados em `siteConfig.ts`

O ficheiro `siteConfig.ts` concentra os dados principais do site:

- Nome da marca, slogan e SEO
- Sede (Odivelas) e filial (Vila Franca de Xira) em `poles`, com Google Maps
- Professores e biografias em `coaches`
- Horários por unidade em `schedule`
- Aulas com fotos em `classes`
- Galeria em `gallery`
- Testemunhos e FAQ
- Links de Instagram em `social.instagram`

Sempre que precisares de alterar texto, contactos ou imagens, começa por este ficheiro.

## Como alterar horários

No `siteConfig.ts`, edita `schedule.odivelas` e `schedule.vilaFrancaXira`. Cada unidade tem `days`, `hours`, `groups` (chips de turmas) e `highlights` (destaques como "Mini Kids · Seg e Qua às 18h00").

Os horários atuais vieram dos posts oficiais do Instagram: Odivelas treina de segunda a sábado, das 7h às 20h30, e a turma Mini Kids é à segunda e quarta às 18h. Confirma com os responsáveis antes de publicar.

## Como alterar contactos

No `siteConfig.ts`, edita:

- `contacts.email`
- `contacts.instagramDm` (link de mensagem direta do Instagram, usado nos CTAs)
- `contacts.whatsapp` (vazio de propósito — preencher com o número oficial)
- `poles[].instagramUrl`
- `poles[].mapsUrl` e `poles[].mapEmbedUrl`

Os botões de contacto apontam para o Instagram até existir um número de WhatsApp oficial confirmado.

## Como substituir imagens

As imagens estão em `public/images/`:

- `public/images/hero/` — imagem principal
- `public/images/classes/` — uma foto por tipo de aula
- `public/images/gallery/` — galeria (8 fotos)
- `public/images/coaches/` — retratos dos professores
- `public/images/poles/` — fotos da sede e da filial
- `public/images/team/` — foto da equipa técnica (secção Sobre)
- `public/images/instagram/` — destaques da secção de Instagram

Podes manter os nomes atuais dos ficheiros ou alterar os caminhos no `siteConfig.ts`. Todas as fotos atuais vieram dos perfis oficiais de Instagram da equipa (guardadas localmente).

## Como adicionar imagens oficiais

Esta versão já inclui imagens locais em `/public/images/`, baseadas nos perfis oficiais indicados. Antes de publicar, confirma autorização de uso com a equipa/professores e substitui qualquer imagem de baixa resolução por uma versão oficial melhor enquadrada. O site não carrega imagens diretamente do Instagram para evitar problemas de performance, permissões e links quebrados.

Perfis de referência:

- Rio21 Lisboa / Odivelas: https://www.instagram.com/rio21.lisboa/
- Rio21 Vila Franca de Xira: https://www.instagram.com/rio21_vfx/
- Professor Fábio Braga: https://www.instagram.com/fabiobraga.bjj/
- Professor Samuel Butterfly: https://www.instagram.com/butterflysamuel/
- Professor Alves: https://www.instagram.com/alvesa.07/

Fluxo recomendado:

1. Recolher imagens autorizadas dos perfis oficiais ou diretamente com os professores.
2. Guardar as imagens nas pastas corretas dentro de `/public/images/`.
3. Manter os nomes dos ficheiros ou atualizar os caminhos no `siteConfig.ts`.
4. Usar imagens reais de treinos, professores, kids, equipa, graduações e competições.
5. Evitar imagens genéricas de stock sempre que possível.

## Checklist de imagens antes de publicar

- Confirmar autorização de uso das imagens.
- Substituir imagens de baixa resolução por ficheiros oficiais melhores, quando existirem.
- Usar imagens nítidas e bem enquadradas.
- Priorizar fotos reais de treino, professores, kids, equipa e polos.
- Confirmar que cada imagem tem `alt text`.
- Verificar se o site continua rápido em mobile.
- Confirmar que as imagens aparecem corretamente em produção.

## Integração futura com Instagram Graph API

Esta primeira versão não incorpora feed real do Instagram e não faz scraping. Para uma integração futura:

1. Confirmar que a conta tem permissões para Instagram Graph API.
2. Criar uma app Meta e obter permissões oficiais.
3. Guardar tokens de acesso em variáveis de ambiente.
4. Criar uma rota segura em Next.js para obter posts aprovados.
5. Fazer cache dos resultados para performance.
6. Continuar a usar imagens locais para hero, professores e secções críticas.

## Formulário e integrações futuras

O formulário de aula experimental faz `console.log` nesta versão. Está preparado para ligar a:

- Email
- WhatsApp
- CRM
- Google Sheets
- Supabase
- Resend
- Formspree

## Como fazer deploy na Vercel

1. Envia o projeto para um repositório Git.
2. Cria um novo projeto na Vercel.
3. Seleciona o repositório.
4. Mantém o comando de build como `npm run build`.
5. Confirma que as imagens oficiais estão em `public/images/`.
6. Publica e testa em mobile antes de divulgar.

## Antes de publicar

- Preencher `contacts.whatsapp` com o número oficial e adicionar o email real.
- Confirmar autorização das imagens locais já adicionadas (vieram dos perfis oficiais de Instagram).
- Confirmar horários com os responsáveis das duas unidades.
- Rever textos de professores e biografias.
- Testar o formulário e a navegação por teclado.
