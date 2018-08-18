import scrapy
import re
import json

class PLOSSpider(scrapy.Spider):
    name = "plos"
    start_urls = [
        'http://177.200.32.195:9673/sapl/generico/materia_pesquisar_proc?page=1&step=8&dt_votac=&txt_relator=&txt_numero=&dt_public2=&lst_tip_autor=&txt_num_protocolo=&hdn_txt_autor=&dt_votac2=&txt_ano=&rd_ordem_td=1&dat_sessao=00/00/0000&hdn_cod_autor=&lst_localizacao=&lst_tip_materia=1&txt_assunto=&btn_materia_pesquisar=Pesquisar&rad_tramitando=&incluir=0&rd_ordenacao=1&dt_apres2=&lst_cod_partido=&chk_coautor=&lst_status=&dt_public=&total_materias=77897&txt_npc=&existe_ocorrencia=0&dt_apres=',
    ]

    def __init__(self):
        with open('../../../../data/links.json', 'r') as json_data:
            self.json_content = json.load(json_data)
    
    def start_requests(self):
        for json_item in self.json_content:
                for link in json_item['url']:
                    # print(link)
                    yield scrapy.Request(url=link, callback=self.parse)

    def parse(self, response):
        ## primeiro fieldset da página

        wanted_unique_fields = ['Número', 'Processo', 'Ementa', 'Indexação', 'Autor', 'Texto Integral','Apelido', 'Objeto', 'Em Tramitação', 'Matéria Polêmica', 'Regime Tramitação']

        list_keys = response.xpath("//fieldset[contains(.//legend//text(), 'Identificação Básica')]//td/b/text()").extract()
        list_keys += response.xpath("//fieldset[contains(.//legend//text(), 'Outras Informações')]//td/b/text()").extract()
        list_keys.pop(list_keys.index('Texto Integral:'))
        
        list_data = response.xpath("//fieldset[contains(.//legend//text(), 'Identificação Básica')]//td/text()").extract()
        list_data += response.xpath("//fieldset[contains(.//legend//text(), 'Outras Informações')]//td/text()").extract()
        
        list_data = [val.replace('\n', '').strip() for val in list_data if val.strip()]

        # print(len(list_keys))
        # print(len(list_data))
        # print(list_keys, end="\n"*2)
        # print(list_data, end="\n"*4)

        texto_integral = response.xpath("//fieldset[1]/table/tr/td[@class = 'texto']/a/@href").extract_first()
        dict_first_fieldset = {}

        assert(len(list_keys) == len(list_data)), "Seu parser está fud#$%!"

        for key, data in zip(list_keys, list_data):
            key = key.replace(':', '').replace('?','').replace('\n', '').replace('\\xa0','').strip()
            # print('{}: {}'.format(key, data))
            if key in wanted_unique_fields:
                dict_first_fieldset[key] = data.replace('\n','').strip()

        dict_first_fieldset['Texto Integral'] = texto_integral

        clean = lambda x_str: x_str.replace('\n','').replace('  ', '').replace(' -', '').strip()
        list_tramitacao_keys = response.xpath("//fieldset[contains(.//legend//text(), 'Tramitação')]//td/b/text()").extract()
        list_tramitacao_keys = [clean(val) for val in list_tramitacao_keys if val.strip()]

        list_tramitacao_data = response.xpath("//fieldset[contains(.//legend//text(), 'Tramitação')]//td/text()").extract()
        list_tramitacao_data = [clean(val) for val in list_tramitacao_data if val.strip()]

        assert(len(list_tramitacao_keys) == len(list_tramitacao_data)), "Seu parser está fud#$%!"

        dict_tramitacao = []
        for i in range(0, len(list_tramitacao_data), 6):
            keys = list_tramitacao_keys[i:i+6]
            vals = list_tramitacao_data[i:i+6]
            dict_tramitacao.append(dict(zip(keys, vals)))

        dict_first_fieldset['Tramites'] = dict_tramitacao
        yield dict_first_fieldset
