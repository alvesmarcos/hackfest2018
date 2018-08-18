import scrapy
import re
import json

class QuotesSpider(scrapy.Spider):
    name = "plo"
    start_urls = [
        'http://177.200.32.195:9673/sapl/generico/materia_pesquisar_proc?page=1&step=8&dt_votac=&txt_relator=&txt_numero=&dt_public2=&lst_tip_autor=&txt_num_protocolo=&hdn_txt_autor=&dt_votac2=&txt_ano=&rd_ordem_td=1&dat_sessao=00/00/0000&hdn_cod_autor=&lst_localizacao=&lst_tip_materia=1&txt_assunto=&btn_materia_pesquisar=Pesquisar&rad_tramitando=&incluir=0&rd_ordenacao=1&dt_apres2=&lst_cod_partido=&chk_coautor=&lst_status=&dt_public=&total_materias=77897&txt_npc=&existe_ocorrencia=0&dt_apres=',
    ]

    def __init__(self):
        with open('links.json', 'r') as json_data:
            self.json_content = json.load(json_data)
            
            self.dic = {
            }
    
    def start_requests(self):
        for json_item in self.json_content:
                for link in json_item['url']:
                    # print(link)
                    yield scrapy.Request(url=link, callback=self.parse)

    def parse(self, response):
        aux = response.xpath('//fieldset[1]/table')
        infos = aux.css('td::text').extract()
        tipo = re.sub(r'(\s* \W)|(\A\s)', "", infos[0])
        numero = re.sub(r'(\s* \W)|(\A\s)', "", infos[1])
        data1 = re.sub(r'(\s* \W)|(\A\s)', "", infos[2])
        
        if len(infos) == 14:
            processo = re.sub(r'(\s* \W)|(\A\s)', "", infos[3])
            ementa = re.sub(r'(\s* \W)|(\A\s)', "", infos[4])
            observacao = re.sub(r'(\s* \W)|(\A\s)', "", infos[6])
            autor = re.sub(r'(\s* \W)|(\A\s)', "", infos[8])
            despacho = re.sub(r'(\s* \W)|(\A\s)', "", infos[10])
        
        if len(infos) == 12:
            processo = ""
            ementa = re.sub(r'(\s* \W)|(\A\s)', "", infos[3])
            observacao = ""
            autor = re.sub(r'(\s* \W)|(\A\s)', "", infos[6])
            despacho = re.sub(r'(\s* \W)|(\A\s)', "", infos[8])

        yield {
            'tipo': tipo,
            'numero': numero,
            'data': data1,
            'processo': processo,
            'ementa': ementa,
            'observacao': observacao,
            'autor': autor,
            'despacho': despacho,
        }
        return