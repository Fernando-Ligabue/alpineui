# AlpineUI - Plano de Infraestrutura

> Continuar depois

---

## Estado Atual ✅

- **24 componentes** criados (atingida massa crítica)
- CSS consolidado em `components.css`
- CSS variables em `globals.css`
- Messaging atualizada

---

## Próximos Passos

### Phase 1: GitHub Repository

1. Criar repo: `github.com/Fernando-Ligabue/alpineui`
2. Primeiro commit com todo o código

### Phase 2: NPM Packages (GHCR)

3. Configurar GitHub Packages (GHCR)
4. Publicar packages sob `@Fernando-Ligabue/`

Packages a publicar (24):
```
packages/ui/button, input, card, badge, dialog, dropdown,
tabs, accordion, toast, select, datepicker, avatar,
tooltip, popover, checkbox, progress, radiogroup,
slider, textarea, pagination, breadcrumb,
contextmenu, navigationmenu, table, cli
```

### Phase 3: CLI

5. Criar CLI `npx alpineui add [component]`
6. Testar workflow

---

## Referências

- Docs local: http://localhost:3000
- Código: `alpineui/src/app/components.css`

---

## Antes de Continuar

- [ ] GitHub token com scopes repo + write:packages
- [ ] NPM account (opcional)