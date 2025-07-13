# Ecommerce Dashboard & Commerce-back

Este repositório contém o projeto **Ecommerce Dashboard** (front-end) e orientações para integração com o **Commerce-back** (back-end), ambos desenvolvidos para estudos de arquitetura moderna, testes e integração fullstack.

---

## 📦 Tecnologias Utilizadas

- **Front-end:** React, Vite, TypeScript, React Query, Axios, Shadcn/ui, React Hook Form, Zod, MSW, Vitest, Playwright
- **Back-end:** Bun, PostgreSQL (via Docker)

---

## 🚀 Como rodar o projeto

### 1. Clonando os projetos

Clone este repositório e o projeto de back-end (commerce-back):

```sh
git clone https://github.com/AIemao/ecommerce.git
git clone https://github.com/AIemao/commerce-back.git
```

### 2. Configurando o Front-end

No diretório do front-end:

```sh
pnpm install
cp .env.example .env.local
# Edite as variáveis de ambiente conforme necessário
pnpm dev
```

### 3. Configurando o Back-end (Commerce-back)

O back-end foi criado usando **Bun** e utiliza **PostgreSQL** via Docker.

#### Pré-requisitos

- [Bun](https://bun.sh/) instalado (recomendado rodar via WSL no Windows)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e funcionando
- WSL 2.1.5 instalado (https://github.com/microsoft/WSL/releases/tag/2.1.5)

#### Resolvendo problemas comuns na instalação do Docker

Se encontrar o erro:

```
Component Docker.Installer.EnableFeaturesAction failed: Não encontrado
```

**Siga estes passos:**

**Passo 1: Reparar o Repositório WMI**

Abra o Prompt de Comando como Administrador e execute:

```cmd
sc config winmgmt start= disabled
net stop winmgmt
winmgmt /salvagerepository
winmgmt /resetrepository
sc config winmgmt start= auto
net start winmgmt
```

Reinicie o computador.

**Passo 2: Habilitar recursos do Windows**

Abra o PowerShell como Administrador e execute:

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

Reinicie o computador.

**Passo 3: Limpar instalações anteriores do Docker**

Exclua as pastas Docker em:

- `C:\Program Files\Docker`
- `C:\ProgramData\Docker`
- `C:\Users\SeuUsuário\AppData\Local\Docker`
- `C:\Users\SeuUsuário\AppData\Roaming\Docker`

Reinstale o Docker Desktop.

#### Subindo o banco de dados com Docker

No diretório do back-end:

```sh
docker compose up -d
docker ps
docker logs <id-do-container>
```

#### Instalando dependências e rodando o back-end

```sh
bun i
bun migrate
bun seed
bun dev
# ou
bun --watch src/http/server.ts
```

O servidor estará disponível em `localhost:3333`.

---

## 🔗 Conectando Front-end e Back-end

- Configure a URL do back-end no `.env.local` do front-end.
- O front-end utiliza Axios e React Query para comunicação com a API.
- O React Query gerencia cache, deduplicação e invalidação de requisições.

---

## 🧪 Testes

- **Unitários:** `pnpm test`
- **End-to-end:** `npx playwright test --ui-port=0`

**DICAS:**

- Prefira IDs end-to-end nos testes.
- Utilize o MSW para mocks de API durante o desenvolvimento.
- Use spies para garantir chamadas de funções nos testes unitários.

---

## 📚 Dicas e Observações Importantes

- **.env:** Para projetos Vite, todas as variáveis precisam começar com `VITE_`.
- **React Query:** GETs são queries, POST/PUT/DELETE são mutations.
- **Axios:** Configure `withCredentials: true` para autenticação baseada em cookies.
- **Skeleton:** Use para simular carregamento de dados.
- **MSW:** Mock Service Worker é excelente para desenvolvimento e testes, diferente do Mirage por usar Service Workers e manter as requisições visíveis para debug.
- **Playwright:** Se tiver erro no Chromium, use `npx playwright test --ui-port=0`.

---

## 📖 Commits e Organização

- Sempre crie branches para novas features e utilize Pull Requests.
- Commits importantes estão documentados ao longo do projeto.

---

## 💡 Aprendizados

- Separação de estados: local, global e HTTP.
- React Query facilita cache e atualização de dados.
- Testes automatizados garantem qualidade e confiança.

---

## 📈 Próximos Passos

- Adicionar novas features (ex: gerenciamento de produtos)
- Melhorar responsividade e acessibilidade
- Explorar deploy e CI/CD

---

## 🤝 Contribuição

Fique à vontade para abrir issues, sugerir melhorias ou contribuir com PRs!

---
