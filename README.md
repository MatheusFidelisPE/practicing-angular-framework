# 📚 Projeto de Estudos em Angular

Este repositório foi criado para acompanhar meu progresso no estudo do **Angular**, um framework front-end poderoso para o desenvolvimento de aplicações web modernas e escaláveis.

---

## ✅ Checklist de Conceitos Estudados e a Estudar

### Conceitos já estudados:
- [x] `*ngIf`
- [x] `*ngFor`
- [x] `(click)`
- [x] Two-way data binding (`[(ngModel)]`)

### Conceitos a estudar:
- [ ] Componentes (criação, organização, input/output)
- [ ] Diretivas estruturais e de atributos
- [ ] Pipes (customizados e built-in)
- [ ] Services e Injeção de Dependência
- [ ] HttpClient e chamadas HTTP
- [ ] Roteamento (RouterModule, rotas com parâmetros, lazy loading)
- [ ] Forms (Template-driven e Reactive Forms)
- [ ] Observables e RxJS
- [ ] Lifecycle Hooks (ngOnInit, ngOnDestroy, etc.)
- [ ] Angular CLI (comandos úteis e boas práticas)
- [ ] Testes unitários e de integração
- [ ] Boas práticas e arquitetura de projetos Angular

---

## 📝 Resumo dos Conceitos Estudados

### `*ngIf`
A diretiva `*ngIf` permite mostrar ou esconder elementos HTML com base em uma condição booleana. É útil para renderizar conteúdo dinamicamente conforme o estado da aplicação.

```html
<div *ngIf="isLoggedIn">Bem-vindo(a)!</div>