from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_mongoengine import viewsets
from .serializers import PLOSerializers
from .models import PLO

# Create your views here.

@api_view(['GET'])
def index(request, format=None):
    return Response({
       'plo': 'http://localhost:8000/api/v1.0/plo/',
    })

class PLOViewSet(viewsets.ModelViewSet):
    lookup_field = 'numero'
    serializer_class = PLOSerializers
    queryset = PLO.objects.all()