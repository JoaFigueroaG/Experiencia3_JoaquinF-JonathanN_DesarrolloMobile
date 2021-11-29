import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('despliega mensaje de bienvenida', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Bienvenido De Vuelta! ⭐');
  });

  it('seccion de busqueda en inicio', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Lista de Guias');
  });
});
