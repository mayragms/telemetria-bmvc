from bottle import template


# ===== EDITEM AQUI antes de entregar =====
AUTORES = 'Nome 1 e Nome 2'
REPOSITORIO = 'https://github.com/seu-usuario/seu-repositorio'
# =========================================


class Application():

    def __init__(self):
        self.pages = {
            'conversor': self.conversor
        }


    def render(self,page):
       content = self.pages.get(page, self.helper)
       return content()


    def helper(self):
        return template('app/views/html/helper')


    def conversor(self):
        return template('app/views/html/conversor',
                        titulo='Conversor de Unidades',
                        autores=AUTORES,
                        repositorio=REPOSITORIO)
