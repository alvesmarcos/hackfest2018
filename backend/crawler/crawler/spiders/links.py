import scrapy
import re

class QuotesSpider(scrapy.Spider):
    name = "links"
    start_urls = [
        'http://177.200.32.195:9673/sapl/generico/materia_pesquisar_proc?page=1&step=8&dt_votac=&txt_relator=&txt_numero=&dt_public2=&lst_tip_autor=&txt_num_protocolo=&hdn_txt_autor=&dt_votac2=&txt_ano=&rd_ordem_td=1&dat_sessao=00/00/0000&hdn_cod_autor=&lst_localizacao=&lst_tip_materia=1&txt_assunto=&btn_materia_pesquisar=Pesquisar&rad_tramitando=&incluir=0&rd_ordenacao=1&dt_apres2=&lst_cod_partido=&chk_coautor=&lst_status=&dt_public=&total_materias=77897&txt_npc=&existe_ocorrencia=0&dt_apres=',
    ]

    def parse(self, response):
        urls = response.xpath('//td[@class="texto"]/a[1]/@href').extract()
        
        # for url in urls:
        #     yield scrapy.Request(url=url, callback=self.getInfo)

        yield{ 
            'url': urls,
        }
        
        next = response.xpath('//a[contains(.//text(), ">>")]//@href').extract_first()
        
        yield scrapy.Request(url='http://177.200.32.195:9673/sapl/generico/'+next, callback=self.parse)
