import django_filters
from .models import Ambiente, Sensor

class AmbienteFilter(django_filters.FilterSet):
    nome = django_filters.CharFilter(lookup_expr='icontains')  
    localizacao = django_filters.CharFilter(lookup_expr='icontains')  

    class Meta:
        model = Ambiente
        fields = ['nome', 'localizacao']

class SensorFilter(django_filters.FilterSet):
    tipo = django_filters.CharFilter(lookup_expr='icontains')
    status = django_filters.CharFilter(lookup_expr='exact')

    class Meta:
        model = Sensor
        fields = ['tipo', 'status']
