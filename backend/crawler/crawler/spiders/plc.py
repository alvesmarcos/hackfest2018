import scrapy
import re

class QuotesSpider(scrapy.Spider):
    i = 0
    name = "plc"
    start_urls = [
        'http://177.200.32.195:9673/sapl/generico/materia_pesquisar_proc?incluir=0&existe_ocorrencia=0&total_materias=%3CShared.DC.ZRDB.Results.Results+instance+at+0x7f9ca3b0efc8%3E&lst_tip_materia=5&txt_numero=&txt_ano=&txt_npc=&txt_num_protocolo=&dt_apres=&dt_apres2=&dt_public=&dt_public2=&dt_votac=&dt_votac2=&hdn_txt_autor=&hdn_cod_autor=&lst_tip_autor=&lst_cod_partido=&txt_relator=&txt_assunto=&rad_tramitando=&lst_localizacao=&lst_status=&rd_ordenacao=1&rd_ordem_td=1&chk_coautor=&btn_materia_pesquisar=Pesquisar',
        ]

    def parse(self, response):
        urls = response.css("fieldset table tr td.texto > a::attr(href)").extract()
        
        for url in urls:
            yield scrapy.Request(url=url, callback=self.getInfo)

    def getInfo(self, response):
        infos = response.css("fieldset table td::text").extract()

        #-#-#-#-#-#-#-#     Filtra as infos necessarias       #-#-#-#-#-#-#-#-#
        
        tipo = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i])
        numero = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 1])
        data1 = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 2])

        ementa = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 3])
        autor = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 6])
                
        despacho = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 8])
        tramitacao = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 14])

        polemica = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 15])
        regime = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 16])
        origem = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 20])
        destino = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 21])

        if autor is "":
            autor = re.sub(r'(\s* \W)|(\A\s)', "", infos[5])
            tramitacao = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 12])
            polemica = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 13])
            
            regime = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 14])
            origem = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 18])
            destino = re.sub(r'(\s* \W)|(\A\s)', "", infos[self.i + 19])

        ##### eles tem historico q varia, ver como fica 
        situacao = re.sub(r'(\s* \W)|(\A\s)', "", infos[21])
        lastAction = re.sub(r'(\s* \W)|(\A\s)', "", infos[23])



        #-#-#-#-#-#-#-#     Posta no JSON          #-#-#-#-#-#-#-#-#

        yield {
            'tipo': tipo,
            'numero': numero,
            'dataEntrada': data1,
            'autor(a)': autor,
            'tramitacao': tramitacao,
            'polemica': polemica,
            'origem': origem,
            'destino': destino,
            'ementa': ementa,
            }