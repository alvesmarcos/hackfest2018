from django.db import models
from mongoengine import Document,fields

# Create your models here.

class PLO(Document):
	numero = fields.StringField(required=True, null=False)
	autor = fields.StringField(required=False, null=True)
	ementa = fields.StringField(required=True, null=False)
	em_tramitacao = fields.BooleanField(required=True, null=False)
	eh_polemico = fields.BooleanField(required=True, null=False)
	apelido = fields.StringField(required=False, null=True)
	tramites = fields.StringField(required=False, null=True)
	texto_integral = fields.URLField(required=False, null=True)

