from bottle import template


# ================================================
AUTORES = 'Mayra Gomes e Henrique Alexsander'
REPOSITORIO = 'https://github.com/mayragms/conversor-bmvc'
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
