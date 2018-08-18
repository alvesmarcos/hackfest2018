import scrapy
import re
import json

class QuotesSpider(scrapy.Spider):
    name = "reque"
    start_urls = [
        'http://177.200.32.195:9673/sapl/relatorios_administrativos/historicoTramitacoes/historicoTramitacoes_mostrar_proc?txt_dat_inicio_periodo=1%2F1%2F1900&txt_dat_fim_periodo=06%2F06%2F2017&lst_cod_unid_tram_dest=0&lst_tip_materia=0&lst_status=0&btn_materia_pesquisar=Pesquisar',
    ]

    def parse(self, response):
        urls = response.css("fieldset form p.texto b a::attr(href)").extract()
        
        for url in urls:
            yield scrapy.Request(url=url, callback=self.getInfo)

    def getInfo(self, response):
        infos = response.css("fieldset table td::text").extract()

        #-#-#-#-#-#-#-#     Filtra as infos necessarias       #-#-#-#-#-#-#-#-#

        tipo = re.sub(r'(\s* \W)|(\A\s)', "", infos[0])
        numero = re.sub(r'(\s* \W)|(\A\s)', "", infos[1])
        data1 = re.sub(r'(\s* \W)|(\A\s)', "", infos[2])
        
        ementa = re.sub(r'(\s* \W)|(\A\s)', "", infos[3])
        autor = re.sub(r'(\s* \W)|(\A\s)', "", infos[6])
        tramitacao = re.sub(r'(\s* \W)|(\A\s)', "", infos[12])
        polemica = re.sub(r'(\s* \W)|(\A\s)', "", infos[13])
        regime = re.sub(r'(\s* \W)|(\A\s)', "", infos[14])
        origem = re.sub(r'(\s* \W)|(\A\s)', "", infos[18])
        destino = re.sub(r'(\s* \W)|(\A\s)', "", infos[19])
        situacao = re.sub(r'(\s* \W)|(\A\s)', "", infos[21])
        lastAction = re.sub(r'(\s* \W)|(\A\s)', "", infos[23])



        #-#-#-#-#-#-#-#     Posta no JSON          #-#-#-#-#-#-#-#-#

        yield {
            'tipo': tipo,
            'numero': numero,
            'dataEntrada': data1,
            'ementa': ementa,
            'autor(a)': autor,
            'tramitacao': tramitacao,
            'polemica': polemica,
            'origem': origem,
            'destino': destino,
            'sitacao': situacao,
            'ultimaAcao': lastAction,
            }