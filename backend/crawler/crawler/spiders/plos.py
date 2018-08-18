import scrapy
import re

class QuotesSpider(scrapy.Spider):
    name = "plo"
    start_urls = [
        'http://177.200.32.195:9673/sapl/generico/materia_pesquisar_proc?page=1&step=8&dt_votac=&txt_relator=&txt_numero=&dt_public2=&lst_tip_autor=&txt_num_protocolo=&hdn_txt_autor=&dt_votac2=&txt_ano=&rd_ordem_td=1&dat_sessao=00/00/0000&hdn_cod_autor=&lst_localizacao=&lst_tip_materia=1&txt_assunto=&btn_materia_pesquisar=Pesquisar&rad_tramitando=&incluir=0&rd_ordenacao=1&dt_apres2=&lst_cod_partido=&chk_coautor=&lst_status=&dt_public=&total_materias=77897&txt_npc=&existe_ocorrencia=0&dt_apres=',
    ]

    def __init__(self):
        with open('../../links.json') as json_data:
            self.links = json.load(json_data)
    
    def start_requests(self):
        
        for link in self.links:
            yield scrapy.Request(url=link, callback=self.parse)


    def parse(self, response):


        
        urls = response.xpath('//td[@class="texto"]/a[1]/@href').extract()
        
        # for url in urls:
        #     yield scrapy.Request(url=url, callback=self.getInfo)

        yield{ 
            'url': urls,
        }
        
        next = response.xpath('//a[contains(.//text(), ">>")]//@href').extract_first()
        
        yield scrapy.Request(url='http://177.200.32.195:9673/sapl/generico/'+next, callback=self.parse)



    # def getInfo(self, response):
    #     infos = response.css("fieldset table td::text").extract()

    #     #-#-#-#-#-#-#-#     Filtra as infos necessarias       #-#-#-#-#-#-#-#-#
        
    #     tipo = re.sub(r'(\s* \W)|(\A\s)', "", infos[0])
    #     numero = re.sub(r'(\s* \W)|(\A\s)', "", infos[1])
    #     data1 = re.sub(r'(\s* \W)|(\A\s)', "", infos[2])

    #     ementa = re.sub(r'(\s* \W)|(\A\s)', "", infos[3])
    #     autor = re.sub(r'(\s* \W)|(\A\s)', "", infos[6])
                

    #     #-#-#-#-#-#-#-#     Posta no JSON          #-#-#-#-#-#-#-#-#

    #     yield {
    #         'tipo': tipo,
    #         'numero': numero,
    #         'dataEntrada': data1,
    #         'autor(a)': autor,
    #         'tramitacao': tramitacao,
    #         'polemica': polemica,
    #         'origem': origem,
    #         'destino': destino,
    #         'ementa': ementa,
    #         }