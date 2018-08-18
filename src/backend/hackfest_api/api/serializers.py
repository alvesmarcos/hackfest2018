from rest_framework_mongoengine import serializers
from .models import PLO

class PLOSerializers(serializers.DocumentSerializer):
    class Meta:
        model = PLO
        fields = '__all__'

